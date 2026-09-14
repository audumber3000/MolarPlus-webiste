import type { ReactNode } from "react";
import { Container } from "@/components/ui/Section";

/**
 * The reassurance strip under the hero.
 *
 * Deliberately **not** review-platform badges or a customer count. Those
 * need to be earned, and `content/social-proof.ts` already refuses to
 * fake them; this strip is what can go under the hero *today* without
 * inventing anything. Every one of the four is a claim a visitor can
 * check against another page on this site within one click — the price
 * against /pricing, the other three against the FAQ.
 *
 * It is a compact band (py-10, hairline top and bottom), not a full
 * `Section`. That is the point: after a tall hero, another 96px section
 * reads as a second hero. `Awards` renders below it and stays invisible
 * until a real badge exists.
 */
type Signal = {
  title: string;
  note: string;
  /** Either a typeset character or a drawn icon, never both. */
  glyph?: string;
  icon?: ReactNode;
};

const SIGNALS: ReadonlyArray<Signal> = [
  {
    title: "Free to start",
    note: "A single counter runs on ₹0, with no card. Paid plans from ₹599/month.",
    glyph: "₹",
  },
  {
    title: "We type in your stock",
    note: "Send an Excel sheet, a backup or a printed list. No charge, before you start.",
    icon: <path d="M10 3v9m0 0l-3.5-3.5M10 12l3.5-3.5M3.5 14.5v2h13v-2" />,
  },
  {
    title: "Bills when the line drops",
    note: "Billing keeps working offline and syncs when you are back online.",
    icon: <path d="M2.5 7.5a12 12 0 0115 0M5.5 11a7.5 7.5 0 019 0M10 15.5h.01" />,
  },
  {
    title: "Runs on what you own",
    note: "Any browser, on an old Windows desktop or an Android phone. Thermal or A4.",
    icon: <path d="M3 4.5h14v9H3zM7 17h6M10 13.5V17" />,
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-ink-200 bg-surface py-10">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {SIGNALS.map((signal) => (
            <li key={signal.title} className="flex gap-3">
              {signal.glyph ? (
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-h4 leading-none font-semibold text-green-600"
                >
                  {signal.glyph}
                </span>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {signal.icon}
                </svg>
              )}
              <div>
                <p className="text-body font-semibold text-ink-900">{signal.title}</p>
                <p className="mt-1 text-small text-ink-500">{signal.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
