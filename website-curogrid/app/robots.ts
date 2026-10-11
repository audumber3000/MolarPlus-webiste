import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Everything public is open to every crawler, and the AI crawlers are
 * named so the intent is on the record: being read and quoted by AI
 * search is a goal of this site, not a risk to it. Naming a bot here
 * does not grant anything `*` did not; it guards against a later edit
 * to `*` shutting them out by accident.
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: ["/api/"] },
    ],
    // No `host` line: only Yandex ever read it, it has been dropped
    // there too, and it takes a bare hostname, not a URL.
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
