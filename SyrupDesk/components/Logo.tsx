import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

/**
 * Wordmark only — no icon. Inherits colour from the parent via
 * currentColor, so the nav renders it green and the footer white.
 *
 * `byline` sets the "by Clino Health" parent-brand lockup under the
 * wordmark — on in the nav and footer, off wherever the logo appears
 * inline. Micro type is reserved for labels like this (see tokens).
 */
export function Logo({ className, byline = false }: { className?: string; byline?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="text-h4 font-bold tracking-tight">{SITE.name}</span>
      {byline && (
        <span className="mt-0.5 text-micro font-medium tracking-tight opacity-70">
          by {SITE.parent}
        </span>
      )}
    </span>
  );
}
