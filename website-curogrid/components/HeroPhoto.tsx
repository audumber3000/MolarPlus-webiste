import Image from "next/image";

/**
 * A photograph blended into the right of a dark hero: black and white,
 * faded into the teal from the left and the bottom, so the headline sits
 * on the band and the photo reads as atmosphere rather than a card.
 * Decorative, so the alt text is empty; see public/photos/CREDITS.md for
 * why a stock photo never carries a name or a quote here.
 *
 * Desktop only: on a phone the headline needs the whole width.
 */
export function HeroPhoto({ src, position = "center" }: { src: string; position?: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] lg:block">
      <Image src={src} alt="" fill sizes="54vw" className="object-cover opacity-70 grayscale" style={{ objectPosition: position }} />
      <div className="absolute inset-0 bg-teal-900/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-linear-to-r from-teal-900 from-0% via-teal-900/35 via-30% to-teal-900/0 to-70%" />
      <div className="absolute inset-0 bg-linear-to-t from-teal-900 from-0% via-teal-900/0 via-35% to-teal-900/0" />
    </div>
  );
}
