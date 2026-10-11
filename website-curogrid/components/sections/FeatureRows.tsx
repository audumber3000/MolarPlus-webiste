import Link from "next/link";
import { ProductShot } from "@/components/mockups/ProductShot";
import { FEATURE_PAGES } from "@/content/features";
import { cn } from "@/lib/cn";

/** The first `count` sentences of a paragraph, punctuation intact. */
function firstSentences(text: string, count: number) {
  return (text.match(/[^.]+\.(?=\s|$)/g) ?? [text]).slice(0, count).join("").trim();
}

/** The four main screens, each with its screenshot, alternating sides. */
export function FeatureRows() {
  return (
    <div className="space-y-16 lg:space-y-24">
      {FEATURE_PAGES.map((feature, i) => (
        <div key={feature.slug} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className={cn("lg:col-span-4", i % 2 === 1 && "lg:order-2")}>
            <h3 className="text-h3">{feature.name}</h3>
            <p className="mt-3 text-body text-gray-700">{firstSentences(feature.lead, 2)}</p>
            <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 text-[0.9375rem] text-gray-700">
              {feature.points.slice(0, 3).map((point) => (
                <li key={point.title} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 bg-teal-600" />
                  {point.title}
                </li>
              ))}
            </ul>
            <Link
              href={`/features/${feature.slug}`}
              className="mt-5 inline-flex min-h-11 items-center text-[0.9375rem] font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800"
            >
              More about {feature.name.toLowerCase()}
            </Link>
          </div>
          <ProductShot shot={feature.shot} sizes="(min-width: 1024px) 740px, 100vw" className="lg:col-span-8" />
        </div>
      ))}
    </div>
  );
}
