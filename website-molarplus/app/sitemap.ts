import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getAllSlugs } from '@/lib/sanity';

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL;
  const lastModified = new Date();

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
    lastModified,
    changeFrequency: route.changeFrequency as any,
    priority: route.priority,
  }));

  const slugs = await getAllSlugs();
  const blogEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
