import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getAllBlogPosts, getAllCategories, imageUrl } from '@/lib/sanity';
import BlogClient from '@/components/blog/BlogClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog | Best Dental Software & Clinic Management | MolarPlus',
  description:
    'Expert guides and insights on dental clinic management software, best practices, and practice growth. Learn why MolarPlus is the top choice.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog | Dental Clinic Management Insights | MolarPlus',
    description: 'Expert guides on dental software, practice management, and growing your dental clinic in India.',
    url: `${SITE_URL}/blog`,
    images: [{ url: `${SITE_URL}/hero-molarplus.png`, width: 1200, height: 630, alt: 'MolarPlus Blog' }],
  },
};

export default async function BlogPage() {
  const [rawPosts, categories] = await Promise.all([
    getAllBlogPosts(),
    getAllCategories(),
  ]);

  const posts = rawPosts.map((p) => ({
    title: p.title,
    description: p.description,
    date: p.publishedAt,
    slug: p.slug,
    coverImage: imageUrl(p.coverImage, 800, 500),
    category: p.category,
    isTrending: p.isTrending,
  }));

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24" />
      <BlogClient initialPosts={posts as any} categories={categories} />
    </div>
  );
}
