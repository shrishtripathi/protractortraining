import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
import { ShopManagementPage } from "../../pages/shopfloor/shop-management.po";
let shopfloorHomePage = new ShopfloorHomePage();
let shopManagementPage = new ShopManagementPage();
let using = require('jasmine-data-provider');
//#158726_Shopfloor_Regression_21 Quick links, cummins quick serve
using(DataProvider.TC_158726, async function (data) {
    describe("Quick links, cummins quick serve", () => {

        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on quick links tab and select 'Cummins Quick Serve'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.quickLinks, data.cumminsQuickServeOption);
        });

        it("Verifying that new tab opens", async () => {
            await shopfloorHomePage.switchToWindow(1);
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.cumminsQuickServeTitle);
        });




    });
});