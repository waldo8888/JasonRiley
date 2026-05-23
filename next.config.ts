import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The booking page was renamed from /coaching → /booking. Keep
      // any old external links (early press, podcast notes, business
      // cards already printed) working with a permanent 308.
      { source: "/coaching", destination: "/booking", permanent: true },
      { source: "/coaching/:path*", destination: "/booking/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
