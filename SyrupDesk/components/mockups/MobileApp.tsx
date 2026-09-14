import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * The SyrupDesk phone app, drawn in CSS.
 *
 * The desktop shots on this site are real captures. These are not,
 * and the reason is practical rather than lazy: the phone app is a
 * React Native build that needs a device or a simulator to render, so
 * a captured frame would be a PNG of a screen at one fixed size. Drawn
 * in markup it stays sharp at 200% zoom, costs no image weight on 4G,
 * and — the part that matters — it is built from the *same* values the
 * app itself uses: `green-700` hero, the four-item tab bar with Bill in
 * the centre slot, the expiry countdown, the 44px touch rows.
 *
 * Two screens, and they are the two an owner opens away from the
 * counter: how today is going, and what is about to go off. Billing
 * and purchase entry stay on the desktop, where there is a keyboard.
 */

/* ---------------------------------------------------------------- */

function PhoneFrame({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "w-[16rem] shrink-0 rounded-[2.25rem] bg-ink-900 p-2 shadow-lg sm:w-[17.5rem]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.75rem] bg-surface-alt">
        {/* Status bar. Kept plain — a fake notch and a battery icon are
            decoration that dates the mockup the moment the OS changes. */}
        <div className="flex items-center justify-between bg-surface-alt px-5 pt-3 pb-1">
          <span data-numeric className="text-micro font-semibold text-ink-700">
            10:24
          </span>
          <span aria-hidden="true" className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-ink-400" />
            <span className="h-2 w-3.5 rounded-sm bg-ink-400" />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

/** The four tab icons, matching the app's own set. */
const TAB_ICON: Record<string, string> = {
  // Today — a grid, the "everything at a glance" screen.
  today: "M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z",
  // Stock — a crate.
  stock: "M3 6.5L10 3l7 3.5v7L10 17l-7-3.5zM3 6.5L10 10l7-3.5M10 10v7",
  // Sales — a receipt.
  sales: "M5 2.5h10v15l-2.5-1.5L10 17.5 7.5 16 5 17.5zM7.5 7h5M7.5 10h5",
  // Money — a wallet.
  money: "M3 6a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2zM13 10h2",
};

function TabBar({ active }: { active: "today" | "stock" }) {
  const item = (id: keyof typeof TAB_ICON, name: string) => {
    const on = active === id;
    return (
      <span
        key={id}
        className={cn(
          "flex flex-1 flex-col items-center gap-1",
          on ? "text-green-700" : "text-ink-500",
        )}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
          <path
            d={TAB_ICON[id]}
            fill="none"
            stroke="currentColor"
            strokeWidth={on ? 1.9 : 1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={cn("text-micro", on ? "font-semibold" : "font-medium")}>{name}</span>
      </span>
    );
  };

  return (
    <div className="flex items-end gap-1 border-t border-ink-200 bg-surface px-2 pt-2 pb-4">
      {item("today", "Today")}
      {item("stock", "Stock")}
      {/* The centre slot opens Billing, not the scanner: it is the most
          reachable spot on the screen, so it holds the thing a counter
          reaches for all day. */}
      <span className="flex flex-1 justify-center">
        <span className="flex size-11 items-center justify-center rounded-full bg-green-500 text-white shadow-sm">
          <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
            <path
              d={TAB_ICON.sales}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </span>
      {item("sales", "Sales")}
      {item("money", "Money")}
    </div>
  );
}

/* ---------------------------------------------------------------- */

const HOURS = [18, 26, 34, 30, 46, 58, 41, 66, 52, 74, 44, 30];

function TodayScreen() {
  return (
    <>
      <div className="space-y-4 px-4 pt-2 pb-4">
        {/* Greeting: which shop, not which user. */}
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-small font-semibold text-green-700">
            SM
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-micro text-ink-500">Namaste, Asha</p>
            <p className="truncate text-small font-semibold text-ink-900">Sai Medical Store</p>
          </div>
          <span aria-hidden="true" className="relative">
            <svg width="18" height="18" viewBox="0 0 20 20" className="text-ink-500">
              <path
                d="M10 2.5a4.5 4.5 0 00-4.5 4.5c0 4-1.5 5.5-1.5 5.5h12s-1.5-1.5-1.5-5.5A4.5 4.5 0 0010 2.5zM8.5 15.5a1.75 1.75 0 003 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-warning" />
          </span>
        </div>

        {/* The hero: today against the shop's own trading hours. A week
            of daily totals answers a Reports question; standing outside
            your shop at four o'clock the question is "how is today". */}
        <div className="rounded-md bg-green-700 p-4">
          <p className="text-micro font-semibold tracking-wider text-green-200">TODAY&apos;S SALES</p>
          <p data-numeric className="mt-1 text-h3 font-bold text-white">
            ₹18,240
          </p>
          <p data-numeric className="text-micro text-green-200">
            34 bills · +12% vs yesterday, same time
          </p>
          <div className="mt-3 flex h-14 items-end gap-1" aria-hidden="true">
            {HOURS.map((height, i) => (
              <span
                key={i}
                style={{ height: `${height}%` }}
                className={cn("flex-1 rounded-sm", i === 9 ? "bg-surface" : "bg-green-200")}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-between text-micro text-green-300">
            <span>8 AM</span>
            <span>10 PM</span>
          </div>
        </div>

        {/* Bought beside sold, because the pair is the point. */}
        <div className="flex gap-3">
          <div className="flex-1 rounded-sm border border-ink-200 bg-surface p-3">
            <p className="truncate text-[0.625rem] font-semibold tracking-wider text-warning">BOUGHT TODAY</p>
            <p data-numeric className="mt-1 text-h4 font-semibold text-ink-900">
              ₹9,120
            </p>
          </div>
          <div className="flex-1 rounded-sm border border-ink-200 bg-surface p-3">
            <p className="truncate text-[0.625rem] font-semibold tracking-wider text-success">CASH IN HAND</p>
            <p data-numeric className="mt-1 text-h4 font-semibold text-ink-900">
              ₹6,480
            </p>
          </div>
        </div>

        {/* Every alert goes somewhere. */}
        <div className="overflow-hidden rounded-md border border-ink-200">
          <p className="bg-ink-100 px-3 py-2 text-micro font-semibold text-ink-700">
            Needs you today
          </p>
          <div className="divide-y divide-ink-200 bg-surface">
            <div className="flex items-center gap-2 px-3 py-2.5">
              <span className="h-8 w-[3px] shrink-0 rounded-sm bg-warning" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-micro font-semibold text-ink-900">
                  Stock nearing expiry
                </p>
                <p data-numeric className="text-micro text-ink-500">
                  10 batches · ₹95,242
                </p>
              </div>
              <span aria-hidden="true" className="text-ink-400">
                ›
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5">
              <span className="h-8 w-[3px] shrink-0 rounded-sm bg-danger" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-micro font-semibold text-ink-900">
                  Bills overdue past 30 days
                </p>
                <p data-numeric className="text-micro text-ink-500">
                  6 items · ₹2,962
                </p>
              </div>
              <span aria-hidden="true" className="text-ink-400">
                ›
              </span>
            </div>
          </div>
        </div>
      </div>
      <TabBar active="today" />
    </>
  );
}

/* ---------------------------------------------------------------- */

const STOCK = [
  { name: "Azithral 500 Tablet", maker: "Alembic", days: "in 17 days", level: 30, tone: "warning" },
  { name: "Otrivin Nasal Drops", maker: "Novartis", days: "in 17 days", level: 55, tone: "warning" },
  { name: "Volini Pain Relief Gel", maker: "Sun Pharma", days: "in 48 days", level: 70, tone: "caution" },
  { name: "Augmentin 625 Tablet", maker: "GSK", days: "in 48 days", level: 20, tone: "caution" },
  { name: "ORS Powder Sachet", maker: "FDC", days: "in 48 days", level: 85, tone: "caution" },
] as const;

function StockScreen() {
  return (
    <>
      <div className="px-4 pt-2 pb-3">
        <p className="text-small font-semibold text-ink-900">Stock</p>
        <div className="mt-3 rounded-sm border border-ink-200 bg-surface px-3 py-2.5 text-micro text-ink-400">
          Search medicine or batch
        </div>
        {/* Five chips, because that is what a phone can hold. */}
        <div className="mt-3 flex gap-1.5 overflow-hidden">
          {["All", "Near expiry", "Low", "Out"].map((chip, i) => (
            <span
              key={chip}
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-micro font-medium",
                i === 1
                  ? "bg-green-700 text-white"
                  : "border border-ink-200 bg-surface text-ink-700",
              )}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="divide-y divide-ink-200 border-t border-ink-200 bg-surface">
        {STOCK.map((row) => (
          <div key={row.name} className="px-4 py-2.5">
            <div className="flex items-baseline justify-between gap-2">
              <p className="truncate text-micro font-semibold text-ink-900">{row.name}</p>
              <span
                data-numeric
                className={cn(
                  "shrink-0 rounded-sm px-1.5 py-0.5 text-micro font-semibold",
                  row.tone === "warning" ? "bg-green-50 text-warning" : "bg-ink-100 text-ink-700",
                )}
              >
                {row.days}
              </span>
            </div>
            <p className="text-micro text-ink-500">{row.maker}</p>
            <span aria-hidden="true" className="mt-1.5 block h-1 rounded-full bg-ink-100">
              <span
                style={{ width: `${row.level}%` }}
                className={cn(
                  "block h-1 rounded-full",
                  row.level < 35 ? "bg-warning" : "bg-green-500",
                )}
              />
            </span>
          </div>
        ))}
      </div>
      <TabBar active="stock" />
    </>
  );
}

/* ---------------------------------------------------------------- */

export function MobileAppShowcase({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center gap-5 sm:gap-8", className)}>
      <PhoneFrame label="The SyrupDesk phone app on the Today screen: today's sales of ₹18,240 across 34 bills, drawn as an hourly bar chart against the shop's trading hours, with what was bought today, cash in hand, and two alerts: ₹95,242 of stock nearing expiry, and ₹2,962 of bills overdue past 30 days.">
        <TodayScreen />
      </PhoneFrame>
      {/* The second phone is stepped down rather than fanned or tilted:
          a rotated pair reads as a stock image, and the whole point of
          these is that a buyer can read the numbers on them. */}
      <PhoneFrame
        label="The SyrupDesk phone app on the Stock screen, filtered to near-expiry: five batches counting down to their expiry dates, each with the stock level left."
        className="mt-10 hidden md:block"
      >
        <StockScreen />
      </PhoneFrame>
    </div>
  );
}
