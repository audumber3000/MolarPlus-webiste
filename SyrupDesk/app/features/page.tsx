import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { FeatureBlocks } from "@/components/sections/FeatureBlocks";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Features — billing, inventory, purchases, customers and GST",
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
            intro="Six things a retail pharmacy does every day, and how each one works here. Everything below is one system — the bill you print is the same record your GST return is built from."
          />
        </Container>
      </Section>

      <Section>
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
