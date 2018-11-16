import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();

let loadCreateData = Object.assign({}, DataProvider.Tc_187437);

//TC 187437: 4001 EOM 1Pick/1Drop Load Create
using(loadCreateData, async (data) => {
    
    describe('4001 EOM 1Pick/1Drop Load Create', async () => {
        
        describe("4001 EOM 1Pick/1Drop Load Create", async () => {            
            await eomE2EComponents.eomOnePickOrDropTruckModeLoadCreate(data);    // create order 
        });

    });

});

