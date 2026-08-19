import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SITE_URL, colors } from '@/lib/seo';
import { APP_URL } from '@/lib/constants';
import { SignupLink } from '@/components/TrackedCTA';
import WhatsAppCta from '@/components/WhatsAppCta';

export const metadata: Metadata = {
  title: 'International Pricing by Country | MolarPlus Dental Software',
  description:
    'MolarPlus Plus and Pro pricing converted into local currency for South Asia and the Middle East, with each country’s headline consumption tax rate.',
  keywords:
    'dental software pricing UAE, dental software pricing Saudi Arabia, dental clinic software price Pakistan, dental software Bangladesh Sri Lanka Nepal, MolarPlus international pricing',
  alternates: { canonical: `${SITE_URL}/pricing/international` },
  openGraph: {
    title: 'International Pricing by Country | MolarPlus',
    description:
      'Plus and Pro pricing in local currency across South Asia and the Middle East, with each country’s consumption tax rate.',
    url: `${SITE_URL}/pricing/international`,
  },
};

const PLUS_USD = 5;
const PRO_USD = 10;
const GROWTH_USD = 15;

/**
 * When the figures below were last set by hand.
 *
 * Both the FX rates and the tax rates are hardcoded, so this is the one date
 * that describes the whole table. Update it in the same edit that touches a
 * rate — a stale stamp on fresh numbers is worse than no stamp at all.
 */
const LAST_UPDATED = '19 August 2026, 05:29 IST (18 August 2026, 23:59 UTC)';

/** Units of local currency per 1 USD, mid-market, as of LAST_UPDATED. */
const RATES: Record<string, number> = {
  INR: 95.6950, PKR: 277.9245, BDT: 122.6777, LKR: 332.0628,
  NPR: 153.1116, BTN: 95.6948, MVR: 15.4423, AFN: 65.2274,
  AED: 3.6725, SAR: 3.7500, QAR: 3.6400, KWD: 0.3085, BHD: 0.3760,
  OMR: 0.3845, JOD: 0.7090, LBP: 89500, IQD: 1312.0765,
  EGP: 50.2140, ILS: 2.9642, TRY: 47.8926,
};

type Country = {
  /** ISO 3166-1 alpha-2, used to derive the flag glyph. */
  iso: string;
  name: string;
  /** ISO 4217 code. */
  currency: string;
  /** Name of the local consumption tax, as it appears on an invoice there. */
  taxName: string;
  /** Headline standard rate. `null` where no general consumption tax exists. */
  taxRate: number | null;
  taxNote?: string;
  /**
   * Set where the country has its own list price rather than a USD conversion.
   * India is billed in INR through Cashfree, so it is not an FX estimate.
   */
  localList?: { plus: number; pro: number; growth: number };
};

const SOUTH_ASIA: Country[] = [
  {
    iso: 'IN',
    name: 'India',
    currency: 'INR',
    taxName: 'GST',
    taxRate: 18,
    localList: { plus: 399, pro: 999, growth: 1500 },
  },
  { iso: 'PK', name: 'Pakistan', currency: 'PKR', taxName: 'Sales tax on services', taxRate: 15, taxNote: '15–16%, set by province' },
  { iso: 'BD', name: 'Bangladesh', currency: 'BDT', taxName: 'VAT', taxRate: 15 },
  { iso: 'LK', name: 'Sri Lanka', currency: 'LKR', taxName: 'VAT', taxRate: 18 },
  { iso: 'NP', name: 'Nepal', currency: 'NPR', taxName: 'VAT', taxRate: 13 },
  { iso: 'BT', name: 'Bhutan', currency: 'BTN', taxName: 'Sales tax', taxRate: 7, taxNote: 'GST Act legislated at 7%, phased in' },
  { iso: 'MV', name: 'Maldives', currency: 'MVR', taxName: 'GST', taxRate: 8, taxNote: 'General GST; tourism GST is 16%' },
  { iso: 'AF', name: 'Afghanistan', currency: 'AFN', taxName: 'Business receipts tax', taxRate: 4 },
];

