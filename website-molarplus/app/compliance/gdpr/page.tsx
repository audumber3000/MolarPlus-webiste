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

/*
 * Sections 3 and 6 commit MolarPlus to a Data Processing Agreement that
 * incorporates the Standard Contractual Clauses. Keep a signed template
 * ready: an EU practice will ask for it.
 */

const framework = getFramework('gdpr');

export const metadata = frameworkMetadata(framework);

const toc: TocEntry[] = [
  { id: 'scope', title: 'Scope' },
  { id: 'roles', title: 'Controller and processor' },
  { id: 'article-28', title: 'Processor obligations' },
  { id: 'security', title: 'Security of processing' },
  { id: 'breach', title: 'Personal data breaches' },
  { id: 'transfers', title: 'International transfers' },
  { id: 'rights', title: 'Rights of data subjects' },
  { id: 'retention', title: 'Retention and deletion' },
  { id: 'contact', title: 'Contact' },
];

export default function GdprPage() {
  return (
    <ComplianceDocument framework={framework} toc={toc}>
      <Section id="scope" n={1} title="Scope">
        <p>
          MolarPlus is operated by {OPERATOR} (&ldquo;MolarPlus&rdquo;, &ldquo;we&rdquo;). This statement sets out
          how MolarPlus processes the personal data of individuals in the European Union under Regulation (EU)
          2016/679 (the &ldquo;GDPR&rdquo;) and, in the United Kingdom, under the UK GDPR and the Data Protection Act
          2018. References to the GDPR include the UK GDPR where the context allows.
        </p>
      </Section>

      <Section id="roles" n={2} title="Controller and processor">
        <p>
          A dental practice using MolarPlus determines the purposes and means of processing its patients&rsquo; data
          and is the <strong className="text-[#1a1c4b]">controller</strong>. MolarPlus processes that data on the
          practice&rsquo;s behalf as a <strong className="text-[#1a1c4b]">processor</strong> under Article 28.
        </p>
        <p>
          Data concerning health is a special category of personal data under Article 9. The practice is responsible
          for the lawful basis of its processing, which for the provision of health care is ordinarily Article 9(2)(h).
        </p>
        <p>
          MolarPlus is the controller of the account data of practice owners and staff, and of enquiries made through
          this website.
        </p>
      </Section>

      <Section id="article-28" n={3} title="Processor obligations">
        <p>
          MolarPlus enters into a Data Processing Agreement with each practice that requests one, on the terms Article
          28(3) requires. The table below sets out how MolarPlus meets each of them.
        </p>
        <ProvisionTable
          lawLabel="Article"
          rows={[
            {
              provision: '28(3)(a)',
              requirement: 'Process personal data only on documented instructions from the controller.',
              practice:
                'MolarPlus processes personal data only to provide the service, in accordance with the practice’s instructions given through its use of the service and its agreement with MolarPlus.',
            },
            {
              provision: '28(3)(b)',
              requirement: 'Persons authorised to process the data are committed to confidentiality.',
              practice:
                'Access to production data is limited to MolarPlus personnel who need it to operate and support the service, and who are bound by confidentiality.',
            },
            {
              provision: '28(3)(c)',
              requirement: 'Take all measures required by Article 32.',
              practice: 'Described in section 4 of this statement.',
            },
            {
              provision: '28(2), 28(4)',
              requirement: 'Engage sub-processors only with authorisation, on equivalent data protection terms.',
              practice: (
                <>
                  Sub-processors are engaged under general authorisation and are listed in the{' '}
                  <Link href="/compliance#subprocessors" className="underline decoration-gray-300 hover:decoration-current text-[#1a1c4b]">
                    register of sub-processors
                  </Link>
                  . MolarPlus informs practices of intended changes, giving them the opportunity to object.
                </>
              ),
            },
            {
              provision: '28(3)(e)',
              requirement: 'Assist the controller in responding to requests from data subjects.',
              practice:
                'Practices access, rectify, export and erase patient records directly in MolarPlus. MolarPlus assists with any request the practice cannot fulfil itself.',
            },
            {
              provision: '28(3)(f)',
              requirement: 'Assist the controller with its obligations under Articles 32 to 36.',
              practice:
                'MolarPlus provides the information a practice needs for the security of processing, breach notification and data protection impact assessments.',
            },
            {
              provision: '28(3)(g)',
              requirement: 'Delete or return all personal data at the end of the provision of services.',
              practice: 'Described in section 8 of this statement.',
            },
            {
              provision: '28(3)(h)',
              requirement: 'Make available all information necessary to demonstrate compliance, and allow for audits.',
              practice: 'MolarPlus makes this information available to a practice on request.',
            },
          ]}
        />
      </Section>

      <Section id="security" n={4} title="Security of processing">
        <p>
          Article 32 requires technical and organisational measures appropriate to the risk, including encryption,
          the ongoing confidentiality, integrity and availability of processing systems, and the ability to restore
          access to data after an incident. MolarPlus applies the following measures.
        </p>
        <SafeguardList />
      </Section>

      <Section id="breach" n={5} title="Personal data breaches">
        <p>
          MolarPlus will notify the practice without undue delay after becoming aware of a personal data breach, as
          Article 33(2) requires, and will provide the information described in Article 33(3) as it becomes available,
          so that the practice can notify its supervisory authority within 72 hours where Article 33(1) requires and
          communicate the breach to patients where Article 34 requires.
        </p>
      </Section>

      <Section id="transfers" n={6} title="International transfers">
        <p>
          MolarPlus stores practice data on {HOSTING.provider} in the {HOSTING.location}. India is not the subject of
          an adequacy decision of the European Commission or an adequacy regulation in the United Kingdom.
        </p>
        <p>
          Transfers of personal data from the European Economic Area to MolarPlus are therefore made under the
          Standard Contractual Clauses adopted by Commission Implementing Decision (EU) 2021/914, and transfers from the
          United Kingdom under the International Data Transfer Addendum issued by the Information Commissioner, each
          incorporated into the Data Processing Agreement. Onward transfers to sub-processors outside the EEA and the
          United Kingdom are made under the same safeguards or another mechanism recognised under Chapter V.
        </p>
      </Section>

      <Section id="rights" n={7} title="Rights of data subjects">
        <p>
          Patients exercise their rights against the practice, as controller. MolarPlus gives practices the means to act
          on those requests.
        </p>
        <ProvisionTable
          lawLabel="Article"
          rows={[
            {
              provision: '15',
              requirement: 'Right of access.',
              practice: 'The practice can view and export a patient’s complete record and provide it to the patient.',
            },
            {
              provision: '16',
              requirement: 'Right to rectification.',
              practice: 'Authorised staff correct records directly, and changes are recorded in the activity log.',
            },
            {
              provision: '17',
              requirement: 'Right to erasure.',
              practice: 'Carried out on the practice’s instruction, as section 8 describes, subject to any duty to retain health records.',
            },
            {
              provision: '18, 21',
              requirement: 'Rights to restriction of processing and to object.',
              practice: 'MolarPlus assists the practice in giving effect to these rights on request.',
            },
            {
              provision: '20',
              requirement: 'Right to data portability.',
              practice: 'Patient records can be exported in a structured, commonly used, machine-readable format.',
            },
            {
              provision: '77',
              requirement: 'Right to lodge a complaint with a supervisory authority.',
              practice:
                'A patient may complain to the supervisory authority of the Member State of their habitual residence, place of work or the alleged infringement. In the United Kingdom, complaints are made to the Information Commissioner’s Office.',
            },
          ]}
        />
      </Section>

      <Section id="retention" n={8} title="Retention and deletion">
        <p>
          MolarPlus retains practice data for as long as the practice&rsquo;s account is active. A practice may download
          a complete copy of its data at any time. When a practice closes its account and instructs MolarPlus to delete
          its data, MolarPlus deletes that data from its production systems, and copies held in automated backups expire
          as the {HOSTING.backupWindowDays}-day backup window rolls over.
        </p>
        <p>
          Practices remain responsible for keeping health records for any period required by the law of their Member
          State or by their professional regulator, and should export those records before requesting deletion.
        </p>
      </Section>

      <Section id="contact" n={9} title="Contact">
        <p>
          Requests for a Data Processing Agreement, and questions about this statement, may be sent to:
        </p>
        <ContactCard heading="Privacy contact" />
      </Section>
    </ComplianceDocument>
  );
}
