import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";

let using = require('jasmine-data-provider');
let eOME2EComponents = new EOME2EComponents();
let fM2E2EComponents = new FM2E2EComponents();

//TC 178239: FM2 Multi Pick/Drop Check Calls
describe("FM2 Multi Pick/Drop Check Calls", function () {
    
    let loadCreateVerificationData = Object.assign({}, DataProvider.Tc_178239);

    using(loadCreateVerificationData, async (data) => {

        describe('FM2 Multi Pick/Drop Check Calls', async () => {

            describe("EOM Multi Pick/Drop Load Create", async () => {
                await eOME2EComponents.eomMultiPickDropLoadCreate(data.multiPickDroploadCreateData);
            })

            describe('Finding a JBC Driver', async () => {
                await fM2E2EComponents.findingAJbcDriver(data.searchJBCDriverData);
            });

            describe("FM2 Multi Pick/Drop Preplan Creation", async () => {
                await fM2E2EComponents.createPreplan(data.createPreplanData, data.multiPickDroploadCreateData, data.searchJBCDriverData);
            });

            describe("1Pick/1Drop & Multi Pick/Drop & High Value & Hazmat Dispatch", async () => {
                await fM2E2EComponents.loadDispatchWithComment(data.dispatchData, data.multiPickDroploadCreateData, data.searchJBCDriverData);
            });

            describe("1Pick/1Drop & Multi Pick/Drop & High Value & Hazmat Dispatch", async () => {
                await fM2E2EComponents.multiPickDropCheckCalls(data.multiPickDropCheckCallData, data.multiPickDroploadCreateData, data.searchJBCDriverData);
            });

        });

    });

});
