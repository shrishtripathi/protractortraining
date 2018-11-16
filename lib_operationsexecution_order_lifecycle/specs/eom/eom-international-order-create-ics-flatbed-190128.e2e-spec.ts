import { DataProvider } from '../../data/dataProvider';
import { EOME2EComponents } from '../../e2eComponents/eom/eom.pc';

let eOME2EComponents = new EOME2EComponents();
let loadCreateData = Object.assign({}, DataProvider.Tc_190128);
let using = require('jasmine-data-provider');

// TC #190128:EOM International Order Create ICS Flatbed
using(loadCreateData, async function (data) {
    describe("EOM International Order Create ICS Flatbed", async () => {
        describe("EOM International Order Create ICS Flatbed", async () => {
            await eOME2EComponents.eominternationalLoadCreateICSFlatbed(data.eominternationalLoadCreateICSFlatbed)
        });
    });
});