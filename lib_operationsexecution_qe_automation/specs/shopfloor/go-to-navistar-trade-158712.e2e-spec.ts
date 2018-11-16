import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
let shopfloorHomePage=new ShopfloorHomePage();
let using = require('jasmine-data-provider');
//#1158712_Go to navistar trade
using(DataProvider.TC_158712, async function (data) {
    describe("Open-Navistar-Trade-page", () => {
        
        it("Should Open Shop Floor url", async () => {
            await shopfloorHomePage.openshopfloorURL()
        });

        it("Should login into Shop Floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to Shop Floor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover order Quick Links menu and Click Navistar Trade sub-menu'", async function () {
            await shopfloorHomePage.hoverOnLinksAndClickSubMenu("Quick", "Navistar Trades");
        });

        it("Verifying that Navistar Trade page opened", async () => {
            await expect(shopfloorHomePage.verifySubMenuPage()).toEqual(data.naviStarUrl);
        });

    });
});