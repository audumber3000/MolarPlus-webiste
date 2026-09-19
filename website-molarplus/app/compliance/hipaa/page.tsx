import Link from 'next/link';
import {
  ComplianceDocument,
  ContactCard,
  ProvisionTable,
  SafeguardList,
  Section,
  type TocEntry,
} from '@/components/Compliance';
import { HOSTING, OPERATOR, PRIVACY_CONTACT, frameworkMetadata, getFramework } from '@/lib/compliance';

/*
 * This page describes safeguards. It deliberately does not state that
 * MolarPlus "is HIPAA compliant" or that a Business Associate Agreement is
 * available: as of September 2026 no BAA is in place with AWS (AWS Artifact
 * shows none) or with the vendors that receive PHI, and Meta does not sign
 * BAAs for WhatsApp. Add that statement only once those agreements exist.
 */

const framework = getFramework('hipaa');

export const metadata = frameworkMetadata(framework);

const toc: TocEntry[] = [
  { id: 'scope', title: 'Scope' },
  { id: 'roles', title: 'Roles' },
  { id: 'security-rule', title: 'Security Rule safeguards' },
  { id: 'safeguards', title: 'Safeguards in detail' },
  { id: 'privacy-rule', title: 'Privacy Rule support' },
  { id: 'breach', title: 'Breach notification' },
  { id: 'location', title: 'Data location and providers' },
  { id: 'baa', title: 'Business Associate Agreements' },
  { id: 'contact', title: 'Contact' },
];

