import type { ComponentType } from "react";
import { POSTS } from "@/content/blog";

export type BlogPost = {
  slug: string;
  title: string;
  /** Used for the listing card, the meta description and OG. Keep it
   *  under ~155 characters so search results don't truncate it. */
  description: string;
  /** ISO date. Shown to readers and emitted in Article JSON-LD. */
  published: string;
  updated?: string;
  /** Short category label for the listing card. Doubles as the
   *  filter facet in the blog sidebar. */
  tag: string;
  readingMinutes: number;
  /** Path under /public, e.g. "/blog/expiry.jpg". Optional — cards
   *  fall back to a tinted panel when a post has no art, so a missing
   *  image reads as deliberate rather than broken. */
  coverImage?: string;
  body: ComponentType;
};

/**
 * A post minus its body component. The listing is filtered in a
 * client component, and `body` is a function — React cannot serialize
 * it across the server/client boundary, so the listing must never
 * carry it.
 */
export type BlogPostSummary = Omit<BlogPost, "body">;

export function getAllPostSummaries(): BlogPostSummary[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return getAllPosts().map(({ body, ...summary }) => summary);
}

/** Tag facets with counts, newest-first order preserved. Used by the
 *  sidebar filter. */
export function getTags(): Array<{ name: string; count: number }> {
  const counts = new Map<string, number>();
  for (const post of getAllPosts()) {
    counts.set(post.tag, (counts.get(post.tag) ?? 0) + 1);
  }
  return [...counts.entries()].map(([name, count]) => ({ name, count }));
}

/** Newest first. The array in content/blog is authored in whatever
 *  order is convenient, so sorting happens here rather than there. */
export function getAllPosts(): BlogPost[] {
  return [...POSTS].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}

/** en-IN long form, e.g. "12 February 2026". */
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
