const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const path = require("path");

module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.join(__dirname, "..", "wwwroot"),
        filename: '[name].js'
    },
    plugins: [
          new webpack.optimize.UglifyJsPlugin(),
          new webpack.optimize.CommonsChunkPlugin("vendor", "[name].js")
    ]
});