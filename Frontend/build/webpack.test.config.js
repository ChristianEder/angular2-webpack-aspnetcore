module.exports = {
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    devtool: "inline-source-map",
    module: {
        //preLoaders: [
        //    {
        //        test: /\.js$/,
        //        loader: 'source-map-loader',
        //        exclude: []
        //    }
        //],
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.ts$/, loader: 'ts' },
            { test: /\.css$/, loaders: ['css-to-string-loader', 'css-loader'] },
            {
                test: /\.png$/, loader: "file", query: {
                    emitFile: true,
                    name: "../wwwroot/assets/images/[name].[ext]"
                }
            },
        ],
        postLoaders: [
          {
              test: /^((?!\.spec\.ts).)*.ts$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'istanbul-instrumenter'
          }
        ]
    }
};