/**
 * One way migration: the local TSX posts in content/blog into Sanity.
 *
 * Each post exports `meta` and a `Body` component built from a small set of
 * tags (p, h2, h3, ul, ol, li, strong, em, a, blockquote). We render that to
 * HTML, walk the DOM and emit Portable Text. Doing it through the real render
 * means what lands in Sanity is what the site was actually showing, rather
 * than a second transcription of it that can drift.
 *
 * Re-runnable: documents use a deterministic id (post-<slug>) and are written
 * with createOrReplace, so running twice does not duplicate anything.
 *
 *   npx tsx scripts/migrate-posts-to-sanity.ts [--dry]
 */
import { readFileSync, existsSync } from "node:fs";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
import { createClient } from "@sanity/client";
import { POSTS } from "../content/blog";
import { apiVersion, dataset, projectId } from "../sanity/env";

const DRY = process.argv.includes("--dry");

function token(): string {
  const fromEnv = process.env.SANITY_API_WRITE_TOKEN;
  if (fromEnv) return fromEnv;
  // Fall back to the Sanity CLI's own session, so a developer who has run
  // `sanity login` does not need to mint a token to migrate.
  const cfg = `${process.env.HOME}/.config/sanity/config.json`;
  if (existsSync(cfg)) {
    const parsed = JSON.parse(readFileSync(cfg, "utf8")) as { authToken?: string };
    if (parsed.authToken) return parsed.authToken;
  }
  throw new Error("No SANITY_API_WRITE_TOKEN and no Sanity CLI session found.");
}

const client = createClient({ projectId, dataset, apiVersion, token: token(), useCdn: false });

let keySeq = 0;
const key = () => `k${(keySeq++).toString(36)}`;

type Span = { _type: "span"; _key: string; text: string; marks: string[] };
type Block = {
  _type: "block";
  _key: string;
  style: string;
  listItem?: "bullet" | "number";
  level?: number;
  markDefs: Array<{ _type: "link"; _key: string; href: string }>;
  children: Span[];
};

/** Inline nodes to spans, carrying strong/em marks and link annotations. */
function spans(node: Node, marks: string[], markDefs: Block["markDefs"]): Span[] {
  const out: Span[] = [];
  node.childNodes.forEach((child) => {
    if (child.nodeType === 3) {
      const text = child.textContent ?? "";
      if (text) out.push({ _type: "span", _key: key(), text, marks: [...marks] });
      return;
    }
    if (child.nodeType !== 1) return;
    const el = child as unknown as Element;
    const tag = el.tagName.toLowerCase();
    if (tag === "strong" || tag === "b") return void out.push(...spans(child, [...marks, "strong"], markDefs));
    if (tag === "em" || tag === "i") return void out.push(...spans(child, [...marks, "em"], markDefs));
    if (tag === "a") {
      const href = el.getAttribute("href") ?? "";
      const defKey = key();
      markDefs.push({ _type: "link", _key: defKey, href });
      return void out.push(...spans(child, [...marks, defKey], markDefs));
    }
    if (tag === "br") return void out.push({ _type: "span", _key: key(), text: "\n", marks: [...marks] });
    out.push(...spans(child, marks, markDefs));
  });
  return out;
}

function block(el: Element, style: string, listItem?: "bullet" | "number"): Block {
  const markDefs: Block["markDefs"] = [];
  const children = spans(el as unknown as Node, [], markDefs);
  return {
    _type: "block",
    _key: key(),
    style,
    ...(listItem ? { listItem, level: 1 } : {}),
    markDefs,
    children,
  };
}

function toPortableText(html: string): Block[] {
  const { window } = new JSDOM(`<div id="root">${html}</div>`);
  const root = window.document.getElementById("root")!;
  const blocks: Block[] = [];

  const walk = (parent: Element) => {
    Array.from(parent.children).forEach((el) => {
      const tag = el.tagName.toLowerCase();
      if (tag === "p") blocks.push(block(el, "normal"));
      else if (tag === "h2" || tag === "h3") blocks.push(block(el, tag));
      else if (tag === "ul" || tag === "ol") {
        const kind = tag === "ul" ? "bullet" : "number";
        Array.from(el.children).forEach((li) => blocks.push(block(li, "normal", kind)));
      } else if (tag === "blockquote") {
        // A blockquote holds paragraphs; Portable Text carries the quote as a
        // style on each block, so they flatten rather than nest.
        const inner = Array.from(el.children).filter((c) => c.tagName.toLowerCase() === "p");
        (inner.length ? inner : [el]).forEach((c) => blocks.push(block(c, "blockquote")));
      } else walk(el);
    });
  };

  walk(root);
  return blocks.filter((b) => b.children.some((c) => c.text.trim() !== ""));
}

async function uploadCover(slug: string) {
  const file = `public/blog/${slug}.webp`;
  if (!existsSync(file)) return undefined;
  if (DRY) return "dry-run-asset";
  const asset = await client.assets.upload("image", readFileSync(file), {
    filename: `${slug}.webp`,
  });
  return asset._id;
}

async function main() {
  console.log(`${DRY ? "DRY RUN " : ""}migrating ${POSTS.length} posts into ${projectId}/${dataset}\n`);
  for (const post of POSTS) {
    const html = renderToStaticMarkup(createElement(post.body));
    const body = toPortableText(html);
    const assetId = await uploadCover(post.slug);
    const doc = {
      _id: `post-${post.slug}`,
      _type: "post",
      title: post.title,
      slug: { _type: "slug", current: post.slug },
      description: post.description,
      tag: post.tag,
      publishedAt: new Date(`${post.published}T09:00:00+05:30`).toISOString(),
      ...(post.updated ? { updatedAt: new Date(`${post.updated}T09:00:00+05:30`).toISOString() } : {}),
      readingMinutes: post.readingMinutes,
      ...(assetId
        ? {
            coverImage: {
              _type: "image",
              asset: { _type: "reference", _ref: assetId },
              alt: post.coverAlt ?? "",
            },
          }
        : {}),
      body,
    };
    if (!DRY) await client.createOrReplace(doc);
    console.log(
      `  ${DRY ? "would write" : "wrote"} post-${post.slug}  ${body.length} blocks  cover:${assetId ? "yes" : "no"}`,
    );
  }
  console.log("\ndone");
}

void main();