const MIDDLE_EAST: Country[] = [
  { iso: 'AE', name: 'United Arab Emirates', currency: 'AED', taxName: 'VAT', taxRate: 5 },
  { iso: 'SA', name: 'Saudi Arabia', currency: 'SAR', taxName: 'VAT', taxRate: 15 },
  { iso: 'QA', name: 'Qatar', currency: 'QAR', taxName: 'No general VAT', taxRate: null },
  { iso: 'KW', name: 'Kuwait', currency: 'KWD', taxName: 'No general VAT', taxRate: null },
  { iso: 'BH', name: 'Bahrain', currency: 'BHD', taxName: 'VAT', taxRate: 10 },
  { iso: 'OM', name: 'Oman', currency: 'OMR', taxName: 'VAT', taxRate: 5 },
  { iso: 'JO', name: 'Jordan', currency: 'JOD', taxName: 'General sales tax', taxRate: 16 },
  { iso: 'LB', name: 'Lebanon', currency: 'LBP', taxName: 'VAT', taxRate: 11 },
  { iso: 'IQ', name: 'Iraq', currency: 'IQD', taxName: 'No general VAT', taxRate: null, taxNote: 'Sales tax applies to selected goods and services' },
  { iso: 'EG', name: 'Egypt', currency: 'EGP', taxName: 'VAT', taxRate: 14 },
  { iso: 'IL', name: 'Israel', currency: 'ILS', taxName: 'VAT', taxRate: 18 },
  { iso: 'TR', name: 'Türkiye', currency: 'TRY', taxName: 'VAT (KDV)', taxRate: 20 },
];

/** ISO 3166-1 alpha-2 → regional-indicator flag glyph. */
function flagOf(iso: string): string {
  return String.fromCodePoint(...[...iso.toUpperCase()].map((c) => 0x1f1a5 + c.charCodeAt(0)));
}

/**
 * Format a USD amount in a local currency.
 *
 * Currencies worth less than about a twentieth of a dollar per unit are shown
 * whole — fractions of a rupee are noise on a price, not precision. Everything
 * else keeps the decimals its own convention uses, which is why KWD, BHD and
 * OMR correctly show three.
 */
function formatLocal(usd: number, currency: string, rate: number): string {
  const whole = rate >= 20;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
    ...(whole ? { minimumFractionDigits: 0, maximumFractionDigits: 0 } : {}),
  }).format(usd * rate);
}

