import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";

let using = require('jasmine-data-provider');
let eOME2EComponents = new EOME2EComponents();

// TC #177262 - EOM Hazmat Load Create
using(DataProvider.Tc_177262, async function (data) {

    describe("EOM Hazmat Load Create", function () {

        describe("Create Hazmat load in EOM", async () => {            
            await eOME2EComponents.eoMHazmatLoadCreate(data.loadCreateData);
        });
        
    });

});