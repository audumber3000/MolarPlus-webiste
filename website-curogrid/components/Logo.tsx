import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

/**
 * The Curogrid lockup: the logo kit's own SVG files, never redrawn.
 * Two files, one per background, so a failed load is a visible gap and
 * not an invisible logo.
 */
const SRC = { light: "/logo.svg", dark: "/logo-reversed.svg" } as const;

export function Logo({ tone = "light", className }: { tone?: keyof typeof SRC; className?: string }) {
  return (
    // An SVG with no raster to optimise; next/image would add nothing.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={SRC[tone]} alt={SITE.name} width={339} height={108} className={cn("h-9 w-auto", className)} />
  );
}
