
import { DataProvider } from "../../data/dataProvider";
import { browser, ElementFinder } from "protractor";
import { FinalMileFleetStatusHomePage } from "../../pages/pdt/final-mile-fleet-status-home.po";

let using = require('jasmine-data-provider');
let finalMileFleetStatusHomePage = new FinalMileFleetStatusHomePage();

//Tc# 126266 - PDT_Regression_1 Checking stop details

using(DataProvider.Tc_126266, async function (data) {

    describe("Checking stop details", function () {
        let firstStopText = "";
        let firstStopIconText = "";
        let commentsTabPath: ElementFinder;

        it("Should open pdt url", async () => {
            await finalMileFleetStatusHomePage.navigateToAppHome(finalMileFleetStatusHomePage.pdtUrl);
            await finalMileFleetStatusHomePage.waitForPagePDTLoad();
        });

        it("Verifying that redirected to Fleet Status Page", async () => {
            await expect(finalMileFleetStatusHomePage.getPageTitle()).toBe(data.finalMileFleetStatusPageTitle);
        });

        it("Should select Final Mile Birmingham,  AL option from fleet dropdown", async () => {
            await finalMileFleetStatusHomePage.setFleetDropDown(data.finalMileBirminghamOption);
        });

        it("Should click on Refresh Icon", async () => {
            await finalMileFleetStatusHomePage.clickOnRefreshIcon();
        });

        it("Should click on View More Drop Down", async () => {
            await finalMileFleetStatusHomePage.clickOnViewMoreDropDown();

        });

        it("Should get First stop loaction text from View More Drop Down", async () => {
            firstStopText = await finalMileFleetStatusHomePage.getFirtStopLocationText();
        });

        it("Should click on Stop Completed Icon", async () => {
            await finalMileFleetStatusHomePage.hoverOverStopCompletedIcon();
        });

        it("Should get Location Text from Stop Completed Icon", async () => {
            firstStopIconText = await finalMileFleetStatusHomePage.getTextFromStopCompletedIcon();
        });

        it("Should verify the location of first stop from view more and first stop completed Icon", async () => {
            await expect(firstStopText).toContain(firstStopIconText);
        });

        it("Should click on Details Button", async () => {
            await finalMileFleetStatusHomePage.clickDetailsButton(data.stopNumberIndex);
        });

        it("Should verify Details Table", async () => {
            expect(finalMileFleetStatusHomePage.commentsTab.isPresent()).toBeTruthy();
        });

    });

});

