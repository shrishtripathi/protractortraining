import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let using = require('jasmine-data-provider');

//TC 130872:  RM_Regression_1 EDI, Chassis/beam
using(DataProvider.Tc_130872, async function (data) {

    describe("EDI, Chassis/beam", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Should click on Chassis/Beam option under EDI tab", async () => {
            await railManagerHomePage.selectTab(data.ediTab, data.chassisOption);
            await railManagerHomePage.switchToLatestWindow();
        });

        it("Verifying Freight Manager page Title", async () => {
            expect(await railManagerHomePage.actions.getPageTitle(data.logName)).toBe(data.chassisPageTitle);
        });

    });
});
