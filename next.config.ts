/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRefresh: true, // Ensure Fast Refresh is enabled
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "imgbb.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "10x-tax-software-user-theta.vercel.app",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
