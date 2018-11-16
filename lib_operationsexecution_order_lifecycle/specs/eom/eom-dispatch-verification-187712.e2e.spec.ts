import { DataProvider } from "../../data/dataProvider";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let fm2E2EComponents = new FM2E2EComponents();

let loadCreateData = Object.assign({}, DataProvider.Tc_187712);

//TC 187712: EOM Dispatch Verification
using(loadCreateData, async function (data) {

    describe("EOM Dispatch Verification",async () => {

        describe("4001 EOM 1Pick/1Drop Load Create", async () => {            
            await eomE2EComponents.eomOnePickOrDropTruckModeLoadCreate(data.onePickOrDropTruckModeLoadData);    // create order 
        });

        describe('Finding a JBC Driver', async () => {
            await fm2E2EComponents.findingAJbcDriver(data.searchJBCDriverData);
        });
        
        describe ("Finding a Equipment Number",async () => {
            await fm2E2EComponents.findingAEquipmentNumber(data.findingAequipmentNumber);
        });

        describe("FM2 Preplan", async () => {            
            await fm2E2EComponents.createPreplan(data.onePickOrDropTruckModeLoadData, data.searchJBCDriverData, data.createPreplanData);   
        });

        describe("FM2 Dispatch", async () => {
            await fm2E2EComponents.loadDispatchWithoutComment(data.onePickOrDropTruckModeLoadData, data.findingAequipmentNumber, data.fm2DispatchData);                
        });

        describe("EOM Dispatch Verification",async () => {
          await eomE2EComponents.eomDispatchVerification(data.onePickOrDropTruckModeLoadData,data.eomDispatchVerification);
        });
     
    });

});