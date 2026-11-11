import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

/**
 * The Curogrid lockup: the logo kit's own SVG files, never redrawn.
 * Two files, one per background, so a failed load is a visible gap and
 * not an invisible logo.
 *
 * `edition` swaps in a speciality's own lockup ("Curogrid Physio", see
 * lib/editions.ts). It is wider than the plain logo at the same height,
 * so it carries its own width.
 */
const SRC = { light: "/logo.svg", dark: "/logo-reversed.svg" } as const;

export type LogoEdition = { name: string; logo: { light: string; dark: string; width: number } };

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
  return (
    // An SVG with no raster to optimise; next/image would add nothing.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={edition?.name ?? SITE.name}
      width={edition?.logo.width ?? 339}
      height={108}
      className={cn("h-9 w-auto", className)}
    />
  );
}
