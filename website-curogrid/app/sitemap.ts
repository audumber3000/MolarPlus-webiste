import type { MetadataRoute } from "next";
import { FACTS_CHECKED, SITE } from "@/lib/site";
import { getRouteGroups } from "@/lib/routes";
import { getPost } from "@/lib/blog";

/**
 * `lastmod` is only worth sending if it is true. Google uses it when it
 * proves accurate and learns to ignore it when every page claims to
 * have changed on every deploy, which is what a build timestamp does.
 *
 * So each page gets the best date we really have:
 * - a blog post has its own published or updated date;
 * - a page rendered from the checked product data (`facts` in
 *   lib/routes.ts) uses `FACTS_CHECKED`, the day those facts were last
 *   checked against the app and a date a person keeps up to date;
 * - every other page sends no date at all.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return getRouteGroups()
    .flatMap((group) => group.routes)
    .filter((route) => route.index !== false)
    .map((route) => {
      const post = route.path.startsWith("/blog/") ? getPost(route.path.slice("/blog/".length)) : undefined;
      const lastModified = post ? (post.updated ?? post.published) : route.facts ? FACTS_CHECKED.iso : undefined;
      return {
        url: `${SITE.url}${route.path === "/" ? "" : route.path}`,
        ...(lastModified && { lastModified }),
        changeFrequency: post ? ("yearly" as const) : ("monthly" as const),
        priority: route.priority,
      };
    });
}
