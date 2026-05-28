'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function HomeTopBanner() {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <Link
      href="/privacy-policy"
      className="group fixed inset-x-0 top-0 z-[60] flex h-10 items-center justify-center gap-2 bg-[#2a276e] px-4 text-white transition-colors hover:bg-[#1a1548]"
    >
      <ShieldCheck className="h-4 w-4 flex-shrink-0 text-white/90" />
      <span className="truncate text-[13px] font-medium tracking-wide">
        We store your patients&apos; data in a uniquely secure way
      </span>
      <span className="hidden sm:inline text-[13px] text-white/40">·</span>
      <span className="hidden sm:inline text-[13px] font-semibold">See how we protect it</span>
      <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
