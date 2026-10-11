import type { Metadata } from "next";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { PhoneShot } from "@/components/mockups/PhoneShot";
import { StoreBadges, ANY_STORE_LIVE } from "@/components/StoreBadges";
import { TrialCta } from "@/components/Cta";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { MOBILE_FAQS, MOBILE_SCREENS, MOBILE_TASKS } from "@/content/pages";

export const metadata: Metadata = buildMetadata({
  title: "Clinic App for Doctors on Android and iPhone",
  description:
    "The Curogrid phone app: see the waiting line, call the next patient, open a patient's file and check the day's collection. Android and iPhone.",
  path: "/mobile-app",
});

export default function MobileAppPage() {
  return (
    <>
      <PageHero
        trail={[{ name: "Mobile app", path: "/mobile-app" }]}
        title="The Curogrid phone app for doctors and clinic staff"
        lead="The Curogrid phone app is the Android and iPhone version of Curogrid clinic software. It signs in to the same clinic as the web version. The doctor sees the line, calls the next patient and writes the visit, the desk gives tokens and takes payments, and the owner checks the day's money from anywhere."
      >
        {ANY_STORE_LIVE ? <StoreBadges /> : <TrialCta placement="mobile_hero" tone="dark" />}
      </PageHero>

      <Section>
        <Container>
          {!ANY_STORE_LIVE && (
            <div className="mb-12 rounded-md border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-h4">The store listings are on their way</h2>
              <p className="measure mt-2 text-body text-gray-700">
                The Android and iPhone apps are being listed on Google Play and the App Store. Until
                then, start on the web: the phone app signs in to the same clinic when it arrives.
              </p>
              <StoreBadges className="mt-5" />
            </div>
          )}
          <SectionHeader
            title="What can you do in the Curogrid phone app?"
            intro="Four screens are used every day: Home, My line, the patient's file and Bills. These are pictures of the real app, on a clinic we set up with invented patients."
          />
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {MOBILE_SCREENS.map((screen) => (
              <li key={screen.title} className="flex flex-col items-start">
                <PhoneShot shot={screen.shot} sizes="(min-width: 1024px) 260px, 280px" />
                <h3 className="mt-6 text-h4">{screen.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-gray-700">{screen.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <SectionHeader
            title="Who uses the phone app, and for what?"
            intro="Each person signs in as themselves and sees the screens their role allows."
          />
          <div className="overflow-x-auto rounded-md border border-gray-200 bg-gray-0">
            <table className="w-full min-w-[520px] border-collapse text-left text-body">
              <caption className="sr-only">What each person in the clinic does in the Curogrid phone app</caption>
              <thead>
                <tr className="border-b border-gray-300">
                  <th scope="col" className="w-[30%] px-5 py-4 text-[0.9375rem] font-semibold text-gray-500">Who</th>
                  <th scope="col" className="px-5 py-4 text-[0.9375rem] font-semibold text-gray-500">What they do on the phone</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {MOBILE_TASKS.map((task) => (
                  <tr key={task.who} className="border-b border-gray-100 last:border-0">
                    <th scope="row" className="px-5 py-4 font-semibold text-gray-900">{task.who}</th>
                    <td className="px-5 py-4 text-gray-800">{task.does}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <FaqSection items={MOBILE_FAQS} title="Questions about the phone app" />
      <CtaBand placement="mobile_footer" />
    </>
  );
}
