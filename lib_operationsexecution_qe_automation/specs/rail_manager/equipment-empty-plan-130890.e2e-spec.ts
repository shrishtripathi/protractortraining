import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let using = require('jasmine-data-provider');

//TC 130890:  RM_Regression_2 Equipment, empty plan
using(DataProvider.Tc_130890, async function (data) {

    describe("Equipment, empty plan", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Should click on Empty Plan option under Equipment tab", async () => {
            await railManagerHomePage.selectTab(data.equipmentTab, data.emptyPlanOption);
            await railManagerHomePage.switchToLatestWindow();
        });

        it("Verifying Empty Plan page is displayed", async () => {
            await browser.refresh();
            await railManagerHomePage.waitForElementIsVisible(railManagerHomePage.loadingXpath)
            await railManagerHomePage.waitForElementToBeinvisible(railManagerHomePage.loadingXpath);
            await railManagerHomePage.waitForElementIsVisible(railManagerHomePage.mtPlanTitleTextXpath)
            expect(await railManagerHomePage.mtPlanTitleTextXpath.getText()).toBe(data.mtPlanTitleText);

        });



    });
});
