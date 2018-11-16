import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let eomE2EComponents = new EOME2EComponents()
let using = require('jasmine-data-provider');
let loadCreateData = Object.assign({}, DataProvider.Tc_190126);

//TC 190126: EOM Load Create Hazmat ICS Flatbed
using(loadCreateData, async function (data) {
    describe("EOM Load Create Hazmat ICS Flatbed", async () => {
        await eomE2EComponents.eomLoadCreateHazmatIcsFlatbed(data.eomLoadCreateHazmatIcsFlatbedData);
    });
});