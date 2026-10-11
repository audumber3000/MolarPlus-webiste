import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { TrialCta } from "@/components/Cta";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { getPost } from "@/lib/blog";
import { ALSO_SUPPORTED, DIAGNOSIS_COUNT, SPECIALITIES, courseWords } from "@/lib/specialities";
import { FACTS_CHECKED, SITE } from "@/lib/site";
import { PLANS, TRIAL_DAYS, TRIAL_PLAN, rupees } from "@/content/pricing";

const TOTAL = SPECIALITIES.length + ALSO_SUPPORTED.length;

export const metadata: Metadata = buildMetadata({
  title: "Clinic Management Software by Speciality",
  description: `Curogrid has a ready setup for ${TOTAL} medical specialities. Compare the services, medicines, procedures and course booking each clinic gets on day one.`,
  path: "/specialities",
});

/**
 * How the speciality setup works, checked in the app on 11 October 2026:
 * setup/Specialty.tsx (the picker, the preview, "Nothing is added until
 * you press the button"), setup/Setup.tsx ("Add another specialty") and
 * onboarding/templates/catalogue.py (nothing is applied by default, and
 * everything added is the clinic's own row afterwards).
 */
const STEPS = [
  {
    title: "Open clinic setup and pick your speciality",
    body: "A new clinic starts with nothing specific to any speciality. In clinic setup, the speciality picker lists all ten, each with the number of departments and services it adds.",
  },
  {
    title: "See exactly what it will add",
    body: "Tap a speciality and Curogrid shows its departments and every service with its starter price. Nothing is added until you press the button.",
  },
  {
    title: "Make it yours",
    body: "Everything added is your clinic's own from that moment. Rename a service, delete the ones you do not offer and set your own fees. You can add another speciality later.",
  },
] as const;

const [PLUS, PRO] = PLANS;

const FAQS = [
  {
    q: "Which specialities does Curogrid support?",
    a: `Ten. ${SPECIALITIES.map((s) => s.appLabel).join(", ")}, and ${ALSO_SUPPORTED.map((s) => s.name.toLowerCase()).join(", ")}. The first six have a full page on this site. There is no dental setup: dentists are sent to MolarPlus.`,
  },
  {
    q: "What does choosing a speciality change?",
    a: `It adds that speciality's departments, a starter price list and its consent forms. It puts that speciality's medicine names, tests, scans and procedures first on the doctor's screen. It also sets how several visits are booked together and which card a patient's file opens on.`,
  },
  {
    q: "Can a clinic pick more than one speciality?",
    a: "Yes. Pick each one your clinic needs. The medicine, test and procedure lists are joined, and the booking drawer asks which kind of visits to book. With more than one speciality, the first card in a patient's file is titled “Treatment”.",
  },
  {
    q: "Do I pick the speciality when I sign up?",
    a: "You pick it in clinic setup, after signing up. Until you pick, Curogrid adds no services of its own. You can register a patient and make a bill before you choose.",
  },
  {
    q: "Is the price different for each speciality?",
    a: `No. ${PLUS.name} is ${rupees(PLUS.monthly)} a month and ${PRO.name} is ${rupees(PRO.monthly)} a month, before GST, for the whole clinic. Every speciality setup is included in both plans. Every clinic starts with ${TRIAL_DAYS} days of ${TRIAL_PLAN}, free.`,
  },
  {
    q: "Are the diagnoses different for each speciality?",
    a: `No. Every clinic searches the same list of ${DIAGNOSIS_COUNT} common OPD diagnoses, by name or by ICD-10 code. It includes each speciality's common diagnoses, so a family doctor can still find melasma and a skin clinic can still find diabetes.`,
  },
  {
    q: "My speciality is not on the list. Can I still use Curogrid?",
    a: "Yes. The token line, appointments, patient files, prescriptions and billing work without a speciality setup, and the general medicine and test lists are offered to every clinic. You add your own services and prices by hand.",
  },
] as const;

