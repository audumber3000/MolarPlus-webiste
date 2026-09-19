/**
 * Single source of truth for the /compliance section.
 *
 * The hub, every regional page, the footer and the sitemap read from here.
 * Adding a region is one entry in FRAMEWORKS plus its page file.
 *
 * Every entry in SAFEGUARDS and SUBPROCESSORS was checked against the live
 * infrastructure and the app code (xpress-scan) in September 2026:
 *   - RDS `molarplus-db`, ap-south-1: storage encrypted, 7 day backups,
 *     not publicly accessible. EC2 volumes encrypted.
 *   - Files in Cloudflare R2, served through presigned URLs.
 *   - Anthropic (note drafting, handwriting extraction), OpenAI (report
 *     analysis), MSG91 / Meta / WA Reach (messaging), ZeptoMail (email),
 *     Sentry, PostHog, Cashfree, Dodo Payments, Google integrations.
 * Re-check before adding to either list. A safeguard that is not real is
 * worse than a missing one on a page like this.
 *
 * Deliberately absent: government emblems, seals and regulator logos. Using
 * them implies official endorsement and is unlawful for a private company
 * (in India under the State Emblem of India (Prohibition of Improper Use)
 * Act, 2005). Flags are used only as region markers.
 */

import type { Metadata } from 'next';
import { SITE_URL, DEFAULT_OG_IMAGE } from './seo';

export type FrameworkSlug = 'dpdp' | 'hipaa' | 'gdpr' | 'popia';

export interface Framework {
  slug: FrameworkSlug;
  region: string;
  /** Tight label for cards where the full region name would wrap. */
  regionShort: string;
  flag: string;
  flagAlt: string;
  /** Short name used in cards and navigation. */
  name: string;
  /** Full title of the law. */
  law: string;
  citation: string;
  regulator: string;
  /** What the clinic is called under this law. */
  clinicRole: string;
  /** What MolarPlus is called under this law, for patient data. */
  ourRole: string;
  summary: string;
}

export const FRAMEWORKS: Framework[] = [
  {
    slug: 'dpdp',
    region: 'India',
    regionShort: 'India',
    flag: '/flags/in.svg',
    flagAlt: 'Flag of India',
    name: 'DPDP Act',
    law: 'Digital Personal Data Protection Act, 2023',
    citation: 'Act No. 22 of 2023, read with the Digital Personal Data Protection Rules, 2025',
    regulator: 'Data Protection Board of India',
    clinicRole: 'Data Fiduciary',
    ourRole: 'Data Processor',
    summary:
      'How MolarPlus processes the personal data of patients and clinic staff under India’s Digital Personal Data Protection Act.',
  },
  {
    slug: 'hipaa',
    region: 'United States',
    regionShort: 'United States',
    flag: '/flags/us.svg',
    flagAlt: 'Flag of the United States',
    name: 'HIPAA',
    law: 'Health Insurance Portability and Accountability Act of 1996',
    citation: 'Pub. L. 104-191, as amended by the HITECH Act; 45 CFR Parts 160 and 164',
    regulator: 'U.S. Department of Health and Human Services, Office for Civil Rights',
    clinicRole: 'Covered Entity',
    ourRole: 'Business Associate',
    summary:
      'How MolarPlus safeguards protected health information for dental practices in the United States.',
  },
  {
    slug: 'gdpr',
    region: 'European Union and United Kingdom',
    regionShort: 'Europe and UK',
    flag: '/flags/eu.svg',
    flagAlt: 'Flag of the European Union',
    name: 'GDPR',
    law: 'General Data Protection Regulation',
    citation: 'Regulation (EU) 2016/679; in the United Kingdom, the UK GDPR and the Data Protection Act 2018',
    regulator: 'The supervisory authority of each Member State, and the Information Commissioner’s Office in the UK',
    clinicRole: 'Controller',
    ourRole: 'Processor',
    summary:
      'How MolarPlus processes health data for dental practices in the European Union and the United Kingdom.',
  },
  {
    slug: 'popia',
    region: 'South Africa',
    regionShort: 'South Africa',
    flag: '/flags/za.svg',
    flagAlt: 'Flag of South Africa',
    name: 'POPIA',
    law: 'Protection of Personal Information Act, 2013',
    citation: 'Act No. 4 of 2013',
    regulator: 'Information Regulator (South Africa)',
    clinicRole: 'Responsible Party',
    ourRole: 'Operator',
    summary:
      'How MolarPlus processes personal information for dental practices in South Africa.',
  },
];

export function getFramework(slug: FrameworkSlug): Framework {
  const framework = FRAMEWORKS.find((f) => f.slug === slug);
  if (!framework) throw new Error(`Unknown compliance framework: ${slug}`);
  return framework;
}

export const LAST_REVIEWED = 'September 2026';

/** The registered entity, as named in the Terms of Use. */
export const OPERATOR = 'Upclick Labs (OPC) Pvt. Ltd.';

