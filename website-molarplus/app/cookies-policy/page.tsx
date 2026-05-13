import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Cookies Policy - MolarPlus Dental Clinic Management Software',
  description:
    'MolarPlus Cookies Policy. Learn about how we use cookies and similar tracking technologies on the MolarPlus website and platform.',
  keywords: 'MolarPlus cookies policy, dental software cookies, cookie consent, tracking technologies',
  alternates: { canonical: `${SITE_URL}/cookies-policy` },
  openGraph: {
    title: 'Cookies Policy - MolarPlus',
    description: 'How MolarPlus uses cookies and tracking technologies on our website and platform.',
    url: `${SITE_URL}/cookies-policy`,
  },
  robots: { index: true, follow: true },
};

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Cookies Policy</h1>
          <p className="text-gray-500 mb-10">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when
                you visit a website. They are widely used to make websites work more efficiently, remember your
                preferences, and provide information to website owners about how their site is being used.
              </p>
              <p className="mt-4">
                This Cookies Policy explains how <strong>Upclick Labs (OPC) Pvt. Ltd.</strong> (&quot;we&quot;,
                &quot;our&quot;, or &quot;us&quot;) uses cookies and similar tracking technologies on the MolarPlus
                website (www.molarplus.com) and the MolarPlus application platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Strictly Necessary Cookies</h3>
              <p>
                These cookies are essential for the website and platform to function correctly. They enable core
                features such as user authentication, session management, and security. You cannot opt out of these
                cookies as the Service cannot function without them.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Session authentication tokens (keep you logged in during your session)</li>
                <li>Security cookies (protect against cross-site request forgery)</li>
                <li>Load balancing cookies (ensure stable performance)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Performance and Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting and reporting
                information anonymously. We use this data to improve the platform experience.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Google Analytics:</strong> Tracks page views, user journeys, and engagement metrics. Data is anonymised and aggregated.</li>
                <li><strong>Performance monitoring:</strong> Measures page load times and error rates to improve reliability.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Functional Cookies</h3>
              <p>
                These cookies remember your preferences and settings to provide a more personalised experience.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Language and region preferences</li>
                <li>Dashboard layout and display settings</li>
                <li>Recently viewed patients or appointments (within the platform)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.4 Marketing Cookies</h3>
              <p>
                These cookies may be used to deliver relevant advertisements and track the effectiveness of our
                marketing campaigns. We do not use aggressive advertising tracking on patient-facing areas of the
                platform.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Google Ads conversion tracking (website only)</li>
                <li>Campaign attribution (to understand which channels bring new users)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Cookies</h2>
              <p>Some cookies on our website are set by third-party services. These include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Google Analytics</strong>, for usage analytics (analytics.google.com)</li>
                <li><strong>Google Ads</strong>, for marketing attribution (ads.google.com)</li>
                <li><strong>Razorpay / Stripe</strong>, for payment processing (only when completing a transaction)</li>
              </ul>
              <p className="mt-4">
                These third parties have their own privacy and cookie policies. We encourage you to review them
                independently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookie Duration</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Cookie Type</th>
                      <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200">Session cookies</td>
                      <td className="p-3 border border-gray-200">Deleted when you close your browser</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border border-gray-200">Authentication cookies</td>
                      <td className="p-3 border border-gray-200">Up to 30 days (or until you log out)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Analytics cookies (Google Analytics)</td>
                      <td className="p-3 border border-gray-200">Up to 2 years</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border border-gray-200">Preference cookies</td>
                      <td className="p-3 border border-gray-200">Up to 1 year</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Marketing cookies</td>
                      <td className="p-3 border border-gray-200">Up to 90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How to Control Cookies</h2>
              <p>You can control and manage cookies in several ways:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Browser Settings</h3>
              <p>
                Most browsers allow you to refuse or delete cookies through their settings. Note that disabling
                cookies may affect the functionality of the MolarPlus website and platform.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Google Analytics Opt-Out</h3>
              <p>
                You can opt out of Google Analytics tracking by installing the{' '}
                <strong>Google Analytics Opt-out Browser Add-on</strong> available at tools.google.com/dlpage/gaoptout.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Patient Data and Cookies</h2>
              <p>
                MolarPlus takes the privacy of patient data very seriously. Cookies used within the clinic management
                platform (once logged in) are strictly functional and security-related. We do not use advertising
                or third-party tracking cookies in areas where patient data is accessed or displayed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <p>
                We may update this Cookies Policy from time to time to reflect changes in technology, regulation, or
                our practices. We will post the updated policy on this page with a revised &quot;Last updated&quot;
                date. We recommend reviewing this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p>If you have any questions about our use of cookies, please contact:</p>
              <p className="mt-2">
                <strong>Email:</strong> support@molarplus.com<br />
                <strong>Address:</strong> Sky Loft, opposite Golf Course, Shastrinagar, Yerawada, Pune, Maharashtra 411006, India
              </p>
            </section>

          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-6 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">← Back to Home</Link>
            <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-blue-600 hover:text-blue-700 font-medium">Terms of Use</Link>
            <Link href="/refund-policy" className="text-blue-600 hover:text-blue-700 font-medium">Refund Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
