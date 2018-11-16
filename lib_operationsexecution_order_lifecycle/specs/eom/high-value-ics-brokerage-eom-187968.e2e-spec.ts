import { DataProvider } from "../../data/dataProvider";  
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();

let highValueIcsBrokerageEom = Object.assign({},DataProvider.Tc_187968);

using(highValueIcsBrokerageEom, async (data) => {
    
    describe('EOM High Value ICS Brokerage Load Create', async () => {
        
        describe("EOM High Value ICS Brokerage Load  Create", async () => {            
            await eomE2EComponents.eomIcsBrokerageHighValueLoadCreate(data.highValueIcsBrokerageEom);
        });

    });

});