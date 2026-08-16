/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/blog',
        permanent: true,
      },
      {
        // MolarPlus Clinic became the homepage, so /clinic is the same page at a
        // new address. Without this it would compete with `/` as a duplicate.
        source: '/clinic',
        destination: '/',
        permanent: true,
      },
      {
        // The /clinic/* namespace existed to separate the clinic product from
        // the lab product back when `/` was a chooser. Clinic is now the whole
        // site, so the segment separated nothing and has been dropped.
        //
        // NOTE: this reverses the old "no redirects to the flat URLs" rule.
        // That rule described a deliberate clean break when the flat URLs were
        // abandoned; these pages have now moved back, and three published blog
        // posts still link to /features and /pricing, so the redirect is what
        // makes those links resolve.
        source: '/clinic/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/articles/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

module.exports = nextConfig;
