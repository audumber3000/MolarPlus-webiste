import type { PortableTextBlock } from "@portabletext/react";
import { sanityClient } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { Image } from "sanity";

/**
 * Posts come from Sanity.
 *
 * They used to be TSX modules in content/blog. Those files are still in the
 * repo because `scripts/migrate-posts-to-sanity.ts` renders them to produce
 * what is now in the dataset, but nothing on the site reads them any more:
 * editing a post means editing it in the Studio.
 *
 * The shapes below are deliberately the same ones the components already
 * took, so the listing, the cards and the sidebar did not need rewriting.
 * `coverImage` is resolved to a plain URL here rather than passed through as
 * a Sanity reference, because the listing is a client component and an
 * image reference means nothing to it.
 */
export type BlogPostSummary = {
  slug: string;
  title: string;
  description: string;
  /** ISO date. Shown to readers and emitted in Article JSON-LD. */
  published: string;
  updated?: string;
  /** Short topic label. Doubles as the sidebar filter facet. */
  tag: string;
  readingMinutes: number;
  coverImage?: string;
  coverAlt?: string;
};

export type BlogPost = BlogPostSummary & {
  body: PortableTextBlock[];
};

type RawPost = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated?: string;
  tag: string;
  readingMinutes: number;
  cover?: Image & { alt?: string };
  body?: PortableTextBlock[];
};

const FIELDS = `
  "slug": slug.current,
  title,
  description,
  "published": publishedAt,
  "updated": updatedAt,
  tag,
  readingMinutes,
  "cover": coverImage
`;

/** Cards are 16:10; 1200 wide covers a 2x phone and a 1x card. */
function summarise(raw: RawPost): BlogPostSummary {
  return {
    slug: raw.slug,
    title: raw.title,
    description: raw.description,
    published: raw.published,
    updated: raw.updated ?? undefined,
    tag: raw.tag,
    readingMinutes: raw.readingMinutes,
    coverImage: raw.cover ? urlForImage(raw.cover, 1200, 750) : undefined,
    coverAlt: raw.cover?.alt ?? "",
  };
}

/** Newest first. */
export async function getAllPostSummaries(): Promise<BlogPostSummary[]> {
  const raw = await sanityClient.fetch<RawPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) { ${FIELDS} }`,
  );
  return raw.map(summarise);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const raw = await sanityClient.fetch<RawPost | null>(
    `*[_type == "post" && slug.current == $slug][0] { ${FIELDS}, body }`,
    { slug },
  );
  if (!raw) return undefined;
  return { ...summarise(raw), body: raw.body ?? [] };
}

/** Tag facets with counts, newest-first order preserved. */
export async function getTags(): Promise<Array<{ name: string; count: number }>> {
  const posts = await getAllPostSummaries();
  const counts = new Map<string, number>();
  for (const post of posts) counts.set(post.tag, (counts.get(post.tag) ?? 0) + 1);
  return [...counts.entries()].map(([name, count]) => ({ name, count }));
}

/** en-IN long form, e.g. "12 February 2026". */
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}
