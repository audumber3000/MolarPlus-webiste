import Image from "next/image";
import Link from "next/link";
import { SPECIALITIES } from "@/lib/specialities";
import { getEdition } from "@/lib/editions";
import { getShowcase } from "@/content/showcases";

/**
 * The homepage's way into the ten speciality pages: each tile is that
 * edition's own screen, its logo and one line, with the edition's colour
 * as a rule down the left. Every picture is a real screenshot of that
 * edition (lib/shots.ts).
 */
export function SpecialityChooser() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
      {SPECIALITIES.map((s) => {
        const edition = getEdition(s.key);
        const shot = getShowcase(s.key)?.hero.web;
        const word = edition?.word ?? "general";
        return (
          <li key={s.slug}>
            <Link
              href={`/${s.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-md border border-l-4 border-gray-200 bg-gray-0 transition-colors duration-150 ease-out hover:bg-teal-50"
              style={{ borderLeftColor: `var(--edition-${word})` }}
            >
              {shot && (
                <span className="relative block aspect-[16/10] overflow-hidden border-b border-gray-200 bg-gray-50">
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 220px, 45vw"
                    className="object-cover object-left-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                </span>
              )}
              <span className="flex flex-1 flex-col p-4">
                {edition && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={edition.logo.small.src} alt="" width={edition.logo.small.width} height={edition.logo.small.height} className="h-4.5 w-auto self-start" loading="lazy" />
                )}
                <span className="mt-3 block text-[1.0625rem] font-bold text-gray-900">{s.name}</span>
                <span className="mt-1 block flex-1 text-small text-gray-600">{s.card}</span>
                <span className="mt-3 block text-small font-semibold text-teal-700 group-hover:underline group-hover:underline-offset-4">
                  Curogrid for {s.doctor}s
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
