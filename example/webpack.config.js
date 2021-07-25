var path = require('path')
var webpack = require('webpack')
var HtmlWebPackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: ['whatwg-fetch/fetch.js', 'core-js/es/promise', path.resolve(__dirname, './src/main.js')],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue': '@vue/compat',
      'vue-simple-suggest': path.resolve(__dirname, '../')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    noInfo: false,
    overlay: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, '../assets'), to: path.resolve(__dirname, 'src/assets') },
      { from: path.resolve(__dirname, '../assets'), to: path.resolve(__dirname, '../docs/assets') },
      { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, '../docs/assets') }
    ]),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './src/index.ejs')
    })
  ],
  output: {
    path: path.resolve(__dirname, "../docs")
  }
}
