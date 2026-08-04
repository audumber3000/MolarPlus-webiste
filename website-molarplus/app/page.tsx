import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Stethoscope,
  FlaskConical,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Lock,
  KeyRound,
  DatabaseBackup,
  FileCheck2,
  Globe2,
  Check,
} from 'lucide-react';
import { colors, SITE_URL, SITE_NAME } from '@/lib/seo';
import { APP_URL, LAB_URL } from '@/lib/constants';
import ClinicLogoMarquee from '@/components/ClinicLogoMarquee';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import ProductShowcase from '@/components/ProductShowcase';

export const metadata: Metadata = {
  title: 'MolarPlus: Software for Dental Clinics and Dental Labs',
  description:
    'MolarPlus is one connected suite for dentistry. MolarPlus Dental Clinic is free for a single dental clinic with every feature included; MolarPlus Dental Lab is workflow software for dental laboratories. By Clino Health.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'MolarPlus: Software for Dental Clinics and Dental Labs',
    description:
      'One connected suite for dentistry. Dental Clinic for the practice, Dental Lab for the laboratory. By Clino Health.',
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MolarPlus',
  url: SITE_URL,
  parentOrganization: { '@type': 'Organization', name: 'Clino Health' },
  description:
    'MolarPlus is a suite of dental software products by Clino Health, for dental clinics and dental laboratories.',
  // Must stay identical to the sameAs on /clinic — a profile claimed on
  // one page and dropped on another reads as two weaker claims instead
  // of one strong one. Same five accounts as the footer.
  sameAs: [
    'https://www.instagram.com/molarplus_dental/',
    'https://www.facebook.com/profile.php?id=61575363063274',
    'https://x.com/Molarplus_',
    'https://www.linkedin.com/company/molarplus/',
    'https://www.youtube.com/@MolarPlus',
  ],
};

const clinicPoints = [
  'Appointments, online booking & reminders',
  'Records, charting & treatment plans',
  'Billing, payments & analytics',
  'Web, iOS, Android & desktop apps',
];

const labSlides = [
  {
    img: '/product-lab/lab-dashboard.png',
    alt: 'MolarPlus Dental Lab dashboard showing cases received, in production, due, overdue, revenue and active clients',
    label: 'Dashboard',
    title: 'Run your dental lab at a glance',
    desc: 'Cases received, in production, due and overdue, plus monthly revenue and active clients, the moment you log in.',
  },
  {
    img: '/product-lab/lab-cases.png',
    alt: 'MolarPlus Dental Lab cases list with clinic, doctor, patient, status and delivery timeline',
    label: 'Cases',
    title: 'Every case, intake to delivery',
    desc: 'Filter by due today, overdue, in production or delivered, with clinic, patient, status and timeline in one view.',
  },
  {
    img: '/product-lab/lab-clients.png',
    alt: 'MolarPlus Dental Lab clients list showing each partner clinic with open cases, unbilled work and outstanding balance',
    label: 'Clients',
    title: 'Every clinic you work with',
    desc: 'Each partner dental clinic with their open cases, unbilled work and outstanding balance, at a glance.',
  },
  {
    img: '/product-lab/lab-billing.png',
    alt: 'MolarPlus Dental Lab billing with monthly statements, outstanding and collected totals',
    label: 'Billing',
    title: 'Statements and balances, sorted',
    desc: 'Generate monthly statements, track outstanding and collected, and mark clinic payments as paid.',
  },
  {
    img: '/product-lab/lab-analytics.png',
    alt: 'MolarPlus Dental Lab analytics showing cases by status and top clients by revenue',
    label: 'Insights',
    title: 'Production and top clients',
    desc: 'Cases by status and your highest-revenue clients, so you can see where the work and the money come from.',
  },
];

const compliance = [
  { Icon: ShieldCheck, name: 'HIPAA', note: 'Aligned with US health-data privacy rules' },
  { Icon: FileCheck2, name: 'ABDM', note: 'Built for India’s Ayushman Bharat Digital Mission' },
  { Icon: Globe2, name: 'GDPR', note: 'Respects EU data-protection rights' },
  { Icon: KeyRound, name: 'Encryption', note: 'Encrypted in transit and at rest' },
  { Icon: DatabaseBackup, name: 'Daily backups', note: 'Automatic, redundant and recoverable' },
  { Icon: Lock, name: 'Role-based access', note: 'Every action is permission-controlled' },
];

const stats = [
  { value: '180+', label: 'Dental clinics on MolarPlus' },
  { value: '35,000+', label: 'Patients managed' },
  { value: '82+', label: 'Cities served' },
];

