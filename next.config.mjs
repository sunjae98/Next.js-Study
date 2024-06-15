/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'elice.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn-front-door.elice.io',
      },
    ],
  },
};

export default nextConfig;
