import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
let using = require('jasmine-data-provider');
let eomE2EComponents = new EOME2EComponents();
let icsMaritimeFlatBedFlatRackLoadCreateData = Object.assign({}, DataProvider.Tc_192191);

//TC 192191: EOM ICS Maritime Flat bed/Flat Rack Load Create
using(icsMaritimeFlatBedFlatRackLoadCreateData, async function (data) {

    describe("EOM ICS Maritime Flat bed/Flat Rack Load Create", async () => {
        await eomE2EComponents.eomIcsMaritimeFlateBedRackLoadCreate(data.icsMaritimeFlatBedFlatRackLoadCreateData);    // create order 
    });

});