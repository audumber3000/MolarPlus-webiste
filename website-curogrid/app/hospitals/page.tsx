import type { Metadata } from "next";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppCta } from "@/components/Cta";
import { FaqSection } from "@/components/sections/FaqSection";
import { buildMetadata } from "@/lib/seo";
import { HOSPITAL_FAQS, HOSPITAL_STATUS } from "@/content/pages";
import { HOSPITAL_PLANS, rupees } from "@/content/pricing";

/**
 * A holding page, and an honest one. The app shows hospital plans as
 * coming but does not sell them: admitting a patient, the bed board and
 * the discharge summary are not built. This page must never read as if
 * they are. When they ship, rewrite it; do not just delete the notice.
 */
export const metadata: Metadata = buildMetadata({
  title: "Hospital Software for 10 to 25 Beds (Coming)",
  description:
    "Curogrid for small hospitals is being built: admissions, a bed board and discharge summaries. See what works today and the planned prices.",
  path: "/hospitals",
});

export default function HospitalsPage() {
  return (
    <>
      <PageHero
        trail={[{ name: "For hospitals", path: "/hospitals" }]}
        title="Curogrid for hospitals: the OPD today, beds next"
        lead="Curogrid is clinic software, and it does not handle admitted patients yet. A hospital can run its OPD on Curogrid today. The inpatient side, which means admissions, the bed board and the discharge summary, is being built and cannot be used yet."
      >
        <WhatsAppCta placement="hospital_hero" tone="dark" message="Hi, I run a hospital and want to know when Curogrid will support beds." label="Ask us on WhatsApp" />
      </PageHero>

      <Section>
        <Container>
          <SectionHeader
            title="What can a hospital use Curogrid for today?"
            intro="The OPD. Everything a clinic does in Curogrid works for a hospital's outpatients. Nothing for admitted patients is built yet."
          />
          <div className="overflow-x-auto rounded-md border border-gray-200 bg-gray-0">
            <table className="w-full min-w-[520px] border-collapse text-left text-body">
              <caption className="sr-only">What a hospital can and cannot do in Curogrid today</caption>
              <thead>
                <tr className="border-b border-gray-300">
                  <th scope="col" className="px-5 py-4 text-[0.9375rem] font-semibold text-gray-500">Hospital work</th>
                  <th scope="col" className="w-[34%] px-5 py-4 text-[0.9375rem] font-semibold text-gray-500">In Curogrid today</th>
                </tr>
              </thead>
              <tbody>
                {HOSPITAL_STATUS.map((row) => (
                  <tr key={row.work} className="border-b border-gray-100 last:border-0">
                    <th scope="row" className="px-5 py-3.5 font-medium text-gray-900">{row.work}</th>
                    <td className={row.built ? "px-5 py-3.5 font-semibold text-teal-700" : "px-5 py-3.5 text-gray-600"}>
                      {row.built ? "Yes" : "No, not built yet"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="measure mt-6 text-[0.9375rem] text-gray-600">
            We have not set a date for the inpatient side. We would rather tell you when it works
            than promise a month.
          </p>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <SectionHeader
            title="What will Curogrid cost for a hospital?"
            intro={`The planned prices are ${HOSPITAL_PLANS.map((plan) => `${rupees(plan.monthly)} a month ${plan.tagline.toLowerCase().replace("for a hospital of", "for")}`).join(" and ")}. These plans are not on sale yet. A hospital will be priced on beds and staff, however many patients walk in.`}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {HOSPITAL_PLANS.map((plan) => (
              <div key={plan.name} className="rounded-md border border-gray-200 bg-gray-0 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-h3">{plan.name}</h3>
                  <span className="rounded-xs bg-gray-100 px-2 py-1 text-micro font-bold tracking-wider text-gray-600 uppercase">Not on sale yet</span>
                </div>
                <p className="mt-2 text-body text-gray-600">{plan.tagline}</p>
                <p className="mt-6" data-numeric>
                  <span className="text-[2.5rem] leading-none font-extrabold tracking-tight text-gray-900">{rupees(plan.monthly)}</span>
                  <span className="text-body text-gray-600"> a month, planned</span>
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-gray-200 pt-6 text-body text-gray-800">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">Tell us about your hospital</h2>
              <p className="mt-4 text-body text-gray-700">
                Leave your number and we will call. Tell us how many beds you run and what you use
                today. We will tell you plainly what Curogrid can do for you now, and let you know
                when the inpatient side opens.
              </p>
            </div>
            <ContactForm
              topic="hospital"
              askClinic
              messageLabel="About your hospital"
              messagePlaceholder="How many beds, which specialities, and what you use today."
              submitLabel="Ask for a call"
            />
          </div>
        </Container>
      </Section>

      <FaqSection items={HOSPITAL_FAQS} title="Questions from hospitals" tone="alt" />
    </>
  );
}
