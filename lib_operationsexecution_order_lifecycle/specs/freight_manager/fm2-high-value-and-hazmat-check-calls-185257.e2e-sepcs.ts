import { DataProvider } from "../../data/dataProvider";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";

let using = require('jasmine-data-provider');
let fm2E2EComponents = new FM2E2EComponents();

let highvalueHazmatCheckCalls = Object.assign({}, DataProvider.Tc_185257);

//TC 185257: FM2 High Value & Hazmat Check Calls
using(highvalueHazmatCheckCalls, async function (data) {

    describe("FM2 High Value & Hazmat Check Calls", async () => {
        
        await fm2E2EComponents.highValueAndHazmatCheckCalls(data.fm2HighValueAndHazmatCheckCallsData, data.hazmatLoadCreateData, data.searchJBCDriverData)
       
    });
});