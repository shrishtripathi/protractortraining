import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";

import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";

let cdrapHomePage = new CdrapHomePage();

let locationAdministrationPage=new LocationAdministrationPage();
let using = require('jasmine-data-provider');

//TC #139492: CDRAP Login to homescreen
using(DataProvider.Tc_141220, async function (data) {

    describe("Company admin, job locations", () => {

        //TC #157971
        it("Should open CDRAP url", async () => {
            await cdrapHomePage.openUrl(cdrapHomePage.cdrapUrl);
        });

        it("Verifying that CDRAP page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toBe(data.loginTitle);
        });

        it("Login into CDRAP application ", async () => {
            await cdrapHomePage.loginIntoCdrap(data.username, data.password, data.submit);
        });

        it("Verifying that CDRAP Logged in Home page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.cdrapHomeTitle);
        });

//TC #141220: Company admin, job locations
        
        it("Should click on Company Admin Hyperlink", async () => {
            await cdrapHomePage.clickOnCompanyAdmin();
        });

        it("Should select 'LOWAR01 | Lowell, AR - JB Hunt Corporate' from location dropdown", async () => {
            await locationAdministrationPage.selectLocationDropdown(data.locationName);
        });

        it("Should enter address as '123 Test'", async () => {
            await locationAdministrationPage.setAddressAndZip(data.addressFieldName,data.addressText);
        });

        it("Should enter zip code as '72745'", async () => {
            await locationAdministrationPage.setAddressAndZip(data.zipFieldName,data.zipText);
        });

        it("Should click on update Button", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.updateButton)
        });

        it("Should change location to  'LOUKY10 | Louisville, KY - Global Drive' from location dropdown", async () => {
            await locationAdministrationPage.selectLocationDropdown(data.locationName1);
        });

        it("Should select 'LOWAR01 | Lowell, AR - JB Hunt Corporate' from location dropdown", async () => {
            await locationAdministrationPage.selectLocationDropdown(data.locationName);
        });

        it("Verifying that address field is '123 Test'", async () => {
            await expect(locationAdministrationPage.verifyAddress()).toBe(data.addressText);
        });

        it("Should clear the address field", async () => {
            await locationAdministrationPage.clearAddress();
        });

        it("Should enter zip code as '72745'", async () => {
            await locationAdministrationPage.setAddressAndZip(data.zipFieldName,data.zipText);
        });

        it("Should click on update Button", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.updateButton)
        });

        it("Verifying that address field is empty", async () => {
            await expect(locationAdministrationPage.verifyAddress()).toBe(data.null);
        });

        it("Should change location to  'LOUKY10 | Louisville, KY - Global Drive' from location dropdown", async () => {
            await locationAdministrationPage.selectLocationDropdown(data.locationName1);
        });

        it("Should select 'LOWAR01 | Lowell, AR - JB Hunt Corporate' from location dropdown", async () => {
            await locationAdministrationPage.selectLocationDropdown(data.locationName);
        });

        it("Verifying that address field is empty", async () => {
            await expect(locationAdministrationPage.verifyAddress()).toBe(data.null);
        });
        


        


    });

});