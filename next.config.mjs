/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'robertsspaceindustries.com' },
      { protocol: 'https', hostname: 'media.robertsspaceindustries.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.iheldtheline.com' }],
        destination: 'https://iheldtheline.com/:path*',
        permanent: true,
      },
      {
        // vercel.app alias served a full indexable duplicate — GSC flagged
        // /vanduul + /sq42-vs-star-citizen "Duplicate without user-selected
        // canonical" (2026-07-18). Exact match keeps preview URLs working.
        source: '/:path*',
        has: [{ type: 'host', value: 'iheldtheline-site.vercel.app' }],
        destination: 'https://iheldtheline.com/:path*',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
