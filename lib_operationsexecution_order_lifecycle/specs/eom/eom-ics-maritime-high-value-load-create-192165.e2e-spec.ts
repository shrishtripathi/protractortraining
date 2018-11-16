import { DataProvider } from "../../data/dataProvider";  
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();

let eomIcsMaritimeHighValueLoadCreate  = Object.assign({},DataProvider.Tc_192165);

using(eomIcsMaritimeHighValueLoadCreate, async (data) => {
    
    describe('EOM ICS Maritime High Value Load Create', async () => {
        
        describe("EOM ICS Maritime High Value Load Create", async () => {            
            await eomE2EComponents.eomIcsMaritimeHighValueLoadCreate(data.icsMaritimeHighValueLoadCreate);
        });

    });

});