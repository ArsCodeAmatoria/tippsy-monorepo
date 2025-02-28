/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@tippsy/ui", "@tippsy/utils"],
  // app directory is now stable in Next.js 14, so we don't need the experimental flag
  
  // Explicitly define page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Force the Pages Router to be the primary router
  experimental: {
    // Both routing systems enabled
    appDir: true
  },
  
  // Disable the App Router temporarily to debug
  // Comment this out if you want to use the App Router
  appDir: false,
  
  // Ensure proper error handling
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 4,
  },
}; 