export default function SpecialitiesPage() {
  const explainer = getPost("speciality-specific-clinic-software");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Curogrid by speciality",
          numberOfItems: SPECIALITIES.length,
          itemListElement: SPECIALITIES.map((s, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: s.h1,
            url: `${SITE.url}/${s.slug}`,
          })),
        }}
      />

      <PageHero
        trail={[{ name: "Specialities", path: "/specialities" }]}
        title="Clinic software, set up for your speciality"
        lead={`Curogrid is clinic management software with a ready setup for ${TOTAL} medical specialities. Choose yours in clinic setup and it adds your departments, a starter price list and your consent forms, offers your medicines, tests and procedures first, and books a course of visits the way your clinic does. Six specialities are described in full below.`}
      >
        <TrialCta placement="specialities_hero" tone="dark" />
      </PageHero>

      <Section>
        <Container>
          <SectionHeader
            title="Six specialities, in detail"
            intro="Each page lists exactly what Curogrid sets up: every service, every medicine and every procedure, and what it does not do."
          />
          <ul className="border-t border-gray-200">
            {SPECIALITIES.map((s) => (
              <li key={s.slug} className="grid gap-4 border-b border-gray-200 py-8 lg:grid-cols-[16rem_1fr_auto] lg:items-start lg:gap-12">
                <h3 className="text-h3">
                  <Link href={`/${s.slug}`} className="underline-offset-4 hover:text-teal-700 hover:underline">{s.name}</Link>
                </h3>
                <div>
                  <p className="measure text-body text-gray-700">{s.card}</p>
                  <p className="measure mt-2 text-[0.9375rem] text-gray-600">For: {s.madeFor.charAt(0).toLowerCase() + s.madeFor.slice(1)}.</p>
                </div>
                <Link href={`/${s.slug}`} className="inline-flex min-h-11 items-center text-[0.9375rem] font-semibold whitespace-nowrap text-teal-700 underline underline-offset-4">
                  Curogrid for {s.doctor}s
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* The comparison */}
      <Section tone="alt">
        <Container>
          <SectionHeader
            title="What each speciality gets, side by side"
            intro="The counts are what the setup adds on the first day. Tests and scans are one tap on the visit, and procedures are one tap in a new order."
          />
          <div className="overflow-x-auto rounded-md border border-gray-200 bg-gray-0">
            <table className="w-full min-w-[56rem] border-collapse text-left text-[0.9375rem]">
              <caption className="sr-only">
                Curogrid&rsquo;s setup for six specialities: starter services, medicine names, tests and scans,
                procedures, how a course is booked and the first card in the patient&rsquo;s file
              </caption>
              <thead>
                <tr className="border-b border-gray-200 text-small text-gray-500">
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">Speciality</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Starter services</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Medicine names</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Tests and scans</th>
                  <th scope="col" className="px-4 py-3 text-right font-semibold">Procedures</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Several visits booked together</th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">File opens on</th>
                </tr>
              </thead>
              <tbody>
                {SPECIALITIES.map((s) => (
                  <tr key={s.slug} className="border-b border-gray-100 align-top last:border-0">
                    <th scope="row" className="px-4 py-3 font-semibold text-gray-900 sm:px-5">
                      <Link href={`/${s.slug}`} className="underline underline-offset-4 hover:text-teal-700">{s.name}</Link>
                    </th>
                    <td className="px-4 py-3 text-right text-gray-800" data-numeric>{s.services.length}</td>
                    <td className="px-4 py-3 text-right text-gray-800" data-numeric>
                      {s.medicines.length > 0 ? s.medicines.length : "None of its own"}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-800" data-numeric>
                      {s.tests.length + s.scans.length}
                    </td>
                    <td className="px-4 py-3 text-right text-gray-800" data-numeric>{s.procedures.length}</td>
                    <td className="px-4 py-3 text-gray-800" data-numeric>{courseWords(s.course)}</td>
                    <td className="px-4 py-3 text-gray-800 sm:px-5">“{s.fileCard.title}”</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="measure mt-4 text-small text-gray-600">
            General practice uses Curogrid&rsquo;s general lists, which every other speciality also keeps after its own
            names. Service prices are starter prices that each clinic changes. Counts are taken from the Curogrid app
            and were last checked on <time dateTime={FACTS_CHECKED.iso}>{FACTS_CHECKED.text}</time>.
          </p>
        </Container>
      </Section>

      {/* How the setup works */}
      <Section>
        <Container>
          <SectionHeader
            title="How the speciality setup works"
            intro="It is a starting point that you delete from, and it takes one step."
          />
          <ol className="grid gap-px overflow-hidden rounded-md border border-gray-200 bg-gray-200 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="bg-gray-0 p-6 lg:p-8">
                <span className="text-small font-bold text-teal-700" data-numeric>0{i + 1}</span>
                <h3 className="mt-3 text-h4">{step.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-gray-700">{step.body}</p>
              </li>
            ))}
          </ol>
          {explainer && (
            <Link href={`/blog/${explainer.slug}`} className="mt-6 inline-flex min-h-11 items-center text-[0.9375rem] font-semibold text-teal-700 underline underline-offset-4">
              What “speciality-specific” clinic software means
            </Link>
          )}
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <SectionHeader
            title="Also supported"
            intro="Curogrid has the same kind of setup for these specialities. Their pages are being written; the setup is in the product today."
          />
          <ul className="grid gap-px overflow-hidden rounded-md border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {ALSO_SUPPORTED.map((s) => (
              <li key={s.name} className="bg-gray-0 p-6">
                <h3 className="text-h4">{s.name}</h3>
                <p className="mt-2 text-[0.9375rem] text-gray-600">{s.note}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-8 border-t border-gray-200 pt-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-h4">More than one speciality under one roof?</h3>
              <p className="mt-2 text-body text-gray-700">
                Pick each one. A clinic with a gynaecologist and a paediatrician gets both setups, and
                the booking drawer offers each speciality&rsquo;s kind of course.
              </p>
            </div>
            <div>
              <h3 className="text-h4">A dental clinic?</h3>
              <p className="mt-2 text-body text-gray-700">
                Curogrid has no dental setup on purpose. Dentists are better served by{" "}
                <a href={SITE.dentalUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 underline underline-offset-4">
                  MolarPlus
                </a>
                , our software built for dental clinics.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FaqSection items={FAQS} title="Questions about the speciality setup" />

      <CtaBand placement="specialities_footer" />
    </>
  );
}
