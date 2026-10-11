import { MARKDOWN_HEADERS, featuresMarkdown } from "@/content/markdown";

/**
 * /features.md: /features and the four feature pages as Markdown, for
 * AI assistants. Built from content/features.ts, the file the pages
 * themselves render, so it cannot disagree with them.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(featuresMarkdown().join("\n"), { headers: MARKDOWN_HEADERS });
}
