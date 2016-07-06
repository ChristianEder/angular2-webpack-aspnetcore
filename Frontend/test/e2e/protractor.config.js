exports.config = {
    specs: [
        './features/*.feature'
    ],
    directConnect: true,
    useAllAngular2AppRoots: true,

    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // relevant cucumber command line options
    cucumberOpts: {
        require: './steps/*.js',
        format: 'pretty'
    }
};