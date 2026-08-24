import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getAllSlugs } from '@/lib/sanity';

export const revalidate = 60;

/*
 * lastModified has to mean something.
 *
 * This file used to stamp `new Date()` on all 44 URLs, and it revalidates
 * every 60 seconds — so the sitemap claimed the privacy policy and every blog
 * post had changed, moments ago, on every fetch. Google's guidance is explicit
 * that it ignores lastmod once a site proves it unreliable, so the field was
 * worse than absent: it was actively spending the site's credibility.
 *
 * Posts now carry their real `_updatedAt` from Sanity. Static routes carry the
 * build timestamp, which is the honest answer for a page whose content ships
 * in the bundle — it genuinely cannot have changed since the deploy.
 */
const BUILD_TIME = new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;

  const staticRoutes = [
    { url: '', changeFrequency: 'daily', priority: 1.0 },
    { url: '/features', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/pricing', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/pricing/international', changeFrequency: 'monthly', priority: 0.6 },
    { url: '/find-dentist', changeFrequency: 'daily', priority: 0.9 },
    { url: '/platform', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/lab', changeFrequency: 'monthly', priority: 0.85 },
    { url: '/blog', changeFrequency: 'daily', priority: 0.85 },
    { url: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { url: '/terms-of-use', changeFrequency: 'yearly', priority: 0.3 },
    { url: '/cookies-policy', changeFrequency: 'yearly', priority: 0.3 },
    { url: '/refund-policy', changeFrequency: 'yearly', priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: BUILD_TIME,
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }));

  const posts = await getAllSlugs();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt || post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
