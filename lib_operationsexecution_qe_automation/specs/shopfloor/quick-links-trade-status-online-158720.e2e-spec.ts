import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
import { ShopManagementPage } from "../../pages/shopfloor/shop-management.po";
let shopfloorHomePage = new ShopfloorHomePage();
let shopManagementPage = new ShopManagementPage();
let using = require('jasmine-data-provider');
//#158720_Shop management, Quick links, trade status online
using(DataProvider.TC_158720, async function (data) {
    describe("Quick links, trade status online", () => {

        it("Should Open shop floor url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into shop floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to shopfloor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover on quick links tab and select 'Trade Status Online'", async function () {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.quickLinks, data.tradeStatusOnline);
        });

        it("Verifying that new tab opens", async () => {
            await shopfloorHomePage.selectwindow();
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.tradeStatusOnlineTitle);
        });

    });
    
});