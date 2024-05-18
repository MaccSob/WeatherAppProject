const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },

  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
        template: './src/index.html',
        title: 'Weather App',
      filename: 'index.html',
      inject: 'body',
    })
  ]
};