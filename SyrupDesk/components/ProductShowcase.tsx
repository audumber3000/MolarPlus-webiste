"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";
import billing from "@/app/assets/app-billing.webp";
import expiry from "@/app/assets/app-expiry.webp";
import billList from "@/app/assets/app-billlist.webp";
import purchases from "@/app/assets/app-purchases.webp";
import customers from "@/app/assets/app-customers.webp";
import gst from "@/app/assets/app-gst.webp";
import reports from "@/app/assets/app-reports.webp";

/**
 * Every product screenshot in one frame, ported from the MolarPlus
 * ProductShowcase: tabs above, a browser frame, arrows, a caption and dots.
 *
 * All slides sit in the frame at once and only their opacity changes, so
 * each image is fetched and decoded once and switching is a cross fade
 * with no network round trip and no reflow.
 *
 * It advances every five seconds, pauses while the pointer is over it,
 * and does not advance at all for anyone who has asked their system to
 * reduce motion. The tabs and arrows work either way.
 */

type Slide = { img: StaticImageData; alt: string; label: string; title: string; desc: string };

const SLIDES: Slide[] = [
  {
    img: billing,
    label: "Billing",
    title: "Bill a customer in seconds",
    desc: "Type three letters, pick the batch and print. A Schedule H1 item asks for the register details before the bill will save.",
    alt: "SyrupDesk billing screen with four medicines on a bill, a Schedule H1 item flagged, and ₹471 net payable.",
  },
  {
    img: expiry,
    label: "Expiry",
    title: "See what expires before it costs you",
    desc: "Every batch counts down to its date with the rupee value attached, so it goes back to the distributor while they still take it.",
    alt: "SyrupDesk expiry screen showing ₹95,242 of stock expiring within 90 days, listed batch by batch with a countdown on each.",
  },
  {
    img: billList,
    label: "Bills",
    title: "Every bill, one search away",
    desc: "Find any bill by number, name or phone, then reprint or edit it without breaking the GST trail.",
    alt: "SyrupDesk bill register listing bills with bill number, date, patient, net amount and status.",
  },
  {
    img: purchases,
    label: "Purchases",
    title: "Every distributor invoice on record",
    desc: "Purchase bills with their goods receipt notes and what you paid, supplier by supplier.",
    alt: "SyrupDesk purchase register listing distributor invoices with invoice number, distributor, date, GRN and net value.",
  },
  {
    img: customers,
    label: "Customers",
    title: "Know who owes you and who stopped coming",
    desc: "Credit limits, what each customer owes and the day they were last in, on one list.",
    alt: "SyrupDesk customer list with locality, credit type, credit limit, amount owed and last visit date.",
  },
  {
    img: gst,
    label: "GST",
    title: "GST figures that build themselves",
    desc: "Tax collected and tax paid, grouped by rate, for any period you pick. Ready to hand to your accountant.",
    alt: "SyrupDesk tax summary report grouping taxable value, tax and invoice count by GST rate, with an Export CSV button.",
  },
  {
    img: reports,
    label: "Reports",
    title: "Reports named for the question you ask",
    desc: "What sold, what is on the shelf, what you bought and where the money is, all in plain language.",
    alt: "SyrupDesk reports library with 23 reports grouped by what sold, what is on the shelf, what was bought, and money.",
  },
];

const AUTO_MS = 5000;

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === "left" ? "M12.5 4.5L7 10l5.5 5.5" : "M7.5 4.5L13 10l-5.5 5.5"} />
    </svg>
  );
}

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((i: number) => setActive((i + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => setActive((a) => (a + 1) % SLIDES.length), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [paused, next, active]);

  const current = SLIDES[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => go(i)}
            aria-pressed={i === active}
            className={cn(
              "min-h-11 rounded-full px-4 text-small font-semibold transition-colors duration-200 ease-out",
              i === active ? "bg-green-700 text-white" : "text-ink-500 hover:bg-ink-100 hover:text-ink-900",
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Stage */}
      <div className="relative mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-md border border-ink-200 bg-surface shadow-lg">
          <div className="flex items-center gap-1.5 border-b border-ink-200 bg-surface-alt px-3 py-1.5">
            <span className="size-2 rounded-full bg-chrome-close" />
            <span className="size-2 rounded-full bg-chrome-minimise" />
            <span className="size-2 rounded-full bg-chrome-maximise" />
            <span className="mx-auto flex max-w-[60%] items-center gap-1.5 truncate rounded-xs bg-surface px-2.5 py-0.5 text-[0.625rem] font-medium text-ink-400 ring-1 ring-ink-200">
              <span className="size-1 rounded-full bg-green-500" />
              app.syrupdesk.com
            </span>
          </div>

          <div className="relative aspect-[8/5] bg-ink-100">
            {SLIDES.map((s, i) => (
              <Image
                key={s.label}
                src={s.img}
                alt={s.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 64rem, 100vw"
                priority={i === 0}
                aria-hidden={i !== active}
                className={cn(
                  "object-cover object-top transition-opacity duration-500 ease-out",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous screen"
          className="absolute top-1/2 left-0 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-ink-700 shadow-md ring-1 ring-ink-200 transition duration-200 ease-out hover:text-green-700 md:flex"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next screen"
          className="absolute top-1/2 right-0 hidden size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-ink-700 shadow-md ring-1 ring-ink-200 transition duration-200 ease-out hover:text-green-700 md:flex"
        >
          <Chevron dir="right" />
        </button>
      </div>

      {/* Caption */}
      <div className="mx-auto mt-8 min-h-[5.5rem] max-w-2xl text-center" aria-live="polite">
        <h3 className="text-h4 text-ink-900 sm:text-h3">{current.title}</h3>
        <p className="mt-2 text-body text-ink-500">{current.desc}</p>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show ${s.label}`}
            className="flex h-6 items-center"
          >
            <span
              className={cn(
                "block h-2 rounded-full transition-all duration-300 ease-out",
                i === active ? "w-6 bg-green-700" : "w-2 bg-ink-200",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
