import type { Metadata } from 'next';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';
import { getAllBlogPosts, getAllCategories, imageUrl } from '@/lib/sanity';
import BlogClient from '@/components/blog/BlogClient';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog | Best Dental Software & Clinic Management',
  description:
    'Expert guides and insights on dental clinic management software, best practices, and practice growth. Learn why MolarPlus is the top choice.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog | Dental Clinic Management Insights | MolarPlus',
    description: 'Expert guides on dental software, practice management, and growing your dental clinic.',
    url: `${SITE_URL}/blog`,
    images: [DEFAULT_OG_IMAGE],
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
      <header className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
          MolarPlus blog
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1a1c4b] md:text-5xl">
          Running a dental practice, written down.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
          Practical guidance on clinic software, patient records, billing and growth —
          from the team building MolarPlus.
        </p>
      </header>
      <BlogClient initialPosts={posts as any} categories={categories} />
    </div>
  );
}
