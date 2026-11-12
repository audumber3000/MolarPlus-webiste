import Link from "next/link";
import { Container, Section } from "@/components/ui/Section";
import { Prose } from "@/components/blog/Prose";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { SITE, ADDRESS_LINE } from "@/lib/site";
import { LAST_UPDATED, LEGAL } from "@/content/legal";

/**
 * NOT LEGALLY REVIEWED, see content/legal.ts. The refund window
 * (LEGAL.refundDays) is the same on every site the company runs; change
 * it on all of them together.
 */
export const metadata = buildMetadata({
  title: "Refund and cancellation policy",
  description:
    "How refunds, cancellation and delivery work for SyrupDesk paid plans: a full refund within 3 days of any payment, and how to cancel.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  const days = LEGAL.refundDays;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Refund policy", path: "/refund-policy" },
        ])}
      />

      <Section tone="tint" className="pt-12 pb-12 lg:pt-16 lg:pb-14">
        <Container>
          <div className="measure">
            <h1 className="text-[1.75rem] leading-tight font-bold tracking-tight text-ink-900 sm:text-h2">
              Refund and cancellation policy
            </h1>
            <p className="mt-4 text-body text-ink-500">Last updated: {LAST_UPDATED}</p>
          </div>
        </Container>
      </Section>

      <Section className="py-12 lg:py-16">
        <Container>
          <Prose>
            <p>
              {SITE.name} is sold and operated by <strong>{LEGAL.entity}</strong> ({ADDRESS_LINE}).
              This policy explains when a paid plan is refunded and how cancelling works.
            </p>
            <p>
              The free plan is free and is never charged, and neither is a free trial. If you do not
              choose a paid plan when a trial ends, nothing is billed and no refund is needed.
            </p>

            <h2>Refund eligibility</h2>
            <p>
              Every paid plan, monthly or yearly, can be refunded in full if you ask within{" "}
              <strong>{days} days</strong> of the payment. The same {days}-day window applies from the
              date of every renewal. Requests after {days} days are not eligible.
            </p>
            <p>
              If you were charged by mistake, charged twice, or charged after you cancelled, tell us
              and we refund it in full, whatever the date.
            </p>

            <h2>When a refund is not given</h2>
            <ul>
              <li>The request is made more than {days} days after the payment or renewal.</li>
              <li>The account was suspended or closed for breaking our terms of service.</li>
              <li>Onboarding, data import or training that has already been delivered.</li>
              <li>Usage-based charges already consumed, such as WhatsApp or SMS messages already sent.</li>
              <li>
                A move to a smaller plan in the middle of a billing period. It takes effect at the next
                renewal, and the difference is not refunded.
              </li>
              <li>
                Goods and Services Tax already paid to the government, where the refund falls outside
                the refund window.
              </li>
            </ul>

            <h2>How to ask for a refund</h2>
            <p>
              Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with the subject &ldquo;Refund
              request&rdquo; and your shop&rsquo;s name, the plan, the phone number or email you sign in
              with, and the payment date. You can also message us on WhatsApp or call{" "}
              {SITE.phoneDisplay}.
            </p>
            <p>
              We reply within 2 business days. An approved refund goes back to the original payment
              method within 7 to 10 business days, depending on your bank or payment provider.
            </p>

            <h2>Cancelling</h2>
            <p>
              You can cancel a paid plan at any time, from your account or by writing to us. Cancelling
              stops the next renewal. It does not by itself refund the current period: your plan stays
              active until the end of the period you have already paid for.
            </p>
            <p>
              Cancelling does not delete your records. As the <Link href="/terms">terms</Link> describe,
              an account that stops paying becomes read-only, and you can still export your data.
            </p>

            <h2>Delivery of the service</h2>
            <p>
              {SITE.name} is software delivered online. Nothing is shipped. Your plan is switched on in
              your account as soon as the payment succeeds, usually within minutes. If a paid plan is
              not active within 24 hours of payment, contact us and we will activate it or refund you.
            </p>

            <h2>Payment disputes</h2>
            <p>
              If you believe a charge is wrong, please contact us before raising a chargeback with your
              bank. A chargeback raised without contacting us first may lead to the account being
              paused while it is looked into.
            </p>

            <h2>Contact</h2>
            <p>
              {LEGAL.entity}, {ADDRESS_LINE}. Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>{" "}
              or call {SITE.phoneDisplay}. See also our <Link href="/privacy">privacy policy</Link>.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
