// conf.js
var username = "Cyborg",
    accessKey = "83006b9b-f79e-4f60-8866-0c9ed66eecac";
exports.config = {
    framework: 'jasmine',

    sauceUser: username,
    sauceKey: accessKey,

    suites: {
        //TODO: add here other suites
        exercise1 : './exercise1/calculator.solution.js',
        exercise2 : './exercise2/todo.solution.js'
    },

    onPrepare: function() {
        //TODO: add prepare statements
        browser.driver.manage().window().setSize(800, 800);
    },

    params: {
        //TODO: add global params here
        exercise1: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex1/'
        },
        exercise2: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex2/'
        }
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
