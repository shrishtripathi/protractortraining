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

//TC #127101 Teams_&_Tasks Filtering Roles
using(DataProvider.Tc_127101, async function (data) {

    describe("Filtering Roles", () => {

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

        it("Should hover on circle icon and select role management option", async () => {
            await administrationPage.hoverOnCircleIconAndSelectOption(data.optionName);
        });

        it("Should click on the filter button in the top right corner ", async () => {
            await administrationPage.click(administrationPage.userManagementFiltorButton);
        });

        it("Verifying that filter tabs will display", async () => {
            await expect<any>(administrationPage.verifyFilterTabsPresent()).toBeTruthy();
        });

        it("Should click the Module drop down arrow ", async () => {
            await administrationPage.click(administrationPage.moduleDropDown);
        });

        it("Should check the Administration box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAdministration);
        });

        it("Verifying that Roles with Administration will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionAdministration)).toBeTruthy();
        });

        it("Should uncheck the Administration box and check Capacity check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAdministration);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionOrderManagement);
        });

        it("Verifying that Roles with Capacity will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionOrderManagement)).toBeTruthy();
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

        it("Should click the Task List drop down arrow ", async () => {
            await administrationPage.click(administrationPage.taskListDropDown);
        });

        it("Should check the Account box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAccount);
        });

        it("Verifying that Roles with Account will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionAccount)).toBeTruthy();
        });

        it("Should uncheck the Account box and check Appointments check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAccount);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAppointments);
        });

        it("Verifying that Roles with Appointments will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionOrderManagement)).toBeTruthy();
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

        it("Should click the Trigger drop down arrow ", async () => {
            await administrationPage.click(administrationPage.triggerDropDown);
        });

        it("Should check the Cross Town Delay box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionCrossTownDelay);
        });

        it("Verifying that Roles with Cross Town Delay will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionCrossTownDelay)).toBeTruthy();
        });

        it("Should uncheck the Cross Town Delay box and check Excessive Transit check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionCrossTownDelay);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionExcessiveTransit);
        });

        it("Verifying that Roles with Excessive Transit will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionExcessiveTransit)).toBeTruthy();
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

        it("Should click the User Role drop down arrow ", async () => {
            await administrationPage.click(administrationPage.userRoleDropDown);
        });

        it("Should check the Application Support box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionApplicationSupport);
        });

        it("Should uncheck the Application Support box and check Appointment Owner check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionApplicationSupport);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionAppointmentOwner);
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

    });

});