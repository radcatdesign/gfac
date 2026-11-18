import type { NextConfig } from 'next';

// GitHub Pages serves the site from /gfac, so the Pages workflow sets NEXT_PUBLIC_BASE_PATH=/gfac.
// On a root domain (Vercel, the real domain) leave it unset.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
};

export default nextConfig;
