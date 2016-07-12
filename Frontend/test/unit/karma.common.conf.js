'use strict';
require('phantomjs-polyfill')

module.exports = {

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
       './../../node_modules/phantomjs-polyfill/bind-polyfill.js',
        './specs.js'
    ],

    preprocessors: {
        'specs.js': ['webpack', 'sourcemap']
    },

    webpackMiddleware: {
        stats: {
            chunkModules: false,
            colors: true
        }
    },

    // Webpack please don't spam the console when running in karma!
    webpackServer: { noInfo: true },

    reporters: [
         'dots',
         'spec',
         'mocha'
    ],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    /*
     * level of logging
     * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    //logLevel: config.LOG_INFO,

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
    singleRun: false
};
