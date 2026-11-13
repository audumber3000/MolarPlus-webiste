import type { Shot } from './molarplus';

/**
 * Everything the /products/curogrid/ page says, in one place.
 *
 * NEVER ADD A CLAIM FROM MEMORY. Each fact is copied from the Curogrid site's own source
 * (website-curogrid/), which mirrors the Curogrid app repo:
 *
 *   prices, trial, plan features  content/pricing.ts (mirrors curogrid-backend/core/plans.py)
 *   features                      content/features.ts
 *   specialities                  lib/specialities/*.ts
 *   WhatsApp, email, store links  lib/site.ts (APP_LINKS)
 *
 * Platforms, checked 13 November 2026: the web app and the Android app are live. The iPhone
 * app is not in the App Store and there is no Windows or Mac app on a store, so the page says
 * those are coming and links nowhere. Promote one only when its store listing resolves.
 *
 * Screenshots are the Curogrid store-listing set (~/Developer/curogrid/marketing/store-listing),
 * real captures of a fictional clinic, hosted on curogrid.com/product-images.
 */

export const CUROGRID = {
  name: 'Curogrid',
  url: 'https://www.curogrid.com',
  appUrl: 'https://app.curogrid.com',
  signupUrl: 'https://app.curogrid.com/signup',
  pricingUrl: 'https://www.curogrid.com/pricing',
  featuresUrl: 'https://www.curogrid.com/features',
  demoUrl: 'https://www.curogrid.com/book-demo',
  specialitiesUrl: 'https://www.curogrid.com/specialities',
  supportEmail: 'hello@curogrid.com',
  whatsapp: '919594078777',
  whatsappDisplay: '+91 95940 78777',
  logo: { src: '/brands/curogrid.svg', width: 339, height: 108 },
  /** --teal-600, the primary (website-curogrid/design/tokens.css). Same value as the `curo` token. */
  accent: '#256F72',
} as const;

export const CUROGRID_WHATSAPP = {
  default:
    "Hi, I found Curogrid on the ClinoHealth website. I'd like to know more about the clinic management software and its pricing.",
  pricing: 'Hi, I found Curogrid on the ClinoHealth website. Which Curogrid plan is right for my clinic?',
  demo: "Hi, I found Curogrid on the ClinoHealth website. I'd like a demo of Curogrid for my clinic.",
} as const;

