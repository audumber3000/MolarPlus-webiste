import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, HeartHandshake, Languages, Wallet } from 'lucide-react';
import { BRANDS } from '@/lib/brands';
import { pageMetadata } from '@/lib/seo';
import { CONTACT, PROOF, SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'About',
  description:
    'Clino Health builds practice management software for Indian healthcare from Pune — MolarPlus for dental, SyrupDesk for pharmacy, with hospital and imaging software in development.',
  path: '/about',
});

const VALUES = [
  {
    Icon: HeartHandshake,
    title: 'Privacy first',
    body: 'Patient records are handled as a duty, not a feature. Practices are isolated from each other, access is controlled by role, and your data is exportable whenever you want it.',
  },
  {
    Icon: Wallet,
    title: 'Priced for the practice',
    body: 'Rupee pricing set against what a single-chair clinic or a one-counter store actually earns — not a dollar price converted and hoped for.',
  },
  {
    Icon: Building2,
    title: 'Built for how India works',
    body: 'Patchy internet, WhatsApp instead of email, GST, and staff who have never used clinical software before. These are the design constraints, not edge cases.',
  },
  {
    Icon: Languages,
    title: 'Support in your language',
    body: 'Hindi and English, on the phone and on WhatsApp, from people who know the product rather than a ticket queue.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-clino-edge bg-clino-wash">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-clino-light">
            About us
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Healthcare software written where it is used
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            We are based in Pune and we build for practices across India. Every product we
            ship started with someone showing us the register they were keeping by hand.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold text-ink">Our story</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
                <p>
                  Clino Health started in {SITE.founded} out of a specific frustration:
                  practice management software was either expensive foreign product built
                  for a different healthcare system, or cheap local software that fell over
                  the moment the internet did.
                </p>
                <p>
                  Neither was written for a clinic in a tier-2 city with one chair, patchy
                  broadband, a receptionist who had never used clinical software, and
                  patients who confirm appointments on WhatsApp. So we wrote for that
                  clinic instead — and then, when pharmacies asked, for the counter next
                  door.
                </p>
                <p>
                  Today we serve {PROOF.clinics} practices across India, managing more than{' '}
                  {PROOF.patients} patients. MolarPlus and SyrupDesk are shipping; a
                  hospital management system covering OPD and IPD, and software for X-ray
                  and sonography centres, are being built now.
                </p>
              </div>

              <h2 className="mt-14 text-3xl font-extrabold text-ink">What we build</h2>
              <ul className="mt-6 space-y-4">
                {BRANDS.map((brand) => (
                  <li key={brand.slug} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-clino-wash text-clino-medium">
                      <brand.Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span>
                      <Link
                        href={`/brands/${brand.slug}`}
                        className="font-bold text-ink hover:text-clino-medium"
                      >
                        {brand.name}
                      </Link>
                      {brand.status === 'development' && (
                        <span className="ml-2 rounded-full border border-clino-edge px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink-muted">
                          In development
                        </span>
                      )}
                      <span className="block text-ink-muted">{brand.tagline}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-clino-edge">
                <Image
                  src="/voice-reporting.png"
                  alt="Voice reporting in a Clino Health app"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-clino-edge bg-clino-wash p-7">
                <h3 className="text-lg font-bold text-ink">Where we are</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-ink-muted">
                  <p>{CONTACT.address.street}</p>
                  <p>
                    {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.postalCode}
                  </p>
                  <p>{CONTACT.address.countryName}</p>
                </address>
                <p className="mt-4 text-sm text-ink-muted">
                  <a href={`mailto:${CONTACT.email}`} className="font-semibold text-clino-medium hover:text-clino-dark">
                    {CONTACT.email}
                  </a>
                  <br />
                  <a href={`tel:${CONTACT.phone}`} className="font-semibold text-clino-medium hover:text-clino-dark">
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-clino-edge bg-clino-wash py-16 lg:py-20">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-ink">What we hold to</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-clino-edge bg-clino-edge sm:grid-cols-2">
            {VALUES.map(({ Icon, title, body }) => (
              <div key={title} className="bg-white p-8">
                <Icon className="h-6 w-6 text-clino-medium" strokeWidth={1.75} />
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto flex max-w-container flex-col items-start gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="max-w-xl text-2xl font-extrabold text-ink">
            If you run a practice we have not built for yet, we would like to hear about it.
          </h2>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-clino-medium px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-clino-dark"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
