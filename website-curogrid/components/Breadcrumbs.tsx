import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { cn } from "@/lib/cn";

/**
 * The visible trail and its structured data from one list, so the two
 * cannot disagree. `trail` runs from the first level below home to the
 * current page; the last crumb is the page itself and is not a link.
 */
export function Breadcrumbs({
  trail,
  tone = "light",
}: {
  trail: ReadonlyArray<{ name: string; path: string }>;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Breadcrumb" className={cn("text-small", dark ? "text-teal-200" : "text-gray-500")}>
        <ol className="flex flex-wrap items-center gap-x-2">
          <li>
            <Link href="/" className={cn("underline-offset-4 hover:underline", dark ? "hover:text-white" : "hover:text-teal-700")}>
              Home
            </Link>
          </li>
          {trail.map((crumb, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-x-2">
                <span aria-hidden="true">/</span>
                {last ? (
                  <span aria-current="page" className={dark ? "text-white" : "text-gray-700"}>{crumb.name}</span>
                ) : (
                  <Link href={crumb.path} className={cn("underline-offset-4 hover:underline", dark ? "hover:text-white" : "hover:text-teal-700")}>
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
