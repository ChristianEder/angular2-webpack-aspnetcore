'use strict';
require('phantomjs-polyfill')

module.exports = function (config) {

    var testWebpackConfig = require('./webpack.test.config.js');

    config.set({

        basePath: '',

        /*
         * Frameworks to use
         *
         * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['jasmine'],

        // list of files to exclude
        exclude: [],

        /*
         * list of files / patterns to load in the browser
         *
         * we are building the test environment in ./spec-bundle.js
         */
        files: [
           './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './build/specs.js'
        ],

        preprocessors: {
            'build/specs.js': ['coverage', 'webpack', 'sourcemap']
        },

        webpackMiddleware: {
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        webpack: testWebpackConfig,
        // Webpack please don't spam the console when running in karma!
        webpackServer: { noInfo: true },

        reporters: [
             'dots',
             'spec',
             'mocha',
             'coverage',
             'karma-remap-istanbul'
        ],

        coverageReporter: {
            reporters: [
               {
                   dir: 'coverage/js/',
                   subdir: '.',
                   type: 'json'
               }
            ]
        },

        remapIstanbulReporter: {
            src: 'coverage/js/coverage-final.json',
            reports: {
                html: 'coverage/ts',
                json: 'coverage/ts/coverage-final.json'
            },
            timeoutNotCreated: 10000, // default value 
            timeoutNoMoreFiles: 10000 // default value 
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        /*
         * level of logging
         * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        /*
         * start these browsers
         * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: [
          'Chrome'
        ],

        /*
         * Continuous Integration mode
         * if true, Karma captures browsers, runs the tests and exits
         */
        singleRun: true
    });
}