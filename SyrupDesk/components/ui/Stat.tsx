import { cn } from "@/lib/cn";

/** Large tabular-figure number with a label. No animated counters. */
export function Stat({
  value,
  label,
  tone = "default",
}: {
  value: string;
  label: string;
  tone?: "default" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div>
      <p
        data-numeric
        className={cn("text-h3 font-bold sm:text-h2", dark ? "text-white" : "text-green-700")}
      >
        {value}
      </p>
      <p className={cn("mt-1 text-small", dark ? "text-green-200" : "text-ink-500")}>{label}</p>
    </div>
  );
}
