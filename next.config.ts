import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume/fahmi-muhammad-al-hafizh.pdf",
        permanent: false,
      },
      {
        source: "/work/maritimate",
        destination: "/projects/maritimate",
        permanent: false,
      },
      {
        source: "/work/sustainable-blue-economy",
        destination: "/projects/maritimate",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
