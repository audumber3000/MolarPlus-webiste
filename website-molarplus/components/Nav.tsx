'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Stethoscope, FlaskConical, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { colors } from '@/lib/seo';
import { APP_URL, CLINO_URL, LAB_URL } from '@/lib/constants';
import { trackSignupStarted } from '@/analytics/track';

/**
 * There is no longer an umbrella context: MolarPlus Clinic is the homepage and
 * every shared page (about, blog, contact, legal) belongs to it. Only the Lab
 * page switches the nav to the other product.
 */
type ProductContext = 'clinic' | 'lab';

const productLabels: Record<ProductContext, string> = {
  clinic: 'Clinic',
  lab: 'Lab',
};

const productItems = [
  {
    key: 'clinic' as const,
    Icon: Stethoscope,
    name: 'MolarPlus Clinic',
    desc: 'For dental practices',
    href: '/',
    live: true,
    soon: false,
  },
  {
    key: 'lab' as const,
    Icon: FlaskConical,
    name: 'MolarPlus Lab',
    desc: 'For dental laboratories',
    href: '/lab',
    live: true,
    soon: false,
  },
];

function detectContext(pathname: string | null): ProductContext {
  if (pathname?.startsWith('/lab')) return 'lab';
  return 'clinic';
}

function ProductsDropdown({ activeKey }: { activeKey: ProductContext }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 text-[15px] text-gray-700 hover:text-[#2a276e] font-medium transition-colors py-2"
        aria-haspopup="true"
      >
        Products
        <ChevronDown className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-all" />
      </button>

      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
        <div className="w-[340px] bg-white rounded-2xl border border-gray-200 shadow-xl shadow-black/5 overflow-hidden">
          {productItems.map(({ key, Icon, name, desc, href, soon }) => {
            const isActive = activeKey === key;
            return (
              <Link
                key={key}
                href={href}
                className={`flex items-start gap-3 p-4 transition-colors hover:bg-gray-50 ${
                  isActive ? 'bg-gray-50' : ''
                }`}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${colors.primary}0d` }}
                >
                  <Icon className="w-5 h-5" style={{ color: colors.primary }} />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#1a1c4b]">{name}</span>
                    {soon && (
                      <span className="text-[9px] font-bold uppercase tracking-widest text-amber-700 px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200">
                        Soon
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
                </div>
                <ArrowUpRight className="flex-shrink-0 w-4 h-4 text-gray-400 mt-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const context = detectContext(pathname);
  const isHome = pathname === '/';

  const navLinkClass =
    'text-[15px] text-gray-700 hover:text-[#2a276e] font-medium transition-colors';

  return (
    <nav
      className={`fixed w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 ${
        isHome ? 'top-10' : 'top-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + product chip */}
          <div className="flex items-center gap-3">
            {/* The byline is a sibling of the home link, not a child of
                it: it points at a different site, and an anchor nested
                inside an anchor is invalid markup that browsers resolve
                unpredictably. `items-end` on the column preserves the
                original right-aligned stack. */}
            <div className="flex flex-col items-end">
              <Link href="/" className="group">
                <img
                  src="/molarplus-logo-transparent.svg"
                  alt="MolarPlus"
                  className="h-10 w-auto"
                />
              </Link>
              <a
                href={CLINO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Clino Health, the company behind MolarPlus"
                className="text-[9px] font-bold mt-0.5 tracking-tight leading-none pr-2 transition-opacity hover:opacity-70"
              >
                <span className="text-gray-400 font-medium mr-0.5">by</span>
                <span className="text-[#73a942]">Clino</span>
                <span className="text-[#245501] ml-1">Health</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-3 ml-1 border-l border-gray-200">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em]">
                {productLabels[context]}
              </span>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-7">
            <ProductsDropdown activeKey={context} />

            {context === 'clinic' && (
              <>
                <Link href="/features" className={navLinkClass}>
                  Features
                </Link>
                <Link href="/pricing" className={navLinkClass}>
                  Pricing
                </Link>
                <Link href="/platform" className={navLinkClass}>
                  Platform
                </Link>
              </>
            )}

            <Link href="/about" className={navLinkClass}>
              About
            </Link>
            <Link href="/blog" className={navLinkClass}>
              Blog
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {context === 'clinic' && (
              <>
                <Link
                  href="/find-dentist"
                  className="text-[13px] font-semibold text-gray-700 hover:text-[#2a276e] transition-colors px-3"
                >
                  Find a Dentist
                </Link>
                <a
                  href={`${APP_URL}/login`}
                  onClick={() => trackSignupStarted('nav', `${APP_URL}/login`)}
                  className="inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: colors.primary }}
                >
                  Login / Signup
                </a>
              </>
            )}
            {context === 'lab' && (
              <a
                href={`${LAB_URL}/login`}
                onClick={() => trackSignupStarted('nav', `${LAB_URL}/login`, 'lab')}
                className="inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: colors.primary }}
              >
                Login / Signup
              </a>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            {/* Products section */}
            <button
              type="button"
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className="w-full flex items-center justify-between py-3 text-gray-900 font-semibold"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isMobileProductsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isMobileProductsOpen && (
              <div className="pl-2 pb-2 space-y-1">
                {productItems.map(({ key, Icon, name, desc, href, soon }) => (
                  <Link
                    key={key}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block"
                  >
                    <div className="flex items-start gap-3 py-3">
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${colors.primary}0d` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: colors.primary }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#1a1c4b]">{name}</span>
                          {soon && (
                            <span className="text-[9px] font-bold uppercase tracking-widest text-amber-700 px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200">
                              Soon
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="h-px bg-gray-100 my-2" />

            {context === 'clinic' && (
              <>
                <Link
                  href="/features"
                  className="block py-3 text-gray-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="block py-3 text-gray-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/platform"
                  className="block py-3 text-gray-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Platform
                </Link>
                <Link
                  href="/find-dentist"
                  className="block py-3 text-gray-700 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Find a Dentist
                </Link>
              </>
            )}

            <Link
              href="/about"
              className="block py-3 text-gray-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block py-3 text-gray-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block py-3 text-gray-700 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4">
              {context === 'clinic' && (
                <a
                  href={`${APP_URL}/login`}
                  className="block text-center px-6 py-3 rounded-lg font-semibold text-white"
                  style={{ backgroundColor: colors.primary }}
                  onClick={() => {
                    trackSignupStarted('nav', `${APP_URL}/login`);
                    setIsMenuOpen(false);
                  }}
                >
                  Login / Signup
                </a>
              )}
              {context === 'lab' && (
                <a
                  href={`${LAB_URL}/login`}
                  className="block text-center px-6 py-3 rounded-lg font-semibold text-white"
                  style={{ backgroundColor: colors.primary }}
                  onClick={() => {
                    trackSignupStarted('nav', `${LAB_URL}/login`, 'lab');
                    setIsMenuOpen(false);
                  }}
                >
                  Login / Signup
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
