/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "connectlife.com.br",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
