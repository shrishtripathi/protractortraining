import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let using = require('jasmine-data-provider');

//TC 131180:  RM_Smoketest_20 Setup, priority rules
using(DataProvider.Tc_131180, async function (data) {

    describe("Setup, priority rules", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it("Should click on Empty Plan option under Equipment tab", async () => {
            await railManagerHomePage.selectEdiTab(data.setupTab, data.priorityRulesOption);
        });

        it('Validate Priority Rules Page Title', async () =>{
            expect(await railManagerHomePage.specificPageTitleXpath.getText()).toBe(data.pageTitle)        
        });

    });
});
