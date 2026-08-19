import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import BrandLockup from '@/components/BrandLockup';
import { BRANDS } from '@/lib/brands';

/**
 * The portfolio, expanded: each brand card carries the four apps that
 * sit under it. This is the page-level counterpart to the mega-menu —
 * the same hierarchy, but readable without hovering anything.
 *
 * Each card wears its own brand's colour and logo rather than the Clino
 * green, so MolarPlus reads as MolarPlus and SyrupDesk as SyrupDesk.
 * Colours arrive as inline styles because they are per-brand runtime
 * values; see the note on BrandTheme in lib/brands.ts.
 */
export default function BrandGrid() {
  return (
    <div className="space-y-6">
      {BRANDS.map((brand) => {
        const isLive = brand.status === 'live';
        const { accent, tint, edge, onAccentLight } = brand.theme;

        return (
          <article
            key={brand.slug}
            className={`grid gap-8 rounded-2xl border p-8 transition-shadow lg:grid-cols-12 ${
              isLive ? 'bg-white hover:shadow-lg' : 'border-dashed'
            }`}
            style={{
              borderColor: edge,
              ...(isLive ? {} : { backgroundColor: `${tint}66` }),
            }}
          >
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: isLive ? accent : edge,
                    color: isLive && onAccentLight ? '#ffffff' : accent,
                  }}
                >
                  <brand.Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                  style={
                    isLive
                      ? { backgroundColor: tint, color: accent }
                      : { border: `1px solid ${edge}`, color: '#4a5a41' }
                  }
                >
                  {isLive ? 'Available' : 'In development'}
                </span>
              </div>

              <div className="mt-6">
                <BrandLockup brand={brand} as="h3" />
              </div>

              <p className="mt-3 text-sm font-semibold" style={{ color: accent }}>
                {brand.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{brand.description}</p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={`/brands/${brand.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
                  style={{ color: accent }}
                >
                  {isLive ? `Explore ${brand.name}` : 'What we are building'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {brand.url && (
                  <a
                    href={brand.url}
                    className="inline-flex items-center gap-1 text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-ink-muted">
                Four apps, one record
              </p>
              <div
                className="grid gap-px overflow-hidden rounded-xl border sm:grid-cols-2"
                style={{ borderColor: edge, backgroundColor: edge }}
              >
                {brand.apps.map((app) => {
                  const inner = (
                    <>
                      <div className="flex items-center gap-2">
                        <app.Icon className="h-4 w-4" style={{ color: accent }} strokeWidth={1.75} />
                        <span className="text-sm font-semibold text-ink">{app.name}</span>
                        {app.url && <ArrowUpRight className="h-3 w-3" style={{ color: accent }} />}
                      </div>
                      <p className="mt-2 text-xs leading-snug text-ink-muted">{app.desc}</p>
                      <p
                        className="mt-2 text-[11px] font-semibold uppercase tracking-wide"
                        style={{ color: accent, opacity: 0.75 }}
                      >
                        {app.audience}
                      </p>
                    </>
                  );

                  return app.url ? (
                    <a
                      key={app.name}
                      href={app.url}
                      className="bg-white p-5 transition-colors hover:bg-[var(--brand-tint)]"
                      style={{ '--brand-tint': tint } as React.CSSProperties}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={app.name} className="bg-white p-5">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
