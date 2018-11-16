import { DataProvider } from "../../data/dataProvider";
import { CenterScreenE2EComponents } from "../../e2eComponents/centerscreen/centerscreen.pc";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let eomE2EComponents = new EOME2EComponents();
let centerScreenE2EComponents = new CenterScreenE2EComponents();
let using = require('jasmine-data-provider');

let loadCreateData = Object.assign({}, DataProvider.Tc_187497);

using(loadCreateData, async (data) => {
    //TC 187497: Centerscreen Load Create Verification
    describe('Centerscreen Load Create Verification', async () => {
        
        describe("4001 EOM 1Pick/1Drop Load Create", async () => {
            await eomE2EComponents.eomOnePickOrDropTruckModeLoadCreate(data.onePickOrDropTruckModeLoadData);    // create order 
        });
        describe("Centerscreen Load Verification", async () => {
            await centerScreenE2EComponents.loadCreateRowVerification(data.onePickOrDropTruckModeLoadData)
        })

    });
});

