import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { async } from "q";
import { browser, element, by } from "protractor";

let shopfloorHomePage = new ShopfloorHomePage();
let using = require('jasmine-data-provider');
//#158721_Shopfloor_Regression_16 Quick links, shop talk

//TC_158277 preCondition TC
using(DataProvider.TC_158277, async function (data) {
    describe("Pre condition TC Login to Shopfloor", () => {

        it("Should Open Shop Floor url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });
    });
});

//TC_158721
using(DataProvider.TC_158721, async function (data) {
    describe("Quick links, shop talk", () => {

        it("Hover over the Quick Links tab, click to select Shop Talk.", async () => {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.quick, data.shop)
        });

        it('Swithch To new Window', async () => {
            await shopfloorHomePage.actions.selectWindow(1, "")
            try {
                await shopfloorHomePage.loginIfRequired();
            } catch (error) {

            }
        });

        it("Verifying that redirected to Shop Talk Page", async () => {
            console.log(await browser.getCurrentUrl())
            await expect(await browser.getCurrentUrl()).toBe(data.shopTalkPageUrl);
        });
    });
});