import { DataProvider } from "../../data/dataProvider";
import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { ExecutiveViewSearchPage } from "../../pages/cdrap/executive-view-search-page.po";
import { browser } from "protractor";
let cdrapHomePage = new CdrapHomePage();
let locationAdministrationPage=new LocationAdministrationPage();
let executiveViewSearchPage=new ExecutiveViewSearchPage();
let using = require('jasmine-data-provider');

//TC #139826: CDRAP_Regression_8 Executive view
using(DataProvider.Tc_139826, async function (data) {

    describe("Executive view", () => {

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

        //TC #139826
        it("Click the Investigations hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.executiveLink);
        });

        it("Verifying that executive search page is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.executiveViewScreachTitle);
        });
        
        it("Should enter in the empty white text box next to SSN, enter '112233445'", async () => {
            await executiveViewSearchPage.setText(executiveViewSearchPage.ssn,data.ssn);
        });

        it("Should click on submit button", async () => {
            await executiveViewSearchPage.click(executiveViewSearchPage.submitButton);
        });

        it("Should click on Name Hyperlink", async () => {
            await executiveViewSearchPage.click(executiveViewSearchPage.candidateName)
        });

        it("Should click on 'Spider' Hyperlink", async () => {
            await executiveViewSearchPage.clickOnHyperlinks(data.spiderLinkName);
        });

        it("Verifying spider page title", async () => {
            await expect<any>(executiveViewSearchPage.switchToNewWindow()).toContain(data.spiderPageTitle);
            executiveViewSearchPage.closeWindow();
            executiveViewSearchPage.switchToParentWindow();
        });

        it("Should click on 'DDD' Hyperlink", async () => {
            await executiveViewSearchPage.clickOnHyperlinks(data.dddLinkName);
        });

        it("Verifying DDD page title", async () => {
            await expect<any>(executiveViewSearchPage.switchToNewWindow()).toContain(data.dddPageTitle);
            executiveViewSearchPage.closeWindow();
            executiveViewSearchPage.switchToParentWindow();
        });

        it("Should click on 'star' Hyperlink", async () => {
            await executiveViewSearchPage.clickOnHyperlinks(data.starLinkName);
        });

        it("Verifying Enterprise page title", async () => {
            await expect<any>(executiveViewSearchPage.switchToNewWindow()).toContain(data.starPageTitle);
            executiveViewSearchPage.closeWindow();
            executiveViewSearchPage.switchToParentWindow();
        });

        it("Should click on 'Driver Search' Hyperlink", async () => {
            await executiveViewSearchPage.clickOnHyperlinks(data.driverSearchLinkName);
        });

        it("Verifying Driver Search page title", async () => {
            await expect<any>(executiveViewSearchPage.switchToNewWindow()).toContain(data.driverSearchPageTitle);
            executiveViewSearchPage.closeWindow();
            executiveViewSearchPage.switchToParentWindow();
        });

        it("Should click on 'Driver App' Hyperlink", async () => {
            await executiveViewSearchPage.clickOnDriverAppLink();
        });

        it("Verifying Driver App page title", async () => {
            await expect<any>(executiveViewSearchPage.switchToNewWindow()).toContain(data.driverAppPageTitle);
            executiveViewSearchPage.closeWindow();
            executiveViewSearchPage.switchToParentWindow();
        });

        it("Should click on 'scheduling' Hyperlink", async () => {
            await executiveViewSearchPage.clickOnHyperlinks(data.schedulingLinkName);
        });

        it("Verifying scheduling page title", async () => {
            await expect<any>(executiveViewSearchPage.switchToNewWindow()).toContain(data.schedulingPageTitle);
            executiveViewSearchPage.closeWindow();
            executiveViewSearchPage.switchToParentWindow();
        });

        it("Should click on 'call back' Hyperlink", async () => {
            await executiveViewSearchPage.clickOnHyperlinks(data.callBackLink);
        });

        it("Verifying call back page title", async () => {
            await expect<any>(executiveViewSearchPage.switchToNewWindow()).toContain(data.callBackPageTitle);
            executiveViewSearchPage.closeWindow();
            executiveViewSearchPage.switchToParentWindow();
        });

        it("Should click on 'Investigation' Hyperlink", async () => {
            await executiveViewSearchPage.clickOnHyperlinks(data.investigationRecordLink);
        });

        it("Verifying Investigation page title", async () => {
            await expect<any>(executiveViewSearchPage.switchToNewWindow()).toContain(data.investigationPageTitle);
            executiveViewSearchPage.closeWindow();
            executiveViewSearchPage.switchToParentWindow();
        });

        it("Should click on 'orientation summary' Hyperlink", async () => {
            await executiveViewSearchPage.clickOnHyperlinks(data.orientationSummary);
        });

        it("Verifying orientation summary page title", async () => {
            await expect<any>(executiveViewSearchPage.switchToNewWindow()).toContain(data.orientationSummaryPageTitle);
            executiveViewSearchPage.closeWindow();
            executiveViewSearchPage.switchToParentWindow();
        });

        it("Should click the empty white text box above the Save button, enter test123.", async () => {
            await executiveViewSearchPage.setText(executiveViewSearchPage.executiveViewComments,data.executiveViewComments);
        });

        it("Should click on save button", async () => {
            await executiveViewSearchPage.click(executiveViewSearchPage.saveButton);
       });
    });
});