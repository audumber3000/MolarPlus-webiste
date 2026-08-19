import Image from 'next/image';
import type { Brand } from '@/lib/brands';

/**
 * A brand's name, rendered the way that brand renders it.
 *
 * The two live brands publish different kinds of artwork: MolarPlus a
 * full horizontal lockup that already contains its name, SyrupDesk a
 * bare bottle mark whose wordmark its own site sets in live text. So
 * this pairs the mark with a typographic name only when the artwork
 * does not carry one, and always emits a real heading for the document
 * outline — visually hidden when the logo already says it.
 */
export default function BrandLockup({
  brand,
  as: Heading = 'h3',
  size = 'md',
}: {
  brand: Brand;
  as?: 'h1' | 'h2' | 'h3';
  size?: 'md' | 'lg';
}) {
  const nameClass =
    size === 'lg'
      ? 'text-3xl font-extrabold tracking-tight md:text-4xl'
      : 'text-2xl font-bold tracking-tight';

  if (!brand.logo) {
    return <Heading className={`${nameClass} text-ink`}>{brand.name}</Heading>;
  }

  const scale = size === 'lg' ? (brand.logo.hasWordmark ? 'h-12' : 'h-16') : brand.logo.heightClass;

  return (
    <div className="flex items-center gap-3">
      <Image
        src={brand.logo.src}
        alt={brand.logo.hasWordmark ? `${brand.name} logo` : ''}
        aria-hidden={brand.logo.hasWordmark ? undefined : true}
        width={brand.logo.width}
        height={brand.logo.height}
        className={`w-auto ${scale}`}
      />
      <Heading
        className={
          brand.logo.hasWordmark ? 'sr-only' : `${nameClass}`
        }
        style={brand.logo.hasWordmark ? undefined : { color: brand.theme.accent }}
      >
        {brand.name}
      </Heading>
    </div>
  );
}
