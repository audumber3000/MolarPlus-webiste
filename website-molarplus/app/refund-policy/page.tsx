import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Refund Policy - MolarPlus Dental Clinic Management Software',
  description:
    'MolarPlus Refund Policy. Learn about our refund and cancellation terms for Pro and Enterprise dental clinic management software subscriptions.',
  keywords: 'MolarPlus refund policy, dental software refund, subscription cancellation, clinic software money back',
  alternates: { canonical: `${SITE_URL}/refund-policy` },
  openGraph: {
    title: 'Refund Policy - MolarPlus',
    description: 'Our refund and cancellation terms for MolarPlus dental clinic management software subscriptions.',
    url: `${SITE_URL}/refund-policy`,
  },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Refund Policy</h1>
          <p className="text-gray-500 mb-10">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p>
                At MolarPlus, operated by <strong>Upclick Labs (OPC) Pvt. Ltd.</strong>, we are committed to
                providing a high-quality dental clinic management platform. We want you to feel confident when
                subscribing. This Refund Policy explains the conditions under which refunds are issued for paid
                subscriptions.
              </p>
              <p className="mt-4">
                Our <strong>Free Plan</strong> has no charges and is therefore not subject to this policy. This
                policy applies to the <strong>Pro Plan</strong> and <strong>Enterprise Plan</strong> only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Pro Plan — Refund Eligibility</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Monthly Subscriptions</h3>
              <p>
                If you subscribed to the Pro Plan on a monthly basis and are not satisfied with the Service, you may
                request a full refund within <strong>7 days</strong> of your initial payment or renewal date.
                Refund requests received after 7 days will not be eligible.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Annual Subscriptions</h3>
              <p>
                If you subscribed to the Pro Plan on an annual basis, you may request a full refund within{' '}
                <strong>14 days</strong> of your initial annual payment. After 14 days, refunds for annual
                subscriptions are issued on a pro-rata basis for the remaining unused months, subject to a processing
                review.
              </p>
              <p className="mt-4">
                Annual subscription renewals follow the same 14-day refund window from the renewal date.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Free Trial</h3>
              <p>
                Where a free trial period is offered, no charges are made during the trial. If you are charged
                immediately after a trial period ends and wish to cancel, please contact us within 48 hours and
                we will review the case on a goodwill basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Enterprise Plan — Refund Eligibility</h2>
              <p>
                Enterprise Plan agreements are governed by a separate contract between MolarPlus and your
                organisation. Refund terms for Enterprise Plans are specified in the individual agreement.
                Please contact your account manager or email support@molarplus.com for queries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Non-Refundable Situations</h2>
              <p>Refunds will <strong>not</strong> be issued in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>The refund request is made after the applicable refund window (7 days for monthly, 14 days for annual)</li>
                <li>The account has been suspended or terminated due to violation of our Terms of Use</li>
                <li>Partial months of usage in a monthly subscription cycle</li>
                <li>Add-on services, onboarding support, or custom development work already delivered</li>
                <li>Charges arising from WhatsApp or SMS notification usage beyond the included quota</li>
                <li>Downgrades from Pro to Free Plan mid-cycle (downgrade takes effect at the next renewal)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How to Request a Refund</h2>
              <p>To request a refund, please follow these steps:</p>
              <ol className="list-decimal pl-6 space-y-3 mt-4">
                <li>
                  Email us at <strong>support@molarplus.com</strong> with the subject line{' '}
                  <em>&quot;Refund Request — [Your Clinic Name]&quot;</em>
                </li>
                <li>Include your registered email address, the plan you subscribed to, and the payment date</li>
                <li>Briefly describe the reason for your refund request (optional but helpful for us to improve)</li>
                <li>Our support team will acknowledge your request within <strong>2 business days</strong></li>
              </ol>
              <p className="mt-4">
                If your refund is approved, it will be processed to the original payment method within{' '}
                <strong>7–10 business days</strong>, depending on your bank or payment provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cancellation</h2>
              <p>
                You can cancel your subscription at any time from within the MolarPlus platform under Account
                Settings, or by contacting us at support@molarplus.com. Cancellation stops future billing but does
                not automatically trigger a refund.
              </p>
              <p className="mt-4">
                After cancellation, your account will remain active until the end of the current paid period. Your
                data will be retained for 30 days after the subscription ends, after which it may be permanently
                deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Disputes</h2>
              <p>
                If you believe you have been charged incorrectly, please contact us at support@molarplus.com before
                initiating a chargeback with your bank or payment provider. Chargebacks initiated without contacting
                us first may result in account suspension pending investigation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p>For any questions regarding refunds or cancellations, please contact:</p>
              <p className="mt-2">
                <strong>Email:</strong> support@molarplus.com<br />
                <strong>Response time:</strong> Within 2 business days<br />
                <strong>Address:</strong> Sky Loft, opposite Golf Course, Shastrinagar, Yerawada, Pune, Maharashtra 411006, India
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-6 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">← Back to Home</Link>
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-blue-600 hover:text-blue-700 font-medium">Terms of Use</Link>
            <Link href="/cookies-policy" className="text-blue-600 hover:text-blue-700 font-medium">Cookies Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
