import { Star } from 'lucide-react';
import { PLATFORM_PROFILES, type PlatformProfile } from '@/lib/social-proof';

/**
 * "Featured on" — the review platforms a buyer checks before choosing
 * healthcare software.
 *
 * Matches the equivalent section on the MolarPlus site so the two read as
 * one company. Stars render only for an entry carrying a real `rating`,
 * and none currently does; see lib/social-proof.ts for why that is a rule
 * rather than an oversight.
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
    <span className="text-lg font-extrabold tracking-tight sm:text-xl" style={{ color: p.color }}>
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
    <section className="border-b border-clino-edge bg-white py-14">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-20">
          <h2 className="max-w-[15rem] text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
            Featured on
          </h2>

          <ul className="flex flex-1 flex-wrap items-center gap-x-14 gap-y-8">
            {PLATFORM_PROFILES.map((p) => {
              const inner = (
                <span className="flex flex-col items-center gap-2">
                  {typeof p.rating === 'number' && <Stars rating={p.rating} />}
                  <Wordmark p={p} />
                  {typeof p.reviewCount === 'number' && (
                    <span className="text-xs text-ink-muted">{p.reviewCount} reviews</span>
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
