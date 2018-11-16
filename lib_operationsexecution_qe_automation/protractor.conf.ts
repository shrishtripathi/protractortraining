
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
        shardTestFiles: true,  // demo for CI - it is true 
        maxInstances: 10   // we tried it with 5 , it works fine. Testing with 10 so we can keep 10 
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
    specs: ['./specs/**/*e2e*.js'],
    suites: {
        smoke: [
            './specs/routing_guide/*41447*.js', './specs/routing_guide/*84125*.js',
            './specs/routing_guide/*5980*.js', './specs/routing_guide/*41446*.js',
            './specs/routing_guide/*41448*.js', './specs/routing_guide/*84122*.js',
            './specs/routing_guide/*5972*.js', './specs/routing_guide/*5973*.js',
            './specs/carrier_management_system/*87157*.js',
            './specs/carrier_management_system/*87356*.js',
            './specs/carrier_management_system/*87217*.js',
            './specs/carrier_management_system/*86813*.js',
            './specs/carrier_management_system/*136717*.js',
            './specs/carrier_management_system/*87568*.js',
            './specs/mileage-webService/mileage-web-services-check-108519.e2e-spec.js',
            './specs/pace/*95041*.js', './specs/pace/*95203*.js', './specs/pace/*95193*.js',
            './specs/pace/*94606*.js', './specs/pace/*94696*.js', './specs/pace/*94569*.js',
            './specs/pace/*94944*.js', './specs/pace/*94621*.js', './specs/pace/*94741*.js',
            './specs/ltl_consolidator/*98128*.js',
            './specs/ltl_consolidator/*99816*.js',
            './specs/ltl_consolidator/*99817*.js',
            './specs/spot_price/*-86431*.js',
            './specs/spot_price/*-87222*.js',
            './specs/spot_price/*-87966*.js',
            './specs/spot_price/*-88260*.js',
            './specs/spot_price/*-87981*.js',
            './specs/spot_price/*-88686*.js',
            './specs/spot_price/*-86432*.js',
            './specs/spot_price/*-87213*.js',
            //  './specs/fuel_surcharge/*-102083*.js',    do not run fuel surcharge
            //  './specs/fuel_surcharge/*-102075*.js',    do not run fuel surcharge
            //  './specs/fuel_surcharge/*-102089*.js',    do not run fuel surcharge
            //  './specs/fuel_surcharge/*-102106*.js',    do not run fuel surcharge
            './specs/eom/*-78584*.js',
            './specs/eom/*-78614*.js',
            './specs/eom/*-78623*.js',
            './specs/eom/*-80312*.js',
            './specs/eom/*-81086*.js',
            './specs/eom/*-85215*.js',
            './specs/eom/*-80158*.js',
            './specs/eom/*-136072*.js',
            './specs/eom/*-135692*.js',
            './specs/eom/*-80121*.js',
            './specs/eom/*-131748*.js',
            './specs/eom/*-80004*.js',
            './specs/vendor_portal/*136078*.js',
            './specs/vendor_portal/*136063*.js',
            './specs/vendor_portal/*136084*.js',

        ],

        cms: ['./specs/carrier_management_system/*e2e*.js'],
        mileageWS: ['./specs/mileage-webService/mileage-web-services-check-108519.e2e-spec.js'],
        ltl: ['./specs/ltl_consolidator/*e2e*.js'],
        spot_price: ['./specs/spot_price/*e2e*.js'],
        road_service_contact_centre: ['./specs/road_service_contact_centre/*e2e*.js'],

        regression: [

            './specs/freight_manager/*94997*.js',
            './specs/freight_manager/*80026*.js',
            './specs/freight_manager/*97797*.js',
            './specs/freight_manager/*80853*.js',
            './specs/freight_manager/*80023*.js',
            './specs/freight_manager/*80020*.js',
            './specs/freight_manager/*80438*.js',
            './specs/freight_manager/*80847*.js',
            './specs/freight_manager/*80869*.js',
            './specs/freight_manager/*80449*.js',
            './specs/freight_manager/*79802*.js',
            './specs/freight_manager/*79801*.js',
            './specs/freight_manager/*79110*.js',
            './specs/freight_manager/*80027*.js',
            './specs/freight_manager/*79006*.js',
            './specs/freight_manager/*80333*.js',
            './specs/freight_manager/*80334*.js',
            './specs/freight_manager/*80861*.js',
            './specs/freight_manager/*80321*.js',
            './specs/freight_manager/*80057*.js',
            './specs/freight_manager/*95314*.js',
            './specs/freight_manager/*80866*.js',
            './specs/freight_manager/*80868*.js',
            './specs/freight_manager/*102744*.js',
            './specs/freight_manager/*79099*.js',
            './specs/freight_manager/*80862*.js',
            './specs/freight_manager/*80852*.js',
            './specs/freight_manager/*79775*.js',
            './specs/freight_manager/*85413*.js',
            './specs/freight_manager/*79803*.js',
            './specs/freight_manager/*79120*.js',
            './specs/freight_manager/*78611*.js',
            './specs/freight_manager/*80858*.js',
            './specs/freight_manager/*80871*.js',
            './specs/freight_manager/*79821*.js',
            './specs/freight_manager/*79817*.js',
            './specs/freight_manager/*79815*.js',
            './specs/freight_manager/*80864*.js',
            './specs/freight_manager/*80860*.js',
            './specs/routing_guide/*5972*.js',
            './specs/routing_guide/*5973*.js',
            './specs/routing_guide/*5980*.js',
            './specs/routing_guide/*41446*.js',
            './specs/routing_guide/*41447*.js',
            './specs/routing_guide/*41448*.js',
            './specs/eom/*78731*.js',
            './specs/eom/*80330*.js',
            './specs/eom/*80529*.js',
            './specs/eom/*80533*.js',
            './specs/eom/*85230*.js',
            './specs/shipper360/*85495*.js',
            './specs/precall/*86417*.js',
            './specs/precall/*86418*.js',
            './specs/precall/*86419*.js',
            './specs/offer_management/*87107*.js',
            './specs/offer_management/*87110*.js',
            './specs/simon_now/*90311*.js',
            './specs/simon_now/*92617*.js',
            './specs/simon_now/*90971*.js',
            './specs/pace/*94591*.js',
            './specs/pace/*94594*.js',
            './specs/pace/*94601*.js',
            './specs/pace/*94614*.js',
            './specs/pace/*94618*.js',
            './specs/pace/*94626*.js',
            './specs/pace/*94630*.js',
            './specs/pace/*94655*.js',
            './specs/pace/*94726*.js',
            './specs/pace/*94738*.js',
            './specs/pace/*94940*.js',
            './specs/pace/*94950*.js',
            './specs/pace/*95038*.js',
            './specs/pace/*95046*.js',
            './specs/pace/*95210*.js',
            './specs/draynet/*110850*.js',
            './specs/draynet/*110851*.js',
            './specs/draynet/*110852*.js',
            './specs/hawkone/*135645*.js',
            './specs/teams_and_tasks/*125748*.js',
            './specs/teams_and_tasks/*126024*.js',
            './specs/pdt/*126266*.js',
            './specs/pdt/*126389*.js',
            './specs/pdt/*126390*.js',
            './specs/pdt/*126391*.js',
            './specs/pdt/*126399*.js',
            './specs/pdt/*126641*.js',
            './specs/pdt/*126654*.js',
            './specs/teams_and_tasks/*126653*.js',
            './specs/teams_and_tasks/*126714*.js',
            './specs/teams_and_tasks/*126730*.js',
            './specs/teams_and_tasks/*126721*.js',
            './specs/teams_and_tasks/*126767*.js',
            './specs/teams_and_tasks/*127101*.js',
            './specs/pace/*127146*.js',
            './specs/pace/*127230*.js',
            './specs/pace/*127243*.js',
            './specs/hawkone/*128398*.js',
            './specs/hawkone/*130595*.js',
            './specs/rail_manager/*130872*.js',
            './specs/rail_manager/*130890*.js',
            './specs/rail_manager/*130896*.js',
            './specs/rail_manager/*130908*.js',
            './specs/rail_manager/*130920*.js',
            './specs/rail_manager/*130923*.js',
            './specs/rail_manager/*130928*.js',
            './specs/rail_manager/*131126*.js',
            './specs/rail_manager/*131127*.js',
            './specs/rail_manager/*131134*.js',
            './specs/rail_manager/*131139*.js',
            './specs/rail_manager/*131143*.js',
            './specs/rail_manager/*131160*.js',
            './specs/rail_manager/*131165*.js',
            './specs/rail_manager/*131168*.js',
            './specs/rail_manager/*131177*.js',
            './specs/rail_manager/*131179*.js',
            './specs/rail_manager/*131180*.js',
            './specs/rail_manager/*131183*.js',
            './specs/ic_lp/*131236*.js',
            './specs/hawkone/*135573*.js',
            './specs/hawkone/*135587*.js',
            './specs/hawkone/*135602*.js',
            './specs/openbox_management/*135631*.js',
            './specs/hawkone/*135644*.js',
            './specs/coa/*150998*.js',
            './specs/openbox_management/*158575*.js',
            './specs/openbox_management/*160284*.js',
            './specs/carrier360/*38930*.js',
            './specs/carrier360/*131689*.js',
            './specs/carrier360/*71596*.js',
            './specs/carrier360/*71597*.js',
            './specs/carrier360/*71602*.js',
            './specs/carrier360/*71604*.js',
            './specs/carrier360/*71607*.js',
            './specs/carrier360/*77016*.js',
            './specs/eom/*80537*.js',
            './specs/spot_price/*86888*.js',
            './specs/spot_price/*87595*.js',
            './specs/spot_price/*87599*.js',
            './specs/spot_price/*87220*.js',
            './specs/ic_lp/*130810*.js',
            './specs/ic_lp/*131142*.js',
            './specs/ic_lp/*131148*.js',
            './specs/ic_lp/*125278*.js',
            './specs/asset_administration/*126185*.js',
            './specs/maximo/*126217*.js',
            './specs/asset_administration/*126300*.js',
            './specs/asset_administration/*126316*.js',
            './specs/asset_administration/*129960*.js',
            './specs/freight_manager/*131551*.js',
            './specs/pace/*131708*.js',
            './specs/pace/*131709*.js',
            './specs/pace/*131711*.js',
            './specs/pace/*131713*.js',
            './specs/pace/*131715*.js',
            './specs/pace/*131722*.js',
            './specs/pace/*131859*.js',
            './specs/eom/*131769*.js',
            './specs/eom/*131770*.js',
            './specs/eom/*131787*.js',
            './specs/asset_administration/*132694*.js',
            './specs/hawkone/*132716*.js',
            './specs/hawkone/*133039*.js',
            './specs/hawkone/*135021*.js',
            './specs/money_works/*135619*.js',
            './specs/openbox_management/*135637*.js',
            './specs/openbox_management/*135640*.js',
            './specs/openbox_management/*135642*.js',
            './specs/openbox_management/*135643*.js',
            './specs/vendor_portal/*135707*.js',
            './specs/vendor_portal/*135698*.js',
            './specs/vendor_portal/*136335*.js',
            './specs/cdrap/*138401*.js',
            './specs/cdrap/*139490*.js',
            './specs/cdrap/*139821*.js',
            './specs/cdrap/*139826*.js',
            './specs/cdrap/*139847*.js',
            './specs/cdrap/*139864*.js',
            './specs/cdrap/*139854*.js',
            './specs/cdrap/*139873*.js',
            './specs/cdrap/*141220*.js',
            './specs/cdrap/*141347*.js',
            './specs/cdrap/*141373*.js',
            './specs/cdrap/*141385*.js',
            './specs/cdrap/*141386*.js',
            './specs/cdrap/*141387*.js',
            './specs/cdrap/*141388*.js',
            './specs/cdrap/*141389*.js',
            './specs/cdrap/*141390*.js',
            './specs/cdrap/*141391*.js',
            './specs/cdrap/*141393*.js',
            './specs/openbox_management/*142317*.js',
            './specs/openbox_management/*142992*.js',
            './specs/money_works/*150383*.js',
            './specs/money_works/*150384*.js',
            './specs/money_works/*150385*.js',
            './specs/coa/*150999*.js',
            './specs/carrier360/*156948*.js',
            './specs/coa/*158257*.js',
            './specs/coa/*158258*.js',
            './specs/coa/*158259*.js',
            './specs/shopfloor/*158278*.js',
            './specs/shopfloor/*158283*.js',
            './specs/shopfloor/*158503*.js',
            './specs/shopfloor/*158700*.js',
            './specs/shopfloor/*158711*.js',
            './specs/shopfloor/*158712*.js',
            './specs/shopfloor/*158713*.js',
            './specs/shopfloor/*158714*.js',
            './specs/shopfloor/*158715*.js',
            './specs/shopfloor/*158716*.js',
            './specs/shopfloor/*158717*.js',
            './specs/shopfloor/*158718*.js',
            './specs/shopfloor/*158719*.js',
            './specs/shopfloor/*158720*.js',
            './specs/shopfloor/*158721*.js',
            './specs/shopfloor/*158722*.js',
            './specs/shopfloor/*158723*.js',
            './specs/shopfloor/*158725*.js',
            './specs/shopfloor/*158726*.js',
            './specs/shopfloor/*158742*.js',
            './specs/openbox_management/*157869*.js',
            './specs/cdrap/*141397*.js',
            './specs/cdrap/*141398*.js',
            './specs/cdrap/*141399*.js',
            './specs/cdrap/*145578*.js',
            './specs/cdrap/*141394*.js',
            './specs/openbox_management/*155217*.js',
            './specs/openbox_management/*155200*.js',
            './specs/openbox_management/*162013*.js',
            './specs/openbox_management/*162019*.js',
            './specs/openbox_management/*162022*.js',
            './specs/openbox_management/*162025*.js',
            './specs/cdrap/*141395*.js',
            './specs/openbox_management/*141407*.js',
            './specs/money_works/*155289*.js',
            './specs/openbox_management/*143142*.js',
            './specs/openbox_management/*143259*.js',
            './specs/openbox_management/*161958*.js',
            './specs/openbox_management/*160340*.js',
            './specs/openbox_management/*160392*.js',
            './specs/openbox_management/*160835*.js',
            './specs/openbox_management/*160880*.js',
            './specs/openbox_management/*143260*.js',
            './specs/openbox_management/*157919*.js',
            './specs/openbox_management/*157932*.js',
            './specs/openbox_management/*161680*.js',
            './specs/openbox_management/*161757*.js',
            './specs/openbox_management/*157903*.js',
            './specs/openbox_management/*161966*.js',
            './specs/openbox_management/*158010*.js',
            './specs/openbox_management/*161833*.js',
            './specs/openbox_management/*151316*.js',
            './specs/openbox_management/*159554*.js',
            './specs/openbox_management/*158548*.js',
            './specs/openbox_management/*159635*.js',

        ],

        regression_ie: [
            './specs/ipay/*117941*.js',
            './specs/ipay/*113179*.js',
            './specs/ipay/*114584*.js',//pc-2
            './specs/ipay/*117954*.js',//''
            './specs/ipay/*117929*.js',
            './specs/ipay/*125124*.js',
            './specs/ipay/*125144*.js',
            './specs/ipay/*113180*.js',
            './specs/ipay/*117956*.js',//pc-2
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

        ],

        demo: [
            //'./specs/routing_guide/*5980*.js',   // did demo with this 
           // './specs/routing_guide/*41448*.js',    // did demo with this
            //'./specs/simon_now/*92617*.js', 
            //'./specs/spot_price/*-86432*.js', 
            './specs/eom/*-1234*.js'
        ],

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
            takeScreenShotsOnlyForFailedSpecs: true,
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