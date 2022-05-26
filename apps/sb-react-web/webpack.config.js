const { merge } = require('webpack-merge');
const path = require('path');

module.exports = (config, context) => {
  const newConfig = merge(config, {
    resolve: {
      alias: {
        'react-native$': 'react-native-web'
      }
    }
  });
  return newConfig
};
