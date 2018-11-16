import { DataProvider } from "../../data/dataProvider";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";

let fm2E2EComponents = new FM2E2EComponents();

let using = require('jasmine-data-provider');

let loadDispatchWithComment = Object.assign({}, DataProvider.Tc_187073);

//TC_187073 - FM2 Hazmat Dispatch
using(loadDispatchWithComment, async function (data) {

    describe("Hazmat Dispatch", async () => {

        await fm2E2EComponents.loadDispatchWithComment(data.loadDispatchWithComment, data.loadData, data.driverData)

    });
})
