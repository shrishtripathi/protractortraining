import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";
import { CenterScreenE2EComponents } from "../../e2eComponents/centerscreen/centerscreen.pc";

let using = require('jasmine-data-provider');
let eOME2EComponents = new EOME2EComponents();
let fm2E2EComponents = new FM2E2EComponents();
let centerScreenE2EComponents = new CenterScreenE2EComponents();

let loadCreateVerificationData = Object.assign({}, DataProvider.Tc_190757);

using(loadCreateVerificationData, async (data) => {
    
    describe('Brokerage-Multi-Pick/Multi-Drop Load Create EOM', async () => {

        describe("Brokerage-Multi-Pick/Multi-Drop Load Create EOM", async () => {
            await eOME2EComponents.eomBrokerageMultiPickorMultiDropLoadCreateEOM(data.multiPickupOrMultiDropLoadCreateEom);
        });

        describe("FM2 ICS Tender Load", async () => {
            await fm2E2EComponents.icsTenderLoad(data.multiPickupOrMultiDropLoadCreateEom,data.icsTenderLoad);
        });
    });

});