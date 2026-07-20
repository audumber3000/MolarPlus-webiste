'use client';

import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Check,
  Star,
  Plus,
  Minus,
  Lock,
  KeyRound,
  DatabaseBackup,
  FileCheck2,
  Globe2,
} from 'lucide-react';
import { colors } from '@/lib/seo';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import ProductShowcase from '@/components/ProductShowcase';
import ConvergeOne from '@/components/ConvergeOne';
import { WindowsBadge, MacBadge } from '@/components/DesktopBadges';
import ClinicLogoMarquee from '@/components/ClinicLogoMarquee';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
  trackSignupStarted,
  trackDemoRequested,
  trackAppStoreClick,
  trackDesktopDownload,
  trackFaqExpanded,
} from '@/analytics/track';
import type { CtaLocation } from '@/analytics/events';

const SIGNUP_URL = 'https://app.molarplus.com/signup';

const stats = [
  { value: '180+', label: 'Clinics running on MolarPlus' },
  { value: '35,000+', label: 'Patients managed' },
  { value: '82+', label: 'Cities, from metros to small towns' },
];

const mobileBenefits = [
  'Check tomorrow’s schedule from your phone',
  'Pull up a patient’s history between chairs',
  'Add a new patient in under a minute',
  'Approve and send WhatsApp reminders on the go',
];

/* Compliance & data-security trust wall. */
const compliance = [
  { Icon: ShieldCheck, name: 'HIPAA', note: 'Aligned with US health-data privacy rules' },
  { Icon: FileCheck2, name: 'ABDM', note: 'Built for India’s Ayushman Bharat Digital Mission' },
  { Icon: Globe2, name: 'GDPR', note: 'Respects EU data-protection rights' },
  { Icon: KeyRound, name: 'Encryption', note: 'Encrypted in transit and at rest' },
  { Icon: DatabaseBackup, name: 'Daily backups', note: 'Automatic, redundant and recoverable' },
  { Icon: Lock, name: 'Role-based access', note: 'Every action is permission-controlled' },
];

/* Two plans: the whole product is free for one clinic; you only pay to run more than one branch. */
const paths = [
  {
    tag: 'Single clinic',
    title: 'Your whole clinic, free',
    desc: 'Run everything on the free plan: patients, charting, treatment plans, prescriptions, appointments, billing, staff, inventory and WhatsApp reminders, on every device. Every feature, free forever.',
    price: '₹0',
    priceIntl: '$0',
    period: 'forever',
    points: ['One clinic, every feature included', 'Web, mobile & desktop apps', 'Free forever, no trial or card'],
    cta: 'Start free',
    href: SIGNUP_URL,
    source: 'path_solo' as CtaLocation,
    highlight: false,
  },
  {
    tag: 'Multiple branches',
    title: 'Run every location from one account',
    desc: 'The only paid plan. When you grow past one clinic, Multi-Branch adds the tools to run several locations together, and everything in the free plan stays included.',
    price: '₹899',
    priceIntl: '$10',
    period: '/month',
    points: ['Add unlimited branches', 'Switch branches in one login', 'Cross-branch reporting & priority support'],
    cta: 'Get Multi-Branch',
    href: SIGNUP_URL,
    source: 'path_pro',
    highlight: true,
  },
];

/* photo: drop a headshot in /public/images/doctors/ and set its path here; empty falls back to initials. */
const testimonials = [
  {
    name: 'Dr. Rajesh Patel',
    clinic: 'Patel Smiles Clinic',
    location: 'Ahmedabad',
    rating: 5,
    photo: '',
    text: 'The automated appointment reminders alone cut our no-shows by more than half. I used to have 4–5 empty slots every week. Now patients actually show up.',
  },
  {
    name: 'Dr. Priya Sharma',
    clinic: 'Sharma Dental Care',
    location: 'New Delhi',
    rating: 5,
    photo: '',
    text: 'Earlier I was managing everything on paper and WhatsApp. Now appointments, records and billing are all in one place. My staff loves it too.',
  },
  {
    name: 'Dr. Anita Menon',
    clinic: 'Menon Dental Studio',
    location: 'Bangalore',
    rating: 5,
    photo: '',
    text: "I can pull up any patient's full history in seconds: treatment notes, X-rays, payment history. Record-keeping that used to take hours.",
  },
];

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, '')
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const faqs = [
  {
    q: 'Is MolarPlus really free?',
    a: 'Yes. A single clinic gets the entire product: patients, charting, treatment plans, prescriptions, appointments, billing, staff, inventory and WhatsApp reminders, on web, mobile and desktop. Free forever, with no trial and no credit card. The only paid plan is Multi-Branch, for running more than one location.',
  },
  {
    q: 'I already use another software / paper. Can I switch?',
    a: 'Yes. We provide free data migration for new clinics: our onboarding team moves your existing patient records over, so most clinics are fully running within 24 hours.',
  },
  {
    q: 'Does it work on my phone?',
    a: 'Yes. Native apps on iOS and Android, plus desktop apps for Windows and Mac. Everything syncs in real time, so the schedule on your phone matches the front desk.',
  },
  {
    q: 'How secure is my patient data?',
    a: 'Patient data is encrypted, access-controlled by role, backed up automatically, and never sold. MolarPlus is built in line with HIPAA (US) and ABDM (India) health-data standards.',
  },
  {
    q: 'When would I ever need to pay?',
    a: 'Only when you run more than one branch. The Multi-Branch plan (₹899/month in India, $10/month internationally; less billed annually) lets you add unlimited clinic branches, switch between them in one login, run cross-branch reporting and get priority support. A single clinic never needs it.',
  },
];

