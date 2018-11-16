import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eOME2EComponents = new EOME2EComponents();

let jbtHazmatLoaddata = Object.assign({}, DataProvider.Tc_190868); 

// TC #190868 - EOM JBT Hazmat Load Create
using(jbtHazmatLoaddata, async function (data) {

    describe("EOM JBT Hazmat Load Create", function () {

        describe("EOM JBT Hazmat Load Create", function () {

                eOME2EComponents.eomJBTHazmatLoadCreate(data.jbtHazmatLoaddata)

        });

    });

});