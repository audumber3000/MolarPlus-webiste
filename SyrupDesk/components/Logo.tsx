import Image from "next/image";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

/**
 * The SyrupDesk lockup — the real artwork, the same files the product
 * itself ships.
 *
 * What was here before was a hand-built approximation: a bottle-and-pills
 * PNG beside the word "SyrupDesk" set in the body font, with the D of
 * "Desk" drawn as an inline SVG. It was close enough to look deliberate
 * and wrong enough that the site and the app were visibly different
 * brands — the actual mark is a capsule **S**, not a bottle. The app's
 * own `shared/ui/Brand.tsx` says the same thing about the same files.
 *
 * **Two files per asset rather than one recoloured in CSS.** A mask or
 * an SVG `fill` would let one file serve both surfaces, but a mask that
 * fails to load is an *invisible* logo in the first slot of the page.
 * Two images fail visibly instead. It also keeps the no-raw-hex rule
 * satisfied, because no colour is named here at all.
 */
type Tone = "light" | "dark";

/** Square file with a portrait glyph inside, so a square box keeps the
 *  mark optically centred without per-caller nudging. */
const MARK: Record<Tone, string> = {
  light: "/brand-mark-green.png",
  dark: "/brand-mark-white.png",
};

/** The wordmark's own proportions — set a height, get no layout shift. */
const WORDMARK: Record<Tone, string> = {
  light: "/brand-wordmark.png",
  dark: "/brand-wordmark-white.png",
};
const WORDMARK_W = 503;
const WORDMARK_H = 96;

/**
 * "by Clino Health", coloured the way the MolarPlus site sets it:
 * a quiet "by", then the two parent-brand greens.
 */
function Byline({ tone, link }: { tone: Tone; link: boolean }) {
  const dark = tone === "dark";
  const words = (
    <>
      <span className={cn("mr-0.5 font-medium", dark ? "text-white/50" : "text-ink-400")}>by</span>
      <span className={dark ? "text-clino-light-on-dark" : "text-clino-light"}>Clino</span>
      <span className={cn("ml-1", dark ? "text-clino-medium-on-dark" : "text-clino-medium")}>Health</span>
    </>
  );
  const cls = "mt-1 text-micro font-bold leading-none tracking-tight";

  return link ? (
    <a
      href={SITE.parentUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${SITE.parent}, the company behind ${SITE.name}`}
      className={cn(cls, "transition-opacity duration-200 ease-out hover:opacity-70")}
    >
      {words}
    </a>
  ) : (
    <span aria-hidden="true" className={cls}>
      {words}
    </span>
  );
}

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
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {/* The name, once, for assistive tech. Both images below are
          decorative: two elements each announcing "SyrupDesk" is a
          screen reader saying the product name twice. */}
      <span className="sr-only">{SITE.name}</span>

      <Image
        src={MARK[tone]}
        alt=""
        aria-hidden="true"
        width={132}
        height={132}
        priority
        className="h-8 w-8 shrink-0"
      />

      <span className="inline-flex flex-col leading-none">
        <Image
          src={WORDMARK[tone]}
          alt=""
          aria-hidden="true"
          width={WORDMARK_W}
          height={WORDMARK_H}
          priority
          className="h-[1.15rem] w-auto"
        />
        {byline && <Byline tone={tone} link={linkByline} />}
      </span>
    </span>
  );
}
