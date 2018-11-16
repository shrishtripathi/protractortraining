import { DataProvider } from "../../data/dataProvider";
import { async } from "q";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let onePickOneDropEomOrderCreateIcsFlatbed = Object.assign({}, DataProvider.Tc_190118);

// TC 190118 - 1 Pick/1Drop EOM Order Create ICS Flatbed
using(onePickOneDropEomOrderCreateIcsFlatbed, async function (data) {

    describe("1 Pick/1Drop EOM Order Create ICS Flatbed", async function () {

        await eomE2EComponents.onePickOneDropEomOrderCreateIcsFlatbed(data.onePickOneDropEomOrderCreateIcsFlatbed)

    });
});