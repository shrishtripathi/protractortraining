import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataprovider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { IndividualStautsUpdatePage } from "../../pages/rail_manager/individual-status-update-po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let individualStautsUpdatePage=new IndividualStautsUpdatePage();
let using = require('jasmine-data-provider');

//TC 131134:  RM_Smoketest_11 ETA, notification history
using(DataProvider.Tc_131134, async function (data) {

    describe("ETA, notification history", function () {
        
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Verifying Rail Manager Page Title", async () =>{
            await expect<any>(railManagerHomePage.getPageTitle()).toBe(data.railManagerTitle)
        });

        it("Should click on Notification History option under ETA tab", async () => {
            await railManagerHomePage.selectTab(data.etaTab, data.notificationHistoryOption);
        });

        it("Verifying Notifications History Page Title", async () =>{
            await expect<any>(railManagerHomePage.verifyBreadcrumbTitle()).toBe(data.notificationHistoryTitle);
            });

    });
});
