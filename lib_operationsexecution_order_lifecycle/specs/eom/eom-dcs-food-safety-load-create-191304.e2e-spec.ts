import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let eomE2EComponents = new EOME2EComponents()
let using = require('jasmine-data-provider');
let loadCreateData = Object.assign({}, DataProvider.Tc_191304);

//TC 191304: EOM DCS Food Safety Load Create
using(loadCreateData, async function (data) {
    describe("EOM DCS Food Safety Load Create", async () => {
        await eomE2EComponents.eomDcsFoodSafetyLoadCreate(data.eomDcsFoodSafetyLoadCreateData);
    });

});