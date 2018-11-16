import { DataProvider } from "../../data/dataProvider";
import { FileNetPage } from "../../pages/filenet/filenet.po";

let filenetPage = new FileNetPage();
let using = require('jasmine-data-provider');

// TC #182553 - FileNet Verification 
using(DataProvider.Tc_182553, async function (data) {

    describe("FileNet Verification ", function () {

        it("Should open Filenet url", async () => {
            await filenetPage.navigateToAppHome(filenetPage.filenetUrl);
        });

        it("Should click on the Eyeglass icon under Tools", async () => {
            await filenetPage.clickOnEyeGlassSearchLink();
        });

        it("Should click on Advanced Search ", async () => {
            await filenetPage.clickOnAdvancedSearchLink();
        });

        it("Should select 'Load_Number' from name dropdown and 'is equal to' from operator dropdown and enter load number", async () => {
            await filenetPage.setSearchCriteria(data.index, data.nameValue, data.operaterValue, data.loadNumber);
        });

        it("Should click on Search button", async () => {
            await filenetPage.clickOnSearchButton();
        });

    });
});
