import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_URL } from '@/lib/seo';

/**
 * /product-images and its folders (/product-images/desktop/windows, /tablet, ...).
 *
 * The images themselves are static files in public/product-images, used by the product feeds
 * and by the ClinoHealth product page. A folder URL used to answer 404; this page lists what is
 * in it, with each image's direct URL, so the address a feed or a person types always works.
 * It reads the folder at build time, so a new image appears here with no code change.
 * Public files win over this route, so the .jpg URLs are untouched.
 */

const ROOT = path.join(process.cwd(), 'public', 'product-images');
const BASE = `${SITE_URL}/product-images`;

const SETS: Record<string, { title: string; note: string }> = {
  '': { title: 'Phone', note: 'MolarPlus mobile app, 1080 x 1920' },
  tablet: { title: 'Tablet', note: 'MolarPlus on iPad, 2064 x 2752' },
  'desktop/windows': { title: 'Windows', note: 'MolarPlus desktop app for Windows, 3840 x 2160' },
  'desktop/mac': { title: 'macOS', note: 'MolarPlus desktop app for Mac, 2880 x 1800' },
};

function imagesIn(dir: string): string[] {
  try {
    return fs
      .readdirSync(path.join(ROOT, dir), { withFileTypes: true })
      .filter((f) => f.isFile() && /\.(jpe?g|png|webp)$/i.test(f.name))
      .map((f) => f.name)
      .sort();
  } catch {
    return [];
  }
}

/** The folders this URL covers: itself and every set below it. */
function setsUnder(prefix: string): string[] {
  return Object.keys(SETS).filter((key) => (prefix === '' ? true : key === prefix || key.startsWith(`${prefix}/`)));
}

export function generateStaticParams() {
  return [{ set: [] }, { set: ['desktop'] }, ...Object.keys(SETS).filter(Boolean).map((key) => ({ set: key.split('/') }))];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ set?: string[] }> }): Promise<Metadata> {
  const { set = [] } = await params;
  const prefix = set.join('/');
  const label = prefix ? `${prefix.replace('/', ' / ')} ` : '';
  return {
    title: `MolarPlus product images ${label ? `(${label.trim()})` : ''}`.trim(),
    description: 'Real screenshots of MolarPlus dental clinic management software on phone, tablet, Windows and macOS.',
    alternates: { canonical: `${BASE}${prefix ? `/${prefix}` : ''}` },
  };
}

export default async function ProductImagesPage({ params }: { params: Promise<{ set?: string[] }> }) {
  const { set = [] } = await params;
  const prefix = set.join('/');
  const keys = setsUnder(prefix);
  if (!keys.length) notFound();

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
          <Link href="/product-images" className="hover:text-gray-900">product-images</Link>
          {set.map((part, i) => (
            <span key={part}>
              {' / '}
              <Link href={`/product-images/${set.slice(0, i + 1).join('/')}`} className="hover:text-gray-900">{part}</Link>
            </span>
          ))}
        </nav>
        <h1 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">MolarPlus product images</h1>
        <p className="mt-3 max-w-2xl text-gray-600">
          Real screenshots of MolarPlus dental clinic management software, captured from a sample clinic. Each image
          links to its file; copy the URL beneath it.
        </p>

        {keys.map((key) => {
          const files = imagesIn(key);
          if (!files.length) return null;
          const { title, note } = SETS[key];
          const folder = `${BASE}${key ? `/${key}` : ''}`;
          return (
            <section key={key || 'phone'} className="mt-14">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <p className="mt-1 text-sm text-gray-500">{note} · {files.length} images</p>
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {files.map((name) => {
                  const url = `${folder}/${name}`;
                  const local = `/product-images${key ? `/${key}` : ''}/${name}`;
                  return (
                    <li key={name} className="overflow-hidden rounded-lg border border-gray-200">
                      <a href={local} target="_blank" rel="noopener" className="block bg-gray-50">
                        {/* eslint-disable-next-line @next/next/no-img-element -- the original file, as the feed sees it */}
                        <img src={local} alt={`MolarPlus ${title} screenshot: ${name.replace(/^\d+-|\.\w+$/g, '').replace(/-/g, ' ')}`} loading="lazy" className="h-56 w-full object-contain" />
                      </a>
                      <p className="break-all border-t border-gray-200 px-3 py-2 font-mono text-xs text-gray-600">{url}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </section>
    </div>
  );
}
