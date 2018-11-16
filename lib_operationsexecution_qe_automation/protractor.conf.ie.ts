
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
        // ignoreProtectedModeSettings: true,
        shardTestFiles: true,
        maxInstances: 1
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
            './specs/ipay/*113179*.js',
            './specs/ipay/*114584*.js',
            './specs/ipay/*117954*.js',
            './specs/ipay/*117929*.js',
            './specs/ipay/*125124*.js',
            './specs/ipay/*125144*.js',
            './specs/ipay/*113180*.js',
            './specs/ipay/*117956*.js',
            './specs/ipay/*125137*.js',
            './specs/ipay/*125836*.js',
            './specs/ipay/*125917*.js',
            './specs/ipay/*125923*.js',
            './specs/ipay/*125169*.js',
            './specs/ipay/*124807*.js',
            './specs/ipay/*136076*.js',
            './specs/pace/*95038*.js',
            './specs/pace/*127143*.js',
            './specs/mass_print/*135026*.js',//need to run in azure
            './specs/ipay/*136080*.js',
            './specs/cdrap/*138402*.js',
            './specs/cdrap/*138403*.js',
            './specs/hawkone/*113642*.js',
            './specs/hawkone/*135572*.js',
            './specs/hawkone/*133115*.js',
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

        var failFast = require('jasmine-fail-fast');
        jasmine.getEnv().addReporter(failFast.init());
    }

};