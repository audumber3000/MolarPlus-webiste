import type { MetadataRoute } from 'next';
import { BRANDS } from '@/lib/brands';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: Array<[string, number]> = [
    ['', 1],
    ['/products', 0.9],
    ['/platform', 0.7],
    ['/about', 0.6],
    ['/contact', 0.6],
    ['/security', 0.6],
    ['/privacy', 0.4],
    ['/terms', 0.3],
  ];

  return [
    ...staticPaths.map(([path, priority]) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...BRANDS.map((b) => ({
      url: `${SITE.url}/brands/${b.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: b.status === 'live' ? 0.8 : 0.5,
    })),
  ];
}
