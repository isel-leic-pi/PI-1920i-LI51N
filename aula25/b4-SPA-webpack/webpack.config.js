'use strict';
const path = require('path');
const distDir = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: distDir,
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: 'B4-BUNDLES',
    }), 
    ],
  module: {
      rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },
};