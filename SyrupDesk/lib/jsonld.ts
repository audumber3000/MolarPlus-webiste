import { SITE, SOCIAL } from "./site";

/**
 * Structured data builders. Rendered via <JsonLd /> which escapes
 * "<" to prevent script-injection through any interpolated string.
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    parentOrganization: { "@type": "Organization", name: SITE.parent },
    /** Official profiles. This is the machine-readable claim that all
     *  five properties are the same organisation — it is what feeds a
     *  knowledge panel and stops a scraped clone outranking us on our
     *  own brand name. */
    sameAs: SOCIAL.map((profile) => profile.href),
    areaServed: { "@type": "Country", name: "India" },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    telephone: SITE.phone,
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
    name: SITE.name,
    url: SITE.url,
    inLanguage: "en-IN",
  };
}

/**
 * SoftwareApplication is the schema Google uses for software search
 * results. `offers` intentionally carries no aggregateRating — we
 * have no review data yet and will not fabricate one.
 */
export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Pharmacy management software",
    operatingSystem: "Web, Android",
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: { "@type": "Organization", name: SITE.parent },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free plan for single-counter pharmacies. Paid plans billed per month.",
    },
    featureList: [
      "GST-compliant billing and invoicing",
      "Inventory tracking with expiry alerts",
      "Verified Indian medicine database",
      "Purchase bill import",
      "Refill reminders",
      "GSTR-1 and GSTR-3B reports",
    ],
  };
}

export function faqSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  published: string;
  updated?: string;
};

/**
 * Article schema for a single post. `author` is the company rather
 * than a person: these posts are house-written and inventing a named
 * byline would be fabricating a credential.
 */
export function articleSchema(post: ArticleMeta) {
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: SITE.parent, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.parent },
    image: `${url}/opengraph-image`,
  };
}

/** Listing schema for /blog. */
export function blogSchema(posts: ReadonlyArray<ArticleMeta>) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE.name} blog`,
    url: `${SITE.url}/blog`,
    inLanguage: "en-IN",
    publisher: { "@type": "Organization", name: SITE.parent },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}`,
      datePublished: post.published,
      dateModified: post.updated ?? post.published,
    })),
  };
}

export function breadcrumbSchema(trail: ReadonlyArray<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
