import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { DataProvider } from "../../data/dataProvider";
import { async } from "q";

let eomE2EComponents = new EOME2EComponents();
let using = require ('jasmine-data-provider');
let loadCreateVerificationData = Object.assign({}, DataProvider.Tc_191437);

//Tc_191437 EOM DCS Food Safety Load Create Verification
using(loadCreateVerificationData, async function(data) {

    describe("EOM DCS Food Safety Load Create", async () => {            
        await eomE2EComponents.eomDcsFoodSafetyLoadCreate(data.eomDcsFoodSafetyLoadCreateData);   // create order 
    });

    describe('EOM DCS Food Safety Load Create Verification', async() => {
        await eomE2EComponents.eomDcsFoodSafetyLoadCreateVerification(data.eomDcsFoodSafetyLoadCreateData,data.eomDcsFoodSafetyLoadCreateVerificationData);      
    });
});
