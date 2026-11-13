import type { Config } from 'tailwindcss';

/**
 * The Clino palette is the one the old static site used, carried over
 * unchanged so the rebuild is a port and not a redesign. It lives here
 * as named tokens rather than raw hex so pages never inline a colour.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        clino: {
          dark: '#143601',
          medium: '#245501',
          light: '#73a942',
          // Tints derived from the three brand greens. The old site
          // reached for `clino-light/10` inline everywhere; naming them
          // keeps the wash consistent between sections.
          wash: '#f4f9f0',
          edge: '#e3efd9',
        },
        // MolarPlus's own identity, for its product page (website-molarplus/lib/seo.ts colors).
        molar: {
          DEFAULT: '#2a276e',
          deep: '#1c1a52',
          tint: '#eeedf6',
          edge: '#d8d6e8',
        },
        // Curogrid's teal, for its product page (website-curogrid/design/tokens.css).
        curo: {
          DEFAULT: '#256F72',
          deep: '#1A3C3E',
          tint: '#F0F8F8',
          edge: '#B8DDDF',
        },
        // WhatsApp's green, for buttons that open a chat.
        wa: '#1faa53',
        ink: {
          DEFAULT: '#12200a',
          muted: '#4a5a41',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '80rem',
      },
    },
  },
  plugins: [],
};

export default config;
