module.exports = function (measureCoverage) {
    return {
        resolve: {
            root: __dirname,
            extensions: ['', '.ts', '.js', '.json']
        },
        resolveLoader: {
            modulesDirectories: ["node_modules"]
        },
        devtool: "inline-source-map",
        module: {
            loaders: [
                { test: /\.html$/, loader: 'raw' },
                { test: /\.ts$/, loader: 'ts', query: { configFileName: measureCoverage ? "tsconfig.coverage.json" : "tsconfig.json" } },
                { test: /\.css$/, loaders: ['css-to-string-loader', 'css-loader'] },
                {
                    test: /\.png$/, loader: "file", query: {
                        emitFile: true,
                        name: "assets/images/[name].[ext]"
                    }
                }
            ],
            postLoaders: measureCoverage ? [
              {
                  test: /^((?!\.spec\.ts).)*.ts$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'istanbul-instrumenter'
              }
            ] : []
        }
    }
};