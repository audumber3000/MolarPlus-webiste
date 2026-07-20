"use client";

import { useId, useState } from "react";
import { track } from "@/lib/analytics";

export type FaqItem = { q: string; a: string };

/**
 * Real <button> triggers with aria-expanded and aria-controls, so it
 * is keyboard operable and announced correctly. Answers stay in the
 * HTML when collapsed — crawlers read them either way.
 */
export function Accordion({ items }: { items: ReadonlyArray<FaqItem> }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-ink-200 border-y border-ink-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  setOpen(isOpen ? null : i);
                  if (!isOpen) track("faq_opened", { question: item.q });
                }}
                className="flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-h4 text-ink-900 transition-colors duration-200 ease-out hover:text-green-700"
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-ink-200 text-green-700"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="measure pb-6 text-body text-ink-700">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
