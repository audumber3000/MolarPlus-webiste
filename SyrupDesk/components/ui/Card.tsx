import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Border-first, not shadow-first: a 1px hairline keeps static cards
 * sitting on the page. Shadow is reserved for things that float.
 * The hover lift only applies when the whole card is clickable.
 */
export function Card({
  interactive = false,
  tone = "default",
  className,
  children,
}: {
  interactive?: boolean;
  tone?: "default" | "dark";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-md p-6",
        tone === "dark"
          ? "border border-green-600 bg-green-800"
          : "border border-ink-200 bg-surface",
        interactive &&
          "transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
