import { Check } from 'lucide-react';
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
      { label: 'Clinic locations', cells: ['1', '1', 'Unlimited'] },
      { label: 'Staff logins', cells: ['5', 'Unlimited', 'Unlimited'] },
      { label: 'New patients / month', cells: ['Unlimited', 'Unlimited', 'Unlimited'] },
      { label: 'Appointments / month', cells: ['Unlimited', 'Unlimited', 'Unlimited'] },
      { label: 'Patient documents & X-ray storage', cells: ['Unlimited', 'Unlimited', 'Unlimited'] },
    ],
  },
  {
    title: 'WhatsApp & communication',
    rows: [
      { label: 'WhatsApp appointment reminders', cells: [true, true, true] },
      { label: 'Send from your own WhatsApp number', cells: [true, true, true] },
      { label: 'Email notifications', cells: [true, true, true] },
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
      { label: 'Audit log, devices & master password', cells: [false, true, true] },
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
      { label: 'Your own clinic website', cells: [true, true, true] },
      { label: 'Google Reviews management', cells: [false, false, true] },
      { label: 'Local competitor tracking', cells: [false, false, true] },
    ],
  },
  {
    title: 'Platform',
    rows: [
      { label: 'Web app', cells: [true, true, true] },
      { label: 'iOS & Android apps', cells: [true, true, true] },
      { label: 'Windows desktop app', cells: [true, true, true] },
      { label: 'X-ray sensor capture', cells: [true, true, true] },
      { label: 'Cloud backup & sync', cells: [true, true, true] },
    ],
  },
  {
    title: 'Support',
    rows: [
      { label: 'WhatsApp, phone & email support', cells: [true, true, true] },
      { label: 'Priority response times', cells: [false, true, true] },
      { label: 'Assisted onboarding & data migration', cells: [false, false, true] },
      { label: 'Named support contact', cells: [false, false, true] },
    ],
  },
];

function CellContent({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <>
        <Check className="mx-auto h-5 w-5 text-green-600" aria-hidden="true" />
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
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
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
  );
}
