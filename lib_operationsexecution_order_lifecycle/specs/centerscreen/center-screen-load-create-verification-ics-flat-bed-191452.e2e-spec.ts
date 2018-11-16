import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { CenterScreenE2EComponents } from "../../e2eComponents/centerscreen/centerscreen.pc";

let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let centerScreenE2EComponents = new CenterScreenE2EComponents();
let onePickOneDropEomOrderCreateIcsFlatbed = Object.assign({}, DataProvider.Tc_191452);

// TC 191452 - 1 Center Screen Load Create Verification ICS FlatBed
using(onePickOneDropEomOrderCreateIcsFlatbed, async function (data) {

    describe("1 Pick/1Drop EOM Order Create ICS Flatbed", async function () {
        await eomE2EComponents.onePickOneDropEomOrderCreateIcsFlatbed(data.onePickOneDropEomOrderCreateIcsFlatbed);
    });

    describe("Center Screen Load Create Verification ICS FlatBed", async function () {
        await centerScreenE2EComponents.loadCreateRowVerification(data.onePickOneDropEomOrderCreateIcsFlatbed);
    });

});