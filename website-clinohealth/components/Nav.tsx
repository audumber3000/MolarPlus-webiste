'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import BrandLockup from '@/components/BrandLockup';
import { BRANDS } from '@/lib/brands';
import { CONTACT } from '@/lib/site';

/**
 * Two-pane mega-menu, in the shape Tata Communications uses: a rail of
 * brands on the left, and the apps belonging to the hovered brand on the
 * right. That layout is the whole point — it shows a visitor that we
 * ship families of software, not a list of unrelated products, without
 * making them open four pages to find out.
 *
 * The rail is driven by hover on pointer devices and by click for
 * keyboard and touch, because a hover-only mega-menu is unreachable for
 * both.
 */

const COMPANY_LINKS = [
  { href: '/about', label: 'About Clino Health' },
  { href: '/platform', label: 'How we build' },
  { href: '/security', label: 'Security' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState(BRANDS[0].slug);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Route changes must dismiss both menus. Without this the panel stays
  // open on top of the page the visitor just navigated to.
  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // A small grace period on leave: the pointer has to cross a gap
  // between the trigger and the panel, and closing instantly makes the
  // menu feel like it is snatching itself away.
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenuOpen(false), 140);
  };

  const active = BRANDS.find((b) => b.slug === activeSlug) ?? BRANDS[0];

  return (
    <header className="sticky top-0 z-50">
      {/* Trust bar — carried over from the old site, which led with this
          line above everything else. */}
      <div className="bg-clino-dark text-white/90">
        <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <p className="font-medium">We treat patient data like it&apos;s our own</p>
          <a
            href={`tel:${CONTACT.phone}`}
            className="hidden shrink-0 transition-colors hover:text-white sm:block"
          >
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>

      <nav className="border-b border-clino-edge bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Clino Health home">
              <Image
                src="/logo-wordmark.svg"
                alt="Clino Health"
                width={700}
                height={343}
                priority
                className="h-12 w-auto"
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {/* The trigger is a link to /products, not a toggle button.
                  A toggle fights the hover: the pointer entering the
                  trigger opens the panel, so the click that naturally
                  follows would immediately close it again. Making it a
                  link removes the conflict and gives touch users — who
                  have no hover — a real destination listing every brand,
                  which is exactly what the panel was going to show them. */}
              <Link
                href="/products"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
                onFocus={openMenu}
                className={`flex items-center gap-1 rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                  menuOpen ? 'text-clino-medium' : 'text-ink hover:text-clino-medium'
                }`}
              >
                Brands
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
                />
              </Link>

              <Link href="/platform" className={navLink(pathname === '/platform')}>
                Platform
              </Link>
              <Link href="/security" className={navLink(pathname === '/security')}>
                Security
              </Link>
              <Link href="/about" className={navLink(pathname === '/about')}>
                Company
              </Link>
              <Link
                href="/contact"
                className="ml-3 rounded-full bg-clino-medium px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-clino-dark"
              >
                Talk to us
              </Link>
            </div>

            <button
              type="button"
              className="rounded-md p-2 text-ink lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop mega-menu */}
        {menuOpen && (
          <div
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden border-b border-clino-edge bg-white shadow-xl lg:block"
          >
            <div className="mx-auto grid max-w-container grid-cols-12 gap-0 px-4 sm:px-6 lg:px-8">
              {/* Left rail: the brands */}
              <div className="col-span-4 border-r border-clino-edge py-8 pr-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                    Our brands
                  </p>
                  <Link
                    href="/products"
                    className="flex items-center gap-1 text-xs font-semibold text-clino-medium hover:text-clino-dark"
                  >
                    All products <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
                <ul className="space-y-1">
                  {BRANDS.map((brand) => {
                    const isActive = brand.slug === active.slug;
                    return (
                      <li key={brand.slug}>
                        <Link
                          href={`/brands/${brand.slug}`}
                          onMouseEnter={() => setActiveSlug(brand.slug)}
                          onFocus={() => setActiveSlug(brand.slug)}
                          className="flex w-full items-start gap-3 rounded-lg border p-3 text-left transition-colors"
                          style={
                            isActive
                              ? { borderColor: brand.theme.edge, backgroundColor: brand.theme.tint }
                              : { borderColor: 'transparent' }
                          }
                        >
                          <span
                            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                            style={
                              isActive
                                ? { backgroundColor: brand.theme.accent, color: '#ffffff' }
                                : { backgroundColor: brand.theme.tint, color: brand.theme.accent }
                            }
                          >
                            <brand.Icon className="h-5 w-5" strokeWidth={1.75} />
                          </span>
                          <span className="min-w-0">
                            <span className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-ink">{brand.name}</span>
                              {brand.status === 'development' && (
                                <span className="rounded-full bg-clino-edge px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-clino-dark">
                                  Soon
                                </span>
                              )}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-ink-muted">
                              {brand.tagline}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Right pane: the hovered brand's apps */}
              <div className="col-span-8 py-8 pl-10">
                <div className="mb-6 flex items-center gap-3">
                  <BrandLockup brand={active} as="h2" />
                  <span className="text-sm text-ink-muted">{active.category}</span>
                  {active.url && (
                    <a
                      href={active.url}
                      className="ml-auto flex items-center gap-1 text-xs font-semibold transition-opacity hover:opacity-75"
                      style={{ color: active.theme.accent }}
                    >
                      Visit site <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                  {active.apps.map((app) => {
                    const body = (
                      <>
                        <span
                          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
                          style={{ backgroundColor: active.theme.tint, color: active.theme.accent }}
                        >
                          <app.Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                            {app.name}
                            {app.url && (
                              <ArrowUpRight
                                className="h-3 w-3"
                                style={{ color: active.theme.accent }}
                              />
                            )}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-ink-muted">
                            {app.desc}
                          </span>
                        </span>
                      </>
                    );

                    // Only surfaces that actually exist become links.
                    return app.url ? (
                      <a
                        key={app.name}
                        href={app.url}
                        className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-clino-wash"
                      >
                        {body}
                      </a>
                    ) : (
                      <div key={app.name} className="flex items-start gap-3 p-3">
                        {body}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center gap-6 border-t border-clino-edge pt-5 text-sm">
                  <Link href="/products" className="font-semibold text-clino-medium hover:text-clino-dark">
                    Compare all products
                  </Link>
                  <Link href="/platform" className="text-ink-muted hover:text-ink">
                    How we build
                  </Link>
                  <Link href="/contact" className="ml-auto font-semibold text-clino-medium hover:text-clino-dark">
                    Book a demo →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu — the same data, flattened. A two-pane hover
            layout has no touch equivalent, so brands simply list their
            apps inline. */}
        {mobileOpen && (
          <div className="max-h-[calc(100vh-7rem)] overflow-y-auto border-t border-clino-edge bg-white lg:hidden">
            <div className="space-y-6 px-4 py-6 sm:px-6">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-muted">
                  Our brands
                </p>
                <div className="space-y-4">
                  {BRANDS.map((brand) => (
                    <div key={brand.slug} className="rounded-xl border border-clino-edge p-4">
                      <Link href={`/brands/${brand.slug}`} className="flex items-center gap-3">
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-lg"
                          style={{ backgroundColor: brand.theme.tint, color: brand.theme.accent }}
                        >
                          <brand.Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                            {brand.name}
                            {brand.status === 'development' && (
                              <span className="rounded-full bg-clino-edge px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-clino-dark">
                                Soon
                              </span>
                            )}
                          </span>
                          <span className="block text-xs text-ink-muted">{brand.tagline}</span>
                        </span>
                      </Link>
                      <ul className="mt-3 space-y-2 border-t border-clino-edge pt-3">
                        {brand.apps.map((app) => (
                          <li key={app.name} className="text-xs text-ink-muted">
                            <span className="font-semibold text-ink">{app.name}</span> — {app.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-clino-edge pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-ink-muted">
                  Company
                </p>
                <ul className="space-y-3">
                  {COMPANY_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm font-medium text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="block rounded-full bg-clino-medium px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Talk to us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function navLink(isActive: boolean) {
  return `rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
    isActive ? 'text-clino-medium' : 'text-ink hover:text-clino-medium'
  }`;
}
