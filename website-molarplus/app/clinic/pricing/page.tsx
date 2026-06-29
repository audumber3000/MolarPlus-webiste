import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Building2, GitBranch, BarChart3, Headphones } from 'lucide-react';
import { SITE_URL, colors } from '@/lib/seo';
import { APP_URL } from '@/lib/constants';
import PricingPlans from '@/components/PricingPlans';

export const metadata: Metadata = {
  title: 'Pricing - Free for a Single Clinic | MolarPlus Dental Software',
  description:
    'MolarPlus is free forever for a single clinic — every feature included, no trial, no credit card. Pay only to run multiple branches: Multi-Branch from ₹899/mo (India) or $10/mo. Country-based pricing.',
  keywords:
    'free dental software, dental clinic management free, dental practice software pricing India, multi-branch dental software, clinic software pricing INR USD',
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: 'Pricing - Free for a Single Clinic | MolarPlus',
    description:
      'Your whole clinic, free. Every feature included for a single clinic. Pay only when you grow to multiple branches — from ₹899/mo (India) or $10/mo.',
    url: `${SITE_URL}/pricing`,
  },
};

// The full product — all of this is FREE for a single clinic.
const featureGroups: { group: string; items: string[] }[] = [
  {
    group: 'Patients & Clinical',
    items: [
      'Patient management — records, history, intake, birthday/DOB reminders',
      'Digital case papers / case sheets',
      'Interactive dental charting (tooth chart, surfaces, conditions)',
      'Treatment planning',
      'Prescriptions — medication catalogue, PDF generation, WhatsApp share',
      'Media uploads — X-rays, DICOM viewer, file thumbnails',
      'Lab order management',
      'Digital consent forms',
    ],
  },
  {
    group: 'Scheduling & Front Desk',
    items: [
      'Appointment scheduling + calendar (day / week / month views)',
      'Public online booking page',
      'Patient visit history',
    ],
  },
  {
    group: 'Billing & Finance',
    items: ['Billing & invoicing (GST / tax-aware)', 'Payment tracking'],
  },
  {
    group: 'Team & Admin',
    items: [
      'Staff & roles (multi-user access)',
      'Staff attendance tracking',
      'Permissions / role-based access control',
      'Inventory & vendor management',
      'Referring-doctor management',
      'Customisable message & document templates (invoice / prescription / consent)',
    ],
  },
  {
    group: 'Communication & Growth',
    items: [
      'WhatsApp + email reminders & notifications',
      'Own-number WhatsApp (WA Reach — send from your own number, no per-message charge)',
      'Google review management',
      'AI report generation',
      'AI handwritten-register scanner (digitise paper patient registers)',
    ],
  },
  {
    group: 'Platform',
    items: [
      'Works on web, iOS / Android mobile app, and desktop app',
      'Cloud storage, backup & sync',
      'Dashboard analytics & reports',
    ],
  },
];

const multiBranchAdds = [
  { icon: Building2, title: 'Add unlimited clinic branches', desc: 'Spin up new locations under one account as you grow.' },
  { icon: GitBranch, title: 'Switch between branches in one login', desc: 'Move between locations without logging out or juggling accounts.' },
  { icon: BarChart3, title: 'Cross-branch reporting', desc: 'See patients, revenue and performance across every location in one view.' },
  { icon: Headphones, title: 'Priority support', desc: 'Faster response times for multi-location groups.' },
];

const faqs = [
  {
    q: 'Is MolarPlus really free for a single clinic?',
    a: 'Yes. A single clinic gets the entire product — every clinical, scheduling, billing, team and communication feature — for ₹0 / $0, forever. There is no trial that expires and no credit card required. It is free because it is one clinic, not a limited version of the software.',
  },
  {
    q: 'What do I get on the free plan?',
    a: 'Everything: patient records and charting, treatment planning, prescriptions, lab orders, consent forms, appointments and online booking, billing, staff and roles, inventory, WhatsApp and email reminders, Google reviews, AI reports, and the web, mobile and desktop apps. Nothing is feature-locked behind a paid tier.',
  },
  {
    q: 'So what does the paid plan add?',
    a: 'Only multi-branch capability. The Multi-Branch plan lets you add unlimited clinic branches, switch between them in a single login, run cross-branch reporting, and get priority support. If you operate one location, you never need it.',
  },
  {
    q: 'How much is Multi-Branch?',
    a: 'In India it is ₹899/month, or ₹675/month billed annually (₹8,100/year, ~25% off). For other countries it is $10/month, or $8/month billed annually ($96/year).',
  },
  {
    q: 'Is there a free trial?',
    a: 'There is no trial — because a single clinic is simply free, with no time limit. You only pay if and when you add a second branch.',
  },
];

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MolarPlus Dental Clinic Management Software',
  description:
    'Free forever for a single clinic with every feature included. Multi-Branch plan (₹899/mo in India or $10/mo) adds unlimited branches, single-login switching, cross-branch reporting and priority support.',
  brand: { '@type': 'Brand', name: 'MolarPlus' },
  offers: [
    {
      '@type': 'Offer',
      name: 'Single Clinic',
      price: '0',
      priceCurrency: 'INR',
      description: 'Free forever for one clinic. Every feature included — no trial, no credit card.',
    },
    {
      '@type': 'Offer',
      name: 'Multi-Branch',
      price: '899',
      priceCurrency: 'INR',
      priceValidUntil: '2026-12-31',
      description:
        'India: ₹899/month (₹675/mo billed annually). Adds unlimited branches, single-login switching, cross-branch reporting and priority support.',
    },
    {
      '@type': 'Offer',
      name: 'Multi-Branch USD',
      price: '10',
      priceCurrency: 'USD',
      priceValidUntil: '2026-12-31',
      description: 'Other countries: $10/month ($8/mo billed annually).',
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
              Your whole clinic, free.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Every feature in MolarPlus is free, forever, for a single clinic — no trial, no credit
              card. The only reason to pay is running more than one branch from one account.
            </p>
            <p className="text-sm text-gray-500">
              Pricing in <strong>India (INR)</strong> and <strong>other countries (USD)</strong>. Use the selector below to switch.
            </p>
          </div>
          <PricingPlans />
        </div>
      </section>

      {/* Full feature set — all free for a single clinic */}
      <section className="py-16 bg-white" aria-labelledby="everything-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold"
              style={{ backgroundColor: `${colors.primary}12`, color: colors.primary }}
            >
              Free for a single clinic
            </span>
          </div>
          <h2 id="everything-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Everything below is included at ₹0 / $0
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            This is the full product, not a stripped-down free tier. A solo clinic gets all of it.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureGroups.map((g) => (
              <div key={g.group}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-4">{g.group}</h3>
                <ul className="space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The only paid bit: Multi-Branch */}
      <section className="py-16 bg-gray-50" aria-labelledby="multibranch-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="multibranch-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              The only paid plan: Multi-Branch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pay only when you grow to multiple locations. Multi-Branch keeps everything above and
              adds the tools to run several clinics from one account.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {multiBranchAdds.map(({ icon: Icon, title, desc }) => (
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
            <strong>India:</strong> ₹899/month, or ₹675/month billed annually (₹8,100/year).{' '}
            <strong>Other countries:</strong> $10/month, or $8/month billed annually ($96/year).
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
            Start free — pay only when you grow.
          </h2>
          <p className="text-gray-600 mb-8">
            Get your whole clinic running on MolarPlus in minutes. Add branches whenever you&apos;re ready;{' '}
            <Link href="/contact" className="text-blue-600 hover:underline font-medium">talk to us</Link> if you have questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start free <ArrowRight className="w-5 h-5" />
            </a>
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
