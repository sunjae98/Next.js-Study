/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["loremflickr.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-front-door.elice.io",
        // port: "",
      },
    ], // 이미지를 가져올 호스트를 여기에 추가
  },
};

export default nextConfig;
