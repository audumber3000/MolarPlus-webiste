import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Clock, Mail, MessageCircle } from 'lucide-react';
import DesktopGallery from '@/components/product/DesktopGallery';
import PlatformIcon from '@/components/product/PlatformIcon';
import StickyCta from '@/components/product/StickyCta';
import WhatsAppGlyph from '@/components/product/WhatsAppGlyph';
import {
  CUROGRID,
  CUROGRID_ANDROID_SHOTS,
  CUROGRID_DOWNLOADS,
  CUROGRID_EVERY_PLAN,
  CUROGRID_FAQ,
  CUROGRID_FEATURES,
  CUROGRID_OG_IMAGE,
  CUROGRID_PLANS,
  CUROGRID_PLATFORMS,
  CUROGRID_TABLET_SHOTS,
  CUROGRID_TRIAL,
  CUROGRID_WEB_SHOTS,
  CUROGRID_WHATSAPP,
  SPECIALITIES,
  curogridWhatsapp,
} from '@/lib/products/curogrid';
import { inr } from '@/lib/products/molarplus';
import { absoluteUrl, pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

/**
 * /products/curogrid/: Curogrid's page on the parent company's domain, the product URL for the
 * product feeds. Same contract as the MolarPlus page: 200 at exactly this address, never a
 * redirect to curogrid.com. Facts come from lib/products/curogrid.ts; read its header first.
 */

const PATH = '/products/curogrid';
const PAGE_URL = absoluteUrl(PATH);
const TITLE = 'Curogrid: Clinic Management Software for Every Specialty | ClinoHealth';
const DESCRIPTION =
  'Discover Curogrid by ClinoHealth, clinic management software for Indian clinics of every specialty: tokens and queues, appointments, patient records, prescriptions, billing and reports.';

export const metadata = pageMetadata({
  title: TITLE,
  absoluteTitle: true,
  description: DESCRIPTION,
  path: PATH,
  image: CUROGRID_OG_IMAGE,
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
        brand: { '@type': 'Brand', name: CUROGRID.name, url: CUROGRID.url },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': software,
        name: CUROGRID.name,
        description: DESCRIPTION,
        url: PAGE_URL,
        sameAs: [CUROGRID.url, CUROGRID_DOWNLOADS.android],
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Clinic management software',
        operatingSystem: 'Web, Android',
        downloadUrl: CUROGRID_DOWNLOADS.android,
        image: CUROGRID_OG_IMAGE.url,
        screenshot: [...CUROGRID_WEB_SHOTS, ...CUROGRID_TABLET_SHOTS, ...CUROGRID_ANDROID_SHOTS].map((s) => s.src),
        featureList: CUROGRID_FEATURES.map((f) => f.title),
        audience: { '@type': 'BusinessAudience', audienceType: `Clinics: ${SPECIALITIES.join(', ')}` },
        author: org,
        publisher: org,
        offers: CUROGRID_PLANS.flatMap((plan) =>
          ([['monthly', plan.monthly, 'P1M'], ['yearly', plan.annual, 'P1Y']] as const).map(([cycle, price, duration]) => ({
            '@type': 'Offer',
            name: `Curogrid ${plan.name}, ${cycle}`,
            price,
            priceCurrency: 'INR',
            url: CUROGRID.pricingUrl,
            availability: 'https://schema.org/InStock',
            eligibleRegion: { '@type': 'Country', name: 'India' },
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price,
              priceCurrency: 'INR',
              billingDuration: duration,
              valueAddedTaxIncluded: false,
            },
          })),
        ),
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
        primaryImageOfPage: { '@type': 'ImageObject', url: CUROGRID_OG_IMAGE.url, width: CUROGRID_OG_IMAGE.width, height: CUROGRID_OG_IMAGE.height },
        breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Products', item: absoluteUrl('/products') },
          { '@type': 'ListItem', position: 3, name: CUROGRID.name, item: PAGE_URL },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: CUROGRID_FAQ.map((item) => ({
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
      <p className="text-sm font-semibold uppercase tracking-wider text-curo">{kicker}</p>
      <h2 id={id} className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lead}</p> : null}
    </div>
  );
}

function ShotStrip({ shots, width, sizes }: { shots: typeof CUROGRID_ANDROID_SHOTS; width: string; sizes: string }) {
  return (
    <ul className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
      {shots.map((shot) => (
        <li key={shot.src} className={`${width} shrink-0 snap-start`}>
          <figure>
            <a href={shot.src} target="_blank" rel="noopener" className="block overflow-hidden rounded-2xl border border-curo-edge bg-curo-tint">
              <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes={sizes} className="h-auto w-full" />
            </a>
            <figcaption className="mt-3 text-sm font-medium text-ink-muted">{shot.title}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default function CurogridPage() {
  const whatsapp = curogridWhatsapp();

  return (
    <>
      <JsonLd />

      {/* ── Hero ── */}
      <section aria-labelledby="curogrid-title" className="border-b border-curo-edge bg-gradient-to-b from-curo-tint via-curo-tint/40 to-white">
        <div className="mx-auto max-w-container px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-curo">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/products/" className="hover:text-curo">Products</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-ink">Curogrid</li>
            </ol>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Image src={CUROGRID.logo.src} alt="Curogrid logo" width={CUROGRID.logo.width} height={CUROGRID.logo.height} className="h-11 w-auto" priority />
              <h1 id="curogrid-title" className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
                Clinic management software for every specialty
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                Curogrid runs an Indian clinic from the first token to the last bill: the waiting line,
                appointments, patient files, prescriptions, tests and scans, billing and reports. It sets
                itself up for your speciality, on the web and on Android.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={CUROGRID.url} className={`${btn} bg-curo text-white hover:bg-curo-deep`}>
                  Visit Curogrid Website <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
                <a href={whatsapp} target="_blank" rel="noopener" className={`${btn} bg-wa text-white hover:opacity-90`}>
                  <WhatsAppGlyph className="h-5 w-5" /> Chat with Us on WhatsApp
                </a>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                <li><a href="#pricing" className="text-curo underline-offset-4 hover:underline">View pricing</a></li>
                <li><a href={CUROGRID.signupUrl} className="text-curo underline-offset-4 hover:underline">Start free trial</a></li>
                <li><a href={CUROGRID.demoUrl} className="text-curo underline-offset-4 hover:underline">Book a demo</a></li>
                <li><a href="#download" className="text-curo underline-offset-4 hover:underline">Download app</a></li>
              </ul>

              <p className="mt-8 rounded-xl border border-curo-edge bg-white px-4 py-3 text-sm leading-relaxed text-ink-muted">
                <strong className="font-semibold text-ink">Curogrid is developed and operated by {SITE.company}</strong>,
                the company behind ClinoHealth and MolarPlus. Official website:{' '}
                <a href={CUROGRID.url} className="font-semibold text-curo hover:underline">www.curogrid.com</a>
              </p>
            </div>

            <div className="lg:col-span-7">
              <a href={CUROGRID_WEB_SHOTS[0].src} target="_blank" rel="noopener" className="block overflow-hidden rounded-2xl border border-curo-edge bg-white">
                <Image
                  src={CUROGRID_WEB_SHOTS[0].src}
                  alt={CUROGRID_WEB_SHOTS[0].alt}
                  width={CUROGRID_WEB_SHOTS[0].width}
                  height={CUROGRID_WEB_SHOTS[0].height}
                  sizes="(min-width: 1280px) 740px, (min-width: 1024px) 58vw, 100vw"
                  className="h-auto w-full"
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialities ── */}
      <section aria-labelledby="specialities" className="border-b border-curo-edge bg-white">
        <div className="mx-auto max-w-container px-4 py-14 sm:px-6 lg:px-8">
          <h2 id="specialities" className="text-center text-sm font-semibold uppercase tracking-wider text-ink-muted">
            Set up for {SPECIALITIES.length} specialities
          </h2>
          <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {SPECIALITIES.map((s) => (
              <li key={s} className="rounded-full border border-curo-edge bg-curo-tint px-4 py-2 text-sm font-semibold text-curo-deep">{s}</li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-ink-muted">
            Each one comes with its own services, medicines and wording.{' '}
            <a href={CUROGRID.specialitiesUrl} className="font-semibold text-curo hover:underline">See every speciality</a>. Dental clinic? Use{' '}
            <Link href="/products/molarplus/" className="font-semibold text-curo hover:underline">MolarPlus</Link>.
          </p>
        </div>
      </section>

      {/* ── Platforms ── */}
      <section aria-labelledby="platforms" className="border-b border-curo-edge bg-white">
        <div className="mx-auto max-w-container px-4 py-14 sm:px-6 lg:px-8">
          <h2 id="platforms" className="text-center text-sm font-semibold uppercase tracking-wider text-ink-muted">Where Curogrid runs</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {CUROGRID_PLATFORMS.map((p) => {
              const body = (
                <>
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${p.href ? 'bg-curo-tint text-curo' : 'bg-gray-100 text-ink-muted'}`}>
                    <PlatformIcon platform={p.key} />
                  </span>
                  <span className="mt-4 text-lg font-bold text-ink">{p.name}</span>
                  <span className="mt-1 text-sm leading-relaxed text-ink-muted">{p.how}</span>
                  <span className={`mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold ${p.href ? 'text-curo' : 'text-ink-muted'}`}>
                    {p.href ? null : <Clock className="h-4 w-4" aria-hidden />}
                    {p.cta}
                  </span>
                </>
              );
              return (
                <li key={p.key}>
                  {p.href ? (
                    <a href={p.href} className="flex h-full flex-col rounded-2xl border border-curo-edge bg-white p-4 transition-colors hover:border-curo sm:p-5">{body}</a>
                  ) : (
                    <div className="flex h-full flex-col rounded-2xl border border-dashed border-curo-edge bg-white p-4 sm:p-5">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Features ── */}
      <section aria-labelledby="features" className="bg-white">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="features"
            kicker="What it does"
            title="From the first token to the last bill"
            lead="The desk, the doctor and the owner work on the same screens, so a patient's visit is recorded once."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CUROGRID_FEATURES.map((f) => (
              <li key={f.title} className="rounded-2xl border border-curo-edge bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-curo-tint text-curo">
                  <Check className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Web screenshots ── */}
      <section aria-labelledby="web-screenshots" id="screenshots" className="border-y border-curo-edge bg-curo-tint/60">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="web-screenshots"
            kicker="Web app"
            title="Curogrid on a computer"
            lead="Real screens from the Curogrid web app, captured from a sample clinic. It runs in the browser, with nothing to install."
          />
          <div className="mt-10">
            <DesktopGallery tone="curo" accent={CUROGRID.accent} sets={[{ key: 'web', label: 'the web', shots: CUROGRID_WEB_SHOTS }]} />
          </div>
          <div className="mt-8">
            <a href={CUROGRID.appUrl} className={`${btn} border border-curo bg-white text-curo hover:bg-curo-tint`}>
              <PlatformIcon platform="web" className="h-4 w-4" /> Open the web app
            </a>
          </div>
        </div>
      </section>

      {/* ── Tablet and phone ── */}
      <section aria-labelledby="tablet-screenshots" className="bg-white">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="tablet-screenshots"
            kicker="Tablet"
            title="On a tablet at the desk or in the room"
            lead="The same web app on a tablet's browser, laid out for the bigger screen."
          />
          <ShotStrip shots={CUROGRID_TABLET_SHOTS} width="w-64 sm:w-72" sizes="288px" />

          <div className="mt-16">
            <SectionHeading
              id="mobile-screenshots"
              kicker="Android app"
              title="The token line in the doctor's hand"
              lead="Call the next token, see the day's numbers and check a patient's file from an Android phone."
            />
          </div>
          <ShotStrip shots={CUROGRID_ANDROID_SHOTS} width="w-44 sm:w-52" sizes="208px" />
          <div className="mt-8">
            <a href={CUROGRID_DOWNLOADS.android} className={`${btn} border border-curo bg-white text-curo hover:bg-curo-tint`}>
              <PlatformIcon platform="android" className="h-4 w-4" /> Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section aria-labelledby="pricing-title" id="pricing" className="border-y border-curo-edge bg-curo-tint/60">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            id="pricing-title"
            kicker="Pricing"
            title="Two plans, nothing clinical held back"
            lead={`Prices before 18% GST. Paying yearly costs 20% less. Every new clinic starts with ${CUROGRID_TRIAL}.`}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {CUROGRID_PLANS.map((plan) => (
              <div key={plan.key} className={`flex flex-col rounded-2xl border bg-white p-7 ${plan.featured ? 'border-curo' : 'border-curo-edge'}`}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-extrabold text-ink">{plan.name}</h3>
                  {plan.featured ? <span className="rounded-full bg-curo px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Most popular</span> : null}
                </div>
                <p className="mt-2 text-ink-muted">{plan.tagline}</p>
                <p className="mt-6">
                  <span className="text-4xl font-extrabold text-ink">{inr(plan.monthly)}</span>
                  <span className="ml-1 text-ink-muted">a month + GST</span>
                </p>
                <p className="mt-2 text-sm text-ink-muted">or {inr(plan.annual)} a year + GST</p>
                <ul className="mt-6 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-curo" strokeWidth={2.5} aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={CUROGRID.signupUrl} className={`${btn} mt-8 ${plan.featured ? 'bg-curo text-white hover:bg-curo-deep' : 'border border-curo text-curo hover:bg-curo-tint'}`}>
                  Start free trial
                </a>
              </div>
            ))}
            <div className="rounded-2xl border border-curo-edge bg-white p-7">
              <h3 className="text-lg font-bold text-ink">In every plan</h3>
              <ul className="mt-4 space-y-2.5">
                {CUROGRID_EVERY_PLAN.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-curo" strokeWidth={2.5} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-curo-edge bg-white p-6 md:flex-row md:items-center md:justify-between">
            <p className="text-ink-muted">
              Not sure which plan fits your clinic? Ask us on WhatsApp. Full details are on{' '}
              <a href={CUROGRID.pricingUrl} className="font-semibold text-curo hover:underline">curogrid.com/pricing</a>.
            </p>
            <a href={curogridWhatsapp(CUROGRID_WHATSAPP.pricing)} target="_blank" rel="noopener" className={`${btn} shrink-0 bg-wa text-white hover:opacity-90`}>
              <WhatsAppGlyph className="h-5 w-5" /> Ask about pricing
            </a>
          </div>
        </div>
      </section>

      {/* ── Download ── */}
      <section aria-labelledby="download-title" id="download" className="bg-white">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading id="download-title" kicker="Get started" title="Open Curogrid on your devices" lead="Sign in with the same account on the web and on Android." />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CUROGRID_PLATFORMS.map((p) =>
              p.href ? (
                <li key={p.key}>
                  <a href={p.href} className="flex min-h-16 items-center gap-3 rounded-2xl border border-curo-edge px-5 py-4 font-semibold text-ink transition-colors hover:border-curo">
                    <PlatformIcon platform={p.key} className="h-6 w-6 text-curo" />
                    <span><span className="block text-xs font-medium text-ink-muted">{p.name}</span>{p.cta}</span>
                  </a>
                </li>
              ) : (
                <li key={p.key} className="flex min-h-16 items-center gap-3 rounded-2xl border border-dashed border-curo-edge px-5 py-4 font-semibold text-ink-muted">
                  <PlatformIcon platform={p.key} className="h-6 w-6" />
                  <span><span className="block text-xs font-medium">{p.name}</span>{p.cta}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-title" className="border-t border-curo-edge bg-white">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading id="faq-title" kicker="Questions" title="Curogrid, in plain answers" />
          <dl className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {CUROGRID_FAQ.map((item) => (
              <div key={item.q}>
                <dt className="text-lg font-bold text-ink">{item.q}</dt>
                <dd className="mt-2 leading-relaxed text-ink-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Contact ── */}
      <section aria-labelledby="contact-title" className="bg-curo-deep text-white">
        <div className="mx-auto grid max-w-container gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <h2 id="contact-title" className="text-3xl font-extrabold tracking-tight md:text-4xl">Talk to the Curogrid team</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">
              Ask about your speciality, pricing or moving your clinic&apos;s records across. Message us on WhatsApp
              and a person replies.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={whatsapp} target="_blank" rel="noopener" className={`${btn} bg-wa text-white hover:opacity-90`}>
                <WhatsAppGlyph className="h-5 w-5" /> Chat with Us on WhatsApp
              </a>
              <a href={CUROGRID.demoUrl} className={`${btn} bg-white text-curo-deep hover:bg-curo-tint`}>
                Book a demo <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
          <dl className="space-y-5 text-white/80 lg:col-span-5">
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
              <div>
                <dt className="font-semibold text-white">WhatsApp and phone</dt>
                <dd><a href={whatsapp} target="_blank" rel="noopener" className="hover:underline">{CUROGRID.whatsappDisplay}</a></dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
              <div>
                <dt className="font-semibold text-white">Email</dt>
                <dd><a href={`mailto:${CUROGRID.supportEmail}`} className="hover:underline">{CUROGRID.supportEmail}</a></dd>
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

      <StickyCta whatsappHref={whatsapp} siteHref={CUROGRID.url} siteLabel="Visit website" accent={CUROGRID.accent} />
    </>
  );
}
