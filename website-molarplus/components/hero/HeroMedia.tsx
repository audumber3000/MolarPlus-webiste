/**
 * The right-hand visual panel of a split hero.
 *
 * Renders a deliberate placeholder until a real photograph is supplied, so the
 * layout can be reviewed at full size without waiting on photography. Swapping
 * it later is a one-line change: pass `src`.
 *
 * The placeholder is styled, not broken-looking — a missing image that reads as
 * an error makes the whole page look unfinished during review.
 */
type Props = {
  /** Drop the final photograph in /public and pass its path here. */
  src?: string;
  alt?: string;
  /** Short line describing what belongs here, shown only in placeholder mode. */
  hint?: string;
  /**
   * Set on a hero image that is visible without scrolling. It loads eagerly and
   * is fetched at high priority, because this is the Largest Contentful Paint
   * element — lazy-loading it would delay the very thing the score measures.
   */
  priority?: boolean;
  /**
   * CSS object-position for the crop. A landscape photograph in a tall hero
   * column loses a lot of width to object-cover, so the default centre is often
   * wrong — this is how you keep the subject in frame.
   */
  objectPosition?: string;
};

export default function HeroMedia({
  src,
  alt = '',
  hint,
  priority = false,
  objectPosition,
}: Props) {
  if (src) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        {/* Plain <img>, not next/image: the file is already sized and
            compressed for this slot, and next/image would add a runtime
            optimisation hop for no benefit.

            No rounding or sizing here — the parent owns the shape, which is
            what lets the same component sit in a contained card or bleed to
            the viewport edge. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          style={objectPosition ? { objectPosition } : undefined}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full min-h-[22rem] w-full items-center justify-center overflow-hidden border border-dashed border-[#2a276e]/25 bg-[#2a276e]/[0.04] lg:min-h-[30rem]"
      role="img"
      aria-label={alt || 'Hero image placeholder'}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #2a276e 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative px-8 text-center">
        <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2a276e]/50">
          Hero image
        </div>
        {hint && <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">{hint}</p>}
      </div>
    </div>
  );
}
