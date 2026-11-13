import type { Metadata } from 'next';
import { SITE } from './site';

/**
 * The absolute URL of a page, in the one form the site serves without a redirect: the www host
 * and a trailing slash (next.config.js sets `trailingSlash: true`). Canonicals, the sitemap,
 * Open Graph and JSON-LD all build their URLs here so they can never disagree.
 */
export function absoluteUrl(path: string): string {
  const clean = path === '' || path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return `${SITE.url}${clean}`;
}

/** Per-page metadata, built from one place so canonicals never drift. */
export function pageMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** A share image: an absolute URL, its pixel size and what it shows. */
  image?: { url: string; width: number; height: number; alt: string };
  /** Use the title as given, without the "| Clino Health" template. */
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const images = image ? [image] : undefined;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images,
    },
    twitter: { card: 'summary_large_image', title, description, images: image ? [image.url] : undefined },
  };
}
