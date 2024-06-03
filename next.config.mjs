/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'elice.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
