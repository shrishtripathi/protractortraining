import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { FinalMileFleetStatusHomePage } from "../../pages/pdt/final-mile-fleet-status-home.po";


let using = require('jasmine-data-provider');
let finalMileFleetStatusHomePage = new FinalMileFleetStatusHomePage();

//Tc# 126641 - PDT_Regression_6 Fleet status map
using(DataProvider.Tc_126641, async function (data) {

    describe("Fleet status map", function () {

        it("Should open Fleet Status url", async () => {
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

        it("Should click on refresh icon", async () => {
            await finalMileFleetStatusHomePage.clickOnIcon(finalMileFleetStatusHomePage.refreshIcon, data.refreshIcon);
        });

        it("Verifying that list of drivers will populate", async () => {
            await expect<any>(finalMileFleetStatusHomePage.verifyListOfDrivers()).toBeTruthy();
        });

        it("Should click on map icon", async () => {
            await finalMileFleetStatusHomePage.clickOnIcon(finalMileFleetStatusHomePage.mapIcon, data.mapIcon);
        });

        it("Verifying that Map appears ", async () => {
            await expect<any>(finalMileFleetStatusHomePage.verifyElementPresent(finalMileFleetStatusHomePage.mapImage)).toBeTruthy();
        });
 
        it("Should click on view more", async ()=> {
            await finalMileFleetStatusHomePage.clickOnViewMore(); 
        });

        it("Verifying that route details screen appear", async()=> {
            await expect<any>(finalMileFleetStatusHomePage.verifyElementPresent(finalMileFleetStatusHomePage.routeDetailsMap)).toBeTruthy();
        });

        it("Should click on Details Button", async ()=> {
            await finalMileFleetStatusHomePage.clickOnDetailsButton(); 
        });

        it("Verifying that Stop details screen appears", async()=> {
            await expect<any>(finalMileFleetStatusHomePage.getElementText(finalMileFleetStatusHomePage.stopDetails)).toContain(data.detailsText);
        });

    });

});