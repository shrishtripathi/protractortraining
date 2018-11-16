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
//TC_80334_TFS FM2_Regression_23 Search by Ramp Codes in Pickup
using(DataProvider.Tc_80334, async function(data){

describe("User searchs by Ramp Codes in Pickup", function () {

    it("Should Open My JBHunt url", () => {
        myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url)
    });

    it("Should select 'PICK UP' under planning tab", () => {
        freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.pickUpOption);
    });

    it("Select Type, RC - RampCode", () => {
        pickupviewPage.selectTypeRC();
    });

    it("Click Ramp Location Finder", () => {
        pickupviewPage.clickRampLocation();
    });

    it("Select Buffalo as  Ramp Location  and click 'OK' Button", () => {
        pickupviewPage.selectBuffaloRampLocation();
    });

    it("Click Ramp Code Finder", () => {
        pickupviewPage.clickRampCode();
    });

    it("Click Ramp Code OK Button", () => {
        pickupviewPage.clickRampCodeOK();
    });

    it("Should type 'HJBT JBVAN' in division field ", () => {
        pickupviewPage.enterDivision(data.strDivison);
    });

    it("Should type 'I' in Tran Md  field ", () => {
        pickupviewPage.cleanTrandMDField();
        pickupviewPage.enterTranMd(data.strTranMd);
    });

    it("Should type 'R' in Util Status  field ", () => {
        pickupviewPage.enterUtilStatus1(data.utilStatus1);
    });

    it("Should type '0' in Util Status  field ", () => {
        pickupviewPage.enterUtilStatus2(data.utilStatus2);
    });

    it("Click Save Prefs button", () => {
        pickupviewPage.clickSavePrefsButton();
    });

    it("Should click 'Search' button", () => {
        basePage.clickSearchButton();
    });

    it("Verifying that orders are pulled into list ", () => {
        pickupviewPage.numOfRows();
    });

});
})