import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { browser, element } from "protractor";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let using = require('jasmine-data-provider');

//TC 131160:  RM_Smoketest_15 Routes, schedule assignment
using(DataProvider.Tc_131160, async function (data) {

    describe("RM_Smoketest_15 Routes, schedule assignment", function () {
        it("Should open Rail manager url",async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });
      
        it("Should Hover over the Routes tab, click to select Schedule Assignment. ", async () => {
            await railManagerHomePage.selectTab(data.routesTab, data.scheduleAssignmentOption)
        });
        
        it("Verifying schedule assignment screen", async () => { 
            await expect<any>(await railManagerHomePage.verifyScheduleAssignmentTitle()).toBe(data.scheduleAssignmentTitle)
        });
    });
});