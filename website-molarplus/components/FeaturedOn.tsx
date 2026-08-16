import { Star } from 'lucide-react';
import { PLATFORM_PROFILES, type PlatformProfile } from '@/lib/social-proof';

/**
 * "Featured on" — the review platforms a buyer checks before choosing software.
 *
 * Two rules hold this section together:
 *
 *  1. Logos render from the official files once they exist in /public/badges,
 *     and fall back to a plain typographic wordmark until then. The real marks
 *     are not freely downloadable — each platform hands them to listed vendors
 *     through its own portal — so a wordmark is what can be shown honestly in
 *     the meantime.
 *
 *  2. Stars render ONLY for an entry carrying a real `rating`. That number is
 *     the platform's data about MolarPlus, not MolarPlus's own claim, so it is
 *     never written by hand. A logo with no stars still does the job: it tells
 *     a buyer where to go and look.
 */
function Wordmark({ p }: { p: PlatformProfile }) {
  if (p.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={p.src}
        alt={p.platform}
        className={`${p.heightClass ?? 'h-7'} w-auto object-contain`}
        loading="lazy"
      />
    );
  }
  return (
    <span
      className="text-lg font-extrabold tracking-tight sm:text-xl"
      style={{ color: p.color }}
    >
      {p.platform}
    </span>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function FeaturedOn() {
  if (PLATFORM_PROFILES.length === 0) return null;

  return (
    <section className="border-b border-gray-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-20">
          <h2 className="max-w-[15rem] text-2xl font-extrabold leading-tight tracking-tight text-[#1a1c4b] sm:text-3xl">
            Featured on
          </h2>

          <ul className="flex flex-1 flex-wrap items-center gap-x-14 gap-y-8">
            {PLATFORM_PROFILES.map((p) => {
              const inner = (
                <span className="flex flex-col items-center gap-2">
                  {typeof p.rating === 'number' && <Stars rating={p.rating} />}
                  <Wordmark p={p} />
                  {typeof p.reviewCount === 'number' && (
                    <span className="text-xs text-gray-500">{p.reviewCount} reviews</span>
                  )}
                </span>
              );

              return (
                <li key={p.platform}>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex transition-opacity hover:opacity-70"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
