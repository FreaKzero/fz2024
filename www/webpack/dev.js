const withBase = require('./base');

const config = withBase((config, merge, path) => merge({}, config, {
  mode: "development",
  entry: "./src/js/index.js", 
  devServer: {
    static: {
        directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 1337,
    hot: false,
    liveReload: true
}}));


console.log(config)
module.exports = config;