/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  compress: true,

  images: {
    domains: ["i.ytimg.com", "img.youtube.com"],
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  async redirects() {
    return [
      // ✅ Clean index URLs
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
