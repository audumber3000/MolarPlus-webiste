import { cn } from "@/lib/cn";

/**
 * Curogrid's own line icons, drawn for this site on a 24 box: one stroke
 * weight, square joins to match the square corners of the brand, and the
 * logo's "+" wherever a care idea fits. They take `currentColor`, so the
 * colour comes from a token class (`text-teal-700`), never a hex.
 */
export type IconName =
  | "token"
  | "rupee"
  | "course"
  | "allergy"
  | "phone"
  | "setup"
  | "pin"
  | "lock"
  | "tag"
  | "export";

const PATHS: Record<IconName, React.ReactNode> = {
  // A token slip with its number lines.
  token: (
    <>
      <path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z" />
      <path d="M8.5 7v10" strokeDasharray="1.6 2" />
      <path d="M12 10.5h5M12 13.5h3" />
    </>
  ),
  // A bill with a rupee sign.
  rupee: (
    <>
      <path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4z" />
      <path d="M9.5 7.5h5M9.5 10h5M11 7.5c2.6 0 2.6 2.5 0 2.5H9.5l4.2 4.5" />
    </>
  ),
  // A calendar: two sessions done, one to come.
  course: (
    <>
      <path d="M3 5.5h18V21H3z" />
      <path d="M3 9.5h18M8 3v4M16 3v4" />
      <path d="M5.8 14.6l1.2 1.2 2-2.2M10.8 14.6l1.2 1.2 2-2.2" />
      <path d="M15.6 13h2.6v2.6h-2.6z" />
    </>
  ),
  // A shield with a warning mark.
  allergy: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.3 7.7-8 9-4.7-1.3-8-4.5-8-9V6z" />
      <path d="M12 8v5M12 16v.6" />
    </>
  ),
  // The phone app with the doctor's line on it.
  phone: (
    <>
      <path d="M6.5 2.5h11v19h-11z" />
      <path d="M10.5 18.5h3" />
      <path d="M9 7h6M9 10h6M9 13h3.5" />
    </>
  ),
  // A clipboard carrying the Curogrid plus: set up and ready.
  setup: (
    <>
      <path d="M5 4.5h14V21H5z" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="M12 9.5v6M9 12.5h6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <path d="M12 7.5v5M9.5 10h5" />
    </>
  ),
  lock: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.3 7.7-8 9-4.7-1.3-8-4.5-8-9V6z" />
      <path d="M9.2 11h5.6v4.6H9.2z" />
      <path d="M10.3 11V9.6a1.7 1.7 0 0 1 3.4 0V11" />
    </>
  ),
  tag: (
    <>
      <path d="M3 3h8.5L21 12.5 12.5 21 3 11.5z" />
      <path d="M7.5 6.5v3M6 8h3" />
    </>
  ),
  export: (
    <>
      <path d="M12 3.5v11M7.5 10L12 14.5 16.5 10" />
      <path d="M4 14.5V20h16v-5.5" />
    </>
  ),
};

export function CuroIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
    >
      {PATHS[name]}
    </svg>
  );
}

/** The icon on a small square tile, as it sits on a card. */
export function IconTile({ name, tone = "light" }: { name: IconName; tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "grid size-11 place-items-center rounded-md",
        tone === "dark" ? "bg-white/10 text-teal-200" : "bg-teal-50 text-teal-700",
      )}
    >
      <CuroIcon name={name} />
    </span>
  );
}
