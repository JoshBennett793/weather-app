const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    weather: './src/components/api/weather-data.js',
    header: './src/components/header/header.js',
    menu: './src/components/menu/menu.js',
    search_query: './src/components/search-query.js',
    cards: './src/components/cards/cards.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather App',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png\svg\jpg\jpeg\gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
