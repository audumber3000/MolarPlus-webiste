import Image from "next/image";

export type TestimonialData = {
  /** The owner's own words. Keep their phrasing — a quote edited into
   *  marketing English stops sounding like a pharmacist. */
  quote: string;
  name: string;
  pharmacy: string;
  /** Shown deliberately: this buyer trusts a peer two districts over
   *  more than a national logo wall. */
  city: string;
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
        ) : (
          <span
            aria-hidden="true"
            data-numeric
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-body font-semibold text-green-700"
          >
            {monogram(data.name)}
          </span>
        )}
        <div className="min-w-0">
          <p className="text-body font-semibold text-ink-900">{data.name}</p>
          <p className="text-small text-ink-500">
            {data.pharmacy}, {data.city}
          </p>
          {data.since && <p className="mt-0.5 text-micro text-ink-400">{data.since}</p>}
        </div>
      </figcaption>
    </figure>
  );
}
