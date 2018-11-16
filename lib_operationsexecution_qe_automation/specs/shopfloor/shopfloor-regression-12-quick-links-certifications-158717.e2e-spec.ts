import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
import { ShopManagementPage } from "../../pages/shopfloor/shop-management.po";

let shopfloorHomePage = new ShopfloorHomePage();
let shopManagementPage = new ShopManagementPage();
let using = require('jasmine-data-provider');

//#158717_Shopfloor_Regression_12 Quick links, certifications
using(DataProvider.Tc_158717, async function (data) {

    describe("Shopfloor_Regression_12 Quick links, certifications", () => {

        it("Should Open road contact service url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on quick links tab and select 'Certifications'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.quickLinks, data.cerifications);
            await shopfloorHomePage.switchToWindow(data.one);
        });

        it("Verifying that new tab opens", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.cerificationsPageTitle);
        });

    });

});