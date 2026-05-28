import { SITE_NAME } from '@/lib/seo';
import Link from 'next/link';
import { WindowsBadge, MacBadge } from '@/components/DesktopBadges';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1a1548] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Column 1: Logo & Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-3">
                <img
                  src="/molarplus-logo-transparent.svg"
                  alt="MolarPlus"
                  className="h-14 w-auto brightness-0 invert"
                />
              </Link>
              <div className="text-[11px] font-bold tracking-tight leading-none mb-6">
                <span className="text-white/40 font-medium mr-0.5">by</span>
                <span className="text-[#a3d977]">Clino</span>
                <span className="text-[#7eb049] ml-1">Health</span>
              </div>
              <p className="text-blue-100/70 text-sm leading-relaxed mb-8 font-medium">
                Software for everyone in dentistry. Built for clinics, laboratories, and colleges.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/molarplus_dental/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61575363063274" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://x.com/Molarplus_" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" aria-label="X (Twitter)">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/molarplus/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.youtube.com/@MolarPlus" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Products */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Products</h3>
              <ul className="space-y-4 text-blue-100/60 text-sm font-semibold">
                <li>
                  <Link href="/clinic" className="hover:text-white transition-colors">
                    MolarPlus Clinic
                  </Link>
                </li>
                <li>
                  <Link href="/lab" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    MolarPlus Lab
                    <span className="text-[9px] font-bold uppercase tracking-widest text-amber-300 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-400/30">
                      Soon
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/college" className="hover:text-white transition-colors inline-flex items-center gap-2">
                    MolarPlus College
                    <span className="text-[9px] font-bold uppercase tracking-widest text-amber-300 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-400/30">
                      Soon
                    </span>
                  </Link>
                </li>
                <li className="pt-4">
                  <Link href="/clinic/features" className="hover:text-white transition-colors">
                    Clinic Features
                  </Link>
                </li>
                <li>
                  <Link href="/clinic/pricing" className="hover:text-white transition-colors">
                    Clinic Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Company</h3>
              <ul className="space-y-4 text-blue-100/60 text-sm font-semibold">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/clinic/find-dentist" className="hover:text-white transition-colors">Find a Dentist</Link></li>
                <li className="pt-4">
                  <Link href="/privacy-policy" className="hover:text-white transition-colors text-xs">Privacy</Link>
                  <span className="text-white/20 mx-2 text-xs">·</span>
                  <Link href="/terms-of-use" className="hover:text-white transition-colors text-xs">Terms</Link>
                </li>
                <li>
                  <Link href="/cookies-policy" className="hover:text-white transition-colors text-xs">Cookies</Link>
                  <span className="text-white/20 mx-2 text-xs">·</span>
                  <Link href="/refund-policy" className="hover:text-white transition-colors text-xs">Refund</Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Get in touch</h3>
              <ul className="space-y-4 text-blue-100/60 text-sm font-semibold">
                <li>
                  <a href="mailto:support@molarplus.com" className="hover:text-white transition-colors">
                    support@molarplus.com
                  </a>
                </li>
                <li className="leading-relaxed text-xs text-blue-100/50 font-medium">
                  Sky Loft, Shastrinagar,<br />
                  Yerawada, Pune 411006<br />
                  India
                </li>
              </ul>
            </div>

            {/* Column 5: Download Apps */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Download Apps</h3>

              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100/40 mb-3">
                Mobile
              </div>
              <div className="flex flex-col gap-3 mb-7 max-w-[160px]">
                <a
                  href="https://apps.apple.com/app/molarplus/id6765472713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-90"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download MolarPlus on App Store"
                    className="w-full h-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.molarplus.app&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-90"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="w-full h-auto"
                  />
                </a>
              </div>

              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100/40 mb-3">
                Desktop
              </div>
              <div className="flex flex-col gap-3">
                <WindowsBadge comingSoon={false} href="https://apps.microsoft.com/detail/9n78rx7phv9k" />
                <MacBadge comingSoon={false} href="https://pub-376f22e59eee415286747973b95ba075.r2.dev/MolarPlus-mac.dmg" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#120e3a] py-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-blue-100/30">
          <p className="text-[12px] font-bold uppercase tracking-wider">
            © {new Date().getFullYear()} {SITE_NAME} Powered by Upclick labs (OPC) Pvt. ltd.
          </p>
        </div>
      </div>
    </>
  );
}
