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
  linkByline = false,
}: {
  className?: string;
  byline?: boolean;
  tone?: Tone;
  /**
   * Render the byline as a link to the parent company.
   *
   * Off by default, and that default is load-bearing: in the navbar this
   * component sits inside a `<Link href="/">`, and an anchor nested in an
   * anchor is invalid markup browsers resolve however they like. Turn it
   * on only where the lockup is NOT already inside a link — the footer.
   */
  linkByline?: boolean;
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

      {/* aria-hidden sits on the WORDMARK only, not on the column.
          It has to: the wordmark is three pieces (text + glyph + text)
          that a screen reader announces as "Syrupesk", which is why the
          real name is exposed once via sr-only above. But the byline
          below is a genuine link to another site — left inside an
          aria-hidden subtree it would be focusable and invisible to
          assistive tech at the same time, which is worse than either. */}
      <span className="inline-flex flex-col leading-none">
        <span aria-hidden="true" className="flex items-baseline text-h4 font-bold tracking-tight">
          Syrup
          <DeskD tone={tone} />
          <span className={cn("-ml-[0.04em]", tone === "dark" ? "text-green-300" : "text-green-500")}>
            esk
          </span>
        </span>
        {byline &&
          (linkByline ? (
            <a
              href={SITE.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 text-micro font-medium tracking-tight opacity-70 underline-offset-2 transition-opacity duration-200 ease-out hover:opacity-100 hover:underline"
            >
              by {SITE.parent}
            </a>
          ) : (
            <span
              aria-hidden="true"
              className="mt-0.5 text-micro font-medium tracking-tight opacity-70"
            >
              by {SITE.parent}
            </span>
          ))}
      </span>
    </span>
  );
}
