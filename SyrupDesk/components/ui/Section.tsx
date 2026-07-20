import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "alt" | "tint" | "dark";

const TONES: Record<Tone, string> = {
  default: "bg-surface",
  alt: "bg-surface-alt",
  tint: "bg-green-50",
  // `on-dark` switches the focus-ring colour (see globals.css).
  dark: "bg-green-700 text-green-100 on-dark",
};

/** Owns vertical rhythm — 64px mobile, 96px desktop — so no page
 *  file ever sets its own section padding. */
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
  centered = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: Tone;
  centered?: boolean;
  as?: "h1" | "h2";
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("mb-10 lg:mb-14", centered && "text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-small font-semibold uppercase tracking-wider",
            dark ? "text-green-300" : "text-green-700",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "text-[1.75rem] leading-tight font-bold tracking-tight sm:text-h2",
          dark && "text-white",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={cn(
            "measure mt-4 text-body-lg",
            centered && "mx-auto",
            dark ? "text-green-100" : "text-ink-500",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
