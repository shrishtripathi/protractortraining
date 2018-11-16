import { DataProvider } from "../../data/dataProvider";
import { EOME2EComponents } from "../../e2eComponents/eom/eom.pc";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";

let eomE2EComponents = new EOME2EComponents();
let fM2E2EComponents = new FM2E2EComponents();
let using = require('jasmine-data-provider');
let preplancreatedata = Object.assign({}, DataProvider.Tc_190121);

//TC 191935:Preplan For ICS FlatBed FM2 
using(preplancreatedata, async function (data) {
    
    describe("High Value ICS FlatBed EOM Load Create", async () => {
        await eomE2EComponents.highValueIcsFlatbedEomLoadCreate(data.highValueIcsFlatbedEomLoadCreateData);
    });

    describe("Preplan For ICS FlatBed FM2", async () => {
        //await eomE2EComponents.1046preplanVerificationEomHighValue(data.highValueIcsFlatbedEomLoadCreateData, data.1046preplanVerificationEomHighValue);

       // await fM2E2EComponents.preplanForICSFlatBedfm2(data.);



    });
    
});