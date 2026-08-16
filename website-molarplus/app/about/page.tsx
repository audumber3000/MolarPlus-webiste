import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  HeartHandshake,
  Ear,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { SITE_URL, colors } from '@/lib/seo';
import { APP_URL } from '@/lib/constants';
import { COMPANY_STATS } from '@/lib/stats';
import { SignupLink } from '@/components/TrackedCTA';

export const metadata: Metadata = {
  title: 'About MolarPlus: Built for Dentists, Free for Small Clinics',
  description:
    'MolarPlus is dental clinic software that is free for a single clinic. You only pay when you grow to multiple branches. A lean team that listens to dentists and ships fast.',
  keywords:
    'about MolarPlus, dental software company, free dental clinic software, dental practice management, made for dentists',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About MolarPlus: Built for Dentists, Free for Small Clinics',
    description:
      'Free for a single clinic, you only pay when you grow. A lean team that listens to dentists and builds what they actually ask for.',
    url: `${SITE_URL}/about`,
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About MolarPlus',
  description:
    'MolarPlus is dental clinic software that is free for a single clinic and only charges when a practice grows into multiple branches. Built by a lean team that listens to dentists.',
  publisher: { '@type': 'Organization', name: 'MolarPlus', url: SITE_URL },
};


const principles = [
  {
    Icon: HeartHandshake,
    title: 'If you’re small, it’s on us',
    desc: 'A single clinic gets the whole product, free, forever. You only pay once you grow into multiple branches, never before.',
  },
  {
    Icon: Ear,
    title: 'We listen to dentists',
    desc: 'Almost every feature exists because a dentist asked for it. We build around how you actually run your clinic, not how it demos.',
  },
  {
    Icon: Zap,
    title: 'We ship fast',
    desc: 'A lean team means less process and more shipping. The thing slowing you down can be fixed in weeks, not “on the roadmap” forever.',
  },
  {
    Icon: ShieldCheck,
    title: 'We don’t take trust for granted',
    desc: 'Your records and your livelihood are in our hands. Your data stays yours: encrypted, exportable, never sold. No lock-in.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
            About MolarPlus
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.05]">
            Good software shouldn’t be a luxury for a small clinic.
          </h1>
          <p className="mt-7 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We started MolarPlus with one belief: the dentist running a single chair deserves the same
            tools as a twenty-branch group, without the price tag standing in the way. So for a single
            clinic, the tools are on us.
          </p>
        </div>
      </section>

      {/* ── Mission: if you're small, it's on us ── */}
      <section className="py-24 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
            <div className="lg:sticky lg:top-32 self-start">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Our mission
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                If you’re small, it’s on us.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A single clinic gets the <strong className="text-[#1a1c4b]">entire</strong> product, free,
                forever. Not a trial that expires, not a stripped-down tier. You get everything: patients,
                charting, treatment plans, billing, reminders, the mobile and desktop apps, all of it.
              </p>
              <p>
                We only ask you to pay when MolarPlus is genuinely doing more for you: when you grow into{' '}
                <strong className="text-[#1a1c4b]">multiple branches</strong> and need to run them as one
                account. That’s the Multi-Branch plan. Until then, the software is on us.
              </p>
              <p>
                We’d rather earn as you grow than tax you while you’re finding your feet. If MolarPlus
                helps your practice grow into a second and third location, we’ve earned it. If it doesn’t,
                you’ve lost nothing.
              </p>

              <div
                className="mt-2 rounded-2xl border p-6"
                style={{ borderColor: `${colors.primary}25`, backgroundColor: `${colors.primary}08` }}
              >
                <p className="text-base text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#1a1c4b]">One clinic?</span> Free, forever. Every
                  feature, no card. <span className="font-bold text-[#1a1c4b]">Multiple branches?</span>{' '}
                  That’s the only thing you pay for.{' '}
                  <Link href="/pricing" className="font-semibold underline decoration-gray-300 hover:decoration-current" style={{ color: colors.primary }}>
                    See pricing
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-8 lg:p-10 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight">
                  {stat.value}
                </div>
                {/* This layout has room, so it takes the fuller phrasing where
                    one exists; the compact trust strip uses the short label. */}
                <div className="mt-2 text-sm font-medium text-gray-500">
                  {stat.longLabel ?? stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="py-24 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed lg:order-2">
              <p>
                We’re a <strong className="text-[#1a1c4b]">lean team</strong>, which means when you
                message us, you’re talking to the people who build the product, not a ticket queue three
                layers removed from the code.
              </p>
              <p>
                Almost every feature in MolarPlus exists because a dentist asked for it. We listen to how
                you actually run your clinic: the paper register, the WhatsApp follow-ups, the way you
                chart at the chair. Then we build around that, not around what looks good in a demo.
              </p>
              <p>
                And we ship quickly. Tell us what’s slowing you down, and there’s a real chance it’s fixed
                in weeks. You’re not shouting into a roadmap; you’re talking to the team.
              </p>
            </div>

            <div className="lg:sticky lg:top-32 self-start lg:order-1">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                How we work
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                A small team that actually answers.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              What we believe
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              The promises behind the product.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {principles.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-gray-200 p-8 flex flex-col">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl mb-5"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Icon className="h-6 w-6" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-xl font-bold text-[#1a1c4b] tracking-tight mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Start free, and tell us what to build next.
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Get your whole clinic running on MolarPlus in minutes. Pay nothing until you grow into
            multiple branches, and let us know what would make your day easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignupLink
              href={`${APP_URL}/signup`}
              location="about"
              className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              style={{ color: colors.primary }}
            >
              Start Free <ArrowRight className="w-5 h-5" />
            </SignupLink>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
