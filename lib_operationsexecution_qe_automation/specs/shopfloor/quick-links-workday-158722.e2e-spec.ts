import { DataProvider } from "../../data/dataProvider";
import { ShopfloorHomePage } from "../../pages/shopfloor/shopfloor.homepage.po";
import { browser } from "protractor";

let shopfloorHomePage = new ShopfloorHomePage();
let using = require('jasmine-data-provider');
//#158722_Shopfloor_Regression_17 Quick links, workday

//TC_158277 preCondition TC
using(DataProvider.TC_158277, async function (data) {
    describe("Pre condition TC Login to Shopfloor", () => {

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

//TC_158722
using(DataProvider.TC_158722, async function (data) {
    describe("Quick links, WorkDay", () => {

        it("Hover over the Quick Links tab, click to select Workday.", async () => {
            await shopfloorHomePage.hoverOnDropdownAndSelectOption(data.quick, data.workday)
        });

        it('Swithch To new Window', async () => {
            await shopfloorHomePage.actions.selectWindow(1, "")
            try {
                await shopfloorHomePage.loginIfRequired();
            } catch (error) {

            }
        });

        it("Verifying that redirected to WorkDay Page", async () => {
            console.log(await browser.getCurrentUrl())
            await expect(await browser.getCurrentUrl()).toBe(data.workDayPageUrl);
        });
    });
});