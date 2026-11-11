/** @type {import('next').NextConfig} */

// Static export for GitHub Pages. PAGES_BASE_PATH is set by the deploy workflow:
// empty when a custom domain is attached, "/erp-portfolio" on aseel-et.github.io.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  images: { unoptimized: true }
};

export default nextConfig;
