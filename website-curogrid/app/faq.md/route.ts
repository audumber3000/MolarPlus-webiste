import { MARKDOWN_HEADERS, faqMarkdown } from "@/content/markdown";

/**
 * /faq.md: every question on /faq as Markdown, for AI assistants.
 * Built from content/faq.ts, so it cannot disagree with the page.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(faqMarkdown().join("\n"), { headers: MARKDOWN_HEADERS });
}
