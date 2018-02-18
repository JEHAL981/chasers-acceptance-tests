exports.config = {

    /**
     * Server Configurations
     * @param
     */

    host: '0.0.0.0',
    port: 4444,
    path: '/wd/hub',

    /**
     *  Specify Test Files
     *  @param
     */

    specs: [
        './features/**/*.feature'
    ],

    exclude: [],

    /**
     *  Capabilities
     *  @param
     */

    maxInstances: 10,

    capabilities: [{
            browserName: 'chrome',
            chromeOptions: {
                args: ['--headless', '--disable-gpu', '--window-size=1280,800'],
                binary: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
            },

            browserName: 'firefox',
            maxInstances: 1
    }],

    /**
     *  Test Configurations
     *  @param
     */

    sync: true,

    logLevel: 'error',

    coloredLogs: true,

    screenshotPath: './target/outputs/ScreenShot',

    baseUrl: 'http://www.claphamchasers.co.uk',

    waitforTimeout: 60000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['selenium-standalone'],

    framework: 'cucumber',

    reporters: ['cucumber', 'junit', 'cucumber-snippet'],
    reporterOptions: {
        outputDir: './target/outputs/reports/junit'
    },

    cucumberOpts: {
        require: [
            './features/step_definitions/HomePageStepDefs.js',
            './features/step_definitions/LoginPageStepDefs.js.js'


        ],
        backtrace: false,
        compiler: ['js:babel-core/register'],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        strict: false,
        tags: ['@chasers', '@complete'],
        timeout: 280000,
        ignoreUndefinedDefinitions: true,
    },

    /**
     *  Hooks
     *  @param
     */

    beforeScenario: function before() {

        browser.timeouts('implicit', 5000);

        /***
         * Set-up the chai assertion
         */
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();

    },

    afterScenario: function () {
        return this.browser.deleteCookie();
    },

    afterScenario: function () {
        return browser.reload();

    },

    registerHandler() {
        return browser.end();
    }
}
