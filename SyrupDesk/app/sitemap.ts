import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

/** Priority reflects commercial intent: pricing and features are the
 *  pages we want ranking.
 *
 *  TODO (blocks launch): /privacy and /terms are linked from the footer
 *  on every page but have no route — they 404. They were listed here
 *  too, which submits known 404s to Google and suppresses trust for a
 *  product that handles GST and customer data. Removed from the
 *  sitemap until the pages exist; re-add both at 0.2/yearly then.
 *  The legal copy needs a human, so it is not stubbed here. */
const ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/features", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  // Posts carry their own publish date rather than the build date, so
  // lastmod stays honest and crawlers aren't told everything changed.
  const postRoutes = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.published),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
