import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { browser } from "protractor";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let using = require('jasmine-data-provider');

//TC 131126:  RM_Smoketest_8 ETA, trains
using(DataProvider.Tc_131126, async function (data) {

    describe("RM_Smoketest_8 ETA, trains", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

      
        it("Should Hover over the ETA tab, click to select Trains", async () => {
            await railManagerHomePage.selectTab(data.etaTab, data.Trainstab);
        });

        it("Verifying trains screen is dispalyed", async () => {
                await expect<any>(railManagerHomePage.verifyTrainScreen()).toBe(data.trainsPageTitle);
         });

        it('Click on Search Button in Train Update Page', async () => {
             await railManagerHomePage.clickSearchButton();
             await railManagerHomePage.waitUntilLoading();
            });

        it("Verifying table results in trains screen", async () => {
            await expect<any>(railManagerHomePage.verifyTableResultsInTrainsScreen()).toBe(true);
        });    
    });
});
