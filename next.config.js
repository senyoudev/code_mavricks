/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["ipfs.io"],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return config;
  },
  reactStrictMode: true,
};
