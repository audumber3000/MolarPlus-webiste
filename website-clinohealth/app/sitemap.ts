import type { MetadataRoute } from 'next';
import { BRANDS } from '@/lib/brands';
import { absoluteUrl } from '@/lib/seo';

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
    ['/refund-policy', 0.3],
    ['/cookies-policy', 0.2],
  ];

  return [
    ...staticPaths.map(([path, priority]) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    // Every brand page, at /products/<slug>/. MolarPlus has its own page (app/products/molarplus)
    // and the rest render from app/products/[slug]; both read the slug from lib/brands.ts.
    ...BRANDS.map((b) => ({
      url: absoluteUrl(`/products/${b.slug}`),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: b.status === 'live' ? 0.9 : 0.5,
    })),
  ];
}
