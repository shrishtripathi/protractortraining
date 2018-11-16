import { DataProvider } from '../../data/dataProvider';
import { EOME2EComponents } from '../../e2eComponents/eom/eom.pc';
let using = require('jasmine-data-provider');

let eOME2EComponents = new EOME2EComponents();

// TC #185029: EOM International Load Create
using(DataProvider.Tc_185029, async function (data) {

    describe("EOM International Load Create", () => {

        describe("Create International load in EOM", async () => {            
            await eOME2EComponents.eominternationalLoadCreate(data.internationalLoadData);
        });

    });

});