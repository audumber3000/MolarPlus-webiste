import { MARKDOWN_HEADERS, pricingMarkdown } from "@/content/markdown";

/**
 * /pricing.md: the price list as plain Markdown, for AI assistants and
 * buying agents that compare products without rendering a page. Built
 * by content/markdown.ts from content/pricing.ts, so it cannot disagree
 * with /pricing.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(pricingMarkdown().join("\n"), { headers: MARKDOWN_HEADERS });
}
