import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { DemoCta, TrialCta } from "@/components/Cta";
import { ProductShot } from "@/components/mockups/ProductShot";
import { PhoneShot } from "@/components/mockups/PhoneShot";
import { StoreBadges, ANY_STORE_LIVE } from "@/components/StoreBadges";
import { AlsoSupported, SpecialityGrid } from "@/components/sections/SpecialityGrid";
import { FeatureRows } from "@/components/sections/FeatureRows";
import { PricingCards } from "@/components/sections/PricingCards";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { softwareApplicationSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { SHOTS } from "@/lib/shots";
import { SITE } from "@/lib/site";
import { SPECIALITIES, gapWords, getSpeciality } from "@/lib/specialities";
import { HOME_FAQS } from "@/content/faq";
import { DEFINITION, KEY_FACTS, SPECIALITY_COUNT } from "@/content/pages";
import { ANNUAL_SAVING_PERCENT, GST_PERCENT, INCLUDED_IN_EVERY_PLAN, PLANS, TRIAL_DAYS, TRIAL_PLAN, rupees } from "@/content/pricing";

const seo = buildMetadata({
  title: "Clinic Management Software for Indian Clinics | Curogrid",
  description:
    "Curogrid runs your clinic's tokens, appointments, patient files and bills, and sets itself up for your speciality. Web and phone. From ₹399 a month.",
  path: "/",
});

export const metadata: Metadata = {
  ...seo,
  // The layout's title template would append the brand a second time.
  title: { absolute: "Clinic Management Software for Indian Clinics | Curogrid" },
  // Tells an AI assistant where the whole site is as plain Markdown.
  alternates: { ...seo.alternates, types: { "text/markdown": `${SITE.url}/llms-full.txt` } },
};

/** Three specialities side by side, to show the product really differs.
 *  Read from the data file, so the table cannot drift from the pages. */
const COMPARE = ["physiotherapy", "dermatology", "paediatrics"].map(
  (key) => SPECIALITIES.find((s) => s.key === key)!,
);

export default function HomePage() {
  const physio = getSpeciality("physiotherapy-clinic-management-software")!;

  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />

      {/* Hero */}
      <section className="on-dark bg-teal-900 pt-12 text-teal-100 lg:pt-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-[2.25rem] leading-[1.08] font-extrabold tracking-tight text-white sm:text-display">
              Clinic management software that already knows your speciality
            </h1>
            <p className="measure mt-6 text-body-lg">
              Curogrid is clinic management software for clinics in India. It runs the clinic&rsquo;s day:
              tokens and the waiting line, appointments, patient files, prescriptions and bills, on the
              web and on the phone. Tell it you are a physiotherapist, a paediatrician or a skin
              specialist, and it sets up your services, your medicines and the way you book.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TrialCta placement="home_hero" tone="dark" />
              <DemoCta placement="home_hero" tone="dark" />
            </div>
            <p className="mt-4 text-small text-teal-200">
              {TRIAL_DAYS}-day free trial. Then from {rupees(PLANS[0].monthly)} a month for the whole clinic, before GST.
            </p>
          </div>
        </Container>
        {/* The screenshot straddles the band's lower edge. */}
        <div className="mt-12 bg-linear-to-b from-teal-900 from-55% to-gray-0 to-55% lg:mt-16">
          <Container>
            <ProductShot shot={SHOTS.today} priority />
          </Container>
        </div>
      </section>

      {/* What it is, as plain facts */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">What is Curogrid?</h2>
              <p className="measure mt-5 text-body-lg text-gray-700">{DEFINITION}</p>
              <p className="measure mt-4 text-body text-gray-700">
                The receptionist gives a token, the doctor sees the line and writes the visit, and the
                desk raises the bill and takes payment. The doctor, the compounder and the sister all
                use it, so it uses plain words.
              </p>
              <p className="measure mt-4 text-body text-gray-700">
                What sets it apart is the setup. Curogrid asks your speciality first and arrives with
                that speciality&rsquo;s services, starter prices, medicines, tests, procedures and
                consent forms. It has a setup for {SPECIALITY_COUNT} specialities.
              </p>
            </div>
            <dl className="divide-y divide-gray-200 border-y border-gray-200">
              {KEY_FACTS.map((fact) => (
                <div key={fact.term} className="grid grid-cols-[8.5rem_1fr] gap-4 py-4">
                  <dt className="text-[0.9375rem] font-semibold text-gray-500">{fact.term}</dt>
                  <dd className="text-body text-gray-900" data-numeric>{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* Specialities */}
      <Section tone="alt" id="specialities">
        <Container>
          <SectionHeader
            eyebrow="Specialities"
            title="Which specialities does Curogrid set itself up for?"
            intro={`Curogrid has a ready setup for ${SPECIALITY_COUNT} specialities. Pick yours in clinic setup and it creates the departments, a starter list of services with prices you can change, the medicines and procedures offered on the doctor's screen, and the consent forms.`}
          />
          <SpecialityGrid />
          <AlsoSupported />
        </Container>
      </Section>

      {/* Proof that it differs */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="The difference"
            title="What does each clinic get on its first day?"
            intro="The same software, three different clinics. This table is what a physiotherapy, a skin and a children's clinic each see on day one. Nothing in it was typed in by the clinic."
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-[0.9375rem]">
              <caption className="sr-only">What Curogrid sets up for three specialities</caption>
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th scope="col" className="w-[19%] py-3 pr-4 font-semibold text-gray-500">On day one</th>
                  {COMPARE.map((s) => (
                    <th key={s.slug} scope="col" className="w-[27%] px-4 py-3 text-h4 text-gray-900">
                      <Link href={`/${s.slug}`} className="underline-offset-4 hover:text-teal-700 hover:underline">{s.name}</Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="align-top text-gray-800 [&_td]:px-4 [&_td]:py-4 [&_th]:py-4 [&_th]:pr-4 [&_th]:font-semibold [&_th]:text-gray-500 [&_tr]:border-b [&_tr]:border-gray-200">
                <tr>
                  <th scope="row">Services ready to bill</th>
                  {COMPARE.map((s) => (
                    <td key={s.slug}>{s.services.length}, such as {s.services[s.services.length - 2].name.toLowerCase()} and {s.services[2].name.toLowerCase()}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">Booking a course</th>
                  {COMPARE.map((s) => (
                    <td key={s.slug}>
                      {s.course.count} {s.course.noun}s, {gapWords(s.course.everyDays)}
                      {s.course.minutes ? `, ${s.course.minutes} minutes each` : ""}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">Medicines offered</th>
                  {COMPARE.map((s) => (
                    <td key={s.slug}>
                      {s.medicines.length > 0
                        ? `${s.medicines.length}, such as ${s.medicines[0].toLowerCase()}`
                        : "None. A therapy visit has no prescription."}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">One-tap procedures</th>
                  {COMPARE.map((s) => (
                    <td key={s.slug}>{s.procedures.slice(0, 4).join(", ")}{s.procedures.length > 4 ? ` and ${s.procedures.length - 4} more` : ""}</td>
                  ))}
                </tr>
                <tr>
                  <th scope="row">First card in the patient&rsquo;s file</th>
                  {COMPARE.map((s) => (
                    <td key={s.slug}><span className="font-semibold text-gray-900">{s.fileCard.title}.</span> {s.fileCard.body}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="measure mt-6 text-[0.9375rem] text-gray-600">
            Every item is a starting point. Rename a service, delete four and reprice the rest: once
            it is set up, it is yours.
          </p>
        </Container>
      </Section>

      {/* The product, screen by screen */}
      <Section tone="alt">
        <Container>
          <SectionHeader
            eyebrow="The product"
            title="What does Curogrid do during the clinic's day?"
            intro="Four screens run most of the day: the waiting line, the appointment book, the patient's file and billing. These are pictures of the real software, on a clinic we set up with invented patients."
          />
          <FeatureRows />
          <p className="mt-12 text-body">
            <Link href="/features" className="font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800">
              See everything Curogrid does
            </Link>
          </p>
        </Container>
      </Section>

      {/* The whole staff, and the phone */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-small font-bold tracking-wider text-teal-700 uppercase">On the phone</p>
              <h2 className="max-w-[18ch] text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">
                Does Curogrid work on a phone?
              </h2>
              <p className="measure mt-5 text-body-lg text-gray-700">
                Yes. Curogrid has a phone app for Android and iPhone, so the doctor does not need the
                computer. It shows the line, the wait and the day&rsquo;s money. The doctor calls the next
                patient from the consulting room, opens the file and sees what was written last time.
              </p>
              <ul className="mt-6 space-y-3 text-body text-gray-800">
                <li><span className="font-semibold text-gray-900">My line.</span> Tokens in order, each with its wait, and a Call next button.</li>
                <li><span className="font-semibold text-gray-900">Home.</span> Waiting now, taken today, still to collect.</li>
                <li><span className="font-semibold text-gray-900">Patients and bills.</span> The same files and the same bills as the desk.</li>
              </ul>
              <StoreBadges className="mt-8" />
              {!ANY_STORE_LIVE && (
                <p className="mt-3 text-small text-gray-600">
                  The store listings are on their way. <Link href="/mobile-app" className="font-semibold text-teal-700 underline underline-offset-4">More about the phone app</Link>
                </p>
              )}
            </div>
            <div className="relative flex justify-center gap-5 sm:gap-8">
              <PhoneShot shot={SHOTS.phoneLine} className="max-w-[240px]" sizes="240px" />
              <PhoneShot shot={SHOTS.phoneHome} className="mt-12 hidden max-w-[240px] sm:block" sizes="240px" />
            </div>
          </div>
        </Container>
      </Section>

      {/* A worked example, in words */}
      <Section tone="dark">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div className="relative aspect-[3/2] overflow-hidden rounded-md">
              {/* Black and white under teal, with no name and no quote:
                  see public/photos/CREDITS.md for why. */}
              <Image
                src="/photos/doctor-reading.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover grayscale"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-teal-700/45" />
            </div>
            <div>
              <h2 className="max-w-[20ch] text-[1.75rem] leading-tight font-bold tracking-tight text-white sm:text-h2">
                A physiotherapy clinic&rsquo;s first morning
              </h2>
              <ol className="mt-6 space-y-5 text-body text-teal-100">
                <li>
                  <span className="font-semibold text-white">Sign up, then pick Physiotherapy in clinic setup.</span>{" "}
                  {physio.services.length} services are ready, from {physio.services[0].name.toLowerCase()} at{" "}
                  {rupees(physio.services[0].price)} to a {physio.services[8].name.toLowerCase()}. Change any price.
                </li>
                <li>
                  <span className="font-semibold text-white">Book the first patient&rsquo;s course.</span>{" "}
                  One switch books {physio.course.count} sessions, {gapWords(physio.course.everyDays)}, {physio.course.minutes} minutes each.
                </li>
                <li>
                  <span className="font-semibold text-white">Record the session.</span>{" "}
                  {physio.procedures.slice(0, 3).join(", ")} and {physio.procedures.length - 3} more therapies are one tap. There is no medicine list in the way.
                </li>
                <li>
                  <span className="font-semibold text-white">Bill and move on.</span>{" "}
                  Raise the bill and take payment by UPI, cash or card. The patient&rsquo;s file now shows 1 of {physio.course.count} done.
                </li>
              </ol>
              <Link
                href={`/${physio.slug}`}
                className="mt-6 inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4 hover:text-teal-200"
              >
                Curogrid for physiotherapy clinics
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Pricing"
            title="How much does Curogrid cost?"
            intro={`${PLANS[0].name} is ${rupees(PLANS[0].monthly)} a month and ${PLANS[1].name} is ${rupees(PLANS[1].monthly)} a month, before ${GST_PERCENT}% GST. The price is for the whole clinic, however many doctors it has. Paying for the year costs ${ANNUAL_SAVING_PERCENT}% less, and every clinic starts with a ${TRIAL_DAYS}-day free trial of ${TRIAL_PLAN}.`}
          />
          <PricingCards placement="home_pricing" />
          <div className="mt-10 border-t border-gray-200 pt-8">
            <h3 className="text-h4">In both plans</h3>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.9375rem] text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
              {INCLUDED_IN_EVERY_PLAN.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-body">
              <Link href="/pricing" className="font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800">
                Full pricing details
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      <FaqSection items={HOME_FAQS} tone="alt" />
      <CtaBand placement="home_footer" />
    </>
  );
}
