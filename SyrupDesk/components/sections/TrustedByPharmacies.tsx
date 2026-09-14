import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Section";
import { PHARMACY_COUNT, TRUSTED_PHARMACIES } from "@/content/social-proof";
import { cn } from "@/lib/cn";
import pharmacistShelves from "@/app/assets/pharmacies/pharmacist-shelves.webp";
import medicalShop from "@/app/assets/pharmacies/bijapur-medical-shop.webp";
import blisterStrips from "@/app/assets/pharmacies/blister-strips.webp";
import tabletsFlatlay from "@/app/assets/pharmacies/tablets-flatlay.webp";
import blueRedStrips from "@/app/assets/pharmacies/blue-red-strips.webp";
import diabetesKit from "@/app/assets/pharmacies/diabetes-kit.webp";

/**
 * "Trusted by 4,000+ pharmacies": the count and the sliding pharmacy names
 * on the left, a tilted grid of colour photographs on the right.
 *
 * Photographs are from Pexels (free for commercial use, no attribution
 * required): 13119976, 28688814, 3873149, 9742769, 28300481, 6941099.
 * A set of otherwise suitable "Indian pharmacist" shots was rejected
 * because the pharmacist's coat carried a Canadian pharmacy chain's
 * logo. None of the photos is of a SyrupDesk customer, and none should
 * be captioned as one.
 *
 * The photos stay in full colour. Only the pharmacy names in the strip
 * are black and white, so the eye reads the grid as the place and the
 * names as the roll call.
 */

const COLUMNS: Array<{ offset: string; tiles: Array<{ src: StaticImageData; alt: string; tall?: boolean }> }> = [
  {
    offset: "translate-y-10",
    tiles: [
      { src: pharmacistShelves, alt: "A pharmacist taking a medicine box down from a stocked shelf", tall: true },
      { src: blisterStrips, alt: "Blister strips of colourful tablets and capsules" },
    ],
  },
  {
    offset: "-translate-y-6",
    tiles: [
      { src: tabletsFlatlay, alt: "Tablets and capsules laid out beside their strips" },
      { src: medicalShop, alt: "A man reading the newspaper outside a small medical shop in Karnataka", tall: true },
    ],
  },
  {
    offset: "translate-y-16",
    tiles: [
      { src: diabetesKit, alt: "A glucometer, syringes and a sugar chart", tall: true },
      { src: blueRedStrips, alt: "Blue and red tablet strips stacked on a counter" },
    ],
  },
];

function NameStrip() {
  if (TRUSTED_PHARMACIES.length === 0) return null;

  return (
    <div className="relative mt-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-surface to-transparent" />
      <ul className="animate-marquee flex w-max items-center gap-10 hover:[animation-play-state:paused]">
        {[...TRUSTED_PHARMACIES, ...TRUSTED_PHARMACIES].map((p, i) => (
          <li
            key={`${p.name}-${i}`}
            aria-hidden={i >= TRUSTED_PHARMACIES.length || undefined}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap"
          >
            {p.logo && (
              // Logos go black and white too; only the photo grid is in colour.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.logo} alt="" loading="lazy" className="h-6 w-auto grayscale" />
            )}
            <span className="text-small font-semibold uppercase tracking-wider text-ink-500">{p.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TrustedByPharmacies() {
  return (
    <section className="overflow-hidden border-b border-ink-200 bg-surface">
      <Container>
        <div className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <p className="text-small font-semibold uppercase tracking-wider text-green-700">
              Across India
            </p>
            <h2 className="mt-3 text-[2rem] leading-[1.1] font-bold tracking-tight text-ink-900 sm:text-h2">
              Trusted by <span data-numeric className="text-green-700">{PHARMACY_COUNT}</span> pharmacies
            </h2>
            <p className="measure mt-4 text-body-lg text-ink-500">
              Medical stores that bill, track expiry and file GST on SyrupDesk every day, from single
              counters to shops with several branches.
            </p>
            <NameStrip />
          </div>

          {/* The tilted collage. It is decoration around a claim, so the
              images carry plain descriptions and nothing here says whose
              shop is pictured. */}
          <div className="relative h-[26rem] sm:h-[32rem]" aria-label="Photographs of pharmacies and medicines" role="group">
            <div className="absolute inset-0 flex -rotate-6 scale-110 gap-3 sm:gap-4">
              {COLUMNS.map((col, c) => (
                <div key={c} className={cn("flex flex-1 flex-col gap-3 sm:gap-4", col.offset)}>
                  {col.tiles.map((t) => (
                    <div
                      key={t.alt}
                      className={cn(
                        "relative overflow-hidden rounded-md shadow-md ring-4 ring-surface",
                        t.tall ? "h-60 sm:h-72" : "h-40 sm:h-48",
                      )}
                    >
                      <Image
                        src={t.src}
                        alt={t.alt}
                        fill
                        placeholder="blur"
                        sizes="(min-width: 1024px) 14rem, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
