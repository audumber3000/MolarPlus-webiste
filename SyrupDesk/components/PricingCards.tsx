import { ButtonLink } from "./ui/Button";
import { PLANS } from "@/content/pricing";
import { SIGNUP_URL, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/cn";

function Tick() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 shrink-0">
      <path
        d="M4 10.5l4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Cards, never a horizontally scrolling table — this has to be
 * readable on a 360px screen.
 */
export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className={cn(
            "flex h-full flex-col rounded-md p-6",
            plan.featured
              ? "border-2 border-green-700 bg-surface shadow-md lg:p-8"
              : "border border-ink-200 bg-surface",
          )}
        >
          <div className="flex items-center gap-3">
            <h3 className="text-h4 text-ink-900">{plan.name}</h3>
            {plan.featured && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-micro font-semibold uppercase tracking-wider text-green-700">
                Most shops pick this
              </span>
            )}
          </div>

          <p className="mt-4 flex items-baseline gap-2">
            <span data-numeric className="text-h2 font-bold text-ink-900">
              {plan.price}
            </span>
            <span className="text-small text-ink-500">{plan.period}</span>
          </p>

          <p className="mt-3 text-body text-ink-700">{plan.summary}</p>

          <ul className="mt-6 flex-1 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-body text-ink-700">
                <span className="text-green-600">
                  <Tick />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <ButtonLink
            href={plan.id === "chain" ? whatsappLink(`Hi, I want to know more about the ${plan.name} plan.`) : SIGNUP_URL}
            variant={plan.featured ? "primary" : "secondary"}
            size="lg"
            className="mt-8 w-full"
            {...(plan.id === "chain" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {plan.cta}
          </ButtonLink>
        </div>
      ))}
    </div>
  );
}
