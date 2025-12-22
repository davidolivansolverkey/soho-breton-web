import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.sohobreton.es",
          },
        ],
        destination: "https://sohobreton.es/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
