import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { browser } from "protractor";
import { ConfirmationSearchPage } from "../../pages/cdrap/confirmation-search-page.po";

let cdrapHomePage = new CdrapHomePage();
let confirmationSearchPage = new ConfirmationSearchPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC #139821: CDRAP_Regression_7 Confirmation
using(DataProvider.Tc_139821, async function (data) {

    describe("CDRAP_Regression_7 Confirmation", () => {

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

        //TC 139821

        it("Click the Confirmation hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.confirmationLink);
        });

        it("Verifying that Confirmation Search screen is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.confirmationSearchTitle);
        });

        it("Should change the two digit number to 01 in the white text box next to Event Date and above mm", async () => {
            await confirmationSearchPage.clearText(confirmationSearchPage.fromDateMM);
            await confirmationSearchPage.setText(confirmationSearchPage.fromDateMM, data.fromDateMM);
        });

        it("Should select Road Test option from Appt. Type dropdown", async () => {
            await confirmationSearchPage.setOptionFromDropDown(confirmationSearchPage.apptTypeDropDownOptions, data.apptTypeRoadTestValue, confirmationSearchPage.apptTypeDropDown);
        });

        it("Should click on Search button", async () => {
            await confirmationSearchPage.clickOnButton(data.search);
            await confirmationSearchPage.waitForElementIsVisible(confirmationSearchPage.resultList);
        });

        it("Verifying that List is displayed", async () => {
            await expect(confirmationSearchPage.resultList.isPresent()).toBeTruthy();
        });

    });

});
