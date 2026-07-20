import { AppFrame } from "./AppFrame";

const LINES = [
  { name: "Dolo 650 Tablet", batch: "B4471", qty: "2 strip", gst: "12%", amount: "62.00" },
  { name: "Azithral 500 Tablet", batch: "A2210", qty: "1 strip", gst: "12%", amount: "132.00" },
  { name: "Pan-D Capsule", batch: "P9034", qty: "1 strip", gst: "12%", amount: "196.00" },
  { name: "Shelcal 500 Tablet", batch: "S1188", qty: "1 strip", gst: "12%", amount: "119.00" },
];

export function BillingMockup() {
  return (
    <AppFrame
      title="New bill"
      label="The SyrupDesk billing screen: four medicines added to a bill with batch number, quantity and GST rate on each line, and a running total of ₹509.00 with GST shown separately."
    >
      <div className="flex items-center justify-between gap-3 rounded-sm border border-green-200 bg-green-50 px-3 py-2">
        <p className="truncate text-small text-ink-700">Scan or type a medicine name</p>
        <span className="shrink-0 rounded-sm bg-green-500 px-2 py-1 text-micro font-semibold text-white">
          F2
        </span>
      </div>

      <ul className="mt-3 divide-y divide-ink-200">
        {LINES.map((line) => (
          <li key={line.batch} className="flex items-baseline justify-between gap-3 py-2.5">
            <div className="min-w-0">
              <p className="truncate text-small font-medium text-ink-900">{line.name}</p>
              <p data-numeric className="text-micro text-ink-500">
                Batch {line.batch} · {line.qty} · GST {line.gst}
              </p>
            </div>
            <p data-numeric className="shrink-0 text-small font-semibold text-ink-900">
              ₹{line.amount}
            </p>
          </li>
        ))}
      </ul>

      <dl className="mt-3 space-y-1.5 border-t border-ink-200 pt-3 text-small">
        <div className="flex justify-between text-ink-500">
          <dt>Taxable value</dt>
          <dd data-numeric>₹454.46</dd>
        </div>
        <div className="flex justify-between text-ink-500">
          <dt>CGST + SGST</dt>
          <dd data-numeric>₹54.54</dd>
        </div>
        <div className="flex justify-between text-h4 text-ink-900">
          <dt>Total</dt>
          <dd data-numeric>₹509.00</dd>
        </div>
      </dl>

      <div className="mt-4 flex gap-2">
        <span className="flex-1 rounded-sm bg-green-500 px-4 py-2.5 text-center text-small font-semibold text-white">
          Save &amp; print
        </span>
        <span className="rounded-sm border border-ink-200 px-4 py-2.5 text-small font-medium text-ink-700">
          Hold
        </span>
      </div>
    </AppFrame>
  );
}
