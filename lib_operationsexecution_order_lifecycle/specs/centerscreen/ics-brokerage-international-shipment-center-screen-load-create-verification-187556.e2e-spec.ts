import { DataProvider } from "../../data/dataProvider";  
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { CenterScreenE2EComponents } from "../../e2eComponents/centerscreen/centerscreen.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let centerScreenE2EComponents = new CenterScreenE2EComponents();
let loadCreateData = Object.assign({},DataProvider.Tc_187556);

//TC 187556: ICS (Brokerage) International Shipment Center Screen Load Create Verification
using(loadCreateData, async (data) => {
    
    describe('ICS (Brokerage) International Shipment Center Screen Load Create Verification ', async () => {

        describe("ICS (Brokerage) International Shipment- Load Create", async () => {            
            await eomE2EComponents.icsEominternationalLoadCreate(data.icsInternationalLoadCreateData);
        });
        
        describe("ICS (Brokerage) International Shipment Center Screen Load Create Verification", async () => {            
            await centerScreenE2EComponents.icsInternationalLoadCreateVerification(data.icsInternationalLoadCreateData);
        });

    });

});