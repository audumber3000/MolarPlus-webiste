import Link from "next/link";
import { ProductShot } from "@/components/mockups/ProductShot";
import type { Shot } from "@/lib/shots";

/** Four real screens in a two-by-two grid, each with a short caption and, optionally, a link. */
export function ScreenGrid({ items }: { items: ReadonlyArray<{ shot: Shot; caption: string; href?: string; label?: string }> }) {
  return (
    <ul className="grid gap-x-8 gap-y-10 lg:grid-cols-2">
      {items.map(({ shot, caption, href, label }) => (
        <li key={shot.src}>
          <ProductShot shot={shot} caption={caption} sizes="(min-width: 1024px) 560px, 100vw" />
          {href && label && (
            <Link href={href} className="mt-2 inline-flex min-h-10 items-center text-small font-semibold text-teal-700 underline underline-offset-4">
              {label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
