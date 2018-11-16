
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { FinalMileFleetStatusHomePage } from "../../pages/pdt/final-mile-fleet-status-home.po";

let using = require('jasmine-data-provider');

let finalMileFleetStatusHomePage = new FinalMileFleetStatusHomePage();

//Tc# 126389 - PDT_Regression_2 Click truck number to open FM2 check calls
using(DataProvider.Tc_126389, async function (data) {

    describe("Click truck number to open FM2 check calls", function () {

        it("Should open pdt url", async () => {
            await finalMileFleetStatusHomePage.navigateToAppHome(finalMileFleetStatusHomePage.pdtUrl);
            await finalMileFleetStatusHomePage.waitForPagePDTLoad();
        });

        it("Verifying that redirected to Fleet Status Page", async () => {
            await expect<any>(finalMileFleetStatusHomePage.getPageTitle()).toBe(data.finalMileFleetStatusPageTitle);
        });

        it("Should select Final Mile Birmingham,  AL option from fleet dropdown", async () => {
            await finalMileFleetStatusHomePage.setFleetDropDown(data.finalMileBirminghamOption);
        });

        it("Should click on Refresh Icon", async () => {
            await finalMileFleetStatusHomePage.clickOnRefreshIcon();
        });

        it("Should click on Truck Number under Mark Pate", async () => {
            await finalMileFleetStatusHomePage.clickOnMarkPateOption(data.optionName);
        });

        it("Verifying that redirected toCheck Call Details Page", async () => {
            await expect<any>(finalMileFleetStatusHomePage.getPageTitle()).toBe(data.checkCallDetailsPageTitle);
        });
    });

});
    
