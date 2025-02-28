/** @type {import('next').NextConfig} */
// This is a helper file for Vercel to locate the Next.js project
// The actual configuration is in apps/web/next.config.js
const path = require('path');

// Export the existing config from the web app
module.exports = require(path.join(__dirname, 'apps/web/next.config.js')); 