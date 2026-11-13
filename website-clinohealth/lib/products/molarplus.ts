/**
 * Everything the /products/molarplus/ page says, in one place.
 *
 * NEVER ADD A CLAIM FROM MEMORY. Each fact is copied from the MolarPlus site's own source, and
 * the comment beside it names the file, so a change on molarplus.com is one search away:
 *
 *   prices and plan features  website-molarplus/components/PricingPlans.tsx
 *   store and download links  website-molarplus/components/Footer.tsx, HomeClient.tsx
 *   WhatsApp number           website-molarplus/lib/constants.ts (WHATSAPP_NUMBER)
 *   app and signup URLs       website-molarplus/lib/constants.ts (APP_URL), PricingPlans.tsx
 *
 * Screenshots are real captures of the app, hosted on molarplus.com/product-images and shared
 * with the product feeds; no image on the page is a mock-up. Checked live on 13 November 2026.
 */

export const MOLARPLUS = {
  name: 'MolarPlus',
  /** The official product site. Every "Visit MolarPlus Website" button goes here. */
  url: 'https://www.molarplus.com',
  appUrl: 'https://app.molarplus.com',
  signupUrl: 'https://app.molarplus.com/signup',
  pricingUrl: 'https://www.molarplus.com/pricing',
  internationalPricingUrl: 'https://www.molarplus.com/pricing/international',
  featuresUrl: 'https://www.molarplus.com/features',
  contactUrl: 'https://www.molarplus.com/contact',
  supportEmail: 'support@molarplus.com',
  /** wa.me international format: no plus, no spaces. Same number as the MolarPlus site. */
  whatsapp: '919594078777',
  whatsappDisplay: '+91 95940 78777',
  logo: { src: '/brands/molarplus.svg', width: 499, height: 145 },
  theme: { accent: '#2a276e', tint: '#eeedf6', edge: '#d8d6e8', deep: '#1c1a52' },
} as const;

/** The prefilled first WhatsApp message, per place the button sits. */
export const WHATSAPP_MESSAGES = {
  default:
    "Hi, I found MolarPlus on the ClinoHealth website. I'd like to know more about the dental clinic management software and its pricing.",
  pricing: "Hi, I found MolarPlus on the ClinoHealth website. Which MolarPlus plan is right for my clinic?",
  demo: "Hi, I found MolarPlus on the ClinoHealth website. I'd like a demo of MolarPlus for my dental clinic.",
} as const;

