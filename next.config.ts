import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w.ladicdn.com",
        port: "", // để trống
        pathname: "/**", // cho phép tất cả path
      },
    ],
  },
};

export default nextConfig;
