import { browser } from 'protractor';
import { CommonFunctions } from '../../utilities/common-functions';
import { CarrierManagementPage } from '../../pages/carrier_management_system/carrier-management-po';
import { CarrierSearchPage } from '../../pages/carrier_management_system/carrier-search-po';
import { CarrierProfilePage } from '../../pages/carrier_management_system/carrier-profile-po';
import { DataProvider } from '../../data/dataProvider';

let commonFunctions = new CommonFunctions();
let carrierManagementPage = new CarrierManagementPage();
let carrierSearchPage = new CarrierSearchPage();
let carrierProfilePage = new CarrierProfilePage();
let using = require('jasmine-data-provider');

//TC#87217 -CMS_Regression Safety and Adding Insurance
using(DataProvider.TC_87217, async function (data) {

    describe("Safety and insurance", function () {

        let producerName="HMOEP";

        it("should open 'Carrier Management' page", async function () {
            await carrierManagementPage.navigateToAppHome(carrierManagementPage.carrierManagementUrl);
        });

        it("Verifying that redirected to Carrier management system Page", async () => {
            await expect<any>(carrierManagementPage.getPageTitle()).toBe(data.CMSPageTitle);
        });

        it("Click on carrier search link from carrier management system page", async () => {
            await carrierManagementPage.clickOnLinkButton(data.carrierSearchLink);
        });

        it("Select 'AK' to MKT Area drop down", async () => {
            await carrierSearchPage.setMKTValue(data.MKTAreaDropdownValue);
        });

        it("Should click search button ", async () => {
            await carrierSearchPage.clickOnSearch();
        });

        it("Should click on ALASKA WEST EXPRESS INC link ", async () => {
            await carrierSearchPage.clickCarrierNameLink(data.carrierLink);
        });

        it("Should click on safety tab ", async () => {
            await carrierProfilePage.clickOnCarrierProfileTabs(data.safetyTabName);
        });

        it("Should select unsatisafctory option from rating dropdown ", async () => {
            await carrierProfilePage.selectDropdown(data.ratingDropDownName, data.ratingDropdownValue);
        });

        it("Should select 'B' option from score dropdown", async () => {
            await carrierProfilePage.selectDropdown(data.scoreDropdownName, data.scoreDropdownValue);
        });

        it("Should click save button", async () => {
            await carrierProfilePage.clickOnLinkButton('Save');
            await carrierProfilePage.acceptingAlert();
        });

        it("Should click on insurance tab", async () => {
            await carrierProfilePage.clickOnCarrierProfileTabs(data.insuranceTabName);
        });

        it("Should click on Add insurance", async () => {
            await carrierProfilePage.clickAddInsurance();
        });

        it("Should enter prodecer name", async () => {
            producerName = await commonFunctions.randomNameGenarator(5)
            console.log("producerName",producerName)
            await carrierProfilePage.addInsuranceDetails(data.producerNameid, producerName);
        });

        it("Should enter producer Phone", async () => {
            await carrierProfilePage.addInsuranceDetails(data.producerPhoneid, data.producerPhone);
        });

        it("Should enter producer fax", async () => {
            await carrierProfilePage.addInsuranceDetails(data.producerFaxid, data.producerFax);
        });

        it("Should enter producer email", async () => {
            let email=await producerName+data.producerEmail
            console.log("email",email)
            await carrierProfilePage.addInsuranceDetails(data.producerMailid, email);
        });

        it("Should select insurer as 'ACE INSURANCE CO OF IL'", async () => {
            await carrierProfilePage.selectDropdown(data.insurerid, data.insurerIDValue);
        });

        it("Should select insurer type as 'HOLD HARMLESS'", async () => {
            await carrierProfilePage.selectDropdown(data.insuranceTypeid, data.insuranceTypeidValue);
        });

        it("Should enter insurance amount", async () => {
            await carrierProfilePage.addInsuranceDetails(data.insuranceAmountid, data.insuranceAmount);
        });

        it("Should enter insurance deductible amount", async () => {
            await carrierProfilePage.addInsuranceDetails(data.insuranceDeductibleid, data.insuranceDeductible);
        });

        it("Should enter policy number", async () => {
            await carrierProfilePage.addInsuranceDetails(data.policyNumberid, data.policyNumber);
        });

        it("Should select certificate level as 'sample'", async () => {
            await carrierProfilePage.selectDropdown(data.certificationLevelID, data.certificationLevelIdValue);
        });

        it("Should select effective date as todays date", async () => {
            await carrierProfilePage.addInsuranceDetails(data.effectiveDateid, carrierProfilePage.getTodayDate());
        });

        it("Should select expiration date as '09/10/2027'", async () => {
            await carrierProfilePage.addInsuranceDetails(data.expirationDateid, data.expirationDate);
        });

        it("Should click save button", async () => {
            await carrierProfilePage.clickOnLinkButton(data.saveButton);
            await carrierProfilePage.acceptingAlert();
        });

        it("Should click Yes or No button", async () => {
            await carrierProfilePage.existingProducerAlert(data.noButton);
        });

        it("Should click on insurance type", async () => {
            console.log("insurance type producerName", producerName)
            await carrierProfilePage.clickInsuranceType(producerName);
        });
        
        it("Should click save button", async () => {
            await carrierProfilePage.clickOnLinkButton(data.saveButton);
            await carrierProfilePage.acceptingAlert();
        });
        
    });

});
