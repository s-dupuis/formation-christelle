const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extract css to files
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer'); // help tailwindcss to work

module.exports = {
  // Where webpack looks to start building the bundle
  entry: path.resolve(__dirname, 'app', 'index.js'),

  // Where webpack outputs the assets and bundles
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      '@@refs': path.resolve(__dirname, 'refs'),
      '@@components': path.resolve(__dirname, 'app', 'components'),
      '@@contexts': path.resolve(__dirname, 'app', 'contexts'),
      '@@hooks': path.resolve(__dirname, 'app', 'hooks'),
      '@@pages': path.resolve(__dirname, 'app', 'pages'),
      '@@layout': path.resolve(__dirname, 'app', 'layout'),
      '@@less': path.resolve(__dirname, 'app', 'less'),
      '@@graphql': path.resolve(__dirname, 'app', '_graphql'),
      '@@queries': path.resolve(__dirname, 'app', '_graphql', 'queries'),
      '@@mutations': path.resolve(__dirname, 'app', '_graphql', 'mutations'),
      '@@formsMutations': path.resolve(__dirname, '_forms', '_generate', 'gql', 'appMutation'),
      '@@formsHook': path.resolve(__dirname, '_forms', '_generate', 'hook'),
      '@@formsData': path.resolve(__dirname, '_forms', '_generate', 'formData'),
      '@@formsHandlers': path.resolve(__dirname, '_forms', 'handlers'),
      '@@subscriptions': path.resolve(__dirname, 'app', '_graphql', 'subscriptions'),
      '@@lib': path.resolve(__dirname, 'app', 'lib')
    }
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'com sample',
      template: require('html-webpack-template'),
      filename: 'index.html',
      mobile: true,
      lang: 'fr-FR',
      publicPath: '/'
    })
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },

      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', // postcss loader needed for tailwindcss
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [tailwindcss, autoprefixer]
              }
            }
          }
        ]
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' }
    ]
  }
};
