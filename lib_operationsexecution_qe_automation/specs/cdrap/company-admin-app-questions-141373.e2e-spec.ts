import { DataProvider } from "../../data/dataProvider";
import { CommissionPage } from "../../pages/cdrap/commission.po";
import { CompanyAdminPage } from "../../pages/cdrap/company-admin.po";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";

let cdrapHomePage = new CdrapHomePage();
let companyAdminPage = new CompanyAdminPage();

let using = require('jasmine-data-provider');

//TC #141373: CDRAP_Regression_15 Company admin, app questions
describe("Company admin, app questions", () => {

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

    using(DataProvider.Tc_141373, async function (data) {
        it("Click on company admin hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.commpanyAdminLink);
        });

        it("Click the App Questions tab", async () => {
            await companyAdminPage.clickOnMenuLink(data.appQuestionsLinkText);
        });

        it("Click the dropdown tab next to Question Set, click to select Control", async () => {
            await companyAdminPage.selectQuestionSetDropDownValue(data.controlText)
        });

        it("Verify questions displayed for question set type Control", async () => {
            let result: boolean = await companyAdminPage.verifyAppQuestions(data.control_Questions)
            expect(result).toBeTruthy();
        });

        it("Click the dropdown tab next to Question Set, click to select criminal", async () => {
            await companyAdminPage.selectQuestionSetDropDownValue(data.criminalText)
        });

        it("Verify questions displayed for question set type criminal", async () => {
            let result: boolean = await companyAdminPage.verifyAppQuestions(data.criminal_Questions)
            expect(result).toBeTruthy();
        });

        it("Click the dropdown tab next to Question Set, click to select Employment history", async () => {
            await companyAdminPage.selectQuestionSetDropDownValue(data.employmentHistoryText)
        });

        it("Verify questions displayed for question set type Employment history", async () => {
            let result: boolean = await companyAdminPage.verifyAppQuestions(data.employmentHistory_Questions)
            expect(result).toBeTruthy();
        });

        it("Click the dropdown tab next to Question Set, click to select Employment history investigation", async () => {
            await companyAdminPage.selectQuestionSetDropDownValue(data.investigationsText)
        });

        it("Verify questions displayed for question set type Employment history investigation", async () => {
            let result: boolean = await companyAdminPage.verifyAppQuestions(data.employmentHistoryInvestigation_Questions)
            expect(result).toBeTruthy();
        });

        it("Click the dropdown tab next to Question Set, click to select IC questions", async () => {
            await companyAdminPage.selectQuestionSetDropDownValue(data.icQuestionsText)
        });

        it("Verify questions displayed for question set type IC questions", async () => {
            let result: boolean = await companyAdminPage.verifyAppQuestions(data.icQuestion_Questions)
            expect(result).toBeTruthy();
        });

        it("Click the dropdown tab next to Question Set, click to select investigation", async () => {
            await companyAdminPage.selectQuestionSetDropDownValue(data.investigationsText)
        });

        it("Verify questions displayed for question set type investigation", async () => {
            let result: boolean = await companyAdminPage.verifyAppQuestions(data.investigation_Question)
            expect(result).toBeTruthy();
        });

        it("Click the dropdown tab next to Question Set, click to select MVR", async () => {
            await companyAdminPage.selectQuestionSetDropDownValue(data.mvrTest)
        });

        it("Verify questions displayed for question set type MVR", async () => {
            let result: boolean = await companyAdminPage.verifyAppQuestions(data.mvr_Questions)
            expect(result).toBeTruthy();
        });

        it("Click the dropdown tab next to Question Set, click to select screening", async () => {
            await companyAdminPage.selectQuestionSetDropDownValue(data.screeningText)
        });

        it("Verify questions displayed for question set type screening", async () => {
            let result: boolean = await companyAdminPage.verifyAppQuestions(data.screening_Questions)
            expect(result).toBeTruthy();
        });


    });
});