/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@tippsy/ui", "@tippsy/utils"],
  // app directory is now stable in Next.js 14, so we don't need the experimental flag
}; 