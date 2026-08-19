'use client';

import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Check,
  Plus,
  Minus,
  Lock,
  KeyRound,
  DatabaseBackup,
  FileCheck2,
  Globe2,
} from 'lucide-react';
import { colors } from '@/lib/seo';
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
import { APP_URL } from '@/lib/constants';
import HeroMedia from '@/components/hero/HeroMedia';
import WhatsAppCta from '@/components/WhatsAppCta';
import DoctorReviews from '@/components/DoctorReviews';
import TrustBar from '@/components/TrustBar';
import FeaturedOn from '@/components/FeaturedOn';

// Derived from APP_URL, never hardcoded — a hardcoded production URL would keep
// pointing at prod when NEXT_PUBLIC_APP_URL is aimed at staging, silently
// splitting the funnel across two environments.
const SIGNUP_URL = `${APP_URL}/signup`;

/** Hero background. The photo's fade must use this exact value — see the hero. */
const HERO_TINT = '#f2f5fc';

const mobileBenefits = [
  'Check tomorrow’s schedule from your phone',
  'Pull up a patient’s history between chairs',
  'Add a new patient in under a minute',
  'Approve and send WhatsApp reminders on the go',
];

/* Compliance & data-security trust wall. */
/*
 * Ordered for the buyer who is actually reading this: an Indian dental practice.
 * DPDP is the law they are accountable under, so it leads; HIPAA and GDPR matter
 * only to international clinics and share the last slot.
 *
 * These are alignment statements about how the product is built, NOT audited
 * certifications. Do not add ISO 27001 or SOC 2 here unless a real audit has
 * been completed — an unaudited claim in healthcare software ends deals at
 * procurement. Same standard lib/social-proof.ts applies to award badges.
 */
const compliance = [
  { Icon: ShieldCheck, name: 'DPDP Act 2023', note: 'Built for India’s Digital Personal Data Protection Act' },
  { Icon: FileCheck2, name: 'ABDM', note: 'Built for India’s Ayushman Bharat Digital Mission' },
  { Icon: KeyRound, name: 'Encryption', note: 'Encrypted in transit and at rest' },
  { Icon: DatabaseBackup, name: 'Daily backups', note: 'Automatic, redundant and recoverable' },
  { Icon: Lock, name: 'Role-based access', note: 'Every action is permission-controlled' },
  { Icon: Globe2, name: 'HIPAA & GDPR', note: 'Aligned with US and EU rules for international clinics' },
];


const faqs = [
  {
    q: 'Is MolarPlus really free?',
    a: 'Every new account gets 7 days of Pro free, with no card to start, so you see the whole product before deciding. After that a single clinic runs on Plus at ₹399 + GST a month, which includes the entire clinical product: charting, treatment plans, prescriptions, appointments, billing, consent forms, staff, inventory and WhatsApp from your own number. Nothing clinical is held back for a higher tier.',
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
    a: 'Patient data is encrypted, access-controlled by role, backed up automatically, and never sold. MolarPlus is built in line with India’s DPDP Act 2023 and ABDM health-data standards, and with HIPAA and GDPR for clinics outside India.',
  },
  {
    q: 'When would I ever need to pay?',
    a: 'Three plans, sized to the practice rather than to how much of the product you get. Plus is ₹399 + GST a month ($5 internationally) and covers one clinic in full, with up to 5 staff logins. Pro is ₹999 + GST ($10) for the same clinic with a bigger team: unlimited staff, per-person permissions, the unified email and WhatsApp inbox and audit logging. Growth is ₹1,500 + GST ($15) for practices at more than one address, adding unlimited branches from one login and cross-branch reporting. Annual billing takes 20% off all three paid plans.',
  },
];

