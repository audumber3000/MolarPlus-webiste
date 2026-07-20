import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { Prose } from "@/components/blog/Prose";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { SITE, ADDRESS_LINE } from "@/lib/site";
import { LAST_UPDATED, LEGAL } from "@/content/legal";

/**
 * NOT LEGALLY REVIEWED — see content/legal.ts. Structurally complete and
 * drafted around the DPDP Act 2023, but the TODOs in that file are facts
 * only the business can supply, and the Grievance Officer is a statutory
 * requirement rather than an optional extra.
 */
export const metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "How SyrupDesk collects, uses and protects data for pharmacies in India — what we hold, who can see it, how long we keep it, and the rights you have under the DPDP Act 2023.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy" },
        ])}
      />

      <Section tone="tint" className="pt-12 pb-12 lg:pt-16 lg:pb-14">
        <Container>
          <div className="measure">
            <h1 className="text-[1.75rem] leading-tight font-bold tracking-tight text-ink-900 sm:text-h2">
              Privacy policy
            </h1>
            <p className="mt-4 text-body text-ink-500">Last updated: {LAST_UPDATED}</p>
          </div>
        </Container>
      </Section>

      <Section className="py-12 lg:py-16">
        <Container>
          <Prose>
            <p>
              This policy explains what {SITE.name} does with data. {SITE.name} is pharmacy
              management software operated by {LEGAL.entity}, at {ADDRESS_LINE}. It covers both
              this website and the {SITE.name} application.
            </p>
            <p>
              We have tried to write it in plain language. Where a term has a specific meaning
              under Indian law we have said so rather than hiding it.
            </p>

            <h2>Two different kinds of data</h2>
            <p>
              This is the most important section, because the answers below depend on it.
            </p>
            <p>
              <strong>Your pharmacy&rsquo;s own data.</strong> Your name, your shop&rsquo;s name and
              address, your phone number and email, your licence details, your billing
              information. For this data we decide how it is used, which under the Digital
              Personal Data Protection Act 2023 makes us the <strong>Data Fiduciary</strong>.
            </p>
            <p>
              <strong>Your customers&rsquo; data.</strong> The patient names, phone numbers,
              prescriptions and purchase history that <em>you</em> enter while running your shop.
              We only hold this because you put it there. You decide what to collect and why,
              which makes you the Data Fiduciary for it and makes us your{" "}
              <strong>Data Processor</strong>. We act on your instructions.
            </p>
            <p>
              In practice this means we do not sell, mine, rent or market to your customer list.
              We do not contact your customers. We do not use their records to build products, and
              we do not use them to train machine-learning models.
            </p>

            <h2>What we collect</h2>
            <p>From you, when you sign up and use the product:</p>
            <ul>
              <li>Account details — name, pharmacy name, address, phone number, email.</li>
              <li>
                Licence and tax identifiers you choose to store, such as your GSTIN and drug
                licence number, because invoices and GST returns require them.
              </li>
              <li>
                Operational records you create — stock, batches and expiry dates, purchase bills,
                sales invoices, returns, suppliers.
              </li>
              <li>
                Payment information if you are on a paid plan. Card details are handled by our
                payment provider; we do not store full card numbers.
              </li>
              <li>
                Technical logs — IP address, device and browser type, timestamps and error traces.
                These exist so we can keep the service running and investigate faults.
              </li>
            </ul>
            <p>From your customers, entered by you:</p>
            <ul>
              <li>Name and contact number.</li>
              <li>
                Purchase history, and prescription details where you record them. Health-related
                information deserves particular care and we treat it accordingly.
              </li>
            </ul>
            <p>From visitors to this website:</p>
            <ul>
              <li>
                Basic analytics about pages visited and how you arrived. Anything you type into
                the contact form, so we can reply.
              </li>
            </ul>

            <h2>Why we process it</h2>
            <ul>
              <li>To provide the service — billing, inventory, reporting, backups.</li>
              <li>To support you when you ask for help.</li>
              <li>To take payment and issue our own invoices to you.</li>
              <li>
                To keep the service secure and reliable, including investigating abuse and faults.
              </li>
              <li>
                To meet our own legal obligations — for example retaining our accounting records
                for the period Indian tax law requires.
              </li>
            </ul>
            <p>
              We do not use your operational data for advertising, and we do not build profiles of
              your customers.
            </p>

            <h2>Who else can see it</h2>
            <p>
              We share data with service providers who help us run {SITE.name} — hosting, backups,
              payment processing, email delivery and error monitoring. They are bound to use it
              only to provide that service to us.
            </p>
            <p>
              {/* TODO (blocks launch): name the actual sub-processors and the
                  hosting region. Until this list is published the paragraph
                  above is accurate but unhelpfully vague, and a pharmacy
                  cannot make an informed decision from it. */}
              We will also disclose data where we are legally required to — a valid order from a
              court or a regulator, for example. If that happens and we are permitted to tell you,
              we will.
            </p>
            <p>
              We do not sell personal data. We have never done so and the business does not depend
              on it.
            </p>

            <h2>How long we keep it</h2>
            <p>
              While your account is active, we keep your data so the product works. Records like
              invoices and GST filings need to be retained for the periods Indian tax law sets,
              and both you and we are bound by that — those cannot simply be deleted on request.
            </p>
            <p>
              If you close your account, you can export your data first (see{" "}
              <Link href="/terms">our terms</Link>). After closure we retain records only for as
              long as we have a legal reason to, then delete or anonymise them. Backups are
              overwritten on a rolling cycle.
            </p>

            <h2>Security</h2>
            <p>
              Data is encrypted in transit. Access inside our team is limited to the people who
              need it to support you, and support access to your account is logged. We take
              regular backups.
            </p>
            <p>
              No system is perfectly secure, and we would rather say that than imply otherwise. If
              a breach affects your data we will notify you and the Data Protection Board as the
              DPDP Act requires.
            </p>

            <h2>Your rights</h2>
            <p>Under the DPDP Act 2023 you may:</p>
            <ul>
              <li>Ask what personal data of yours we hold, and why.</li>
              <li>Ask us to correct it if it is wrong, or complete it if it is partial.</li>
              <li>
                Ask us to erase it, where we have no legal obligation to keep it and no ongoing
                need for it.
              </li>
              <li>Withdraw consent you previously gave, without affecting past processing.</li>
              <li>Nominate someone to exercise these rights if you die or become incapacitated.</li>
              <li>Complain to us, and escalate to the Data Protection Board if unsatisfied.</li>
            </ul>
            <p>
              If your customer contacts us directly about their data, we will point them to you,
              because you are the Data Fiduciary for it. We will help you respond.
            </p>

            <h2>Children</h2>
            <p>
              {SITE.name} is a business tool and is not directed at children. We do not knowingly
              create accounts for anyone under 18.
            </p>

            <h2>Changes</h2>
            <p>
              If we change this policy we will update the date at the top. For changes that
              materially affect you, we will tell you in the product or by email rather than
              relying on you to notice.
            </p>

            <h2>Contact us</h2>
            <p>
              {/* TODO (blocks launch): the IT (Reasonable Security Practices)
                  Rules 2011 and the DPDP Act require a *named* Grievance
                  Officer with a working address, not a shared inbox. Add the
                  name and direct contact here before launch. */}
              For any question about this policy, or to exercise the rights above, contact us at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phoneDisplay}. Our postal
              address is {ADDRESS_LINE}.
            </p>
            <p>
              We aim to respond within a reasonable period and in any case within the timelines
              Indian law sets.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
