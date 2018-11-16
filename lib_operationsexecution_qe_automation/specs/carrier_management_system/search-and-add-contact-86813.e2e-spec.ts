import { browser, element, promise } from 'protractor';
import { CarrierManagementPage } from '../../pages/carrier_management_system/carrier-management-po';
import { CarrierSearchPage } from '../../pages/carrier_management_system/carrier-search-po';
import { CarrierProfilePage } from '../../pages/carrier_management_system/carrier-profile-po';
import { DataProvider } from '../../data/dataProvider';

let carrierManagementPage = new CarrierManagementPage();
let carrierSearchPage = new CarrierSearchPage();
let carrierProfilePage = new CarrierProfilePage();
let using = require('jasmine-data-provider');

//TC#86813 -CMS_Regression_1 Search and add contact
using(DataProvider.TC_86813, async function (data) {

  describe("Search and add contact", function () {

    it("should open 'Carrier Management' page", async function () {      
      await carrierManagementPage.navigateToAppHome(carrierManagementPage.carrierManagementUrl);
    });

    it("Verifying that redirected to Carrier management system Page", async () => {
      await expect<any>(carrierManagementPage.getPageTitle()).toBe(data.CMSPageTitle);
    });
    
    it("Click on Carrier Search link in Carrier Management Page", async () => {
      await carrierManagementPage.clickonCarrierSearch();
    });

    it("Set State value as AR in Carrier Search Page", async () => {
      await carrierSearchPage.setStateValue(data.stateValue);
    });

    it("click search button in Carrier Search Page", async () => {
      await carrierSearchPage.clickSearchButtonUnderCarrierSearch();
    });

    it("click cancel button in Carrier Search Page", async () => {
      await carrierSearchPage.clickcancelButton();
    });

    it("Set State value as None in Carrier Search Page", async () => {
      await carrierSearchPage.setStateValue("");
    });

    it("Set MKT value as AK in Carrier Search Page", async () => {
      await carrierSearchPage.setMKTValue(data.MKTValue);
    });

    it("click search button in Carrier Search Page", async () => {
      await carrierSearchPage.clickSearchButtonUnderCarrierSearch();
    });

    it("Verify carrier names grid got displayed", async () => {
      let result: boolean = await carrierSearchPage.verifyCarrierNamesGrid();
      await expect(result).toBeTruthy();
    });

    it("click on Carrier Name  link in Carrier Search page", async () => {
      await carrierSearchPage.clickCarrierName();
    });

    it("Verify carrier profile page got displayed", async () => {
      await carrierProfilePage.verifyCarrierProfilePage();
    });

    it("click on Contacts tab in carrier Profile Page", async () => {
      await carrierProfilePage.clickOnCarrierProfileTabs(data.contactsTabName);
    });

    it("click on Add Contact button in Carrier Profile Page", async () => {
      await carrierProfilePage.clickOnButton(data.addContactButton);
    });

    it("Verify add contact details screen is displayed", async () => {
      await carrierProfilePage.waitUntilAddContactDetailIsVisible();
    });

    it("Enter contact details in carrier Profile Page", async () => {
      let arr: string[] = [data.firstNameDetail, data.lastNameDetail, data.middleNameDetail, data.primaryPhoneDetail, data.secPhoneDetail, data.faxPhoneDetail, data.emailDetail];
      await carrierProfilePage.enterContactDetails(arr);
    });

    it("click on save button in carrier Profile Page", async () => {
      await carrierProfilePage.clickOnSaveButton(data.saveButton);
    });

    it("Verify success message ", async () => {
      let result: boolean = await carrierProfilePage.verifySuccessMessage();
      await expect(result).toBeTruthy();
    });

    it("Verify newly added contact details ", async () => {
      let result: boolean = await carrierProfilePage.verifySavedRecord(data.firstName);
      await expect(result).toBeTruthy();
    });

  });

});