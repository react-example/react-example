const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const resolve = path.resolve.bind(path, process.cwd())
const html = new HtmlWebpackPlugin({ template: 'src/index.html' })
const styles = new ExtractTextPlugin('css/[name].css')

const config = {
  entry: './src/index.js',
  output: {
    path: resolve('build'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: styles.extract('css-loader'),
      },
      {
        test: /\.(bmp|gif|jpe?g|png|svg)$/,
        loader: 'file-loader',
        options: { name: 'img/[name].[ext]' },
      },
      {
        test: /\.(woff2?|otf|ttf|eot)$/,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' },
      },
    ],
  },
  plugins: [html, styles],
  devServer: {
    historyApiFallback: true,
    overlay: true,
    stats: 'minimal',
  },
}

module.exports = config
