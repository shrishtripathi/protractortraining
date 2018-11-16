import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
import { ShopManagementPage } from "../../pages/shopfloor/shop-management.po";

let shopfloorHomePage = new ShopfloorHomePage();
let shopManagementPage = new ShopManagementPage();
let using = require('jasmine-data-provider');

//#158714_Shopfloor_Regression_9 Quick links, RSCC vendors
using(DataProvider.Tc_158714, async function (data) {

    describe("Shopfloor_Regression_9 Quick links, RSCC vendors", () => {

        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on quick links tab and select 'RSCC Vendors'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.quickLinks, data.rsccVendors);
            await shopfloorHomePage.switchToWindow(data.one);
        });

        it("Verifying that new tab opens", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.rsccTitle);
        });

    });

});