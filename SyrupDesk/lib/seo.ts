import type { Metadata } from "next";
import { SITE } from "./site";

type PageSeo = {
  title: string;
  description: string;
  /** Route path, e.g. "/pricing". Used for the canonical URL. */
  path: string;
  /** Set false on thin/legal pages we don't want competing in search. */
  index?: boolean;
  /** Blog posts emit og:type=article plus published/modified times,
   *  which is what Google and social unfurlers expect for long-form. */
  article?: { published: string; modified?: string };
};

/**
 * Every page builds its metadata through here so canonical, OG and
 * Twitter tags can never drift out of sync with each other.
 */
export function buildMetadata({ title, description, path, index = true, article }: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
      : { index: false, follow: true },
    openGraph: {
      ...(article
        ? {
            type: "article" as const,
            publishedTime: article.published,
            modifiedTime: article.modified ?? article.published,
            authors: [SITE.parent],
          }
        : { type: "website" as const }),
      siteName: SITE.name,
      locale: SITE.locale,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
