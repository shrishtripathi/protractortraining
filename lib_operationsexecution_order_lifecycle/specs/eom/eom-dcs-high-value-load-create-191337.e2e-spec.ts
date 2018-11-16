import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let eomE2EComponents = new EOME2EComponents()
let using = require('jasmine-data-provider');

let loadCreateData = Object.assign({}, DataProvider.Tc_191337);

//TC 191337: EOM DCS High Value Load Create
using(loadCreateData, async function (data) {
    describe("EOM DCS High Value Load Create", async () => {
        await eomE2EComponents.eomDcsHighValueLoadCreate(data.eomDcsHighValueLoadCreateData);
    });
});