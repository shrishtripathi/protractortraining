import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { browser } from "protractor";
import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";

let cdrapHomePage = new CdrapHomePage();
let locationAdministrationPage = new LocationAdministrationPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC #141393: CDRAP_Regression_24 Company admin, consumer reports
using(DataProvider.Tc_141393, async function (data) {

    describe("CDRAP_Regression_24 Company admin, consumer reports", () => {

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

        //TC 141393

        it("Click the Company Admin hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.companyAdminLink);
        });

        it("Verifying that Company Admin screen is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.companyAdminTitle);
        });

        it("Should click on Consumer Reports tab", async () => {
            await locationAdministrationPage.click(locationAdministrationPage.consumerReportsTab);
        });

        it("Should select SSN Trace option from Report Type dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.reportTypeDropDownOptions, data.reportTypeValue, locationAdministrationPage.reportTypeDropDown);
        });

        it("Should select NIC Inc option from Report Agency dropdown", async () => {
            await locationAdministrationPage.setOptionFromDropDown(locationAdministrationPage.reportAgencyDropDownOptions, data.reportAgencyValue, locationAdministrationPage.reportAgencyDropDown);
        });

        it("Should click on Add button", async () => {
            await locationAdministrationPage.clickOnButton(data.add);
        });

        it("Verifying that SSN Trace report is added", async () => {
            await expect(locationAdministrationPage.verifyIsReportAdded(data.ssnTrace)).toBeTruthy();
        });

        it("Should click on Delete hyperlink and click on ok button in confirmation pop up", async () => {
            await locationAdministrationPage.clickOnDeleteHyperlink(data.ssnTrace);
        });

        it("Verifying that SSN Trace report is not displayed", async () => {
            await expect(locationAdministrationPage.verifyIsReportAdded(data.ssnTrace)).toBeFalsy();
        });

        it("Should click on Edit hyperlink of CDLIS report", async () => {
            await locationAdministrationPage.clickOnEditHyperlink(data.cdlisReport);
        });

        it("Verifying that Report Type is CDLIS and Report Agency is DriverIQ", async () => {
            await expect(locationAdministrationPage.verifyReportTextAtBottom(data.cdlisReport)).toBeTruthy();
            await expect(locationAdministrationPage.verifyReportTextAtBottom(data.driverIQ)).toBeTruthy();
            await expect(locationAdministrationPage.defaultAgency.isSelected()).toBeTruthy();
        });

        it("Should click on Cancel button", async () => {
            await locationAdministrationPage.clickOnButton(data.cancel);
        });

        it("Verifying that Report Type is CDLIS and Report Agency is DriverIQ", async () => {
            await expect(locationAdministrationPage.verifyReportTextAtBottom(data.cdlisReport)).toBeFalsy();
            await expect(locationAdministrationPage.verifyReportTextAtBottom(data.driverIQ)).toBeFalsy();
            await expect(locationAdministrationPage.defaultAgency.isSelected()).toBeFalsy();
        });

    });

});
