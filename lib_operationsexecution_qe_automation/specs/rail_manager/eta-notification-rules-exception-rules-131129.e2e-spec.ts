import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { DataProvider } from "../../data/dataProvider";


let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let using = require('jasmine-data-provider');

//TC 131127:  RRM_Smoketest_10 ETA, notification rules, exception rules

using(DataProvider.Tc_131129, async function (data) {

    describe("RM_Smoketest_10 ETA, notification rules, exception rules", function () {
        it("Should open My JBHunt url", async() => {
           await  myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Should cick on Show my app link on JbHunt home page", async() => {
            await myJbHuntHomePage.clickOnShowMoreAppLink();
        });

        it("Should click on Rail Manager link from left Navigation", async () => {
            await myJbHuntHomePage.clickOnAppLink(data.railManagerLink);
        });
      
        it("Should Hover over the ETA tab, click to select Notification Rules and click to select Exception", async () => {
            await railManagerHomePage.selectTab(data.etaTab, data.notificationRulesOption);
            await railManagerHomePage.clickOnOption(data.exceptionRulesOption)
        });
        
        it("Verifying exception rules screen", async () => { 
            let title = await railManagerHomePage.getPageTitle()
            console.log(title)
            await expect<any>(railManagerHomePage.getPageTitle()).toBe(data.exceptionRulesTitle);
        });
    });
});