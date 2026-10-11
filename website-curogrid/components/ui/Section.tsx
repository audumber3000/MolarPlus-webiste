import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "alt" | "tint" | "dark";

const TONES: Record<Tone, string> = {
  default: "bg-gray-0",
  alt: "bg-gray-50",
  tint: "bg-teal-50",
  // `on-dark` switches the focus-ring colour (see globals.css).
  dark: "bg-teal-900 text-teal-100 on-dark",
};

/** Owns vertical rhythm, so no page file sets its own section padding. */
export function Section({
  tone = "default",
  className,
  children,
  ...rest
}: { tone?: Tone; className?: string; children: ReactNode } & React.ComponentProps<"section">) {
  return (
    <section className={cn("py-16 lg:py-24", TONES[tone], className)} {...rest}>
      {children}
    </section>
  );
}

/** Max width 1200px; gutters 16 / 24 / 32. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8", className)}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  tone = "default",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: Tone;
  as?: "h1" | "h2";
}) {
  const dark = tone === "dark";
  return (
    <div className="mb-10 lg:mb-12">
      {eyebrow && (
        <p className={cn("mb-3 text-small font-bold uppercase tracking-wider", dark ? "text-teal-300" : "text-teal-700")}>
          {eyebrow}
        </p>
      )}
      <Heading className={cn("max-w-[22ch] text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2", dark && "text-white")}>
        {title}
      </Heading>
      {intro && <p className={cn("measure mt-4 text-body-lg", dark ? "text-teal-100" : "text-gray-600")}>{intro}</p>}
    </div>
  );
}
