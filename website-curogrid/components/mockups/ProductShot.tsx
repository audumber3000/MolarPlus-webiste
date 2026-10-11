import Image from "next/image";
import type { Shot } from "@/lib/shots";
import { cn } from "@/lib/cn";

/**
 * A desktop screenshot of the real app, framed by a hairline and a soft
 * shadow. No drawn browser chrome: the screenshot is the product, and a
 * fake window around it is decoration pretending to be evidence.
 */
export function ProductShot({
  shot,
  priority = false,
  sizes = "(min-width: 1200px) 1136px, 100vw",
  caption,
  className,
}: {
  shot: Shot;
  /** Set on the one screenshot at the top of a page. It is usually the
   *  largest thing painted first, so it is fetched early and never lazy. */
  priority?: boolean;
  sizes?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        // next/image's own `priority` prop is deprecated in Next 16.
        // These three are what it stood for.
        preload={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        sizes={sizes}
        className={cn("h-auto w-full rounded-md border border-gray-200 shadow-lg")}
      />
      {caption && <figcaption className="mt-3 text-small text-gray-500">{caption}</figcaption>}
    </figure>
  );
}
