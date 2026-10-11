import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { SIGNUP_URL } from "@/lib/site";
import { TRIAL_DAYS } from "@/content/pricing";

export const metadata: Metadata = buildMetadata({
  title: "Book a Curogrid Demo for Your Clinic",
  description: "See Curogrid set up for your speciality. Leave your number and we will call to arrange a short demo, at a time that suits your clinic.",
  path: "/book-demo",
});

const STEPS = [
  { title: "We call you", body: "Usually the same working day, to ask your speciality and fix a time outside your OPD hours." },
  { title: "We show you your clinic", body: "A short screen-share with Curogrid set up for your speciality: your services, your medicines, your kind of booking." },
  { title: "You try it yourself", body: `Start the ${TRIAL_DAYS}-day trial on your own clinic. Ask us anything on WhatsApp while you do.` },
];

export default function BookDemoPage() {
  return (
    <>
      <PageHero
        trail={[{ name: "Book a demo", path: "/book-demo" }]}
        title="See it set up for your speciality"
        lead="Leave your number. We will call, ask what kind of clinic you run, and show you Curogrid the way your clinic would see it."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <h2 className="text-h3">What happens next</h2>
              <ol className="mt-6 border-t border-gray-200">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[2.5rem_1fr] border-b border-gray-200 py-5">
                    <span className="text-small font-bold text-teal-700" data-numeric>0{i + 1}</span>
                    <div>
                      <h3 className="text-h4">{step.title}</h3>
                      <p className="mt-1 text-[0.9375rem] text-gray-700">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[0.9375rem] text-gray-700">
                Would you rather just try it?{" "}
                <a href={SIGNUP_URL} className="font-semibold text-teal-700 underline underline-offset-4">Start the free trial</a>.
              </p>
            </div>
            <ContactForm
              topic="demo"
              askClinic
              messageLabel="Your speciality, and a good time to call"
              messagePlaceholder="For example: skin clinic, two doctors. Call after 2 pm."
              submitLabel="Book my demo"
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
