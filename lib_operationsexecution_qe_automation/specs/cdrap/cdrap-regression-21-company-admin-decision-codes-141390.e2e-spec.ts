import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { browser } from "protractor";
import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";

let cdrapHomePage = new CdrapHomePage();
let locationAdministrationPage = new LocationAdministrationPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC #141390: CDRAP_Regression_21 Company admin, decision codes
using(DataProvider.Tc_141390, async function (data) {

    describe("CDRAP_Regression_21 Company admin, decision codes", () => {

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

        //TC 141390

        it("Click the Company Admin hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.companyAdminLink);
        });

        it("Verifying that Company Admin screen is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.companyAdminTitle);
        });

        it("Should click on Decision Code tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.decisionCodesTab);
        });

        it("Should select *Pending Decline option from Decision Code dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.decisionCodeDropDownOptions, data.pendingDecline, locationAdministrationPage.decisionCodeDropDown);
        });

        it("Verifying that Name , Description and Status of *Pending Decline Decision Code", async () => {
            await expect(locationAdministrationPage.nameInput.getAttribute("value")).toContain(data.pendingDeclineText);
            await expect(locationAdministrationPage.descriptionInput.getAttribute("value")).toContain(data.pendingDeclineText);
            await expect(locationAdministrationPage.statustDropDown.getText()).toContain(data.pendingDeclineStatus);
        });

        it("Should select Accidents option from Decision Code dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.decisionCodeDropDownOptions, data.accidents, locationAdministrationPage.decisionCodeDropDown);
        });

        it("Verifying that Name , Description and Status of Accidents Decision Code", async () => {
            await expect(locationAdministrationPage.nameInput.getAttribute("value")).toContain(data.accidentsText);
            await expect(locationAdministrationPage.descriptionInput.getAttribute("value")).toContain(data.accidentsText);
            await expect(locationAdministrationPage.statustDropDown.getText()).toContain(data.accidentsStatus);
        });

        it("Should select Death option from Decision Code dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.decisionCodeDropDownOptions, data.death, locationAdministrationPage.decisionCodeDropDown);
        });

        it("Verifying that Name , Description and Status of Death Decision Code", async () => {
            await expect(locationAdministrationPage.nameInput.getAttribute("value")).toContain(data.deathText);
            await expect(locationAdministrationPage.descriptionInput.getAttribute("value")).toContain(data.deathText);
            await expect(locationAdministrationPage.statustDropDown.getText()).toContain(data.deathStatus);
        });

        it("Should select Early Retirement option from Decision Code dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.decisionCodeDropDownOptions, data.earlyRetirement, locationAdministrationPage.decisionCodeDropDown);
        });

        it("Verifying that Name , Description and Status of Early Retirement Decision Code", async () => {
            await expect(locationAdministrationPage.nameInput.getAttribute("value")).toContain(data.earlyRetirementText);
            await expect(locationAdministrationPage.descriptionInput.getAttribute("value")).toContain(data.earlyRetirementText);
            await expect(locationAdministrationPage.statustDropDown.getText()).toContain(data.earlyRetirementStatus);
        });

        it("Should select Interview Requirement Met option from Decision Code dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.decisionCodeDropDownOptions, data.interviewRequirementMet, locationAdministrationPage.decisionCodeDropDown);
        });

        it("Verifying that Name , Description and Status of Interview Requirement Met Decision Code", async () => {
            await expect(locationAdministrationPage.nameInput.getAttribute("value")).toContain(data.interviewRequirementMetText);
            await expect(locationAdministrationPage.descriptionInput.getAttribute("value")).toContain(data.interviewRequirementMetDescription);
            await expect(locationAdministrationPage.statustDropDown.getText()).toContain(data.interviewRequirementMetStatus);
        });

    });

});
