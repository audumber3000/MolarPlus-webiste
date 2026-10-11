import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS_LINE, SITE } from "@/lib/site";
import { BELIEFS, SPECIALITY_COUNT } from "@/content/pages";

export const metadata: Metadata = buildMetadata({
  title: "About Curogrid: Clinic Software from Clino Health",
  description:
    "Curogrid is clinic software from Clino Health, Pune, the company behind MolarPlus. It is built for Indian clinics and for the whole staff, not only the doctor.",
  path: "/about",
});

export default function AboutPage() {
  const total = SPECIALITY_COUNT;
  return (
    <>
      <PageHero
        trail={[{ name: "About", path: "/about" }]}
        title="About Curogrid: software for the clinic down the road"
        lead={`Curogrid is clinic management software made by ${SITE.parent}, a software company in Pune, India. We build it for the everyday Indian clinic: one or a few doctors, a small front desk and a full waiting room. ${SITE.parent} also makes MolarPlus, for dental clinics.`}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="measure space-y-5 text-body-lg text-gray-700">
              <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight text-gray-900 sm:text-h2">Why was Curogrid built?</h2>
              <p>
                Curogrid was built because one clinic software does not fit every kind of doctor. Our
                first product, MolarPlus, is for dental clinics, and it is built around teeth. That is
                exactly why it would not suit anyone else. A skin clinic thinks in sessions. A
                paediatrician thinks in weight and vaccines. A physiotherapist does not write
                prescriptions at all.
              </p>
              <p>
                Curogrid is our answer. It is one product that sets itself up for {total} specialities,
                so each clinic meets software that already speaks its language.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              {/* No name and no quote beside this photo: see public/photos/CREDITS.md. */}
              <Image src="/photos/doctor-woman.jpg" alt="" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover grayscale" />
              <div aria-hidden="true" className="absolute inset-0 bg-teal-700/40" />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="alt">
        <Container>
          <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">What does Curogrid hold to?</h2>
          <dl className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {BELIEFS.map((belief) => (
              <div key={belief.title} className="border-t border-gray-300 py-6">
                <dt className="text-h4 text-gray-900">{belief.title}</dt>
                <dd className="mt-2 text-body text-gray-700">{belief.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2">Who makes Curogrid?</h2>
          <p className="measure mt-4 text-body-lg text-gray-700">
            Curogrid is made by {SITE.parent}, whose office is in Pune, Maharashtra. The same company
            makes MolarPlus for dental clinics and dental labs.
          </p>
          <dl className="mt-8 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-[0.9375rem] font-semibold text-gray-500">Made by</dt>
              <dd className="text-body text-gray-900">
                <a href={SITE.parentUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 underline underline-offset-4">{SITE.parent}</a>
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-[0.9375rem] font-semibold text-gray-500">Office</dt>
              <dd className="text-body text-gray-900">{ADDRESS_LINE}</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-[0.9375rem] font-semibold text-gray-500">Also from us</dt>
              <dd className="text-body text-gray-900">
                <a href={SITE.dentalUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 underline underline-offset-4">MolarPlus</a>, for dental clinics and dental labs
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-[0.9375rem] font-semibold text-gray-500">Reach us</dt>
              <dd className="text-body text-gray-900">
                <a href={`tel:${SITE.phone}`} className="underline-offset-4 hover:underline">{SITE.phoneDisplay}</a>,{" "}
                <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:underline">{SITE.email}</a>
              </dd>
            </div>
          </dl>
        </Container>
      </Section>

      <CtaBand placement="about_footer" />
    </>
  );
}
