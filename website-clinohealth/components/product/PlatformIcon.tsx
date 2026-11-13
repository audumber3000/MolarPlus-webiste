import { Globe } from 'lucide-react';
import type { PlatformKey } from '@/lib/products/molarplus';

/**
 * Plain platform marks, drawn inline: lucide no longer ships brand logos, and a
 * one-path SVG is lighter than an icon package. Decorative: the platform's name is always
 * printed beside it, so the icon is hidden from screen readers.
 */
export default function PlatformIcon({ platform, className = 'h-6 w-6' }: { platform: PlatformKey; className?: string }) {
  if (platform === 'web') return <Globe className={className} strokeWidth={1.75} aria-hidden />;
  const paths: Record<Exclude<PlatformKey, 'web'>, string> = {
    windows: 'M3 5.1 10.4 4v7.1H3zm0 13.8 7.4 1.1v-7H3zm8.3 1.2L21 21.5V13h-9.7zm0-16.2V11H21V2.5z',
    mac: 'M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9s-2-.9-3.4-.9a5 5 0 0 0-4.2 2.6c-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.6s1.7-.8 3.3-.8 1.9.8 3.3.8 2.2-1.3 3-2.5a10 10 0 0 0 1.4-2.8 4.3 4.3 0 0 1-2.4-4.2zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3.1 1.1.1 2.2-.6 2.9-1.4z',
    ios: 'M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9s-2-.9-3.4-.9a5 5 0 0 0-4.2 2.6c-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.6s1.7-.8 3.3-.8 1.9.8 3.3.8 2.2-1.3 3-2.5a10 10 0 0 0 1.4-2.8 4.3 4.3 0 0 1-2.4-4.2zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3.1 1.1.1 2.2-.6 2.9-1.4z',
    android: 'M17.5 9.4 19.3 6.3a.4.4 0 0 0-.7-.4l-1.8 3.1a11 11 0 0 0-9.6 0L5.4 5.9a.4.4 0 1 0-.7.4l1.8 3.1A10.5 10.5 0 0 0 1 17.8h22a10.5 10.5 0 0 0-5.5-8.4zM7 15.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden focusable="false">
      <path d={paths[platform]} />
    </svg>
  );
}
