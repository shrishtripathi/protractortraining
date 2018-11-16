import { DataProvider } from "../../data/dataProvider";
import { FinalMileFleetStatusHomePage } from "../../pages/pdt/final-mile-fleet-status-home.po";

let using = require('jasmine-data-provider');
let finalMileFleetStatusHomePage = new FinalMileFleetStatusHomePage();

//Tc# 126390 - PDT_Regression_3 Click order number to open EOM load details
using(DataProvider.Tc_126390, async function (data) {

    describe("Click order number to open EOM load details", function () {

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

        it("Should click on Order Number under Mark Pate", async () => {
            await finalMileFleetStatusHomePage.clickOnMarkPateOption(data.optionName);
        });

        it("Verifying that redirected to Enterprise Order Management Page", async () => {
            await expect<any>(finalMileFleetStatusHomePage.getPageTitle()).toContain(data.eomPageTitle);
        });
    });
});