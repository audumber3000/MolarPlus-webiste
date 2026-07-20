import Image from "next/image";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

/** Nav sits on white; the footer sits on green-700. The mark, the
 *  "Desk" colour and the ledger rules all have to flip together. */
type Tone = "light" | "dark";

/**
 * Full icon artwork, bottle plus the loose pills.
 *
 * Note the pills occupy the right ~40% of the image but sit entirely
 * below its midline, so at cap height that strip is empty and reads as
 * extra space between the mark and the wordmark. That gap is in the
 * artwork, not in the flex `gap` below.
 */
const MARK = {
  light: { src: "/logo-mark.png", width: 112, height: 160 },
  dark: { src: "/logo-mark-white.png", width: 115, height: 160 },
} as const;

/**
 * The "D" of Desk, drawn as a ledger inside the bowl rather than set in
 * the body font.
 *
 * The bowl is a real counter — an evenodd hole — not a solid shape with
 * white bars painted over it. That matters twice: without a counter the
 * glyph reads as an "E" rather than a "D", and because the hole lets
 * the background through, the same markup works on white and on the
 * footer's green-700 with no background-matched fill to keep in sync.
 */
function DeskD({ tone }: { tone: Tone }) {
  return (
    <svg
      viewBox="16 6 83 78"
      aria-hidden="true"
      focusable="false"
      className={cn(
        "h-[0.78em] w-auto fill-current",
        tone === "dark" ? "text-green-300" : "text-green-500",
      )}
    >
      <path
        fillRule="evenodd"
        d="M20 10 h40 c20 0 35 15 35 35 s-15 35-35 35 h-40 z
           M38 26 v38 h22 c11 0 19-8 19-19 s-8-19-19-19 z"
      />
      {/* ledger rules, sitting inside the counter */}
      <rect x="44" y="33" width="26" height="4" />
      <rect x="44" y="43" width="26" height="4" />
      <rect x="44" y="53" width="18" height="4" />
    </svg>
  );
}

/**
 * `byline` sets the "by Clino Health" parent-brand lockup under the
 * wordmark — on in the nav and footer, off wherever the logo appears
 * inline. Micro type is reserved for labels like this (see tokens).
 *
 * The wordmark is assembled from three pieces (text + SVG glyph +
 * text), so it is hidden from assistive tech and the real name is
 * exposed once via sr-only. Without that a screen reader announces
 * "Syrupesk".
 */
export function Logo({
  className,
  byline = false,
  tone = "light",
}: {
  className?: string;
  byline?: boolean;
  tone?: Tone;
}) {
  const mark = MARK[tone];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="sr-only">{SITE.name}</span>

      <Image
        src={mark.src}
        alt=""
        width={mark.width}
        height={mark.height}
        priority
        className="h-9 w-auto shrink-0"
      />

      <span aria-hidden="true" className="inline-flex flex-col leading-none">
        <span className="flex items-baseline text-h4 font-bold tracking-tight">
          Syrup
          <DeskD tone={tone} />
          <span className={cn("-ml-[0.04em]", tone === "dark" ? "text-green-300" : "text-green-500")}>
            esk
          </span>
        </span>
        {byline && (
          <span className="mt-0.5 text-micro font-medium tracking-tight opacity-70">
            by {SITE.parent}
          </span>
        )}
      </span>
    </span>
  );
}
