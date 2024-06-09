const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const glob = require('glob')
const fs = require('fs')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')
const ip = require('ip')
const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : undefined,
  entry: {
    index: path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]_[hash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    host: ip.address(),
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 3322,
    hot: true,
    open: true
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader',
      }]
    }, {
      test: /\.s?css$/,
      use: ['style-loader', '@viewfly/devtools/scoped-css-webpack-loader', {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                {
                  // Options
                },
              ],
              [
                'autoprefixer'
              ]
            ],
          }
        }
      }, 'sass-loader'],
    }, {
      test: /\.(jpe?g|png|svg|gif)$/,
      type: 'asset'
    }]
  },
  plugins: [
    new EslintWebpackPlugin({
      extensions: ['.ts', '.tsx']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      publicPath: '/',
      favicon: './public/favicon.ico'
    }),
    new MonacoEditorWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.VIEWFLY_TYPES": JSON.stringify({
        core: fs.readFileSync('./node_modules/@viewfly/core/bundles/index.d.ts').toString(),
        platformBrowser: fs.readFileSync('./node_modules/@viewfly/platform-browser/bundles/index.d.ts').toString(),
      })
    })
  ]
}
