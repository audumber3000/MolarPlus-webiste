import HomeClient from '@/components/HomeClient';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from '@/lib/seo';

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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '180',
    bestRating: '5',
    worstRating: '1',
  },
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
      <HomeClient />
    </>
  );
}
