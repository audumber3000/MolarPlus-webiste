import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Stethoscope,
  FlaskConical,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Network,
  Compass,
  Building2,
  Check,
  Lock,
} from 'lucide-react';
import { colors, SITE_URL, SITE_NAME } from '@/lib/seo';
import ClinicLogoMarquee from '@/components/ClinicLogoMarquee';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
  title: 'MolarPlus — Dental Practice Management Software',
  description:
    'MolarPlus is a connected suite of products built for dentistry. MolarPlus Clinic for practices and MolarPlus Lab for dental laboratories, by Clino Health.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'MolarPlus — Dental Practice Management Software',
    description:
      'A connected suite of products for dental clinics and laboratories. By Clino Health.',
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
  parentOrganization: {
    '@type': 'Organization',
    name: 'Clino Health',
  },
  description:
    'MolarPlus is a suite of dental software products by Clino Health, for clinics and laboratories.',
  sameAs: [
    'https://www.instagram.com/molarplus_dental/',
    'https://www.linkedin.com/company/molarplus/',
    'https://x.com/Molarplus_',
  ],
};

const products = [
  {
    Icon: Stethoscope,
    eyebrow: 'For dental practices',
    name: 'MolarPlus Clinic',
    summary:
      'Practice management for modern dental clinics. Appointments, patient records, billing, and analytics, on web and mobile.',
    capabilities: [
      'Appointment scheduling & reminders',
      'Patient records & treatment history',
      'Billing, payments, and analytics',
      'Native apps for iOS and Android',
    ],
    href: '/clinic',
    cta: 'Explore Clinic',
    status: 'live' as const,
  },
  {
    Icon: FlaskConical,
    eyebrow: 'For dental laboratories',
    name: 'MolarPlus Lab',
    summary:
      'Workflow and case management built for dental labs. Track cases from intake to delivery, with full clinic-to-lab visibility.',
    capabilities: [
      'Case intake & status tracking',
      'Technician assignment & queues',
      'Shade & material specifications',
      'Lab-to-clinic delivery pipeline',
    ],
    href: '/lab',
    cta: 'Explore Lab',
    status: 'live' as const,
  },
];

const principles = [
  {
    Icon: Compass,
    title: 'Built specifically for dentistry',
    desc: 'Every workflow, every form, every report is designed for how dental professionals actually work, not adapted from generic healthcare software.',
  },
  {
    Icon: Network,
    title: 'A connected ecosystem',
    desc: 'Clinic and lab are designed to work together. Cases, records, and referrals flow seamlessly across the products you use.',
  },
  {
    Icon: Building2,
    title: 'Built for the world',
    desc: 'Localized pricing, regional workflows, and language support. Engineered to scale from a single chair to multi-location enterprises.',
  },
  {
    Icon: ShieldCheck,
    title: 'Secure by design',
    desc: 'End-to-end encryption, role-based access, and compliance-grade infrastructure, because patient data deserves nothing less.',
  },
];

const stats = [
  { value: '180+', label: 'Clinics on MolarPlus' },
  { value: '35,000+', label: 'Patients managed' },
  { value: '82+', label: 'Cities served' },
];

