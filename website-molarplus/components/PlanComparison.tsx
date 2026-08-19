import { Check, ChevronDown } from 'lucide-react';
import { colors } from '@/lib/seo';

/**
 * The full Plus / Pro / Growth matrix.
 *
 * This replaced a flat "everything included" feature list, which worked when
 * there were two plans and stopped working at three — a reader comparing Pro
 * against Growth could not answer "what do I actually get for the extra ₹500"
 * from a list, only from a grid.
 *
 * The ten all-ticked rows under Core clinic management are the point, not
 * padding: they are how the page now argues that the ₹399 plan is the whole
 * clinical product, instead of asserting it in a paragraph.
 *
 * Every row must be answerable from the app as it ships today. A row here is a
 * promise made three times over, so anything unbuilt belongs on a roadmap, not
 * in this table.
 */

/** true = included, false = not on this plan, string = the limit or detail. */
type Cell = boolean | string;

type Row = {
  label: string;
  /** In plan order: Plus, Pro, Growth. */
  cells: [Cell, Cell, Cell];
};

type Group = { title: string; rows: Row[] };

const PLANS = ['Plus', 'Pro', 'Growth'] as const;
/** Plus carries the "most popular" badge on the cards; the column follows it. */
const FEATURED_INDEX = 0;

const GROUPS: Group[] = [
  {
    title: 'Core clinic management',
    rows: [
      { label: 'Patient records, history & documents', cells: [true, true, true] },
      { label: 'Appointments & calendar', cells: [true, true, true] },
      { label: 'Public online booking page', cells: [true, true, true] },
      { label: 'Dental charting', cells: [true, true, true] },
      { label: 'Treatment planning', cells: [true, true, true] },
      { label: 'Prescriptions & medication catalogue', cells: [true, true, true] },
      { label: 'Invoicing & payment tracking', cells: [true, true, true] },
      { label: 'Expenses, inventory & vendors', cells: [true, true, true] },
      { label: 'Digital consent forms with e-signature', cells: [true, true, true] },
      { label: 'Lab order management', cells: [true, true, true] },
    ],
  },
  {
    title: 'Users & capacity',
    rows: [
      { label: 'Clinic locations', cells: ['1', '5', 'Unlimited'] },
      { label: 'Staff logins', cells: ['5', '10', 'Unlimited'] },
      { label: 'New patients / month', cells: ['300', '1,000', 'Unlimited'] },
      { label: 'Appointments / month', cells: ['300', '1,000', 'Unlimited'] },
      { label: 'Patient documents & X-ray storage', cells: ['100 GB', '150 GB', 'Unlimited'] },
    ],
  },
  {
    title: 'WhatsApp & communication',
    rows: [
      { label: 'WhatsApp reminders & notifications', cells: [true, true, true] },
      {
        label: 'WhatsApp sender number',
        cells: ['MolarPlus verified number', 'Your own number', 'Your own number'],
      },
      { label: 'Email notifications from a verified MolarPlus address', cells: [true, true, true] },
      { label: 'Message & document templates', cells: [true, true, true] },
      { label: 'Unified inbox — email + WhatsApp threads', cells: [false, true, true] },
    ],
  },
  {
    title: 'Team & permissions',
    rows: [
      { label: 'Staff roles', cells: ['3 presets', 'Per person', 'Per person'] },
      { label: 'Permissions across 13 modules', cells: [false, true, true] },
      { label: 'Staff attendance tracking', cells: [true, true, true] },
      { label: 'Audit log, devices & master password', cells: [true, true, true] },
    ],
  },
  {
    title: 'Reporting',
    rows: [
      { label: 'Dashboard analytics', cells: [true, true, true] },
      { label: 'Practice report library', cells: ['12 reports', '12 reports', '12 reports'] },
      { label: 'Report history', cells: ['12 months', 'Unlimited', 'Unlimited'] },
      { label: 'Bulk data export', cells: [false, true, true] },
      { label: 'Cross-branch consolidated reporting', cells: [false, false, true] },
    ],
  },
  {
    title: 'Growth & marketing',
    rows: [
      { label: 'Google Reviews management', cells: [true, true, true] },
      { label: 'Local competitor tracking', cells: [false, true, true] },
      { label: 'Your own clinic website', cells: [false, true, true] },
    ],
  },
  {
    title: 'Platform',
    rows: [
      { label: 'Web app', cells: [true, true, true] },
      { label: 'iOS & Android apps', cells: [true, true, true] },
      { label: 'Windows desktop app', cells: [true, true, true] },
    ],
  },
  {
    // Nothing in this group renders as a dash. Support is never actually
    // absent — every plan can reach a human on the same channels — so "Limited"
    // describes the difference honestly where "—" would have implied none.
    title: 'Support',
    rows: [
      { label: 'WhatsApp, phone & email support', cells: [true, true, true] },
      { label: 'Priority response times', cells: ['Limited', true, true] },
      { label: 'Onboarding & data migration', cells: ['Limited', 'Limited', true] },
      { label: 'Named support contact', cells: ['Limited', 'Limited', true] },
    ],
  },
];

