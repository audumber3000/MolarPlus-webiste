import Link from "next/link";
import { SPECIALITIES } from "@/lib/specialities";
import { SITE } from "@/lib/site";

/** Every speciality, each a link to its own page. */
export function SpecialityGrid({ exclude }: { exclude?: string }) {
  const items = SPECIALITIES.filter((s) => s.slug !== exclude);
  return (
    <ul className="grid gap-px overflow-hidden rounded-md border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((s) => (
        <li key={s.slug} className="bg-gray-0">
          <Link href={`/${s.slug}`} className="group flex h-full flex-col p-6 transition-colors duration-150 hover:bg-teal-50">
            <span className="text-h4 text-gray-900">{s.name}</span>
            <span className="mt-2 flex-1 text-[0.9375rem] text-gray-600">{s.card}</span>
            <span className="mt-4 text-small font-semibold text-teal-700 underline-offset-4 group-hover:underline">
              Curogrid for {s.doctor}s
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function AlsoSupported() {
  return (
    <p className="measure mt-6 text-[0.9375rem] text-gray-600">
      A dental clinic is better served by{" "}
      <a href={SITE.dentalUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-700 underline underline-offset-4">
        MolarPlus
      </a>
      , our software built for dentists.
    </p>
  );
}
