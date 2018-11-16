import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { IndividualStautsUpdatePage } from "../../pages/rail_manager/individual-status-update-po";
import { ActionLibrary } from "../../utilities/action-library";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let individualStautsUpdatePage = new IndividualStautsUpdatePage();

let using = require('jasmine-data-provider');

//TC 131177:  RM_Smoketest_18 Routes, premium defaults
using(DataProvider.Tc_131177, async function (data) {

    describe("Routes, premium defaults", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Should click on Premium Defaults option under Routes tab", async () => {
            await railManagerHomePage.selectEdiTab(data.routesTab, data.premiumDefaultsOption);
        });

        it('Click on Reset Button in Premium Defaults Page', async () => {
            await railManagerHomePage.clickOnResetButton();
            await railManagerHomePage.waitForActionToComplete();
        });

    });
});
