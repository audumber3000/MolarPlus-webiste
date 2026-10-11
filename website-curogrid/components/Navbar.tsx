"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui/Button";
import { Container } from "./ui/Section";
import { LOGIN_URL, NAV_LINKS, SIGNUP_URL } from "@/lib/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export type NavSpeciality = { href: string; name: string; card: string };

/**
 * `specialities` is passed in by the layout, not imported here: the
 * data file carries every medicine list, and importing it from a client
 * component would ship all of it to the browser for the sake of six
 * menu rows.
 */
export function Navbar({ specialities }: { specialities: ReadonlyArray<NavSpeciality> }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll, move focus in, and wire Escape while open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onSpeciality = pathname === "/specialities" || specialities.some((s) => s.href === pathname);
  const linkClass = (active: boolean) =>
    cn(
      "inline-flex min-h-11 items-center text-[0.9375rem] transition-colors duration-150 ease-out hover:text-white",
      active ? "font-semibold text-white" : "text-white/80",
    );

  return (
    <header className="on-dark sticky top-0 z-50 bg-teal-900">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" aria-label="Curogrid home" className="shrink-0">
            <Logo tone="dark" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {/* A link to the index, not a toggle button. The panel opens
                on hover and on keyboard focus; a click still goes
                somewhere, which is what a touch screen needs. */}
            <div className="group relative">
              <Link
                href="/specialities"
                aria-current={pathname === "/specialities" ? "page" : undefined}
                className={cn(linkClass(onSpeciality), "gap-1.5")}
              >
                Specialities
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="invisible absolute top-full left-0 w-[30rem] pt-2 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="rounded-md border border-gray-200 bg-gray-0 p-2 shadow-lg">
                  <ul>
                    {specialities.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="block rounded-sm px-3 py-2.5 hover:bg-teal-50">
                          <span className="block text-[0.9375rem] font-semibold text-gray-900">{s.name}</span>
                          <span className="block text-small text-gray-600">{s.card}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/specialities"
                    className="mt-1 block rounded-sm border-t border-gray-200 px-3 py-3 text-small font-semibold text-teal-700 hover:bg-teal-50"
                  >
                    All specialities
                  </Link>
                </div>
              </div>
            </div>

            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={linkClass(active)}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={LOGIN_URL} className={linkClass(false)} onClick={() => track("cta_login", { placement: "navbar" })}>
              Log in
            </a>
            <ButtonLink
              href={SIGNUP_URL}
              variant="inverse"
              size="sm"
              onClick={() => track("cta_start_trial", { placement: "navbar" })}
            >
              Start free trial
            </ButtonLink>
          </div>

          <button
            ref={triggerRef}
            type="button"
            className="-mr-2 grid size-11 place-items-center text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => {
              setOpen(true);
              track("nav_opened");
            }}
          >
            <span className="sr-only">Open menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>

      {/* Full-screen sheet, not a cramped dropdown. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col bg-teal-900 lg:hidden"
        // Any link in the sheet closes it. One handler here, not one per link.
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        <div className="flex h-16 shrink-0 items-center justify-between px-4">
          <Link href="/" aria-label="Curogrid home">
            <Logo tone="dark" />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            className="-mr-2 grid size-11 place-items-center text-white"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
          >
            <span className="sr-only">Close menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 pb-6">
          <p className="pt-4 pb-2 text-micro font-bold tracking-wider text-teal-300 uppercase">Specialities</p>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {specialities.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="flex min-h-12 items-center text-body font-semibold text-white">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/specialities" className="flex min-h-12 items-center text-body text-teal-200">
                All specialities
              </Link>
            </li>
          </ul>
          <p className="pt-6 pb-2 text-micro font-bold tracking-wider text-teal-300 uppercase">Curogrid</p>
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="flex min-h-12 items-center text-body font-semibold text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="flex min-h-12 items-center text-body font-semibold text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 flex-col gap-3 border-t border-white/10 p-4">
          <ButtonLink href={SIGNUP_URL} variant="inverse" onClick={() => track("cta_start_trial", { placement: "mobile_nav" })}>
            Start free trial
          </ButtonLink>
          <ButtonLink href={LOGIN_URL} variant="inverse-outline" onClick={() => track("cta_login", { placement: "mobile_nav" })}>
            Log in
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
