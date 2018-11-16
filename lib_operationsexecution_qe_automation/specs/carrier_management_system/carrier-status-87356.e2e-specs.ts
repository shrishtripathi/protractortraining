import { CarrierManagementPage } from "../../pages/carrier_management_system/carrier-management-po";
import { CarrierSearchPage } from "../../pages/carrier_management_system/carrier-search-po";
import { DataProvider } from "../../data/dataProvider";

let carrierManagementPage = new CarrierManagementPage();
let carrierSearchPage = new CarrierSearchPage();
let using = require('jasmine-data-provider');

//TC_87356: CMS_Regression_4 Carrier status
using(DataProvider.TC_87356, async function (data) {

    describe("Carrier status", function () {

        it("should open 'Carrier Management' page", async function () {            
            await carrierManagementPage.navigateToAppHome(carrierManagementPage.carrierManagementUrl);
        });

        it("Verifying that redirected to Carrier management system Page", async () => {
            await expect<any>(carrierManagementPage.getPageTitle()).toBe(data.CMSPageTitle);
        });

        it("Click on carrier search link from carrier management system page", async () => {
            await carrierManagementPage.clickOnLinkButton(data.carrierSearchLink);
        });

        it("Select '"+ data.MKTValueDA + "' to MKT Area drop down", async () => {
            await carrierSearchPage.setMKTValue(data.MKTValueDA);
        });

        it("Should click search button ", async () => {
            await carrierSearchPage.clickOnSearch();
        });

        it("Should Click on Carrier Name link with a status that reads rejected ", async () => {
            await carrierSearchPage.clickCarrierNameHavingStatus(data.CarrierNameHavingStatusRejected);
        });

        it("Should click on Carrier Status tab", async () => {
            await carrierSearchPage.clickOnCarrierStatusTab();
        });

        it("Should change status in division ", async () => {
            await carrierSearchPage.selectDivisionStatus(data.divisionHJBTJBVAN, data.statusValueApproved);
        });

        it("Should click on save button", async () => {
            await carrierSearchPage.clickOnSave();
        });

        it("Should click on Project Carrier Association", async () => {
            await carrierSearchPage.clickOnProjectCarrierAssociation();
        });

        it("Should change display optoins to All Project Codes", async () => {
            await carrierSearchPage.selectDisplayOptions();
        });

        it("Should click on Search button", async () => {
            await carrierSearchPage.clickOnSearch();
        });

        it("Should change divison to HJBT JBHA", async () => {
            await carrierSearchPage.selectDivisonOptions(data.selectDivisonOptionsText, data.selectDivisonOptionsOptionHJBTJBDCS);
        });

        it("Should click on Search button", async () => {
            await carrierSearchPage.clickOnSearch();
        });

        it("Should change divison to HJBT JBHA", async () => {
            await carrierSearchPage.selectDivisonOptions(data.selectDivisonOptionsText, data.selectDivisonOptionsOptionHJBTJBHA);
        });

        it("Should click on Search button", async () => {
            await carrierSearchPage.clickOnSearch();
        });

        it("Select rejected or pending project code by clicking check box on left", async () => {
            await carrierSearchPage.textAreaEnableCheck(data.textAreaEnableCheckRejected);
        });

        it(" Click Save at bottom of the screen", async () => {
            await carrierSearchPage.clickOnSave();
        });

        it("Verify carrier details is saved", async () => {
            await expect<any>(carrierSearchPage.verifySuccessMessage()).toBe(data.successMessage);
        });

        it("Click Home at top of the screen", async () => {
            await carrierSearchPage.clickOnHome();
            
        });

        it("Verifying that redirected to Carrier management system Page", async () => {
            await expect<any>(carrierManagementPage.getPageTitle()).toBe(data.CMSPageTitle);
        });

    })
});