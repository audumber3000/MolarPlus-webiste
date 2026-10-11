"use client";

import { useId, useState } from "react";
import { track } from "@/lib/analytics";

export type FaqItem = { q: string; a: string };

/**
 * Real <button> triggers with aria-expanded and aria-controls. Answers
 * stay in the HTML when collapsed, so a crawler reads every one.
 */
export function Accordion({ items }: { items: ReadonlyArray<FaqItem> }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
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
                className="flex min-h-14 w-full items-center justify-between gap-6 py-4 text-left text-h4 text-gray-900 transition-colors duration-150 ease-out hover:text-teal-700"
              >
                {item.q}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="shrink-0 text-gray-500"
                >
                  <path d="M4 10h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  {!isOpen && <path d="M10 4v12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />}
                </svg>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="measure pb-6 text-body text-gray-700">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
