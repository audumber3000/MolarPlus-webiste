import Link from "next/link";
import Image from "next/image";
import heroPharmacist from "@/app/assets/hero-pharmacist.webp";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { MobileAppShowcase } from "@/components/mockups/MobileApp";
import { ExpirySavings } from "@/components/sections/ExpirySavings";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturedOn } from "@/components/sections/FeaturedOn";
import { TrustedByPharmacies } from "@/components/sections/TrustedByPharmacies";
import { StoreBadges } from "@/components/StoreBadges";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CtaBand } from "@/components/sections/CtaBand";
import { Awards } from "@/components/sections/Awards";
import { PricingCards } from "@/components/PricingCards";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/content/faq";
import { faqSchema, softwareApplicationSchema } from "@/lib/jsonld";
import { SIGNUP_URL, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchema(FAQ)} />

      {/* 1. Hero
             The photograph is a backdrop, not a figure: it sits behind a
             scrim that is fully opaque where the copy lands and clears
             only over the pharmacist. That keeps headline contrast at the
             same ink-900-on-green-50 ratio it would have with no image at
             all, rather than relying on a text-shadow to rescue it. */}
      <Section
        tone="tint"
        className="relative overflow-hidden pt-12 pb-16 lg:flex lg:min-h-[36rem] lg:items-center lg:pt-20 lg:pb-24"
      >
        {/* Desktop: the photo owns the right half outright, bleeding off the
            right edge of the viewport rather than stopping at the container.
            A half-width, full-height box is roughly square, which is the
            source's own aspect — so object-cover has almost nothing to crop
            here, unlike a full-bleed band across the whole hero. */}
        <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src={heroPharmacist}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="50vw"
            className="object-cover object-center"
          />
          {/* Blend on the inner edge only: opaque where it meets the copy
              column, clear by 45% so the pharmacist and the phone sit at
              full strength. */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 from-0% via-green-50/45 via-18% to-transparent to-45%" />
        </div>

        <Container className="relative w-full">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-small font-semibold uppercase tracking-wider text-green-700">
                Pharmacy management software
              </p>
              {/* Two beats: who it is for, then the three promises. Each promise
                  sits on a highlighter stroke and rises in turn on load, with
                  the last one in brand green so the line lands on it. The
                  motion is a single 250ms rise per word, and globals.css
                  stops it entirely for reduced motion. */}
              <h1 className="mt-3 font-bold tracking-tight text-ink-900">
                <span className="block text-[2.25rem] leading-[1.1] sm:text-[2.75rem] lg:text-display">
                  Your Medical Store.
                </span>
                <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[2.25rem] leading-[1.15] sm:gap-x-4 sm:text-[2.75rem] lg:text-display">
                  {["Smarter.", "Faster.", "Simpler."].map((word, i) => (
                    <span
                      key={word}
                      className="animate-rise relative inline-block"
                      style={{ animationDelay: `${120 + i * 140}ms` }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-[-0.08em] bottom-[0.12em] h-[0.34em] -skew-x-12 rounded-xs bg-green-100"
                      />
                      <span className={i === 2 ? "relative text-green-700" : "relative"}>{word}</span>
                    </span>
                  ))}
                </span>
              </h1>
              <p className="measure mt-5 text-body-lg text-ink-700">
                Billing, stock, purchases, customers and GST in one system, so you bill in seconds,
                catch expiry while you can still return it, and file without a scramble.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={SIGNUP_URL} size="lg">
                  Start free
                </ButtonLink>
                <ButtonLink
                  href={whatsappLink()}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Talk to us on WhatsApp
                </ButtonLink>
              </div>

              <p className="mt-4 text-small text-ink-500">
                Free plan for a single counter · No card needed
              </p>

              {/* All four platforms on one baseline, as on the MolarPlus
                  hero. Badge artwork ships at different aspect ratios, so
                  they share a height and wrap two-by-two when narrow. */}
              <div className="mt-8 border-t border-ink-200 pt-6">
                <p className="mb-3.5 text-micro font-bold uppercase tracking-[0.2em] text-ink-500">
                  Download free, works on every device
                </p>
                {/* Capped so the four wrap two-by-two rather than 3 + 1. */}
                <StoreBadges className="max-w-[22rem]" />
              </div>
            </div>

            {/* Mobile only. Above lg the photo is the absolutely-positioned
                right half above, so this is hidden to avoid rendering it
                twice. Here it runs full-bleed edge to edge at its own aspect
                — nothing cropped — with the top fading into the copy. */}
            <div className="relative -mx-4 lg:hidden">
              <Image
                src={heroPharmacist}
                alt="A pharmacist behind the counter of an Indian medical store, holding a phone running SyrupDesk"
                priority
                placeholder="blur"
                sizes="100vw"
                className="h-auto w-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-green-50 to-transparent"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Reassurance strip. A compact band, not a section: after a
             tall hero another 96px block reads as a second hero. The
             stats bar it replaces stayed hidden because we have no real
             numbers — these four are checkable today. */}
      {/* 2b. Featured on — same platforms and placement as MolarPlus. */}
      <FeaturedOn />

      <TrustBar />

      {/* Trusted by: the pharmacy count, sliding names and the photo grid,
          straight after the four-fact strip. */}
      <TrustedByPharmacies />

      {/* 2c. Review-platform badges — self-hiding until one is earned. */}
      <Awards />

      {/* 4. The product, every screen in one frame, as on MolarPlus. */}
      <Section>
        <Container>
          <p className="mb-3 text-small font-semibold uppercase tracking-wider text-green-700">
            See it in action
          </p>
          <h2 className="mb-10 text-[1.75rem] leading-tight font-bold tracking-tight text-ink-900 sm:text-h2">
            Your whole medical store, in one place.
          </h2>
          <ProductShowcase />
        </Container>
      </Section>

      {/* 5. What expiry is costing this shop. Sits after the features
             and before pricing on purpose: pain, then what you get,
             then what it is worth, then what it costs. */}
      <ExpirySavings />

      {/* 5b. The phone app. */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="On your phone"
            title="Check the shop without being in the shop"
            intro="The counter work stays on the desktop, where there is a keyboard. The phone app answers the questions you have when you are somewhere else: how is today going, and what is about to go off."
          />
          <MobileAppShowcase />
          <div className="mt-12 flex flex-col items-center gap-3">
            <p className="text-micro font-bold uppercase tracking-[0.2em] text-ink-500">
              Get the app
            </p>
            <StoreBadges className="justify-center" />
          </div>
        </Container>
      </Section>

      {/* 6. Differentiator
             TODO: replace with the one capability we can genuinely
             defend against LocalWell, given a full-width tone="dark"
             band. No claim has been agreed yet, so this section stays
             out of the page rather than shipping an invented one. */}

      {/* 6b. Pricing preview */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Pricing"
            title="Start free. Pay when it is running your shop."
            intro="No setup fee, no annual lock-in, and we import your existing stock list for you at no charge."
            centered
          />
          <PricingCards />
          <p className="mt-8 text-center text-body">
            <Link href="/pricing" className="text-green-700 underline underline-offset-4">
              See what is in each plan
            </Link>
          </p>
        </Container>
      </Section>

      {/* 7. Testimonials — renders nothing until there are real ones. */}
      <Testimonials />

      {/* 9. FAQ */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeader
              eyebrow="Questions"
              title="The things owners ask us first"
              intro="If yours is not here, message us on WhatsApp. You will get a person, not a form."
            />
            <Accordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* 10. Final CTA */}
      <CtaBand placement="home_footer" />
    </>
  );
}
