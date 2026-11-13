import { ArrowUpRight } from 'lucide-react';
import WhatsAppGlyph from './WhatsAppGlyph';

/**
 * The phone-only bar pinned to the bottom of a product page: WhatsApp and the product's own
 * site, always one thumb away. It reserves its own height at the end of the page (the body
 * padding below), so it never covers the footer's last line.
 */
export default function StickyCta({
  whatsappHref,
  siteHref,
  siteLabel,
  accent,
}: {
  whatsappHref: string;
  siteHref: string;
  siteLabel: string;
  accent: string;
}) {
  return (
    <>
      <style>{`@media (max-width: 767px) { body { padding-bottom: calc(4.75rem + env(safe-area-inset-bottom)); } }`}</style>
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 px-4 pt-3 backdrop-blur md:hidden"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <div className="grid grid-cols-2 gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wa px-4 text-sm font-semibold text-white"
          >
            <WhatsAppGlyph className="h-5 w-5" /> WhatsApp
          </a>
          <a
            href={siteHref}
            className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full px-4 text-sm font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            {siteLabel} <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </>
  );
}
