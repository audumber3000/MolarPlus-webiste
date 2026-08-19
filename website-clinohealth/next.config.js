/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // The old static site shipped brand folders at the root. Three of
      // those brands no longer exist; the two that do now live under
      // /brands. Anything else lands on the products index rather than a 404.
      { source: '/MolarPlus/:path*', destination: '/brands/molarplus', permanent: true },
      { source: '/Sonolin/:path*', destination: '/products', permanent: true },
      { source: '/Flexio/:path*', destination: '/products', permanent: true },
      { source: '/Clintal/:path*', destination: '/products', permanent: true },
      { source: '/bdent/:path*', destination: '/products', permanent: true },
    ];
  },
};

module.exports = nextConfig;
