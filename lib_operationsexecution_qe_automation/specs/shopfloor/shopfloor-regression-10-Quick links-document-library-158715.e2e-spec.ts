import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
import { ShopManagementPage } from "../../pages/shopfloor/shop-management.po";

let shopfloorHomePage = new ShopfloorHomePage();
let shopManagementPage = new ShopManagementPage();
let using = require('jasmine-data-provider');

//#158715_Shopfloor_Regression_10 Quick links, document library
using(DataProvider.Tc_158715, async function (data) {

    describe("Shopfloor_Regression_10 Quick links, document library", () => {

        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on quick links tab and select 'Document Library'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.quickLinks, data.documentLibrary);
            await shopfloorHomePage.switchToWindow(data.one);
        });

        it("Verifying that new tab opens", async () => {
            await expect(shopfloorHomePage.getPageTitle()).toBe(data.documentLibraryPageTitle);
        });

    });

});