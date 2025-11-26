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
      // Redirect non-WWW to WWW
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'fbvideodownloaderonline.com' }],
        destination: 'https://www.fbvideodownloaderonline.com/:path*',
        permanent: true,
      },
      // Redirect HTTP to HTTPS (Vercel automatically does this if domain is configured, but can enforce via host check)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.fbvideodownloaderonline.com' }],
        destination: 'https://www.fbvideodownloaderonline.com/:path*',
        permanent: true,
      },
      // Redirect index pages to root
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
