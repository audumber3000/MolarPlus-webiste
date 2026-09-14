import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { FeatureBlocks } from "@/components/sections/FeatureBlocks";
import { ProductShot } from "@/components/mockups/ProductShot";
import reportsShot from "@/app/assets/app-reports.webp";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Features: billing, inventory, purchases, customers and GST",
  description:
    "See how SyrupDesk handles GST billing, inventory with expiry alerts, the verified Indian medicine database, purchase bill import, refill reminders and GSTR-1 reporting for retail pharmacies.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ])}
      />

      <Section tone="tint" className="pt-12 pb-14 lg:pt-16 lg:pb-16">
        <Container>
          <SectionHeader
            as="h1"
            eyebrow="Features"
            title="What SyrupDesk does at the counter"
            intro="Six things a retail pharmacy does every day, and how each one works here. Everything below is one system, and the bill you print is the same record your GST return is built from."
          />
        </Container>
      </Section>

      <Section>
        <Container>
          {/* The report library, ahead of the six feature blocks. It is
              the cheapest proof that this is a working system rather
              than a billing screen with a website around it — 23
              reports, each named in the language an owner uses. */}
          <div className="mx-auto mb-16 max-w-4xl lg:mb-20">
            <ProductShot
              src={reportsShot}
              alt="The SyrupDesk reports library: 23 reports grouped as what sold, what is on the shelf, what we bought, where the money is, and who is buying, each described in plain language, such as “Every bill in a period, with its tax” and “What to send back, and the date it stops being worth anything”."
              caption="Twenty-three reports, named for the question they answer."
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>
        </Container>
        <FeatureBlocks />
      </Section>

      <CtaBand
        title="See it on your own stock"
        body="Start on the free plan, or send us your stock list and we will set it up for you before you decide."
        placement="features_footer"
      />
    </>
  );
}
