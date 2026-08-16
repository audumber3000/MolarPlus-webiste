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
  title: 'MolarPlus: Dental Clinic Management Software, Free for One Clinic',
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
    { '@type': 'Offer', name: 'Single Clinic', price: '0', priceCurrency: 'INR', description: 'Free forever for one clinic — every feature included.' },
    { '@type': 'Offer', name: 'Multi-Branch', price: '899', priceCurrency: 'INR', priceValidUntil: '2026-12-31', description: 'India ₹899/mo or $10/mo internationally. Adds unlimited branches, single-login switching, cross-branch reporting and priority support.' },
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
      name: 'Is MolarPlus free to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A single clinic gets the entire product for free, forever — appointments, patient records, charting, treatment plans, prescriptions, billing, staff management, inventory, WhatsApp reminders and the web, mobile and desktop apps. No trial, no credit card. Nothing is feature-locked.',
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
      name: 'When do I need to pay for MolarPlus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only when you run more than one branch. The Multi-Branch plan (₹899/month in India, $10/month internationally, less when billed annually) lets you add unlimited clinic branches, switch between them in a single login, run cross-branch reporting and get priority support. A single clinic never needs to pay.',
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