export default function HomeClient({
  /**
   * The MolarPlus Lab hand-off, injected by the page rather than imported here.
   * Keeping it a slot means this client component does not pull the Lab data and
   * showcase into its own bundle, and the page owns where the secondary product
   * sits in the story.
   */
  labSection,
}: {
  labSection?: React.ReactNode;
} = {}) {
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
      {/*
        Full-bleed split hero: copy left, photograph running to the right edge.

        The photo is absolutely positioned rather than sitting in a grid cell so
        it can reach the top, bottom and right edges of the viewport. A gradient
        in the SAME tint as the section background is laid over its left side, so
        the image dissolves into the copy instead of ending on a hard vertical
        seam. That gradient colour must stay identical to HERO_TINT — if the two
        drift apart the seam reappears as a faint stripe.
      */}
      <section className="relative overflow-hidden" style={{ backgroundColor: HERO_TINT }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #2a276e 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Desktop: photograph bleeding off the right edge. */}
        <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <HeroMedia
            src="/hero-clinic.webp"
            alt="A dentist examining a patient in the chair at an Indian dental clinic"
            priority
            objectPosition="70% center"
          />
          <div
            className="absolute inset-y-0 left-0 w-1/2"
            style={{ backgroundImage: `linear-gradient(to right, ${HERO_TINT} 0%, ${HERO_TINT}00 100%)` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-36 pb-20">
          <div className="lg:w-[52%] lg:pr-10">
            <div>
              <div
                className="text-xs font-bold uppercase tracking-[0.2em] mb-5"
                style={{ color: colors.primary }}
              >
                Dental clinic management software
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1c4b] tracking-tight leading-[1.05]">
                The backbone of modern{' '}
                {/* Padded inline background rather than an absolutely
                    positioned bar: box-decoration-break keeps the marker intact
                    if the phrase wraps to its own line on a narrow phone, which
                    a positioned bar cannot survive. */}
                <span
                  className="rounded-[0.15em] px-[0.1em] [-webkit-box-decoration-break:clone] [box-decoration-break:clone]"
                  style={{ backgroundColor: colors.highlight }}
                >
                  dental practices
                </span>
              </h1>

              <p className="mt-7 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                One system carries the whole visit: the appointment, the chart, the X-ray, the
                prescription, the invoice, and the WhatsApp that follows it. Your front desk stops
                keeping a parallel register, and nothing about a patient lives only in somebody&apos;s
                memory.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <a
                  href={SIGNUP_URL}
                  onClick={() => trackSignupStarted('hero', SIGNUP_URL)}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#2a276e]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: colors.primary }}
                >
                  Start free trial
                  <ArrowRight className="w-4 h-4" />
                </a>
                <WhatsAppCta location="hero" />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                7 days free
                <span aria-hidden="true" className="mx-2 text-gray-300">·</span>
                No credit card to start
                <span aria-hidden="true" className="mx-2 text-gray-300">·</span>
                Up and running in 10 minutes
              </p>

              {/* All four platforms, on one baseline. Badge artwork ships at
                  different aspect ratios, so they are pinned to a shared height
                  and wrap two-by-two in the narrower hero column. */}
              <div className="mt-9 border-t border-gray-200/80 pt-6">
                <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Download free, works on every device
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.molarplus.app&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAppStoreClick('google')}
                    className="inline-flex h-10 items-center transition-opacity hover:opacity-90"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get MolarPlus on Google Play"
                      className="h-10 w-auto"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/app/molarplus/id6765472713"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAppStoreClick('apple')}
                    className="inline-flex h-10 items-center transition-opacity hover:opacity-90"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="Download MolarPlus on App Store"
                      className="h-10 w-auto"
                    />
                  </a>
                  <WindowsBadge
                    comingSoon={false}
                    href="https://apps.microsoft.com/detail/9n78rx7phv9k"
                    onClick={() => trackDesktopDownload('windows')}
                    className="!h-10"
                  />
                  <MacBadge
                    comingSoon={false}
                    href="https://pub-376f22e59eee415286747973b95ba075.r2.dev/MolarPlus-mac.dmg"
                    onClick={() => trackDesktopDownload('mac')}
                    className="!h-10"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Below lg the copy needs the full width, so the photograph moves under
            it and bleeds edge to edge there instead. */}
        <div className="relative h-64 w-full sm:h-80 lg:hidden">
          <HeroMedia
            src="/hero-clinic.webp"
            alt="A dentist examining a patient in the chair at an Indian dental clinic"
            priority
          />
        </div>
      </section>


      {/* ── Trusted by leading dental clinics ── */}
      <ClinicLogoMarquee />

      {/* ── Featured on the review platforms buyers check ── */}
      <FeaturedOn />

      {/* ── Reassurance strip ── */}
      <TrustBar />

      {/* ── Product showcase (moved out of the hero) ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
            See it in action
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1c4b] tracking-tight mb-10">
            Your whole clinic, in one place.
          </h2>
          <ProductShowcase />
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

      {/* ── Dentist reviews (shared scrolling wall) ── */}
      <DoctorReviews />

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

      {labSection}

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
                Start your free trial in two minutes, or book a 15-minute demo and we&apos;ll set it up
                around how your clinic actually works, with no commitment and no sales pressure.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={SIGNUP_URL}
                  onClick={() => trackSignupStarted('final_cta', SIGNUP_URL)}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white shadow-lg shadow-[#2a276e]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: colors.primary }}
                >
                  Start free trial
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
