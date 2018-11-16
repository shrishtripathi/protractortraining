import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataprovider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { IndividualStautsUpdatePage } from "../../pages/rail_manager/individual-status-update-po";
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let individualStautsUpdatePage = new IndividualStautsUpdatePage();
let using = require('jasmine-data-provider');

//TC 131134:  RM_Smoketest_12 ETA, rail eta updates
using(DataProvider.Tc_131139, async function (data) {

    describe("ETA, rail eta updates", function () {

        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Verifying Rail Manager Page Title", async () => {
            await expect<any>(railManagerHomePage.getPageTitle()).toBe(data.railManagerTitle)
        });

        it("Should click on rail ETA updates under ETA tab", async () => {
            await railManagerHomePage.selectTab(data.etaTab, data.railEtaUpdatesOption);
        });

        it("Verifying Notifications History Page Title", async () => {
            await expect<any>(railManagerHomePage.verifyBreadcrumbTitle()).toBe(data.etaUpdateTitle)
        });
    });
});
