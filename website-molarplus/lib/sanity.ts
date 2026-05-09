import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import {
  allPostsQuery,
  postBySlugQuery,
  allSlugsQuery,
  allCategoriesQuery,
} from '@/sanity/lib/queries';
import type { PortableTextBlock } from '@portabletext/types';

export interface SanityImageRef {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
}

export interface SanityAuthor {
  name: string;
  role?: string;
  image?: SanityImageRef;
}

export interface BlogPostListItem {
  _id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: SanityImageRef;
  category: string;
  categorySlug: string;
  author?: SanityAuthor;
  publishedAt: string;
  isTrending?: boolean;
}

export interface BlogPostFull extends BlogPostListItem {
  body: PortableTextBlock[];
  faqs?: { question: string; answer: string }[];
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export async function getAllBlogPosts(): Promise<BlogPostListItem[]> {
  return client.fetch(allPostsQuery, {}, { next: { revalidate: 60 } });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostFull | null> {
  return client.fetch(postBySlugQuery, { slug }, { next: { revalidate: 60 } });
}

export async function getAllSlugs(): Promise<string[]> {
  return client.fetch(allSlugsQuery, {}, { next: { revalidate: 60 } });
}

export async function getAllCategories(): Promise<{ name: string; count: number }[]> {
  return client.fetch(allCategoriesQuery, {}, { next: { revalidate: 60 } });
}

export function imageUrl(image: SanityImageRef, width = 1200, height?: number): string {
  let b = urlForImage(image as any).width(width);
  if (height) b = b.height(height);
  return b.url();
}

export function readingTimeFromBlocks(blocks: PortableTextBlock[] = []): string {
  const text = blocks
    .map((b: any) => (b._type === 'block' ? (b.children || []).map((c: any) => c.text || '').join(' ') : ''))
    .join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function extractHeadings(blocks: PortableTextBlock[] = []): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  for (const b of blocks as any[]) {
    if (b._type !== 'block') continue;
    const m = /^h([2-4])$/.exec(b.style || '');
    if (!m) continue;
    const text = (b.children || []).map((c: any) => c.text || '').join('');
    if (!text) continue;
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    headings.push({ id, text, level: parseInt(m[1], 10) });
  }
  return headings;
}
