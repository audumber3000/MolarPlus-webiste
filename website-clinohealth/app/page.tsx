import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Building2,
  Database,
  KeyRound,
  Languages,
  ScrollText,
  ShieldCheck,
  WifiOff,
} from 'lucide-react';
import BrandGrid from '@/components/BrandGrid';
import FeaturedOn from '@/components/FeaturedOn';
import { LIVE_BRANDS, UPCOMING_BRANDS } from '@/lib/brands';
import { PROOF, SITE } from '@/lib/site';

/**
 * The hero photograph.
 *
 * To use a different photo, drop the file in /public and change this one
 * constant — the dissolve and the focal points below are independent of
 * which image it is.
 *
 * One caveat if you swap it: the current masks are tuned for a DARK
 * photograph fading into a light page. A bright image will need the
 * horizontal mask's midpoints pulled left, or its pale edge will simply
 * vanish into the background too early.
 */
const HERO_IMAGE = '/herosection-image.jpg';

export default function HomePage() {
  return (
    <>
      {/* ─────────────── Hero ─────────────── */}
      {/*
        The photograph is not a boxed-off illustration sitting beside the
        text — it bleeds off the right edge of the viewport and dissolves
        into the page behind the headline, so there is no seam where one
        stops and the other starts.

        Two masks do that work. A horizontal one lays the page's own
        background over the image's left edge and fades to transparent by
        about three-quarters across, which is what lets the copy sit on
        clean ground while the picture appears to emerge from it. A
        vertical one fades the bottom into white so the hero hands off to
        the section below without a hard line.

        Both masks are painted in the section's own background colour. If
        that colour ever changes, these change with it or the seam comes
        back.
      */}
      <section className="relative overflow-hidden bg-clino-wash">
        {/*
          Photo layer.

          The dissolve is done by masking the IMAGE'S OWN ALPHA, not by
          laying a pale panel over it. That distinction matters here: this
          photograph is dark and the page is light, so a translucent light
          overlay would not read as a fade — it would grey the picture out
          and leave a visible smear where the two met. Masking to
          transparent lets the page background itself show through, so the
          photo genuinely dissolves instead of being painted over.

          Two masks, applied at different levels so they compose without
          needing mask-composite (which Safari has only recently agreed
          with): the wrapper fades the bottom out, the image fades the
          left edge out.
        */}
        <div
          className="absolute inset-y-0 right-0 hidden w-[62%] lg:block"
          aria-hidden="true"
          style={{
            maskImage: 'linear-gradient(to bottom, #000 68%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 68%, transparent 100%)',
          }}
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="62vw"
            /*
              Focal point. The panel is taller than the source is tall, so
              cover crops the sides — and the left half of the panel is
              under the fade. Biasing the window left of centre pushes the
              three faces into the opaque right-hand side; nudge this one
              value if they drift.
            */
            className="object-cover object-[35%_center]"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 26%, rgba(0,0,0,0.85) 46%, #000 62%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.35) 26%, rgba(0,0,0,0.85) 46%, #000 62%)',
            }}
          />
        </div>

        {/* Copy layer */}
        <div className="relative z-10 mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="lg:max-w-[46%]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clino-light">
              Healthcare software · Pune, India
            </p>
            {/* Big-vision line, deliberately at company altitude rather
                than product altitude: this is the umbrella site, and the
                brands below it are what make the claim concrete. */}
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.06] text-ink md:text-5xl lg:text-[3.4rem]">
              Changing the way healthcare{' '}
              {/* Block, not inline: the payoff has to hold its own line at
                  every width, or the emphasis breaks mid-phrase. */}
              <span className="block text-clino-medium">uses technology</span>
            </h1>
            {/* Stays at the headline's altitude. An earlier version counted
                apps per brand here — product spec under a vision line, and
                it front-loaded a number before anyone had asked. The
                portfolio explains itself further down the page. */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
              From a single-chair clinic to a hospital ward, we build the systems Indian
              healthcare runs on — designed for how practices here actually work, not for
              how a foreign product assumes they do.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-clino-medium px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-clino-dark"
              >
                See what we build <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-clino-medium bg-white/70 px-7 py-3.5 text-base font-semibold text-clino-medium backdrop-blur-sm transition-colors hover:bg-white"
              >
                Book a demo
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-clino-edge pt-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Clinics served
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-ink">{PROOF.clinics}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Patients managed
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-ink">{PROOF.patients}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  Since
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-ink">{SITE.founded}</dd>
              </div>
            </dl>
          </div>

          {/* Below lg the photo cannot sit behind the copy and stay
              legible, so it becomes a banded image under it, its bottom
              edge masked into the page the same way. */}
          <div
            className="relative mt-12 h-64 overflow-hidden rounded-2xl sm:h-80 lg:hidden"
            style={{
              maskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
            }}
          >
            <Image
              src={HERO_IMAGE}
              alt="Clinicians reviewing patient data together on screen"
              fill
              sizes="100vw"
              className="object-cover object-[45%_center]"
            />
          </div>
        </div>
      </section>

      {/* ─────────────── Featured on ─────────────── */}
      <FeaturedOn />

      {/* ─────────────── Brands ─────────────── */}
      <section id="brands" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clino-light">
              Our brands
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
              {LIVE_BRANDS.length} brands shipping today, {UPCOMING_BRANDS.length} more on the way
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              A dental clinic, a pharmacy counter and a hospital ward do not do the same job,
              so they do not get the same software. Each brand is built for one kind of
              practice — and each ships four apps, because the person at the desk, the one at
              the chair and the owner checking figures at night all need a different door
              into the same record.
            </p>
          </div>

          <div className="mt-12">
            <BrandGrid />
          </div>
        </div>
      </section>

      {/* ─────────────── Changing healthcare with technology ─────────────── */}
      <section className="border-y border-clino-edge bg-clino-wash py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-clino-light">
              Why this matters
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
              Most Indian practices still run on paper
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Not because the people running them are behind, but because the software on
              offer was written for a different country — priced in dollars, dependent on
              good internet, and complicated enough to need a week of training. We build
              for the practice that exists, not the one a foreign product assumes.
            </p>
          </div>

          {/* Asymmetric: one large panel, three supporting ones. */}
          <div className="mt-14 grid gap-6 lg:grid-cols-12">
            <div className="overflow-hidden rounded-2xl border border-clino-edge bg-white lg:col-span-7">
              <Image
                src="/appointments.png"
                alt="Appointment scheduling in a Clino Health clinic app"
                width={1400}
                height={900}
                className="h-auto w-full border-b border-clino-edge"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-ink">
                  The day, on one screen
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Appointments, waiting patients, what each is here for and what they owe.
                  A receptionist should be able to answer any question at the counter
                  without opening a second app or a register.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-clino-edge bg-white">
                <Image
                  src="/patients-files.png"
                  alt="Patient records and files in a Clino Health app"
                  width={1200}
                  height={620}
                  className="h-auto w-full border-b border-clino-edge"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">Records that follow the patient</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    History, images, prescriptions and payments in one file — not four
                    places and a memory.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-clino-edge bg-white">
                <Image
                  src="/whatsapp-sms.png"
                  alt="WhatsApp and SMS patient reminders sent from a Clino Health app"
                  width={1200}
                  height={620}
                  className="h-auto w-full border-b border-clino-edge"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">Reminders where patients read</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    WhatsApp and SMS, in the language the patient speaks. Email is not how
                    an appointment gets confirmed here.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: WifiOff,
                title: 'Built for patchy internet',
                body: 'Desktop apps keep billing and records working through an outage, then sync when the line returns.',
              },
              {
                Icon: Languages,
                title: 'Hindi and English support',
                body: 'Real people on WhatsApp and on the phone, in the language you are comfortable in.',
              },
              {
                Icon: Building2,
                title: 'Priced for Indian practices',
                body: 'Rupee pricing set against what a single-chair clinic or a one-counter store actually earns.',
              },
              {
                Icon: Database,
                title: 'One record per patient',
                body: 'Clinic, lab, mobile and desktop read and write the same record. No reconciling four versions.',
              },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-clino-edge bg-white p-6">
                <Icon className="h-6 w-6 text-clino-medium" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Privacy ─────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-clino-light">
                Privacy and security
              </p>
              <h2 className="mt-4 text-3xl font-extrabold text-ink md:text-4xl">
                We treat patient data like it&apos;s our own
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-muted">
                A medical record is the most sensitive file most people will ever have.
                Handling it is not a feature we advertise — it is the condition of being
                allowed to do this work at all.
              </p>
              <p className="mt-4 leading-relaxed text-ink-muted">
                Every clinic&apos;s data is isolated from every other clinic&apos;s. Access
                is controlled by role, so a receptionist and a doctor do not see the same
                things. Actions against a record are logged. And your data stays yours —
                you can export all of it, at any time, without asking us.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/security"
                  className="inline-flex items-center gap-2 rounded-full bg-clino-medium px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-clino-dark"
                >
                  How we secure data <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 rounded-full border border-clino-edge px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-clino-medium hover:text-clino-medium"
                >
                  Read the privacy policy
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-clino-edge bg-clino-edge sm:grid-cols-2">
                {[
                  {
                    Icon: KeyRound,
                    title: 'Role-based access',
                    body: 'Owners, doctors and front desk get different permissions. You decide who can view, edit or delete a record.',
                  },
                  {
                    Icon: Database,
                    title: 'Isolated per practice',
                    body: 'Each clinic, lab and store is a separate tenant. One practice can never reach another practice’s data.',
                  },
                  {
                    Icon: ScrollText,
                    title: 'Audit logs',
                    body: 'Who opened a record, who changed it and when. The trail exists whether or not anyone ever asks for it.',
                  },
                  {
                    Icon: ShieldCheck,
                    title: 'Encrypted, in transit and at rest',
                    body: 'Industry-standard encryption on the wire and on disk, with regular security updates shipped to every app.',
                  },
                ].map(({ Icon, title, body }) => (
                  <div key={title} className="bg-white p-7">
                    <Icon className="h-6 w-6 text-clino-medium" strokeWidth={1.75} />
                    <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-clino-edge bg-clino-wash p-7">
                <p className="text-sm font-bold uppercase tracking-wide text-clino-dark">
                  Your data is portable
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Export your full patient list, records and financials whenever you want,
                  in a format you can open elsewhere. Software that holds your data hostage
                  is not software you chose — it is software you are stuck with, and we are
                  not interested in winning that way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── Closing CTA ─────────────── */}
      <section className="bg-clino-dark py-20">
        <div className="mx-auto max-w-container px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-white md:text-4xl">
            Tell us how your practice runs
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            We will show you the app built for it — and if we have not built it yet, that
            conversation is how it gets built.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-clino-dark transition-colors hover:bg-clino-wash"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Browse all products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
