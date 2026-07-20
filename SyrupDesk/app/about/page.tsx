import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About — why we built SyrupDesk",
  description:
    "SyrupDesk is pharmacy management software by Clino Health, built for independent pharmacies in India: software a shop owner can run on the counter computer they already have, without training or a lock-in contract.",
  path: "/about",
});

const PRINCIPLES = [
  {
    title: "Nothing hidden on the invoice",
    body: "The price on the pricing page is the price. No setup fee that appears later, no per-bill charge, no support plan you have to buy to get a reply.",
  },
  {
    title: "Your data is yours",
    body: "You can export everything, any time, in a format you can actually open. If you stop paying, the account goes read-only — we do not delete your records or hold them to force a renewal.",
  },
  {
    title: "It has to work on what you own",
    body: "An eight-year-old Windows desktop, a mid-range Android phone, a patchy connection. If it only runs on new hardware and good internet, it does not work for this market.",
  },
  {
    title: "Plain words, always",
    body: "Nobody at a pharmacy counter needs to be sold a platform. We describe what the software does, in the words the job is actually called.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <Section tone="tint" className="pt-12 pb-14 lg:pt-16 lg:pb-16">
        <Container>
          <SectionHeader
            as="h1"
            eyebrow="About"
            title="Built for the shop, not the boardroom"
            intro="Most pharmacy software in India was written for chains and then sold down to independent shops. It shows — in the price, in the training it needs, and in how much of it goes unused."
          />
        </Container>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <Container>
          <div className="measure space-y-5 text-body-lg text-ink-700">
            <p>
              An independent pharmacy is a small business with a compliance problem attached. The
              owner is buying, selling, filing GST, chasing distributor returns and standing at the
              counter — often all in the same afternoon.
            </p>
            <p>
              The software that is supposed to help usually asks for a week of setup, a training
              session, and a yearly contract before it prints a single bill. So the shop keeps a
              register instead, and the expiry losses keep happening quietly in the background.
            </p>
            <p>
              SyrupDesk is the version of that software we thought should exist: something an owner
              can sign up for on a phone, start billing on within the hour, and understand the price
              of without a phone call.
            </p>
            <p>
              We are Clino Health. We also build MolarPlus, software for dental clinics and dental
              laboratories, so running a small healthcare business on software that has to work on
              the first day is the problem we already spend our time on.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <SectionHeader
            eyebrow="How we work"
            title="Four things we will not trade away"
            intro="These are the decisions we expect to be held to."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {PRINCIPLES.map((principle) => (
              <Card key={principle.title}>
                <h3 className="text-h4 text-ink-900">{principle.title}</h3>
                <p className="mt-2 text-body text-ink-700">{principle.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand placement="about_footer" />
    </>
  );
}
