import { TEXT_HEADERS, fullMarkdown } from "@/content/markdown";

/**
 * /llms-full.txt: the whole site as one Markdown file, so an AI
 * assistant gets every fact in a single request and does not have to
 * crawl. The companion to /llms.txt, which is the short index.
 *
 * Built by content/markdown.ts from the same data files as the pages.
 * Nothing in it is typed by hand, so it cannot drift from the site.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(fullMarkdown().join("\n"), { headers: TEXT_HEADERS });
}
