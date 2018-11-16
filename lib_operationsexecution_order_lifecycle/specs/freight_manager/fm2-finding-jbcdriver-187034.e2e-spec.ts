import { DataProvider } from "../../data/dataProvider";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";

let using = require('jasmine-data-provider');
let fm2E2EComponents = new FM2E2EComponents();
let findingAJbcDriver = Object.assign({}, DataProvider.Tc_187034);

//TC 187034: Finding a JBC Driver
using(findingAJbcDriver, async function (data) {

    describe('Finding a JBC Driver', async () => {
        
        await fm2E2EComponents.findingAJbcDriver(data.searchJBCDriverData)
        
    })
});