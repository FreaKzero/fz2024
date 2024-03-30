const withBase = require('./base');

const config = withBase((conf, merge, path) => merge({}, conf, {
  mode: "development",
  entry: "./src/js/index.js", 
  module: {
    rules: [
      {
        test: /\.css$/i,           
        use: [
        {loader: 'style-loader'},
        {loader: 'css-loader',options: {sourceMap: true}},
        {loader: 'resolve-url-loader', options: { removeCR: true }},
        {loader: "postcss-loader", options: { sourceMap: true}}]
      }, 
      ...conf.module.rules
    ]
  },
  devServer: {
    static: {
        directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 1337,
    hot: false,
    liveReload: true
}}));
module.exports = config;