import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";

import { browser } from "protractor";
import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";

let cdrapHomePage = new CdrapHomePage();
let locationAdministrationPage=new LocationAdministrationPage();
let using = require('jasmine-data-provider');

//TC #139492: CDRAP Login to homescreen
using(DataProvider.Tc_141385, async function (data) {

    describe("Company admin, advertising types", () => {

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

//TC #141385: Company admin, advertising types
        
        it("Should click on Company Admin Hyperlink", async () => {
            await cdrapHomePage.clickOnCompanyAdmin();
        });

        it("Should click on Advertising Tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.advertisingTypesTab);
        });

        it("Should select 'Acquisition' from Media Type Dropdown", async () => {
            await locationAdministrationPage.selectMediaTypeDropdowns(data.mediaTypeId,data.mediaTypeName);
        });
        
        it("verifying Media name to be 'Acquisition'", async () => {
            await expect<any>(locationAdministrationPage.verifyMediaTypeName()).toBe(data.mediaTypeName);
        });

        it("should click on States Tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.statesTab);
        });

        it("Should select 'Acquisition' from Media Type Dropdown", async () => {
            await locationAdministrationPage.selectMediaTypeDropdowns(data.mediaTypeId,data.mediaTypeName);
        });

        it("Should select 'National' from Media State Dropdown", async () => {
            await locationAdministrationPage.selectMediaTypeDropdowns(data.mediaStateId,data.mediaStateName);
        });

        it("verifying State name to be 'National'", async () => {
            await expect<any>(locationAdministrationPage.verifyMediaStateName()).toBe(data.mediaStateName);
        });

        it("should click on Sources Tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.sourcesTab);
        });

        it("Should select 'Acquisition' from Media Type Dropdown", async () => {
            await locationAdministrationPage.selectMediaTypeDropdowns(data.mediaTypeId,data.mediaTypeName);
        });

        it("Should select 'National' from Media State Dropdown", async () => {
            await locationAdministrationPage.selectMediaTypeDropdowns(data.mediaStateId,data.mediaStateName);
        });

        it("Should select 'Other' from Media Source Dropdown", async () => {
            await locationAdministrationPage.selectMediaTypeDropdowns(data.mediaSourceId,data.mediaSourceName);
        });

        it("verifying Source name to be 'Other'", async () => {
            await expect<any>(locationAdministrationPage.verifyMediaSourceName()).toBe(data.mediaSourceName);
        });

    });
});
