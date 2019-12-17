'use strict';
const path = require('path');
const distDir = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  
    devtool: 'source-map',

    entry: './app/entry.js',
    output: {
        filename: 'bundle.js',
        path: distDir,
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './app/index.html',
        }), 
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },{
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000',
        },{
          test: /\.(hbs)$/,
          use: 'raw-loader'
        },{
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
