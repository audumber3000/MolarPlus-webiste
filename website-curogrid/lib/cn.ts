/** Tiny class joiner. Avoids pulling clsx into the JS budget. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
