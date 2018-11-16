import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { by,element, browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();

let using = require('jasmine-data-provider');

//TC 131165:  RM_Smoketest_16 Routes, preference lookup
using(DataProvider.Tc_131165, async function (data) {

    describe("Routes, preferences Lookup", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
            expect(await railManagerHomePage.getText(await railManagerHomePage.pageTitleXpath)).toBe(data.railManagerLink)
        });

        it("Should click on preferences Lookup Option under Routes tab", async () => {
            await railManagerHomePage.selectTab(data.routesTab, data.preferencesLookupOption);
        });

        it('Verify Page Title', async () => {
            expect(await railManagerHomePage.specificPageTitleXpath.getText()).toEqual(data.pageTitle)
        });

    });
});
