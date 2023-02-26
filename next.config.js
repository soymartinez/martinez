/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'i.scdn.co',
    ],
  }
}

const whitMDX = require('@next/mdx')()
module.exports = whitMDX(nextConfig)
