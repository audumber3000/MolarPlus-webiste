import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BrandGrid from '@/components/BrandGrid';
import { BRANDS, LIVE_BRANDS } from '@/lib/brands';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'All products',
  description:
    'Every brand Clino Health builds and the apps under each — MolarPlus for dental clinics and labs, SyrupDesk for retail pharmacies, plus a hospital management system and imaging software in development.',
  path: '/products',
});

const appCount = BRANDS.reduce((n, b) => n + b.apps.length, 0);

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-clino-edge bg-clino-wash">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-clino-light">
            Products
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            {BRANDS.length} brands. {appCount} apps. One way of working.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Each brand is built for one kind of practice and ships four apps — a web app,
            a desktop app, a mobile app, and one more shaped by who else that practice
            has to talk to: the lab it sends work to, or the customers it serves.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <BrandGrid />
        </div>
      </section>

      <section className="border-t border-clino-edge bg-clino-wash py-16">
        <div className="mx-auto flex max-w-container flex-col items-start gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-ink">
              Not sure which one fits your practice?
            </h2>
            <p className="mt-2 max-w-xl text-ink-muted">
              Tell us what you run — {LIVE_BRANDS.map((b) => b.category.toLowerCase()).join(', ')},
              a hospital or an imaging centre — and we will point you at the right app, or
              tell you honestly that it is not ready yet.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-clino-medium px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-clino-dark"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