export default function UmbrellaHome() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <div
          className="absolute inset-x-0 top-0 h-[600px] opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #2a276e 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.05]">
              Software for everyone
              <br />
              in <span style={{ color: colors.primary }}>dentistry</span>.
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              MolarPlus is a connected suite of products built for the people who deliver oral
              healthcare, from the clinic chair, to the lab bench, to the lecture hall.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/clinic"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#2a276e]/20 hover:shadow-xl hover:shadow-[#2a276e]/25 hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: colors.primary }}
              >
                Explore MolarPlus Clinic
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/chat"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                Talk to our team
              </Link>
            </div>

            <p className="mt-10 text-sm text-gray-500">
              Trusted by 180+ clinics across 82 cities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trusted by (logo marquee) ── */}
      <ClinicLogoMarquee />

      {/* ── Products ── */}
      <section className="py-24 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              The MolarPlus suite
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Two products. One ecosystem.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Each MolarPlus product is built for a specific role in dentistry, designed to
              work brilliantly on its own, and even better together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map(({ Icon, eyebrow, name, summary, capabilities, href, cta }) => (
              <Link
                key={name}
                href={href}
                className="group relative flex flex-col p-8 lg:p-10 rounded-2xl bg-white border border-gray-200 hover:border-[#2a276e]/30 hover:shadow-2xl hover:shadow-[#2a276e]/5 hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Icon className="w-6 h-6" style={{ color: colors.primary }} />
                </div>

                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 mb-3">
                  {eyebrow}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1c4b] mb-4 tracking-tight">{name}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{summary}</p>

                <ul className="space-y-3 mb-10 flex-grow">
                  {capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <Check
                        className="w-4 h-4 mt-1 flex-shrink-0"
                        style={{ color: colors.primary }}
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>

                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: colors.primary }}
                >
                  {cta}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                What we believe
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                A serious platform for a specialized profession.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                We build for dental professionals because they deserve software that
                understands their work, not a one-size-fits-all healthcare tool stretched to
                fit.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {principles.map(({ Icon, title, desc }) => (
                <div key={title} className="space-y-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}0d` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: colors.primary }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1c4b]">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Security & compliance ── */}
      <section className="py-24 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Security &amp; compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Patient data, protected to the highest standard.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We store and safeguard patient records in a uniquely secure way, encrypted,
              access-controlled, and never sold. For us, compliance isn&apos;t a checkbox, it&apos;s
              how we build.
            </p>
            <Link
              href="/privacy-policy"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold group"
              style={{ color: colors.primary }}
            >
              Read our privacy &amp; data policy
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-5 p-8 rounded-2xl bg-white border border-gray-200">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}10` }}
              >
                <ShieldCheck className="w-6 h-6" style={{ color: colors.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1c4b]">ABDM-aligned, for India</h3>
                <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
                  Built in line with India&apos;s Ayushman Bharat Digital Mission (ABDM) standards
                  for health data, so your clinic stays compliant with national digital-health
                  regulations.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-8 rounded-2xl bg-white border border-gray-200">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}10` }}
              >
                <Lock className="w-6 h-6" style={{ color: colors.primary }} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1c4b]">HIPAA-compliant, for the US</h3>
                <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
                  For practices in the United States, and anyone handling protected health
                  information, MolarPlus meets HIPAA requirements for storing and transmitting
                  medical data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust / Stats ── */}
      <section className="py-24 bg-[#1a1548] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300/80 mb-4">
              By the numbers
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Trusted by clinics worldwide.
            </h2>
            <p className="mt-6 text-lg text-blue-100/70 leading-relaxed max-w-2xl">
              MolarPlus Clinic is already powering dental practices in tier-1 metros and small
              towns alike, and MolarPlus Lab is now live for dental laboratories.
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

      {/* ── Parent brand ── */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-12 items-start">
            <div className="flex-shrink-0">
              <div className="text-3xl font-extrabold tracking-tight">
                <span className="text-[#73a942]">Clino</span>
                <span className="text-[#245501] ml-1">Health</span>
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Parent company
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.15]">
                MolarPlus is a Clino Health product family.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Clino Health is a healthcare technology company building specialized software
                for medical professionals. MolarPlus is our dedicated product line for the
                dental industry, engineered with the same standards of security, reliability,
                and clinical precision as the rest of the Clino Health portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="py-24"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Ready to bring MolarPlus to your practice?
          </h2>
          <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
            Start with MolarPlus Clinic for your practice, or MolarPlus Lab for your laboratory.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/clinic"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-[#1a1548] bg-white hover:bg-gray-50 shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Explore Clinic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
