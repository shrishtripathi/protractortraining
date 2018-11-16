import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
import { ShopManagementPage } from "../../pages/shopfloor/shop-management.po";

let shopfloorHomePage = new ShopfloorHomePage();
let shopManagementPage = new ShopManagementPage();
let using = require('jasmine-data-provider');

//#158716_Shopfloor_Regression_11 Quick links, documents read
using(DataProvider.Tc_158716, async function (data) {

    describe("Shopfloor_Regression_11 Quick links, documents read", () => {

        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on quick links tab and select 'Document Read'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.quickLinks, data.documentsRead);
            await shopfloorHomePage.switchToWindow(data.one);
        });

        it("Verifying that new tab opens", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.documentsReadPageTitle);
        });

    });

});