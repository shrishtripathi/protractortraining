import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { browser } from "protractor";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AdministrationPage } from "../../pages/teams_and_tasks/administration-page.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage = new PlatformHomePage();
let administrationPage = new AdministrationPage();
let using = require('jasmine-data-provider');
//TC 126653 Create notification
using(DataProvider.TC_126653, async function (data) {
    describe("Create notification", () => {

        it("Launch 360 Platform", async () => {
            await platformHomePage.navigateToAppHome(platformHomePage.platform360URL);           
        });

        it("Verifying that redirected to 360degrees platform Page", async () => {  
            await expect<any>(platformHomePage.getPageTitle()).toBe(data.platformPageTitle);
        });

        it("Should click on administration", async () => {
            await platformHomePage.clickOnAdministration();
        });

        it("Verifying that redirected to administration Page", async () => {
            await expect<any>(administrationPage.getPageTitle()).toBe(data.pageTitle);
        });

        it("Should hover on circle icon and select Notification management option", async () => {
            await administrationPage.hoverOnCircleIconAndSelectOption(data.optionName);
        });

        it("Should click on Three Dots Menu", async () => {
            await administrationPage.click(administrationPage.threeDots);
        });

        it("Should click on Create Notification ", async () => {
            await administrationPage.click(administrationPage.createNotification);
        });

        it("Should select 'Account' to notificaton category dropdown", async () => {
            await administrationPage.setCategoryDropdowns(data.notificationCategoryDropdownName, data.taskCategoryOption);
        });

        it("Should select 'Commitment' to notificaton sub category dropdown", async () => {
            await administrationPage.setCategoryDropdowns(data.notificationSubCategoryDropdownName, data.notificationSubCategoryOption);
        });

        it("Should click the notification type drop down and select Commitment Expiration", async () => {
            await administrationPage.setDropDown(administrationPage.notificationTypeDropdown, data.notificationTypeDropdownOption);
        });

        it("Should click on general dropdown arrow ", async () => {
            await administrationPage.click(administrationPage.generalDropDownArrow);
        });

        it("Should enetr '1' to Days Till Expiration field ", async () => {
            await administrationPage.setText(administrationPage.daysTillExpirationInputField, data.daysTillExpirationFieldValue);
        });

        it("Should click on account dropdown arrow ", async () => {
            await administrationPage.click(administrationPage.accountDropDownArrow);
        });

        it("Should click corportae account dropdown and select '360Cc Test Co, 36LO7,' ", async () => {
            await administrationPage.setCorporateAccount(data.corporateAccountText, data.corporateAccountOption);
        });

        it("Should click on add contact button", async () => {
            await administrationPage.click(administrationPage.addContactButton);
        });

        it("Should click the contact type drop down and select internal", async () => {
            await administrationPage.setDropDown(administrationPage.contactTypeDropdown, data.contacTtypeDropdownOption);
        });

        it("Should enetr 'Jared Shepherd' to contact name input field ", async () => {
            await administrationPage.setText(administrationPage.contactNameInputField, data.contactName);
        });

        it("Should click on jared shepherd", async () => {
            await administrationPage.click(administrationPage.contactNameOption);
        });

        it("Should click on create Button", async () => {
            await administrationPage.click(administrationPage.createButton);
        });

        it("Verifying success message", async () => {
            await expect<any>(administrationPage.verifySuccessMessage(administrationPage.successMessage)).toBe(true);
        });

        it("Should click on notification", async () => {
            await administrationPage.click(administrationPage.notification);
        });

        it("Should click on inactive button", async () => {
            await administrationPage.clickOnInactivateButton();
        });

        it("Should click on continue button", async () => {
            await administrationPage.click(administrationPage.continueButton);
        });

        it("Verifying notification is inactive", async () => {
            await expect<any>(administrationPage.verifyNotificationIsInactive()).toContain(data.classAttribute);
        });
    });
});