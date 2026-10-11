import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { DemoCta, TrialCta } from "@/components/Cta";
import { ProductShot } from "@/components/mockups/ProductShot";
import { SpecialityGrid } from "@/components/sections/SpecialityGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { softwareApplicationSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { SHOTS } from "@/lib/shots";
import {
  DIAGNOSIS_COUNT,
  SPECIALITIES,
  courseWords,
  getSpeciality,
  withArticle,
  type Speciality,
} from "@/lib/specialities";
import { FEATURE_PAGES } from "@/content/features";
import { GST_PERCENT, PLANS, TRIAL_DAYS, TRIAL_PLAN, rupees } from "@/content/pricing";
import { getPost } from "@/lib/blog";
import { FACTS_CHECKED } from "@/lib/site";

/**
 * One template for every speciality landing page. The pages live at the
 * site root (`/physiotherapy-clinic-management-software`), so this
 * segment would otherwise swallow any mistyped URL: `dynamicParams =
 * false` makes everything not listed in lib/specialities.ts a 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return SPECIALITIES.map((s) => ({ speciality: s.slug }));
}

type Props = { params: Promise<{ speciality: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { speciality: slug } = await params;
  const s = getSpeciality(slug);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}` });
}

/** How many names a list shows before the rest fold away. */
const FOLD_AFTER = 15;
const NAME_COLUMNS = "columns-1 gap-x-8 text-[0.9375rem] text-gray-800 sm:columns-2 xl:columns-3";

/**
 * A labelled list of names, set in columns. Renders nothing when the
 * speciality has none (a physiotherapy clinic has no medicines).
 *
 * A long list shows its first names and folds the rest into a native
 * <details>: 42 medicines in one column is a very long scroll on a
 * phone. The folded names are still in the HTML, so a crawler reads
 * every one, and no script is involved.
 */
