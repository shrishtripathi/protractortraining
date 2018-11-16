import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { browser } from "protractor";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let using = require('jasmine-data-provider');

//TC 131127:  RM_Smoketest_9 ETA, notification rules, default rules
using(DataProvider.Tc_131127, async function (data) {

    describe("RM_Smoketest_9 ETA, notification rules, default rules", function () {

        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });


        it("Should Hover over the ETA tab, click to select notofication rules and click default rules", async () => {
            await railManagerHomePage.selectTab(data.etaTab, data.notificationRulesOption);
            await railManagerHomePage.clickOnOption(data.defaultRulesOption)
        });

        it("Verifying default rules screen", async () => {
            await expect<any>(railManagerHomePage.specificPageTitleXpath.getText()).toBe(data.defaultRulesTitle);
        });
    });
});