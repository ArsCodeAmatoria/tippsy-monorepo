/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@tippsy/ui", "@tippsy/utils"],
  // app directory is now stable in Next.js 14, so we don't need the experimental flag
  
  // Explicitly set the root pattern to include pages directory
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Specify that we want to use both routing systems
  experimental: {
    // This won't be needed in Next.js 14+ but adding for clarity
    appDir: true,
  }
}; 