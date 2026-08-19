import Link from 'next/link';
import LegalLayout, { Bullets, Clause } from '@/components/LegalLayout';
import { pageMetadata } from '@/lib/seo';
import { CONTACT, SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Terms of use',
  description:
    'The terms governing use of Clino Health products, including MolarPlus and SyrupDesk.',
  path: '/terms',
});

/**
 * NOT REVIEWED BY A LAWYER — same caveat as the privacy policy, and the
 * same blocking gap: these terms name "Clino Health", a brand, where a
 * contract needs the registered entity and its CIN. Jurisdiction is set
 * to Pune because that is the registered address, but naming the courts
 * is a commercial decision, not a default.
 */
export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of use"
      intro="The agreement between your practice and us. Short, and in plain words wherever the law allows it."
      updated="August 2026"
    >
      <Clause heading="1. Agreement">
        <p>
          By using a {SITE.name} product you agree to these terms. If you are accepting on
          behalf of a practice, you confirm you are authorised to bind it.
        </p>
      </Clause>

      <Clause heading="2. Your account">
        <p>
          You are responsible for the accounts you create, the staff you grant access to,
          and keeping credentials secure. Tell us promptly if you believe an account has
          been compromised.
        </p>
      </Clause>

      <Clause heading="3. Subscriptions and payment">
        <p>
          Products are sold on subscription. Fees, billing period and included features are
          those shown on the relevant product&apos;s pricing page at the time you subscribe.
          Access continues to the end of a paid period; we do not refund part-periods unless
          the product was unavailable through our fault.
        </p>
      </Clause>

      <Clause heading="4. Your data">
        <p>
          Your practice&apos;s data remains yours. We claim no ownership of it and use it
          only to provide the service, as set out in the{' '}
          <Link href="/privacy" className="font-semibold text-clino-medium hover:text-clino-dark">
            privacy policy
          </Link>
          . You may export it at any time.
        </p>
      </Clause>

      <Clause heading="5. Acceptable use">
        <p>You may not:</p>
        <Bullets
          items={[
            'Use the products for anything unlawful, or in breach of the obligations governing your own practice',
            'Attempt to access another practice’s data',
            'Resell or sublicense access without a written agreement with us',
            'Probe or attack the service — except in good faith security research reported to us first',
          ]}
        />
      </Clause>

      <Clause heading="6. Availability">
        <p>
          We work to keep the hosted products available and continuously improved, but we do
          not warrant uninterrupted service. Planned maintenance is announced in advance
          where we can. The desktop apps exist partly so an outage does not stop your day.
        </p>
      </Clause>

      <Clause heading="7. Clinical responsibility">
        <p>
          Our software records and organises clinical information. It does not practise
          medicine. All clinical decisions, and the accuracy of what is entered, remain the
          responsibility of the registered practitioner.
        </p>
      </Clause>

      <Clause heading="8. Liability">
        <p>
          To the extent permitted by law, our liability arising out of these terms is
          limited to the fees you paid in the twelve months before the claim. We are not
          liable for indirect or consequential loss.
        </p>
      </Clause>

      <Clause heading="9. Termination">
        <p>
          You may cancel at any time. We may suspend or terminate an account for material
          breach of these terms, giving notice and a chance to remedy where practicable.
          Export your data before terminating.
        </p>
      </Clause>

      <Clause heading="10. Governing law">
        <p>
          These terms are governed by the laws of India, and the courts at{' '}
          {CONTACT.address.city}, {CONTACT.address.state} have exclusive jurisdiction.
        </p>
      </Clause>

      <Clause heading="11. Contact">
        <p>
          Questions about these terms:{' '}
          <a href={`mailto:${CONTACT.email}`} className="font-semibold text-clino-medium hover:text-clino-dark">
            {CONTACT.email}
          </a>
          .
        </p>
      </Clause>
    </LegalLayout>
  );
}
