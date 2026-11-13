import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";
import { LOGO_HEIGHT, LOGO_WIDTH } from "@/lib/editions";

/**
 * The Curogrid lockup, from Curogrid Brand Kit v2 (public/brand), cropped
 * to the artwork by scripts/brand-lockups.py, never redrawn.
 * Two files, one per background, so a failed load is a visible gap and
 * not an invisible logo.
 *
 * `edition` swaps in a speciality's own lockup ("Curogrid Physio", see
 * lib/editions.ts). It is wider than the plain logo at the same height,
 * so it carries its own width.
 */
const SRC = { light: "/logo.svg", dark: "/logo-reversed.svg" } as const;

export type LogoEdition = { name: string; logo: { light: string; dark: string; width: number; height: number } };

export function Logo({
  tone = "light",
  edition,
  className,
}: {
  tone?: keyof typeof SRC;
  edition?: LogoEdition;
  className?: string;
}) {
  const src = edition ? edition.logo[tone] : SRC[tone];
  const height = edition?.logo.height ?? LOGO_HEIGHT;
  // With the mark the logo is 40px high. Without it (an edition) the
  // lettering sets the height, so 24px keeps "Curogrid" the same size.
  const withMark = height === LOGO_HEIGHT;
  return (
    // An SVG with no raster to optimise; next/image would add nothing.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={edition?.name ?? SITE.name}
      width={edition?.logo.width ?? LOGO_WIDTH}
      height={height}
      className={cn(withMark ? "h-10" : "h-6", "w-auto", className)}
    />
  );
}
