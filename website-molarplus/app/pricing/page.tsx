import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  ArrowRight,
  Building2,
  BarChart3,
  Headphones,
  Users,
  ShieldCheck,
  Inbox,
  Star,
  Download,
  Globe,
} from 'lucide-react';
import { SITE_URL, colors } from '@/lib/seo';
import { APP_URL } from '@/lib/constants';
import { SignupLink } from '@/components/TrackedCTA';
import PricingPlans from '@/components/PricingPlans';
import PlanComparison from '@/components/PlanComparison';

// The date the legacy free single-clinic accounts move onto a paid plan.
// Referenced in the FAQ here and in /terms-of-use — keep the two in step.
const LEGACY_FREE_END = '31 October 2026';

export const metadata: Metadata = {
  title: 'Pricing - Plus ₹399, Pro ₹999 & Growth ₹1500/mo | MolarPlus',
  description:
    'MolarPlus pricing: Plus at ₹399 + GST/month ($5) for one clinic, Pro at ₹999 ($10) for bigger teams, Growth at ₹1,500 ($15) for multi-branch practices. Save 20% billed annually. 7-day free trial.',
  keywords:
    'dental software pricing India, dental clinic management software cost, multi-branch dental software, dental practice management pricing INR USD, MolarPlus plans',
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: 'Pricing - Plus ₹399, Pro ₹999 & Growth ₹1500/mo | MolarPlus',
    description:
      'Plus ₹399 for one clinic, Pro ₹999 for bigger teams, Growth ₹1,500 for multiple branches. 20% off annually. Start with a 7-day free trial.',
    url: `${SITE_URL}/pricing`,
  },
};

const proAdds = [
  {
    icon: Users,
    title: 'Unlimited staff logins',
    desc: 'Plus covers up to 5 people. Pro removes the ceiling for larger teams.',
  },
  {
    icon: ShieldCheck,
    title: 'Granular permissions',
    desc: 'Set read, write, edit and delete per person across all 13 modules, instead of the three fixed roles.',
  },
  {
    icon: Inbox,
    title: 'Unified inbox',
    desc: 'Email and WhatsApp conversations in one thread view on the desktop app. Plus sends messages; Pro holds the conversation.',
  },
  {
    icon: Download,
    title: 'Full history & data export',
    desc: 'Audit logging, unlimited report history and bulk export of your practice data. Plus keeps 12 months.',
  },
];

const growthAdds = [
  {
    icon: Building2,
    title: 'Unlimited clinic branches',
    desc: 'Add locations under one account and switch between them without logging out. One flat price, however many you run.',
  },
  {
    icon: BarChart3,
    title: 'Cross-branch reporting',
    desc: 'Revenue, patients and performance across every location in a single consolidated view.',
  },
  {
    icon: Star,
    title: 'Reviews & competitor tracking',
    desc: 'Manage Google reviews and see how each clinic ranks against others nearby.',
  },
  {
    icon: Headphones,
    title: 'Assisted migration & a named contact',
    desc: 'Hands-on help moving existing records across, and a person who knows your account.',
  },
];