export function molarplusWhatsapp(message: string = WHATSAPP_MESSAGES.default): string {
  return `https://wa.me/${MOLARPLUS.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Live store and download links (website-molarplus/components/Footer.tsx). */
export const DOWNLOADS = {
  ios: 'https://apps.apple.com/app/molarplus/id6765472713',
  android: 'https://play.google.com/store/apps/details?id=com.molarplus.app',
  windows: 'https://apps.microsoft.com/detail/9n78rx7phv9k',
  mac: 'https://pub-376f22e59eee415286747973b95ba075.r2.dev/MolarPlus-mac.dmg',
  web: 'https://app.molarplus.com',
} as const;

export type PlatformKey = 'web' | 'windows' | 'mac' | 'android' | 'ios';

export const PLATFORMS: { key: PlatformKey; name: string; how: string; href: string; cta: string }[] = [
  { key: 'web', name: 'Web', how: 'Any modern browser, nothing to install', href: DOWNLOADS.web, cta: 'Open the web app' },
  { key: 'windows', name: 'Windows', how: 'Desktop app from the Microsoft Store', href: DOWNLOADS.windows, cta: 'Get it from Microsoft' },
  { key: 'mac', name: 'macOS', how: 'Desktop app for Mac, direct download', href: DOWNLOADS.mac, cta: 'Download for Mac' },
  { key: 'android', name: 'Android', how: 'Phone and tablet app on Google Play', href: DOWNLOADS.android, cta: 'Get it on Google Play' },
  { key: 'ios', name: 'iOS', how: 'iPhone and iPad app on the App Store', href: DOWNLOADS.ios, cta: 'Download on the App Store' },
];

/**
 * What MolarPlus does. Each item names a screen that exists in the app; `shot` points at the
 * screenshot that shows it, where there is one.
 */
export const FEATURES: { title: string; body: string; shot?: string }[] = [
  { title: 'Patient records', body: 'A digital file for every patient: contact details, medical history, allergies, visits, documents and X-rays in one place.', shot: '03-patient-file' },
  { title: 'Appointments and calendar', body: 'Day, week and month views with every dentist in their own colour, so the front desk books without double bookings.', shot: '02-calendar' },
  { title: 'Dental charting', body: 'An interactive odontogram for adult and child teeth, in FDI or Universal numbering, marked tooth by tooth.', shot: '04-case-paper' },
  { title: 'Treatment plans', body: 'Plan treatment tooth by tooth, track what is done and what is still to come, and turn it into a bill.' },
  { title: 'Digital prescriptions', body: 'Write prescriptions in the case paper and print or share them with the patient.' },
  { title: 'Case papers and history', body: 'Chief complaints, medical and dental history and the clinical examination, recorded for every visit.', shot: '04-case-paper' },
  { title: 'Billing and payments', body: 'Invoices, part payments and dues, paid by UPI, cash or card, with the receipt sent on WhatsApp.', shot: '06-payments' },
  { title: 'Lab management', body: 'Every crown, bridge and denture sent to the lab, with its shade, due date, cost and status.', shot: '07-lab' },
  { title: 'Dashboard and reports', body: 'Revenue, new patients, outstanding dues and appointments at a glance, with 12 practice reports.', shot: '05-dashboard' },
  { title: 'The day at the desk', body: 'Who is waiting, who is in the chair and who is next, for every dentist, on one live screen.', shot: '01-today' },
  { title: 'WhatsApp reminders', body: 'Appointment reminders and receipts on WhatsApp and email, with digital consent forms the patient signs.' },
  { title: 'Inventory and expenses', body: 'Stock with low-stock alerts, and the clinic’s expenses, beside its billing.' },
];

const IMG = 'https://www.molarplus.com/product-images';

export interface Shot {
  src: string;
  width: number;
  height: number;
  title: string;
  alt: string;
}

const DESKTOP_SHOTS: { file: string; title: string; alt: string }[] = [
  { file: '01-today', title: 'Today', alt: 'MolarPlus Today screen: the waiting room, the next patient, who is in the chair and the full day of appointments' },
  { file: '02-calendar', title: 'Calendar', alt: 'MolarPlus appointment calendar in week view, with each dentist in their own colour' },
  { file: '03-patient-file', title: 'Patient file', alt: 'A MolarPlus patient file with the dental chart, allergies, activity and financial summary' },
  { file: '04-case-paper', title: 'Case paper', alt: 'A MolarPlus case paper with the full-size interactive dental chart for adult teeth' },
  { file: '05-dashboard', title: 'Dashboard', alt: 'The MolarPlus clinic dashboard with revenue, new patients, outstanding dues and appointments' },
  { file: '06-payments', title: 'Payments', alt: 'MolarPlus payments: collected, outstanding and payment plans, with recent invoices paid by UPI' },
  { file: '07-lab', title: 'Lab orders', alt: 'MolarPlus lab orders: crowns and dentures with their lab, due date, cost and status' },
];

export const WINDOWS_SHOTS: Shot[] = DESKTOP_SHOTS.map((s) => ({
  src: `${IMG}/desktop/windows/${s.file}.jpg`,
  width: 3840,
  height: 2160,
  title: s.title,
  alt: `${s.alt}, on Windows`,
}));

export const MAC_SHOTS: Shot[] = DESKTOP_SHOTS.map((s) => ({
  src: `${IMG}/desktop/mac/${s.file}.jpg`,
  width: 2880,
  height: 1800,
  title: s.title,
  alt: `${s.alt}, on macOS`,
}));

export const TABLET_SHOTS: Shot[] = [
  { file: '01-today', title: 'Today', alt: 'MolarPlus on an iPad: the Today screen with the waiting room and the day’s appointments' },
  { file: '02-calendar', title: 'Calendar', alt: 'MolarPlus on an iPad: the appointment calendar' },
  { file: '03-patient-file', title: 'Patient file', alt: 'MolarPlus on an iPad: a patient file with the dental chart and allergies' },
  { file: '04-dashboard', title: 'Dashboard', alt: 'MolarPlus on an iPad: the clinic dashboard' },
  { file: '05-payments', title: 'Payments', alt: 'MolarPlus on an iPad: bills and payments' },
  { file: '06-lab', title: 'Lab orders', alt: 'MolarPlus on an iPad: lab orders with due dates' },
].map((s) => ({ src: `${IMG}/tablet/${s.file}.jpg`, width: 2064, height: 2752, title: s.title, alt: s.alt }));

export const MOBILE_SHOTS: Shot[] = [
  { file: '01-home', title: 'Home', alt: 'The MolarPlus phone app home screen with the clinic’s day' },
  { file: '02-appointments', title: 'Appointments', alt: 'The MolarPlus phone app appointment list' },
  { file: '03-dental-chart', title: 'Dental chart', alt: 'The MolarPlus phone app dental chart' },
  { file: '04-treatment-plan', title: 'Treatment plan', alt: 'A treatment plan in the MolarPlus phone app' },
  { file: '05-prescription', title: 'Prescription', alt: 'A prescription in the MolarPlus phone app' },
  { file: '06-billing', title: 'Billing', alt: 'Billing in the MolarPlus phone app' },
  { file: '07-patients', title: 'Patients', alt: 'The patient list in the MolarPlus phone app' },
].map((s) => ({ src: `${IMG}/${s.file}.jpg`, width: 1080, height: 1920, title: s.title, alt: s.alt }));

/** The share image: the Windows Today screen. */
export const OG_IMAGE = { url: `${IMG}/desktop/windows/01-today.jpg`, width: 3840, height: 2160, alt: 'MolarPlus dental clinic management software, the Today screen' };

/**
 * India prices, excluding GST (website-molarplus/components/PricingPlans.tsx, PRICES.IN).
 * Annual is 20% off the monthly rate. GST is 18% and added at checkout.
 */
export const GST_RATE = 0.18;
export const TRIAL = '7 days of Pro, with no card needed to start';

export const PLANS: {
  key: 'plus' | 'pro' | 'growth';
  name: string;
  tagline: string;
  monthly: number;
  annualMonthly: number;
  annualTotal: number;
  featured?: boolean;
  inherits?: string;
  features: string[];
}[] = [
  {
    key: 'plus',
    name: 'Plus',
    tagline: 'Everything one clinic needs to run its day',
    monthly: 399,
    annualMonthly: 319,
    annualTotal: 3830,
    featured: true,
    features: [
      'One clinic, 500 patients and 500 appointments a month',
      'Dental charting, treatment plans and prescriptions',
      'Billing, invoices, payments, expenses and inventory',
      'WhatsApp and email reminders from a verified MolarPlus sender',
      'Digital consent forms with e-signature',
      'Public online booking page',
      'All 12 practice reports, 12 months of history',
      'Up to 5 staff logins, attendance and audit log',
      '100 GB document and X-ray storage',
    ],
  },
  {
    key: 'pro',
    name: 'Pro',
    tagline: 'A bigger team, and up to five locations',
    monthly: 999,
    annualMonthly: 799,
    annualTotal: 9590,
    inherits: 'Everything in Plus, and:',
    features: [
      'Up to 5 clinic branches',
      'Up to 10 staff logins',
      '1,000 patients and 1,000 appointments a month',
      '150 GB document and X-ray storage',
      'WhatsApp sent from your own number',
      'Per-person permissions across 13 modules',
      'Unlimited report history and bulk data export',
      'Priority support',
    ],
  },
  {
    key: 'growth',
    name: 'Growth',
    tagline: 'For groups past five locations, with no ceilings',
    monthly: 1500,
    annualMonthly: 1200,
    annualTotal: 14400,
    inherits: 'Everything in Pro, and:',
    features: [
      'Unlimited clinic branches, switched in one login',
      'Unlimited staff, patients, appointments and storage',
      'Cross-branch reporting and a consolidated dashboard',
      'Assisted onboarding and data migration',
      'Priority support with a named contact',
    ],
  },
];

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;

/**
 * Plain questions with plain answers. They are on the page for people, and marked up as
 * FAQPage so search engines and AI assistants can quote an answer without guessing.
 */
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'What is MolarPlus?',
    a: 'MolarPlus is dental clinic management software. It runs a dental practice in one place: patient records, appointments, dental charting, treatment plans, prescriptions, case papers, billing and payments, lab orders, reports and WhatsApp reminders.',
  },
  {
    q: 'Who makes MolarPlus?',
    a: 'MolarPlus is developed and operated by ClinoHealth Systems LLP, the company behind ClinoHealth. Its official website is www.molarplus.com.',
  },
  {
    q: 'Which devices does MolarPlus work on?',
    a: 'MolarPlus works in any web browser, as a desktop app for Windows (Microsoft Store) and macOS, and as a mobile app for Android (Google Play) and iPhone and iPad (App Store). All of them share the same clinic data.',
  },
  {
    q: 'How much does MolarPlus cost?',
    a: 'In India, Plus is ₹399 a month, Pro is ₹999 a month and Growth is ₹1,500 a month, plus 18% GST. Paying yearly costs 20% less: ₹3,830, ₹9,590 and ₹14,400 a year, plus GST.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every new clinic gets 7 days of the Pro plan to try the whole product, with no card needed to start.',
  },
  {
    q: 'How do I talk to the MolarPlus team?',
    a: 'Message or call the team on WhatsApp at +91 95940 78777, or write to support@molarplus.com. Support is in English and Hindi.',
  },
];
