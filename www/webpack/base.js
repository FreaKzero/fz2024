const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const withBase = (confFunc) => {

    const base = {
        entry: "./src/js/index.js", 
        output: {
          filename: "[name].bundle.js", 
          path: path.resolve(__dirname, "../dist/assets")
        },
        plugins: [new HtmlWebpackPlugin({
          template: './src/index.html'
        })],
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
          ],
        },

      };
      return confFunc(base, Object.assign, path);
};

module.exports = withBase;