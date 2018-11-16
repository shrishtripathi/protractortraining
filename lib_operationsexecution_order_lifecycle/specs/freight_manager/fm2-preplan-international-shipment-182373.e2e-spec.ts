import { DataProvider } from "../../data/dataProvider";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eOME2EComponents = new EOME2EComponents();
let fm2E2EComponents = new FM2E2EComponents();

let loadCreateVerificationData = Object.assign({}, DataProvider.Tc_182373);

using(loadCreateVerificationData, async (data) => {
    
    describe('Center Screen Preplan Verification', async () => {
        
        describe("EOM International Load Create", async () => {            
            await eOME2EComponents.eominternationalLoadCreate(data.internationalLoadData);
        });

        describe("EOM International Load Create Verification", async () => {            
            await eOME2EComponents.eominternationalLoadCreateVerification(data.internationalLoadData, data.internationalLoadVerificationData);
        });

        describe('Find A JBC Driver', async () => {
            await fm2E2EComponents.findingAJbcDriver(data.searchJBCDriverData);
        });

        describe('FM2 International Shipment Preplan', async () => {           
            await fm2E2EComponents.createPreplan(data.onePickDropLoadData, data.searchJBCDriverData, data.createPreplanData);
        });

    });

});