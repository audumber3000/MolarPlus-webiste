import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy - MolarPlus Dental Clinic Management Software',
  description:
    'MolarPlus Privacy Policy. What we collect, how we use and protect it, who we share it with, how Google Calendar data is handled, and your rights.',
  keywords: 'MolarPlus privacy policy, dental software privacy, clinic management data protection, DPDP',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: 'Privacy Policy - MolarPlus',
    description: 'How we protect your data when you use MolarPlus dental clinic management software.',
    url: `${SITE_URL}/privacy-policy`,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-bold text-gray-900 mb-4">{children}</h2>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">{children}</h3>
);
const List = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-6 space-y-2 mt-4">{children}</ul>
);

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: 16 November 2026</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <H2>1. Who we are</H2>
              <p>
                MolarPlus is dental clinic management software, available on the web, Android, iOS and desktop. It is
                operated by Upclick Labs (OPC) Pvt. Ltd. (&quot;MolarPlus&quot;, &quot;we&quot;, &quot;our&quot; or
                &quot;us&quot;). This policy explains what information we collect, how we use and protect it, who we
                share it with, and the choices you have. It applies to molarplus.com, the MolarPlus apps and the
                related services (together, the &quot;Service&quot;).
              </p>
            </section>

            <section>
              <H2>2. Clinics and patients: whose data is it?</H2>
              <p>
                A clinic that uses MolarPlus decides what patient information it records and why. For that patient
                information the clinic is the data fiduciary (the controller), and MolarPlus processes it on the
                clinic&apos;s behalf, only to provide the Service to that clinic. If you are a patient and want to see,
                correct or delete your records, please contact your clinic; we will help the clinic respond.
              </p>
              <p className="mt-4">
                For the accounts of clinic owners and staff, and for visitors to our website, MolarPlus is the data
                fiduciary.
              </p>
            </section>

            <section>
              <H2>3. What we collect</H2>
              <List>
                <li>
                  <strong>Account information:</strong> name, mobile number, email address, role, sign-in PIN (stored
                  only as a secure hash), and clinic details such as name, address, timings and GST number.
                </li>
                <li>
                  <strong>Clinic records entered by the clinic:</strong> patient details, appointments, clinical notes,
                  dental charts, prescriptions, X-rays, documents, invoices and payments.
                </li>
                <li>
                  <strong>Payment information:</strong> plan, amount and payment status. Card, UPI and bank details are
                  handled by our payment partners and are never stored by MolarPlus.
                </li>
                <li>
                  <strong>Usage and device information:</strong> pages and features used, app version, device type,
                  error reports and, in the mobile app, privacy-masked session recordings, used to fix problems and
                  improve the Service.
                </li>
                <li>
                  <strong>Communications:</strong> messages you send to our support team.
                </li>
                <li>
                  <strong>Data from connected services:</strong> only when the clinic chooses to connect one, such as
                  Google Calendar (see section 6).
                </li>
              </List>
            </section>

            <section>
              <H2>4. How we use it</H2>
              <List>
                <li>To provide the Service: scheduling, records, billing, reports and reminders the clinic sets up</li>
                <li>To send messages the clinic asks us to send, such as appointment reminders and bills on WhatsApp, SMS or email</li>
                <li>To sign you in, keep accounts secure and prevent fraud and abuse</li>
                <li>To process subscription payments and issue GST invoices</li>
                <li>To provide support, and to tell you about changes to the Service</li>
                <li>To understand how the Service is used, fix problems and improve it</li>
                <li>To meet legal obligations</li>
              </List>
              <p className="mt-4">
                We do not sell personal information, and we do not use patient information for advertising.
              </p>
            </section>

            <section>
              <H2>5. Who we share it with</H2>
              <p>
                We share information only with service providers that help us run the Service, under contracts that
                limit their use of it to that purpose, and only as much as each needs:
              </p>
              <List>
                <li><strong>Hosting, storage and backups:</strong> Amazon Web Services and Cloudflare</li>
                <li><strong>WhatsApp, SMS and email delivery:</strong> MSG91 and Zoho ZeptoMail</li>
                <li><strong>Payments:</strong> Cashfree Payments (India) and Dodo Payments (outside India)</li>
                <li><strong>Notifications and analytics:</strong> Google Firebase, PostHog and Sentry</li>
                <li><strong>Services a clinic chooses to connect:</strong> for example Google Calendar or the clinic&apos;s own WhatsApp number</li>
              </List>
              <p className="mt-4">
                We may also disclose information when required by law or a valid legal request, or to protect the
                rights, safety and security of our users and the Service. If MolarPlus is ever part of a merger or
                acquisition, this policy will continue to apply to the information transferred.
              </p>
            </section>

            <section>
              <H2>6. Google user data (Google Calendar)</H2>
              <p>
                A clinic owner can connect the clinic&apos;s Google account to MolarPlus from Control Center &gt;
                Integrations &gt; Calendar. Nothing is accessed unless the owner connects it, and the owner can
                disconnect at any time.
              </p>

              <H3>What we access</H3>
              <List>
                <li>
                  <strong>The list of calendars in the account</strong> (calendar.calendarlist.readonly), so the owner
                  can choose which calendars to show in MolarPlus.
                </li>
                <li>
                  <strong>Events on the calendars the owner chooses</strong> (calendar.events.readonly): the title, time
                  and location of each event.
                </li>
                <li>
                  <strong>One calendar that MolarPlus creates for itself</strong> (calendar.app.created), named
                  &quot;MolarPlus · &lt;clinic name&gt;&quot;. MolarPlus can only write to this calendar, never to the
                  account&apos;s other calendars.
                </li>
                <li>The email address of the connected Google account, to show which account is connected.</li>
              </List>

              <H3>How we use it</H3>
              <List>
                <li>Events from the chosen calendars appear on the clinic&apos;s MolarPlus calendar as read-only busy time, so staff do not double-book a doctor. MolarPlus never changes or deletes these events.</li>
                <li>The clinic&apos;s MolarPlus appointments are written to the MolarPlus calendar and kept up to date when they are booked, moved or cancelled. Patient phone numbers and clinical notes are never sent to Google, and the clinic chooses whether event titles show the patient&apos;s name, their initials, or only the word &quot;Appointment&quot;.</li>
                <li>Google data is used only to provide these features to the clinic that connected it. It is not used for advertising, not sold, not used to train AI or machine learning models, and not read by people at MolarPlus except with the clinic&apos;s permission for support, for security, or where the law requires it.</li>
              </List>

              <H3>How we store and protect it</H3>
              <p>
                Access tokens are encrypted at rest. Event details are stored only to draw them on the clinic&apos;s
                calendar and are visible only to that clinic&apos;s staff.
              </p>

              <H3>Keeping and deleting it</H3>
              <p>
                When the clinic disconnects Google Calendar, we revoke our access with Google and delete the stored
                Google events and tokens. The owner can also choose to remove the MolarPlus calendar from the Google
                account at the same time. Access can also be removed from the Google account at any time at{' '}
                <a href="https://myaccount.google.com/permissions" className="text-blue-600 hover:text-blue-700">
                  myaccount.google.com/permissions
                </a>
                .
              </p>

              <H3>Limited Use</H3>
              <p>
                MolarPlus&apos;s use and transfer to any other app of information received from Google APIs will adhere
                to the{' '}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </section>

            <section>
              <H2>7. How we protect information</H2>
              <List>
                <li>All traffic to and from the Service is encrypted in transit (HTTPS)</li>
                <li>Credentials for connected services are encrypted at rest, and sign-in PINs are stored only as secure hashes</li>
                <li>Role-based permissions let each clinic decide what each staff member can see and do</li>
                <li>Sensitive actions, such as deleting a patient or a paid bill, need the clinic&apos;s master password</li>
                <li>Regular backups, and access to production systems limited to the people who need it</li>
              </List>
              <p className="mt-4">
                No system is perfectly secure. If a breach affects your information, we will tell the affected clinics
                and the authorities as the law requires.
              </p>
            </section>

            <section>
              <H2>8. How long we keep it</H2>
              <p>
                We keep account and clinic records for as long as the clinic&apos;s account is active. When an account
                is closed, the clinic can export its data for 30 days, after which it is deleted from our live systems.
                Backup copies expire on a rolling cycle shortly after. We keep invoices and payment records for as long
                as tax and accounting laws require.
              </p>
            </section>

            <section>
              <H2>9. Your rights</H2>
              <p>Subject to applicable law, including India&apos;s Digital Personal Data Protection Act, 2023, you can:</p>
              <List>
                <li>Ask for a summary of the personal information we hold about you</li>
                <li>Ask us to correct or update it</li>
                <li>Ask us to delete it, where we are not required to keep it</li>
                <li>Withdraw consent you have given, for example by disconnecting a connected service</li>
                <li>Export your clinic&apos;s data at any time</li>
                <li>Raise a grievance with us, and if it is not resolved, with the Data Protection Board of India</li>
                <li>Nominate another person to exercise these rights on your behalf</li>
              </List>
              <p className="mt-4">
                Patients should send requests about their records to their clinic, as explained in section 2.
              </p>
            </section>

            <section>
              <H2>10. Children</H2>
              <p>
                MolarPlus accounts are for adults (18 and over) who run or work at a clinic. Clinics may record the
                details of patients who are children; in that case the clinic is responsible for obtaining the consent
                of a parent or guardian.
              </p>
            </section>

            <section>
              <H2>11. Cookies</H2>
              <p>
                We use cookies and similar technologies to keep you signed in and to understand how the website is used.
                See our <Link href="/cookies-policy" className="text-blue-600 hover:text-blue-700">Cookies Policy</Link>.
              </p>
            </section>

            <section>
              <H2>12. Changes to this policy</H2>
              <p>
                We may update this policy from time to time. We will post the new version on this page and update the
                date at the top, and we will tell clinics by email or in the app about any significant change.
              </p>
            </section>

            <section>
              <H2>13. Contact and grievance officer</H2>
              <p>For questions, requests or complaints about privacy, please contact our Grievance Officer:</p>
              <p className="mt-2">
                <strong>Email:</strong> support@molarplus.com
                <br />
                <strong>Phone:</strong> +91 9594078777
                <br />
                <strong>Address:</strong> Upclick Labs (OPC) Pvt. Ltd., Sky Loft, opposite Golf Course, Shastrinagar,
                Yerawada, Pune, Maharashtra 411006, India
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
