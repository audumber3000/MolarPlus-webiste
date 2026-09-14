import { Container } from "@/components/ui/Section";
import { PLATFORM_PROFILES, type PlatformProfile } from "@/content/social-proof";
import { cn } from "@/lib/cn";

/**
 * "Featured on" — the review platforms a buyer checks before choosing
 * software. Ported from the MolarPlus site.
 *
 * Stars render ONLY for an entry carrying a real `rating`: that number
 * is the platform's data about SyrupDesk, not ours, so it is never
 * written by hand. A logo with no stars still does the job — it tells a
 * buyer where to go and look.
 */
function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={cn("size-3.5", i < Math.round(rating) ? "text-warning" : "text-ink-200")}
          fill="currentColor"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

function Entry({ p }: { p: PlatformProfile }) {
  const inner = (
    <span className="flex flex-col items-center gap-2">
      {typeof p.rating === "number" && <Stars rating={p.rating} />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={p.src} alt={p.platform} loading="lazy" className={cn(p.heightClass, "w-auto object-contain")} />
      {typeof p.reviewCount === "number" && (
        <span className="text-micro text-ink-500">{p.reviewCount} reviews</span>
      )}
    </span>
  );

  return p.href ? (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex transition-opacity duration-200 ease-out hover:opacity-70"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

export function FeaturedOn() {
  if (PLATFORM_PROFILES.length === 0) return null;

  return (
    <section className="border-b border-ink-200 bg-surface py-14">
      <Container>
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-20">
          <h2 className="max-w-[15rem] text-[1.75rem] leading-tight font-bold tracking-tight text-ink-900 sm:text-h3">
            Featured on
          </h2>
          <ul className="flex flex-1 flex-wrap items-center gap-x-14 gap-y-8">
            {PLATFORM_PROFILES.map((p) => (
              <li key={p.platform}>
                <Entry p={p} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
