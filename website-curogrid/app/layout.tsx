import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { PostHogProvider } from "@/components/PostHogProvider";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";
import { SITE } from "@/lib/site";
import { SPECIALITIES } from "@/lib/specialities";

// Plus Jakarta Sans, the brand face, self-hosted from design/fonts.
// 500 is the lightest weight in the kit, so it is the body weight.
const jakarta = localFont({
  src: [
    { path: "../design/fonts/plus-jakarta-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../design/fonts/plus-jakarta-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../design/fonts/plus-jakarta-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../design/fonts/plus-jakarta-sans-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Clinic Management Software for Indian Clinics | Curogrid",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.parent }],
  creator: SITE.parent,
  publisher: SITE.parent,
  // No canonical and no og:url here. Each page sets its own through
  // buildMetadata; a default at this level is inherited by any page that
  // sets none, which made the 404 page declare the homepage as its
  // canonical address.
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  // teal-900, the header. Satori and the browser chrome cannot read a
  // CSS variable, so this is one of the few literal colours in the repo.
  themeColor: "#1A3C3E",
  width: "device-width",
  initialScale: 1,
  // Never block zoom.
  maximumScale: 5,
};

const NAV_SPECIALITIES = SPECIALITIES.map((s) => ({ href: `/${s.slug}`, name: s.name, card: s.card }));

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={jakarta.variable}>
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <a href="#main" className="skip-link rounded-sm bg-teal-700 px-4 py-3 text-body text-white">
          Skip to content
        </a>
        <Navbar specialities={NAV_SPECIALITIES} />
        <main id="main">{children}</main>
        <Footer />
        {/* Renders and loads nothing unless NEXT_PUBLIC_POSTHOG_KEY is set. */}
        <PostHogProvider />
      </body>
    </html>
  );
}
