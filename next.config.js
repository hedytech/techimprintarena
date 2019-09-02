const isProd = process.env.NODE_ENV === 'production';
const path = require('path');
const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');
module.exports = withCSS(withOptimizedImages({
  exportTrailingSlash: isProd,
  webpack(config) {
    config.resolve.alias['static'] = path.join(__dirname, 'static');
    return config;
  }
}));
