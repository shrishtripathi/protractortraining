
import { browser, by, element } from 'protractor';
import { async } from "q";

var HtmlReporter = require('protractor-beautiful-reporter');
var jasmineReporters = require('jasmine-reporters');
let reportsPath: string = "./target/reports";

exports.config = {

    directConnect: true,
    //  seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        //Need below options for carrier360 test cases
        /*  chromeOptions:{
           args:['--auth-server-whitelist="_"']
         }, */
        shardTestFiles: true,
        maxInstances: 1
        // 'browserName': 'internet explorer',
        //     'platform': 'ANY',
        //     'version': '11'
    },

    SELENIUM_PROMISE_MANAGER: false,

    beforeLaunch: async () => {
        let fs = require('fs-extra');
        fs.emptyDir(reportsPath, function (err) {
            console.log(err);
        });

        const shell = require('node-powershell');
        let ps = await new shell({
            executionPolicy: 'Bypass',
            noProfile: true
        });

        let result = "";
        try {
            await ps.addCommand('(get-item env:JBH_ENV).value');
            result = await ps.invoke();
        } catch (e) {
            try {
                await ps.addCommand('test-path \\\\ci\\cideliverables');
                result = await ps.invoke();
            } catch (e) { }
        }

        await ps.dispose();

        console.log("Result--->: " + result);

        if (result.trim() === "True" || result.trim().toUpperCase() === "PROD") {

            console.log("                                                                                         ");
            console.log("                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                      ");
            console.log("***************** ------->  STOPPING , AS IT IS PROD ENVIRONMENT  <--------- *************");
            console.log("                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX                      ");
            console.log("                                                                                         ");
            console.log("                                                                                         ");
            console.log("                                                                                         ");

            await process.abort();

        }
    },

    framework: 'jasmine2',
    rootElement: 'body',
    specs: ['./specs/**/*178239*.js'],

    suites: {

        demo: [
            './specs/**/*185239*.js',
            './specs/**/*178959*.js',
            './specs/**/*185027*.js',
            './specs/**/*177365*.js',
            //'./specs/demo/tc-demo-1.e2e-spec.js'
        ],

        smoke: [
            './specs/routing_guide/*41447*.js', './specs/routing_guide/*84125*.js',
        ],

        regression: [
            //  './specs/safety_briefing/hazmat-verification-177601.e2e-spec.js',
            //  './specs/eom/eom-temperaturecontrol-load-create-183026.e2e-spec.js',
            //  './specs/eom/eom-temperature-control-load-create-verification-183165.e2e-spec.js',
            //  './specs/centerscreen/centerscreen-load-create-verification-176820.e2e-spec.js',
            //  './specs/centerscreen/centerscreen-preplan-verification-177331.e2e-spec.js',
            // './specs/eom/eom-international-check-call-verification-completed-183292.e2e-spec.js', 
            // './specs/eom/eom-after-check-calls-high-value-verification-183341.e2e-spec.js',
            './specs/centerscreen/center-screen-dispatch-verification-178920.e2e-spec.js'                    
         ],
 
        mil_one:[
             './specs/**/*185239*.js',
             './specs/enterprise_dashboard/*178959*.js',
             './specs/**/*185027*.js',
             './specs/**/*177365*.js'
         ], 
          
         e2e_demo:[
            './specs/eom/tc1.js','./specs/eom/tc2.js',
        ]

    },


    jasmineNodeOpts: {
        defaultTimeoutInterval: 5000000
    },

    params: {
        user: {
            userName: "jcnt487",
            password: "jb0843",
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