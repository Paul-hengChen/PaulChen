/* eslint-disable no-var */
var path = require('path');
// var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // 第一個loader編譯JSX
      { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } } },
      // 第二個loader編譯ES6
      { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
    ],
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
  ],
};
