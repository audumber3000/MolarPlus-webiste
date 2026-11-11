import Link from "next/link";
import { SPECIALITIES } from "@/lib/specialities";
import { getEdition } from "@/lib/editions";
import { cn } from "@/lib/cn";

/**
 * One row of all ten specialities, each with its edition's colour as a
 * thin rule. On a phone the row scrolls sideways; on a computer it wraps.
 * The colour is only ever the rule, never the text: some edition colours
 * are too light for small text (app/globals.css).
 */
export function SpecialityPills({
  tone,
  exclude,
  label,
}: {
  tone: "dark" | "light";
  /** A speciality's slug, left out on its own page. */
  exclude?: string;
  label?: string;
}) {
  const dark = tone === "dark";
  const items = SPECIALITIES.filter((s) => s.slug !== exclude);
  return (
    <nav aria-label="Specialities">
      {label && <p className={cn("text-micro font-bold tracking-wider uppercase", dark ? "text-teal-300" : "text-teal-700")}>{label}</p>}
      <ul className="-mx-4 mt-3 flex snap-x gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0">
        {items.map((s) => {
          const word = getEdition(s.key)?.word ?? "general";
          return (
            <li key={s.slug} className="shrink-0 snap-start">
              <Link
                href={`/${s.slug}`}
                className={cn(
                  "inline-flex min-h-10 items-center rounded-sm border border-l-[3px] px-3 text-small font-semibold whitespace-nowrap transition-colors duration-150 ease-out",
                  dark ? "border-white/20 text-white hover:bg-white/10" : "border-gray-200 bg-gray-0 text-gray-900 hover:bg-teal-50",
                )}
                style={{ borderLeftColor: `var(--edition-${word}${dark ? "-on-dark" : ""})` }}
              >
                {s.name}
              </Link>
            </li>
          );
        })}
        <li className="shrink-0 snap-start">
          <Link
            href="/specialities"
            className={cn(
              "inline-flex min-h-10 items-center px-2 text-small font-semibold whitespace-nowrap underline underline-offset-4",
              dark ? "text-teal-200 hover:text-white" : "text-teal-700",
            )}
          >
            Compare all
          </Link>
        </li>
      </ul>
    </nav>
  );
}
