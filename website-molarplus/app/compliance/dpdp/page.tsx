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

const framework = getFramework('dpdp');

export const metadata = frameworkMetadata(framework);

const toc: TocEntry[] = [
  { id: 'scope', title: 'Scope' },
  { id: 'roles', title: 'Roles under the Act' },
  { id: 'obligations', title: 'Obligations and practice' },
  { id: 'safeguards', title: 'Security safeguards' },
  { id: 'breach', title: 'Personal data breaches' },
  { id: 'rights', title: 'Rights of Data Principals' },
  { id: 'transfers', title: 'Storage and transfers' },
  { id: 'retention', title: 'Retention and erasure' },
  { id: 'grievance', title: 'Grievance redressal' },
];

export default function DpdpPage() {
  return (
    <ComplianceDocument framework={framework} toc={toc}>
      <Section id="scope" n={1} title="Scope">
        <p>
          MolarPlus is operated by {OPERATOR} (&ldquo;MolarPlus&rdquo;, &ldquo;we&rdquo;). This statement sets out
          how MolarPlus processes digital personal data under the Digital Personal Data Protection Act, 2023 (the
          &ldquo;Act&rdquo;) and the Digital Personal Data Protection Rules, 2025 (the &ldquo;Rules&rdquo;). It
          applies to the MolarPlus clinic management service and its mobile applications.
        </p>
        <p>
          The Rules bring the obligations of the Act into force in phases, with most taking effect eighteen months
          after the Rules were notified in November 2025. MolarPlus applies the practices described in this
          statement now, rather than as each obligation commences.
        </p>
      </Section>

      <Section id="roles" n={2} title="Roles under the Act">
        <p>
          For patient records, the clinic determines the purpose and means of processing and is the{' '}
          <strong className="text-[#1a1c4b]">Data Fiduciary</strong>. MolarPlus processes that data only on the
          clinic&rsquo;s behalf, under its agreement with the clinic, as a{' '}
          <strong className="text-[#1a1c4b]">Data Processor</strong> within the meaning of section 2 of the Act and
          as section 8(2) permits.
        </p>
        <p>
          For the account details of clinic owners and staff, and for enquiries made through this website, MolarPlus
          determines the purpose of processing and is itself the Data Fiduciary.
        </p>
      </Section>

      <Section id="obligations" n={3} title="Obligations and practice">
        <p>
          The table below sets each principal obligation of the Act against the practice MolarPlus follows, whether
          as Data Processor for the clinic or as Data Fiduciary in its own right.
        </p>
        <ProvisionTable
          rows={[
            {
              provision: 'Sections 5 and 6',
              requirement:
                'Notice to the Data Principal, and consent that is free, specific, informed, unconditional and unambiguous, which may be withdrawn at any time.',
              practice:
                'Clinics send digital consent forms to patients from MolarPlus. Each signed consent is stored against the patient’s record, so the clinic can show when, and to what, the patient agreed.',
            },
            {
              provision: 'Section 8(2)',
              requirement: 'A Data Fiduciary may engage a Data Processor only under a valid contract.',
              practice:
                'MolarPlus processes patient data solely to provide the service to the clinic, under its agreement with the clinic, and for no purpose of its own. MolarPlus does not sell personal data.',
            },
            {
              provision: 'Section 8(3)',
              requirement:
                'Personal data used to make a decision about a Data Principal must be complete, accurate and consistent.',
              practice:
                'Authorised clinic staff can correct, complete and update patient records at any time, and changes are recorded in the activity log.',
            },
            {
              provision: 'Section 8(5)',
              requirement:
                'Reasonable security safeguards to prevent a personal data breach, including in processing carried out by a Data Processor.',
              practice: 'Described in section 4 of this statement.',
            },
            {
              provision: 'Section 8(6)',
              requirement: 'Intimation of a personal data breach to the Board and to each affected Data Principal.',
              practice: 'Described in section 5 of this statement.',
            },
            {
              provision: 'Section 8(7)',
              requirement:
                'Erasure of personal data once its purpose is served or consent is withdrawn, unless retention is required by law, including by the Data Processor.',
              practice: 'Described in section 8 of this statement.',
            },
            {
              provision: 'Sections 8(9) and 8(10)',
              requirement:
                'Publication of the contact of a person able to answer questions on processing, and an effective means of grievance redressal.',
              practice: 'Described in section 9 of this statement.',
            },
            {
              provision: 'Section 9',
              requirement:
                'Verifiable consent of a parent or lawful guardian before processing the personal data of a child.',
              practice:
                'The clinic obtains that consent where the Act requires it. MolarPlus consent forms can be sent to, and signed by, the parent or guardian.',
            },
          ]}
        />
      </Section>

      <Section id="safeguards" n={4} title="Security safeguards">
        <p>
          Rule 6 of the Rules sets out the minimum reasonable security safeguards to be taken, including encryption,
          control of access, visibility of access through logs, and measures such as backups for continued processing
          after a compromise. MolarPlus applies the following safeguards to all data it processes.
        </p>
        <SafeguardList />
      </Section>

      <Section id="breach" n={5} title="Personal data breaches">
        <p>
          If MolarPlus becomes aware of a personal data breach affecting data it processes for a clinic, it will
          inform the clinic without delay. MolarPlus will give the clinic the information it needs to intimate the
          Data Protection Board of India and each affected Data Principal under section 8(6) and Rule 7, including
          the nature, extent, timing and location of the breach, its likely impact, and the measures taken to
          mitigate it, together with the facts required for the detailed report to the Board within seventy-two
          hours.
        </p>
        <p>
          Where a breach affects data for which MolarPlus is itself the Data Fiduciary, MolarPlus will intimate the
          Board and each affected Data Principal directly.
        </p>
      </Section>

      <Section id="rights" n={6} title="Rights of Data Principals">
        <p>
          Patients exercise their rights against the clinic, as Data Fiduciary. MolarPlus gives clinics the means to
          act on those requests within the service.
        </p>
        <ProvisionTable
          rows={[
            {
              provision: 'Section 11',
              requirement: 'Access to a summary of the personal data processed and the processing activities.',
              practice: 'The clinic can view and export a patient’s complete record and provide it to the patient.',
            },
            {
              provision: 'Section 12',
              requirement: 'Correction, completion, updating and erasure of personal data.',
              practice:
                'Authorised staff correct, complete and update records directly. Erasure is carried out as described in section 8.',
            },
            {
              provision: 'Section 6(4)',
              requirement: 'Withdrawal of consent, with the same ease as it was given.',
              practice:
                'The clinic acts on the withdrawal, and MolarPlus erases the data on the clinic’s instruction, subject to any retention the law requires.',
            },
            {
              provision: 'Section 13',
              requirement: 'Readily available means of grievance redressal.',
              practice:
                'Patients raise grievances with their clinic. Clinic owners and staff may raise them with MolarPlus directly, as section 9 describes.',
            },
            {
              provision: 'Section 14',
              requirement: 'Nomination of another individual to exercise rights in the event of death or incapacity.',
              practice:
                'MolarPlus supports the clinic in acting on requests from a duly nominated individual as it would on requests from the patient.',
            },
          ]}
        />
      </Section>

      <Section id="transfers" n={7} title="Storage and transfers">
        <p>
          All clinic and patient records are stored on {HOSTING.provider} in the {HOSTING.location}. Certain
          features rely on service providers that process limited data outside India, including in the United
          States. These providers are listed in the{' '}
          <Link href="/compliance#subprocessors" className="underline decoration-gray-300 hover:decoration-current text-[#1a1c4b]">
            register of sub-processors
          </Link>
          .
        </p>
        <p>
          Section 16 of the Act permits the transfer of personal data outside India unless the Central Government
          restricts transfers to a particular country by notification. MolarPlus will not transfer personal data to
          any country so restricted.
        </p>
      </Section>

      <Section id="retention" n={8} title="Retention and erasure">
        <p>
          MolarPlus retains clinic data for as long as the clinic&rsquo;s account is active. A clinic may download a
          complete copy of its data at any time. When a clinic closes its account and instructs MolarPlus to erase its
          data, MolarPlus erases that data from its production systems, and copies held in automated backups expire as
          the {HOSTING.backupWindowDays}-day backup window rolls over.
        </p>
        <p>
          Clinics remain responsible for keeping clinical records for any period required by law or by their
          professional regulator, and should export those records before requesting erasure.
        </p>
      </Section>

      <Section id="grievance" n={9} title="Grievance redressal">
        <p>
          Any person whose personal data MolarPlus processes as Data Fiduciary may contact the Grievance Officer with
          a question or grievance about that processing. MolarPlus will respond within the period prescribed under
          the Rules. A person whose grievance is not resolved may then approach the Data Protection Board of India,
          as section 13(3) of the Act provides.
        </p>
        <p>Patients should first contact the clinic that holds their records.</p>
        <ContactCard />
      </Section>
    </ComplianceDocument>
  );
}
