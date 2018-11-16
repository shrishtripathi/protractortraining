import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";
import { ENTE2EComponents } from "../../e2eComponents/enterprise_dashboard/ent.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let fm2E2EComponents = new FM2E2EComponents();
let entE2EComponents = new ENTE2EComponents();

let loadCreateData = Object.assign({}, DataProvider.Tc_179628);

//TC 187593: FM2 Preplan
using(loadCreateData, async (data) => {
    
    describe('ENT Preplan Verification', async () => {
        
        describe("4001 EOM 1Pick/1Drop Load Create", async () => {            
            await eomE2EComponents.eomOnePickOrDropTruckModeLoadCreate(data.onePickOrDropTruckModeLoadData);    // create order 
        });

        describe("4001 EOM 1Pick/1Drop Load Create", async () => {            
            await fm2E2EComponents.fm2OnePickDropLoadVerification(data.onePickOrDropTruckModeLoadData, data.searchLoadData);
        });

        describe('Finding a JBC Driver', async () => {
            await fm2E2EComponents.findingAJbcDriver(data.searchJBCDriverData);
        });

        describe("FM2 Preplan", async () => {            
            await fm2E2EComponents.createTruckPreplan(data.onePickOrDropTruckModeLoadData, data.searchJBCDriverData, data.createPreplanData);   
        });

        describe("ENT Preplan Verification", async () => {            
            await entE2EComponents.preplanVerification(data.onePickOrDropTruckModeLoadData, data.preplanVerificationData);   
        });

    });

});

