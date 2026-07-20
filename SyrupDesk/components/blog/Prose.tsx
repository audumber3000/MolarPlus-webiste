import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Article body typography. Styled with child selectors rather than
 * @tailwindcss/typography so the scale stays on our own tokens — the
 * plugin ships its own sizes and would put body copy below the 16px
 * floor the brief sets.
 *
 * Measure is capped at 65ch to keep long-form readable.
 */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "text-body text-ink-700",
        "[&>*+*]:mt-5",
        "[&>p]:max-w-[65ch]",
        "[&>ul]:max-w-[65ch] [&>ol]:max-w-[65ch]",
        // Headings get extra space above, none of it collapsing.
        "[&>h2]:mt-12 [&>h2]:text-h3 [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-ink-900",
        "[&>h3]:mt-10 [&>h3]:text-h4 [&>h3]:font-semibold [&>h3]:text-ink-900",
        "[&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6",
        "[&_li]:mt-2 [&_li]:pl-1",
        "[&_strong]:font-semibold [&_strong]:text-ink-900",
        "[&_a]:font-medium [&_a]:text-green-700 [&_a]:underline [&_a]:underline-offset-4",
        // Pull-quote / callout blocks inside posts.
        "[&>blockquote]:border-l-4 [&>blockquote]:border-green-200 [&>blockquote]:bg-green-50",
        "[&>blockquote]:rounded-r-sm [&>blockquote]:px-6 [&>blockquote]:py-4 [&>blockquote]:text-ink-700",
        className,
      )}
    >
      {children}
    </div>
  );
}
