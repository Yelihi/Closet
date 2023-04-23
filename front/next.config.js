const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['http://api.closet-online.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'api.closet-online.com',
        port: '80',
        pathname: '/**',
      },
    ],
  },
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    const plugins = [...config.plugins];
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins,
    };
  },
  reactStrictMode: false,
  swcMinify: true,
  compress: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/userlogin',
        permanent: false,
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
