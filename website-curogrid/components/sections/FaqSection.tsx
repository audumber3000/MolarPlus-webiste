import { Accordion } from "@/components/ui/Accordion";

/** Plain-text answers: the same strings go into the FAQPage structured data. */
export type FaqText = { q: string; a: string };
import { Container, Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/jsonld";

/** Questions with their FAQPage structured data. Use once per page:
 *  two FAQPage blocks on one URL is an error in Google's validator. */
export function FaqSection({
  items,
  title = "Questions doctors ask",
  tone = "default",
}: {
  items: ReadonlyArray<FaqText>;
  title?: string;
  tone?: "default" | "alt";
}) {
  return (
    <Section tone={tone}>
      <JsonLd data={faqSchema(items)} />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">{title}</h2>
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
