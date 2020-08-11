const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

module.exports = {
  target: 'web',

  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // fallback to style-loader in development
      //     process.env.NODE_ENV !== 'production'
      //       ? 'style-loader'
      //       : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'sass-loader',
      //   ],
      // },
      // {
      //   test: [/\.js$/, /\.jsx$/],
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // },
    ],
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 80
  },

  plugins:  [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new ExtractTextPlugin({ filename: '[name].css' }),
    new HtmlWebpackPlugin({
      // hash: true,
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      // inject: true
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new UnusedFilesWebpackPlugin(),
  ],
};
