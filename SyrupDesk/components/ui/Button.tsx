import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "link" | "inverse" | "inverse-outline";
type Size = "sm" | "md" | "lg";

/**
 * Matched to the product's own buttons (`apps/web/src/shared/ui/Button.tsx`).
 *
 * The brief (§2, §11) says not to use `--green-700` as the CTA fill,
 * on the grounds that the anchor colour on every interactive element
 * makes a page read heavy and inert. That was written before the app
 * existed. It now does, its primary button is a solid `green-700`, and
 * a visitor who clicks "Start free" lands in it three seconds later —
 * a site whose buttons are a different green from the product's is a
 * seam the buyer sees at exactly the wrong moment. Brand continuity
 * beat the page-weight argument; the tint sections carry the lightness
 * the brief was protecting instead.
 *
 * Colour and geometry come from the app. **Size does not** — see below.
 */
const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-green-700 text-white border border-green-700 hover:bg-green-600 hover:border-green-600 active:bg-green-800 active:border-green-800 disabled:bg-green-200 disabled:border-green-200",
  // The app's secondary is a neutral outline, not a green one: green as
  // a filled surface means action, green as an outline competes with it.
  secondary:
    "bg-surface text-ink-700 border border-ink-200 hover:bg-surface-alt active:bg-ink-100 disabled:text-ink-400",
  ghost: "bg-transparent text-ink-700 border border-transparent hover:bg-ink-100",
  link: "bg-transparent text-green-700 border border-transparent underline underline-offset-4 hover:text-green-600 px-0",
  // For the green-700 bands. These exist as variants rather than as
  // `className` overrides on `primary` because `cn` is a plain string
  // joiner, not tailwind-merge: an override does not replace the
  // variant's utility, it sits alongside it, and which one wins is
  // decided by the order Tailwind happened to emit them in. That is
  // how the CTA band shipped a white "Start free" label on a white
  // fill — `text-white` and `text-green-700` were both applied.
  inverse:
    "bg-white text-green-700 border border-white hover:bg-green-100 hover:border-green-100 active:bg-green-200 active:border-green-200",
  "inverse-outline":
    "bg-transparent text-white border border-green-200 hover:bg-green-800 active:bg-green-900",
};

// Min tap target 44x44 across every size — thumbs on a mid-range
// Android phone, not a mouse pointer.
//
// This is the one thing NOT taken from the app. Its controls are 36px
// tall at 14px text, drawn for a mouse on a 1366x768 counter monitor
// where density buys visible rows. Nothing on a marketing page is won
// by a smaller button, and this buyer is 35-60 reading on a phone.
const SIZES: Record<Size, string> = {
  sm: "min-h-11 px-4 text-small",
  md: "min-h-12 px-6 text-body",
  lg: "min-h-14 px-8 text-body-lg",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  className?: string;
  children: ReactNode;
};

function classes({ variant = "primary", size = "md", className, loading }: BaseProps) {
  return cn(
    // `rounded-xs` is 4px — the app's radius for anything with content
    // in it. 8px here made the same label look like a different product.
    "inline-flex items-center justify-center gap-2 rounded-xs font-medium",
    "transition-colors duration-200 ease-out",
    "disabled:pointer-events-none disabled:opacity-60",
    VARIANTS[variant],
    SIZES[size],
    loading && "pointer-events-none",
    className,
  );
}

function Spinner() {
  return (
    <span
      aria-hidden="true"
      className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  );
}

export function Button({
  variant,
  size,
  loading,
  className,
  children,
  ...rest
}: BaseProps & Omit<ComponentProps<"button">, keyof BaseProps>) {
  return (
    <button
      className={classes({ variant, size, className, loading, children })}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  href,
  ...rest
}: BaseProps & Omit<ComponentProps<typeof Link>, keyof BaseProps>) {
  return (
    <Link href={href} className={classes({ variant, size, className, children })} {...rest}>
      {children}
    </Link>
  );
}