export default function UmbrellaHome() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero (product-neutral) ── */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <div
          className="absolute inset-x-0 top-0 h-[600px] opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #2a276e 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              For dental clinics &amp; dental labs, by Clino Health
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.04]">
              Built for the business
              <br />
              of <span style={{ color: colors.primary }}>dentistry</span>.
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We build two separate products: MolarPlus Dental Clinic for practices, and MolarPlus
              Dental Lab for laboratories. Each is purpose-built for how that side of dentistry actually
              works.
            </p>

            {/* Two co-equal product paths */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/clinic"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#2a276e]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: colors.primary }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-[11px] font-extrabold">01</span>
                MolarPlus Dental Clinic
              </Link>
              <Link
                href="/lab"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#1a1548]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: colors.dark }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-[11px] font-extrabold">02</span>
                MolarPlus Dental Lab
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Prefer to talk first?{' '}
              <Link href="/chat" className="font-semibold hover:underline" style={{ color: colors.primary }}>
                <WhatsAppIcon className="inline w-4 h-4 text-[#25D366] -mt-0.5" /> Chat with our team
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Trusted by (logo marquee) ── */}
      <ClinicLogoMarquee />

      {/* ── Product 1: MolarPlus Dental Clinic ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}10` }}
              >
                <Stethoscope className="w-5 h-5" style={{ color: colors.primary }} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                <span style={{ color: colors.primary }}>01</span>
                <span className="mx-1.5 text-gray-300">/</span>
                MolarPlus Dental Clinic
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs font-bold"
                style={{ backgroundColor: `${colors.primary}12`, color: colors.primary }}
              >
                Free for a single dental clinic
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Run your whole dental clinic, free.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Every feature is free for a single dental clinic, with no trial and no card. Appointments,
              records, charting, billing, staff and WhatsApp reminders, on every device. You only pay
              when you grow to multiple branches.
            </p>
            <div className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl">
              {clinicPoints.map((pt) => (
                <div key={pt} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.primary }} />
                  <span className="text-[15px] text-gray-700">{pt}</span>
                </div>
              ))}
            </div>
            <Link
              href="/clinic"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: colors.primary }}
            >
              Explore MolarPlus Dental Clinic
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Clinic product visual: live screens */}
          <ProductShowcase />
        </div>
      </section>

      {/* ── Product 2: MolarPlus Dental Lab ── */}
      <section className="py-28 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}10` }}
              >
                <FlaskConical className="w-5 h-5" style={{ color: colors.primary }} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                <span style={{ color: colors.primary }}>02</span>
                <span className="mx-1.5 text-gray-300">/</span>
                MolarPlus Dental Lab
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1 text-xs font-bold text-green-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                Now live
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Run your dental lab, intake to delivery.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Case management built for the people who craft every crown, bridge and aligner. Track
              cases, coordinate technicians, run quality control and stay connected with every partner
              dental clinic, in one workspace.
            </p>
            <Link
              href="/lab"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{ backgroundColor: colors.dark }}
            >
              Explore MolarPlus Dental Lab
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Lab product visual: live screens */}
          <ProductShowcase slides={labSlides} frameUrl="lab.molarplus.com" />
        </div>
      </section>

      {/* ── How they connect ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
            One ecosystem
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.15]">
            Dental clinic and dental lab, working as one.
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            When a dental clinic raises a crown or aligner case, it can flow straight to the dental
            lab, and status updates flow back to the clinic automatically. Cases, records and referrals
            move both ways, no phone calls, no lost paperwork.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-24 bg-[#1a1548] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300/80 mb-4">
              By the numbers
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Trusted across dentistry.
            </h2>
            <p className="mt-6 text-lg text-blue-100/70 leading-relaxed max-w-2xl">
              MolarPlus Dental Clinic powers practices in tier-1 metros and small towns alike, and
              MolarPlus Dental Lab is now live for dental laboratories.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#1a1548] p-10 md:p-12">
                <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-medium text-blue-200/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust & compliance ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Trust &amp; compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Built to handle health data.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Patient records are some of the most sensitive data there is. MolarPlus is built to the
              standards that protect it, and your data is always yours to export.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {compliance.map(({ Icon, name, note }) => (
              <div
                key={name}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Icon className="h-6 w-6" style={{ color: colors.primary }} />
                </div>
                <div>
                  <div className="font-bold text-[#1a1c4b] leading-tight">{name}</div>
                  <p className="text-sm text-gray-500 mt-1 leading-snug">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA (both products) ── */}
      <section
        className="py-24"
        style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Bring MolarPlus to your practice.
          </h2>
          <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
            Start with the Dental Clinic app, free for a single dental clinic, or set up MolarPlus
            Dental Lab for your laboratory. Same suite, built for both sides of the case.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-[#1a1548] bg-white hover:bg-gray-50 shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <Stethoscope className="w-5 h-5" />
              Start Dental Clinic free
            </a>
            <a
              href={`${LAB_URL}/login`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              <FlaskConical className="w-5 h-5" />
              Set up your dental lab
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
