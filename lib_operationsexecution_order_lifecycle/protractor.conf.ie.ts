
import { browser, by, element } from 'protractor';

var HtmlReporter = require('protractor-beautiful-reporter');
var jasmineReporters = require('jasmine-reporters');
let reportsPath: string = "./target/reports";

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'internet explorer',
        'platform': 'ANY',
        'version': '11',
        'ignoreProtectedModeSettings': true
    },

    SELENIUM_PROMISE_MANAGER: false,

    beforeLaunch: () => {
        let fs = require('fs-extra');
        fs.emptyDir(reportsPath, function (err) {
            console.log(err);
        });
    },

    framework: 'jasmine2',
    rootElement: 'body',
    suites: {

        regression_ie: [
            './specs/ipay/*117941*.js',
        ]
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 5000000
    },

    params: {
        user: {
            userName: "jcnt493",
            password: "jb0850",
            environment: "",
            shouldLogin: "yes"
        },
        carrier360: {
            userName: 'JBHSICO1',
            password: 'heard328',
            environment: ""

        }
    },

    onPrepare: function () {

        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './target/reports/screenshots',
            docTitle: 'J.B. Hunt'
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: false,
            savePath: './target/reports'
        }));

        // var failFast = require('jasmine-fail-fast');
        // jasmine.getEnv().addReporter(failFast.init());
    }

};