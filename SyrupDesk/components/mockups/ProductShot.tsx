import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";

/**
 * A real screenshot of the SyrupDesk app.
 *
 * These replaced the hand-drawn CSS panels that stood in while the
 * product UI was being built. This buyer decides by looking at the
 * actual billing screen — a stylised approximation of it is the one
 * thing on the page they can catch us out on.
 *
 * Every shot is captured from a running build against the demo store,
 * at 1440×900 on a 2× display. `caption` says so: the figures on
 * screen belong to a demo shop, and a visitor should never be left to
 * assume they are a real customer's takings.
 */
export function ProductShot({
  src,
  alt,
  caption,
  priority = false,
  sizes = "(min-width: 1024px) 600px, 100vw",
  className,
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn("min-w-0", className)}>
      {/* Border, not shadow, for the frame: the app's own chrome is
          already dark and heavy, and a drop shadow under it makes the
          whole block float off a light section.

          Below `sm` the image keeps a 44rem floor and the frame scrolls.
          A 1440px-wide application screenshot squeezed into a 360px
          phone is a grey smudge — it proves the software exists and
          nothing else, and this buyer is on that phone. Panning it is
          the only way the numbers stay readable. The page itself never
          scrolls sideways; only this box does. */}
      <div
        tabIndex={0}
        role="group"
        aria-label={`${alt.split(":")[0]}. Scroll to see the whole screen`}
        className="w-full max-w-full overflow-x-auto rounded-md border border-ink-200 bg-surface shadow-sm"
      >
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          priority={priority}
          sizes={sizes}
          className="h-auto w-full min-w-[44rem] sm:min-w-0"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-small text-ink-500">
          {caption} <span className="text-ink-400">Demo data.</span>
        </figcaption>
      )}
    </figure>
  );
}
