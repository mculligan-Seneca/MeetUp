const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack  = require('webpack');
const dotenv = require('dotenv');
// COnfigure path for dotenv file for api key
dotenv.config({path: './.env'});
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Meetup',
        template:'./src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ],
  module: {
    rules: [
      {
        test: /\.css/i,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
      }
   ]
  }
};