import { LIVE_BRANDS } from '@/lib/brands';
import { DOWNLOADS, FAQ, MOLARPLUS, PLANS, inr } from '@/lib/products/molarplus';
import { absoluteUrl } from '@/lib/seo';
import { CONTACT, SITE } from '@/lib/site';

/**
 * /llms.txt: the site in plain words, for AI assistants and answer engines (llmstxt.org).
 * Built from the same data as the pages, so it cannot say something the pages do not.
 */
export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.name} (${SITE.company}) builds healthcare software for Indian practices. Its products are separate brands, each with its own website.`,
    '',
    '## Products',
    '',
    ...LIVE_BRANDS.map((b) => `- [${b.name}](${absoluteUrl(`/products/${b.slug}`)}): ${b.tagline}. Official site: ${b.url}`),
    '',
    '## MolarPlus',
    '',
    `MolarPlus is dental clinic management software, developed and operated by ${SITE.company}. Official website: ${MOLARPLUS.url}. Product page: ${absoluteUrl('/products/molarplus')}`,
    '',
    `Platforms: web (${DOWNLOADS.web}), Windows (${DOWNLOADS.windows}), macOS (${DOWNLOADS.mac}), Android (${DOWNLOADS.android}), iOS (${DOWNLOADS.ios}).`,
    '',
    `Pricing in India, excluding 18% GST: ${PLANS.map((p) => `${p.name} ${inr(p.monthly)} a month or ${inr(p.annualTotal)} a year`).join('; ')}. 7-day free trial of Pro, no card needed. Details: ${MOLARPLUS.pricingUrl}`,
    '',
    ...FAQ.flatMap((item) => [`### ${item.q}`, '', item.a, '']),
    '## Contact',
    '',
    `- WhatsApp: https://wa.me/${MOLARPLUS.whatsapp}`,
    `- Email: ${MOLARPLUS.supportEmail} (MolarPlus), ${CONTACT.email} (${SITE.name})`,
    `- Address: ${CONTACT.address.street}, ${CONTACT.address.city}, ${CONTACT.address.state} ${CONTACT.address.postalCode}, India`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  });
}
