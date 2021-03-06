/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "shorturl.at",
      "m.media-amazon.com",
      "dummyimage.com"
    ]
  },
}

module.exports = nextConfig
