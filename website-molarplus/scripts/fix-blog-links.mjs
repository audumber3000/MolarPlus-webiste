/**
 * One-off fix: rewrite stale internal links in Sanity blog bodies.
 *
 * The umbrella restructure moved /pricing, /features, /platform, /find-dentist
 * under /clinic/* with no redirects, so old links inside blog posts now 404.
 * This rewrites link markDef hrefs in every post body to the /clinic/* path.
 *
 * Usage (from website-molarplus/):
 *   node scripts/fix-blog-links.mjs           # dry run, shows changes
 *   node scripts/fix-blog-links.mjs --apply   # commit changes to Sanity
 */
import { config as loadEnv } from 'dotenv';
import { createClient } from '@sanity/client';

loadEnv({ path: '.env.local' });
loadEnv({ path: '.env' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
if (!token) throw new Error('Missing SANITY_API_WRITE_TOKEN');

const APPLY = process.argv.includes('--apply');

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-10-01',
  token,
  useCdn: false,
  perspective: 'raw', // see drafts + published
});

// Matches /pricing, /features, /platform, /find-dentist at the start of an
// internal href, optionally followed by /, ?, # or end-of-string.
const STALE = /^\/(pricing|features|platform|find-dentist)(?=$|[/?#])/;

function fixHref(href) {
  if (typeof href !== 'string') return href;
  return href.replace(STALE, '/clinic/$1');
}

const posts = await client.fetch(
  `*[_type == "post" && defined(body)]{ _id, "slug": slug.current, body }`,
);

let changedDocs = 0;
let changedLinks = 0;

for (const post of posts) {
  let docChanged = false;
  const newBody = (post.body || []).map((block) => {
    if (!Array.isArray(block.markDefs)) return block;
    const newDefs = block.markDefs.map((def) => {
      if (def?._type === 'link' && typeof def.href === 'string') {
        const fixed = fixHref(def.href);
        if (fixed !== def.href) {
          docChanged = true;
          changedLinks++;
          console.log(`  [${post.slug}] ${def.href}  ->  ${fixed}`);
          return { ...def, href: fixed };
        }
      }
      return def;
    });
    return { ...block, markDefs: newDefs };
  });

  if (docChanged) {
    changedDocs++;
    if (APPLY) {
      await client.patch(post._id).set({ body: newBody }).commit();
      console.log(`  ✓ patched ${post._id}`);
    }
  }
}

console.log(
  `\n${APPLY ? 'Applied' : 'DRY RUN'}: ${changedLinks} link(s) across ${changedDocs} post(s).` +
    (APPLY ? '' : '  Re-run with --apply to commit.'),
);
