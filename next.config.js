/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  experimental: {
    scrollRestoration: true,
  },
  env: {
    APP_NAME: process.env.APP_NAME,
    ENVIRONTMENT: process.env.ENVIRONTMENT,
    API_URL: process.env.API_URL,
    SECRET_KEY: process.env.SECRET_KEY,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
