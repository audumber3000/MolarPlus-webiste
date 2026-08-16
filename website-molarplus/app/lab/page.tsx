import Link from 'next/link';
import type { Metadata } from 'next';
import {
  FlaskConical,
  Workflow,
  Users2,
  Palette,
  Truck,
  ClipboardCheck,
  BarChart3,
  ArrowRight,
  Mail,
} from 'lucide-react';
import { colors, SITE_URL, SITE_NAME } from '@/lib/seo';
import { LAB_URL } from '@/lib/constants';
import ProductShowcase from '@/components/ProductShowcase';
import { SignupLink } from '@/components/TrackedCTA';

export const metadata: Metadata = {
  title: 'MolarPlus Lab, Workflow software for dental laboratories',
  description:
    'MolarPlus Lab is case management software built specifically for dental laboratories. Track cases from intake to delivery, manage technician workflows, and stay connected with partner clinics. Now live.',
  alternates: { canonical: `${SITE_URL}/lab` },
  openGraph: {
    title: 'MolarPlus Lab, For dental laboratories',
    description:
      'Case management, technician workflows, and clinic-to-lab visibility, built for dental labs. Now live.',
    url: `${SITE_URL}/lab`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

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

const capabilities = [
  {
    Icon: Workflow,
    title: 'Case intake & tracking',
    desc: 'Receive cases digitally from partner clinics. Track every case from order to delivery in one timeline.',
  },
  {
    Icon: Users2,
    title: 'Technician assignment',
    desc: 'Route cases to the right specialists. Manage workloads, queues, and capacity across your team.',
  },
  {
    Icon: Palette,
    title: 'Material & shade specs',
    desc: 'Digital specifications with attached photos, shade guides, and clinical notes for every case.',
  },
  {
    Icon: Truck,
    title: 'Lab-to-clinic delivery',
    desc: 'Real-time status updates for partner clinics. Integrated delivery tracking and dispatch records.',
  },
  {
    Icon: ClipboardCheck,
    title: 'Quality control',
    desc: 'Multi-stage QC checkpoints. Document every check, catch issues before cases leave the lab.',
  },
  {
    Icon: BarChart3,
    title: 'Production analytics',
    desc: 'Turnaround times, technician productivity, and case volume by clinic, in one dashboard.',
  },
];

const workflow = [
  { step: '01', title: 'Intake', desc: 'Digital case entry from partner clinics, with specs, photos, and instructions attached.' },
  { step: '02', title: 'Production', desc: 'Assign to technicians, track progress through every stage of fabrication.' },
  { step: '03', title: 'QC', desc: 'Multi-stage quality checks with documented sign-offs before dispatch.' },
  { step: '04', title: 'Delivery', desc: 'Track shipments to the clinic. Real-time updates flow back automatically.' },
];

export default function LabPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${colors.primary}0d` }}
              >
                <FlaskConical className="w-6 h-6" style={{ color: colors.primary }} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                  A MolarPlus product
                </div>
                <div className="text-2xl font-extrabold text-[#1a1c4b] tracking-tight">
                  MolarPlus Lab
                </div>
              </div>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                Now live
              </span>
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.05]">
              Workflow software, built for{' '}
              <span style={{ color: colors.primary }}>dental laboratories</span>.
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              MolarPlus Lab is case management software designed for the people who craft every
              crown, bridge, and aligner. Track cases, coordinate technicians, and stay connected
              with partner clinics, all in one place.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <SignupLink
                href={`${LAB_URL}/login`}
                location="lab_hero"
                product="lab"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#2a276e]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: colors.primary }}
              >
                Login / Signup
                <ArrowRight className="w-4 h-4" />
              </SignupLink>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product screens ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
            See it in action
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1c4b] tracking-tight mb-10">
            Every case, in one workspace.
          </h2>
          <ProductShowcase slides={labSlides} frameUrl="lab.molarplus.com" />
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-24 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              What MolarPlus Lab does
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Every case. Every technician. Every step.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              A system of record built for the craft and complexity of dental laboratory work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-white border border-gray-200"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${colors.primary}0d` }}
                >
                  <Icon className="w-5 h-5" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-lg font-bold text-[#1a1c4b] mb-3">{title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Workflow ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              From intake to delivery
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              A clear view of every case.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
            {workflow.map(({ step, title, desc }) => (
              <div key={step} className="bg-white p-8 lg:p-10">
                <div
                  className="text-sm font-bold tracking-[0.2em]"
                  style={{ color: colors.primary }}
                >
                  {step}
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#1a1c4b]">{title}</h3>
                <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              Now live
            </span>
          </div>
          <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Run your lab on MolarPlus.
          </h2>
          <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
            Bring every case, technician, and partner clinic into one connected workspace. Create
            your lab account today, or talk to our team to see it in action.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <SignupLink
              href={`${LAB_URL}/login`}
              location="lab_final"
              product="lab"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-[#1a1548] bg-white hover:bg-gray-50 shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Login / Signup
              <ArrowRight className="w-4 h-4" />
            </SignupLink>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/15 transition-all"
            >
              <Mail className="w-4 h-4" />
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