function formatList(amount: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    currencyDisplay: 'code',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function CountryTable({ caption, rows }: { caption: string; rows: Country[] }) {
  return (
    <div className="mb-14">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{caption}</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full min-w-[52rem] text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-600">
                Country
              </th>
              <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-600 text-right whitespace-nowrap">
                Plus / month
              </th>
              <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-600 text-right whitespace-nowrap">
                Pro / month
              </th>
              <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-600 text-right whitespace-nowrap">
                Growth / month
              </th>
              <th scope="col" className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-600">
                Consumption tax
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => {
              const rate = RATES[c.currency];
              const plus = c.localList
                ? formatList(c.localList.plus, c.currency)
                : formatLocal(PLUS_USD, c.currency, rate);
              const pro = c.localList
                ? formatList(c.localList.pro, c.currency)
                : formatLocal(PRO_USD, c.currency, rate);
              const growth = c.localList
                ? formatList(c.localList.growth, c.currency)
                : formatLocal(GROWTH_USD, c.currency, rate);

              return (
                <tr key={c.iso} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60">
                  <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap">
                    <span aria-hidden="true" className="mr-2.5 text-lg align-[-0.1em]">
                      {flagOf(c.iso)}
                    </span>
                    {c.name}
                    {c.localList && (
                      <span
                        className="ml-2 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
                        style={{ backgroundColor: `${colors.primary}12`, color: colors.primary }}
                      >
                        Billed locally
                      </span>
                    )}
                  </th>
                  <td className="px-5 py-4 text-right tabular-nums text-gray-900 whitespace-nowrap">{plus}</td>
                  <td className="px-5 py-4 text-right tabular-nums text-gray-900 whitespace-nowrap">{pro}</td>
                  <td className="px-5 py-4 text-right tabular-nums text-gray-900 whitespace-nowrap">{growth}</td>
                  <td className="px-5 py-4 text-sm text-gray-700">
                    {c.taxRate === null ? (
                      <span className="text-gray-500">{c.taxName}</span>
                    ) : (
                      <span className="font-medium">{c.taxName} {c.taxRate}%</span>
                    )}
                    {c.taxNote && <span className="block text-xs text-gray-500 mt-0.5">{c.taxNote}</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function InternationalPricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to pricing
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            International pricing by country
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-3 leading-relaxed">
Outside India MolarPlus is <strong>Plus at $5</strong>, <strong>Pro at $10</strong> and{' '}
            <strong>Growth at $15</strong> per month, billed in US dollars. The figures below convert
            those into each local currency, alongside the headline consumption tax rate in each
            country.
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mb-8 leading-relaxed">
            Annual billing takes 20% off either plan. See the{' '}
            <Link href="/pricing" className="font-medium underline decoration-gray-300 hover:decoration-current" style={{ color: colors.primary }}>
              main pricing page
            </Link>{' '}
            for what each plan includes.
          </p>

          <p className="mb-10 text-sm text-gray-500">
            <span className="font-semibold text-gray-900">Last updated:</span> {LAST_UPDATED}
          </p>

          <CountryTable caption="South Asia" rows={SOUTH_ASIA} />
          <CountryTable caption="Middle East" rows={MIDDLE_EAST} />

          {/* For everyone who scanned both tables and did not find themselves. */}
          <div
            className="mb-14 rounded-2xl border p-6 md:p-8 text-center"
            style={{ borderColor: `${colors.primary}25`, backgroundColor: `${colors.primary}08` }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Don&apos;t see your flag?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 leading-relaxed">
              MolarPlus works anywhere. This table just covers where most of our clinics happen to
              be. Message us and we&apos;ll send back Plus and Pro in your currency — usually the
              same day, always from a person.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta
                location="pricing_page"
                label="Ask us on WhatsApp"
                message="Hi MolarPlus, my country isn't in your pricing table. What do Plus and Pro cost for me?"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Notes on this table</h2>
            <ol className="space-y-3 text-sm text-gray-700 leading-relaxed list-decimal pl-5">
              <li>
                <strong>Local amounts are indicative.</strong> Except in India, MolarPlus charges in
                US dollars. Your bank or card issuer performs the conversion at its own rate on the
                day, and may add a foreign-transaction fee, so the amount debited will differ slightly
                from the figure shown here.
              </li>
              <li>
                <strong>India is billed locally.</strong> Indian clinics are charged in rupees at a
                list price of INR 399, INR 999 and INR 1,500 per month plus 18% GST, not at a
                converted dollar rate. A GST invoice is issued for every payment.
              </li>
              <li>
                <strong>The tax column is informational.</strong> It shows each country&apos;s headline
                consumption tax rate as a reference point. It does not mean that rate is added to your
                MolarPlus invoice — whether local tax applies to a cross-border software subscription
                depends on your own registration status and your country&apos;s rules for
                electronically supplied services. Please confirm with your accountant.
              </li>
              <li>
                <strong>Rates change.</strong> Exchange rates and tax rates are both set by hand on
                this page and reviewed periodically. Treat the date above as the age of every figure
                in the table, and verify before relying on any of it for filing.
              </li>
            </ol>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <SignupLink
              href={`${APP_URL}/signup`}
              location="pricing_page"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: colors.primary }}
            >
              Start 7-day free trial <ArrowRight className="w-5 h-5" />
            </SignupLink>
            <p className="mt-3 text-sm text-gray-500">No credit card to start.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
