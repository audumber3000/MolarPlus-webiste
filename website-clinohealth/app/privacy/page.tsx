import Link from 'next/link';
import LegalLayout, { Bullets, Clause } from '@/components/LegalLayout';
import { pageMetadata } from '@/lib/seo';
import { CONTACT, SITE } from '@/lib/site';

export const metadata = pageMetadata({
  title: 'Privacy policy',
  description:
    'How Clino Health collects, uses and safeguards information across MolarPlus and SyrupDesk, and the rights you hold over your data under the DPDP Act 2023.',
  path: '/privacy',
});

/**
 * ─────────────────────────────────────────────────────────────────────
 * THIS POLICY HAS NOT BEEN REVIEWED BY A LAWYER.
 *
 * It is drafted around the DPDP Act 2023 and describes the hosted,
 * multi-tenant architecture the products actually use — the previous
 * version described a local-only desktop product and was no longer true.
 * It is structurally complete, but three facts can only come from the
 * business, and two of them are legally required in India:
 *
 *   1. REGISTERED ENTITY — the incorporated name and CIN. "Clino Health"
 *      is a brand and is not sufficient in a privacy notice.
 *   2. GRIEVANCE OFFICER — the DPDP Act and the IT Rules 2011 require a
 *      named officer with a working contact. A support inbox does not
 *      satisfy this. See `GRIEVANCE_OFFICER` below.
 *   3. HOSTING REGION AND SUB-PROCESSORS — where data physically sits,
 *      and who else touches it (hosting, payments, messaging, analytics).
 *      The transfers clause cannot be honest until this list exists.
 *
 * Send this to a solicitor before it goes live, not after.
 * ─────────────────────────────────────────────────────────────────────
 */
const GRIEVANCE_OFFICER: { name: string; email: string } | null = null;

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy policy"
      intro="What we collect, what we do not, and what you can demand of us. Written to be read rather than skimmed past."
      updated="August 2026"
    >
      <Clause heading="1. Who we are">
        <p>
          {SITE.name} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) builds practice
          management software for Indian healthcare, including MolarPlus and SyrupDesk.
          This policy covers this website and those products.
        </p>
        <p>
          In data-protection terms: for the patient records inside your practice,{' '}
          <strong className="font-semibold text-ink">you are the data fiduciary</strong> and
          we are the processor acting on your instructions. For your own account and billing
          details, we are the fiduciary.
        </p>
      </Clause>

      <Clause heading="2. What we collect">
        <p>From you, as a customer:</p>
        <Bullets
          items={[
            'Account details — name, practice name, email, phone number',
            'Billing and subscription information, processed by our payment provider',
            'Support conversations by email, phone and WhatsApp',
            'Product usage and diagnostic data, used to find faults and improve the apps',
          ]}
        />
        <p>
          Patient data you enter — records, histories, prescriptions, images, invoices — is
          held on your behalf. We do not sell it, mine it, use it to train models, or share
          it with anyone other than the sub-processors needed to run the service.
        </p>
      </Clause>

      <Clause heading="3. Where your data is stored">
        <p>
          MolarPlus and SyrupDesk are hosted applications. Your practice&apos;s data is
          stored in our managed database in an isolated tenant, which is what allows the
          web, mobile and desktop apps to show the same record to different staff at once.
          The desktop apps additionally keep a local working copy so the practice keeps
          running during an internet outage.
        </p>
      </Clause>

      <Clause heading="4. How we use it">
        <Bullets
          items={[
            'To provide, maintain and support the products you subscribe to',
            'To take payment and manage your subscription',
            'To answer your support requests',
            'To diagnose faults and improve reliability',
            'To meet legal and regulatory obligations',
          ]}
        />
      </Clause>

      <Clause heading="5. Third parties">
        <p>
          We use a small number of service providers to operate — hosting, payment
          processing, and messaging for the WhatsApp and SMS reminders the apps send. They
          receive only what their function requires and are bound to use it for nothing
          else. Each has its own privacy policy.
        </p>
      </Clause>

      <Clause heading="6. Your rights">
        <p>Under the Digital Personal Data Protection Act 2023 you may:</p>
        <Bullets
          items={[
            'Access the personal data we hold about you',
            'Have inaccurate data corrected',
            'Have your data erased, subject to any record-retention law that binds your practice',
            'Export your data in a portable format, at any time, without asking permission',
            'Withdraw consent where processing rests on it',
            'Raise a grievance with us, and escalate to the Data Protection Board of India',
          ]}
        />
        <p>
          Data portability is not a concession here. You can export your full patient list,
          records and financials whenever you like. Software that holds your data hostage is
          not software you chose.
        </p>
      </Clause>

      <Clause heading="7. Retention">
        <p>
          We keep your practice data for as long as your account is active. After you close
          it we retain data only as long as needed to meet legal obligations, then delete
          it. Export before you close the account — after deletion we cannot recover it.
        </p>
      </Clause>

      <Clause heading="8. Children">
        <p>
          Our products are sold to healthcare practices and are not intended for use by
          individuals under 18. Patient records concerning minors are entered by the
          practice, under the practice&apos;s own obligations for consent.
        </p>
      </Clause>

      <Clause heading="9. Changes to this policy">
        <p>
          We will post any change on this page and update the date above. Material changes
          affecting how we handle your data will also be sent to you directly.
        </p>
      </Clause>

      <Clause heading="10. Contact and grievances">
        <p>
          For any question about this policy, email{' '}
          <a href={`mailto:${CONTACT.privacy}`} className="font-semibold text-clino-medium hover:text-clino-dark">
            {CONTACT.privacy}
          </a>{' '}
          or call{' '}
          <a href={`tel:${CONTACT.phone}`} className="font-semibold text-clino-medium hover:text-clino-dark">
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
        {GRIEVANCE_OFFICER ? (
          <p>
            Grievance Officer: {GRIEVANCE_OFFICER.name} —{' '}
            <a href={`mailto:${GRIEVANCE_OFFICER.email}`} className="font-semibold text-clino-medium hover:text-clino-dark">
              {GRIEVANCE_OFFICER.email}
            </a>
          </p>
        ) : null}
        <p>
          {CONTACT.address.street}, {CONTACT.address.city}, {CONTACT.address.state}{' '}
          {CONTACT.address.postalCode}, {CONTACT.address.countryName}.
        </p>
        <p>
          See also our{' '}
          <Link href="/security" className="font-semibold text-clino-medium hover:text-clino-dark">
            security page
          </Link>{' '}
          for the technical controls behind these commitments.
        </p>
      </Clause>
    </LegalLayout>
  );
}