const faqs = [
  {
    q: 'What is the difference between Plus, Pro and Growth?',
    a: 'They map to how big the practice is, not to how much of the product you get. Plus is the complete product for a single clinic with up to 5 staff, 300 new patients and 300 appointments a month — charting, treatment plans, prescriptions, appointments, online booking, billing, consent forms, inventory, WhatsApp from your own number, the full report library and all four apps. Pro is the same clinic with a bigger team in it: unlimited staff logins, per-person permissions across all 13 modules, the unified email and WhatsApp inbox, audit logging, unlimited report history with bulk export, and priority support. Growth is for practices at more than one address: unlimited branches switched from a single login, cross-branch reporting, Google review and competitor tracking, and assisted migration with a named contact.',
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
    a: `Nothing changes immediately. Every clinic that signed up while MolarPlus was free for a single location keeps full access at no charge until ${LEGACY_FREE_END}, and we will email you well before that date. After it you can move to Plus at ₹299/month — locked for your first 12 months, below the ₹399 list price, as thanks for being early. Your data, settings and history carry across untouched, and your records stay exportable whatever you decide.`,
  },
  {
    q: 'Why is MolarPlus not free any more?',
    a: 'Because the honest version of a free plan is a limited one, and we did not want to build that. Running WhatsApp delivery, cloud storage, backups, X-ray capture and support properly costs money on every single clinic. Charging ₹399 lets us keep every clinical feature in the entry plan rather than holding parts back to create an upgrade path.',
  },
  {
    q: 'Can I switch between plans?',
    a: 'Yes, in either direction, from Subscription in the app. Upgrades take effect immediately. Downgrades take effect at your next renewal date, so you keep what you have paid for. If you downgrade from Growth while running multiple branches, you will need to pick which single branch stays active.',
  },
  {
    q: 'Do I pay per branch on Growth?',
    a: 'No. Growth is one flat price regardless of how many locations you run. Adding a fourth or a fourteenth branch costs nothing extra — a three-branch group on Growth is paying ₹500 per clinic, and a ten-branch group ₹150.',
  },
];

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MolarPlus Dental Clinic Management Software',
  description:
    'Dental practice management software. Plus (₹399 + GST/mo, $5/mo) covers a single clinic in full. Pro (₹999 + GST/mo, $10/mo) adds unlimited staff, granular permissions, unified inbox, audit logging and priority support. Growth (₹1,500 + GST/mo, $15/mo) adds unlimited branches, cross-branch reporting and review management. 20% off billed annually.',
  brand: { '@type': 'Brand', name: 'MolarPlus' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Plus',
      price: '399',
      priceCurrency: 'INR',
      priceValidUntil: '2027-12-31',
      description:
        'India: ₹399 + GST/month, or ₹319/month billed annually (₹3,830/year). The complete product for one clinic, up to 5 staff logins.',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '999',
      priceCurrency: 'INR',
      priceValidUntil: '2027-12-31',
      description:
        'India: ₹999 + GST/month, or ₹799/month billed annually (₹9,590/year). Adds unlimited branches, cross-branch reporting, unlimited staff, granular permissions, unified inbox and priority support.',
    },
    {
      '@type': 'Offer',
      name: 'Growth',
      price: '1500',
      priceCurrency: 'INR',
      priceValidUntil: '2027-12-31',
      description:
        'India: ₹1,500 + GST/month, or ₹1,200/month billed annually (₹14,400/year). Adds unlimited clinic branches, cross-branch reporting, Google review and competitor tracking, and assisted migration.',
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
₹399 to run a clinic. ₹1,500 to run five.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Every plan is the real product — charting, treatment plans, billing, consent forms and
              WhatsApp from your own number. Plus runs one clinic, Pro adds the controls a bigger
              team needs, and Growth adds the branches.
            </p>
            <p className="text-sm text-gray-500">
              Pricing in <strong>India (INR, excluding GST)</strong> and{' '}
              <strong>other countries (USD)</strong>. Use the selector below to switch.
            </p>
          </div>
          <PricingPlans />

          {/* Tinted, not white: two white plan cards sit directly above, and a
              third white block would read as a continuation of them rather
              than as the different kind of thing it is. The whole banner is
              the link so the tap target matches its visual weight. */}
          <div className="max-w-6xl mx-auto">
            <Link
              href="/pricing/international"
              className="group flex flex-col gap-4 rounded-2xl border-2 p-5 transition-all hover:shadow-md sm:flex-row sm:items-center sm:p-6"
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
                  Plus and Pro converted for 20 countries across South Asia and the Middle East,
                  each with its local tax rate.
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

      {/* What Pro adds */}
      <section className="py-16 bg-gray-50" aria-labelledby="pro-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="pro-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              What Pro adds
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Still one clinic, but a bigger team inside it — and tighter control over who can do
              what, and what you can look back at.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {proAdds.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-200 flex gap-4">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Icon className="h-5 w-5" style={{ color: colors.primary }} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Growth */}
          <div className="mt-16 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">What Growth adds</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The step you take when the practice outgrows a single address. Everything in Pro, for
              every location you run.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {growthAdds.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-200 flex gap-4">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Icon className="h-5 w-5" style={{ color: colors.primary }} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 mt-10">
            <strong>India:</strong> Plus ₹399, Pro ₹999, Growth ₹1,500 — all + GST, all 20% off
            billed annually. <strong>Other countries:</strong> $5, $10 and $15/month.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Pricing questions
          </h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
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
