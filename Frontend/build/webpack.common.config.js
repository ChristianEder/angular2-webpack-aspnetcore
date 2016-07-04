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
            { test: /\.ts$/, loader: 'ts' },
            //{ test: /\.scss$/, loader: 'raw!sass' },
            { test: /\.css$/, loaders: ['css-to-string-loader', 'css-loader'] },
            {
                test: /\.png$/, loader: "file", query: {
                    emitFile: true,
                    name: "../wwwroot/assets/images/[name].[ext]"
                }
            },
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