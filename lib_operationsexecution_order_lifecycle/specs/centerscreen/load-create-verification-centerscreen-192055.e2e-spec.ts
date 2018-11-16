
import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { CenterScreenE2EComponents } from "../../e2eComponents/centerscreen/centerscreen.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let centerScreenE2EComponents = new CenterScreenE2EComponents();
let centerScreenLoadCreateVerificationData = Object.assign({},DataProvider.Tc_192055);


//TC 192055: 1019 Load Create: Verification Centerscreen
using(centerScreenLoadCreateVerificationData, async function (data) {

    describe("1019 Load Create: EOM", async () => {
        await eomE2EComponents.eomFoodSafetyLoadCreate(data.eomFoodSafetyLoadCreate);    // create order 
    });

    describe('1019 Load Create: Verification Centerscreen', async () => {
       await centerScreenE2EComponents.loadCreateVerificationCenterscreen(data.eomFoodSafetyLoadCreate, data.centerScreenLoadCreateVerificationData);
    });

});