export default function HomeClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isIndia, setIsIndia] = useState(true);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';
      setIsIndia(tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta');
    } catch {
      setIsIndia(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
        <div
          className="absolute inset-x-0 top-0 h-[700px] opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #2a276e 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-[#1a1c4b] tracking-tight leading-[1.04]">
            Stop running your dental clinic on
            <br className="hidden sm:block" />{' '}
            <span className="line-through decoration-2 decoration-[#2a276e]/50 text-gray-400">
              paper and Excel sheets
            </span>
            .
          </h1>

          <p className="mt-7 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Right now your bookings, records and payments are scattered across a register, a drawer,
            and a dozen Excel sheets. MolarPlus pulls them into one place your whole team can use,
            and quietly reminds patients before every visit so the chair stays full.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SIGNUP_URL}
              onClick={() => trackSignupStarted('hero', SIGNUP_URL)}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#2a276e]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              style={{ backgroundColor: colors.primary }}
            >
              Start free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/chat"
              onClick={() => trackDemoRequested('hero')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#2a276e] transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              or book a 15-min demo
            </a>
          </div>

          {/* App downloads — all four platforms */}
          <div className="mt-9">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Download free, works on every device
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.molarplus.app&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAppStoreClick('google')}
              className="h-11 inline-flex items-center transition-opacity hover:opacity-90"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get MolarPlus on Google Play"
                className="h-11 w-auto"
              />
            </a>
            <a
              href="https://apps.apple.com/app/molarplus/id6765472713"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAppStoreClick('apple')}
              className="h-11 inline-flex items-center transition-opacity hover:opacity-90"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download MolarPlus on App Store"
                className="h-11 w-auto"
              />
            </a>
            <WindowsBadge
              comingSoon={false}
              href="https://apps.microsoft.com/detail/9n78rx7phv9k"
              onClick={() => trackDesktopDownload('windows')}
            />
            <MacBadge
              comingSoon={false}
              href="https://pub-376f22e59eee415286747973b95ba075.r2.dev/MolarPlus-mac.dmg"
              onClick={() => trackDesktopDownload('mac')}
            />
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            <span
              className="rounded-md px-2 py-0.5 font-semibold"
              style={{ backgroundColor: `${colors.primary}12`, color: colors.primary }}
            >
              Free forever for single-chair clinics
            </span>{' '}
            · Up and running in 10 minutes
          </p>

          {/* Product showcase slider as the hero visual */}
          <div className="mt-20">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
              See it in action
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1c4b] tracking-tight mb-10">
              Your whole clinic, in one place.
            </h2>
            <ProductShowcase />
          </div>
        </div>
      </section>

      {/* ── Trust strip: logos + stats ── */}
      <ClinicLogoMarquee />

      <section className="py-16 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-8 lg:p-10 text-center md:text-left">
                <div className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scattered systems converge into one ── */}
      <ConvergeOne />

      {/* ── Mobile spotlight ── */}
      <section className="py-28 bg-slate-50/60 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                And in your pocket
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                Your whole clinic, on your phone.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                The same MolarPlus on iOS and Android. Check the schedule between patients, pull up a
                history at the chair, and never be tied to the front-desk computer.
              </p>

              <ul className="mt-8 space-y-4">
                {mobileBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.primary }} />
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.molarplus.app&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAppStoreClick('google')}
                    className="h-12 inline-flex items-center transition-opacity hover:opacity-90"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get MolarPlus on Google Play"
                      className="h-12 w-auto"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/app/molarplus/id6765472713"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAppStoreClick('apple')}
                    className="h-12 inline-flex items-center transition-opacity hover:opacity-90"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="Download MolarPlus on App Store"
                      className="h-12 w-auto"
                    />
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <WindowsBadge
                    comingSoon={false}
                    href="https://apps.microsoft.com/detail/9n78rx7phv9k"
                    onClick={() => trackDesktopDownload('windows')}
                  />
                  <MacBadge
                    comingSoon={false}
                    href="https://pub-376f22e59eee415286747973b95ba075.r2.dev/MolarPlus-mac.dmg"
                    onClick={() => trackDesktopDownload('mac')}
                  />
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center min-h-[460px]">
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
              <img
                src="/mobileScreens/two_screen_mobile_nobg.png"
                alt="MolarPlus mobile app on iOS and Android for dental clinic management"
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pick your path (dual-audience) ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Pick your path
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Start where your practice is.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              One clinic or twenty. Your whole clinic is free, and you only pay when you grow to multiple branches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {paths.map((p) => (
              <div
                key={p.tag}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  p.highlight
                    ? 'bg-[#1a1548] text-white border-2 border-[#2a276e]'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {p.highlight && (
                  <span className="absolute top-6 right-6 inline-flex items-center rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Only when you grow
                  </span>
                )}
                <div
                  className={`text-xs font-bold uppercase tracking-[0.16em] mb-4 ${
                    p.highlight ? 'text-blue-300/80' : 'text-gray-500'
                  }`}
                >
                  {p.tag}
                </div>
                <h3
                  className={`text-xl font-bold tracking-tight ${
                    p.highlight ? 'text-white' : 'text-[#1a1c4b]'
                  }`}
                >
                  {p.title}
                </h3>
                <div className="flex items-baseline gap-1 mt-5 mb-4">
                  <span
                    className={`text-4xl font-extrabold tracking-tight ${
                      p.highlight ? 'text-white' : 'text-[#1a1c4b]'
                    }`}
                  >
                    {p.priceIntl && !isIndia ? p.priceIntl : p.price}
                  </span>
                  {p.period && (
                    <span
                      className={`text-sm font-medium ${
                        p.highlight ? 'text-blue-200/70' : 'text-gray-400'
                      }`}
                    >
                      {p.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    p.highlight ? 'text-blue-100/80' : 'text-gray-600'
                  }`}
                >
                  {p.desc}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: p.highlight ? '#fff' : colors.primary }}
                      />
                      <span
                        className={`text-sm ${p.highlight ? 'text-blue-100/90' : 'text-gray-700'}`}
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  onClick={() =>
                    p.href === SIGNUP_URL &&
                    trackSignupStarted(p.source as CtaLocation, SIGNUP_URL)
                  }
                  className={`inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                    p.highlight
                      ? 'bg-white text-[#1a1548] hover:bg-gray-50'
                      : 'bg-[#2a276e] text-white hover:opacity-90'
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/clinic/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: colors.primary }}
            >
              See full pricing & feature comparison
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              From the chair
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Dentists who made the switch.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[16px] text-gray-700 leading-relaxed flex-1">“{t.text}”</p>
                <div className="mt-7 pt-5 border-t border-gray-100 flex items-center gap-3">
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                      style={{ backgroundColor: `${colors.primary}14`, color: colors.primary }}
                      aria-hidden
                    >
                      {initials(t.name)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-[#1a1c4b]">{t.name}</div>
                    <div className="text-sm text-gray-500">
                      {t.clinic} <span className="text-gray-300 mx-1">·</span> {t.location}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance & security ── */}
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

      {/* ── FAQ ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Common questions
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                Frequently asked.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Can&apos;t find what you&apos;re looking for?{' '}
                <a
                  href="mailto:support@molarplus.com"
                  className="font-semibold underline decoration-gray-300 hover:decoration-[#2a276e]"
                  style={{ color: colors.primary }}
                >
                  Contact us
                </a>
                .
              </p>
            </div>

            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => {
                        if (!isOpen) trackFaqExpanded(faq.q);
                        setOpenFaq(isOpen ? null : i);
                      }}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className="text-lg font-semibold text-[#1a1c4b] group-hover:text-[#2a276e] transition-colors pr-6">
                        {faq.q}
                      </span>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#2a276e]/40 transition-colors">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 text-[#2a276e]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#2a276e]" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-6 -mt-1 text-[15px] text-gray-600 leading-relaxed max-w-2xl">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA / Book a demo ── */}
      <section id="contact" className="py-28 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Get started
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                See your clinic running on MolarPlus.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Start free in two minutes, or book a 15-minute demo and we&apos;ll set it up around how
                your clinic actually works, with no commitment and no sales pressure.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={SIGNUP_URL}
                  onClick={() => trackSignupStarted('final_cta', SIGNUP_URL)}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#2a276e]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: colors.primary }}
                >
                  Start free
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/chat"
                  onClick={() => trackDemoRequested('final_cta')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#2a276e] transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
                  Prefer email?
                </div>
                <a
                  href="mailto:support@molarplus.com"
                  className="text-base font-semibold transition-colors"
                  style={{ color: colors.primary }}
                >
                  support@molarplus.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm">
              <ContactForm colors={colors} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
