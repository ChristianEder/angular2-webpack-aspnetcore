var karmaConfig = require('./karma.common.conf.js');

module.exports = function (config) {
    var measureCoverage = true;
    var testWebpackConfig = require('./webpack.test.config.js')(measureCoverage);
    karmaConfig.webpack = testWebpackConfig;

    karmaConfig.preprocessors['specs.js'] = ["coverage"].concat(karmaConfig.preprocessors['specs.js']);

    karmaConfig.reporters = karmaConfig.reporters.concat(['coverage', 'karma-remap-istanbul']);

    karmaConfig.coverageReporter = {
        reporters: [
           {
               dir: 'coverage/js/',
               subdir: '.',
               type: 'json'
           }
        ]
    };

    karmaConfig.remapIstanbulReporter = {
        src: 'test/unit/coverage/js/coverage-final.json',
        reports: {
            html: 'test/unit/coverage/ts',
            json: 'test/unit/coverage/ts/coverage-final.json'
        },
        timeoutNotCreated: 10000, // default value 
        timeoutNoMoreFiles: 10000 // default value 
    };

    config.set(karmaConfig);
}