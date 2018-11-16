import { DataProvider } from "../../data/dataProvider";
import { CdrapHomePage } from "../../pages/cdrap/cdrap-home-page.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { browser } from "protractor";
import { LocationAdministrationPage } from "../../pages/cdrap/location-administartion-page.po";
import { TextTemplatePage } from "../../pages/cdrap/text-template-admin.po";

let cdrapHomePage = new CdrapHomePage();
let commonFunctions = new CommonFunctions();
let textTemplatepage=new TextTemplatePage();
let using = require('jasmine-data-provider');

//TC #141394: CDRAP_Regression_24 Company admin, test message templates
using(DataProvider.Tc_141394, async function (data) {

    describe("CDRAP_Regression_24 Company admin, test message templates", () => {

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

        //TC 141394

        it("Click the Company Admin hyperlink", async () => {
            await cdrapHomePage.clickOnLink(data.companyAdminLink);
        });

        it("Verifying that Company Admin screen is displayed", async () => {
            await expect(cdrapHomePage.getPageTitle()).toContain(data.companyAdminTitle);
        });
        it("Click the Text Message Templates tab. ", async () => {
            await cdrapHomePage.click(cdrapHomePage.textMessageTemplatesButton);
        });
        it("Click the Create New Template button. . ", async () => {
            await cdrapHomePage.click(cdrapHomePage.createNewTemplateButton);
        });
        it("In the empty white text box enter Test 123, click the OK button. ", async () => {
            await textTemplatepage.enterTemplateName(data.templateName);
        });
        it("In the text box next to Description, enter 123tesT. ", async () => {
            await textTemplatepage.setTextInInputField(textTemplatepage.templateDescription,data.templateDescription);
        });
        it("In the text box next to Text, enter Test123.  ", async () => {
            await textTemplatepage.setTextInInputField(textTemplatepage.templateText,data.templateName);
        });
        it("Click the Save button.. . ", async () => {
            await textTemplatepage.click(textTemplatepage.saveButton);
            expect(await textTemplatepage.verifyTemplate()).toBeTruthy();
        });
        it("Click the Edit button.  ", async () => {
            await textTemplatepage.click(textTemplatepage.editButton);
            expect(await textTemplatepage.verifyEditTemplate()).toBeTruthy();
        });
        it("Click the Delete button. ", async () => {
            await textTemplatepage.click(textTemplatepage.deleteButton);
        });
        it("Click the OK button. ", async () => {
            await browser.switchTo().alert().accept();
        });
        it("Verify that the template you created will no longer be displayed underneath Templates. ", async () => {
            expect(await textTemplatepage.verifyCreatedTemplateNotDisplayed()).toBeTruthy();
        });


        
    });

});
