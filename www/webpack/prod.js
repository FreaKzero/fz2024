const path = require("path");
const withBase = require('./base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const config = withBase((conf, merge, path) => merge({}, conf, {
    mode: "production",
    plugins: [...conf.plugins, new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
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


