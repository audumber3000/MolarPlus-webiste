"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { ButtonLink } from "./ui/Button";
import { Container } from "./ui/Section";
import { NAV_LINKS, SIGNUP_URL, whatsappLink } from "@/lib/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Condense on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the sheet on navigation.
  useEffect(() => setOpen(false), [pathname]);

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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-surface transition-shadow duration-200 ease-out",
        scrolled ? "border-b border-ink-200 shadow-sm" : "border-b border-transparent",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between transition-[height] duration-200 ease-out",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Link href="/" className="text-green-700" aria-label="SyrupDesk — home">
            <Logo byline />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-body transition-colors duration-200 ease-out hover:text-green-700",
                    active ? "font-semibold text-green-700" : "text-ink-700",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink
              href={whatsappLink()}
              variant="secondary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("cta_whatsapp", { placement: "navbar" })}
            >
              WhatsApp us
            </ButtonLink>
            <ButtonLink
              href={SIGNUP_URL}
              size="sm"
              onClick={() => track("cta_start_free", { placement: "navbar" })}
            >
              Start free
            </ButtonLink>
          </div>

          <button
            ref={triggerRef}
            type="button"
            className="-mr-2 grid size-11 place-items-center text-ink-900 lg:hidden"
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
        className="fixed inset-0 z-50 flex flex-col bg-surface lg:hidden"
      >
        <div className="flex h-20 shrink-0 items-center justify-between px-4">
          <Link href="/" className="text-green-700" aria-label="SyrupDesk — home">
            <Logo byline />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            className="-mr-2 grid size-11 place-items-center text-ink-900"
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

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4">
          <ul className="flex flex-col divide-y divide-ink-200 border-t border-ink-200">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="flex min-h-14 items-center text-h4 text-ink-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 flex-col gap-3 border-t border-ink-200 p-4">
          <ButtonLink
            href={SIGNUP_URL}
            size="lg"
            onClick={() => track("cta_start_free", { placement: "mobile_nav" })}
          >
            Start free
          </ButtonLink>
          <ButtonLink
            href={whatsappLink()}
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_whatsapp", { placement: "mobile_nav" })}
          >
            Talk to us on WhatsApp
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
