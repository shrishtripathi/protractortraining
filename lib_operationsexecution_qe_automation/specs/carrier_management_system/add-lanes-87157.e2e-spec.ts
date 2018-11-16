import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CarrierManagementPage } from "../../pages/carrier_management_system/carrier-management-po";
import { CarrierSearchPage } from "../../pages/carrier_management_system/carrier-search-po";
import { CarrierProfilePage } from "../../pages/carrier_management_system/carrier-profile-po";
import { Documentpage } from "../../pages/carrier_management_system/document-page.po";
import { DesiredLanePage } from "../../pages/carrier_management_system/desired-lane.po";
import { DataProvider } from "../../data/dataProvider";

let homePage = new MyJbHuntHomePage();
let carrierManagementPage = new CarrierManagementPage();
let carrierSearchPage = new CarrierSearchPage();
let carrierProfilePage = new CarrierProfilePage();
let documentPage = new Documentpage();
let desiredLanePage = new DesiredLanePage();
let using = require('jasmine-data-provider');

//TC#87157 -CMS_Regression Add lanes
using(DataProvider.TC_87157, async function (data) {

    describe("TC_87517: add lanes ", function () {

        it("should open 'Carrier Management' page", async function () {
            await carrierManagementPage.navigateToAppHome(carrierManagementPage.carrierManagementUrl);
        });

        it("Verifying that redirected to Carrier management system Page", async () => {
            await expect<any>(carrierManagementPage.getPageTitle()).toBe(data.CMSPageTitle);
        });

        it("should click on 'Carrier Search Page' in CarrierManagementPage", async function () {
            await carrierManagementPage.clickonCarrierSearch();
        });

        it("should select 'MKTArea DropDown and Select Area Alaska' in carrier Search Page", async function () {
            await carrierSearchPage.setMKTValue(data.MKTAreaDropdownValue);
        });

        it("should click on 'Search' in carrier Search Page", async function () {
            await carrierSearchPage.clickSearchButtnOnCarrierSearchPage();
        });

        it("should click on 'Carrier Name' link", async function () {
            await carrierSearchPage.clickCarrierNameLink(data.carrierLink);
        });

        it("should click on 'Desired Lanes' link", async function () {
            await carrierProfilePage.clickDesiredLanesTab();
        });

        it("should click on 'Add Lanes' link", async function () {
            await desiredLanePage.clickAddLanes();
        });

        it("should enter 'Desired lane Information'", async function () {
            await desiredLanePage.enterLaneinfo(data.originTypeDropDownValue, data.originLocationDropDownValue, data.destinationTypeDropDownValue, data.destinationLocationDropDownValue, data.equipmentTypeDropDownValue);
            await desiredLanePage.enterRPMandAmount(data.rpmTextBoxrpmTextBoxValue, data.minimumChargeAmountValue);
        });

        it("should click on 'Save'", async function () {
            await desiredLanePage.clickOnSave();
        });

        it("should click on 'Documents'", async function () {
            await desiredLanePage.clickOnDocuments();
        });

        it("should click on 'Add Document'", async function () {
            await documentPage.addDocument();
        });

        it("should enter 'Document data'", async function () {
            await documentPage.enterDocumentData(data.documentTypeValue, data.efferctiveDate, data.expiryDateValue);
        });

        it("should click on 'cancel'", async function () {
            await documentPage.clickOnCancel();
        });

    });

});