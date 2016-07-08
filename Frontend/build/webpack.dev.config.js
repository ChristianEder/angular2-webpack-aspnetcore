const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: '../wwwroot/[name].js'
    },
    plugins: [
          new webpack.optimize.CommonsChunkPlugin("vendor", "../wwwroot/[name].js")
    ]
});