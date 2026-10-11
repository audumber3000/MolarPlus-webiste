import { SITE, SOCIAL } from "./site";
import { SHOTS } from "./shots";
import { PLANS } from "@/content/pricing";

/**
 * Structured data builders. Rendered via <JsonLd />, which escapes "<"
 * so an interpolated string can never close the script tag.
 *
 * None of these carries an aggregateRating or a review. There is no
 * review data yet, and an invented one is the fastest way to lose rich
 * results for the whole site.
 *
 * What each type can earn in Google today (checked October 2026):
 * - Organization, WebSite: the site name and logo in results. No error.
 * - BreadcrumbList, Article: eligible as written.
 * - SoftwareApplication: Google shows the software result only when the
 *   markup also has a rating or a review. Without one the Rich Results
 *   Test reports that as missing. That is expected. Do not add one until
 *   real reviews exist. The markup still tells search and AI engines the
 *   product, its platforms and its real prices.
 * - FAQPage: Google stopped showing FAQ results in May 2026. It is kept
 *   because it matches the visible questions and other engines read it.
 */

const ORG_ID = `${SITE.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}/icon-512.png`, width: 512, height: 512 },
    description: SITE.description,
    parentOrganization: { "@type": "Organization", name: SITE.parent, url: SITE.parentUrl },
    ...(SOCIAL.length > 0 && { sameAs: SOCIAL.map((profile) => profile.href) }),
    areaServed: { "@type": "Country", name: "India" },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: SITE.phone,
      availableLanguage: ["en", "hi"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

/**
 * SoftwareApplication, with the real plans as offers.
 *
 * A speciality page passes its own name, description and URL so each
 * one describes the product as that clinic would search for it; the
 * offers are the same everywhere because the price is.
 */
export function softwareApplicationSchema(page?: {
  name?: string;
  description?: string;
  path?: string;
  category?: string;
  features?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: page?.name ?? SITE.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: page?.category ?? "Clinic management software",
    operatingSystem: "Web, Android, iOS, Windows",
    url: `${SITE.url}${page?.path ?? ""}`,
    description: page?.description ?? SITE.description,
    inLanguage: "en-IN",
    image: `${SITE.url}/icon-512.png`,
    // A real capture of the app, the same one shown on the page.
    screenshot: `${SITE.url}${SHOTS.today.src}`,
    publisher: { "@id": ORG_ID },
    offers: PLANS.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      // `price` is what Google reads. The price specification says what
      // a bare number cannot: that it is charged for each month.
      price: String(plan.monthly),
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(plan.monthly),
        priceCurrency: "INR",
        unitCode: "MON",
        unitText: "month",
      },
      availability: "https://schema.org/InStock",
      description: `${plan.tagline}. Billed monthly.`,
      url: `${SITE.url}/pricing`,
    })),
    featureList: page?.features ?? [
      "Tokens and the waiting line",
      "Appointments for each doctor",
      "Patient files with visits, prescriptions, tests and bills",
      "Billing with UPI, cash and card",
      "Stock and vendors",
      "Reports",
      "Phone app for the doctor and the staff",
      "Set up for the clinic's speciality",
    ],
  };
}

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** `trail` runs from the first level below home to the current page. */
export function breadcrumbSchema(trail: ReadonlyArray<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.path === "/" ? "" : crumb.path}`,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  published: string;
  updated?: string;
}) {
  const url = `${SITE.url}/blog/${post.slug}`;
  // A post's date is a plain day ("2026-10-11"). Google prefers a time
  // zone, so a bare day is read as the start of that day in India.
  const stamp = (date: string) => (/^\d{4}-\d{2}-\d{2}$/.test(date) ? `${date}T00:00:00+05:30` : date);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url,
    // The post's own share image (app/blog/[slug]/opengraph-image.tsx).
    image: [`${url}/opengraph-image`],
    datePublished: stamp(post.published),
    dateModified: stamp(post.updated ?? post.published),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    // Posts are signed "By the Curogrid team", so the author is the
    // organisation. Name and URL are written out, as Google asks for an
    // author, and tied to the Organization node by its @id.
    author: { "@type": "Organization", "@id": ORG_ID, name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/icon-512.png`, width: 512, height: 512 },
    },
    isPartOf: { "@id": `${SITE.url}/#website` },
    inLanguage: "en-IN",
  };
}
