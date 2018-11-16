import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { IndividualStautsUpdatePage } from "../../pages/rail_manager/individual-status-update-po";
import { ActionLibrary } from "../../utilities/action-library";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();

let using = require('jasmine-data-provider');

//TC 131168:  RM_Smoketest_17 Routes, network defaults
using(DataProvider.Tc_131168, async function (data) {

    describe("Routes, network defaults", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Should click on Premium Defaults option under Routes tab", async () => {
            await railManagerHomePage.selectEdiTab(data.routesTab, data.networkDefaultsOption);
        });

        it('Verify Page Title', async () => {
            await expect(railManagerHomePage.verifyNetworksDefaultPage()).toBe(data.pageTitle);
        });

    });
});
