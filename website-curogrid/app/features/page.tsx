import type { Metadata } from "next";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { DemoCta, TrialCta } from "@/components/Cta";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProductShot } from "@/components/mockups/ProductShot";
import { buildMetadata } from "@/lib/seo";
import { SHOTS } from "@/lib/shots";
import { SITE } from "@/lib/site";
import { BUYING_QUESTIONS, FEATURE_PAGES, MORE_FEATURES } from "@/content/features";
import { PRODUCT_FAQS } from "@/content/faq";

const seo = buildMetadata({
  title: "Features: Tokens, Appointments, Files and Billing",
  description:
    "Everything Curogrid does for a clinic: tokens and the waiting line, appointments, patient files, prescriptions, tests, billing, stock, reports and a phone app.",
  path: "/features",
});

export const metadata: Metadata = {
  ...seo,
  // Tells an AI assistant where the same content is as plain Markdown.
  alternates: { ...seo.alternates, types: { "text/markdown": `${SITE.url}/features.md` } },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        trail={[{ name: "Features", path: "/features" }]}
        title="Curogrid features: everything a clinic does in a day"
        lead={`Curogrid covers a clinic's day in one system, from the first token of the morning to closing the day's cash. Four screens do most of the work: ${FEATURE_PAGES.map((feature) => feature.name.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " and $1")}. ${MORE_FEATURES.length} more parts, such as stock and reports, are in both plans.`}
      >
        <TrialCta placement="features_hero" tone="dark" />
        <DemoCta placement="features_hero" tone="dark" />
      </PageHero>

      <Section>
        <Container>
          <SectionHeader
            title="What are Curogrid's main features?"
            intro="Four screens, each shown here as it really looks, on a clinic we set up with invented patients."
          />
          <FeatureRows />
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-h3">What does the owner see each morning?</h2>
              <p className="mt-3 text-body text-gray-700">
                Curogrid&rsquo;s dashboard shows the owner what was collected today, how many patients
                were seen, what is still owed and the average wait, each compared with the same day
                last week. A short list named “What needs you” points at any bill that has been unpaid
                for over 30 days.
              </p>
            </div>
            <ProductShot shot={SHOTS.dashboard} sizes="(min-width: 1024px) 740px, 100vw" className="lg:col-span-8" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader title="What else is in every plan?" intro={`These ${MORE_FEATURES.length} parts of Curogrid are in both plans, Plus and Pro.`} />
          <dl className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {MORE_FEATURES.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 py-6">
                <dt className="text-h4 text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-[0.9375rem] text-gray-700">{feature.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <SectionHeader
            title="What should you ask before choosing clinic software?"
            intro={`Ask these ${BUYING_QUESTIONS.length} questions of any clinic software, ours included. Curogrid's answers are in the last column, including the ones that are no.`}
          />
          <div className="overflow-x-auto rounded-md border border-gray-200 bg-gray-0">
            <table className="w-full min-w-[760px] border-collapse text-left text-[0.9375rem]">
              <caption className="sr-only">Questions to ask of any clinic management software, with Curogrid&rsquo;s answers</caption>
              <thead>
                <tr className="border-b border-gray-300">
                  <th scope="col" className="w-[26%] px-5 py-4 font-semibold text-gray-500">Question to ask</th>
                  <th scope="col" className="w-[30%] px-5 py-4 font-semibold text-gray-500">Why it matters</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-gray-900">Curogrid&rsquo;s answer</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {BUYING_QUESTIONS.map((row) => (
                  <tr key={row.ask} className="border-b border-gray-100 last:border-0">
                    <th scope="row" className="px-5 py-4 font-semibold text-gray-900">{row.ask}</th>
                    <td className="px-5 py-4 text-gray-600">{row.why}</td>
                    <td className="px-5 py-4 text-gray-900">{row.curogrid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <FaqSection items={PRODUCT_FAQS} title="Questions about what Curogrid does" />
      <CtaBand placement="features_footer" />
    </>
  );
}
