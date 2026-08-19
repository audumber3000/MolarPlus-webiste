import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import BrandLockup from '@/components/BrandLockup';
import { BRANDS, getBrand } from '@/lib/brands';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return pageMetadata({
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    path: `/brands/${brand.slug}`,
  });
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const isLive = brand.status === 'live';
  const others = BRANDS.filter((b) => b.slug !== brand.slug);
  // The page wears the brand's own identity, not the Clino green. Inline
  // styles because the value is per-brand at runtime — see BrandTheme.
  const { accent, tint, edge, onAccentLight } = brand.theme;

  return (
    <>
      {/* Product JSON-LD ties the app family to the brand rather than
          leaving four unrelated names on the page. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: brand.name,
            applicationCategory: 'HealthApplication',
            description: brand.description,
            url: brand.url ?? `${SITE.url}/brands/${brand.slug}`,
            operatingSystem: 'Web, Windows, macOS, Android, iOS',
            publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
          }),
        }}
      />

      <section className="border-b" style={{ borderColor: edge, backgroundColor: tint }}>
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <nav className="mb-8 flex items-center gap-2 text-sm text-ink-muted">
            <Link href="/" className="hover:text-clino-medium">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-clino-medium">Products</Link>
            <span>/</span>
            <span className="text-ink">{brand.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: isLive ? accent : edge,
                    color: isLive && onAccentLight ? '#ffffff' : accent,
                  }}
                >
                  <brand.Icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                  style={
                    isLive
                      ? { backgroundColor: '#ffffff', color: accent }
                      : { border: `1px solid ${accent}33`, color: '#4a5a41' }
                  }
                >
                  {isLive ? 'Available now' : 'In development'}
                </span>
              </div>

              <div className="mt-7">
                <BrandLockup brand={brand} as="h1" size="lg" />
              </div>
              <p className="mt-4 text-xl font-semibold" style={{ color: accent }}>
                {brand.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
                {brand.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                {brand.url ? (
                  <>
                    <a
                      href={brand.url}
                      className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: accent }}
                    >
                      Go to {brand.name} <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-base font-semibold transition-colors hover:bg-white"
                      style={{ borderColor: accent, color: accent }}
                    >
                      Book a demo
                    </Link>
                  </>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: accent }}
                  >
                    Get early access <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border bg-white p-7" style={{ borderColor: edge }}>
                <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                  At a glance
                </p>
                <dl className="mt-5 space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-clino-edge pb-4">
                    <dt className="text-ink-muted">Built for</dt>
                    <dd className="text-right font-semibold text-ink">{brand.category}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-clino-edge pb-4">
                    <dt className="text-ink-muted">Apps included</dt>
                    <dd className="text-right font-semibold text-ink">{brand.apps.length}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-clino-edge pb-4">
                    <dt className="text-ink-muted">Status</dt>
                    <dd className="text-right font-semibold text-ink">
                      {isLive ? 'Shipping' : 'In development'}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Support</dt>
                    <dd className="text-right font-semibold text-ink">Hindi &amp; English</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The four apps, given room */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">
              {brand.apps.length} apps under {brand.name}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Different people, different screens, the same underlying record. Nobody has
              to be told what the other one typed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {brand.apps.map((app) => (
              <article
                key={app.name}
                className="flex flex-col rounded-2xl border bg-white p-7 transition-shadow hover:shadow-lg"
                style={{ borderColor: edge }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: tint, color: accent }}
                  >
                    <app.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
                    style={{ backgroundColor: tint, color: accent }}
                  >
                    {app.audience}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{app.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{app.desc}</p>
                {app.url ? (
                  <a
                    href={app.url}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
                    style={{ color: accent }}
                  >
                    Open {app.name} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-muted">
                    <Check className="h-4 w-4" style={{ color: accent }} /> Included with{' '}
                    {brand.name}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="border-t border-clino-edge bg-clino-wash py-16">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-ink">Also from Clino Health</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                className="group rounded-2xl border border-clino-edge bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: b.theme.tint, color: b.theme.accent }}
                  >
                    <b.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-bold text-ink group-hover:text-clino-medium">
                    {b.name}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{b.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
