'use client';

import { useState } from 'react';
import {
  Layout,
  Smartphone,
  ShieldCheck,
  CalendarRange,
  Users2,
  ClipboardList,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Check,
  Star,
  Calendar,
  MessageSquare,
  FileText,
  DollarSign,
  Shield,
  Plus,
  Minus,
} from 'lucide-react';
import { colors } from '@/lib/seo';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { WindowsBadge, MacBadge } from '@/components/DesktopBadges';

const stats = [
  { value: '180+', label: 'Clinics on MolarPlus' },
  { value: '35,000+', label: 'Patients managed' },
  { value: '82+', label: 'Cities served' },
];

const trustedClinics = [
  { name: 'Clove Dental', domain: 'clovedental.in' },
  { name: 'Apollo Dental', domain: 'apollodental.in' },
  { name: 'Sabka Dentist', domain: 'sabkadentist.com' },
  { name: 'FMS Dental', domain: 'fmsdental.com' },
  { name: 'Partha Dental', domain: 'parthadental.com' },
  { name: 'MyDentist', domain: 'mydentist.in' },
  { name: 'Clinikk', domain: 'clinikk.com' },
  { name: 'Dentzz Dental', domain: 'dentzz.com' },
  { name: 'Pearl Dental', domain: 'pearldentalclinic.in' },
  { name: 'Axiss Dental', domain: 'axissdental.com' },
];

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    clinic: 'Sharma Dental Care',
    location: 'New Delhi',
    rating: 5,
    text: 'MolarPlus has completely changed how I run my clinic. Earlier I was managing everything on paper and WhatsApp, now appointments, records, and billing are all in one place. My staff loves it too.',
  },
  {
    name: 'Dr. Rajesh Patel',
    clinic: 'Patel Smiles Clinic',
    location: 'Ahmedabad',
    rating: 5,
    text: 'The automated appointment reminders alone cut our no-shows by more than half. I used to have 4–5 empty slots every week. Now patients actually show up because MolarPlus sends them timely reminders.',
  },
  {
    name: 'Dr. Anita Menon',
    clinic: 'Menon Dental Studio',
    location: 'Bangalore',
    rating: 5,
    text: "I can pull up any patient's full history in seconds, treatment notes, X-rays, payment history, everything. This kind of organised record-keeping used to take us hours. The mobile app works beautifully too.",
  },
  {
    name: 'Dr. Suresh Nair',
    clinic: 'Nair Dental Hub',
    location: 'Chennai',
    rating: 5,
    text: 'We switched from another dental software and the difference is night and day. The analytics show me exactly which days are busiest and which treatments bring the most revenue. Very helpful for planning growth.',
  },
];

const faqs = [
  {
    q: 'Is MolarPlus free to use?',
    a: 'Yes. MolarPlus has a free plan for single-chair clinics with up to 2 staff members. You get full access to core clinic features including appointments, patient records, and mobile apps. No cost, forever.',
  },
  {
    q: 'Does MolarPlus work on mobile phones?',
    a: 'Yes. MolarPlus has native apps on both iOS and Android. You can manage your entire clinic from your smartphone: appointments, patients, records, anywhere, anytime.',
  },
  {
    q: 'How secure is my patient data?',
    a: 'Patient data security is our highest priority. MolarPlus uses encrypted data storage, role-based access control, and HIPAA-compliant infrastructure. Your patient records are never shared and are backed up automatically.',
  },
  {
    q: 'Can I switch from my current software to MolarPlus?',
    a: 'Yes. We provide free data migration assistance for all new clinics. Our onboarding team will help you move your existing patient records to MolarPlus, so you can be up and running within 24 hours.',
  },
  {
    q: 'How many staff members can I add?',
    a: 'The free plan supports up to 2 staff members. The Pro plan supports more staff with full role-based access control. Enterprise plans support unlimited staff across large or multi-chair clinics.',
  },
  {
    q: 'What is the difference between Pro and Enterprise plans?',
    a: 'Pro (₹1,299/month in India, $20/month internationally) adds admin controls, staff attendance, WhatsApp and email notifications, and clinic finance reports. Enterprise adds offline support and assisted on-site installation. Ideal for larger clinics.',
  },
];

