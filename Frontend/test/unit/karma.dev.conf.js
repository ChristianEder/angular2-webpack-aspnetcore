var testConfigFactory = require('./karma.test.conf.js');

module.exports = function (config) {

    testConfigFactory({
        set: function (testConfig) {
            testConfig.autoWatch = true;
            testConfig.singleRun = false;
            config.set(testConfig);
        }
    });
}