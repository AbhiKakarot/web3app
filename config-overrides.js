const webpack = require('webpack');

module.exports = function override(config) {
  // Add fallback configuration for the 'stream' module
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve('stream-browserify'),
  };

  // Return the modified webpack config
  return config;
};
