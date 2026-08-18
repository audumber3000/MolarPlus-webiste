import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, MessageSquare, Wrench, Users } from 'lucide-react';
import { SITE_URL, colors } from '@/lib/seo';
import { APP_URL } from '@/lib/constants';
import { SignupLink } from '@/components/TrackedCTA';
import WhatsAppCta from '@/components/WhatsAppCta';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact MolarPlus: Talk to the Team Behind the Software',
  description:
    'Reach MolarPlus on WhatsApp, phone or email. A small team in Pune that builds the product and answers you directly, with free migration and setup help for new clinics.',
  keywords:
    'contact MolarPlus, dental software support, dental software demo, practice management help, dental software sales',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Contact MolarPlus: Talk to the Team Behind the Software',
    description: 'WhatsApp, phone or email. You reach the team that builds MolarPlus, not a call centre.',
    url: `${SITE_URL}/contact`,
  },
};

const PHONE_DISPLAY = '+91 9594078777';
const PHONE_TEL = 'tel:+919594078777';

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact MolarPlus',
  description: 'Get in touch with MolarPlus for dental clinic management software demos, support, and inquiries.',
  url: `${SITE_URL}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: 'MolarPlus',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sky Loft, opposite Golf Course, Shastrinagar',
      addressLocality: 'Yerawada, Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411006',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9594078777',
      contactType: 'Customer Service',
      email: 'support@molarplus.com',
      availableLanguage: ['English', 'Hindi'],
    },
  },
};

/*
 * Ordered by how fast a clinic actually gets an answer, not by convention.
 * WhatsApp comes first because it is the channel this market already lives in
 * and the one most people will pick; putting the form first would be arranging
 * the page around our convenience rather than theirs.
 */
const channels = [
  {
    Icon: MessageSquare,
    title: 'WhatsApp',
    detail: 'Usually the fastest way to reach us',
    value: PHONE_DISPLAY,
    href: '/chat',
  },
  {
    Icon: Phone,
    title: 'Phone',
    detail: 'Mon–Fri, 9am–6pm IST',
    value: PHONE_DISPLAY,
    href: PHONE_TEL,
  },
  {
    Icon: Mail,
    title: 'Email',
    detail: 'Support and sales',
    value: 'support@molarplus.com',
    href: 'mailto:support@molarplus.com',
  },
];

/*
 * The team section says what is true without naming anyone yet. It exists
 * because "who am I actually dealing with?" is the question a dentist asks
 * before handing over patient records, and an anonymous vendor is a real
 * objection in healthcare software. Adding names and faces here later is the
 * single biggest upgrade this page can get.
 */
const teamFacts = [
  {
    Icon: Users,
    title: 'A small team in Pune',
    desc: 'MolarPlus is built by Clino Health, working out of Yerawada. Small enough that the person replying knows the product, rather than reading from a script.',
  },
  {
    Icon: Wrench,
    title: 'The people who build it answer it',
    desc: 'Support is not outsourced to a call centre. Messages reach the team that writes the software, which is why a fix can ship in weeks rather than disappearing into a roadmap.',
  },
  {
    Icon: Clock,
    title: 'Setup is done with you, not sent to you',
    desc: 'New clinics get their existing records migrated and their staff trained by the same team, free. Most practices are running within 24 hours.',
  },
];

const faqs = [
  {
    q: 'How quickly can I get started with MolarPlus?',
    a: 'Immediately. You can create an account and start the 7-day free trial today, with no card required. Full setup, including moving your existing records and training your staff, typically takes 24–48 hours.',
  },
  {
    q: 'How is my patient data protected?',
    a: 'Patient records are encrypted in transit and at rest, access is controlled by role so staff only see what their job needs, and backups run automatically. MolarPlus is built in line with India’s DPDP Act 2023 and ABDM health-data standards, and with HIPAA and GDPR for clinics outside India. Your data is always yours to export.',
  },
  {
    q: 'Can I import my existing patient data?',
    a: 'Yes, and we do it for you at no cost. We migrate patient records, appointments and pending balances from paper, spreadsheets or other dental software, including Practo Ray.',
  },
  {
    q: 'What kind of support is included?',
    a: 'Every plan gets the same channels at no extra cost: WhatsApp, phone and email. Pro adds priority support with faster response times, plus hands-on help migrating your existing records.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-16" style={{ backgroundColor: '#f2f5fc' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #2a276e 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: colors.primary }}
            >
              Talk to us
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#1a1c4b] sm:text-5xl lg:text-6xl">
              Ask us anything before you switch
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Whether it is a question about moving your records, a feature you need, or you just want
              to see it working before committing, message us. You will reach the team that builds
              MolarPlus.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <WhatsAppCta location="contact" />
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 bg-white px-6 py-[13px] font-semibold text-gray-800 transition-all hover:-translate-y-0.5 hover:border-gray-400"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Channels ── */}
      <section className="border-b border-gray-100 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {channels.map(({ Icon, title, detail, value, href }) => (
              <a
                key={title}
                href={href}
                className="group rounded-2xl border border-gray-200 p-7 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm"
              >
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Icon className="h-5 w-5" style={{ color: colors.primary }} />
                </div>
                <h2 className="text-lg font-bold text-[#1a1c4b]">{title}</h2>
                <p className="mt-1 text-sm text-gray-500">{detail}</p>
                <p className="mt-3 font-semibold" style={{ color: colors.primary }}>
                  {value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who you are talking to ── */}
      <section className="border-b border-gray-100 bg-slate-50/60 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Who you are talking to
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1a1c4b] md:text-5xl">
              A small team, not a support queue.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              You are trusting us with your patients’ records. It is fair to want to know who is on the
              other end.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamFacts.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-8">
                <div
                  className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Icon className="h-5 w-5" style={{ color: colors.primary }} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#1a1c4b]">{title}</h3>
                <p className="leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + office ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h2 className="mb-2 text-2xl font-bold text-[#1a1c4b]">Send us a message</h2>
              <p className="mb-6 text-gray-600">
                Prefer writing it out? Tell us about your practice and we will come back to you.
              </p>
              <ContactForm colors={colors} />
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h2 className="mb-5 text-lg font-bold text-[#1a1c4b]">Our office</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    <span className="text-gray-600">
                      Sky Loft, opposite Golf Course, Shastrinagar,
                      <br />
                      Yerawada, Pune, Maharashtra 411006
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    <a href={PHONE_TEL} className="text-gray-600 hover:text-[#2a276e]">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    <a href="mailto:support@molarplus.com" className="text-gray-600 hover:text-[#2a276e]">
                      support@molarplus.com
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl border p-8"
                style={{ borderColor: `${colors.primary}25`, backgroundColor: `${colors.primary}08` }}
              >
                <h2 className="mb-5 text-lg font-bold text-[#1a1c4b]">When we are around</h2>
                <ul className="space-y-2.5 text-gray-700">
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 flex-shrink-0" style={{ color: colors.primary }} />
                    Monday to Friday, 9:00am – 6:00pm IST
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 flex-shrink-0" style={{ color: colors.primary }} />
                    Saturday, 10:00am – 2:00pm IST
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 flex-shrink-0 text-gray-400" />
                    <span className="text-gray-500">Sunday, closed</span>
                  </li>
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-gray-600">
                  Messages sent outside these hours are answered the next working morning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-y border-gray-100 bg-slate-50/60 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-[#1a1c4b] md:text-4xl">
            Common questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-gray-200 bg-white p-7">
                <h3 className="mb-3 text-lg font-bold text-[#1a1c4b]">{faq.q}</h3>
                <p className="leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24" style={{ backgroundColor: colors.dark }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Or just start using it.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-blue-100/80">
            Seven days of Pro, free, with no card to start. Then ₹399 + GST a month for a single clinic.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <SignupLink
              href={`${APP_URL}/signup`}
              location="contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 font-semibold text-[#1a1548] transition-colors hover:bg-gray-50"
            >
              Start free trial
            </SignupLink>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
