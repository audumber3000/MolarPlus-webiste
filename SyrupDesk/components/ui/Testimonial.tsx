import Image from "next/image";

export type TestimonialData = {
  /** The owner's own words. Keep their phrasing — a quote edited into
   *  marketing English stops sounding like a pharmacist. */
  quote: string;
  /**
   * Who said it. All three are optional, and the card is built to read
   * well without them.
   *
   * A real quote whose owner has not yet agreed to be named is still a
   * real quote, and withholding the name is honest. Inventing one is
   * not: a made up shop and city reads as a specific business vouching
   * for us, which is a fabricated endorsement even when the words are
   * genuine. So the card degrades to "Verified customer" rather than
   * ever carrying a name we made up.
   */
  name?: string;
  pharmacy?: string;
  /** Worth chasing: this buyer trusts a peer two districts over more
   *  than a national logo wall. */
  city?: string;
  /** Where the quote came from, e.g. "Google Play review". Only ever
   *  somewhere a reader could go and check. */
  source?: string;
  /** Optional. Most owners will not send a photograph, and chasing one
   *  is not a reason to leave a real quote off the page — the card
   *  falls back to a monogram rather than a stock headshot. */
  photo?: { src: string; width: number; height: number };
  /** Optional, e.g. "Running SyrupDesk since March 2026". Only ever a
   *  fact we can point at. */
  since?: string;
};

/** Initials for the photo-less case. Two letters, from the name. */
function monogram(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export function Testimonial({ data, sample = false }: { data: TestimonialData; sample?: boolean }) {
  return (
    <figure className="flex h-full flex-col rounded-md border border-ink-200 bg-surface p-6">
      {sample && (
        <span className="mb-4 self-start rounded-full bg-warning px-2.5 py-0.5 text-micro font-bold uppercase tracking-wider text-white">
          Sample
        </span>
      )}
      <blockquote className="flex-1">
        {/* text-h4 rather than body: three cards of small grey type is a
            logo wall in sentence form, and nobody reads it. */}
        <p className="text-h4 leading-snug font-normal text-ink-900">
          &ldquo;{data.quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-200 pt-5">
        {data.photo ? (
          <Image
            src={data.photo.src}
            alt=""
            width={data.photo.width}
            height={data.photo.height}
            className="size-12 shrink-0 rounded-full object-cover"
          />
        ) : data.name ? (
          <span
            aria-hidden="true"
            data-numeric
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-body font-semibold text-green-700"
          >
            {monogram(data.name)}
          </span>
        ) : (
          // No name yet, so no initials to show. A tick is honest about
          // what we can say: the words are from a real customer.
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700"
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10.5l4 4 8-9" />
            </svg>
          </span>
        )}
        <div className="min-w-0">
          {data.name ? (
            <>
              <p className="text-body font-semibold text-ink-900">{data.name}</p>
              <p className="text-small text-ink-500">
                {[data.pharmacy, data.city].filter(Boolean).join(", ")}
              </p>
            </>
          ) : (
            <>
              <p className="text-body font-semibold text-ink-900">Verified customer</p>
              <p className="text-small text-ink-500">
                {data.source ?? "Medical store owner running SyrupDesk"}
              </p>
            </>
          )}
          {data.since && <p className="mt-0.5 text-micro text-ink-400">{data.since}</p>}
        </div>
      </figcaption>
    </figure>
  );
}
