/**
 * One-time migration: MDX blog posts -> Sanity.
 *
 * Usage:
 *   1. Make sure SANITY_API_WRITE_TOKEN is set in .env.local
 *      (Sanity dashboard -> API -> Tokens -> "Add API token" -> Editor permission)
 *   2. From website-molarplus/: node scripts/migrate-mdx-to-sanity.mjs
 *
 * Idempotent: each post is identified by `_id = "post-<slug>"`, so re-running
 * will overwrite existing migrated posts (not duplicate them).
 */
import { config as loadEnv } from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

loadEnv({ path: '.env.local' });
loadEnv({ path: '.env' });
import matter from 'gray-matter';
import { createClient } from '@sanity/client';
import { randomUUID } from 'node:crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'content/blogs');
const PUBLIC_DIR = path.join(ROOT, 'public');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
if (!token) throw new Error('Missing SANITY_API_WRITE_TOKEN');

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
});

// --- Markdown -> Portable Text -------------------------------------

function inlineToSpans(text) {
  // Handles **bold**, *italic*, `code`, [link](url) with simple regex.
  // Good enough for the existing 10 posts; intern's new posts will be authored in Studio.
  const tokens = [];
  let i = 0;
  const re = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(`([^`]+)`)|(\[([^\]]+)\]\(([^)]+)\))/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > i) tokens.push({ text: text.slice(i, m.index), marks: [] });
    if (m[1]) tokens.push({ text: m[2], marks: ['strong'] });
    else if (m[3]) tokens.push({ text: m[4], marks: ['em'] });
    else if (m[5]) tokens.push({ text: m[6], marks: ['code'] });
    else if (m[7]) {
      const linkKey = randomUUID();
      tokens.push({
        text: m[8],
        marks: [linkKey],
        _linkDef: { _key: linkKey, _type: 'link', href: m[9] },
      });
    }
    i = m.index + m[0].length;
  }
  if (i < text.length) tokens.push({ text: text.slice(i), marks: [] });
  return tokens;
}

function buildBlock(style, text, listItem = undefined, level = undefined) {
  const tokens = inlineToSpans(text);
  const markDefs = [];
  const children = tokens.map((t) => {
    if (t._linkDef) markDefs.push(t._linkDef);
    return {
      _type: 'span',
      _key: randomUUID(),
      text: t.text,
      marks: t.marks,
    };
  });
  const block = {
    _type: 'block',
    _key: randomUUID(),
    style,
    markDefs,
    children,
  };
  if (listItem) {
    block.listItem = listItem;
    block.level = level || 1;
  }
  return block;
}

function markdownToPortableText(md) {
  const blocks = [];
  const lines = md.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    const h = /^(#{1,4})\s+(.+)$/.exec(line);
    if (h) {
      const level = h[1].length;
      const style = level === 1 ? 'h2' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';
      blocks.push(buildBlock(style, h[2].trim()));
      i++;
      continue;
    }

    const bullet = /^[-*]\s+(.+)$/.exec(line);
    if (bullet) {
      blocks.push(buildBlock('normal', bullet[1].trim(), 'bullet', 1));
      i++;
      continue;
    }

    const number = /^\d+\.\s+(.+)$/.exec(line);
    if (number) {
      blocks.push(buildBlock('normal', number[1].trim(), 'number', 1));
      i++;
      continue;
    }

    // Paragraph: collect until blank line
    let para = line;
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|[-*]\s|\d+\.\s)/.test(lines[i])) {
      para += ' ' + lines[i].trim();
      i++;
    }
    blocks.push(buildBlock('normal', para.trim()));
  }
  return blocks;
}

// --- Image upload --------------------------------------------------

const imageCache = new Map();

async function uploadImage(coverImagePath) {
  if (imageCache.has(coverImagePath)) return imageCache.get(coverImagePath);

  const localPath = path.join(PUBLIC_DIR, coverImagePath.replace(/^\//, ''));
  if (!fs.existsSync(localPath)) {
    console.warn(`  ⚠ Image not found at ${localPath} — skipping cover`);
    return null;
  }
  const buffer = fs.readFileSync(localPath);
  const filename = path.basename(localPath);
  const asset = await client.assets.upload('image', buffer, { filename });
  const ref = {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
    alt: filename.replace(/\.[a-z0-9]+$/i, '').replace(/[-_]/g, ' '),
  };
  imageCache.set(coverImagePath, ref);
  return ref;
}

// --- Category & Author -------------------------------------------

async function ensureCategory(name) {
  const slug = name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
  const _id = `category-${slug}`;
  await client.createOrReplace({
    _id,
    _type: 'category',
    title: name,
    slug: { _type: 'slug', current: slug },
  });
  return { _type: 'reference', _ref: _id };
}

async function ensureDefaultAuthor() {
  const _id = 'author-molarplus-team';
  await client.createOrReplace({
    _id,
    _type: 'author',
    name: 'MolarPlus Team',
    slug: { _type: 'slug', current: 'molarplus-team' },
    role: 'Editorial Team',
  });
  return { _type: 'reference', _ref: _id };
}

// --- Main ---------------------------------------------------------

async function main() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));
  console.log(`Found ${files.length} MDX files\n`);

  const authorRef = await ensureDefaultAuthor();

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, '');
    const fullPath = path.join(BLOG_DIR, file);
    const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'));

    console.log(`→ ${slug}`);

    const categoryRef = await ensureCategory(data.category || 'General');
    const coverImage = data.coverImage
      ? await uploadImage(data.coverImage)
      : null;
    if (!coverImage) {
      console.warn(`  ⚠ No cover image — skipping post (Sanity schema requires it)`);
      continue;
    }
    const body = markdownToPortableText(content);

    await client.createOrReplace({
      _id: `post-${slug}`,
      _type: 'post',
      title: data.title,
      slug: { _type: 'slug', current: slug },
      description: data.description || '',
      coverImage,
      category: categoryRef,
      author: authorRef,
      publishedAt: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      isTrending: !!data.isTrending,
      body,
    });

    console.log(`  ✓ migrated`);
  }

  console.log(`\nDone. View in Studio: http://localhost:3000/studio`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
