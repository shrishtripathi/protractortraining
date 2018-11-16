import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";

let fm2E2EComponents =  new FM2E2EComponents();
let eomE2EComponents = new EOME2EComponents();
let using = require('jasmine-data-provider');
let fm2MultiPickOrDropPreplanData = Object.assign({}, DataProvider.Tc_177372);
// TC 177372 - FM2 Multi Pick/Drop Preplan
using(fm2MultiPickOrDropPreplanData, async function (data) {
    describe("FM2 Multi Pick/Drop Preplan", async function () {
        describe("EOM Multi Pick/Drop Load Create", async function () {
            await eomE2EComponents.eomMultiPickDropLoadCreate(data.loadCreateData);
        });

        //TC 187034: Finding a JBC driver
        describe("Finding a JBC driver", async function () {
            await fm2E2EComponents.findingAJbcDriver(data.findingAJbcDriver);
        });


        //185243: FM2 Multi Pick/Drop Preplan
        describe("FM2 Multi Pick/Drop Preplan", async function () {
            await fm2E2EComponents.createPreplan(data.loadCreateData, data.findingAJbcDriver, data.prePlanData);
        });

    });
});
