import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BRANDS } from '@/lib/brands';
import { CONTACT, SITE } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: {
    siteName: SITE.name,
    locale: SITE.locale,
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

/**
 * Organization JSON-LD. `subOrganization` is what tells a search engine
 * that MolarPlus and SyrupDesk are ours rather than three unrelated
 * companies that happen to share a support number — the same job the
 * mega-menu does for humans.
 */
function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo-wordmark.svg`,
    description: SITE.description,
    foundingDate: SITE.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.phone,
      email: CONTACT.support,
      contactType: 'customer support',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    subOrganization: BRANDS.filter((b) => b.status === 'live').map((b) => ({
      '@type': 'Organization',
      name: b.name,
      url: b.url,
      description: b.tagline,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="font-sans">
        <OrganizationJsonLd />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
