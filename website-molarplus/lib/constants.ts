export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.molarplus.com';
export const LAB_URL = process.env.NEXT_PUBLIC_LAB_URL || 'https://lab.molarplus.com';

/**
 * The parent company's site. MolarPlus is a Clino Health product, and
 * every "by Clino Health" lockup on this site links here — a buyer
 * checking whether the vendor is a real company should be one click
 * away from finding out, not left to search for the name.
 */
export const CLINO_URL = 'https://clinohealth.com';

/**
 * The support WhatsApp number, in wa.me's international format (no +, no
 * spaces). Lived inside app/chat/page.tsx until the pricing pages needed to
 * link at it too — a phone number duplicated across files is one that
 * eventually gets changed in only one of them.
 */
export const WHATSAPP_NUMBER = '919594078777';

/** Build a wa.me deep link with a prefilled first message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