export function curogridWhatsapp(message: string = CUROGRID_WHATSAPP.default): string {
  return `https://wa.me/${CUROGRID.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const CUROGRID_DOWNLOADS = {
  web: 'https://app.curogrid.com',
  android: 'https://play.google.com/store/apps/details?id=com.curogrid.app',
} as const;

/** `href: null` means not released yet: shown as coming, never linked. */
export const CUROGRID_PLATFORMS: { key: 'web' | 'android' | 'ios' | 'windows'; name: string; how: string; href: string | null; cta: string }[] = [
  { key: 'web', name: 'Web', how: 'Any modern browser, on a computer or a tablet', href: CUROGRID_DOWNLOADS.web, cta: 'Open the web app' },
  { key: 'android', name: 'Android', how: 'Phone app on Google Play', href: CUROGRID_DOWNLOADS.android, cta: 'Get it on Google Play' },
  { key: 'ios', name: 'iPhone', how: 'Not in the App Store yet', href: null, cta: 'Coming soon' },
  { key: 'windows', name: 'Windows', how: 'Not on the Microsoft Store yet', href: null, cta: 'Coming soon' },
];

/** The specialities Curogrid sets itself up for (lib/specialities, in its order). */
export const SPECIALITIES = [
  'General practice',
  'Paediatrics',
  'Gynaecology',
  'Skin and hair',
  'ENT',
  'Physiotherapy',
  'Eye',
  'Orthopaedics',
  'General surgery',
  'Diabetes',
];

export const CUROGRID_FEATURES: { title: string; body: string }[] = [
  { title: 'Tokens and the waiting line', body: 'Every walk-in gets a token in seconds. The Today screen shows who is next, who is with the doctor and how long each patient has waited, and the doctor calls the next token from the phone.' },
  { title: 'Appointments', body: 'A column and a colour for each doctor, in day, week and month view. A course of visits, such as six physiotherapy sessions, is booked in one go.' },
  { title: 'Patient files', body: 'One file for each patient, with allergies, conditions and current medicines at the top, then visits, prescriptions, tests and scans, bills and consent forms.' },
  { title: 'Visits and prescriptions', body: "Medicines offered as you type from your speciality's list, saved sets you reuse, and a red flag when a medicine matches a recorded allergy." },
  { title: 'Tests, scans and X-rays', body: 'Order a test or scan in one tap and follow it to the result. Scans and reports live in the patient’s file.' },
  { title: 'Billing', body: 'Bills and part payments by UPI, cash or card, counted apart, with a clear list of who still owes and a day close.' },
  { title: 'Reports', body: '10 practice reports, from collections and outstanding dues to GST, visits and waiting times, plus staff attendance and an activity log.' },
  { title: 'Staff and roles', body: 'Everyone signs in as themselves, and you decide what a doctor or a receptionist can open.' },
  { title: 'Reminders, consent and booking', body: 'WhatsApp and email reminders, consent forms signed on screen, an online booking page and Google Reviews.' },
  { title: 'Stock and expenses', body: 'Keep count of what the clinic holds, including batches that expire, and what it spends, next to what it earns.' },
];

const IMG = 'https://www.curogrid.com/product-images';

const SET = [
  { file: '01', web: '01-dashboard', phone: '01-clinic', title: 'Clinic at a glance', alt: 'the clinic dashboard with collections, patients seen and dues' },
  { file: '02', web: '02-appointments', phone: '02-appointments', title: 'Appointments', alt: 'the appointment book, each doctor side by side' },
  { file: '03', web: '03-billing', phone: '03-billing', title: 'Billing', alt: 'billing by UPI, cash and card, with unpaid bills' },
  { file: '04', web: '04-patients', phone: '04-patients', title: 'Patients', alt: 'the patient list with allergies flagged and dues beside every name' },
  { file: '05', web: '05-xrays', phone: '05-xrays', title: 'X-rays and reports', alt: "X-rays and reports in the patient's file" },
  { file: '06', web: '06-consultation', phone: '06-consultation', title: 'Consultation', alt: 'the consultation screen with vitals, allergies and the token line' },
];

export const CUROGRID_WEB_SHOTS: Shot[] = SET.map((s) => ({
  src: `${IMG}/web/${s.web}.jpg`, width: 3840, height: 2160, title: s.title, alt: `Curogrid on the web: ${s.alt}`,
}));
export const CUROGRID_TABLET_SHOTS: Shot[] = SET.map((s) => ({
  src: `${IMG}/tablet/${s.phone}.jpg`, width: 2064, height: 2752, title: s.title, alt: `Curogrid on a tablet: ${s.alt}`,
}));
export const CUROGRID_ANDROID_SHOTS: Shot[] = SET.map((s) => ({
  src: `${IMG}/android/${s.phone}.jpg`, width: 1080, height: 1920, title: s.title, alt: `The Curogrid Android app: ${s.alt}`,
}));

export const CUROGRID_OG_IMAGE = { url: `${IMG}/web/01-dashboard.jpg`, width: 3840, height: 2160, alt: 'Curogrid clinic management software, the clinic dashboard' };

/** content/pricing.ts: Plus and Pro are the plans on sale; prices before 18% GST. */
export const CUROGRID_TRIAL = '5 days of Pro, free';
export const CUROGRID_PLANS: {
  key: 'plus' | 'pro';
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  featured?: boolean;
  features: string[];
}[] = [
  {
    key: 'plus',
    name: 'Plus',
    tagline: 'Everything a solo or small clinic needs to run its day',
    monthly: 420,
    annual: 4032,
    featured: true,
    features: ['1,000 new patients a month', '6 staff logins', '1 branch', '12 months of report history', '150 GB cloud storage', 'WhatsApp and email reminders from the Curogrid number'],
  },
  {
    key: 'pro',
    name: 'Pro',
    tagline: 'For a busy clinic that does not want limits',
    monthly: 999,
    annual: 9590,
    features: ['Unlimited patients', '12 staff logins', 'Up to 5 branches', 'Reports with no time limit', '200 GB cloud storage', 'WhatsApp from your own number', 'Priority support', 'A dedicated account manager'],
  },
];

/** In every plan: nothing clinical sits behind the higher one (content/pricing.ts). */
export const CUROGRID_EVERY_PLAN = [
  'Visits, prescriptions, tests and scans',
  'Bills, expenses, stock and vendors',
  'Lab order tracking',
  'Consent forms signed on screen',
  'Online booking page for patients',
  'Google Reviews',
  '10 practice reports, staff attendance and an activity log',
];

export const CUROGRID_FAQ: { q: string; a: string }[] = [
  {
    q: 'What is Curogrid?',
    a: 'Curogrid is clinic management software for Indian clinics: tokens and the waiting line, appointments, patient files, prescriptions, tests and scans, billing, stock and reports, on the web and on an Android phone. It sets itself up for the clinic’s speciality.',
  },
  {
    q: 'Who makes Curogrid?',
    a: 'Curogrid is developed and operated by ClinoHealth Systems LLP, the company behind ClinoHealth and MolarPlus. Its official website is www.curogrid.com.',
  },
  {
    q: 'Which specialities is Curogrid made for?',
    a: `General practice, paediatrics, gynaecology, skin and hair, ENT, physiotherapy, eye, orthopaedics, general surgery and diabetes. Dental clinics use MolarPlus instead.`,
  },
  {
    q: 'Which devices does Curogrid work on?',
    a: 'Curogrid works in any modern web browser, on a computer or a tablet, and as an Android app on Google Play. The iPhone and Windows apps are not released yet.',
  },
  {
    q: 'How much does Curogrid cost?',
    a: 'Plus is ₹420 a month or ₹4,032 a year, and Pro is ₹999 a month or ₹9,590 a year, before 18% GST. Every new clinic starts with 5 days of Pro free.',
  },
  {
    q: 'How do I talk to the Curogrid team?',
    a: 'Message or call +91 95940 78777 on WhatsApp, or write to hello@curogrid.com.',
  },
];
