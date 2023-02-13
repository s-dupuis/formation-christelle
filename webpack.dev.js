const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    contentBasePublicPath: '/',
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
    proxy: [{
      context: ['/icon', '/image', '/ocr', '/file', '/graphql', '/graphqlwsurl', '/u', '/document', '/exchanges', '/upload', '/logo'],
      target: 'http://localhost:7052'
    }]
  },

  module: {
    rules: [
      // ... other rules
      {
        test: /\.[js]sx?$/,
        exclude: /node_modules/,
        use: [
          // ... other loaders
          {
            loader: require.resolve('babel-loader'),
            options: {
              // ... other options
              plugins: [
                // ... other plugins
                require.resolve('react-refresh/babel')
              ].filter(Boolean)
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: './.env.dev.webpack'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ].filter(Boolean)
});
