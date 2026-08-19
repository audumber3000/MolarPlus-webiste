'use client';

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { APP_URL } from '@/lib/constants';
import { colors } from '@/lib/seo';
import { trackPricingViewed, trackSignupStarted, trackPlanSelected } from '@/analytics/track';

export type CountryCode = 'IN' | 'OTHER';

// Plus: one clinic, run properly. Deliberately not a crippled tier — a solo
// practice gets the clinical, billing and WhatsApp work it does every day.
const PLUS_FEATURES = [
  'One clinic — 300 patients & 300 appointments a month',
  'Dental charting, treatment plans & prescriptions',
  'Billing, invoices, payments, expenses & inventory',
  'WhatsApp reminders from your own number',
  'Digital consent forms with e-signature',
  'Online booking page + your clinic website',
  'All 12 practice reports, 12 months of history',
  'Up to 5 staff logins, roles & attendance',
  'Web, iOS, Android & Windows desktop apps',
];

// Pro: still one clinic, but a bigger team in it. Everything here is about
// oversight — who can do what, what was changed, and how far back you can look.
const PRO_FEATURES = [
  'Unlimited staff logins',
  'Granular per-person permissions across 13 modules',
  'Unified inbox — email + WhatsApp conversations',
  'Audit log, device & master-password controls',
  'Unlimited report history + bulk data export',
  'Priority support',
];

// Growth: the tier you reach when the practice outgrows a single address.
// Multi-branch is the heaviest capability in the product and it lives at the
// top on purpose — a group running three locations for ₹1,500 is still paying
// ₹500 a clinic.
const GROWTH_FEATURES = [
  'Unlimited clinic branches, switched in one login',
  'Cross-branch reporting & consolidated dashboard',
  'Google Reviews management & local competitor tracking',
  'Assisted onboarding & data migration',
  'Priority support with a named contact',
];

// Annual is exactly 20% off the monthly rate on every plan and currency.
const ANNUAL_DISCOUNT_PCT = 20;
const GST_RATE = 0.18;

const PRICE = {
  IN: {
    currency: '₹',
    // India prices are quoted excluding GST, which is how Indian SaaS is sold.
    // The GST-inclusive figure is what Cashfree actually charges, so it is
    // shown too rather than sprung on people at checkout.
    exclusiveOfGst: true,
    plus: { monthly: 399, annualMonthly: 319, annualTotal: 3830 },
    pro: { monthly: 999, annualMonthly: 799, annualTotal: 9590 },
    growth: { monthly: 1500, annualMonthly: 1200, annualTotal: 14400 },
  },
  OTHER: {
    currency: '$',
    exclusiveOfGst: false,
    plus: { monthly: 5, annualMonthly: 4, annualTotal: 48 },
    pro: { monthly: 10, annualMonthly: 8, annualTotal: 96 },
    growth: { monthly: 15, annualMonthly: 12, annualTotal: 144 },
  },
} as const;

type PlanKey = 'plus' | 'pro' | 'growth';

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

const inr = (n: number) => n.toLocaleString('en-IN');
const withGst = (n: number) => Math.round(n * (1 + GST_RATE));

