import { POSTS } from "@/content/blog";

/**
 * The blog, from files in the repo (`content/blog/`). No CMS yet: nine
 * posts do not need one, and a post in the repo is reviewed like code.
 * SyrupDesk moved to Sanity once it had ten; do the same here then.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: ReadonlyArray<string> }
  | { type: "ol"; items: ReadonlyArray<string> }
  /** A small table. `caption` is read out by screen readers and is not
   *  shown; the first cell of each row is that row's heading. */
  | { type: "table"; caption: string; head: ReadonlyArray<string>; rows: ReadonlyArray<ReadonlyArray<string>> };

export type Post = {
  slug: string;
  title: string;
  /** A shorter title for the browser tab and search results. */
  metaTitle: string;
  /** Meta description and the card's summary. */
  description: string;
  /** ISO date. */
  published: string;
  updated?: string;
  /** Pages on this site the post should send the reader to. */
  related: ReadonlyArray<{ href: string; label: string }>;
  body: ReadonlyArray<Block>;
};

export function getAllPosts(): ReadonlyArray<Post> {
  return [...POSTS].sort((a, b) => b.published.localeCompare(a.published));
}

export function getPost(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

/** Every word a reader reads in one block. */
function blockText(block: Block): ReadonlyArray<string> {
  if (block.type === "table") return [...block.head, ...block.rows.flat()];
  return "text" in block ? [block.text] : block.items;
}

export function wordCount(post: Post) {
  return post.body.flatMap(blockText).join(" ").split(/\s+/).filter(Boolean).length;
}

/** Reading time at about 200 words a minute, never less than one. */
export function readingMinutes(post: Post) {
  return Math.max(1, Math.round(wordCount(post) / 200));
}
