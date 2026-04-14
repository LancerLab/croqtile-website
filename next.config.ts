import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isGhPages = process.env.GITHUB_PAGES === "true";

const basePath = isGhPages ? "/croqtile-website" : "";

const nextConfig: NextConfig = {
  output: isGhPages ? "export" : "standalone",
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isGhPages && {
    basePath,
    images: { unoptimized: true },
    trailingSlash: true,
  }),
};

export default withNextIntl(nextConfig);