export default function PricingPlans() {
  const [country, setCountry] = useState<CountryCode | null>(null);
  const [overrideCountry, setOverrideCountry] = useState<CountryCode | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
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

  const plans: {
    key: PlanKey;
    name: string;
    tagline: string;
    features: readonly string[];
    featured: boolean;
    badge?: string;
    inherits?: string;
    cta: string;
  }[] = [
    {
      key: 'pro',
      name: 'Pro',
      tagline: 'One clinic, a bigger team and tighter control',
      features: PRO_FEATURES,
      featured: false,
      inherits: 'Everything in Plus, plus:',
      cta: 'Start free trial',
    },
    {
      key: 'plus',
      name: 'Plus',
      tagline: 'Everything one clinic needs to run its day',
      features: PLUS_FEATURES,
      featured: true,
      badge: 'Most popular',
      cta: 'Start free trial',
    },
    {
      key: 'growth',
      name: 'Growth',
      tagline: 'For practices running more than one location',
      features: GROWTH_FEATURES,
      featured: false,
      inherits: 'Everything in Pro, plus:',
      cta: 'Start free trial',
    },
  ];

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
            {isIndia ? 'India (INR)' : 'Other countries (USD)'}
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
                  India (INR)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOverrideCountry('OTHER');
                    setShowCountrySelect(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm ${effectiveCountry === 'OTHER' ? 'bg-blue-50 font-medium' : ''}`}
                >
                  Other countries (USD)
                </button>
              </div>
            </>
          )}
        </div>
        <span className="text-gray-500 text-sm">Prices shown in {isIndia ? 'INR' : 'USD'}</span>
      </div>

      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <span className={`text-lg ${!isAnnual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
          Monthly
        </span>
        <button
          type="button"
          onClick={() => setBillingCycle(isAnnual ? 'monthly' : 'annual')}
          aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} billing`}
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
          Annual <span className="text-green-600 text-sm">(Save {ANNUAL_DISCOUNT_PCT}%)</span>
        </span>
      </div>

      <div className="grid gap-6 items-stretch max-w-6xl mx-auto md:grid-cols-3">
        {plans.map((plan) => {
          const tier = p[plan.key];
          const displayPrice = isAnnual ? tier.annualMonthly : tier.monthly;
          const gstMonthly = withGst(tier.monthly);
          const gstAnnualTotal = withGst(tier.annualTotal);

          return (
            <div
              key={plan.key}
              className={`bg-white rounded-2xl p-7 flex flex-col ${
                plan.featured
                  ? 'shadow-xl border-2 relative z-10'
                  : 'shadow-lg border border-gray-200'
              }`}
              style={plan.featured ? { borderColor: colors.primary } : undefined}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: colors.primary }}
                >
                  {plan.badge}
                </div>
              )}

              <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
              <p className="text-gray-600 mb-6">{plan.tagline}</p>

              <div className="mb-1">
                <span
                  className="text-4xl font-bold"
                  style={{ color: plan.featured ? colors.primary : '#111827' }}
                >
                  {p.currency}{inr(displayPrice)}
                </span>
                <span className="text-gray-500 ml-1">/month</span>
                {isIndia && <span className="text-gray-500 text-sm ml-1">+ GST</span>}
              </div>

              <p className="text-sm text-gray-500 mb-2 min-h-[2.5rem]">
                {isAnnual
                  ? `billed annually — ${p.currency}${inr(tier.annualTotal)}/year`
                  : `or ${p.currency}${inr(tier.annualMonthly)}/mo billed annually`}
              </p>

              {p.exclusiveOfGst ? (
                <p className="text-xs text-gray-400 mb-5">
                  {isAnnual
                    ? `${p.currency}${inr(gstAnnualTotal)}/year including 18% GST`
                    : `${p.currency}${inr(gstMonthly)}/month including 18% GST`}
                </p>
              ) : (
                <div className="mb-5" />
              )}

              <ul className="space-y-3 mb-6 flex-1">
                {plan.inherits && (
                  <li className="text-sm font-semibold text-gray-900">{plan.inherits}</li>
                )}
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${APP_URL}/signup?plan=${plan.key}&cycle=${billingCycle}`}
                onClick={() => {
                  trackPlanSelected(plan.key, billingCycle, effectiveCountry);
                  trackSignupStarted('pricing', `${APP_URL}/signup`);
                }}
                className={`w-full py-3 rounded-lg font-semibold text-center block transition-colors ${
                  plan.featured
                    ? 'text-white hover:opacity-90'
                    : 'border-2 border-gray-300 text-gray-800 hover:bg-gray-50'
                }`}
                style={plan.featured ? { backgroundColor: colors.primary } : undefined}
              >
                {plan.cta}
              </a>
            </div>
          );
        })}
      </div>

      <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
        Every new account begins with <strong className="font-semibold text-gray-700">7 days of Pro</strong>,
        no credit card required. Nothing is charged until you choose a plan.
      </p>
    </div>
  );
}
