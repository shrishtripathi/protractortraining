import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
import { ShopManagementPage } from "../../pages/shopfloor/shop-management.po";
let shopfloorHomePage = new ShopfloorHomePage();
let shopManagementPage = new ShopManagementPage();
let using = require('jasmine-data-provider');
//#158723_Shopfloor_Regression_18 Quick links, mobile menu
using(DataProvider.TC_158723, async function (data) {
    describe("Quick links, mobile menu", () => {

        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on quick links tab and select 'mobile menu'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.quickLinks, data.mobileMenuOption);
        });

        it("Verifying that new tab opens", async () => {
            await shopfloorHomePage.selectwindow();
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.mobileMenuTitle);
        });




    });
});