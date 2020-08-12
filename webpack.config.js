const path = require('path');

const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

module.exports = (options) => ({
  target: 'web',
  devtool: options.devtool,
  mode: options.mode,
  entry: options.entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[id].chunk.js'
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
    ],
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    compress: true,
    host: '0.0.0.0',
    port: 80
  },
  plugins: options.plugins.concat(
    [
      new UnusedFilesWebpackPlugin(),
    ],
  )
});
