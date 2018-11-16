import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DataProvider } from "../../data/dataProvider";
import { RailManagerHomePage } from "../../pages/rail_manager/rail-manager-home-po";
import { ActionLibrary } from "../../utilities/action-library";
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let railManagerHomePage = new RailManagerHomePage();
let using = require('jasmine-data-provider');

//TC 131183:  RM_Smoketest_21 Search
using(DataProvider.Tc_131183, async function (data) {

    describe("Search", function () {
        it("Should open Rail manager url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.railManagerUrl);
        });

        it('Should Click on Value Search Icon in Rail Manager Page', async () => {
            await railManagerHomePage.clickOnValueSearch();
        });
        
        it('Should validate Value Search Text', async () => {
            await expect(railManagerHomePage.validateSearchSuccessMessage()).toBe(data.successMessage);
        });


    });
});
