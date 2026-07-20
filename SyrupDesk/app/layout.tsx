import type { Metadata, Viewport } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";
import { SITE } from "@/lib/site";

// Self-hosted by next/font — no runtime request to Google.
// Deliberately not Rubik: that is the competitor's face, and its
// softness undercuts a compliance-adjacent product.
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Pharmacy Management Software for Indian Medical Stores | SyrupDesk",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  // Billing terms stay in the list: they are what this buyer actually
  // types into Google, even though the product is broader than billing.
  keywords: [
    "pharmacy management software",
    "retail pharmacy management software",
    "medical store software",
    "pharmacy software India",
    "chemist shop software",
    "pharmacy billing software",
    "GST billing software for pharmacy",
    "pharmacy inventory software",
    "expiry management software pharmacy",
  ],
  authors: [{ name: SITE.parent }],
  creator: SITE.parent,
  publisher: SITE.parent,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#005500",
  width: "device-width",
  initialScale: 1,
  // Never block zoom — this audience zooms.
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={instrumentSans.variable}>
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <a href="#main" className="skip-link rounded-sm bg-green-700 px-4 py-3 text-body text-white">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
