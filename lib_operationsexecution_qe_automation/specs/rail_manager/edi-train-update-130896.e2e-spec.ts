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

//TC 130896:  RM_Regression_3 EDI, train update
using(DataProvider.Tc_130896, async function (data) {

    describe("EDI, train update", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Should click on Empty Plan option under Equipment tab", async () => {
            await railManagerHomePage.selectTab(data.ediTab, data.trainUpdateOption);
        });

        it('Click on Reset Button in Train Update Page', async () => {
            await railManagerHomePage.clickOnResetButton();
        });

    });
});
