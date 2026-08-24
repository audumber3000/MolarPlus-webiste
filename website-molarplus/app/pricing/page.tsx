import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Globe } from 'lucide-react';
import { SITE_URL, colors, DEFAULT_OG_IMAGE } from '@/lib/seo';
import { COMPANY_STATS } from '@/lib/stats';
import { APP_URL } from '@/lib/constants';
import { SignupLink } from '@/components/TrackedCTA';
import PricingPlans from '@/components/PricingPlans';
import PlanComparison from '@/components/PlanComparison';

// The date the legacy free single-clinic accounts move onto a paid plan.
// Referenced in the FAQ here and in /terms-of-use — keep the two in step.
const LEGACY_FREE_END = '31 October 2026';

// The clinic count, single-sourced so /pricing and the homepage cannot disagree.
const CLINIC_COUNT = COMPANY_STATS[0].value;

export const metadata: Metadata = {
  title: 'Pricing - Plus ₹399, Pro ₹999 & Growth ₹1500/mo',
  description:
    'Dental clinic software pricing: Plus ₹399, Pro ₹999 and Growth ₹1,500 + GST a month ($5/$10/$15). Save 20% annually. 7-day free trial, no card.',
  keywords:
    'dental software pricing India, dental clinic management software cost, multi-branch dental software, dental practice management pricing INR USD, MolarPlus plans',
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: 'Pricing - Plus ₹399, Pro ₹999 & Growth ₹1500/mo | MolarPlus',
    description:
      'Plus ₹399 for one clinic, Pro ₹999 for bigger teams, Growth ₹1,500 for multiple branches. 20% off annually. Start with a 7-day free trial.',
    url: `${SITE_URL}/pricing`,
    images: [DEFAULT_OG_IMAGE],
  },
};

