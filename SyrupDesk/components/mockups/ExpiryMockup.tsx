import { AppFrame } from "./AppFrame";

const ROWS = [
  { name: "Augmentin 625 Duo", batch: "AG7781", expiry: "Aug 2026", qty: "14 strip", value: "2,338", urgent: true },
  { name: "Montek LC Tablet", batch: "MT3390", expiry: "Sep 2026", qty: "9 strip", value: "1,845", urgent: true },
  { name: "Zincovit Tablet", batch: "ZV1204", expiry: "Nov 2026", qty: "22 strip", value: "2,090", urgent: false },
  { name: "Liv 52 Syrup", batch: "LV8830", expiry: "Dec 2026", qty: "6 bottle", value: "744", urgent: false },
];

export function ExpiryMockup() {
  return (
    <AppFrame
      title="Expiry alerts"
      label="The SyrupDesk expiry alert screen: ₹7,017 of stock expiring in the next 120 days, listed by batch with the two nearest-dated batches flagged so they can be returned to the distributor in time."
    >
      <div className="flex items-baseline justify-between gap-3 rounded-sm bg-surface-alt px-3 py-2.5">
        <p className="text-small text-ink-700">Expiring in 120 days</p>
        <p data-numeric className="text-h4 font-bold text-warning">
          ₹7,017
        </p>
      </div>

      <ul className="mt-3 divide-y divide-ink-200">
        {ROWS.map((row) => (
          <li key={row.batch} className="flex items-baseline justify-between gap-3 py-2.5">
            <div className="min-w-0">
              <p className="truncate text-small font-medium text-ink-900">{row.name}</p>
              <p data-numeric className="text-micro text-ink-500">
                Batch {row.batch} · {row.qty}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p
                data-numeric
                className={`text-small font-semibold ${row.urgent ? "text-warning" : "text-ink-700"}`}
              >
                {row.expiry}
              </p>
              <p data-numeric className="text-micro text-ink-500">
                ₹{row.value}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-3 rounded-sm border border-ink-200 px-3 py-2 text-micro text-ink-500">
        Two batches are still inside the distributor return window.
      </p>
    </AppFrame>
  );
}
