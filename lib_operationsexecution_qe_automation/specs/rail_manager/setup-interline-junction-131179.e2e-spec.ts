import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let using = require('jasmine-data-provider');

//TC 131179:  RM_Smoketest_19 Setup, interline junction
using(DataProvider.Tc_131179, async function (data) {

    describe("Setup, interline junction", function () {
        it("Should open Rail manager url", async () => {
            await railManagerHomePage.openUrl(railManagerHomePage.railManagerUrl);
        });

        it("Should click on interlineJunction Option under setup tab", async () => {
            await railManagerHomePage.selectEdiTab(data.setupTab, data.interlineJunctionOption);
            await railManagerHomePage.waitForActionToComplete();
        });

        it('Validate interlineJunction Page Title', async () =>{
            expect(await railManagerHomePage.specificPageTitleXpath.getText()).toBe(data.pageTitle);       
        });

    });
});
