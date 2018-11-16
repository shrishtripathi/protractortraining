import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";
import { CenterScreenE2EComponents } from "../../e2eComponents/centerscreen/centerscreen.pc";

let using = require('jasmine-data-provider');
let eOME2EComponents = new EOME2EComponents();
let fm2E2EComponents = new FM2E2EComponents();
let centerScreenE2EComponents = new CenterScreenE2EComponents();

let loadCreateVerificationData = Object.assign({}, DataProvider.Tc_177331);

using(loadCreateVerificationData, async (data) => {
    
    describe('Center Screen Preplan Verification', async () => {
        
        describe("EOM One Pick/Drop Load Create", async () => {            
            await eOME2EComponents.eomOnePickOrDropLoadCreate(data.onePickDropLoadData);
        })

        describe('Find A JBC Driver', async () => {
            await fm2E2EComponents.findingAJbcDriver(data.searchJBCDriverData);
        });

        describe('FM2 1Pick/1Drop Preplan', async () => {           
            await fm2E2EComponents.createPreplan(data.onePickDropLoadData, data.searchJBCDriverData, data.createPreplanData);
        });

        describe("Center Screen Preplan Verification", async () => {            
            await centerScreenE2EComponents.verifyPreplan(data.onePickDropLoadData, data.tender);
        });

    });

});