const floatingCards = [
  { icon: Calendar, label: 'Appointments', sub: 'Smart scheduling', pos: 'top-[6%] left-[2%]' },
  { icon: MessageSquare, label: 'WhatsApp', sub: 'Patient reminders', pos: 'top-[6%] right-[2%]' },
  { icon: Shield, label: 'Encrypted', sub: 'HIPAA-grade security', pos: 'top-[44%] -left-[3%]' },
  { icon: BarChart3, label: 'Analytics', sub: 'Real-time insights', pos: 'top-[44%] -right-[3%]' },
  { icon: FileText, label: 'Records', sub: 'Digital charting', pos: 'bottom-[6%] left-[2%]' },
  { icon: DollarSign, label: 'Billing', sub: 'Streamlined payments', pos: 'bottom-[6%] right-[2%]' },
];

const platformPillars = [
  {
    Icon: Layout,
    title: 'Web dashboard',
    desc: 'Full-featured desktop interface for comprehensive clinic management.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile apps',
    desc: 'Native apps for iOS and Android, manage your clinic from anywhere.',
  },
  {
    Icon: ShieldCheck,
    title: 'Secure sync',
    desc: 'Real-time synchronisation across devices with encrypted backup.',
  },
];

const features = [
  {
    Icon: CalendarRange,
    title: 'Appointment scheduling',
    desc: 'Smart booking with automated reminders and calendar integration.',
  },
  {
    Icon: Users2,
    title: 'Patient management',
    desc: 'Complete records with treatment history, documents, and imaging.',
  },
  {
    Icon: ShieldCheck,
    title: 'Secure records',
    desc: 'HIPAA-compliant data storage with end-to-end encryption.',
  },
  {
    Icon: BarChart3,
    title: 'Clinic analytics',
    desc: 'Real-time insights into clinic performance and revenue.',
  },
  {
    Icon: ClipboardList,
    title: 'Staff & workflow',
    desc: 'Team management with role-based access and task tracking.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile access',
    desc: 'Full-featured native apps on both iOS and Android.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Sign up free',
    desc: 'Create your clinic account in minutes. No credit card required. Free plan available forever.',
  },
  {
    step: '02',
    title: 'Set up your clinic',
    desc: 'Add your staff, configure appointment slots, and import your existing patient list, our team helps every step of the way.',
  },
  {
    step: '03',
    title: 'Start managing',
    desc: 'Book appointments, manage patient records, send reminders, and view analytics. All from one dashboard.',
  },
];

const pricingPlans = [
  {
    name: 'Free',
    price: '₹0',
    period: 'forever',
    desc: '1 chair, up to 2 staff. Full access to core clinic features.',
    cta: 'Get started free',
    href: 'https://app.molarplus.com/signup',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹1,299',
    period: '/month',
    desc: 'Admin controls, WhatsApp reminders, billing & analytics. $20/month outside India.',
    cta: 'Start Pro trial',
    href: 'https://app.molarplus.com/signup',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Offline support, assisted installation, unlimited staff and scale.',
    cta: 'Contact sales',
    href: '/contact',
    highlight: false,
  },
];

const demoPoints = [
  'Live walkthrough of all features',
  'Personalised setup for your clinic size',
  'Free onboarding and data migration',
  'Get started the same day',
];

const mobileBenefits = [
  'Book and manage appointments on the go',
  'Access complete patient histories anytime',
  'Send WhatsApp & SMS reminders instantly',
  'View clinic analytics from anywhere',
];

