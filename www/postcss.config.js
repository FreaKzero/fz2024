module.exports = {
    plugins: [
        require('autoprefixer'),
     	require('postcss-import'),
        require('postcss-mixins'),
        require("stylelint"),
        require('postcss-preset-env')({ stage: 1 }),
        require('cssnano')({normalizeUrl: false}),
        require('postcss-nesting')
    ],
}