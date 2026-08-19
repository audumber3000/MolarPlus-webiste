import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BedDouble,
  Building2,
  FlaskConical,
  Laptop,
  Monitor,
  Pill,
  Scan,
  Smartphone,
  Stethoscope,
  Users,
} from 'lucide-react';

/**
 * Every brand Clino Health ships, and the apps that sit under each one.
 *
 * This is the only place the portfolio is described. The mega-menu, the
 * /products index, each brand page and the sitemap all read from here,
 * so adding a brand is one edit rather than five, and the nav can never
 * drift out of step with the pages it links at.
 *
 * `status` drives presentation, not just a badge: a brand that is not
 * `live` has no external site to link at yet, so the cards render as
 * plain markup instead of anchors. Do not promote one to `live` before
 * its `url` actually resolves.
 */

export type BrandStatus = 'live' | 'development';

/** One shipped surface of a brand — the web app, the mobile app, etc. */
export interface BrandApp {
  name: string;
  /** What it is, in the plainest words available. */
  desc: string;
  /** Who sits in front of it. This is the part buyers actually scan. */
  audience: string;
  Icon: LucideIcon;
  /** Absent while the surface is still being built. */
  url?: string;
}

/**
 * A brand's own visual identity, taken from that brand's live site
 * rather than invented here.
 *
 * These are applied as inline styles, not Tailwind classes: the value is
 * chosen at runtime per brand, and Tailwind's JIT only emits classes it
 * can see as literal strings at build time, so `bg-[${accent}]` would
 * compile to nothing.
 *
 * Brands with no site yet fall back to the Clino palette — see
 * CLINO_THEME — because a house colour is honest where an invented brand
 * colour is not.
 */
export interface BrandTheme {
  /** The brand's primary colour. Chips, headings, links, buttons. */
  accent: string;
  /** A pale wash of the accent, for chip and panel backgrounds. */
  tint: string;
  /** Border tone that sits between tint and accent. */
  edge: string;
  /** True when the accent is dark enough to carry white text. */
  onAccentLight: boolean;
}

/** The brand's own logo, as published on its own site. */
export interface BrandLogo {
  src: string;
  width: number;
  height: number;
  /** Portrait marks and horizontal lockups cannot share a height. */
  heightClass: string;
  /**
   * True when the artwork already contains the brand name.
   *
   * MolarPlus publishes a full lockup, so printing the name beside it
   * would say it twice. SyrupDesk publishes a bare mark — its site draws
   * the wordmark in live text — so the name has to be set alongside, or
   * the card shows an unlabelled bottle.
   */
  hasWordmark: boolean;
}

export interface Brand {
  slug: string;
  name: string;
  /** The one-line positioning used in the nav and on cards. */
  tagline: string;
  /** The longer version, used on the brand page and in metadata. */
  description: string;
  /** Practice type served — the word a buyer would use for themselves. */
  category: string;
  status: BrandStatus;
  /** Public marketing site. Only set once it resolves. */
  url?: string;
  Icon: LucideIcon;
  theme: BrandTheme;
  /** Absent for brands that do not have a logo yet. */
  logo?: BrandLogo;
  apps: BrandApp[];
}

/** House palette, used by brands that have no identity of their own yet. */
export const CLINO_THEME: BrandTheme = {
  accent: '#245501',
  tint: '#f4f9f0',
  edge: '#e3efd9',
  onAccentLight: true,
};

