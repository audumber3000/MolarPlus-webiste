import type { Metadata } from 'next';
import Link from 'next/link';
import { FlaskConical, ArrowRight } from 'lucide-react';
import HomeClient from '@/components/HomeClient';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, colors } from '@/lib/seo';

/*
 * MolarPlus Clinic is the homepage.
 *
 * The site used to open on a product chooser that asked every visitor to pick
 * Clinic or Lab before seeing anything. Almost everyone arriving here wants the
 * clinic product, so that page spent the most valuable screen on a question
 * most visitors could not answer. Clinic now owns `/`, and Lab is a single
 * page reached from the section near the bottom of this one.
 *
 * `/clinic` 301-redirects here (see next.config.js) so the two never compete
 * as duplicates.
 */

export const metadata: Metadata = {
  title: 'MolarPlus: Dental Clinic Management Software from ₹399/month',
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'MolarPlus: Dental Clinic Management Software',
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/molarplus-logo-transparent.svg`,
  description: DEFAULT_DESCRIPTION,
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sky Loft, opposite Golf Course, Shastrinagar',
      addressLocality: 'Yerawada, Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411006',
      addressCountry: 'IN',
    },
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@molarplus.com',
    contactType: 'customer support',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.instagram.com/molarplus_dental/',
    'https://www.facebook.com/profile.php?id=61575363063274',
    'https://x.com/Molarplus_',
    'https://www.linkedin.com/company/molarplus/',
    'https://www.youtube.com/@MolarPlus',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MolarPlus Dental Clinic Management Software',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  offers: [
    { '@type': 'Offer', name: 'Plus', price: '399', priceCurrency: 'INR', priceValidUntil: '2027-12-31', description: 'India ₹399 + GST/mo or $5/mo internationally, 20% off billed annually. The complete product for one clinic, up to 5 staff logins.' },
    { '@type': 'Offer', name: 'Pro', price: '999', priceCurrency: 'INR', priceValidUntil: '2027-12-31', description: 'India ₹999 + GST/mo or $10/mo internationally, 20% off billed annually. Adds unlimited staff logins, granular permissions, the unified inbox, audit logging and priority support.' },
    { '@type': 'Offer', name: 'Growth', price: '1500', priceCurrency: 'INR', priceValidUntil: '2027-12-31', description: 'India ₹1,500 + GST/mo or $15/mo internationally, 20% off billed annually. Adds unlimited clinic branches, cross-branch reporting, review and competitor tracking, and assisted migration.' },
  ],
  // NO aggregateRating here, deliberately.
  //
  // This previously claimed ratingValue 4.9 from reviewCount 180 — a number
  // copied from the clinic count, not from any real reviews. Google requires an
  // aggregate rating to reflect genuine reviews visible on the page, and a
  // spammy-markup manual action strips rich results across the whole domain,
  // including the FAQ snippets every other page depends on.
  //
  // Add it back only when real, countable reviews exist and are rendered on the
  // page — the same standard lib/social-proof.ts already applies to award badges.
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there a free trial of MolarPlus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every new account gets 7 days of the Pro plan free, with no credit card required to start. After the trial you choose Plus at Rs 399 + GST/month for a single clinic, Pro at Rs 999 for a bigger team, or Growth at Rs 1,500 for multiple branches. Nothing is charged automatically if you do not pick a plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MolarPlus work on mobile phones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MolarPlus has native apps on both iOS and Android. You can manage your entire clinic from your smartphone: appointments, patients, records, anywhere, anytime.',
      },
    },
    {
      '@type': 'Question',
      name: 'How secure is my patient data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Patient data security is our top priority. MolarPlus uses encrypted data storage, role-based access control, and HIPAA-compliant infrastructure. Your patient records are never shared and are backed up automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from my current software to MolarPlus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide free data migration assistance for all new clinics. Our onboarding team will help you move your existing patient records to MolarPlus so you can be up and running within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does MolarPlus cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three plans, and they map to the size of the practice rather than to how much of the product you get. Plus is Rs 399 + GST per month (5 US dollars internationally) and covers one clinic in full: charting, treatment plans, prescriptions, appointments, online booking, billing, consent forms, inventory, WhatsApp from your own number and up to 5 staff logins. Pro is Rs 999 + GST (10 US dollars) for the same clinic with a bigger team: unlimited staff logins, per-person permissions, the unified email and WhatsApp inbox, audit logging and priority support. Growth is Rs 1,500 + GST (15 US dollars) for practices at more than one address, adding unlimited branches switched from one login, cross-branch reporting and review management. Billing annually saves 20% on all three paid plans.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <HomeClient labSection={<LabHandoff />} />
    </>
  );
}

/**
 * The secondary product, carried over from the retired umbrella homepage.
 * Placed after the clinic story has been told, so it reads as "we also make
 * this" rather than a fork in the road.
 */
function LabHandoff() {
  return (
    <section className="py-28 bg-slate-50/60 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${colors.primary}10` }}
            >
              <FlaskConical className="w-5 h-5" style={{ color: colors.primary }} />
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Also from MolarPlus
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs font-bold text-green-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              Now live
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
            Run your dental lab, intake to delivery.
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Case management built for the people who craft every crown, bridge and aligner. Track
            cases, coordinate technicians, run quality control and stay connected with every partner
            dental clinic, in one workspace.
          </p>

          <Link
            href="/lab"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: colors.dark }}
          >
            Explore MolarPlus Dental Lab
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
