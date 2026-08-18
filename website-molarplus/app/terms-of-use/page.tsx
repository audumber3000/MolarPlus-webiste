import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/seo';

// The date legacy free single-clinic accounts move onto a paid plan.
// Also quoted in the /pricing FAQ — keep the two in step.
const LEGACY_FREE_END = '31 October 2026';

export const metadata: Metadata = {
  title: 'Terms of Use - MolarPlus Dental Clinic Management Software',
  description:
    'Terms of Use for MolarPlus dental clinic management software. Read the terms governing your use of the MolarPlus platform, apps, and services.',
  keywords: 'MolarPlus terms of use, dental software terms, clinic management software terms and conditions',
  alternates: { canonical: `${SITE_URL}/terms-of-use` },
  openGraph: {
    title: 'Terms of Use - MolarPlus',
    description: 'Terms governing your use of the MolarPlus dental clinic management platform.',
    url: `${SITE_URL}/terms-of-use`,
  },
  robots: { index: true, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Terms of Use</h1>
          <p className="text-gray-500 mb-10">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the MolarPlus platform, mobile applications, or any related services
                (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Use. The Service
                is operated by <strong>Upclick Labs (OPC) Pvt. Ltd.</strong> (&quot;Company&quot;, &quot;we&quot;,
                &quot;our&quot;, or &quot;us&quot;). If you do not agree to these terms, you must not use the Service.
              </p>
              <p className="mt-4">
                These terms apply to all users of the Service, including dental clinic owners, dentists, clinic staff,
                and any other persons who access or use the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p>
                MolarPlus is a dental clinic management software platform that provides tools for appointment
                scheduling, patient record management, billing, analytics, staff management, and related clinic
                operations. The Service is available via web browser, Android mobile application, and iOS application
                (where available).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
              <p>To use the Service, you must create an account. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly update your account information if it changes</li>
                <li>Accept responsibility for all activity that occurs under your account</li>
                <li>Notify us immediately of any unauthorised access to your account at support@molarplus.com</li>
              </ul>
              <p className="mt-4">
                You must be at least 18 years old to create an account. Accounts created on behalf of a clinic or
                business must be authorised by the clinic owner or a duly authorised representative.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription Plans and Payment</h2>
              <p>MolarPlus offers the following subscription plans:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Free trial:</strong> Every new account receives 7 days of the Pro plan at no charge. No credit card is required to begin the trial, and no charge is made automatically at the end of it. Access is limited until a paid plan is selected.</li>
                <li><strong>Plus:</strong> Paid monthly or annually. Priced at ₹399/month plus applicable GST, or ₹3,830/year plus GST (India), and $5/month or $48/year (international, no GST). Covers a single clinic location and up to 5 staff logins, and includes patient records, dental charting, treatment planning, prescriptions, appointments and online booking, billing, consent forms, inventory, own-number WhatsApp messaging, the report library with 12 months of history, and the web, mobile and desktop applications.</li>
                <li><strong>Pro:</strong> Paid monthly or annually. Priced at ₹999/month plus applicable GST, or ₹9,590/year plus GST (India), and $10/month or $96/year (international, no GST). Includes everything in Plus and adds unlimited clinic branches under one account, branch switching in a single login, cross-branch reporting, unlimited staff logins, granular per-user permissions, the unified email and WhatsApp inbox, Google review and competitor tracking, audit logging, unlimited report history with bulk data export, and priority support.</li>
              </ul>
              <p className="mt-4">
                Indian prices are stated exclusive of Goods and Services Tax. GST is applied at the prevailing rate
                (currently 18%) at checkout, and a GST invoice is issued for each payment. Prices for customers outside
                India are stated in US dollars and are not subject to Indian GST.
              </p>
              <p className="mt-4">
                <strong>Legacy free accounts.</strong> Clinics that registered while the Service offered a free
                single-clinic plan retain full access at no charge until <strong>{LEGACY_FREE_END}</strong>. We will
                give notice by email before that date. After it, continued use requires a Plus or Pro subscription.
                Account data remains available for export throughout, and is retained in accordance with Section 8.
              </p>
              <p className="mt-4">
                Subscription fees are billed in advance. Upgrades take effect immediately; downgrades take effect at the
                next renewal date. We reserve the right to change pricing with 30 days&apos; notice.
                Continued use after a pricing change constitutes acceptance of the new pricing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Violate any applicable law or regulation, including healthcare data protection laws</li>
                <li>Store or transmit any unlawful, harmful, or abusive content</li>
                <li>Impersonate any person or entity</li>
                <li>Attempt to gain unauthorised access to any part of the Service or its infrastructure</li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
                <li>Resell or sublicense access to the Service without written permission</li>
                <li>Use the Service for any purpose other than legitimate dental clinic management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Patient Data and HIPAA Compliance</h2>
              <p>
                You are solely responsible for ensuring that your use of MolarPlus complies with applicable
                healthcare data protection laws, including (where applicable) HIPAA, India&apos;s DPDP Act, and any
                state-level health data regulations. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Obtain all necessary patient consents before entering patient data into the platform</li>
                <li>Not enter more patient data than is necessary for clinic management purposes</li>
                <li>Maintain appropriate role-based access controls for your staff</li>
                <li>Notify affected patients promptly in the event of any data breach within your clinic systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the Service, including but not limited to text, graphics,
                logos, icons, and software, are the exclusive property of Upclick Labs (OPC) Pvt. Ltd. and are
                protected by applicable intellectual property laws. You may not copy, modify, distribute, or create
                derivative works without our express written consent.
              </p>
              <p className="mt-4">
                You retain ownership of all patient and clinic data you enter into the platform. By using the Service,
                you grant us a limited licence to host, process, and display your data solely to provide the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p>
                You may terminate your account at any time by contacting us at support@molarplus.com. We may suspend
                or terminate your account immediately if you violate these Terms. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Your access to the Service will be revoked</li>
                <li>You may export your data within 30 days of termination</li>
                <li>After 30 days, your data may be permanently deleted from our servers</li>
                <li>No refund will be issued for unused portions of a paid subscription unless covered by our Refund Policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
              <p>
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any
                kind, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or
                completely secure. MolarPlus is a clinic management tool and does not constitute medical advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Upclick Labs (OPC) Pvt. Ltd. shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages arising from your use of
                or inability to use the Service. Our total liability shall not exceed the amounts paid by you to us
                in the 12 months prior to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by
                email or by displaying a notice on the platform. Continued use of the Service after changes take
                effect constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p>For any questions regarding these Terms of Use, please contact:</p>
              <p className="mt-2">
                <strong>Email:</strong> support@molarplus.com<br />
                <strong>Address:</strong> Sky Loft, opposite Golf Course, Shastrinagar, Yerawada, Pune, Maharashtra 411006, India
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-6 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">← Back to Home</Link>
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</Link>
            <Link href="/cookies-policy" className="text-blue-600 hover:text-blue-700 font-medium">Cookies Policy</Link>
            <Link href="/refund-policy" className="text-blue-600 hover:text-blue-700 font-medium">Refund Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
