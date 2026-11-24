import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    }];
  },
  async redirects() {
    return [
      { source: "/", destination: "/en", has: [{ type: "cookie", key: "portfolio-language", value: "en" }], permanent: false },
      { source: "/", destination: "/es", permanent: false },
      { source: "/projects/sistema-lavanderia", destination: "/es/projects/mira-que-te-lavo", permanent: true },
      { source: "/:lang(es|en)/projects/sistema-lavanderia", destination: "/:lang/projects/mira-que-te-lavo", permanent: true },
      { source: "/projects/:slug", destination: "/es/projects/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
