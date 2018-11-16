import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let eomFoodSafetyLoadCreate = Object.assign({}, DataProvider.Tc_188232);

//TC 188232: 1019 Load Create: EOM
using(eomFoodSafetyLoadCreate, async function (data) {

    describe("1019 Load Create: EOM", async () => {
        await eomE2EComponents.eomFoodSafetyLoadCreate(data.eomFoodSafetyLoadCreate);    // create order 
    });

});