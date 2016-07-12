const webpack = require("webpack");
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-source-map',
    output: {
        path: __dirname,
        filename: '[name].js',
        publicPath: "/wwwroot/"
    },
    plugins: [
          new webpack.optimize.CommonsChunkPlugin("vendor", "[name].js")
    ]
});