export default function HipaaPage() {
  return (
    <ComplianceDocument framework={framework} toc={toc}>
      <Section id="scope" n={1} title="Scope">
        <p>
          MolarPlus is operated by {OPERATOR} (&ldquo;MolarPlus&rdquo;, &ldquo;we&rdquo;). This statement describes
          the administrative, physical and technical safeguards MolarPlus applies to protected health information
          (&ldquo;PHI&rdquo;) that dental practices in the United States create, receive, maintain or transmit through
          the MolarPlus clinic management service. It refers to the Privacy, Security and Breach Notification Rules at
          45 CFR Parts 160 and 164.
        </p>
      </Section>

      <Section id="roles" n={2} title="Roles">
        <p>
          A dental practice that transmits health information electronically in connection with a standard
          transaction, such as a claim, is a <strong className="text-[#1a1c4b]">covered entity</strong>. A service
          provider that creates, receives, maintains or transmits PHI on behalf of a covered entity is a{' '}
          <strong className="text-[#1a1c4b]">business associate</strong> under 45 CFR 160.103. MolarPlus acts in that
          capacity for the practices that use it.
        </p>
      </Section>

      <Section id="security-rule" n={3} title="Security Rule safeguards">
        <p>
          The table below sets the standards of the Security Rule against the measures MolarPlus has in place for
          electronic PHI.
        </p>
        <ProvisionTable
          lawLabel="Standard"
          rows={[
            {
              provision: '§ 164.308(a)(4)',
              requirement: 'Information access management: policies for authorizing access to electronic PHI.',
              practice:
                'The practice owner grants each staff member access section by section. Users see only what their role permits.',
            },
            {
              provision: '§ 164.308(a)(7)',
              requirement: 'Contingency plan: data backup, disaster recovery and emergency mode operation.',
              practice: `Automated daily database backups, with point-in-time recovery across ${HOSTING.backupWindowDays} days. The practice can also export a complete archive of its data at any time.`,
            },
            {
              provision: '§ 164.310',
              requirement: 'Physical safeguards: facility access controls and device and media controls.',
              practice:
                'Electronic PHI is hosted in Amazon Web Services data centers, whose physical security AWS maintains under its shared responsibility model. Storage volumes are encrypted.',
            },
            {
              provision: '§ 164.312(a)',
              requirement: 'Access control: unique user identification and encryption of electronic PHI.',
              practice:
                'Every user signs in with an individual account. Data is encrypted at rest with AES-256.',
            },
            {
              provision: '§ 164.312(b)',
              requirement: 'Audit controls: record and examine activity in systems that contain electronic PHI.',
              practice:
                'An activity log records actions taken in the practice account, available to the owner for review and export.',
            },
            {
              provision: '§ 164.312(c)',
              requirement: 'Integrity: protect electronic PHI from improper alteration or destruction.',
              practice:
                'Role permissions restrict who may alter records, and database backups allow recovery of data that is altered or destroyed.',
            },
            {
              provision: '§ 164.312(d)',
              requirement: 'Person or entity authentication.',
              practice:
                'Passwords are stored only as bcrypt hashes, sign-in is verified with one-time codes, and repeated attempts are rate limited.',
            },
            {
              provision: '§ 164.312(e)',
              requirement: 'Transmission security: guard against unauthorized access to PHI in transit.',
              practice: 'Every connection between users and MolarPlus is encrypted with TLS.',
            },
          ]}
        />
      </Section>

      <Section id="safeguards" n={4} title="Safeguards in detail">
        <SafeguardList />
      </Section>

      <Section id="privacy-rule" n={5} title="Privacy Rule support">
        <ProvisionTable
          lawLabel="Standard"
          rows={[
            {
              provision: '§ 164.502(a)',
              requirement: 'Permitted uses and disclosures of PHI; prohibition on the sale of PHI.',
              practice:
                'MolarPlus uses PHI only to provide the service to the practice. MolarPlus does not sell PHI.',
            },
            {
              provision: '§ 164.502(b)',
              requirement: 'Minimum necessary: limit PHI to the minimum necessary for the purpose.',
              practice: 'Role-based permissions let the practice limit each staff member to the information their work requires.',
            },
            {
              provision: '§ 164.524',
              requirement: 'Right of access: individuals may obtain a copy of their PHI.',
              practice: 'The practice can export a patient’s complete record and provide it to the patient.',
            },
            {
              provision: '§ 164.526',
              requirement: 'Right to amend: individuals may request amendment of their PHI.',
              practice: 'Authorized staff amend records directly, and changes are recorded in the activity log.',
            },
          ]}
        />
      </Section>

      <Section id="breach" n={6} title="Breach notification">
        <p>
          Under 45 CFR 164.410, a business associate must notify the covered entity of a breach of unsecured PHI
          without unreasonable delay and in no case later than 60 calendar days after discovery. MolarPlus will notify
          an affected practice without unreasonable delay. To the extent possible, MolarPlus will identify each
          individual affected and provide the other information the practice needs to notify individuals, the
          Secretary of Health and Human Services and, where required, the media.
        </p>
      </Section>

      <Section id="location" n={7} title="Data location and providers">
        <p>
          PHI is stored on {HOSTING.provider} in the {HOSTING.location}. The HIPAA Rules do not prohibit the storage of
          PHI outside the United States. The service providers MolarPlus uses are listed in the{' '}
          <Link href="/compliance#subprocessors" className="underline decoration-gray-300 hover:decoration-current text-[#1a1c4b]">
            register of sub-processors
          </Link>
          .
        </p>
        <p>
          Optional features pass limited PHI to those providers: WhatsApp and SMS reminders send a patient&rsquo;s name,
          telephone number and the message content to the messaging provider, and AI-assisted note drafting sends the
          content a clinician submits. Each practice should decide whether to enable these features in light of its own
          obligations under the HIPAA Rules.
        </p>
      </Section>

      <Section id="baa" n={8} title="Business Associate Agreements">
        <p>
          A practice that requires a Business Associate Agreement should contact MolarPlus at{' '}
          <a href={`mailto:${PRIVACY_CONTACT.email}`} className="underline decoration-gray-300 hover:decoration-current text-[#1a1c4b]">
            {PRIVACY_CONTACT.email}
          </a>{' '}
          before entering PHI into the service.
        </p>
      </Section>

      <Section id="contact" n={9} title="Contact">
        <p>Questions about this statement or about the security of the service may be sent to:</p>
        <ContactCard heading="Privacy and security contact" />
      </Section>
    </ComplianceDocument>
  );
}
