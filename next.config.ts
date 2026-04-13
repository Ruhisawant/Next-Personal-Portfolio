import type { NextConfig } from 'next'

const repoName = 'Next-Personal-Portfolio'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : ''
  },
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : ''
}

export default nextConfig
