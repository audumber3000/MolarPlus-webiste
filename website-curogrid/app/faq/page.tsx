import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { FAQ_GROUPS as GROUPS } from "@/content/faq";
import { FACTS_CHECKED, SITE } from "@/lib/site";
import { SPECIALITIES } from "@/lib/specialities";

const seo = buildMetadata({
  title: "Curogrid FAQ: Price, Free Trial and Specialities",
  description: "Plain answers about Curogrid: what it is, which specialities it supports, what it costs, how the trial works and what it does not do yet.",
  path: "/faq",
});

export const metadata: Metadata = {
  ...seo,
  // Tells an AI assistant where the same answers are as plain Markdown.
  alternates: { ...seo.alternates, types: { "text/markdown": `${SITE.url}/faq.md` } },
};

/**
 * Every answer is printed open, not behind an accordion: this page is
 * for someone scanning for one answer, and for the crawler or assistant
 * that wants to quote one.
 */
export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(GROUPS.flatMap((group) => group.items))} />
      <PageHero
        trail={[{ name: "Questions and answers", path: "/faq" }]}
        title="Curogrid questions and answers"
        lead={`Plain answers about Curogrid, clinic management software for clinics in India: what it is, what it costs, what it does and what it does not do yet. Every answer was checked against the product on ${FACTS_CHECKED.text}.`}
      />

      <Section>
        <Container>
          <div className="space-y-16">
            {GROUPS.map((group) => (
              <div key={group.title} className="grid gap-6 lg:grid-cols-[1fr_2.2fr] lg:gap-16">
                <h2 id={group.title.toLowerCase().replace(/[^a-z]+/g, "-")} className="text-h3">{group.title}</h2>
                <dl className="border-t border-gray-200">
                  {group.items.map((item) => (
                    <div key={item.q} className="border-b border-gray-200 py-6">
                      <dt className="text-h4 text-gray-900">{item.q}</dt>
                      <dd className="measure mt-2 text-body text-gray-700">{item.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}

            <div className="grid gap-6 lg:grid-cols-[1fr_2.2fr] lg:gap-16">
              <h2 className="text-h3">By speciality</h2>
              <ul className="border-t border-gray-200">
                {SPECIALITIES.map((s) => (
                  <li key={s.slug} className="border-b border-gray-200">
                    <Link href={`/${s.slug}`} className="flex min-h-14 items-center justify-between gap-4 py-3 text-body font-semibold text-gray-900 hover:text-teal-700">
                      Questions from {s.doctor}s
                      <span aria-hidden="true" className="text-teal-700">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand placement="faq_footer" title="Did not find your question?" body="Ask us on WhatsApp. A person answers." />
    </>
  );
}
