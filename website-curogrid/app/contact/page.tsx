import type { Metadata } from "next";
import { Container, Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SocialLinks } from "@/components/SocialLinks";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS_LINE, SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Curogrid: WhatsApp, Phone and Email",
  description: "Talk to the Curogrid team in Pune by WhatsApp, phone or email, or leave your number and we will call you back the same working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        trail={[{ name: "Contact", path: "/contact" }]}
        title="Talk to us"
        lead="WhatsApp is the quickest. You can also call, write, or leave your number and we will call you back."
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <dl className="divide-y divide-gray-200 border-y border-gray-200 self-start">
              <div className="py-5">
                <dt className="text-[0.9375rem] font-semibold text-gray-500">WhatsApp</dt>
                <dd className="mt-1">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-body-lg font-semibold text-teal-700 underline underline-offset-4">
                    <WhatsAppIcon />
                    Message us on WhatsApp
                  </a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[0.9375rem] font-semibold text-gray-500">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${SITE.phone}`} className="inline-flex min-h-11 items-center text-body-lg font-semibold text-gray-900 underline-offset-4 hover:underline" data-numeric>{SITE.phoneDisplay}</a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[0.9375rem] font-semibold text-gray-500">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="inline-flex min-h-11 items-center text-body-lg font-semibold text-gray-900 underline-offset-4 hover:underline">{SITE.email}</a>
                </dd>
              </div>
              <div className="py-5">
                <dt className="text-[0.9375rem] font-semibold text-gray-500">Office</dt>
                <dd className="mt-1 text-body text-gray-900">
                  {SITE.parent}
                  <br />
                  {ADDRESS_LINE}
                </dd>
              </div>
              <SocialLinks className="py-3 [&_a]:text-gray-600 [&_a:hover]:text-teal-700" />
            </dl>

            <div>
              <h2 className="text-h3">Ask for a call back</h2>
              <p className="mt-2 mb-6 text-body text-gray-700">We usually call the same working day.</p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
