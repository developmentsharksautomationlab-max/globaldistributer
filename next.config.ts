import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dpmdistribution.us", pathname: "/**" },
    ],
  },
};

export default nextConfig;
