import { DataProvider } from "../../data/dataProvider";
import { COAHomePage } from "../../pages/coa/coa-home-page.po";

let coaHomePage = new COAHomePage();
let using = require('jasmine-data-provider');

//TC #156016: Login to COA
using(DataProvider.Tc_156016, async function (data) {

    describe("Login to COA", () => {

        it("Should open COA url", async () => {
            await coaHomePage.navigateToAppHome(coaHomePage.coaUrl);
        });

        it("Verifying that COA Home page is displayed", async () => {
            await expect(coaHomePage.getPageTitle()).toBe(data.coaPageTitle);
        });

    });

});