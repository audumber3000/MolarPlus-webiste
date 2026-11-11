import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { DemoCta, TrialCta } from "@/components/Cta";
import { ProductShot } from "@/components/mockups/ProductShot";
import { PhoneShot } from "@/components/mockups/PhoneShot";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StoreBadges } from "@/components/StoreBadges";
import { AlsoSupported } from "@/components/sections/SpecialityGrid";
import { SpecialityChooser } from "@/components/sections/SpecialityChooser";
import { SpecialityPills } from "@/components/sections/SpecialityPills";
import { PainPoints } from "@/components/sections/PainPoints";
import { ScreenGrid } from "@/components/sections/ScreenGrid";
import { TrustBand } from "@/components/sections/TrustBand";
import { ClientWall } from "@/components/sections/ClientWall";
import { Testimonials } from "@/components/sections/Proof";
import { PriceStrip } from "@/components/sections/PriceStrip";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { softwareApplicationSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { SHOTS } from "@/lib/shots";
import { APP_LINKS, SITE } from "@/lib/site";
import { HOME_FAQS } from "@/content/faq";
import { FEATURE_PAGES } from "@/content/features";
import { DEFINITION, SPECIALITY_COUNT } from "@/content/pages";
import { PLANS, TRIAL_DAYS, rupees } from "@/content/pricing";

const seo = buildMetadata({
  title: "Clinic Management Software for Indian Clinics | Curogrid",
  description:
    "Curogrid runs your clinic's tokens, appointments, patient files and bills, and sets itself up for your speciality. Web and phone. From ₹420 a month.",
  path: "/",
});

export const metadata: Metadata = {
  ...seo,
  // The layout's title template would append the brand a second time.
  title: { absolute: "Clinic Management Software for Indian Clinics | Curogrid" },
  // Tells an AI assistant where the whole site is as plain Markdown.
  alternates: { ...seo.alternates, types: { "text/markdown": `${SITE.url}/llms-full.txt` } },
};

/**
 * The homepage tells one story, in this order: pick your kind of clinic,
 * what goes wrong in a clinic's day and what Curogrid does about it, the
 * four screens that run the day, who makes it, the phone, the price.
 * The long facts (the facts table, the day-one comparison, the full plan
 * cards) live on /about, /specialities and /pricing.
 */
const card = (slug: string) => FEATURE_PAGES.find((f) => f.slug === slug)!;

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />

      {/* Hero */}
      <section className="on-dark bg-teal-900 text-teal-100">
        <div className="relative overflow-hidden pt-12 lg:pt-20">
          <HeroPhoto src="/photos/heroes/home.jpg" />
          <Container className="relative">
            <div className="max-w-3xl lg:max-w-[40rem]">
              <h1 className="text-[2.25rem] leading-[1.08] font-extrabold tracking-tight text-white sm:text-display">
                Clinic management software that is ready for your speciality on day one
              </h1>
              <p className="measure mt-6 text-body-lg">{DEFINITION}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <TrialCta placement="home_hero" tone="dark" />
                <DemoCta placement="home_hero" tone="dark" />
              </div>
              <p className="mt-4 text-small text-teal-200" data-numeric>
                {TRIAL_DAYS}-day free trial. Then from {rupees(PLANS[0].monthly)} a month for the whole clinic, before GST.
              </p>
            </div>
            <div className="mt-10 lg:max-w-[52rem]">
              <SpecialityPills tone="dark" label="Pick your speciality" />
            </div>
          </Container>
        </div>
        {/* The screenshot straddles the band's lower edge. */}
        <div className="mt-12 bg-linear-to-b from-teal-900 from-55% to-gray-0 to-55% lg:mt-16">
          <Container>
            <ProductShot shot={SHOTS.today} priority />
          </Container>
        </div>
      </section>

      <ClientWall />

      {/* Pick your speciality */}
      <Section tone="alt" id="specialities">
        <Container>
          <SectionHeader
            eyebrow="Ten editions"
            title={`Curogrid comes set up for ${SPECIALITY_COUNT} kinds of clinic`}
            intro="Pick yours. Each page shows that edition's own screens, services and starter prices."
          />
          <SpecialityChooser />
          <AlsoSupported />
        </Container>
      </Section>

      {/* What goes wrong, and the fix */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="The busy morning"
            title="What goes wrong in a clinic's day, and what Curogrid does about it"
          />
          <PainPoints />
        </Container>
      </Section>

      {/* The screens */}
      <Section tone="alt">
        <Container>
          <SectionHeader
            eyebrow="The product"
            title="Four screens run the day"
            intro="Real pictures of the software, on a clinic we set up with invented patients."
          />
          <ScreenGrid
            items={[
              { shot: SHOTS.appointments, caption: card("appointments").card, href: "/features/appointments", label: "Appointments" },
              { shot: SHOTS.file, caption: card("patient-records").card, href: "/features/patient-records", label: "Patient files" },
              { shot: SHOTS.billing, caption: card("billing").card, href: "/features/billing", label: "Billing" },
              { shot: SHOTS.dashboard, caption: "The owner's dashboard: today's money, patients seen and what is still owed.", href: "/features", label: "Everything Curogrid does" },
            ]}
          />
        </Container>
      </Section>

      <TrustBand />

      {/* On the phone */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="mb-3 text-small font-bold tracking-wider text-teal-700 uppercase">On the phone</p>
              <h2 className="max-w-[20ch] text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">Does Curogrid work on a phone?</h2>
              <p className="measure mt-5 text-body-lg text-gray-700">
                Yes. The doctor calls the next patient from the consulting room and opens the same file the desk sees.
              </p>
              <ul className="mt-6 space-y-3 text-body text-gray-800">
                <li><span className="font-semibold text-gray-900">My line.</span> Tokens in order, each with its wait, and a Call next button.</li>
                <li><span className="font-semibold text-gray-900">Home.</span> Waiting now, taken today, still to collect.</li>
                <li><span className="font-semibold text-gray-900">Patients and bills.</span> The same files and the same bills as the desk.</li>
              </ul>
              <StoreBadges className="mt-8" />
              <p className="mt-3 text-small text-gray-600">
                {APP_LINKS.appStore ? "" : "The iPhone app is not in the App Store yet. "}
                <Link href="/mobile-app" className="font-semibold text-teal-700 underline underline-offset-4">More about the phone app</Link>
              </p>
            </div>
            <div className="relative flex justify-center gap-5 sm:gap-8">
              <PhoneShot shot={SHOTS.phoneLine} className="max-w-[240px]" sizes="240px" />
              <PhoneShot shot={SHOTS.phoneHome} className="mt-12 hidden max-w-[240px] sm:block" sizes="240px" />
            </div>
          </div>
        </Container>
      </Section>

      <Testimonials speciality="all" doctorWord="doctors" />

      <PriceStrip placement="home_price" note="Every feature is in both plans." />
      <FaqSection items={HOME_FAQS} tone="alt" />
      <CtaBand placement="home_footer" />
    </>
  );
}
