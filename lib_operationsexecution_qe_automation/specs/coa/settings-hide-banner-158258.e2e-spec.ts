import { DataProvider } from "../../data/dataProvider";
import { COAHomePage } from "../../pages/coa/coa-home-page.po";

let coaHomePage = new COAHomePage();
let using = require('jasmine-data-provider');

//TC- 158258 COA_Regression_7 Settings, hide banner
describe("Settings, hide banner to COA", () => {

    //PreCondition TC #156016: Login to COA
    using(DataProvider.Tc_156016, async function (data) {

        it("Should open COA url", async () => {
            await coaHomePage.navigateToAppHome(coaHomePage.coaUrl);
        });

        it("Verifying that COA Home page is displayed", async () => {
            await expect(coaHomePage.getPageTitle()).toBe(data.coaPageTitle);
        });

    });
    //TC-158258
    using(DataProvider.Tc_158258, async function (data) {

        it('Hover over the Settings button', async () => {
            await coaHomePage.mouseOverToTab(await coaHomePage.headerOptionElements(data.setting))
        });

        it('click to select Hide Banner', async () => {
            await coaHomePage.clickOnLink(data.hideBanner)
        });

        it("validate Banner at the top of the page will disappear.", async () => {
            await coaHomePage.waitForElementToBeinvisible(coaHomePage.logoXpath)
            await expect(await coaHomePage.logoXpath.isPresent()).toBe(false)
        });

        it('Hover over the Settings button', async () => {
            await coaHomePage.mouseOverToTab(await coaHomePage.headerOptionElements(data.setting))
        });

        it('click to select show Banner', async () => {
            await coaHomePage.clickOnLink(data.showBanner)
        });

        it("validate Banner at the top of the page will reappear.", async () => {
            await expect(await (coaHomePage.logoXpath).isPresent()).toBe(true)
        });

    });

});