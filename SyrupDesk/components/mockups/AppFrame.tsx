import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Chrome for the product mockups.
 *
 * These are rendered in CSS rather than shipped as PNGs: no image
 * weight on a 4G connection, no layout shift, and the numbers stay
 * crisp at 200% zoom. `role="img"` + `aria-label` gives assistive
 * tech one meaningful description instead of a fake table read cell
 * by cell, while leaving the text in the HTML.
 *
 * TODO: swap for real screenshots once the product UI ships.
 */
export function AppFrame({
  label,
  title,
  children,
  className,
}: {
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "overflow-hidden rounded-md border border-ink-200 bg-surface shadow-lg",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-ink-200 bg-surface-alt px-4 py-3">
        <span className="size-2.5 rounded-full bg-ink-200" />
        <span className="size-2.5 rounded-full bg-ink-200" />
        <span className="size-2.5 rounded-full bg-ink-200" />
        <p className="ml-2 truncate text-micro font-medium uppercase tracking-wider text-ink-500">
          {title}
        </p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
