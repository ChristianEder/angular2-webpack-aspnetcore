var testConfigFactory = require('./karma.test.conf.js');

module.exports = function (config) {

    testConfigFactory({
        set: function (testConfig) {
            testConfig.singleRun = false;
            testConfig.webpack = require('./webpack.test.config.js')(false);
            testConfig.browsers = ['Chrome'];
            config.set(testConfig);
        }
    });
}