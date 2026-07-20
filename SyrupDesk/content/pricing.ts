/**
 * TODO: confirm final prices before launch. The structure is settled;
 * the numbers are a starting point and must be signed off.
 */

export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  summary: string;
  featured?: boolean;
  cta: string;
  features: ReadonlyArray<string>;
};

export const PLANS: ReadonlyArray<Plan> = [
  {
    id: "counter",
    name: "Counter",
    price: "₹0",
    period: "free, always",
    summary: "For a single-counter shop that wants to stop writing bills by hand.",
    cta: "Start free",
    features: [
      "GST-compliant billing and printing",
      "Up to 300 bills a month",
      "Verified medicine database",
      "1 user",
      "WhatsApp support",
    ],
  },
  {
    id: "shop",
    name: "Shop",
    price: "₹599",
    period: "per month",
    summary: "For a working pharmacy that runs on its stock and its regulars.",
    featured: true,
    cta: "Start free trial",
    features: [
      "Everything in Counter",
      "Unlimited bills",
      "Inventory with expiry alerts",
      "Purchase bill import",
      "Refill reminders on WhatsApp",
      "GSTR-1 and GSTR-3B reports",
      "Up to 3 users",
    ],
  },
  {
    id: "chain",
    name: "Chain",
    price: "₹1,299",
    period: "per month",
    summary: "For owners running more than one shop off one set of books.",
    cta: "Talk to us",
    features: [
      "Everything in Shop",
      "Up to 5 branches",
      "Stock transfer between branches",
      "Combined and per-branch reports",
      "Unlimited users",
      "Priority WhatsApp support",
    ],
  },
];
