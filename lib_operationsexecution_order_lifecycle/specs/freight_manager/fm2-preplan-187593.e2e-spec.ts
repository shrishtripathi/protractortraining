import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let fm2E2EComponents = new FM2E2EComponents();

let loadCreateData = Object.assign({}, DataProvider.Tc_187593);

//TC 187593: FM2 Preplan
using(loadCreateData, async (data) => {
    
    describe('FM2 Preplan', async () => {
        
        describe("4001 EOM 1Pick/1Drop Load Create", async () => {            
            await eomE2EComponents.eomOnePickOrDropTruckModeLoadCreate(data.onePickOrDropTruckModeLoadData);    // create order 
        });

        describe('Finding a JBC Driver', async () => {
            await fm2E2EComponents.findingAJbcDriver(data.searchJBCDriverData);
        });

        describe("FM2 Preplan", async () => {            
            await fm2E2EComponents.createPreplan(data.onePickOrDropTruckModeLoadData, data.searchJBCDriverData, data.createPreplanData);   
        });

    });

});

