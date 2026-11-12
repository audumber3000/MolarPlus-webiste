import Link from "next/link";
import { PAIN_POINTS } from "@/content/pages";
import { IconTile } from "@/components/icons/CuroIcon";

/** Six things that go wrong in a clinic's day, each with what Curogrid does about it. */
export function PainPoints() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PAIN_POINTS.map((p) => (
        <li key={p.problem} className="flex flex-col rounded-md border border-t-[3px] border-gray-200 border-t-teal-600 bg-gray-0 p-6">
          <IconTile name={p.icon} />
          <h3 className="mt-4 text-h4 text-gray-900">{p.problem}</h3>
          <p className="mt-3 flex-1 text-[0.9375rem] text-gray-700">{p.fix}</p>
          <Link href={p.href} className="mt-4 inline-flex min-h-10 items-center text-small font-semibold text-teal-700 underline underline-offset-4">
            {p.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
