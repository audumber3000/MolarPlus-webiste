import { Container } from "@/components/ui/Section";
import { FEATURES } from "@/content/features";
import { cn } from "@/lib/cn";

function Tick() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 shrink-0">
      <path
        d="M4 10.5l4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Alternating text/visual rows. Stacks to text-then-visual on
 *  mobile so the copy always leads. */
export function FeatureBlocks() {
  return (
    <Container>
      <div className="space-y-20 lg:space-y-32">
        {FEATURES.map((feature, i) => {
          const flipped = i % 2 === 1;
          return (
            <article
              key={feature.id}
              id={feature.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={cn(flipped && "lg:order-2")}>
                <h3 className="text-[1.375rem] leading-snug font-semibold tracking-tight text-ink-900 sm:text-h3">
                  {feature.title}
                </h3>
                <p className="measure mt-4 text-body-lg text-ink-700">{feature.body}</p>
                <ul className="mt-6 space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex gap-3 text-body text-ink-700">
                      <span className="text-green-600">
                        <Tick />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn(flipped && "lg:order-1")}>{feature.visual}</div>
            </article>
          );
        })}
      </div>
    </Container>
  );
}
