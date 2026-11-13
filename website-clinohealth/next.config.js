/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Every page is served at its trailing-slash URL (/products/molarplus/). That exact form is
  // the one product feeds and canonicals use, so it must answer 200 rather than redirect; the
  // slash-less form 308s to it.
  trailingSlash: true,
  images: {
    // The product screenshots are hosted once, on molarplus.com/product-images, and shared by
    // the MolarPlus site, the product feeds and these pages. next/image resizes them per screen.
    remotePatterns: [
      { protocol: 'https', hostname: 'www.molarplus.com', pathname: '/product-images/**' },
      { protocol: 'https', hostname: 'www.curogrid.com', pathname: '/product-images/**' },
    ],
  },
  async redirects() {
    return [
      // One host. Both clinohealth.com and www.clinohealth.com used to answer 200 with the same
      // pages, which splits every page into two URLs; www is the canonical one.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'clinohealth.com' }],
        destination: 'https://www.clinohealth.com/:path*',
        permanent: true,
      },
      // Brand pages moved from /brands/<slug> to /products/<slug>/ (November 2026).
      { source: '/brands', destination: '/products/', permanent: true },
      // Slugs only: the logo files under public/brands (molarplus.svg, syrupdesk.png) contain a dot
      // and must keep serving from /brands.
      { source: '/brands/:slug([a-z0-9-]+)', destination: '/products/:slug/', permanent: true },
      // The old static site shipped brand folders at the root. Three of those brands no longer
      // exist; anything else lands on the products index rather than a 404.
      { source: '/MolarPlus/:path*', destination: '/products/molarplus/', permanent: true },
      { source: '/Sonolin/:path*', destination: '/products/', permanent: true },
      { source: '/Flexio/:path*', destination: '/products/', permanent: true },
      { source: '/Clintal/:path*', destination: '/products/', permanent: true },
      { source: '/bdent/:path*', destination: '/products/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
