import { TrialCta } from "@/components/Cta";
import { ANNUAL_SAVING_PERCENT, PLANS, rupees } from "@/content/pricing";
import { cn } from "@/lib/cn";

function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="mt-1 shrink-0 text-teal-600">
      <path d="m4 9.5 3.2 3.2L14 5.8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The two clinic plans, from content/pricing.ts. No toggle and no
 *  script: both the monthly and the yearly price are simply printed. */
export function PricingCards({ placement, as: Heading = "h3" }: { placement: string; as?: "h2" | "h3" }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {PLANS.map((plan) => (
        <div
          key={plan.key}
          className={cn("flex flex-col rounded-md border bg-gray-0 p-6 sm:p-8", plan.popular ? "border-teal-600" : "border-gray-200")}
        >
          <div className="flex items-center justify-between gap-4">
            <Heading className="text-h3">{plan.name}</Heading>
            {plan.popular && (
              <span className="rounded-xs bg-teal-50 px-2 py-1 text-micro font-bold tracking-wider text-teal-700 uppercase">
                Most clinics pick this
              </span>
            )}
          </div>
          <p className="mt-2 text-body text-gray-600">{plan.tagline}</p>
          <p className="mt-6" data-numeric>
            <span className="text-[2.5rem] leading-none font-extrabold tracking-tight text-gray-900">{rupees(plan.monthly)}</span>
            <span className="text-body text-gray-600"> a month</span>
          </p>
          <p className="mt-2 text-small text-gray-600" data-numeric>
            or {rupees(plan.annual)} for the year, which is {ANNUAL_SAVING_PERCENT}% less
          </p>
          <ul className="mt-6 flex-1 space-y-2.5 border-t border-gray-200 pt-6">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-body text-gray-800">
                <Tick />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <TrialCta placement={`${placement}_${plan.key}`} size="md" />
          </div>
        </div>
      ))}
    </div>
  );
}
