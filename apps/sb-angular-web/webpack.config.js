const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

function getClientEnvironment(configuration) {
  // Grab NODE_ENV and NX_* environment variables and prepare them to be
  // injected into the application via DefinePlugin in webpack configuration.
  const NX_APP = /^NX_/i;

  const raw = Object.keys(process.env)
    .filter((key) => NX_APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        NODE_ENV: process.env.NODE_ENV || configuration,
      }
    );

  // Stringify all values so we can feed into webpack DefinePlugin
  return {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };
}

module.exports = (config, context) => {
  const newConfig = merge(config, {
    plugins: [
      new webpack.DefinePlugin(getClientEnvironment(context.configuration))
    ],
    resolve: {
      alias: {
        'react-native-config': path.resolve(__dirname, 'angular-native-config.js')
      }
    }
  });
  return newConfig
};
