import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Mail, MessageCircle } from 'lucide-react';
import DesktopGallery from '@/components/product/DesktopGallery';
import PlatformIcon from '@/components/product/PlatformIcon';
import StickyCta from '@/components/product/StickyCta';
import WhatsAppGlyph from '@/components/product/WhatsAppGlyph';
import {
  DOWNLOADS,
  FAQ,
  FEATURES,
  GST_RATE,
  MAC_SHOTS,
  MOBILE_SHOTS,
  MOLARPLUS,
  OG_IMAGE,
  PLANS,
  PLATFORMS,
  TABLET_SHOTS,
  TRIAL,
  WHATSAPP_MESSAGES,
  WINDOWS_SHOTS,
  inr,
  molarplusWhatsapp,
} from '@/lib/products/molarplus';
import { absoluteUrl, pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

/**
 * /products/molarplus/: MolarPlus's page on the parent company's domain.
 *
 * It is the product URL in the product feeds, so it must answer 200 at exactly this address
 * (trailing slash, www) and never redirect to molarplus.com. It says plainly who makes the
 * product and links out to the product's own site for everything else. Copy and facts come
 * from lib/products/molarplus.ts; read that file's header before changing a claim.
 */

const PATH = '/products/molarplus';
const PAGE_URL = absoluteUrl(PATH);
const TITLE = 'MolarPlus: Dental Clinic Management Software | ClinoHealth';
const DESCRIPTION =
  'Discover MolarPlus by ClinoHealth, a dental clinic management platform for patient records, appointments, dental charting, treatment plans, billing and clinic operations.';

export const metadata = pageMetadata({
  title: TITLE,
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
  image: OG_IMAGE,
});

function JsonLd() {
  const org = { '@id': `${absoluteUrl('/')}#organization` };
  const software = `${PAGE_URL}#software`;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        ...org,
        name: 'ClinoHealth',
        legalName: SITE.company,
        url: absoluteUrl('/'),
        logo: `${SITE.url}/logo-wordmark.svg`,
        brand: { '@type': 'Brand', name: MOLARPLUS.name, url: MOLARPLUS.url },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': software,
        name: MOLARPLUS.name,
        description: DESCRIPTION,
        url: PAGE_URL,
        sameAs: [MOLARPLUS.url, DOWNLOADS.ios, DOWNLOADS.android, DOWNLOADS.windows],
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Dental practice management software',
        operatingSystem: 'Web, Windows, macOS, Android, iOS',
        downloadUrl: [DOWNLOADS.windows, DOWNLOADS.mac, DOWNLOADS.android, DOWNLOADS.ios],
        image: OG_IMAGE.url,
        screenshot: [...WINDOWS_SHOTS, ...MAC_SHOTS, ...TABLET_SHOTS, ...MOBILE_SHOTS].map((s) => s.src),
        featureList: FEATURES.map((f) => f.title),
        audience: { '@type': 'BusinessAudience', audienceType: 'Dentists, dental clinics and dental hospitals' },
        author: org,
        publisher: org,
        offers: PLANS.flatMap((plan) => [
          {
            '@type': 'Offer',
            name: `MolarPlus ${plan.name}, monthly`,
            price: plan.monthly,
            priceCurrency: 'INR',
            url: MOLARPLUS.pricingUrl,
            availability: 'https://schema.org/InStock',
            eligibleRegion: { '@type': 'Country', name: 'India' },
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: plan.monthly,
              priceCurrency: 'INR',
              billingDuration: 'P1M',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: `MolarPlus ${plan.name}, yearly`,
            price: plan.annualTotal,
            priceCurrency: 'INR',
            url: MOLARPLUS.pricingUrl,
            availability: 'https://schema.org/InStock',
            eligibleRegion: { '@type': 'Country', name: 'India' },
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: plan.annualTotal,
              priceCurrency: 'INR',
              billingDuration: 'P1Y',
              valueAddedTaxIncluded: false,
            },
          },
        ]),
      },
      {
        '@type': 'WebPage',
        '@id': PAGE_URL,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: 'en-IN',
        about: { '@id': software },
        publisher: org,
        primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE.url, width: OG_IMAGE.width, height: OG_IMAGE.height },
        breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Products', item: absoluteUrl('/products') },
          { '@type': 'ListItem', position: 3, name: MOLARPLUS.name, item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const btn = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-colors';

function SectionHeading({ kicker, title, lead, id }: { kicker: string; title: string; lead?: string; id: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-molar">{kicker}</p>
      <h2 id={id} className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lead}</p> : null}
    </div>
  );
}

