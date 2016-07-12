var karmaConfig = require('./karma.common.conf.js');

module.exports = function (config) {  
    var measureCoverage = false;
    var testWebpackConfig = require('./webpack.test.config.js')(measureCoverage);
    karmaConfig.webpack = testWebpackConfig;
    config.set(karmaConfig);
}