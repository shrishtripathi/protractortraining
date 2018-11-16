import { DataProvider } from "../../data/dataProvider";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let loadCreateData = Object.assign({}, DataProvider.Tc_187618);

let eomE2EComponents = new EOME2EComponents();
let fm2E2EComponents = new FM2E2EComponents();

//TC 187618: EOM Preplan Verification
using(loadCreateData, async (data) => {
    
    describe('EOM Preplan Verification', async () => {
        
        describe("4001 EOM 1Pick/1Drop Load Create", async () => {            
            await eomE2EComponents.eomOnePickOrDropTruckModeLoadCreate(data.onePickOrDropTruckModeLoadData);    // create order 
        });

        describe('Finding a JBC Driver', async () => {
            await fm2E2EComponents.findingAJbcDriver(data.searchJBCDriverData);
        });

        describe("FM2 Preplan", async () => {            
            await fm2E2EComponents.createPreplan(data.onePickOrDropTruckModeLoadData, data.searchJBCDriverData, data.createPreplanData);   
        });

        describe("EOM Preplan Verification", async () => {            
            await eomE2EComponents.eomPreplanVerification(data.eomPreplanVerification, data.onePickOrDropTruckModeLoadData, data.searchJBCDriverData);   
        });

    });

});