export default function HomeClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white" />
        <div
          className="absolute inset-x-0 top-0 h-[700px] opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #2a276e 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2a276e]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-700">
                  Dental practice management
                </span>
              </div>

              <h1 className="mt-8 text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#1a1c4b] tracking-tight leading-[1.05]">
                Practice management,{' '}
                <span style={{ color: colors.primary }}>built for modern dental clinics</span>.
              </h1>

              <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
                Appointments, patient records, billing, and clinic operations, together in one
                serious platform. Spend less time on administration, more time with your patients.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://app.molarplus.com/signup"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#2a276e]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: colors.primary }}
                >
                  Get started free
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-gray-900 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  Book a demo
                </a>
              </div>

              <div className="mt-10 space-y-5">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
                    Mobile
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.molarplus.app&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 inline-flex items-center"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Get MolarPlus on Google Play"
                        className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/app/molarplus/id6765472713"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 inline-flex items-center"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                        alt="Download MolarPlus on App Store"
                        className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
                    Desktop
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <WindowsBadge comingSoon={false} href="https://pub-376f22e59eee415286747973b95ba075.r2.dev/MolarPlus-windows.msi" />
                    <MacBadge comingSoon={false} href="https://pub-376f22e59eee415286747973b95ba075.r2.dev/MolarPlus-mac.dmg" />
                  </div>
                </div>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                Trusted by 180+ clinics across 82 cities. Available on iOS, Android, Windows, and Mac.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -inset-12 bg-gradient-to-br from-blue-100/40 to-transparent rounded-full blur-3xl" />
              <img
                src="/new_hero_iamge.png"
                alt="MolarPlus dental clinic management platform"
                className="relative z-10 w-full h-auto drop-shadow-[0_30px_40px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted by (logo bar) ── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[13px] font-semibold text-gray-500 tracking-wide mb-10">
            Trusted by leading dental clinics
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-7 items-center justify-items-center">
            {trustedClinics.map((clinic) => (
              <div
                key={clinic.name}
                className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${clinic.domain}&sz=64`}
                  alt={`${clinic.name} logo`}
                  className="w-6 h-6 flex-shrink-0"
                  loading="lazy"
                />
                <span className="text-[15px] font-semibold text-gray-600 whitespace-nowrap">
                  {clinic.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-10 lg:p-12">
                <div className="text-5xl md:text-6xl font-extrabold text-[#1a1c4b] tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-semibold text-gray-500 uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Getting started
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Up and running in 24 hours.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              No technical expertise required. Free onboarding from our team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map(({ step, title, desc }) => (
              <div
                key={step}
                className="p-8 lg:p-10 rounded-2xl bg-white border border-gray-200"
              >
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

          <div className="mt-12">
            <a
              href="https://app.molarplus.com/signup"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: colors.primary }}
            >
              Start free, no credit card required
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Platform Pillars ── */}
      <section className="py-28 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                The platform
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                Built for every device. Synced everywhere.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                MolarPlus works seamlessly across web, iOS, and Android, with encrypted real-time
                sync, so you never lose a record or miss an appointment.
              </p>
            </div>

            <div className="grid gap-6">
              {platformPillars.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-6 p-8 rounded-2xl bg-white border border-gray-200"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.primary}0d` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1c4b]">{title}</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Core features
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Everything a clinic needs. Nothing it doesn't.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Purpose-built for dental practices. Designed for how clinics actually run.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#2a276e]/30 hover:shadow-lg hover:shadow-[#2a276e]/5 transition-all"
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

          <div className="mt-12">
            <Link
              href="/clinic/features"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: colors.primary }}
            >
              See all features
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mobile App ── */}
      <section className="py-28 bg-slate-50/60 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Every device
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                Your clinic, anywhere.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                The full MolarPlus experience on iOS, Android, Windows, and Mac. Manage appointments,
                patient records, billing, and operations from any device, phone, tablet, or desktop.
              </p>

              <ul className="mt-8 space-y-4">
                {mobileBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-1 flex-shrink-0"
                      style={{ color: colors.primary }}
                    />
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                    Mobile
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.molarplus.app&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      className="h-12 inline-flex items-center transition-opacity hover:opacity-90"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                        alt="Download MolarPlus on App Store"
                        className="h-12 w-auto"
                      />
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                    Desktop
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <WindowsBadge comingSoon={false} href="https://pub-376f22e59eee415286747973b95ba075.r2.dev/MolarPlus-windows.msi" />
                    <MacBadge comingSoon={false} href="https://pub-376f22e59eee415286747973b95ba075.r2.dev/MolarPlus-mac.dmg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center min-h-[500px]">
              {floatingCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className={`hidden md:flex absolute items-center gap-3 bg-white rounded-xl shadow-sm border border-gray-200 px-3.5 py-2.5 z-20 ${card.pos}`}
                  >
                    <div
                      className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${colors.primary}0d` }}
                    >
                      <Icon className="w-3.5 h-3.5" style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#1a1c4b] leading-tight">
                        {card.label}
                      </div>
                      <div className="text-[10px] text-gray-500 leading-tight mt-0.5">
                        {card.sub}
                      </div>
                    </div>
                  </div>
                );
              })}

              <img
                src="/mobileScreens/two_screen_mobile_nobg.png"
                alt="MolarPlus mobile app, dental clinic management on iOS and Android"
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Customer stories
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Trusted by dentists across India.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="p-8 lg:p-10 rounded-2xl bg-white border border-gray-200 flex flex-col"
              >
                <div className="flex gap-0.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[17px] text-gray-700 leading-relaxed flex-1">"{t.text}"</p>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="font-bold text-[#1a1c4b]">{t.name}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {t.clinic} <span className="text-gray-300 mx-1">·</span> {t.location}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Teaser ── */}
      <section className="py-28 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
              Simple, transparent pricing.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Start free. Upgrade when you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? 'bg-[#1a1548] text-white border-2 border-[#2a276e]'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute top-6 right-6 inline-flex items-center px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                    Most popular
                  </span>
                )}
                <div
                  className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${
                    plan.highlight ? 'text-blue-300/80' : 'text-gray-500'
                  }`}
                >
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className={`text-5xl font-extrabold tracking-tight ${
                      plan.highlight ? 'text-white' : 'text-[#1a1c4b]'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm font-medium ${
                        plan.highlight ? 'text-blue-200/70' : 'text-gray-400'
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm leading-relaxed mb-10 flex-1 ${
                    plan.highlight ? 'text-blue-100/80' : 'text-gray-600'
                  }`}
                >
                  {plan.desc}
                </p>
                <a
                  href={plan.href}
                  className={`inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.highlight
                      ? 'bg-white text-[#1a1548] hover:bg-gray-50'
                      : 'bg-[#2a276e] text-white hover:opacity-90'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12">
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
                Can't find what you're looking for?{' '}
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
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-6 text-left group"
                    >
                      <span className="text-lg font-semibold text-[#1a1c4b] group-hover:text-[#2a276e] transition-colors pr-6">
                        {faq.q}
                      </span>
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#2a276e]/40 transition-colors"
                      >
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

      {/* ── Contact / Book a Demo ── */}
      <section id="contact" className="py-28 bg-slate-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Book a demo
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.1]">
                See MolarPlus in action.
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Our team will walk you through the platform and answer all your questions, no
                commitment, no sales pressure.
              </p>

              <ul className="mt-10 space-y-4">
                {demoPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 mt-1 flex-shrink-0"
                      style={{ color: colors.primary }}
                    />
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-gray-200">
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

      {/* ── Why Choose (SEO) ── */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
            Why MolarPlus
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.15]">
            The best dental clinic management software for modern practices.
          </h2>

          <div className="mt-10 space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Finding the right{' '}
              <strong className="text-[#1a1c4b]">dental clinic management software</strong> can
              transform how your practice runs. MolarPlus gives dentists and clinic staff one
              unified platform for scheduling, patient management, billing, and analytics, so you
              spend less time on admin and more time with patients.
            </p>
            <p>
              Built specifically for the way dental practices work in India and around the world,
              MolarPlus combines reliability, ease of use, and serious clinical capability. Explore
              our{' '}
              <Link
                href="/clinic/features"
                className="font-semibold underline decoration-gray-300 hover:decoration-[#2a276e]"
                style={{ color: colors.primary }}
              >
                features
              </Link>{' '}
              and{' '}
              <Link
                href="/clinic/pricing"
                className="font-semibold underline decoration-gray-300 hover:decoration-[#2a276e]"
                style={{ color: colors.primary }}
              >
                pricing
              </Link>
              , or{' '}
              <Link
                href="/contact"
                className="font-semibold underline decoration-gray-300 hover:decoration-[#2a276e]"
                style={{ color: colors.primary }}
              >
                contact us
              </Link>{' '}
              for a demo.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: colors.primary }}
            >
              Read more on the MolarPlus blog
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
