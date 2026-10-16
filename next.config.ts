import type { NextConfig } from "next";

/**
 * SITE_ENV=production  → served at the domain root, indexable.
 * anything else        → served under /portfolio-preview, noindex.
 */
const isProd = process.env.SITE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "" : "/portfolio-preview",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "" : "/portfolio-preview",
  },
};

export default nextConfig;
