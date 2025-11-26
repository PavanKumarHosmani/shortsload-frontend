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
      // ✅ ONLY redirect non-WWW to WWW
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'fbvideodownloaderonline.com' }],
        destination: 'https://www.fbvideodownloaderonline.com/:path*',
        permanent: true,
      },

      // ✅ Clean index URLs
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