function CellContent({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <>
        <Check className="ml-auto h-5 w-5 text-green-600" aria-hidden="true" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <span aria-hidden="true" className="text-gray-300">—</span>
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-sm text-gray-700">{value}</span>;
}

export default function PlanComparison() {
  return (
    <>
      {/* Desktop: the grid, where comparing across columns is the point. */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full min-w-[46rem] border-collapse text-left">
        <caption className="sr-only">
          Feature comparison of the MolarPlus Plus, Pro and Growth plans
        </caption>
        <thead>
          <tr className="border-b border-gray-200">
            <th
              scope="col"
              className="sticky left-0 z-10 bg-white px-5 py-4 text-sm font-bold text-gray-900"
            >
              Features
            </th>
            {PLANS.map((plan, i) => (
              <th
                key={plan}
                scope="col"
                className="px-5 py-4 text-center text-sm font-bold whitespace-nowrap"
                style={{ color: i === FEATURED_INDEX ? colors.primary : '#111827' }}
              >
                {plan}
                {i === FEATURED_INDEX && (
                  <span className="ml-1.5 align-middle text-[10px] font-bold uppercase tracking-wide">
                    ★
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        {GROUPS.map((group) => (
          <tbody key={group.title}>
            <tr>
              <th
                scope="colgroup"
                colSpan={PLANS.length + 1}
                className="px-5 py-2.5 text-left text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: `${colors.primary}12`, color: colors.primary }}
              >
                {group.title}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label} className="border-b border-gray-100 last:border-0">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-white px-5 py-3 text-sm font-normal text-gray-700"
                >
                  {row.label}
                </th>
                {row.cells.map((cell, i) => (
                  <td
                    key={i}
                    className="px-5 py-3 text-center"
                    style={
                      i === FEATURED_INDEX ? { backgroundColor: `${colors.primary}06` } : undefined
                    }
                  >
                    <CellContent value={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
      </div>

      {/*
        Mobile: one collapsible section per plan.

        A 39-row grid inside a horizontal scroller is unusable on a phone —
        you lose your place in the columns the moment you scroll, and the
        comparison the table exists for stops happening. Nobody on a phone is
        reading three columns at once anyway; they are checking one plan. So
        each plan becomes a list of its own values, and <details> keeps them
        collapsed without shipping a byte of JavaScript. Plus opens by default,
        matching its badge on the cards above.
      */}
      <div className="space-y-3 md:hidden">
        {PLANS.map((plan, planIndex) => (
          <details
            key={plan}
            open={planIndex === FEATURED_INDEX}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white"
            style={
              planIndex === FEATURED_INDEX
                ? { borderColor: `${colors.primary}59` }
                : undefined
            }
          >
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-bold">
              <span style={{ color: planIndex === FEATURED_INDEX ? colors.primary : '#111827' }}>
                {plan}
                {planIndex === FEATURED_INDEX && <span className="ml-1.5 text-xs">★</span>}
              </span>
              <ChevronDown
                className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>

            <div className="border-t border-gray-100">
              {GROUPS.map((group) => (
                <div key={group.title}>
                  <h4
                    className="px-5 py-2 text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${colors.primary}12`, color: colors.primary }}
                  >
                    {group.title}
                  </h4>
                  <dl>
                    {group.rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-2.5 last:border-0"
                      >
                        <dt className="text-sm text-gray-700">{row.label}</dt>
                        <dd className="shrink-0 text-right text-sm">
                          <CellContent value={row.cells[planIndex]} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
