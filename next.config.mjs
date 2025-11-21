/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // 🔥 ADD THIS PART TO FORCE NODE RUNTIME
  experimental: {
    runtime: "nodejs",
  },
};

module.exports = nextConfig;