export default function MolarPlusPage() {
  const whatsapp = molarplusWhatsapp();

  return (
    <>
      <JsonLd />

      {/* ── Hero ── */}
      <section
        aria-labelledby="molarplus-title"
        className="border-b border-molar-edge bg-gradient-to-b from-molar-tint via-molar-tint/40 to-white"
      >
        <div className="mx-auto max-w-container px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-molar">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/products/" className="hover:text-molar">Products</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">MolarPlus</li>
            </ol>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Image
                src={MOLARPLUS.logo.src}
                alt="MolarPlus logo"
                width={MOLARPLUS.logo.width}
                height={MOLARPLUS.logo.height}
                className="h-11 w-auto"
                priority
              />
              <h1 id="molarplus-title" className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
                Complete dental clinic management software for modern dental practices
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                MolarPlus runs a dental clinic&apos;s day in one place: patient records, appointments,
                dental charting, treatment plans, prescriptions, billing and lab work, on the web,
                Windows, Mac, Android and iPhone.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={MOLARPLUS.url} className={`${btn} bg-molar text-white hover:bg-molar-deep`}>
                  Visit MolarPlus Website <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener"
                  className={`${btn} bg-wa text-white hover:opacity-90`}
                >
                  <WhatsAppGlyph className="h-5 w-5" /> Chat with Us on WhatsApp
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                <li><a href="#pricing" className="text-molar underline-offset-4 hover:underline">View pricing</a></li>
                <li><a href={MOLARPLUS.signupUrl} className="text-molar underline-offset-4 hover:underline">Start free trial</a></li>
                <li>
                  <a href={molarplusWhatsapp(WHATSAPP_MESSAGES.demo)} target="_blank" rel="noopener" className="text-molar underline-offset-4 hover:underline">
                    Book a demo
                  </a>
                </li>
                <li><a href="#download" className="text-molar underline-offset-4 hover:underline">Download app</a></li>
              </ul>

              <p className="mt-8 rounded-xl border border-molar-edge bg-white px-4 py-3 text-sm leading-relaxed text-ink-muted">
                <strong className="font-semibold text-ink">MolarPlus is developed and operated by {SITE.company}</strong>,
                the company behind ClinoHealth. Official website:{' '}
                <a href={MOLARPLUS.url} className="font-semibold text-molar hover:underline">www.molarplus.com</a>
              </p>
            </div>

            <div className="lg:col-span-7">
              <a href={WINDOWS_SHOTS[0].src} target="_blank" rel="noopener" className="block overflow-hidden rounded-2xl border border-molar-edge bg-white">
                <Image
                  src={WINDOWS_SHOTS[0].src}
                  alt={WINDOWS_SHOTS[0].alt}
                  width={WINDOWS_SHOTS[0].width}
                  height={WINDOWS_SHOTS[0].height}
                  sizes="(min-width: 1280px) 740px, (min-width: 1024px) 58vw, 100vw"
                  className="h-auto w-full"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platforms ── */}
      <section aria-labelledby="platforms" className="border-b border-molar-edge bg-white">
        <div className="mx-auto max-w-container px-4 py-14 sm:px-6 lg:px-8">
          <h2 id="platforms" className="text-center text-sm font-semibold uppercase tracking-wider text-ink-muted">
            One clinic, every device
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {PLATFORMS.map((p) => (
              <li key={p.key} className="last:col-span-2 lg:last:col-span-1">
                <a href={p.href} className="flex h-full flex-col rounded-2xl border border-molar-edge bg-white p-4 transition-colors hover:border-molar sm:p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-molar-tint text-molar">
                    <PlatformIcon platform={p.key} />
                  </span>
                  <span className="mt-4 text-lg font-bold text-ink">{p.name}</span>
                  <span className="mt-1 text-sm leading-relaxed text-ink-muted">{p.how}</span>
                  <span className="mt-auto pt-4 text-sm font-semibold text-molar">{p.cta}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Features ── */}
      <section aria-labelledby="features" className="bg-white">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="features"
            kicker="What it does"
            title="Everything a dental clinic runs on, in one place"
            lead="From the front desk to the chair to the lab, the same patient record follows the whole visit."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <li key={f.title} className="rounded-2xl border border-molar-edge bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-molar-tint text-molar">
                  <Check className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Desktop screenshots ── */}
      <section aria-labelledby="screenshots" id="screenshots" className="border-y border-molar-edge bg-molar-tint/40">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="desktop-screenshots"
            kicker="Desktop apps"
            title="See MolarPlus on Windows and macOS"
            lead="Real screens from the MolarPlus desktop apps, captured from a sample clinic. Choose your computer."
          />
          <div className="mt-10">
            <DesktopGallery
              accent={MOLARPLUS.theme.accent}
              sets={[
                { key: 'windows', label: 'Windows', shots: WINDOWS_SHOTS },
                { key: 'mac', label: 'macOS', shots: MAC_SHOTS },
              ]}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={DOWNLOADS.windows} className={`${btn} border border-molar bg-white text-molar hover:bg-molar-tint`}>
              <PlatformIcon platform="windows" className="h-4 w-4" /> Get it from Microsoft
            </a>
            <a href={DOWNLOADS.mac} className={`${btn} border border-molar bg-white text-molar hover:bg-molar-tint`}>
              <PlatformIcon platform="mac" className="h-4 w-4" /> Download for Mac
            </a>
          </div>
        </div>
      </section>

      {/* ── Tablet and phone screenshots ── */}
      <section aria-labelledby="tablet-screenshots" className="bg-white">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="tablet-screenshots"
            kicker="Tablet"
            title="At the chair, on an iPad or Android tablet"
            lead="The full clinic on a tablet, sized for a doctor's hands between patients."
          />
          <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {TABLET_SHOTS.map((shot) => (
              <li key={shot.src} className="w-64 shrink-0 snap-start sm:w-72">
                <figure>
                  <a href={shot.src} target="_blank" rel="noopener" className="block overflow-hidden rounded-2xl border border-molar-edge bg-molar-tint">
                    <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="288px" className="h-auto w-full" />
                  </a>
                  <figcaption className="mt-3 text-sm font-medium text-ink-muted">{shot.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <SectionHeading
              id="mobile-screenshots"
              kicker="Mobile app"
              title="The clinic in your pocket, on Android and iPhone"
              lead="Appointments, the dental chart, treatment plans, prescriptions and billing from a phone."
            />
          </div>
          <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {MOBILE_SHOTS.map((shot) => (
              <li key={shot.src} className="w-44 shrink-0 snap-start sm:w-52">
                <figure>
                  <a href={shot.src} target="_blank" rel="noopener" className="block overflow-hidden rounded-2xl border border-molar-edge bg-molar-tint">
                    <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="208px" className="h-auto w-full" />
                  </a>
                  <figcaption className="mt-3 text-sm font-medium text-ink-muted">{shot.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={DOWNLOADS.android} className={`${btn} border border-molar bg-white text-molar hover:bg-molar-tint`}>
              <PlatformIcon platform="android" className="h-4 w-4" /> Get it on Google Play
            </a>
            <a href={DOWNLOADS.ios} className={`${btn} border border-molar bg-white text-molar hover:bg-molar-tint`}>
              <PlatformIcon platform="ios" className="h-4 w-4" /> Download on the App Store
            </a>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section aria-labelledby="pricing-title" id="pricing" className="border-y border-molar-edge bg-molar-tint/40">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="pricing-title"
            kicker="Pricing"
            title="Simple plans, priced per clinic"
            lead={`Prices in India, excluding ${Math.round(GST_RATE * 100)}% GST. Paying yearly costs 20% less. Every new clinic starts with ${TRIAL}.`}
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <li
                key={plan.key}
                className={`flex flex-col rounded-2xl border bg-white p-7 ${plan.featured ? 'border-molar' : 'border-molar-edge'}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-extrabold text-ink">{plan.name}</h3>
                  {plan.featured ? (
                    <span className="rounded-full bg-molar px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Most popular</span>
                  ) : null}
                </div>
                <p className="mt-2 text-ink-muted">{plan.tagline}</p>
                <p className="mt-6">
                  <span className="text-4xl font-extrabold text-ink">{inr(plan.monthly)}</span>
                  <span className="ml-1 text-ink-muted">a month + GST</span>
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  or {inr(plan.annualMonthly)} a month billed yearly ({inr(plan.annualTotal)} a year + GST)
                </p>
                {plan.inherits ? <p className="mt-6 text-sm font-semibold text-ink">{plan.inherits}</p> : null}
                <ul className={`${plan.inherits ? 'mt-3' : 'mt-6'} space-y-2.5`}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-molar" strokeWidth={2.5} aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={MOLARPLUS.signupUrl}
                  className={`${btn} mt-8 ${plan.featured ? 'bg-molar text-white hover:bg-molar-deep' : 'border border-molar text-molar hover:bg-molar-tint'}`}
                >
                  Start free trial
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-molar-edge bg-white p-6 md:flex-row md:items-center md:justify-between">
            <p className="text-ink-muted">
              Not sure which plan fits your clinic? Ask us on WhatsApp. Full details and prices outside India are on{' '}
              <a href={MOLARPLUS.pricingUrl} className="font-semibold text-molar hover:underline">molarplus.com/pricing</a>.
            </p>
            <a
              href={molarplusWhatsapp(WHATSAPP_MESSAGES.pricing)}
              target="_blank"
              rel="noopener"
              className={`${btn} shrink-0 bg-wa text-white hover:opacity-90`}
            >
              <WhatsAppGlyph className="h-5 w-5" /> Ask about pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── Download ── */}
      <section aria-labelledby="download-title" id="download" className="bg-white">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="download-title"
            kicker="Download"
            title="Get MolarPlus on your devices"
            lead="Sign in with the same account everywhere. Your clinic's records are the same on every device."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PLATFORMS.map((p) => (
              <li key={p.key}>
                <a href={p.href} className="flex min-h-16 items-center gap-3 rounded-2xl border border-molar-edge px-5 py-4 font-semibold text-ink transition-colors hover:border-molar">
                  <PlatformIcon platform={p.key} className="h-6 w-6 text-molar" />
                  <span>
                    <span className="block text-xs font-medium text-ink-muted">{p.name}</span>
                    {p.cta}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-title" className="border-t border-molar-edge bg-white">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading id="faq-title" kicker="Questions" title="MolarPlus, in plain answers" />
          <dl className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {FAQ.map((item) => (
              <div key={item.q}>
                <dt className="text-lg font-bold text-ink">{item.q}</dt>
                <dd className="mt-2 leading-relaxed text-ink-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Contact ── */}
      <section aria-labelledby="contact-title" className="bg-molar-deep text-white">
        <div className="mx-auto grid max-w-container gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <h2 id="contact-title" className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Talk to the MolarPlus team
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              Questions about features, pricing or moving your clinic&apos;s records across? Message us on
              WhatsApp and a person replies, in English or Hindi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={whatsapp} target="_blank" rel="noopener" className={`${btn} bg-wa text-white hover:opacity-90`}>
                <WhatsAppGlyph className="h-5 w-5" /> Chat with Us on WhatsApp
              </a>
              <a href={MOLARPLUS.url} className={`${btn} bg-white text-molar hover:bg-molar-tint`}>
                Visit MolarPlus Website <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
          <dl className="space-y-5 text-white/80 lg:col-span-5">
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
              <div>
                <dt className="font-semibold text-white">WhatsApp and phone</dt>
                <dd><a href={whatsapp} target="_blank" rel="noopener" className="hover:underline">{MOLARPLUS.whatsappDisplay}</a></dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
              <div>
                <dt className="font-semibold text-white">Email</dt>
                <dd><a href={`mailto:${MOLARPLUS.supportEmail}`} className="hover:underline">{MOLARPLUS.supportEmail}</a></dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
              <div>
                <dt className="font-semibold text-white">Made by</dt>
                <dd>
                  {SITE.company}, the company behind{' '}
                  <Link href="/products/" className="underline-offset-4 hover:underline">ClinoHealth&apos;s products</Link>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      <StickyCta whatsappHref={whatsapp} siteHref={MOLARPLUS.url} siteLabel="Visit website" accent={MOLARPLUS.theme.accent} />
    </>
  );
}
