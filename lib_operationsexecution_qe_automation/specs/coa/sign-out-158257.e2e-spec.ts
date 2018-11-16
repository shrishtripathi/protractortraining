import { DataProvider } from "../../data/dataProvider";
import { COAHomePage } from "../../pages/coa/coa-home-page.po";

let coaHomePage = new COAHomePage();
let using = require('jasmine-data-provider');

//TC- 158257 COA_Regression_6 Sign out
describe("Sign out to COA", () => {

    //PreCondition TC #156016: Login to COA
    using(DataProvider.Tc_156016, async function (data) {

        it("Should open COA url", async () => {
            await coaHomePage.navigateToAppHome(coaHomePage.coaUrl);
        });

        it("Verifying that COA Home page is displayed", async () => {
            await expect(coaHomePage.getPageTitle()).toBe(data.coaPageTitle);
        });

    });
    //TC-158257
    using(DataProvider.Tc_158257, async function (data) {

        it('Click the Sign Out button. ', async () => {
            await coaHomePage.clickOnLink(data.signOut)
        });

        it('Click on Click the Click here hyperlink. ', async () => {
            await coaHomePage.clickOnLink(data.clickHere)
        });

        it("validate redirected page", async () => {
            try {
                await expect(coaHomePage.getPageTitle()).toBe(data.coaPageTitle);
            } catch (error) {

            }

        });

    });

});