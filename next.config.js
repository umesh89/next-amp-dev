/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:'',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['education.indianexpress.com'],
  }
}

module.exports = nextConfig
