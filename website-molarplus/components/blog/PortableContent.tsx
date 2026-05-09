import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import { imageUrl } from '@/lib/sanity';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const text = (value?.children || []).map((c: any) => c.text || '').join('');
      return <h2 id={slugify(text)}>{children}</h2>;
    },
    h3: ({ children, value }) => {
      const text = (value?.children || []).map((c: any) => c.text || '').join('');
      return <h3 id={slugify(text)}>{children}</h3>;
    },
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const blank = value?.blank;
      return (
        <a
          href={value?.href}
          target={blank ? '_blank' : undefined}
          rel={blank ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = imageUrl(value, 1200);
      return (
        <figure>
          <Image
            src={src}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className="rounded-2xl"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-500 text-center mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableContent({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
