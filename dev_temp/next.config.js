/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
    webpack: (config, { isServer }) => {
      // Add module aliases to resolve paths
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
      return config;
    },
  };