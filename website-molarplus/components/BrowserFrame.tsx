import { colors } from '@/lib/seo';

/**
 * A lightweight macOS-style browser chrome that wraps a product screenshot,
 * so screens read as "the real app" rather than a floating image.
 */
export default function BrowserFrame({
  src,
  alt,
  url = 'app.molarplus.com',
  className = '',
}: {
  src: string;
  alt: string;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-[#2a276e]/10 ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex max-w-[60%] items-center gap-1.5 truncate rounded bg-white px-2.5 py-0.5 text-[10px] font-medium text-gray-400 ring-1 ring-gray-200">
          <span
            className="h-1 w-1 rounded-full"
            style={{ backgroundColor: colors.primary }}
          />
          {url}
        </div>
      </div>
      <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
    </div>
  );
}
