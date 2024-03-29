
const withBase = require('./base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = withBase((conf, merge, path) => merge({}, conf, {
    mode: "production",
    plugins: [new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: path.resolve(__dirname, "../dist", "index.html")
    }), new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  {loader: 'css-loader',options: {sourceMap: true}},
                  {loader: 'resolve-url-loader', options: { removeCR: true }},
                  {loader: "postcss-loader", options: { sourceMap: true}}]
              },
              {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
              }
        ]
    }
}));
module.exports = config;


