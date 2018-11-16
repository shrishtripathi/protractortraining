import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";

let cdrapHomePage = new CdrapHomePage();
let locationAdministrationPage = new LocationAdministrationPage();
let using = require('jasmine-data-provider');

describe("CDRAP_Regression_22 Company admin, other values", () => {

    //TC #141391: CDRAP_Regression_22 Company admin, other values
    using(DataProvider.Tc_157971, async function (data) {

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

    });

    using(DataProvider.Tc_141391, async function (data) {

        it("Click the Company Admin hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.companyAdminLink);
        });

        it("Verifying that Company Admin screen is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.companyAdminTitle);
        });

        it("Should click on Other Values tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.otherValuesTab);
        });

        it("Should select Priority option from Category dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesCategoryDropDownOptions, data.otherValuesCategoryDropDownValue, locationAdministrationPage.otherValuesCategoryDropDown);
        });

        it("Should select High option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueHighDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is High and Description is High Priority ", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.high);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.highPriority);
        });

        it("Should select Incentive option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueIncentiveDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is Incentive and Description is Incentive ", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.incentive);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.incentive);
        });

        it("Should select Low option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueLowDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is Low and Description is Low Priority", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.low);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.lowPriority);
        });

        it("Should select Medium option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueMediumDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is Medium and Description is Medium Priority", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.medium);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.mediumPriority);
        });

        it("Should select Stratup option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueStartupDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is Stratup and Description is Stratup", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.startup);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.startup);
        });

        it("Should select Question Type option from Category dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesCategoryDropDownOptions, data.otherValuesCategoryQuestionTypeDropDownValue, locationAdministrationPage.otherValuesCategoryDropDown);
        });

        it("Should select Control option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueControlDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is control and Description is Flow control question", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.control);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.flowControlQuestion);
        });

        it("Should select Criminal option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueCriminalDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is Criminal and Description is Unknown", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.criminal);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.unknown);
        });

        it("Should select Employment History option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueEmploymentHistoryDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is Employment History and Description is Unknown", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.employmentHistory);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.unknown);
        });

        it("Should select Employment History Investigati option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueEmploymentHistoryInvestigationDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is Employment History Investigati and Description is Unknown", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.employmentHistoryInvestigati);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.unknown);
        });

        it("Should select IC Questions option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueIcQuestionsDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is IC Questions and Description is IC Questions", async () => {
            await expect(locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.icQuestions);
            await expect(locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.icQuestions);
        });

        it("Should select Investigation option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueInvestigationDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is Investigation and Description is Investigation question", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.investigation);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.investigationQuestion);
        });

        it("Should select MVR option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueMVRDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is MVR and Description is Unknown", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.mvr);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.unknown);
        });

        it("Should select Screening option from Value dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.otherValuesValueDropDownOptions, data.otherValuesValueScreeningDropDownValue, locationAdministrationPage.otherValuesValueDropDown);
        });

        it("Verifying that Name is Screening and Description is Application screening question", async () => {
            expect(await locationAdministrationPage.otherValuesNameInput.getAttribute("value")).toContain(data.screening);
            expect(await locationAdministrationPage.otherValuesDescriptionInput.getAttribute("value")).toContain(data.applicationScreeningQuestion);
        });

    });

});