import Link from 'next/link';
import LegalLayout, { Bullets, Clause } from '@/components/LegalLayout';
import { pageMetadata } from '@/lib/seo';
import { CONTACT, SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Refund and cancellation policy',
  description:
    'How refunds, cancellation and delivery work for Clino Health subscriptions, including MolarPlus, SyrupDesk and Curogrid.',
  path: '/refund-policy',
});

/**
 * The refund window is 3 days from payment or renewal for every plan, on
 * every site the company runs (MolarPlus, Clino Health, Curogrid,
 * SyrupDesk), set by the owner on 12 November 2026. Change it on all four
 * together. Not reviewed by a lawyer, like the other legal pages.
 */
export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund and cancellation policy"
      intro="When you can get your money back, how to cancel, and how your subscription is delivered."
      updated="November 2026"
    >
      <Clause heading="1. Overview">
        <p>
          {SITE.name} products, including MolarPlus, SyrupDesk and Curogrid, are sold and
          operated by <strong className="font-semibold text-ink">{SITE.legalName}</strong>{' '}
          (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;). This policy explains when a paid
          subscription is refunded and how cancellation works.
        </p>
        <p>
          Where a product offers a free trial, the trial is not charged and so is not covered
          by this policy. If you do not choose a paid plan when the trial ends, nothing is
          billed and no refund is needed.
        </p>
      </Clause>

      <Clause heading="2. Refund eligibility">
        <p>
          Every paid plan, monthly or yearly, on every product, can be refunded in full if you
          ask within <strong className="font-semibold text-ink">3 days</strong> of the payment.
          The same 3-day window applies from the date of every renewal. Requests after 3 days
          are not eligible.
        </p>
      </Clause>

      <Clause heading="3. When a refund is not given">
        <Bullets
          items={[
            'The request is made more than 3 days after the payment or renewal',
            'The account was suspended or closed for breaking our terms of use',
            'Part of a month already used on a monthly plan',
            'Onboarding, data import, training or custom work that has already been delivered',
            'Usage-based charges already consumed, such as WhatsApp or SMS messages already sent and prepaid message credit already used',
            'A move to a lower plan in the middle of a billing period (it takes effect at the next renewal, and the difference is not refunded)',
            'Goods and Services Tax already paid to the government, where the refund falls outside the refund window',
          ]}
        />
      </Clause>

      <Clause heading="4. How to ask for a refund">
        <p>
          Email{' '}
          <a href={`mailto:${CONTACT.support}`} className="font-semibold text-clino-medium hover:text-clino-dark">
            {CONTACT.support}
          </a>{' '}
          with the subject &quot;Refund request&quot; and your practice&apos;s name. Include the
          product, the plan, the registered email or phone number, and the payment date. A
          short reason helps us improve, but is not required.
        </p>
        <p>
          We reply within <strong className="font-semibold text-ink">2 business days</strong>.
          An approved refund goes back to the original payment method within{' '}
          <strong className="font-semibold text-ink">7 to 10 business days</strong>, depending
          on your bank or payment provider.
        </p>
        <p>
          If you were charged by mistake, charged twice, or charged after you cancelled, tell
          us and we refund it in full, whatever the date.
        </p>
      </Clause>

      <Clause heading="5. Cancellation">
        <p>
          You can cancel at any time from the product&apos;s settings, or by writing to us.
          Cancelling stops the next renewal. It does not by itself refund the current period:
          your plan stays active until the end of the period you have paid for.
        </p>
        <p>
          After a subscription ends, your data is kept for 30 days so you can export it or come
          back, and may then be deleted.
        </p>
      </Clause>

      <Clause heading="6. Delivery of the service">
        <p>
          Our products are software delivered online. Nothing is shipped. Your plan is switched
          on in your account as soon as the payment succeeds, usually within minutes, and the
          payment receipt and tax invoice are sent to your registered email or WhatsApp number.
          If a paid plan is not active within 24 hours of payment, contact us and we will
          activate it or refund you.
        </p>
      </Clause>

      <Clause heading="7. Payment disputes">
        <p>
          If you believe a charge is wrong, please contact us before raising a chargeback with
          your bank. A chargeback raised without contacting us first may lead to the account
          being paused while it is looked into.
        </p>
      </Clause>

      <Clause heading="8. Contact">
        <p>
          {SITE.legalName}
          <br />
          {CONTACT.address.street}, {CONTACT.address.city}, {CONTACT.address.state}{' '}
          {CONTACT.address.postalCode}, {CONTACT.address.countryName}
          <br />
          Email:{' '}
          <a href={`mailto:${CONTACT.support}`} className="font-semibold text-clino-medium hover:text-clino-dark">
            {CONTACT.support}
          </a>
          <br />
          Phone:{' '}
          <a href={`tel:${CONTACT.phone}`} className="font-semibold text-clino-medium hover:text-clino-dark">
            {CONTACT.phoneDisplay}
          </a>{' '}
          ({CONTACT.hours})
        </p>
        <p>
          See also the{' '}
          <Link href="/terms" className="font-semibold text-clino-medium hover:text-clino-dark">
            terms of use
          </Link>{' '}
          and the{' '}
          <Link href="/privacy" className="font-semibold text-clino-medium hover:text-clino-dark">
            privacy policy
          </Link>
          .
        </p>
      </Clause>
    </LegalLayout>
  );
}
