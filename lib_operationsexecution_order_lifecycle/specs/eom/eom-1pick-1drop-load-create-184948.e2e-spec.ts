import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let eomE2EComponents = new EOME2EComponents()
let using = require('jasmine-data-provider');

let loadCreateData = Object.assign({}, DataProvider.Tc_184948);

//TC 184948: EOM 1Pick/1Drop Load Create
using(loadCreateData, async function (data) {

    describe("EOM 1Pick/1Drop Load Create", async () => {
        await eomE2EComponents.eomOnePickOrDropLoadCreate(data.onePickDropLoadData);
    });

});