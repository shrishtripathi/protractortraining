
import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";

let eomE2EComponents = new EOME2EComponents()
let fm2E2EComponents = new FM2E2EComponents();
let using = require('jasmine-data-provider');
let highValuePreplanData = Object.assign({}, DataProvider.Tc_185245);

//TC 185245 : FM2 High Value Preplan
using(highValuePreplanData, async function (data) {
    describe("FM2 High Value Preplan", function () {

        describe("EOM High Value Load Create", async () => {
            await eomE2EComponents.eoMHighValueLoadCreate(data.loadCreateData);
        });

        describe("Finding  JBC driver", async () => {
            await fm2E2EComponents.findingAJbcDriver(data.findingJbcDriverData);
        });

        describe("FM2 High Value Preplan", async () => {
            await fm2E2EComponents.createPreplan(data.loadCreateData, data.findingJbcDriverData, data.createPreplanData);
        });

    });
});