const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // this will trigger some webpack default stuffs for dev
  entry: "./src/js/index.js", // if not set, default path to './src/index.js'. Accepts an object with multiple key-value pairs, with key as your custom bundle filename(substituting the [name]), and value as the corresponding file path
  output: {
    filename: "[name].bundle.js", // [name] will take whatever the input filename is. defaults to 'main' if only a single entry value
    path: path.resolve(__dirname, "dist") // the folder containing you final dist/build files. Default to './dist'
  },
  devServer: {
    static: {
        directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 1337,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
    ]
  }
};