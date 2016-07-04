var webpack = require("webpack");

module.exports = {
    entry: {
        app: './app/app.ts',
        vendor: './app/vendor.ts'
    },
    output: {
        path: __dirname,
        filename: '../wwwroot/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html']
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.ts$/, loader: 'ts' }
            //{ test: /\.scss$/, loader: 'raw!sass' },
            //{ test: /\.css$/, loader: 'style!css' },
            //{ test: /\.png$/, loader: "url-loader?mimetype=image/png" },
            //{ test: /\.gif$/, loader: "url-loader?mimetype=image/gif" },
            //{ test: /\.(woff|woff2|eot|ttf|svg)(\?.*)?$/, loader: 'file-loader?name=wwwroot/fonts/[name].[ext]' },
            //{ test: /jquery\.js$/, loader: 'expose?$' },
            //{ test: /jquery\.js$/, loader: 'expose?jQuery' }
        ]
    },
    plugins: [
		require('webpack-fail-plugin'),
          new webpack.optimize.CommonsChunkPlugin("vendor", "../wwwroot/[name].js")
    ]
};