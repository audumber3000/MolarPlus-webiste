import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { PricingCards } from "@/components/PricingCards";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, softwareApplicationSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing — free plan, then ₹599 a month",
  description:
    "SyrupDesk pricing for Indian pharmacies. A free plan for a single counter, ₹599 a month for a full shop with inventory and GST reports, and ₹1,299 for multiple branches. No setup fee, no annual lock-in.",
  path: "/pricing",
});

const PRICING_FAQ = [
  {
    q: "Is the free plan really free?",
    a: "Yes. The Counter plan covers GST billing and up to 300 bills a month for one user, at no cost and with no card required. It does not expire.",
  },
  {
    q: "Is there a setup or migration fee?",
    a: "No. We import your existing stock list, customers and outstanding balances at no charge, whatever format you have them in.",
  },
  {
    q: "Do I have to pay for a year up front?",
    a: "No. Paid plans are billed monthly and you can stop any time. If you do pay yearly you get two months free, but that is your choice, not a condition.",
  },
  {
    q: "What if I need more than five branches?",
    a: "Message us on WhatsApp and we will work out a price for your group. There is nothing standard to quote here, so we would rather talk than print a number we cannot stand behind.",
  },
  {
    q: "Are there charges on top of the plan?",
    a: "WhatsApp refill reminders are charged at cost by the telecom operator and billed separately once you cross the free monthly allowance. Nothing else is metered.",
  },
  {
    q: "What happens to my data if I stop paying?",
    a: "Your account becomes read-only, you can still download everything in Excel, and we keep it for 12 months. Your records are not held hostage.",
  },
];

const INCLUDED = [
  "Free import of your existing stock and customer data",
  "WhatsApp support in English and Hindi",
  "Automatic backups, restored on request",
  "Every GST change applied for you, at no extra cost",
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchema(PRICING_FAQ)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />

      <Section tone="tint" className="pt-12 pb-14 lg:pt-16 lg:pb-16">
        <Container>
          <SectionHeader
            as="h1"
            eyebrow="Pricing"
            title="Plain pricing, printed in full"
            intro="One price per plan, everything listed, nothing that appears on the invoice later. Start free and move up when the shop is actually running on it."
            centered
          />
        </Container>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <Container>
          <PricingCards />
          <p className="mt-6 text-center text-small text-ink-500">
            Prices are per shop and exclude GST. Pay yearly and two months are free.
          </p>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <SectionHeader
            eyebrow="Included on every plan"
            title="Things other software charges you for"
            intro="These are not add-ons. They are on the free plan too."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {INCLUDED.map((item) => (
              <Card key={item}>
                <p className="text-body text-ink-700">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeader
              eyebrow="Questions"
              title="What owners ask about the price"
              intro="If something here is unclear, ask us before you sign up — not after."
            />
            <Accordion items={PRICING_FAQ} />
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Start on the free plan"
        body="No card, no sales call, no trial that quietly turns into a bill. Move up only when it is worth paying for."
        placement="pricing_footer"
      />
    </>
  );
}
