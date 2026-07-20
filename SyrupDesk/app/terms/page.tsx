import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { Prose } from "@/components/blog/Prose";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { SITE, ADDRESS_LINE } from "@/lib/site";
import { LAST_UPDATED, LEGAL } from "@/content/legal";

/**
 * NOT LEGALLY REVIEWED — see content/legal.ts. The limitation of
 * liability, indemnity and jurisdiction clauses in particular are the
 * ones a solicitor will want to rewrite for the actual entity and its
 * insurance position. Do not treat these as settled.
 */
export const metadata = buildMetadata({
  title: "Terms of service",
  description:
    "The terms for using SyrupDesk pharmacy management software — plans and payment, what you and we are each responsible for, data export, and what happens if you stop paying.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of service", path: "/terms" },
        ])}
      />

      <Section tone="tint" className="pt-12 pb-12 lg:pt-16 lg:pb-14">
        <Container>
          <div className="measure">
            <h1 className="text-[1.75rem] leading-tight font-bold tracking-tight text-ink-900 sm:text-h2">
              Terms of service
            </h1>
            <p className="mt-4 text-body text-ink-500">Last updated: {LAST_UPDATED}</p>
          </div>
        </Container>
      </Section>

      <Section className="py-12 lg:py-16">
        <Container>
          <Prose>
            <p>
              These terms are the agreement between you and {LEGAL.entity} ({ADDRESS_LINE}) for
              use of {SITE.name}. By creating an account you accept them. If you are accepting on
              behalf of a business, you confirm you are authorised to do so.
            </p>

            <h2>The service</h2>
            <p>
              {SITE.name} is software for running a retail pharmacy — billing, inventory and
              expiry, purchases, customers and GST reporting. We provide it as a hosted service
              over the internet. We may add, change or remove features; where a change materially
              reduces what you are paying for, we will tell you in advance.
            </p>

            <h2>Accounts</h2>
            <p>
              You are responsible for what happens under your account, including keeping your
              password private and controlling who at your shop has a login. Tell us promptly if
              you think someone has gained access they should not have.
            </p>
            <p>
              The details you give us — including your GSTIN and drug licence number — must be
              accurate, because your invoices and returns are generated from them.
            </p>

            <h2>What you remain responsible for</h2>
            <p>
              This section matters more in a pharmacy than in most businesses, so we would rather
              be blunt than reassuring.
            </p>
            <p>
              {SITE.name} is a record-keeping tool. It does not replace your professional and
              legal obligations as a pharmacy. You remain responsible for holding a valid drug
              licence, for dispensing lawfully and against a valid prescription where one is
              required, for the accuracy of what you file with the tax authorities, and for
              verifying the medicines you sell.
            </p>
            <p>
              Features such as expiry alerts and the medicine database are aids, not guarantees. A
              batch we fail to flag is still a batch you must not sell, and a figure in a GST
              report is still yours to check before you file it. Do not treat the software as a
              substitute for your own judgement.
            </p>

            <h2>Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use {SITE.name} for anything unlawful, including unlawful supply of medicines.</li>
              <li>Enter personal data you have no lawful basis to hold.</li>
              <li>
                Attempt to breach the security of the service, access other customers&rsquo; data,
                or probe the system without our written permission.
              </li>
              <li>Resell or white-label the service without an agreement with us.</li>
            </ul>

            <h2>Plans, fees and tax</h2>
            <p>
              Current plans and prices are on the <Link href="/pricing">pricing page</Link>. The
              free plan is genuinely free and does not require a card.
            </p>
            <p>
              Paid plans are billed in advance for the period you choose. Fees are exclusive of
              GST unless stated, and GST is charged at the applicable rate. If we change prices, we
              will give you notice before your next renewal, and the new price applies from that
              renewal rather than immediately.
            </p>
            <p>
              If a payment fails we will try again and tell you. Continued non-payment may lead to
              the account moving to read-only, as described below.
            </p>

            <h2>Your data</h2>
            <p>
              Your data stays yours. We claim no ownership of the records you create, and our
              handling of them is described in our <Link href="/privacy">privacy policy</Link>.
            </p>
            <p>
              You can export your stock, customer and sales records at any time while your account
              is active, in a format you can open elsewhere.
            </p>

            <h2>Suspension, closure and what happens to your records</h2>
            <p>
              You can close your account whenever you like. We may suspend an account for
              non-payment, or for a serious breach of these terms — for instance an attempt to
              compromise the service or unlawful use.
            </p>
            <p>
              If you stop paying, your account becomes <strong>read-only</strong>. You keep access
              to your records and can export them. We do not delete your data to force a renewal,
              and we do not hold it hostage. We will give you clear notice before any eventual
              deletion, and a reasonable opportunity to export first.
            </p>

            <h2>Availability and support</h2>
            <p>
              We work to keep {SITE.name} available and take regular backups, but we do not promise
              uninterrupted service. Maintenance, faults and problems at our suppliers can all
              cause downtime. Where we plan maintenance we will try to give notice and to schedule
              it outside normal shop hours.
            </p>
            <p>
              Support is provided over WhatsApp, phone and email during business hours. We do not
              charge extra for being allowed to talk to us.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The software, its design and the {SITE.name} name remain ours. You get a
              non-exclusive, non-transferable right to use the service for your own pharmacy
              business for as long as your account is in good standing.
            </p>

            <h2>Liability</h2>
            <p>
              {/* TODO (blocks launch): a solicitor must set the liability cap
                  against the actual entity and its insurance. The 12-month-fees
                  figure below is a common starting point, not advice, and it is
                  subject to the parts of Indian law that cannot be contracted
                  out of. */}
              Nothing in these terms excludes liability that cannot lawfully be excluded. Subject
              to that, and to the maximum extent Indian law permits: the service is provided as
              is; we are not liable for indirect or consequential loss, including lost profits or
              lost business; and our total liability in connection with the service is limited to
              the fees you paid us in the twelve months before the claim arose.
            </p>
            <p>
              You are responsible for keeping your own records as your regulatory obligations
              require, and for the consequences of decisions you take using the software.
            </p>

            <h2>Changes to these terms</h2>
            <p>
              We may update these terms. The date at the top shows when. If a change materially
              affects your rights we will tell you in the product or by email before it takes
              effect, rather than changing the page quietly.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by the laws of India, and the courts at{" "}
              {LEGAL.jurisdiction} have exclusive jurisdiction.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
              {SITE.phoneDisplay}. Our address is {ADDRESS_LINE}.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
