import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";

let shopfloorHomePage = new ShopfloorHomePage();
let using = require('jasmine-data-provider');
//#158711_Open Frieghtliner Parts Pro page
using(DataProvider.TC_158711, async function (data) {
    describe("Open-Frieghtliner-Parts-Pro-page", () => {

        it("Should Open Shop Floor url", async () => {
            await shopfloorHomePage.openshopfloorURL();
        });

        it("Should login into Shop Floor application", async function () {
            await shopfloorHomePage.login(data.userid, data.password);
        });

        it("Verifying that redirected to Shop Floor Page", async () => {
            await expect<any>(shopfloorHomePage.getPageTitle()).toBe(data.shopfloorPageTitle);
        });

        it("Should hover order Quick Links menu and Click Freightliner sub-menu'", async function () {
            await shopfloorHomePage.hoverOnLinksAndClickSubMenu("Quick", "Freightliner");
        });

        it("Verifying that Freightliner Page opened", async () => {
            await expect(shopfloorHomePage.verifySubMenuPage()).toEqual(data.freightlinerUrl);
        });

    });
}); 