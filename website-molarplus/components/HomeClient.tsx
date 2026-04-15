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
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Star,
  Building2,
  Users,
  MapPin,
  Calendar,
  MessageSquare,
  FileText,
  DollarSign,
  Shield,
} from 'lucide-react';
import { colors } from '@/lib/seo';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const stats = [
  { value: '180+', label: 'Dental Clinics', icon: Building2 },
  { value: '35,000+', label: 'Patients Managed', icon: Users },
  { value: '82+', label: 'Cities Across India', icon: MapPin },
];

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    clinic: 'Sharma Dental Care, New Delhi',
    rating: 5,
    text: 'MolarPlus has completely changed how I run my clinic. Earlier I was managing everything on paper and WhatsApp — now appointments, records, and billing are all in one place. My staff loves it too.',
  },
  {
    name: 'Dr. Rajesh Patel',
    clinic: 'Patel Smiles Clinic, Ahmedabad',
    rating: 5,
    text: 'The automated appointment reminders alone cut our no-shows by more than half. I used to have 4–5 empty slots every week. Now patients actually show up because MolarPlus sends them timely reminders.',
  },
  {
    name: 'Dr. Anita Menon',
    clinic: 'Menon Dental Studio, Bangalore',
    rating: 5,
    text: "I can pull up any patient's full history in seconds — treatment notes, X-rays, payment history, everything. This kind of organised record-keeping used to take us hours. The mobile app works beautifully too.",
  },
  {
    name: 'Dr. Suresh Nair',
    clinic: 'Nair Dental Hub, Chennai',
    rating: 5,
    text: 'We switched from another dental software and the difference is night and day. The analytics show me exactly which days are busiest and which treatments bring the most revenue. Very helpful for planning growth.',
  },
];

const faqs = [
  {
    q: 'Is MolarPlus free to use?',
    a: 'Yes! MolarPlus has a free plan for single-chair clinics with up to 2 staff members. You get full access to core clinic features including appointments, patient records, and mobile apps — at no cost, forever.',
  },
  {
    q: 'Does MolarPlus work on mobile phones?',
    a: 'Absolutely. MolarPlus has a native Android app and an iOS app launching soon. You can manage your entire clinic — appointments, patients, and records — from your smartphone, anywhere, anytime.',
  },
  {
    q: 'How secure is my patient data?',
    a: 'Patient data security is our top priority. MolarPlus uses encrypted data storage, role-based access control, and HIPAA-compliant infrastructure. Your patient records are never shared and are backed up automatically.',
  },
  {
    q: 'Can I switch from my current software to MolarPlus?',
    a: 'Yes. We provide free data migration assistance for all new clinics. Our onboarding team will help you move your existing patient records to MolarPlus so you can be up and running within 24 hours.',
  },
  {
    q: 'How many staff members can I add?',
    a: 'The free plan supports up to 2 staff members. The Pro plan supports more staff with full role-based access control. Enterprise plans support unlimited staff across large or multi-chair clinics.',
  },
  {
    q: 'What is the difference between Pro and Enterprise plans?',
    a: 'Pro (₹1,299/month in India, $20/month internationally) adds admin controls, staff attendance, WhatsApp and email notifications, and clinic finance reports. Enterprise adds offline support and assisted on-site installation — ideal for larger clinics.',
  },
];

const floatingCards = [
  { icon: Calendar,     label: 'Appointments',    sub: 'Smart Scheduling',   pos: 'top-[8%] left-[2%]' },
  { icon: MessageSquare,label: 'WhatsApp',         sub: 'Patient Reminders',  pos: 'top-[8%] right-[2%]' },
  { icon: Shield,       label: 'HIPAA Secure',     sub: 'Encrypted Data',     pos: 'top-[42%] -left-[2%]' },
  { icon: BarChart3,    label: 'Analytics',        sub: 'Real-time Reports',  pos: 'top-[42%] -right-[2%]' },
  { icon: FileText,     label: 'Patient Records',  sub: 'Digital Charts',     pos: 'bottom-[8%] left-[2%]' },
  { icon: DollarSign,   label: 'Billing',          sub: 'Easy Payments',      pos: 'bottom-[8%] right-[2%]' },
];

