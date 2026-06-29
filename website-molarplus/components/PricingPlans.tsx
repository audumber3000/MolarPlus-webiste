'use client';

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { APP_URL } from '@/lib/constants';
import { colors } from '@/lib/seo';
import { trackPricingViewed, trackSignupStarted } from '@/analytics/track';

export type CountryCode = 'IN' | 'OTHER';

// Free plan: the whole product, for one clinic.
const FREE_HIGHLIGHTS = [
  'One clinic — every feature included',
  'Patients, charting, treatment plans & prescriptions',
  'Appointments, online booking & billing',
  'Staff, roles, inventory & WhatsApp reminders',
  'Web, iOS, Android & desktop apps',
  '₹0 forever — no trial, no credit card',
];

// Multi-Branch is the only paid plan, and the only thing it adds.
const MULTI_BRANCH_ADDS = [
  'Everything in Single Clinic, plus:',
  'Add unlimited clinic branches',
  'Switch between branches in one login',
  'Cross-branch reporting',
  'Priority support',
];

const PRICE = {
  IN: { monthly: 899, annualMonthly: 675, annualTotal: 8100, currency: '₹' },
  OTHER: { monthly: 10, annualMonthly: 8, annualTotal: 96, currency: '$' },
};

async function detectCountry(): Promise<CountryCode> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeout);
    const data = await res.json();
    return data?.country_code === 'IN' ? 'IN' : 'OTHER';
  } catch {
    return 'OTHER';
  }
}

export default function PricingPlans() {
  const [country, setCountry] = useState<CountryCode | null>(null);
  const [overrideCountry, setOverrideCountry] = useState<CountryCode | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [showCountrySelect, setShowCountrySelect] = useState(false);

  const effectiveCountry = overrideCountry ?? country ?? 'OTHER';
  const isIndia = effectiveCountry === 'IN';

  useEffect(() => {
    detectCountry().then(setCountry);
  }, []);

  useEffect(() => {
    trackPricingViewed();
  }, []);

  const p = isIndia ? PRICE.IN : PRICE.OTHER;
  const isAnnual = billingCycle === 'annual';
  const displayPrice = isAnnual ? p.annualMonthly : p.monthly;
  const savePct = Math.round((1 - p.annualTotal / (p.monthly * 12)) * 100);

  return (
    <div className="mb-12">
      {/* Country selector */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowCountrySelect((s) => !s)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium hover:bg-gray-50"
          >
            {isIndia ? '🇮🇳 India (INR)' : '🌐 Other countries (USD)'}
            <span className="text-gray-400">▼</span>
          </button>
          {showCountrySelect && (
            <>
              <div className="fixed inset-0 z-10" aria-hidden onClick={() => setShowCountrySelect(false)} />
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-20 w-56 rounded-lg border border-gray-200 bg-white shadow-lg py-1">
                <button
                  type="button"
                  onClick={() => {
                    setOverrideCountry('IN');
                    setShowCountrySelect(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm ${effectiveCountry === 'IN' ? 'bg-blue-50 font-medium' : ''}`}
                >
                  🇮🇳 India (INR)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOverrideCountry('OTHER');
                    setShowCountrySelect(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm ${effectiveCountry === 'OTHER' ? 'bg-blue-50 font-medium' : ''}`}
                >
                  🌐 Other countries (USD)
                </button>
              </div>
            </>
          )}
        </div>
        <span className="text-gray-500 text-sm">Prices shown in {isIndia ? 'INR' : 'USD'}</span>
      </div>

      {/* Billing toggle (Multi-Branch only) */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <span className={`text-lg ${!isAnnual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
          Monthly
        </span>
        <button
          type="button"
          onClick={() => setBillingCycle(isAnnual ? 'monthly' : 'annual')}
          className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors"
          style={{ backgroundColor: isAnnual ? colors.primary : '#d1d5db' }}
        >
          <span
            className={`inline-block h-6 w-6 rounded-full bg-white transition-transform ${
              isAnnual ? 'translate-x-7' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={`text-lg ${isAnnual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
          Annual <span className="text-green-600 text-sm">(Save {savePct}%)</span>
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        {/* Single Clinic — Free */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Single Clinic</h2>
          <p className="text-gray-600 mb-6">The whole of MolarPlus, for one clinic</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">Free</span>
            <span className="text-gray-500 ml-2">forever</span>
          </div>
          <ul className="space-y-3 mb-6 flex-1">
            {FREE_HIGHLIGHTS.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={`${APP_URL}/signup`}
            onClick={() => trackSignupStarted('pricing', `${APP_URL}/signup`)}
            className="w-full py-3 rounded-lg font-semibold text-center block border-2 border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
          >
            Start free
          </a>
        </div>

        {/* Multi-Branch — Paid */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-500 flex flex-col relative z-10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            For growing groups
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Multi-Branch</h2>
          <p className="text-gray-600 mb-6">Run multiple locations from one account</p>
          <div className="mb-1">
            <span className="text-4xl font-bold" style={{ color: colors.primary }}>
              {p.currency}{displayPrice}
            </span>
            <span className="text-gray-500 ml-1">/month</span>
          </div>
          <p className="text-sm text-gray-500 mb-6 h-5">
            {isAnnual
              ? `billed annually — ${p.currency}${p.annualTotal}/year`
              : `or ${p.currency}${p.annualMonthly}/mo billed annually`}
          </p>
          <ul className="space-y-3 mb-6 flex-1">
            {MULTI_BRANCH_ADDS.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                {i === 0 ? (
                  <span className="text-sm font-semibold text-gray-900">{f}</span>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </>
                )}
              </li>
            ))}
          </ul>
          <a
            href={`${APP_URL}/signup`}
            onClick={() => trackSignupStarted('pricing', `${APP_URL}/signup`)}
            className="w-full py-3 rounded-lg font-semibold text-center block text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: colors.primary }}
          >
            Get Multi-Branch
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        Solo or single-location clinics get the entire product for free — no trial, no credit card.
        The only reason to pay is running more than one branch.
      </p>
    </div>
  );
}
