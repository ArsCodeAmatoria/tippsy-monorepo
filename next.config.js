/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  
  // Explicitly define page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Ensure proper error handling
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 4,
  },
  
  // Configure webpack to properly handle font files
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: 'asset/resource',
    });
    return config;
  },
}; 