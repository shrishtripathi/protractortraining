import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { DataProvider } from "../../data/dataProvider";
import { CenterScreenE2EComponents } from "../../e2eComponents/centerscreen/centerscreen.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let centerScreenE2EComponents = new CenterScreenE2EComponents();
let highValueIcsBrokerageEom = Object.assign({},DataProvider.Tc_187968);

//TC 190201: 1004 Center Screen: Load Create Verification High Value
using(highValueIcsBrokerageEom, async (data) => {
    
    describe('1004 Center Screen: Load Create Verification High Value', async () => {
        
        describe("EOM High Value ICS Brokerage Load  Create", async () => {            
            await eomE2EComponents.eomIcsBrokerageHighValueLoadCreate(data.highValueIcsBrokerageEom);
        });

        describe("1004 Center Screen: Load Create Verification High Value", async () => {
            await centerScreenE2EComponents.loadCreateRowVerification(data.highValueIcsBrokerageEom)
        });

    });

});

