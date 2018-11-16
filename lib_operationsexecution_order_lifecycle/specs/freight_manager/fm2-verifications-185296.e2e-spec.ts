import { DataProvider } from "../../data/dataProvider";
import { FM2E2EComponents } from "../../e2eComponents/freight_manager/fm2.pc";


let using = require('jasmine-data-provider');
let fM2E2EComponents = new FM2E2EComponents();


let checkCallData = Object.assign({}, DataProvider.Tc_185296);

//TC 185296 :FM2 Verifications
using(checkCallData, async function (data) {
    describe("FM2 Verifications", async function () {

        describe("FM2 Check Call Verifications", async function () {

            fM2E2EComponents.fm2CheckCallVerifications(data.loadData, data);

        });
        
    });
});