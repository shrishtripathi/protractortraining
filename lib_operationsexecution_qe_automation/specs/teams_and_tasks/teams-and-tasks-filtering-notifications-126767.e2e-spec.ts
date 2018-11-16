import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AdministrationPage } from "../../pages/teams_and_tasks/administration-page.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage = new PlatformHomePage();
let administrationPage = new AdministrationPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC #126767 Teams_&_Tasks Filtering Roles
using(DataProvider.Tc_126767, async function (data) {

    describe("Filtering Notifications", () => {

        it("Launch 360 Platform", async () => {
            await platformHomePage.navigateToAppHome(platformHomePage.platform360URL);
        });

        it("Verifying that redirected to 360 degrees platform Page", async () => {
            await expect<any>(platformHomePage.getPageTitle()).toBe(data.platformPageTitle);
        });

        it("Should click on administration", async () => {
            await platformHomePage.clickOnAdministration();
        });

        it("Verifying that redirected to administration Page", async () => {
            await expect<any>(administrationPage.getPageTitle()).toBe(data.pageTitle);
        });

        it("Should hover on circle icon and select Notification Management option", async () => {
            await administrationPage.hoverOnCircleIconAndSelectOption(data.optionName);
        });

        it("Should click on the filter button in the top right corner ", async () => {
            await administrationPage.click(administrationPage.notificationManagementFiltorButton);
        });

        it("Verifying that filter tabs will display", async () => {
            await expect<any>(administrationPage.verifyFilterTabsPresent()).toBeTruthy();
        });

        it("Should click the Category drop down arrow ", async () => {
            await administrationPage.click(administrationPage.categoryDropDown);
        });

        it("Should check the Account box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAccount);
        });

        it("Verifying that Notifications with Account will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionAccountText)).toBeTruthy();
        });

        it("Should uncheck the Account box and check EDI Related check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAccount);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionEDIRelated);
        });

        it("Verifying that Notifications with EDI Related will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionEDIRelatedText)).toBeTruthy();
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
            await administrationPage.click(administrationPage.categoryDropDown);
        });

        it("Should click the Subcategory drop down arrow ", async () => {
            await administrationPage.click(administrationPage.subCategoryDropDown);
        });

        it("Should check the Commitment box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionCommitment);
        });

        it("Verifying that Notifications with Account will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionCommitmentText)).toBeTruthy();
        });

        it("Should uncheck the Commitment box and check EDI Errors check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionCommitment);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionEDIErrors);
        });

        it("Verifying that Notifications with EDI Errors will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionEDIErrorsText)).toBeTruthy();
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
            await administrationPage.click(administrationPage.subCategoryDropDown);
        });

        it("Should click the Type drop down arrow ", async () => {
            await administrationPage.click(administrationPage.typeDropDown);
        });

        it("Should check the Order Delivered box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionOrderDelivered);
        });

        it("Verifying that Notifications with Order Delivered will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionOrderDeliveredText)).toBeTruthy();
        });

        it("Should uncheck the Order Delivered box and check Appointment Reset Non-Order Creator check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionOrderDelivered);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAppointmentResetNonOrderCreator);
        });

        it("Verifying that Notifications with Appointment Reset Non-Order Creator will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionAppointmentResetNonOrderCreatorText)).toBeTruthy();
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
            await administrationPage.click(administrationPage.typeDropDown);
        });

        it("Should click the Criteria drop down arrow ", async () => {
            await administrationPage.click(administrationPage.criteriaDropDown);
        });

        it("Should check the Associated User box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAssociatedUser);
        });

        it("Should uncheck the Associated User box and check Bill To check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAssociatedUser);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionBillTo);
        });

        it("Verifying that Notifications with Bill To will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionBillToText)).toBeTruthy();
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
            await administrationPage.click(administrationPage.criteriaDropDown);
        });

        it("Should click the Subscribed User (Internal) drop down arrow ", async () => {
            await administrationPage.click(administrationPage.subscribedUserInternalDropDown);
        });

        it("Should check the Ganesh Kumar Shanmugam box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionGaneshKumarShanmugam);
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
            await administrationPage.click(administrationPage.subscribedUserInternalDropDown);
        });

        it("Should click the Created By drop down arrow ", async () => {
            await administrationPage.click(administrationPage.createdByDropDown);
            await administrationPage.scrollDown();
        });

        it("Should check the Caroline Snodgrass box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionCarolineSnodgrass);
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
            await administrationPage.click(administrationPage.createdByDropDown);
        });

        it("Should click the Last Updated By drop down arrow ", async () => {
            await administrationPage.click(administrationPage.lastUpdatedByDropDown);
            await administrationPage.scrollDown();
        });

        it("Should check the RCON774 box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionRCON774);
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
            await administrationPage.click(administrationPage.lastUpdatedByDropDown);
        });

        it("Should click the Status drop down arrow ", async () => {
            await administrationPage.click(administrationPage.notificationStatusDropDown);
            await administrationPage.scrollDown();
        });

        it("Should check the Active box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionActive);
        });

        it("Should uncheck the Active box and check Inactive check box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionActive);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionInActive);
        });

    });

});
