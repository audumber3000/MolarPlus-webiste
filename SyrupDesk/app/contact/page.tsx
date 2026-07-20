import { Card } from "@/components/ui/Card";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS_LINE, SITE, whatsappLink } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact — talk to us about your pharmacy",
  description:
    "Message SyrupDesk on WhatsApp or request a call back. We will set up your stock list, answer GST questions and show you the billing screen on your own data.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Section tone="tint" className="pt-12 pb-14 lg:pt-16 lg:pb-16">
        <Container>
          <SectionHeader
            as="h1"
            eyebrow="Contact"
            title="Talk to a person, not a form"
            intro="WhatsApp is the fastest way to reach us and it is what most owners use. If you would rather we call you, leave your number below."
          />
        </Container>
      </Section>

      <Section className="pt-0 lg:pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="space-y-6">
              <Card>
                <h2 className="text-h4 text-ink-900">WhatsApp</h2>
                <p className="mt-2 text-body text-ink-700">
                  Ask anything — pricing, GST, whether it will work with your printer. You will get a
                  reply from someone who knows the product.
                </p>
                <ButtonLink
                  href={whatsappLink()}
                  size="md"
                  className="mt-4 w-full sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message us on WhatsApp
                </ButtonLink>
              </Card>

              <Card>
                <h2 className="text-h4 text-ink-900">Phone</h2>
                <p className="mt-2 text-body text-ink-700">
                  If you would rather just talk to someone, call us. Monday to Saturday, 10am to 7pm.
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="mt-4 inline-flex min-h-11 items-center text-body font-medium text-green-700 underline underline-offset-4"
                >
                  {SITE.phoneDisplay}
                </a>
              </Card>

              <Card>
                <h2 className="text-h4 text-ink-900">Email</h2>
                <p className="mt-2 text-body text-ink-700">
                  Better for anything with attachments — a stock list, a distributor bill, a GST
                  query with figures.
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-4 inline-flex min-h-11 items-center text-body font-medium text-green-700 underline underline-offset-4"
                >
                  {SITE.email}
                </a>
              </Card>

              <Card>
                <h2 className="text-h4 text-ink-900">Moving from other software?</h2>
                <p className="mt-2 text-body text-ink-700">
                  Send us your existing stock list in whatever form you have it — Excel, a backup
                  file, or a printout. We import it for you before you start, at no charge.
                </p>
              </Card>

              <Card>
                <h2 className="text-h4 text-ink-900">Office</h2>
                <p className="mt-2 text-body text-ink-700">
                  {SITE.parent} — the team behind SyrupDesk.
                </p>
                <address className="mt-2 text-body not-italic text-ink-700">{ADDRESS_LINE}</address>
              </Card>
            </div>

            <div>
              <h2 className="text-h3 text-ink-900">Request a call back</h2>
              <p className="measure mt-3 mb-8 text-body text-ink-700">
                Leave your number and we will call you, usually the same working day. No sales
                script — we will just answer what you ask.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
