"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Leaves its children out on the listed paths. The footer is a server
 * component shared by every page, so this small client wrapper is how it
 * drops the Specialities column on an edition's page (lib/editions.ts).
 */
export function HideOnPaths({ paths, children }: { paths: ReadonlyArray<string>; children: ReactNode }) {
  const pathname = usePathname();
  return paths.includes(pathname) ? null : children;
}
