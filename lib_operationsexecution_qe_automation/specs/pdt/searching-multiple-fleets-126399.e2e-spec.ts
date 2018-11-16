
import { DataProvider } from "../../data/dataProvider";
import { FinalMileFleetStatusHomePage } from "../../pages/pdt/final-mile-fleet-status-home.po";

let using = require('jasmine-data-provider');
let finalMileFleetStatusHomePage = new FinalMileFleetStatusHomePage();

//Tc# 126399 - PDT_Regression_5 Searching multiple fleets

using(DataProvider.Tc_126399, async function (data) {

    describe("Searching multiple fleets", function () {

        it("Should open pdt url", async () => {
            await finalMileFleetStatusHomePage.navigateToAppHome(finalMileFleetStatusHomePage.pdtUrl);
            await finalMileFleetStatusHomePage.waitForPagePDTLoad();
        });

        it("Verifying that redirected to Fleet Status Page", async () => {
            await expect<any>(finalMileFleetStatusHomePage.getPageTitle()).toBe(data.finalMileFleetStatusPageTitle);
        });

        it("Should select Final Mile Birmingham,  AL option from fleet dropdown", async () => {
            await finalMileFleetStatusHomePage.setFleetDropDown(data.finalMileBirminghamOption);
            await finalMileFleetStatusHomePage.clickOnRefreshIcon();
        });

        it("Should select Final Mile Dothan, AL option from fleet dropdown", async () => {
            await finalMileFleetStatusHomePage.setFleetDropDown(data.finalMileDothanOption);
            await finalMileFleetStatusHomePage.clickOnRefreshIcon();
        });

        it("Should select Final Mile Little Rock, AR option from fleet dropdown", async () => {
            await finalMileFleetStatusHomePage.setFleetDropDown(data.finalMileLittleRockOption);
        });

        it("Should click on Refresh Icon", async () => {
            await finalMileFleetStatusHomePage.clickOnRefreshIcon();
        });

        it("Should click on Refresh Icon", async () => {
            await finalMileFleetStatusHomePage.verifyListOfDrivers();
        });

    });

});

