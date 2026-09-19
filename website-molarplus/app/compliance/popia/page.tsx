import Link from 'next/link';
import {
  ComplianceDocument,
  ContactCard,
  ProvisionTable,
  SafeguardList,
  Section,
  type TocEntry,
} from '@/components/Compliance';
import { HOSTING, OPERATOR, frameworkMetadata, getFramework } from '@/lib/compliance';

const framework = getFramework('popia');

export const metadata = frameworkMetadata(framework);

const toc: TocEntry[] = [
  { id: 'scope', title: 'Scope' },
  { id: 'roles', title: 'Responsible party and operator' },
  { id: 'operator', title: 'Operator obligations' },
  { id: 'security', title: 'Security safeguards' },
  { id: 'compromise', title: 'Security compromises' },
  { id: 'transborder', title: 'Transborder information flows' },
  { id: 'rights', title: 'Rights of data subjects' },
  { id: 'retention', title: 'Retention and destruction' },
  { id: 'contact', title: 'Contact' },
];

export default function PopiaPage() {
  return (
    <ComplianceDocument framework={framework} toc={toc}>
      <Section id="scope" n={1} title="Scope">
        <p>
          MolarPlus is operated by {OPERATOR} (&ldquo;MolarPlus&rdquo;, &ldquo;we&rdquo;). This statement sets out
          how MolarPlus processes the personal information of data subjects in South Africa under the Protection of
          Personal Information Act, 2013 (&ldquo;POPIA&rdquo;).
        </p>
      </Section>

      <Section id="roles" n={2} title="Responsible party and operator">
        <p>
          A dental practice using MolarPlus determines the purpose and means of processing its patients&rsquo;
          personal information and is the <strong className="text-[#1a1c4b]">responsible party</strong>. MolarPlus
          processes that information for the practice under a contract, without coming under its direct authority, and
          is an <strong className="text-[#1a1c4b]">operator</strong> as defined in section 1.
        </p>
        <p>
          Information about a patient&rsquo;s health is special personal information under section 26. The practice
          relies on the authorisation in section 32(1) for health care providers, and remains responsible for
          processing it lawfully.
        </p>
        <p>
          MolarPlus is the responsible party for the account information of practice owners and staff, and for
          enquiries made through this website.
        </p>
      </Section>

      <Section id="operator" n={3} title="Operator obligations">
        <ProvisionTable
          lawLabel="Section"
          rows={[
            {
              provision: 'Section 20',
              requirement:
                'An operator may process personal information only with the knowledge or authorisation of the responsible party, and must treat it as confidential.',
              practice:
                'MolarPlus processes practice data only to provide the service to the practice, treats it as confidential, and does not disclose it except as the practice authorises or the law requires.',
            },
            {
              provision: 'Section 21(1)',
              requirement:
                'A written contract must ensure that the operator establishes and maintains the security measures referred to in section 19.',
              practice:
                'MolarPlus maintains the measures described in section 4 of this statement, and enters into a written operator agreement to that effect with any practice that requests one.',
            },
            {
              provision: 'Section 21(2)',
              requirement:
                'The operator must notify the responsible party immediately where there are reasonable grounds to believe personal information has been accessed or acquired by an unauthorised person.',
              practice: 'Described in section 5 of this statement.',
            },
          ]}
        />
      </Section>

      <Section id="security" n={4} title="Security safeguards">
        <p>
          Section 19 requires appropriate, reasonable technical and organisational measures to secure the integrity and
          confidentiality of personal information and to prevent its loss, damage or unlawful access. MolarPlus applies
          the following measures.
        </p>
        <SafeguardList />
      </Section>

      <Section id="compromise" n={5} title="Security compromises">
        <p>
          Where MolarPlus has reasonable grounds to believe that personal information it processes for a practice has
          been accessed or acquired by an unauthorised person, it will notify the practice immediately, as section 21(2)
          requires. MolarPlus will provide the information the practice needs to notify the Information Regulator and
          each affected data subject as soon as reasonably possible, as section 22 requires, including a description of
          the possible consequences and the measures taken to address the compromise.
        </p>
      </Section>

      <Section id="transborder" n={6} title="Transborder information flows">
        <p>
          MolarPlus stores practice data on {HOSTING.provider} in the {HOSTING.location}. Section 72 permits the transfer
          of personal information outside the Republic where the recipient is subject to a law, binding corporate rules or
          a binding agreement that provides an adequate level of protection, substantially similar to the conditions for
          lawful processing in POPIA.
        </p>
        <p>
          Personal information held by MolarPlus in India is subject to the Digital Personal Data Protection Act, 2023,
          and MolarPlus is bound by its agreement with the practice to protect it in a manner consistent with POPIA.
          The service providers MolarPlus uses are listed in the{' '}
          <Link href="/compliance#subprocessors" className="underline decoration-gray-300 hover:decoration-current text-[#1a1c4b]">
            register of sub-processors
          </Link>
          .
        </p>
      </Section>

      <Section id="rights" n={7} title="Rights of data subjects">
        <p>
          Patients exercise their rights against the practice, as responsible party. MolarPlus gives practices the means
          to act on those requests.
        </p>
        <ProvisionTable
          lawLabel="Section"
          rows={[
            {
              provision: 'Section 23',
              requirement: 'Access to personal information held by a responsible party.',
              practice: 'The practice can view and export a patient’s complete record and provide it to the patient.',
            },
            {
              provision: 'Section 24',
              requirement: 'Correction or deletion of personal information that is inaccurate, irrelevant or out of date.',
              practice:
                'Authorised staff correct records directly, and changes are recorded in the activity log. Deletion is carried out as section 8 describes.',
            },
            {
              provision: 'Section 11(3)',
              requirement: 'Objection to the processing of personal information.',
              practice: 'MolarPlus assists the practice in giving effect to an objection on request.',
            },
            {
              provision: 'Section 74',
              requirement: 'Complaint to the Information Regulator.',
              practice:
                'Any person may submit a complaint to the Information Regulator alleging interference with the protection of personal information.',
            },
          ]}
        />
      </Section>

      <Section id="retention" n={8} title="Retention and destruction">
        <p>
          MolarPlus retains practice data for as long as the practice&rsquo;s account is active. A practice may download
          a complete copy of its data at any time. When a practice closes its account and instructs MolarPlus to destroy
          or delete its data, MolarPlus deletes that data from its production systems, and copies held in automated
          backups expire as the {HOSTING.backupWindowDays}-day backup window rolls over.
        </p>
        <p>
          Section 14 permits retention for longer where a law or code of conduct requires it. Practices remain
          responsible for keeping health records for the period their professional regulator requires, and should
          export those records before requesting deletion.
        </p>
      </Section>

      <Section id="contact" n={9} title="Contact">
        <p>
          Patients should first contact the Information Officer of their practice. Practices, and questions about this
          statement, may be directed to:
        </p>
        <ContactCard heading="Privacy contact" />
      </Section>
    </ComplianceDocument>
  );
}
