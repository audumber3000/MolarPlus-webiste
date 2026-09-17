import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Blog covers and any in-post images are served by Sanity's CDN. Without
    // this, next/image refuses them with a 400 and every cover is a blank
    // box, which is exactly how it failed the first time.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },
};

export default nextConfig;