export default function HomeClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showIosBanner, setShowIosBanner] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-50/80 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                <span className="text-xl">🦷</span>
                <span className="text-sm font-bold text-blue-900 uppercase tracking-wider">#1 dental platform for dentists</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] leading-[1.1]">
                  You take care of smiles.<br />
                  <span className="text-[#3b448f]">We take care of you ❤️</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                  MolarPlus brings appointments, patient records, and daily clinic operations together in one simple platform — helping dentists spend less time on administration and more time doing what they do best: caring for patients.
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <a
                  href="https://app.molarplus.com/signup"
                  className="group px-10 py-5 bg-[#2a276e] text-white rounded-2xl font-bold text-lg hover:bg-[#1a184e] transition-all shadow-xl hover:shadow-2xl flex items-center"
                >
                  Get Started
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm"
                >
                  Book a Demo
                </a>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.molarplus.app&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get MolarPlus on Google Play"
                      className="h-12 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                    />
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowIosBanner(!showIosBanner)}
                    className="focus:outline-none"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="Download MolarPlus on App Store — Coming Soon"
                      className="h-12 w-auto grayscale opacity-50 hover:opacity-70 transition-all"
                    />
                  </button>
                </div>
                {showIosBanner && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-xl text-sm font-semibold text-blue-800">
                    <span>🚀</span> iOS app launching soon! Stay tuned.
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-blue-400/10 rounded-full blur-3xl" />
              <img
                src="/new_hero_iamge.png"
                alt="MolarPlus Dental Clinic Management Platform"
                className="relative z-10 w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-2">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-4xl font-extrabold text-[#1a1c4b]">{stat.value}</div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b]">Get Started in 3 Simple Steps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be up and running in under 24 hours. No technical knowledge required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sign Up Free',
                desc: 'Create your clinic account in minutes. No credit card required. Free plan available forever.',
              },
              {
                step: '02',
                title: 'Set Up Your Clinic',
                desc: 'Add your staff, configure appointment slots, and import your existing patient list — our team helps you every step of the way.',
              },
              {
                step: '03',
                title: 'Start Managing',
                desc: 'Book appointments, manage patient records, send reminders, and view analytics — all from one dashboard.',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-all">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white font-extrabold text-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1a1c4b] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://app.molarplus.com/signup"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: colors.primary }}
            >
              Start Free — No Credit Card Needed <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Complete Platform Solution ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b]">Complete Platform Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MolarPlus works seamlessly across all your devices. Manage your clinic from anywhere, anytime.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Layout,     title: 'Web Dashboard', desc: 'Full-featured desktop interface for comprehensive clinic management.' },
              { Icon: Smartphone, title: 'Mobile Apps',   desc: 'Native Android app available now. iOS coming soon.' },
              { Icon: ShieldCheck,title: 'Secure Sync',   desc: 'Real-time synchronisation across all your devices with encrypted backup.' },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="p-10 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a1c4b] mb-4">{title}</h3>
                <p className="text-gray-600 text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Powerful Features ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b]">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to run your dental practice efficiently</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { Icon: CalendarRange, title: 'Appointment Scheduling', desc: 'Smart booking system with automated reminders and calendar integration.' },
              { Icon: Users2,        title: 'Patient Management',      desc: 'Complete patient records with treatment history and documents.' },
              { Icon: ShieldCheck,   title: 'Secure Records',          desc: 'HIPAA-compliant data storage with end-to-end encryption.' },
              { Icon: BarChart3,     title: 'Clinic Analytics',         desc: 'Real-time insights into clinic performance and revenue.' },
              { Icon: ClipboardList, title: 'Staff & Workflow',         desc: 'Team management with role-based access and task tracking.' },
              { Icon: Smartphone,    title: 'Mobile Access',            desc: 'Full-featured mobile app for Android, with iOS coming soon.' },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="p-10 rounded-3xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1c4b] mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold border-2 text-[#2a276e] border-[#2a276e] hover:bg-[#2a276e] hover:text-white transition-all"
            >
              See All Features <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Your Clinic In Your Pocket (App Download) ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[2fr_2.3fr] gap-12 items-center">

            {/* Left: Text + CTAs */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-900 uppercase tracking-wider">Mobile App</span>
              </div>

              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] leading-[1.1]">
                  Your Dental Clinic,<br />
                  <span style={{ color: colors.primary }}>In Your Pocket.</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Manage appointments, patient records, billing, and your entire clinic operations — all from your smartphone. MolarPlus puts the power of a full clinic management system in the palm of your hand.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  'Book and manage appointments on the go',
                  'Access complete patient histories anytime',
                  'Send WhatsApp & SMS reminders instantly',
                  'View clinic analytics from anywhere',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary }} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Download Now</p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.molarplus.app&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105 active:scale-95"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get MolarPlus on Google Play"
                      className="h-14 w-auto"
                    />
                  </a>
                  <div className="flex flex-col">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="App Store — Coming Soon"
                      className="h-14 w-auto grayscale opacity-50"
                    />
                    <span className="text-xs font-semibold text-blue-600 mt-1 ml-1">🚀 iOS Launching Soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image with floating cards */}
            <div className="relative flex items-center justify-center min-h-[500px]">


              {/* Floating cards — hidden on mobile, shown md+ */}
              {floatingCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className={`hidden md:flex absolute items-center gap-2.5 bg-white rounded-2xl shadow-lg px-3.5 py-2.5 z-20 ${card.pos}`}
                    style={{ border: '1px solid rgba(99,102,241,0.12)' }}
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 leading-tight">{card.label}</div>
                      <div className="text-[10px] text-gray-400 leading-tight">{card.sub}</div>
                    </div>
                  </div>
                );
              })}

              {/* Central image */}
              <img
                src="/mobileScreens/two_screen_mobile_nobg.png"
                alt="MolarPlus Mobile App — Dental Clinic Management on Android"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b]">Trusted by Dentists Across India</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Here's what dental clinic owners say about MolarPlus</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all flex flex-col">
                <div className="flex mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-1">"{t.text}"</p>
                <div>
                  <div className="font-bold text-[#1a1c4b]">{t.name}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{t.clinic}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Teaser ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b]">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start free. Upgrade when you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {[
              {
                name: 'Free',
                price: '₹0',
                period: ' forever',
                desc: '1 chair, up to 2 staff. Full access to core clinic features.',
                cta: 'Get Started Free',
                href: 'https://app.molarplus.com/signup',
                highlight: false,
              },
              {
                name: 'Pro',
                price: '₹1,299',
                period: '/month',
                desc: 'Admin controls, WhatsApp reminders, billing & analytics. Also $20/month outside India.',
                cta: 'Start Pro Trial',
                href: 'https://app.molarplus.com/signup',
                highlight: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                desc: 'Offline support, assisted installation, unlimited staff and scale.',
                cta: 'Contact Sales',
                href: '/contact',
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 border-2 flex flex-col ${
                  plan.highlight
                    ? 'border-[#2a276e] bg-[#2a276e] text-white shadow-2xl md:scale-105'
                    : 'border-gray-100 bg-white'
                }`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                  {plan.name}
                </div>
                <div className={`text-4xl font-extrabold mb-1 ${plan.highlight ? 'text-white' : 'text-[#1a1c4b]'}`}>
                  {plan.price}
                  <span className={`text-base font-medium ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>{plan.period}</span>
                </div>
                <p className={`text-sm mt-3 mb-8 flex-1 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>{plan.desc}</p>
                <a
                  href={plan.href}
                  className={`py-3 rounded-xl font-bold text-sm transition-all text-center ${
                    plan.highlight
                      ? 'bg-white text-[#2a276e] hover:bg-blue-50'
                      : 'border-2 border-[#2a276e] text-[#2a276e] hover:bg-[#2a276e] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/pricing" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
              See full pricing & feature comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b]">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about MolarPlus</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-[#1a1c4b] hover:text-[#2a276e] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Book a Demo ── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b] mb-4">Book a Free Demo</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  See MolarPlus in action. Our team will walk you through the platform and answer all your questions — no commitment required.
                </p>
              </div>
              <ul className="space-y-5">
                {[
                  'Live walkthrough of all features',
                  'Personalised setup for your clinic size',
                  'Free onboarding and data migration',
                  'Get started the same day',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.primary }} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-sm text-gray-500">
                Prefer email?{' '}
                <a href="mailto:support@molarplus.com" className="text-blue-600 font-semibold hover:underline">
                  support@molarplus.com
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <ContactForm colors={colors} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose (SEO) ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1c4b]">
              Why Choose the Best Dental Software and Dental Clinic Management Software?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Finding the <strong className="text-[#1a1c4b]">best dental software</strong> for your practice can transform how you manage appointments, patient records, and daily operations. <strong className="text-[#1a1c4b]">Dental clinic management software</strong> like MolarPlus gives dentists and clinic staff one unified platform for scheduling, patient management, billing, and analytics — so you spend less time on admin and more time with patients.
              </p>
              <p>
                MolarPlus is built to be the <strong className="text-[#1a1c4b]">best dental software</strong> choice for clinics that want reliability, ease of use, and strong support. Our <strong className="text-[#1a1c4b]">dental clinic management software</strong> covers appointments, patient files, payments, and analytics in a single platform. Explore our{' '}
                <Link href="/features" className="text-blue-600 hover:underline">features</Link> and{' '}
                <Link href="/pricing" className="text-blue-600 hover:underline">pricing</Link>, or{' '}
                <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> for a demo.
              </p>
              <Link href="/blog" className="inline-flex items-center text-blue-600 font-bold hover:underline">
                Read more blog posts on dental software and clinic management
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