const faqs = [
  {
    q: 'What is the difference between Plus, Pro and Growth?',
    a: 'They map to how big the practice is, not to how much of the product you get — every clinical feature is in all three. Plus covers one clinic with up to 5 staff logins, 500 new patients and 500 appointments a month and 100 GB of storage, and sends WhatsApp and email reminders from a verified MolarPlus sender. Pro raises that to 5 branches, 10 staff logins, 1,000 patients and 1,000 appointments a month and 150 GB, and adds messaging from your own WhatsApp number, per-person permissions across all 13 modules, the unified email and WhatsApp inbox, local competitor tracking, your own clinic website, unlimited report history with bulk export and priority support. Growth removes the ceilings entirely — unlimited branches, staff, patients, appointments and storage — and adds cross-branch consolidated reporting plus assisted migration with a named contact.',
  },
  {
    q: 'How much does each plan cost?',
    a: 'In India, Plus is ₹399 + GST per month, Pro is ₹999 + GST and Growth is ₹1,500 + GST. Billed annually you save 20% on all three: Plus works out to ₹319/month (₹3,830/year), Pro to ₹799/month (₹9,590/year) and Growth to ₹1,200/month (₹14,400/year). For other countries there is no GST and the plans are $5, $10 and $15 per month, or $48, $96 and $144 per year.',
  },
  {
    q: 'Is GST included in the price?',
    a: 'No — Indian prices are quoted excluding GST, as is standard for software here. GST of 18% is added at checkout, so Plus is ₹471/month, Pro is ₹1,179/month and Growth is ₹1,770/month all-in. International pricing in USD has no GST applied. A GST invoice is issued for every payment, so registered clinics can claim input credit.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every new account gets 7 days of Pro free, with no credit card required to start. You see the whole product, including multi-branch, before deciding. At the end you choose Plus, Pro or Growth, and nothing is charged automatically if you do not pick one.',
  },
  {
    q: 'I already use MolarPlus for free. What happens to my account?',
    a: `Nothing changes immediately. Every clinic that signed up while MolarPlus was free for a single location keeps full access at no charge until ${LEGACY_FREE_END}, and we will email you well before that date. After it, your account moves onto Plus — ₹399 + GST a month, or ₹319 a month billed annually. Your data, settings and history carry across untouched, and your records stay exportable whatever you decide.`,
  },
  {
    q: 'Why is MolarPlus not free any more?',
    a: 'Because the honest version of a free plan is a limited one, and we did not want to build that. Running WhatsApp delivery, cloud storage, backups, X-ray capture and support properly costs money on every single clinic. Charging ₹399 lets us keep every clinical feature in the entry plan rather than holding parts back to create an upgrade path.',
  },
  {
    q: 'Whose WhatsApp number do reminders come from?',
    a: 'On Plus they are sent from a verified MolarPlus number, and email notifications from a verified MolarPlus address — patients see the message, you send nothing yourself, and there is nothing to set up. Pro and Growth connect your clinic\u2019s own WhatsApp number instead, so reminders, invoices and prescriptions arrive from the number your patients already have saved. Connecting your own number is a one-time setup inside the app.',
  },
  {
    q: 'What happens if I go over the patient or appointment limit?',
    a: 'Nothing breaks and nothing is deleted. We will tell you inside the app as you approach the limit, and again when you reach it, so you can move up a plan before it interrupts anyone. Limits count new records created in a calendar month, not your total patient list, so an existing patient returning for a second visit does not count again.',
  },
  {
    q: 'Can I switch between plans?',
    a: 'Yes, in either direction, from Subscription in the app. Upgrades take effect immediately. Downgrades take effect at your next renewal date, so you keep what you have paid for. If you downgrade from Growth while running multiple branches, you will need to pick which single branch stays active.',
  },
  {
    q: 'Do I pay per branch?',
    a: 'No, on either plan. Pro is one flat price for up to 5 locations and Growth is one flat price for any number. A five-branch practice on Pro pays ₹200 per clinic; a ten-branch group on Growth pays ₹150. The price is per account, never per location.',
  },
];

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MolarPlus Dental Clinic Management Software',
  description:
    'Dental practice management software. Plus (₹399 + GST/mo, $5/mo) covers one clinic with 5 staff, 500 patients a month and 100 GB storage. Pro (₹999 + GST/mo, $10/mo) raises it to 5 branches, 10 staff, 1,000 patients a month and 150 GB, and adds your own WhatsApp number, granular permissions and the unified inbox. Growth (₹1,500 + GST/mo, $15/mo) removes every ceiling and adds cross-branch reporting. 20% off billed annually.',
  brand: { '@type': 'Brand', name: 'MolarPlus' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Plus',
      price: '399',
      priceCurrency: 'INR',
      priceValidUntil: '2027-12-31',
      description:
        'India: ₹399 + GST/month, or ₹319/month billed annually (₹3,830/year). The complete product for one clinic: 5 staff logins, 500 patients and 500 appointments a month, 100 GB storage.',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '999',
      priceCurrency: 'INR',
      priceValidUntil: '2027-12-31',
      description:
        'India: ₹999 + GST/month, or ₹799/month billed annually (₹9,590/year). Adds up to 5 branches, 10 staff logins, 1,000 patients and appointments a month, 150 GB storage, your own WhatsApp number, granular permissions, unified inbox and priority support.',
    },
    {
      '@type': 'Offer',
      name: 'Growth',
      price: '1500',
      priceCurrency: 'INR',
      priceValidUntil: '2027-12-31',
      description:
        'India: ₹1,500 + GST/month, or ₹1,200/month billed annually (₹14,400/year). Removes every ceiling — unlimited branches, staff, patients, appointments and storage — and adds cross-branch consolidated reporting and assisted migration.',
    },
    {
      '@type': 'Offer',
      name: 'Plus (international)',
      price: '5',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      description: 'Other countries: $5/month, or $4/month billed annually ($48/year).',
    },
    {
      '@type': 'Offer',
      name: 'Pro (international)',
      price: '10',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      description: 'Other countries: $10/month, or $8/month billed annually ($96/year).',
    },
    {
      '@type': 'Offer',
      name: 'Growth (international)',
      price: '15',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      description: 'Other countries: $15/month, or $12/month billed annually ($144/year).',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero + plans */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Lead on the clinics, not the number on the tag. The cards are
                one scroll below and can carry the prices themselves; the job up
                here is to make someone want to read them. CLINIC_COUNT comes
                from lib/stats.ts so this cannot drift from the homepage. */}
            <div
              className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: colors.primary }}
            >
              Pricing
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {CLINIC_COUNT} dental clinics already run on MolarPlus
            </h1>
            <p className="text-sm text-gray-500">
              Pricing in <strong>India (INR, excluding GST)</strong> and{' '}
              <strong>other countries (USD)</strong>. Use the selector below to switch.
            </p>
          </div>
          <PricingPlans />

          {/* Tinted, not white: three white plan cards sit directly above, and a
              third white block would read as a continuation of them rather
              than as the different kind of thing it is. The whole banner is
              the link so the tap target matches its visual weight. */}
          <div className="max-w-6xl mx-auto">
            <Link
              href="/pricing/international"
              className="group flex flex-col gap-4 rounded-2xl border-2 p-5 text-left transition-all hover:shadow-md sm:flex-row sm:items-center sm:p-6"
              style={{ borderColor: `${colors.primary}33`, backgroundColor: `${colors.primary}0D` }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${colors.primary}1A` }}
              >
                <Globe className="h-6 w-6" style={{ color: colors.primary }} />
              </div>

              <div className="flex-1">
                <p className="font-bold text-gray-900">
                  Outside India? See the price in your own currency.
                </p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  Plus, Pro and Growth converted for 20 countries across South Asia and the Middle
                  East, each with its local tax rate.
                </p>
              </div>

              <span
                className="inline-flex items-center gap-1.5 font-semibold whitespace-nowrap"
                style={{ color: colors.primary }}
              >
                View the table
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Full comparison */}
      <section className="py-16 bg-white" aria-labelledby="compare-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="compare-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Compare plans
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Every plan carries the whole clinical product. What changes is how many people, how many
            locations, and how far back you can look.
          </p>
          <PlanComparison />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Pricing questions
          </h2>
          {/*
            <details> rather than a JS accordion. The rest of this page is
            static, and an unopened answer still sits in the DOM, so the FAQ
            schema above, in-page find and search crawlers all see the full
            text whether or not anyone clicks.
          */}
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-gray-900 hover:text-gray-600">
                  {f.q}
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="pb-5 pr-9 leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Try Pro free for 7 days.
          </h2>
          <p className="text-gray-600 mb-8">
            No credit card to start. Get your clinic running on MolarPlus in minutes, then pick the
            plan that fits;{' '}
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">talk to us</Link> if you have questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignupLink
              href={`${APP_URL}/signup`}
              location="pricing_page"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start free trial <ArrowRight className="w-5 h-5" />
            </SignupLink>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
