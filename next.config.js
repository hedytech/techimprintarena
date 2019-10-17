const path = require('path');
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  webpack(config) {
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    return config;
  }
});