/**
 * "HIPAA Data Protection Statement", not "HIPAA Compliance": the title
 * describes the page, it does not certify anything.
 */
export function statementTitle(framework: Framework): string {
  return `${framework.name} Data Protection Statement`;
}

export function frameworkMetadata(framework: Framework): Metadata {
  const url = `${SITE_URL}/compliance/${framework.slug}`;
  const title = statementTitle(framework);
  return {
    title,
    description: framework.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | MolarPlus`,
      description: framework.summary,
      url,
      images: [DEFAULT_OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}

/*
 * DPDP Rule 9 requires the business contact of a person able to answer on
 * the company's behalf. Replace `name` with a named officer when one is
 * appointed; a role title alone is the weakest form that satisfies it.
 */
export const PRIVACY_CONTACT = {
  role: 'Grievance Officer',
  name: 'Grievance Officer, MolarPlus',
  email: 'support@molarplus.com',
  phone: '+91 9594078777',
  address: 'Sky Loft, opposite Golf Course, Shastrinagar, Yerawada, Pune, Maharashtra 411006, India',
};

export const HOSTING = {
  provider: 'Amazon Web Services',
  location: 'Asia Pacific (Mumbai) region, India',
  backupWindowDays: 7,
};

export interface Safeguard {
  title: string;
  body: string;
}

export const SAFEGUARDS: Safeguard[] = [
  {
    title: 'Encryption at rest',
    body: 'Patient and clinic records are held in a managed PostgreSQL database on Amazon RDS, encrypted at rest with AES-256. The storage volumes of the application servers are encrypted in the same way.',
  },
  {
    title: 'Encryption in transit',
    body: 'Every connection between a browser or the MolarPlus mobile app and the MolarPlus service is encrypted with TLS.',
  },
  {
    title: 'Network isolation',
    body: 'The production database accepts no connections from the public internet. It can be reached only from the MolarPlus application servers.',
  },
  {
    title: 'Role-based access',
    body: 'The clinic owner decides, section by section, what each staff member can see and do. Staff are given access to the information their work requires and nothing more.',
  },
  {
    title: 'Authentication',
    body: 'Every user signs in with an individual account. Passwords are stored only as bcrypt hashes, sign-in and sign-up are verified with one-time codes, and repeated attempts are rate limited.',
  },
  {
    title: 'Audit trail',
    body: 'Actions taken within a clinic account are recorded in an activity log, which the clinic owner can review and export.',
  },
  {
    title: 'Private document links',
    body: 'Documents, prescriptions and reports are kept in private object storage and are opened only through signed links that expire shortly after they are issued.',
  },
  {
    title: 'Backups and recovery',
    body: 'The database is backed up automatically every day, with point-in-time recovery available across a rolling seven-day window.',
  },
  {
    title: 'Portability',
    body: 'A clinic owner can download a complete archive of the clinic’s data at any time and export patient records as a spreadsheet, without contacting MolarPlus.',
  },
];

export interface Subprocessor {
  name: string;
  purpose: string;
  data: string;
}

export const SUBPROCESSORS: Subprocessor[] = [
  {
    name: 'Amazon Web Services',
    purpose: 'Application hosting and database, in the Mumbai region',
    data: 'All clinic and patient records',
  },
  {
    name: 'Cloudflare',
    purpose: 'Object storage for files',
    data: 'Documents, prescriptions, reports and invoices',
  },
  {
    name: 'Anthropic',
    purpose: 'AI-assisted clinical note drafting and handwriting extraction',
    data: 'Only the content a clinician submits to these features',
  },
  {
    name: 'OpenAI',
    purpose: 'AI analysis within practice reports',
    data: 'Report data a clinic chooses to generate',
  },
  {
    name: 'MSG91',
    purpose: 'SMS and WhatsApp message delivery',
    data: 'Patient name, phone number and message content',
  },
  {
    name: 'Meta Platforms',
    purpose: 'WhatsApp Business messaging',
    data: 'Patient name, phone number and message content',
  },
  {
    name: 'WA Reach',
    purpose: 'WhatsApp messages from a clinic’s own number, where the clinic connects one',
    data: 'Patient name, phone number and message content',
  },
  {
    name: 'Zoho (ZeptoMail)',
    purpose: 'Transactional email',
    data: 'Recipient email address and message content',
  },
  {
    name: 'Sentry',
    purpose: 'Error monitoring',
    data: 'Technical diagnostics, which may include user identifiers',
  },
  {
    name: 'PostHog',
    purpose: 'Product usage analytics',
    data: 'Usage events of clinic staff',
  },
  {
    name: 'Cashfree Payments',
    purpose: 'Subscription billing in India',
    data: 'Billing details of the clinic',
  },
  {
    name: 'Dodo Payments',
    purpose: 'Subscription billing outside India',
    data: 'Billing details of the clinic',
  },
  {
    name: 'Google',
    purpose: 'Optional sign-in and Google Business Profile integration',
    data: 'Account email and profile details the clinic authorises',
  },
];
