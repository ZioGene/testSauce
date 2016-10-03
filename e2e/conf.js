// conf.js

exports.config = {
    framework: 'jasmine',

    seleniumServerJar: process.env[(process.platform == 'win32') ? 'APPDATA' : 'NODE_PATH'] + '/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',
    seleniumPort: null,

    suites: {
        //TODO: add here other suites
        exercise1 : './exercise1/*spec[0-9].js'
    },

    onPrepare: function() {
        //TODO: add prepare statements
    },

    params: {
        //TODO: add global params here
    },

    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [
                '--disable-extensions'
            ]
        }
    }

};