function NameList({ title, note, items }: { title: string; note?: string; items: ReadonlyArray<string> }) {
  if (items.length === 0) return null;
  const folds = items.length > FOLD_AFTER;
  const shown = folds ? items.slice(0, FOLD_AFTER) : items;
  const folded = folds ? items.slice(FOLD_AFTER) : [];
  return (
    <div className="border-t border-gray-200 py-8 lg:grid lg:grid-cols-[16rem_1fr] lg:gap-12">
      <div>
        <h3 className="text-h4">
          {title} <span className="font-medium text-gray-500" data-numeric>({items.length})</span>
        </h3>
        {note && <p className="mt-2 text-small text-gray-600">{note}</p>}
      </div>
      <div className="mt-4 lg:mt-0">
        <ul className={NAME_COLUMNS}>
          {shown.map((item) => (
            <li key={item} className="break-inside-avoid py-1">{item}</li>
          ))}
        </ul>
        {folds && (
          <details className="group mt-2">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center text-[0.9375rem] font-semibold text-teal-700 underline underline-offset-4 group-open:hidden [&::-webkit-details-marker]:hidden">
              Show the other {folded.length}
            </summary>
            <ul className={NAME_COLUMNS}>
              {folded.map((item) => (
                <li key={item} className="break-inside-avoid py-1">{item}</li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </div>
  );
}

const TEXT_LINK = "inline-flex min-h-11 items-center text-[0.9375rem] font-semibold text-teal-700 underline underline-offset-4";

/** "Paediatrics" stays as it is; "ENT" stays in capitals; the rest go lower case mid-sentence. */
function midSentence(name: string) {
  return name === name.toUpperCase() ? name : name.toLowerCase();
}

/**
 * The questions every doctor asks whatever the speciality: price,
 * reminders, ABDM, offline and language. They are built here, from
 * content/pricing.ts, so a price change never leaves six stale answers
 * in lib/specialities.ts. They join the speciality's own questions in
 * the page's single FAQ block.
 *
 * Checked in the app on 11 October 2026:
 * - reminders: settings/notifyApi.ts (`appointment_reminder`, sent
 *   "Before the appointment"; prescription, bill and receipt messages)
 * - ABHA: patients/components/form/PatientForm.tsx ("Recorded, not yet
 *   checked with ABDM"); ABDM credentials are a phase 2 task in
 *   onboarding/checklist.py
 * - offline: the phone app's AppBanners.tsx ("Nothing can be saved
 *   until the internet is back") and consult/components/visit/VisitForm.tsx
 * - language: neither app has a translation layer; every screen is English
 */
function sharedFaqs(s: Speciality) {
  const [plus, pro] = PLANS;
  return [
    {
      q: `How much does ${s.searchTerm} cost in India?`,
      a: `Curogrid ${plus.name} is ${rupees(plus.monthly)} a month and ${pro.name} is ${rupees(pro.monthly)} a month, or ${rupees(plus.annual)} and ${rupees(pro.annual)} for a year. GST of ${GST_PERCENT}% is added. The price is for the whole clinic, not for each doctor, and the ${s.appLabel} setup is included in both plans. Every clinic starts with ${TRIAL_DAYS} days of ${TRIAL_PLAN}, free.`,
    },
    {
      q: "Does Curogrid send appointment reminders on WhatsApp?",
      a: `Yes. Curogrid sends the patient a reminder before the appointment by WhatsApp and email, and can send the prescription, the bill and the receipt the same way. On ${plus.name} the WhatsApp messages go from the Curogrid number. On ${pro.name} they go from your clinic's own number.`,
    },
    {
      q: "Is Curogrid ABDM compliant, and does it support ABHA?",
      a: "Not yet. A patient's 14-digit ABHA number can be recorded on their file, where it is marked as not checked with ABDM. Curogrid does not yet verify an ABHA number, create one or share records through ABDM.",
    },
    {
      q: "Does Curogrid work offline or in Hindi?",
      a: "No. Curogrid needs an internet connection. The phone app tells you when it is offline and saves nothing until the connection is back, and on a computer a visit you are typing is kept on that computer until it can be saved. The screens are in English only.",
    },
  ];
}

export default async function SpecialityPage({ params }: Props) {
  const { speciality: slug } = await params;
  const s = getSpeciality(slug);
  if (!s) notFound();

  const hasOwnCourse = s.course.title !== "Book several visits";
  const aClinic = withArticle(s.clinic);
  const aDoctor = withArticle(s.doctor);
  const general = SPECIALITIES.find((x) => x.key === "general_practice");
  const usesGeneralLists = s.key === "general_practice";
  const prices = s.services.map((service) => service.price);
  const guide = s.guide ? getPost(s.guide) : undefined;
  const explainer = getPost("speciality-specific-clinic-software");
  const ordered = s.tests.length + s.scans.length;

  /** The page in one table: every value is this speciality's own. */
  const glance: ReadonlyArray<[string, string]> = [
    ["Made for", s.madeFor],
    ["Setup to pick in Curogrid", `“${s.appLabel}”`],
    ["Departments added", s.departments.join(", ")],
    [
      "Starter services",
      `${s.services.length}, from ${rupees(Math.min(...prices))} to ${rupees(Math.max(...prices))}. You change every price.`,
    ],
    [
      "Medicine names offered",
      usesGeneralLists
        ? `${s.medicines.length}, the general OPD list`
        : s.medicines.length > 0
          ? `${s.medicines.length} of its own, ahead of the general list`
          : "None of its own",
    ],
    ["Tests and scans, one tap on the visit", ordered > 0 ? String(ordered) : "The general list only"],
    ["Procedures, one tap in a new order", String(s.procedures.length)],
    ["Several visits booked together", `“${s.course.title}”: ${courseWords(s.course)}`],
    ["First card in the patient's file", `“${s.fileCard.title}”`],
    ["Consent forms added", s.consents.join(", ")],
    ["Price", PLANS.map((plan) => `${plan.name} ${rupees(plan.monthly)} a month`).join(", ") + ", for the whole clinic"],
    ["Runs on", "Web browser, Android, iPhone and Windows"],
  ];

  return (
    <>
      <JsonLd
        data={{
          ...softwareApplicationSchema({
            name: `Curogrid for ${s.clinic}s`,
            description: s.metaDescription,
            path: `/${s.slug}`,
            category: `${s.name} clinic management software`,
            features: [
              ...s.points.map((p) => p.title),
              `${s.services.length} starter services with editable prices`,
              ...(s.medicines.length > 0 ? [`${s.medicines.length} medicine names offered as you type`] : []),
              `${s.procedures.length} procedures ready to order`,
              `${s.course.title}: ${courseWords(s.course)}`,
              "Tokens and the waiting line",
              "Billing with UPI, cash and card",
              "WhatsApp and email appointment reminders",
              "Phone app for Android and iPhone",
            ],
          }),
          audience: { "@type": "Audience", audienceType: s.madeFor },
          countriesSupported: "IN",
        }}
      />

      <PageHero
        trail={[
          { name: "Specialities", path: "/specialities" },
          { name: s.name, path: `/${s.slug}` },
        ]}
        title={s.h1}
        lead={s.lead}
      >
        <TrialCta placement={`speciality_hero_${s.key}`} tone="dark" />
        <DemoCta placement={`speciality_hero_${s.key}`} tone="dark" />
      </PageHero>

      {/* What the page is about, in the doctor's own search words, and the page in one table */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <h2 className="max-w-[22ch] text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">{s.overview.title}</h2>
              {s.overview.body.map((paragraph) => (
                <p key={paragraph} className="measure mt-5 text-body text-gray-700">{paragraph}</p>
              ))}
              {guide && (
                <Link href={`/blog/${guide.slug}`} className={`mt-4 ${TEXT_LINK}`}>
                  Guide: {guide.title}
                </Link>
              )}
            </div>
            <div className="overflow-x-auto rounded-md border border-gray-200 bg-gray-0">
              <table className="w-full border-collapse text-left text-[0.9375rem]">
                <caption className="border-b border-gray-200 px-4 py-3 text-left text-small font-semibold text-gray-500 sm:px-5">
                  Curogrid for {aClinic}, at a glance
                </caption>
                <tbody>
                  {glance.map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-100 align-top last:border-0">
                      <th scope="row" className="w-2/5 px-4 py-2.5 font-semibold text-gray-600 sm:px-5">{label}</th>
                      <td className="px-4 py-2.5 text-gray-900 sm:px-5" data-numeric>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* The three things true of this speciality and no other */}
      <Section tone="alt">
        <Container>
          <SectionHeader eyebrow={`For ${aClinic}`} title={`Three things Curogrid does for ${aDoctor}`} />
          <ol className="grid gap-px overflow-hidden rounded-md border border-gray-200 bg-gray-200 lg:grid-cols-3">
            {s.points.map((point, i) => (
              <li key={point.title} className="bg-gray-0 p-6 lg:p-8">
                <span className="text-small font-bold text-teal-700" data-numeric>0{i + 1}</span>
                <h3 className="mt-3 text-h4">{point.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-gray-700">{point.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Services */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">
                {s.services.length} starter services and prices for {aClinic}
              </h2>
              <p className="measure mt-5 text-body text-gray-700">
                Pick “{s.appLabel}” in clinic setup and these services are in your price list before
                your first patient. Curogrid shows you the full list first and adds nothing until you
                press the button. The prices are starter prices for a small city practice. Change every
                one, rename what you call differently and delete what you do not offer.
              </p>
              <dl className="mt-8 space-y-5 border-t border-gray-200 pt-6 text-[0.9375rem]">
                <div>
                  <dt className="font-semibold text-gray-500">Departments added</dt>
                  <dd className="mt-1 text-gray-900">{s.departments.join(", ")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Consent forms added</dt>
                  <dd className="mt-1 text-gray-900">{s.consents.join(", ")}</dd>
                </div>
              </dl>
            </div>
            <div className="overflow-x-auto rounded-md border border-gray-200 bg-gray-0">
              <table className="w-full border-collapse text-left text-[0.9375rem]">
                <caption className="sr-only">
                  Starter services for {aClinic} in Curogrid, with starter price and usual length
                </caption>
                <thead>
                  <tr className="border-b border-gray-200 text-small text-gray-500">
                    <th scope="col" className="px-4 py-3 font-semibold sm:px-5">Service</th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-5">Starter price</th>
                    <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-5">Length</th>
                  </tr>
                </thead>
                <tbody>
                  {s.services.map((service) => (
                    <tr key={service.name} className="border-b border-gray-100 last:border-0">
                      <th scope="row" className="px-4 py-2.5 font-normal text-gray-900 sm:px-5">{service.name}</th>
                      <td className="px-4 py-2.5 text-right text-gray-800 sm:px-5" data-numeric>{rupees(service.price)}</td>
                      <td className="px-4 py-2.5 text-right whitespace-nowrap text-gray-600 sm:px-5" data-numeric>{service.minutes} min</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* The doctor's screen */}
      <Section tone="alt">
        <Container>
          <SectionHeader
            eyebrow="On the doctor's screen"
            title={
              s.medicines.length > 0
                ? `Medicines, tests and procedures offered to ${aDoctor}`
                : `Therapies and scans offered to ${aDoctor}`
            }
            intro={
              s.medicines.length > 0
                ? "Medicine names appear as you type. Tests and scans are one tap on the visit, and procedures are one tap in a new order. Curogrid offers the name only: the dose, and the decision, are always the doctor's."
                : "Scans are one tap on the visit, and therapies are one tap in a new order. Curogrid offers the name only: what to do, and how much of it, is always your decision."
            }
          />
          <div className="border-b border-gray-200">
            <NameList
              title="Medicines"
              note={
                usesGeneralLists
                  ? "Offered as you type. Any other medicine can still be typed in full."
                  : "Offered as you type, ahead of the general list. Any other medicine can still be typed in full."
              }
              items={s.medicines}
            />
            <NameList title="Tests" note="One tap on the visit. Ordered when the visit is finished." items={s.tests} />
            <NameList title="Scans" note="One tap on the visit. Ordered when the visit is finished." items={s.scans} />
            <NameList title="Procedures" note="One tap in a new order, under Procedure." items={s.procedures} />
            <NameList title="Directions" note="Ready to pick in the How often and How to take lists." items={s.doseWords} />
            <NameList title="How long" note="Offered in the For box, beside the usual lengths." items={s.durationWords} />
            <NameList title="Diagnoses" note={s.diagnosisNote} items={s.diagnoses} />
          </div>
          <p className="measure mt-4 text-small text-gray-600">
            {!usesGeneralLists && general && (
              <>
                The general OPD lists stay available after these names: {general.medicines.length} medicines,{" "}
                {general.tests.length} tests and {general.scans.length} scans, listed on the{" "}
                <Link href={`/${general.slug}`} className="font-semibold text-teal-700 underline underline-offset-4">
                  general practice page
                </Link>
                .{" "}
              </>
            )}
            The diagnoses above are {s.diagnoses.length} of the {DIAGNOSIS_COUNT} in the ICD-10 list every Curogrid
            clinic searches by name or by code. A diagnosis that is not in the list is written in your own words.
            These lists are taken from the Curogrid app and were last checked on{" "}
            <time dateTime={FACTS_CHECKED.iso}>{FACTS_CHECKED.text}</time>.
          </p>
        </Container>
      </Section>

      {/* One working day */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Step by step"
            title={`A day in ${aClinic} with Curogrid`}
            intro="Each step below is something the app does today. Nothing here is planned or coming."
          />
          <ol className="border-t border-gray-200">
            {s.day.map((step, i) => (
              <li key={step.title} className="grid gap-2 border-b border-gray-200 py-6 lg:grid-cols-[16rem_1fr] lg:gap-12">
                <p className="text-small font-bold text-teal-700">
                  <span data-numeric>{i + 1}.</span> {step.where}
                </p>
                <div>
                  <h3 className="text-h4">{step.title}</h3>
                  <p className="measure mt-2 text-[0.9375rem] text-gray-700">{step.body}</p>
                  {step.href && step.linkText && (
                    <Link href={step.href} className={`mt-1 ${TEXT_LINK}`}>{step.linkText}</Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Booking and the file */}
      <Section tone="alt">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-h3">Booking visits in {aClinic}</h2>
              <p className="mt-4 text-body text-gray-700">
                {hasOwnCourse ? (
                  <>
                    The booking drawer has a switch named “{s.course.title}”. Turn it on and Curogrid
                    books {courseWords(s.course)}, at the same time of day. You can change the number and
                    the gap. Each booking then shows its place, such as “
                    {s.course.noun.charAt(0).toUpperCase() + s.course.noun.slice(1)} 2 of {s.course.count}”.
                  </>
                ) : (
                  <>
                    Most {s.clinic} visits are single visits, so booking is one step. When a patient
                    does need to come back several times, the “{s.course.title}” switch books{" "}
                    {courseWords(s.course)}, at the same time of day, and labels each one.
                  </>
                )}
              </p>
              <Link href="/features/appointments" className={`mt-4 ${TEXT_LINK}`}>
                How appointments work
              </Link>
            </div>
            <div>
              <h2 className="text-h3">The patient&rsquo;s file in {aClinic}</h2>
              <p className="mt-4 text-body text-gray-700">
                For {aClinic}, the file opens on a card titled “{s.fileCard.title}”. {s.fileCard.body} Below
                it is what the patient is on now. Allergies and long-term conditions stay at the very top
                of every file.
              </p>
              <Link href="/features/patient-records" className={`mt-4 ${TEXT_LINK}`}>
                What is in a patient&rsquo;s file
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* What it does not do */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Before you try it"
            title={`What Curogrid does not do for ${aClinic}`}
            intro={`These are the things ${aDoctor} might expect and will not find. Better to read them here than to find out in your first week.`}
          />
          <ul className="grid gap-x-12 border-t border-gray-200 md:grid-cols-2">
            {s.notDone.map((item) => (
              <li key={item.title} className="border-b border-gray-200 py-6">
                <h3 className="text-h4">{item.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-gray-700">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* What every clinic gets */}
      <Section tone="alt">
        <Container>
          <SectionHeader
            eyebrow="And the rest of the clinic"
            title="Everything else a clinic needs is already there"
            intro={`The ${midSentence(s.name)} setup sits on top of the same four screens every Curogrid clinic uses.`}
          />
          <ProductShot
            shot={SHOTS.today}
            caption="The Today screen, on a clinic we set up with invented patients. Your own screens use your services and your speciality's words."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURE_PAGES.map((feature) => (
              <li key={feature.slug} className="border-t-2 border-gray-900 pt-4">
                <h3 className="text-h4">
                  <Link href={`/features/${feature.slug}`} className="underline-offset-4 hover:text-teal-700 hover:underline">
                    {feature.name}
                  </Link>
                </h3>
                <p className="mt-2 text-[0.9375rem] text-gray-700">{feature.card}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[0.9375rem] text-gray-700">
            The doctor and the staff also use Curogrid on{" "}
            <Link href="/mobile-app" className="font-semibold text-teal-700 underline underline-offset-4">
              the phone app for Android and iPhone
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* Price */}
      <Section tone="tint" className="py-12 lg:py-16">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-h3">What Curogrid costs {aClinic}</h2>
              <p className="measure mt-3 text-body text-gray-700" data-numeric>
                {PLANS.map((plan) => `${plan.name} is ${rupees(plan.monthly)} a month`).join(" and ")}, before GST,
                for the whole clinic. The {midSentence(s.name)} setup is included in both. Every clinic starts with{" "}
                {TRIAL_DAYS} days of {TRIAL_PLAN}, free.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <TrialCta placement={`speciality_price_${s.key}`} />
              <Link href="/pricing" className="inline-flex min-h-13 items-center px-2 font-semibold text-teal-700 underline underline-offset-4">
                Compare the plans
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <FaqSection items={[...s.faqs, ...sharedFaqs(s)]} title={`Questions from ${s.doctor}s`} />

      <Section tone="alt">
        <Container>
          <SectionHeader
            eyebrow="Other specialities"
            title="More than one kind of doctor under one roof"
            intro="Pick each setup your clinic needs. The medicine and test lists are joined, and the booking drawer asks which kind of visits to book."
          />
          <SpecialityGrid exclude={s.slug} />
          <p className="mt-6 flex flex-wrap gap-x-8 gap-y-1">
            <Link href="/specialities" className={TEXT_LINK}>Compare all the specialities</Link>
            {explainer && (
              <Link href={`/blog/${explainer.slug}`} className={TEXT_LINK}>
                What “speciality-specific” clinic software means
              </Link>
            )}
          </p>
        </Container>
      </Section>

      <CtaBand
        placement={`speciality_footer_${s.key}`}
        title={`Try Curogrid in your ${s.clinic}`}
        whatsappMessage={`Hi, I run ${aClinic} and want to know more about Curogrid.`}
      />
    </>
  );
}
