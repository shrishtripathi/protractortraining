import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";
let shopfloorHomePage=new ShopfloorHomePage();
let using = require('jasmine-data-provider');
//#158277_Login to Shopfloor
using(DataProvider.TC_158277, async function (data) {
    describe("Login to Shopfloor", () => {

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