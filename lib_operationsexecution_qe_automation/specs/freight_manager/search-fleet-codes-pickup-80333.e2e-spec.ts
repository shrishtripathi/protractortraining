import { BasePage } from '../../pages/base.po';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { PickupviewPage } from '../../pages/freight_manager/pick-up-view.po';
import { browser } from 'protractor';
import { DataProvider } from "../../data/dataProvider";

let basePage = new BasePage();
let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let using=require('jasmine-data-provider');
// TC_80333: FM2_Regression_22 Search for different fleet codes in Pickup 
using(DataProvider.Tc_80333, async function(data){

describe("User searchs different fleets code in Pickup ", function () {

    it("Should Open My JBHunt url", () => {
        myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url)
    });

    it("Should select 'PICK UP' under planning tab", () => {
        freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.pickUpOption);
    });

    it("Select Type, F-fleet", () => {
        pickupviewPage.selectTypeFeet();
    });

    it("Should type 'HJBT JBVAN' in division field ", () => {
        pickupviewPage.enterDivision(data.strDivison);
    });

    it("Clear Area Type field", () => {
        pickupviewPage.clearAreaType();
    });

    it("Clear Area field ", () => {
        pickupviewPage.clearArea();
    });

    it("Should type 'T' in Tran Md  field ", () => {
        pickupviewPage.enterTranMd(data.strTranMd);
    });

    it("Should type 'WEST' in Fleet Group  field ", () => {
        pickupviewPage.enterFleetGroup(data.fleetGroup);
    });

    it("Should click 'Search' button", () => {
        basePage.clickSearchButton();
    });

    it("Check result after searching", () => {
        pickupviewPage.checkWarningBox(data.warningMessage);
    });

});
})