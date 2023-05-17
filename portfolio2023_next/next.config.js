/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includesPaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig
