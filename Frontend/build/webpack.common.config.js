const path = require("path");

module.exports = {
    entry: {
        app: './app/app.ts',
        vendor: './app/vendor.ts'
    },    
    resolve: {
        extensions: ['', '.js', '.ts', '.html']
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.css$/, loaders: ['css-to-string-loader', 'css-loader'] },
            {
                test: /\.png$/, loader: "file", query: {
                    emitFile: true,
                    name: "assets/images/[name].[ext]"
                }
            },
            //{ test: /\.gif$/, loader: "url-loader?mimetype=image/gif" },
            //{ test: /\.(woff|woff2|eot|ttf|svg)(\?.*)?$/, loader: 'file-loader?name=wwwroot/fonts/[name].[ext]' },
            //{ test: /jquery\.js$/, loader: 'expose?$' },
            //{ test: /jquery\.js$/, loader: 'expose?jQuery' }
        ]
    },
    plugins: [
		require('webpack-fail-plugin')
    ]
};