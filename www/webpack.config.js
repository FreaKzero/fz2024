const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", 
  entry: "./src/js/index.js", 
  output: {
    filename: "[name].bundle.js", 
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: {
        directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 1337,
    hot: false,
    liveReload: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  // plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
    ]
  }
};