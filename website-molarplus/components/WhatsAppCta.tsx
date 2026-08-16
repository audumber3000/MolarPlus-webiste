'use client';

/**
 * The "talk to a human right now" button.
 *
 * Deliberately louder than a normal secondary CTA: for Indian clinics WhatsApp
 * is the fastest, least intimidating way to reach a vendor, and a lot of buyers
 * will take it over creating an account. It carries WhatsApp's own green rather
 * than the brand indigo, because the green is what makes it recognisable at a
 * glance — that recognition is the entire point of the channel.
 *
 * The indigo "Start free" beside it stays the primary action; this is a strong
 * second, not a competitor. Keep it outlined rather than filled so the hierarchy
 * survives.
 */
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { trackDemoRequested } from '@/analytics/track';
import type { CtaLocation } from '@/analytics/events';

const WA_GREEN = '#25D366';
const WA_GREEN_DARK = '#128C7E';

export default function WhatsAppCta({
  location,
  label = 'Talk to us on WhatsApp',
  className = '',
}: {
  location: CtaLocation;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="/chat"
      onClick={() => trackDemoRequested(location)}
      className={`group inline-flex items-center gap-2.5 rounded-xl border-2 bg-white px-6 py-[13px] font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg ${className}`}
      style={{ borderColor: WA_GREEN, color: WA_GREEN_DARK }}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366]" />
      {label}
      <span
        className="ml-0.5 hidden h-2 w-2 rounded-full sm:inline-block"
        style={{ backgroundColor: WA_GREEN }}
        aria-hidden="true"
      />
    </a>
  );
}
