import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "link" | "inverse" | "inverse-outline";
type Size = "sm" | "md" | "lg";

/**
 * Colour and corner radius are the app's own buttons (teal-600, 3px),
 * so "Start free trial" here and the first button a doctor meets inside
 * the app are visibly the same thing.
 *
 * `inverse` and `inverse-outline` are for the dark teal bands. They are
 * variants, not `className` overrides, because `cn` is a plain joiner:
 * an override would sit beside the variant's own colour and the winner
 * would be whichever Tailwind happened to emit last.
 */
const VARIANTS: Record<Variant, string> = {
  primary: "bg-teal-600 text-white border border-teal-600 hover:bg-teal-700 hover:border-teal-700 active:bg-teal-800",
  secondary: "bg-gray-0 text-gray-800 border border-gray-300 hover:bg-gray-50 active:bg-gray-100",
  link: "bg-transparent text-teal-700 border border-transparent underline underline-offset-4 hover:text-teal-800 px-0",
  inverse: "bg-white text-teal-800 border border-white hover:bg-teal-50 hover:border-teal-50 active:bg-teal-100",
  "inverse-outline": "bg-transparent text-white border border-white/40 hover:bg-white/10 active:bg-white/15",
};

// The app's controls are 36px tall, drawn for a mouse. These are for a
// thumb on a phone: nothing under 44px.
const SIZES: Record<Size, string> = {
  sm: "min-h-11 px-4 text-small",
  md: "min-h-12 px-5 text-body",
  lg: "min-h-13 px-6 text-body",
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
    "inline-flex items-center justify-center gap-2 rounded-sm font-semibold whitespace-nowrap",
    "transition-colors duration-150 ease-out",
    "disabled:pointer-events-none disabled:opacity-60",
    VARIANTS[variant],
    SIZES[size],
    loading && "pointer-events-none",
    className,
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
    <button className={classes({ variant, size, className, loading, children })} aria-busy={loading || undefined} {...rest}>
      {loading && (
        <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
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
