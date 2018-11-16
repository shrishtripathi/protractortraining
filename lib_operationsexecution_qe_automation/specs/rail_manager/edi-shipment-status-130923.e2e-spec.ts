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

//TC 130923:  RM_Smoketest_6 EDI, shipment status
using(DataProvider.Tc_130923, async function (data) {

    describe("EDI, shipment status", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Should click on Empty Plan option under Equipment tab", async () => {
            await railManagerHomePage.selectTab(data.ediTab, data.shipmentStatusOption);
        });

        it('Click on Reset Button in Train Update Page', async () => {
            await railManagerHomePage.clickOnResetButton()
        });

    });
});
