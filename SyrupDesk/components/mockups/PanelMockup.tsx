import { AppFrame } from "./AppFrame";

export type PanelRow = {
  primary: string;
  secondary: string;
  /** Right-hand value — a price, a count, a date. */
  value: string;
  /** Renders the value in the warning colour, for things needing action. */
  flag?: boolean;
};

/**
 * Compact list-style mockup used by the smaller feature blocks.
 * Same CSS-not-PNG reasoning as AppFrame.
 */
export function PanelMockup({
  title,
  label,
  headline,
  headlineValue,
  rows,
  footnote,
}: {
  title: string;
  label: string;
  headline: string;
  headlineValue: string;
  rows: ReadonlyArray<PanelRow>;
  footnote?: string;
}) {
  return (
    <AppFrame title={title} label={label}>
      <div className="flex items-baseline justify-between gap-3 rounded-sm bg-surface-alt px-3 py-2.5">
        <p className="text-small text-ink-700">{headline}</p>
        <p data-numeric className="text-h4 font-bold text-green-700">
          {headlineValue}
        </p>
      </div>

      <ul className="mt-3 divide-y divide-ink-200">
        {rows.map((row) => (
          <li key={row.primary} className="flex items-baseline justify-between gap-3 py-2.5">
            <div className="min-w-0">
              <p className="truncate text-small font-medium text-ink-900">{row.primary}</p>
              <p data-numeric className="text-micro text-ink-500">
                {row.secondary}
              </p>
            </div>
            <p
              data-numeric
              className={`shrink-0 text-small font-semibold ${row.flag ? "text-warning" : "text-ink-700"}`}
            >
              {row.value}
            </p>
          </li>
        ))}
      </ul>

      {footnote && (
        <p className="mt-3 rounded-sm border border-ink-200 px-3 py-2 text-micro text-ink-500">
          {footnote}
        </p>
      )}
    </AppFrame>
  );
}
