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

/** Below this, a post is too short to interrupt at all. */
const CTA_MIN_TOTAL_WORDS = 400;
/** The reader should be genuinely into the piece before we ask for anything. */
const CTA_MIN_WORDS_BEFORE = 200;
/** Don't strand the aside near the end, where the closing content already is. */
const CTA_MIN_WORDS_AFTER = 150;
/** Snap forward to an upcoming h2 if one is within this many words. */
const CTA_H2_LOOKAHEAD_WORDS = 200;

function blockWordCount(b: any): number {
  if (b?._type !== 'block') return 0;
  return (b.children || [])
    .map((c: any) => c.text || '')
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export type CtaPlacement = 'inline' | 'end' | 'none';

/**
 * Splits a post body into the blocks rendered before and after the inline CTA
 * aside (`components/blog/BlogCTA`), and says where the CTA should go.
 *
 * Placement is driven by WORDS READ, not block or heading counts. Roughly half
 * of these posts contain no h2 at all, and block count tracks paragraph length
 * rather than article length — an earlier heading-based rule put the aside 64
 * words into one post while skipping 900-word posts entirely.
 *
 * So: require the reader to have passed ~200 words, then snap forward to the
 * next h2 if one is close, so the aside sits at a section break instead of
 * interrupting an argument.
 *
 * `'end'` covers a real content defect: about a dozen posts survived the
 * MDX→Sanity migration as ONE giant block (no headings, paragraphs faked with
 * line breaks). They are long enough to deserve a CTA but cannot be split, so
 * the aside goes after the article rather than being dropped entirely. Fixing
 * those posts in Sanity would promote them to `'inline'` automatically.
 */
export function splitBodyForCta(blocks: PortableTextBlock[] = []): {
  before: PortableTextBlock[];
  after: PortableTextBlock[];
  placement: CtaPlacement;
} {
  const words = (blocks as any[]).map(blockWordCount);
  const total = words.reduce((a, b) => a + b, 0);
  const noSplit = (placement: CtaPlacement) => ({
    before: blocks,
    after: [] as PortableTextBlock[],
    placement,
  });

  if (total < CTA_MIN_TOTAL_WORDS) return noSplit('none');

  let cumulative = 0;
  let at = -1;
  for (let i = 0; i < blocks.length; i++) {
    cumulative += words[i];
    if (cumulative >= CTA_MIN_WORDS_BEFORE) {
      at = i + 1;
      break;
    }
  }
  if (at < 0) return noSplit('end');

  const nextH2 = (blocks as any[]).findIndex(
    (b, i) => i >= at && b?._type === 'block' && b.style === 'h2',
  );
  if (nextH2 !== -1) {
    const gap = words.slice(at, nextH2).reduce((a, b) => a + b, 0);
    if (gap <= CTA_H2_LOOKAHEAD_WORDS) at = nextH2;
  }

  const wordsAfter = words.slice(at).reduce((a, b) => a + b, 0);
  if (wordsAfter < CTA_MIN_WORDS_AFTER) return noSplit('end');

  return {
    before: blocks.slice(0, at),
    after: blocks.slice(at),
    placement: 'inline',
  };
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
