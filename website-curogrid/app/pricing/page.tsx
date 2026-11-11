import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { PricingCards } from "@/components/sections/PricingCards";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { softwareApplicationSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { PRICING_FAQS } from "@/content/faq";
import { FACTS_CHECKED, SITE } from "@/lib/site";
import {
  ANNUAL_SAVING_PERCENT,
  GST_PERCENT,
  INCLUDED_IN_EVERY_PLAN,
  OWN_WHATSAPP_ADDON,
  PLANS,
  PLAN_COMPARISON,
  TRIAL_DAYS,
  rupees,
} from "@/content/pricing";

const [plus, pro] = PLANS;

const seo = buildMetadata({
  title: `Pricing: ${rupees(plus.monthly)} and ${rupees(pro.monthly)} a Month for the Clinic`,
  description: `Curogrid costs ${rupees(plus.monthly)} a month on Plus and ${rupees(pro.monthly)} on Pro, for the whole clinic, not per doctor. ${ANNUAL_SAVING_PERCENT}% less when paid yearly. ${TRIAL_DAYS}-day free trial.`,
  path: "/pricing",
});

export const metadata: Metadata = {
  ...seo,
  // Tells an AI assistant where the same prices are as plain Markdown.
  alternates: { ...seo.alternates, types: { "text/markdown": `${SITE.url}/pricing.md` } },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema({ path: "/pricing" })} />

      <PageHero
        trail={[{ name: "Pricing", path: "/pricing" }]}
        title="Curogrid pricing: two plans for the whole clinic"
        lead={`Curogrid costs ${rupees(plus.monthly)} a month on ${plus.name} or ${rupees(pro.monthly)} a month on ${pro.name}, for the whole clinic, however many doctors it has.`}
      />

      <Section>
        <Container>
          {/* h2 here: on this page the plan names come straight after the h1. */}
          <PricingCards placement="pricing" as="h2" />
          <p className="measure mt-6 text-[0.9375rem] text-gray-600">
            Rupees, before {GST_PERCENT}% GST, which is added at checkout. Checked on{" "}
            <time dateTime={FACTS_CHECKED.iso}>{FACTS_CHECKED.text}</time>.
          </p>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <SectionHeader
            title={`What is the difference between ${plus.name} and ${pro.name}?`}
            intro="Only the limits. Every feature is in both plans."
          />
          <div className="overflow-x-auto rounded-md border border-gray-200 bg-gray-0">
            <table className="w-full min-w-[560px] border-collapse text-left text-[0.9375rem]">
              <caption className="sr-only">Curogrid Plus and Pro plans compared</caption>
              <thead>
                <tr className="border-b border-gray-300">
                  <th scope="col" className="px-5 py-4 font-semibold text-gray-500"><span className="sr-only">Limit</span></th>
                  <th scope="col" className="px-5 py-4 text-h4 text-gray-900">{plus.name}</th>
                  <th scope="col" className="px-5 py-4 text-h4 text-gray-900">{pro.name}</th>
                </tr>
              </thead>
              <tbody>
                {PLAN_COMPARISON.map((row) => (
                  <tr key={row.label} className="border-b border-gray-100 last:border-0">
                    <th scope="row" className="px-5 py-3 font-medium text-gray-600">{row.label}</th>
                    <td className="px-5 py-3 text-gray-900">{row.plus}</td>
                    <td className="px-5 py-3 text-gray-900">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="measure mt-6 text-[0.9375rem] text-gray-600">
            The one add-on is a WhatsApp number of your own. On {plus.name} it costs{" "}
            {rupees(OWN_WHATSAPP_ADDON.monthly)} a month or {rupees(OWN_WHATSAPP_ADDON.annual)} a year for
            each clinic location. {pro.name} includes it.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">In both plans</h2>
              <p className="mt-4 text-body text-gray-700">Every feature and every speciality setup.</p>
            </div>
            <ul className="grid gap-x-10 border-t border-gray-200 sm:grid-cols-2">
              {INCLUDED_IN_EVERY_PLAN.map((item) => (
                <li key={item} className="border-b border-gray-200 py-4 text-body text-gray-900">{item}</li>
              ))}
            </ul>
          </div>
          <p className="mt-10 text-body text-gray-700">
            Running a hospital with beds? <Link href="/hospitals" className="font-semibold text-teal-700 underline underline-offset-4">See what is planned for hospitals</Link>.
            Still comparing? Read <Link href="/blog/how-to-choose-clinic-management-software-india" className="font-semibold text-teal-700 underline underline-offset-4">nine questions to ask before choosing clinic software</Link>.
          </p>
        </Container>
      </Section>

      {/* Price questions only. The product questions are on /faq and /features. */}
      <FaqSection items={PRICING_FAQS} title="Questions about Curogrid's price" tone="alt" />
      <CtaBand placement="pricing_footer" />
    </>
  );
}
