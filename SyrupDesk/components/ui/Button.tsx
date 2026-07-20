import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  // green-500 fill, not green-700: the anchor colour on every button
  // makes the page read heavy and inert.
  primary:
    "bg-green-500 text-white border border-green-500 hover:bg-green-600 hover:border-green-600 active:bg-green-900 active:border-green-900",
  secondary:
    "bg-transparent text-green-700 border border-green-700 hover:bg-green-50 active:bg-green-100",
  ghost: "bg-transparent text-green-700 border border-transparent hover:bg-green-50",
  link: "bg-transparent text-green-700 border border-transparent underline underline-offset-4 hover:text-green-600 px-0",
};

// Min tap target 44x44 across every size — thumbs on a mid-range
// Android phone, not a mouse pointer.
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
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium",
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
