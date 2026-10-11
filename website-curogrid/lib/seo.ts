import type { Metadata } from "next";
import { SITE } from "./site";
import { getSpeciality } from "./specialities";

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
 * The site's share image, drawn by app/opengraph-image.tsx.
 *
 * It has to be named here. A page that sets its own `openGraph` object
 * replaces the layout's whole, so the image Next attaches at the root
 * is lost on every page below it, and a link shared on WhatsApp shows
 * no picture.
 */
const SHARE_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE.name}: clinic management software for Indian clinics, set up for your speciality.`,
  type: "image/png",
};

/**
 * True for a page whose folder has its own `opengraph-image.tsx`: each
 * speciality, feature and blog page. Those are left without an image
 * here, because Next attaches the folder's own image only when the page
 * has not named one. Add a route here when you give it an image file.
 */
function hasOwnShareImage(path: string) {
  return /^\/(blog|features)\/[^/]+$/.test(path) || Boolean(getSpeciality(path.slice(1)));
}

/**
 * Every page builds its metadata through here so canonical, OG and
 * Twitter tags can never drift out of sync with each other.
 */
export function buildMetadata({ title, description, path, index = true, article }: PageSeo): Metadata {
  // The home page is the bare origin, with no trailing slash, to match
  // sitemap.xml and the breadcrumb data.
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  // The layout appends "| Curogrid" to every title. A title that already
  // names the brand ("About Curogrid") would then say it twice.
  const named = title.includes(SITE.name);
  const images = hasOwnShareImage(path) ? {} : { images: [SHARE_IMAGE] };

  return {
    title: named ? { absolute: title } : title,
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
      ...images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...images,
    },
  };
}
