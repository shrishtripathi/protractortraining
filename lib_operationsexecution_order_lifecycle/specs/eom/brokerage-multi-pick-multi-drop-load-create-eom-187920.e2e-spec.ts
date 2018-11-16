import { DataProvider } from "../../data/dataProvider";  
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();

let multiPickOrMultiDropLoadCreateEomData = Object.assign({},DataProvider.Tc_187920);

using(multiPickOrMultiDropLoadCreateEomData, async (data) => {
    
    describe('Brokerage-Multi-Pick/Multi-Drop Load Create EOM', async () => {
        
        describe("Brokerage-Multi-Pick/Multi-Drop Load Create EOM", async () => {            
            await eomE2EComponents.eomBrokerageMultiPickorMultiDropLoadCreateEOM(data.multiPickupOrMultiDropLoadCreateEom);
        });

    });

});