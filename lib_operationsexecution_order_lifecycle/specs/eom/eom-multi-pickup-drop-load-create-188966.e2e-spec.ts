import { DataProvider } from '../../data/dataprovider';
import { EOME2EComponents } from '../../e2eComponents/eom/eom.pc';

let eOME2EComponents = new EOME2EComponents();
let using = require('jasmine-data-provider');

let loadCreateData = Object.assign({}, DataProvider.Tc_188966);

//TC #188966: 4003 EOM Multi Pick/Drop Load Create
using(loadCreateData, async function (data) {

    describe("EOM Multi Pick/Drop Load Create", async () => {

        describe("EOM Multi Pick/Drop Load Create", async () => {

            await eOME2EComponents.eomMultiPickDropLoadCreate(data.eomMultiPickDropLoadCreate)      

        });
    });

});
