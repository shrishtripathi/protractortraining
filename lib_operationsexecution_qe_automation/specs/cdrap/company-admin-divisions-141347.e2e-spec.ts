import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";

import { browser } from "protractor";
import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";

let cdrapHomePage = new CdrapHomePage();
let locationAdministrationPage=new LocationAdministrationPage();
let using = require('jasmine-data-provider');

//TC #139492: CDRAP Login to homescreen
using(DataProvider.Tc_141347, async function (data) {

    describe("Company admin, divisions", () => {

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

//TC #141347: Company admin, divisions
        
        it("Should click on Company Admin Hyperlink", async () => {
            await cdrapHomePage.clickOnCompanyAdmin();
        });

        it("Should click on Divisions Tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.divisionsTab);
        });

        it("Should set name as 'test123' ", async () => {
            await locationAdministrationPage.setNameAndDescription(data.fieldName,data.nameText);
        });

        it("Should set description as '123test' ", async () => {
            await locationAdministrationPage.setNameAndDescription(data.descriptionFieldName,data.descriptionText);
        });

        it("Should click on Add Button", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.addButton);
        });

        it("Should select 'test123' from Business Unit Dropdown", async () => {
            await locationAdministrationPage.selectBusinessUnitDropdown(data.businessunitName);
        });

        it("verifying name field", async () => {
            await expect<any>(locationAdministrationPage.verifyName()).toBe(data.nameText);
        });

        it("verifying description field", async () => {
            await expect<any>(locationAdministrationPage.verifyDescription()).toBe(data.descriptionText);
        });

        it("Should click on Delete Button", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.deleteButton);
            await locationAdministrationPage.acceptingAlert();
        });

        it("verifying 'test123' is deleted from Business Unit Dropdown", async () => {
            await expect<any>(locationAdministrationPage.selectBusinessUnitDropdown(data.businessunitName)).not.toContain(data.nameText);
        });

    });
});