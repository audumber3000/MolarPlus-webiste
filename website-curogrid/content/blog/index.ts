import type { Post } from "@/lib/blog";
import { GUIDE_POSTS } from "./guides";
import { SPECIALITY_POSTS } from "./specialities";

/**
 * Every post. The order here does not matter: lib/blog.ts sorts by date.
 * `guides.ts` holds the general guides; `specialities.ts` holds one
 * practical guide for each speciality page.
 *
 * House rules for a post:
 * - No statistic without a source we can link. If we do not have one,
 *   write the sentence without the number.
 * - Say what Curogrid does only where the product really does it, and
 *   say what it does not do when a reader would assume it.
 * - Every post names the pages it should send the reader to (`related`).
 * - Open the post, and each section, with the direct answer. A reader
 *   or a search engine should be able to lift any section on its own.
 * - Running the clinic only. No doses, treatment protocols or
 *   vaccination schedules; a law is named in general terms, with the
 *   advice to check the current rule, unless the primary source is cited.
 * - `metaTitle` is at most 49 characters (the site adds " | Curogrid");
 *   `description` is 110 to 158.
 */
export const POSTS: ReadonlyArray<Post> = [...GUIDE_POSTS, ...SPECIALITY_POSTS];

// The limits above, enforced: a post that breaks one stops the page from
// rendering, in development and at build, so it is found before it ships.
for (const post of POSTS) {
  if (post.metaTitle.length > 49) throw new Error(`content/blog: metaTitle of "${post.slug}" is over 49 characters`);
  if (post.description.length < 110 || post.description.length > 158) {
    throw new Error(`content/blog: description of "${post.slug}" must be 110 to 158 characters`);
  }
}
if (new Set(POSTS.map((post) => post.slug)).size !== POSTS.length) throw new Error("content/blog: two posts share a slug");
