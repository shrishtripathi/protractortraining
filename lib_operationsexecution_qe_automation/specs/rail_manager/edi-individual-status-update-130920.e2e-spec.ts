import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { browser } from "protractor";
import { IndividualStautsUpdatePage } from "../../pages/rail_manager/individual-status-update-po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let individualStautsUpdatePage = new IndividualStautsUpdatePage();
let using = require('jasmine-data-provider');

//TC 130920:  RM_Smoketest_5 EDI, individual status update
using(DataProvider.Tc_130920, async function (data) {

    describe("EDI, individual status update", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Should click on Empty Plan option under Equipment tab", async () => {
            await railManagerHomePage.selectTab(data.ediTab, data.individualStatusUpdateOption);
        });

        it('Click on Reset Button in Train Update Page', async () => {
            await railManagerHomePage.clickOnResetButton();
        });

    });
});
