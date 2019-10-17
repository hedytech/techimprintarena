const path = require('path');
const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');
module.exports = withCSS(withOptimizedImages({
  webpack(config) {
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    return config;
  }
}));
