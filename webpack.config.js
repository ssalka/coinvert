const path = require('path');
const { BannerPlugin } = require('webpack');

const DIST = path.resolve('./dist');
const SRC = path.resolve('./src');
const TSCONFIG = path.resolve('./tsconfig.json');

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  context: SRC,
  entry: './index.ts',
  target: 'node',
  output: {
    path: DIST,
    filename: 'coinvert.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: SRC,
      loader: 'ts-loader',
      options: {
        configFile: TSCONFIG
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true
    })
  ]
};