export const BRANDS: Brand[] = [
  {
    slug: 'molarplus',
    name: 'MolarPlus',
    tagline: 'Dental clinics and dental laboratories',
    description:
      'MolarPlus runs the whole dental practice — appointments, patient records, treatment plans, billing and analytics — and connects the clinic to the labs it sends work to. Four apps share one patient record, so the front desk, the chair, the lab and the owner are all looking at the same thing.',
    category: 'Dentistry',
    status: 'live',
    url: 'https://www.molarplus.com',
    Icon: Stethoscope,
    // colors.primary / .dark from website-molarplus/lib/seo.ts.
    theme: { accent: '#2a276e', tint: '#eeedf6', edge: '#d8d6e8', onAccentLight: true },
    // The 499x145 lockup its own nav uses.
    logo: {
      src: '/brands/molarplus.svg',
      width: 499,
      height: 145,
      heightClass: 'h-8',
      hasWordmark: true,
    },
    apps: [
      {
        name: 'MolarPlus Clinic',
        desc: 'Appointments, patient records, treatment plans, billing and reporting',
        audience: 'Dentists and front desk',
        Icon: Monitor,
        url: 'https://app.molarplus.com',
      },
      {
        name: 'MolarPlus Lab',
        desc: 'Case intake, work tracking and clinic handoff for dental laboratories',
        audience: 'Dental laboratories',
        Icon: FlaskConical,
        url: 'https://lab.molarplus.com',
      },
      {
        name: 'MolarPlus Mobile',
        desc: "The day's schedule, patient lookup and payments from a phone",
        audience: 'Dentists on the move',
        Icon: Smartphone,
      },
      {
        name: 'MolarPlus Desktop',
        desc: 'The full clinic app installed locally, for chairside use on patchy connections',
        audience: 'Clinics with unreliable internet',
        Icon: Laptop,
      },
    ],
  },
  {
    slug: 'syrupdesk',
    name: 'SyrupDesk',
    tagline: 'Retail pharmacies and medical stores',
    description:
      'SyrupDesk is billing, inventory, expiry tracking, purchases and GST for an independent medical store. It is built for the counter — fast enough to keep a queue moving, and plain enough that nobody needs training to use it.',
    category: 'Pharmacy',
    status: 'live',
    url: 'https://syrupdesk.com',
    Icon: Pill,
    // --green-700 (brand anchor) and --green-100 from SyrupDesk/app/tokens.css.
    theme: { accent: '#005500', tint: '#d6efd6', edge: '#b4dfb4', onAccentLight: true },
    // Portrait bottle-and-pills mark, so it gets more height than a lockup.
    logo: {
      src: '/brands/syrupdesk.png',
      width: 112,
      height: 160,
      heightClass: 'h-11',
      hasWordmark: false,
    },
    apps: [
      {
        name: 'SyrupDesk Web',
        desc: 'Counter billing, inventory, expiry alerts, purchases and GST returns',
        audience: 'Pharmacy owners and counter staff',
        Icon: Monitor,
        url: 'https://app.syrupdesk.com',
      },
      {
        name: 'SyrupDesk Desktop',
        desc: 'The same counter, installed locally so billing survives an internet outage',
        audience: 'Stores on patchy connections',
        Icon: Laptop,
      },
      {
        name: 'SyrupDesk Mobile',
        desc: 'Stock checks, purchase approvals and day-end figures on Android and iOS',
        audience: 'Owners away from the counter',
        Icon: Smartphone,
      },
      {
        name: 'SyrupDesk for Customers',
        desc: 'Digital bills, refill reminders and order-ahead for the store’s regulars',
        audience: 'Pharmacy customers',
        Icon: Users,
      },
    ],
  },
  {
    slug: 'hospital',
    name: 'Hospital Management System',
    tagline: 'An operating system for the hospital — OPD and IPD',
    description:
      'One system for the whole hospital rather than a stack of disconnected modules: outpatient and inpatient, admissions and discharge, wards and beds, pharmacy, billing and reporting. Currently in development.',
    category: 'Hospitals',
    status: 'development',
    Icon: Building2,
    theme: CLINO_THEME,
    apps: [
      {
        name: 'OPD',
        desc: 'Registration, queueing, consultation notes and outpatient billing',
        audience: 'Outpatient departments',
        Icon: Stethoscope,
      },
      {
        name: 'IPD',
        desc: 'Admissions, ward and bed management, orders, discharge summaries',
        audience: 'Inpatient wards',
        Icon: BedDouble,
      },
      {
        name: 'Pharmacy and stores',
        desc: 'Hospital formulary, dispensing and stock across departments',
        audience: 'Hospital pharmacy',
        Icon: Pill,
      },
      {
        name: 'Administration',
        desc: 'Billing, insurance, staff roles and hospital-wide reporting',
        audience: 'Hospital administrators',
        Icon: Activity,
      },
    ],
  },
  {
    slug: 'imaging',
    name: 'Imaging and Diagnostics',
    tagline: 'X-ray and sonography centres',
    description:
      'Practice management for diagnostic imaging centres — patient intake, scan scheduling, reporting and report delivery, built around how an X-ray or sonography centre actually runs its day. Currently in development.',
    category: 'Diagnostics',
    status: 'development',
    Icon: Scan,
    theme: CLINO_THEME,
    apps: [
      {
        name: 'Centre management',
        desc: 'Patient intake, scan scheduling and centre-wide billing',
        audience: 'Imaging centres',
        Icon: Monitor,
      },
      {
        name: 'Reporting',
        desc: 'Structured reporting and templates for radiologists',
        audience: 'Radiologists',
        Icon: Activity,
      },
      {
        name: 'Report delivery',
        desc: 'Reports and images delivered to the patient and referring doctor',
        audience: 'Patients and referrers',
        Icon: Smartphone,
      },
      {
        name: 'Referral network',
        desc: 'Referring doctors track their cases and receive results directly',
        audience: 'Referring doctors',
        Icon: Users,
      },
    ],
  },
];

/** Brands with a shipped product, in nav order. */
export const LIVE_BRANDS = BRANDS.filter((b) => b.status === 'live');

/** Brands still being built. Shown, but never linked out. */
export const UPCOMING_BRANDS = BRANDS.filter((b) => b.status === 'development');

export function getBrand(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}
