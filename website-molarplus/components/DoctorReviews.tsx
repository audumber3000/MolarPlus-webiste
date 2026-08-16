import { Star, Quote } from 'lucide-react';
import { colors } from '@/lib/seo';
import { REVIEWS, initialsFor } from '@/lib/reviews';

/**
 * Continuously scrolling wall of dentist reviews.
 *
 * Motion runs left-to-right and pauses on hover so a quote can actually be read
 * — a wall that cannot be stopped is decoration, not proof. The track is
 * duplicated once and translated by exactly 50% so the loop is seamless; the
 * copy is aria-hidden so screen readers hear each review once.
 *
 * IMPORTANT: the review data lives in lib/reviews.ts and must stay real. See the
 * note at the top of that file before adding entries.
 */
function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <figure className="mx-3 flex w-[21rem] shrink-0 flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:w-[24rem]">
      <Quote
        className="h-6 w-6 shrink-0 opacity-20"
        style={{ color: colors.primary }}
        aria-hidden="true"
      />

      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-700">
        {r.text}
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        {r.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={r.photo}
            alt={r.name}
            className="h-11 w-11 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold"
            style={{ backgroundColor: `${colors.primary}12`, color: colors.primary }}
            aria-hidden="true"
          >
            {initialsFor(r.name)}
          </div>
        )}
        <figcaption className="min-w-0">
          <div className="truncate font-bold text-[#1a1c4b]">{r.name}</div>
          <div className="truncate text-[13px] text-gray-500">
            {r.clinic} · {r.location}
          </div>
        </figcaption>
        <div className="ml-auto flex shrink-0 gap-0.5" aria-label={`${r.rating} out of 5`}>
          {Array.from({ length: r.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
          ))}
        </div>
      </div>
    </figure>
  );
}

export default function DoctorReviews() {
  if (REVIEWS.length === 0) return null;

  return (
    <section className="overflow-hidden border-y border-gray-100 bg-slate-50/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            From the chair
          </div>
          <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1a1c4b] md:text-5xl">
            What dentists say after switching.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Practices running MolarPlus every day, in their own words.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Soft edges so cards enter and leave instead of being chopped off. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-slate-50 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-slate-50 to-transparent sm:w-28" />

        <div className="flex w-max animate-marquee-slow items-stretch motion-reduce:animate-none hover:[animation-play-state:paused]">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
          {/* Duplicate for the seamless loop — hidden from assistive tech. */}
          <div className="flex items-stretch" aria-hidden="true">
            {REVIEWS.map((r) => (
              <ReviewCard key={`dup-${r.name}`} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
