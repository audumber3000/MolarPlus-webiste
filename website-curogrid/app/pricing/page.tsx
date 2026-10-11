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
import { PRICING_FAQS, PRODUCT_FAQS } from "@/content/faq";
import { FACTS_CHECKED, SITE } from "@/lib/site";
import {
  ANNUAL_SAVING_PERCENT,
  GST_PERCENT,
  INCLUDED_IN_EVERY_PLAN,
  OWN_WHATSAPP_ADDON,
  PLANS,
  PLAN_COMPARISON,
  PLAN_LIMITS,
  TRIAL_DAYS,
  TRIAL_PLAN,
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
        lead={`Curogrid costs ${rupees(plus.monthly)} a month on ${plus.name} or ${rupees(pro.monthly)} a month on ${pro.name}. The price is for the whole clinic, however many doctors and patients it has. Paying for the year costs ${ANNUAL_SAVING_PERCENT}% less, and every clinic starts with ${TRIAL_DAYS} days of ${TRIAL_PLAN}, free.`}
      />

      <Section>
        <Container>
          {/* h2 here: on this page the plan names come straight after the h1. */}
          <PricingCards placement="pricing" as="h2" />
          <p className="measure mt-6 text-[0.9375rem] text-gray-600">
            Prices are in rupees for clinics in India, before GST. GST of {GST_PERCENT}% is added
            at checkout. Nothing clinical is held back for the higher plan: {plus.name} and{" "}
            {pro.name} have the same features and differ in their limits. Prices last checked on{" "}
            <time dateTime={FACTS_CHECKED.iso}>{FACTS_CHECKED.text}</time>.
          </p>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <SectionHeader
            title={`What is the difference between ${plus.name} and ${pro.name}?`}
            intro={`The limits. ${plus.name} allows ${PLAN_LIMITS.plus.patientsAMonth.toLocaleString("en-IN")} new patients a month, ${PLAN_LIMITS.plus.staff} staff logins and ${PLAN_LIMITS.plus.branches} branch. ${pro.name} has unlimited patients, ${PLAN_LIMITS.pro.staff} staff logins and up to ${PLAN_LIMITS.pro.branches} branches. Every feature is in both.`}
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
              <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">What is included in both plans?</h2>
              <p className="mt-4 text-body text-gray-700">
                Every feature. A small clinic on {plus.name} has the same software as a busy clinic on{" "}
                {pro.name}, and every speciality setup is included.
              </p>
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

      <FaqSection items={[...PRICING_FAQS, ...PRODUCT_FAQS.slice(0, 4)]} title="Questions about Curogrid's price" tone="alt" />
      <CtaBand placement="pricing_footer" />
    </>
  );
}
