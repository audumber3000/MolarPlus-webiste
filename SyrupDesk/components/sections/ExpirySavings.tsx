"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { Container, Section, SectionHeader } from "@/components/ui/Section";
import { track } from "@/lib/analytics";

/**
 * What expiry is costing this shop — worked from the owner's own figures.
 *
 * Deliberately NOT "pharmacies save ₹8,000 a month". We have not
 * measured that, the numbers circulating for Indian retail expiry
 * write-offs are unsourced, and the brief forbids laundering one into
 * a claim (§7). So every input here is the owner's, the arithmetic is
 * shown rather than hidden behind a result, and the slider defaults
 * are labelled as starting positions instead of averages.
 *
 * The output is framed as *what was recoverable*, not what we promise
 * to recover — the software's job is only the third line: surfacing a
 * batch while the distributor will still take it back.
 */

const INR = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

function rupees(value: number) {
  return `₹${INR.format(Math.round(value))}`;
}

/** 400000 → "4,00,000" for the input's display value. */
function groupDigits(digits: string) {
  return digits === "" ? "" : INR.format(Number(digits));
}

const PURCHASES_MIN = 50_000;
const PURCHASES_MAX = 30_00_000;

function Row({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-ink-200 pt-6 first:border-t-0 first:pt-0">
      <p className="text-h4 text-ink-900">{label}</p>
      <p className="measure mt-1 text-small text-ink-500">{hint}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/** Range input styled once, in one place. Track and thumb come from
 *  the accent colour so we are not rebuilding a slider by hand. */
function Slider({
  id,
  value,
  min,
  max,
  step,
  onChange,
  valueLabel,
  ariaLabel,
}: {
  id: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (next: number) => void;
  valueLabel: string;
  ariaLabel: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={ariaLabel}
        aria-valuetext={valueLabel}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-11 min-w-0 flex-1 cursor-pointer accent-[var(--green-500)]"
      />
      <output
        htmlFor={id}
        data-numeric
        className="w-[5.5rem] shrink-0 rounded-sm border border-ink-200 bg-surface px-2 py-1.5 text-center text-body font-semibold text-ink-900"
      >
        {valueLabel}
      </output>
    </div>
  );
}

export function ExpirySavings() {
  const purchasesId = useId();
  const lostId = useId();
  const caughtId = useId();

  // Digits only, kept as a string so the field can be cleared while
  // typing without the value snapping back to 0.
  const [purchaseDigits, setPurchaseDigits] = useState("400000");
  const [lostPct, setLostPct] = useState(1.5);
  const [caughtPct, setCaughtPct] = useState(60);

  // Fires once per visit, on the first input of any kind. Somebody who
  // moves a slider here is doing sums about their own shop — worth
  // knowing about, but not worth an event per pixel of drag.
  const used = useRef(false);
  function markUsed(control: string) {
    if (used.current) return;
    used.current = true;
    track("expiry_calculator_used", { control });
  }

  const purchases = Math.min(Number(purchaseDigits || 0), PURCHASES_MAX);
  const lostPerMonth = (purchases * lostPct) / 100;
  const recoveredPerMonth = (lostPerMonth * caughtPct) / 100;
  const stillLost = lostPerMonth - recoveredPerMonth;

  return (
    <Section tone="tint" id="expiry-savings">
      <Container>
        <SectionHeader
          eyebrow="Work it out"
          title="What is expiry costing you every month?"
          intro="Put your own figures in. We are not going to quote you an industry average. The ones published for Indian retail pharmacy have no source behind them, and your shop is the only sample that matters."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          {/* Controls */}
          <div className="space-y-6">
            <Row
              label="What you buy in a month"
              hint="Your purchase value, not your sales. Roughly is fine."
            >
              <div className="flex items-center gap-3 rounded-sm border border-ink-200 bg-surface px-4 focus-within:border-green-500">
                <span aria-hidden="true" className="text-h4 text-ink-500">
                  ₹
                </span>
                <input
                  id={purchasesId}
                  inputMode="numeric"
                  autoComplete="off"
                  aria-label="Monthly purchase value in rupees"
                  value={groupDigits(purchaseDigits)}
                  onChange={(event) => {
                    const digits = event.target.value.replace(/\D/g, "").slice(0, 8);
                    setPurchaseDigits(digits);
                    markUsed("purchases");
                  }}
                  onBlur={() => {
                    const n = Number(purchaseDigits || 0);
                    if (n < PURCHASES_MIN) setPurchaseDigits(String(PURCHASES_MIN));
                    if (n > PURCHASES_MAX) setPurchaseDigits(String(PURCHASES_MAX));
                  }}
                  data-numeric
                  className="min-h-12 w-full bg-transparent py-2 text-h4 font-semibold text-ink-900 outline-none"
                />
              </div>
            </Row>

            <Row
              label="How much of it you throw away expired"
              hint="The one number worth measuring: keep every expired strip in a box for three months instead of binning it, then add up what you paid for the contents."
            >
              <Slider
                id={lostId}
                value={lostPct}
                min={0.25}
                max={5}
                step={0.25}
                onChange={(next) => {
                  setLostPct(next);
                  markUsed("share_expired");
                }}
                valueLabel={`${lostPct}%`}
                ariaLabel="Share of monthly purchases written off as expired, in percent"
              />
            </Row>

            <Row
              label="How much of that you could still have sent back"
              hint="A distributor will take a batch back while it is far enough from its expiry date. Once the date passes, nothing comes back. This is the share you found too late."
            >
              <Slider
                id={caughtId}
                value={caughtPct}
                min={0}
                max={100}
                step={5}
                onChange={(next) => {
                  setCaughtPct(next);
                  markUsed("share_returnable");
                }}
                valueLabel={`${caughtPct}%`}
                ariaLabel="Share of expired stock that was still inside the return window, in percent"
              />
            </Row>
          </div>

          {/* The arithmetic, laid out like a counter slip rather than
              hidden behind one hero number. A pharmacy owner reads
              bills all day; this is the format they audit fastest. */}
          <div className="rounded-md border border-ink-200 bg-surface shadow-sm">
            <div className="border-b border-ink-200 px-6 py-4">
              <p className="text-micro font-semibold uppercase tracking-wider text-ink-500">
                Your shop, per month
              </p>
            </div>

            <dl className="divide-y divide-ink-200 px-6 text-body">
              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-ink-700">Stock purchased</dt>
                <dd data-numeric className="shrink-0 font-semibold text-ink-900">
                  {rupees(purchases)}
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-ink-700">
                  Expired and written off
                  <span className="block text-small text-ink-500">{lostPct}% of purchases</span>
                </dt>
                <dd data-numeric className="shrink-0 font-semibold text-warning">
                  −{rupees(lostPerMonth)}
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-ink-700">
                  Gone for good
                  <span className="block text-small text-ink-500">
                    past the date before anyone noticed
                  </span>
                </dt>
                <dd data-numeric className="shrink-0 font-semibold text-ink-700">
                  {rupees(stillLost)}
                </dd>
              </div>
            </dl>

            <div className="border-t-2 border-green-700 bg-green-50 px-6 py-6">
              <p className="text-body font-semibold text-ink-900">
                Was still returnable when it expired
              </p>
              <p data-numeric className="mt-2 text-[2rem] leading-none font-bold text-green-700 sm:text-h2">
                {rupees(recoveredPerMonth)}
                <span className="text-body font-medium text-ink-500"> a month</span>
              </p>
              <p data-numeric className="mt-2 text-body text-ink-700">
                {rupees(recoveredPerMonth * 12)} over a year
              </p>
              <p className="measure mt-4 text-small text-ink-500">
                That is the money a near-expiry list gets a chance at: the batches that were
                still inside the return window on the day they went unnoticed. Nothing recovers
                stock that has already expired.
              </p>
            </div>

            <details className="border-t border-ink-200 px-6 py-4 text-small text-ink-700">
              <summary className="min-h-11 cursor-pointer list-none py-2 font-medium text-green-700 marker:content-none">
                Show the arithmetic
              </summary>
              <div className="measure space-y-2 pb-2">
                <p data-numeric>
                  {rupees(purchases)} × {lostPct}% = {rupees(lostPerMonth)} expired each month.
                </p>
                <p data-numeric>
                  {rupees(lostPerMonth)} × {caughtPct}% = {rupees(recoveredPerMonth)} of it was
                  still returnable.
                </p>
                <p>
                  Three numbers, all yours. We have not put a figure of our own anywhere in this.
                  The sliders start somewhere so the page is not blank, and those starting
                  positions are not a claim about your shop or anyone else&rsquo;s.
                </p>
                <p>
                  <Link
                    href="/blog/expiry-losses-retail-pharmacy"
                    className="text-green-700 underline underline-offset-4"
                  >
                    How to measure your real number
                  </Link>
                </p>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </Section>
  );
}
