import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import HomeTopBanner from '@/components/HomeTopBanner';
import CookieConsent from '@/components/CookieConsent';
import Footer from '@/components/Footer';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Best Dental Clinic Management Software`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Best Dental Clinic Management Software`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    // No `images` here on purpose — app/opengraph-image.tsx generates the card
    // and every route inherits it, /lab overriding with its own. Pinning a
    // static file here shadowed that everywhere and, on any page declaring its
    // own openGraph block, left no image at all.
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Best Dental Clinic Management Software`,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import GoogleAnalytics from '@/components/GoogleAnalytics';
import PostHogProvider from '@/analytics/PostHogProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        <PostHogProvider>
          <HomeTopBanner />
          <Nav />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </PostHogProvider>
      </body>
    </html>
  );
}
