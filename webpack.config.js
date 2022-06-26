/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       warnings: false,
  //     },
  //   }),
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  //   new HtmlWebpackPlugin({
  //     template: './src/index.html',
  //   }),
  // ],
  // module: {
  //   loaders: [
  //     {
  //       test: /\.css$/,
  //       loaders: ['style', 'css', 'sass'],
  //     },
  //   ],
  // },
};
