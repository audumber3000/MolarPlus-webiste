import Link from 'next/link';
import type { Metadata } from 'next';
import {
  GraduationCap,
  CalendarRange,
  ClipboardList,
  Award,
  Users2,
  LineChart,
  BookOpen,
  ArrowRight,
  Mail,
} from 'lucide-react';
import { colors, SITE_URL, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'MolarPlus College, The platform for dental education',
  description:
    'MolarPlus College is clinical training and case management software built for dental colleges. Manage student rotations, track competencies, support faculty grading, and run a connected patient pool. Coming soon.',
  alternates: { canonical: `${SITE_URL}/college` },
  openGraph: {
    title: 'MolarPlus College, For dental institutions',
    description:
      'Clinical training, competency tracking, and faculty grading, built for dental colleges. Coming soon.',
    url: `${SITE_URL}/college`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

const capabilities = [
  {
    Icon: CalendarRange,
    title: 'Student rotations',
    desc: 'Schedule clinical rotations across departments. Balance workloads, track attendance, and manage assignments from one dashboard.',
  },
  {
    Icon: ClipboardList,
    title: 'Competency tracking',
    desc: 'Track required cases per competency for every student. See progress against curriculum requirements in real time.',
  },
  {
    Icon: Award,
    title: 'Faculty grading',
    desc: 'Structured rubrics, in-line feedback, and digital sign-offs. Replace paper logbooks with a single source of truth.',
  },
  {
    Icon: Users2,
    title: 'Patient pool & allocation',
    desc: 'Manage a shared patient pool across students. Match patients to students based on competency needs and case complexity.',
  },
  {
    Icon: LineChart,
    title: 'Department analytics',
    desc: 'Student progression, faculty workload, case volume, and clinical outcomes, across departments and academic years.',
  },
  {
    Icon: BookOpen,
    title: 'Curriculum-aligned',
    desc: 'Designed around the case requirements and clinical objectives that dental colleges actually use.',
  },
];

const audiences = [
  {
    role: 'For students',
    title: 'A clear path through clinical training.',
    desc: 'See your case requirements, find available patients, log work, and track your progress toward graduation, all in one place.',
  },
  {
    role: 'For faculty',
    title: 'Less paperwork, more teaching.',
    desc: 'Grade efficiently, give structured feedback, and oversee the cases your students are working on, without chasing logbooks.',
  },
  {
    role: 'For administrators',
    title: 'Visibility across every department.',
    desc: 'Understand how your institution is performing. Track student outcomes, faculty load, and clinical capacity at a glance.',
  },
];

export default function CollegePage() {
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
                <GraduationCap className="w-6 h-6" style={{ color: colors.primary }} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                  A MolarPlus product
                </div>
                <div className="text-2xl font-extrabold text-[#1a1c4b] tracking-tight">
                  MolarPlus College
                </div>
              </div>
            </div>

            <h1 className="mt-10 text-5xl md:text-6xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.05]">
              The platform for{' '}
              <span style={{ color: colors.primary }}>dental education</span>.
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              MolarPlus College is a clinical training system built for dental institutions.
              Manage rotations, track competencies, and support faculty grading, all on a
              platform designed for how dental colleges actually work.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#2a276e]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                style={{ backgroundColor: colors.primary }}
              >
                Get notified at launch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                Back to MolarPlus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-24 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              What MolarPlus College will do
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Every student. Every case. Every competency.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              The complete operating system for a modern dental college, from clinical
              rotations to graduation outcomes.
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

      {/* ── Built for everyone in the institution ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              One platform, three audiences
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Built for everyone in the institution.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audiences.map(({ role, title, desc }) => (
              <div key={role} className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                  {role}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1c4b] tracking-tight leading-tight">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
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
            <Mail className="w-3.5 h-3.5 text-blue-200" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
              Launching soon
            </span>
          </div>
          <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Partner with us early.
          </h2>
          <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
            We're working with dental institutions to shape MolarPlus College. If you're a
            faculty member, dean, or administrator, we'd like to hear from you.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-[#1a1548] bg-white hover:bg-gray-50 shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Contact our team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
