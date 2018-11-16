import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let eomE2EComponents = new EOME2EComponents()
let using = require('jasmine-data-provider');
let loadCreateData = Object.assign({}, DataProvider.Tc_190121);

//TC 190121: High Value ICS FlatBed EOM Load Create
using(loadCreateData, async function (data) {
    describe("High Value ICS FlatBed EOM Load Create", async () => {
        await eomE2EComponents.highValueIcsFlatbedEomLoadCreate(data.highValueIcsFlatbedEomLoadCreateData);
    });
});