import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Stat } from "@/components/ui/Stat";
import { Testimonial } from "@/components/ui/Testimonial";
import { BillingMockup } from "@/components/mockups/BillingMockup";
import { FeatureBlocks } from "@/components/sections/FeatureBlocks";
import { CtaBand } from "@/components/sections/CtaBand";
import { PricingCards } from "@/components/PricingCards";
import { JsonLd } from "@/components/JsonLd";
import { FAQ } from "@/content/faq";
import { TESTIMONIALS, TRUST_STATS } from "@/content/social-proof";
import { faqSchema, softwareApplicationSchema } from "@/lib/jsonld";
import { SIGNUP_URL, whatsappLink } from "@/lib/site";

const PAINS = [
  {
    title: "Stock expires quietly, in the back",
    body: "Nobody notices a batch until the strip is already dead. It gets written off, and the loss never shows up anywhere you can see it.",
  },
  {
    title: "GST filing turns into a weekend",
    body: "The bills are in a drawer. The figures get rebuilt from paper every month, and a rate typed wrong in March is found in September.",
  },
  {
    title: "Regulars stop coming and nobody knows",
    body: "A customer on monthly BP tablets misses two months. You find out when they mention the new shop near the bus stand.",
  },
  {
    title: "The counter waits on the software",
    body: "Four people in the queue and the billing screen is still loading, or the medicine is not in the list, so it goes on paper again.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchema(FAQ)} />

      {/* 1. Hero */}
      <Section tone="tint" className="pt-12 pb-16 lg:pt-20 lg:pb-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-small font-semibold uppercase tracking-wider text-green-700">
                Pharmacy management software
              </p>
              <h1 className="mt-3 text-[2.25rem] leading-[1.1] font-bold tracking-tight text-ink-900 sm:text-[2.75rem] lg:text-display">
                Run your whole pharmacy from one screen
              </h1>
              <p className="measure mt-5 text-body-lg text-ink-700">
                Billing, stock, purchases, customers and GST in one system — so you bill in seconds,
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
                  Talk to us on WhatsApp
                </ButtonLink>
              </div>

              <p className="mt-4 text-small text-ink-500">
                Free plan for a single counter · No card needed
              </p>
            </div>

            <div className="lg:pl-4">
              <BillingMockup />
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Trust bar — renders only when TRUST_STATS holds real
             numbers, so nothing invented can ship here by accident. */}
      {TRUST_STATS.length > 0 && (
        <Section className="py-10 lg:py-12">
          <Container>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {TRUST_STATS.map((stat) => (
                <Stat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 3. Problem framing */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="What we hear"
            title="The four things that actually cost you money"
            intro="None of these is a software problem. They are all a record-keeping problem, which is why they never get fixed on paper."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {PAINS.map((pain) => (
              <Card key={pain.title}>
                <h3 className="text-h4 text-ink-900">{pain.title}</h3>
                <p className="mt-2 text-body text-ink-700">{pain.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Core features */}
      <Section tone="alt">
        <Container>
          <SectionHeader
            eyebrow="What you get"
            title="Everything a retail pharmacy runs on"
            intro="Billing, stock, purchase, customers and GST in one place — so the bill you print is the one your return is built from."
          />
        </Container>
        <FeatureBlocks />
      </Section>

      {/* 5. Differentiator
             TODO: replace with the one capability we can genuinely
             defend against LocalWell, given a full-width tone="dark"
             band. No claim has been agreed yet, so this section stays
             out of the page rather than shipping an invented one. */}

      {/* 6. Pricing preview */}
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

      {/* 7. Testimonials — same guard as the trust bar. */}
      {TESTIMONIALS.length > 0 && (
        <Section tone="alt">
          <Container>
            <SectionHeader eyebrow="Customers" title="From pharmacies already running on it" />
            <div className="grid gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((testimonial) => (
                <Testimonial key={testimonial.name} data={testimonial} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 8. FAQ */}
      <Section tone="alt">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeader
              eyebrow="Questions"
              title="The things owners ask us first"
              intro="If yours is not here, message us on WhatsApp — you will get a person, not a form."
            />
            <Accordion items={FAQ} />
          </div>
        </Container>
      </Section>

      {/* 9. Final CTA */}
      <CtaBand placement="home_footer" />
    </>
  );
}
