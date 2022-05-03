const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const productionConfig = merge([
  {
    output: {
      publicPath: "/To-Do-List/",
    },
  },
]);
module.exports = {
  entry: './src/index.js',
  mode: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};