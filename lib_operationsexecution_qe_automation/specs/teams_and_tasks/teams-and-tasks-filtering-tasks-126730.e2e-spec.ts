import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { browser } from "protractor";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AdministrationPage } from "../../pages/teams_and_tasks/administration-page.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage = new PlatformHomePage();
let administrationPage = new AdministrationPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC #126730 Teams_&_Tasks Filtering Tasks
using(DataProvider.Tc_126730, async function (data) {

    describe("Filtering Tasks", () => {

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

        it("Should hover on circle icon and select task management option", async () => {
            await administrationPage.hoverOnCircleIconAndSelectOption(data.optionName);
        });

        it("Should click on the filter button in the top right corner ", async () => {
            await administrationPage.click(administrationPage.taskManagementFiltorButton);
        });

        it("Verifying that filter tabs will display", async () => {
            await expect<any>(administrationPage.verifyFilterTabsPresent()).toBeTruthy();
        });

        it("Should click the Business Unit drop down arrow ", async () => {
            await administrationPage.click(administrationPage.businessUnitDropDown);
        });

        it("Should check the DCS check box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionDCS);
        });

        it("Verifying that Teams with the DCS task will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionDCS)).toBeTruthy();
        });

        it("Should uncheck the DCS check box and check ICS check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionDCS);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionICS);
        });

        it("Verifying that Teams with the ICS task will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionICS)).toBeTruthy();
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

        it("Should click the Service Offering drop down arrow ", async () => {
            await administrationPage.click(administrationPage.serviceOfferingDropDown);
        });

        it("Should check the Backhaul check box", async () => {
            await await administrationPage.checkOrUncheckOptionFromDropDown(data.optionBackhaul);
        });

        it("Should uncheck the Backhaul check box and check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionBackhaul);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionBrokerage);
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

        it("Should click the Corporate Account drop down arrow ", async () => {
            await administrationPage.click(administrationPage.corporateAccountDropDown);
        });

        it("Should Type in '360' and click the 360Cc test co", async () => {
            await administrationPage.setTextInInputField(administrationPage.corporateAccountSearchInput, data.searchText);
            await administrationPage.waitForElementIsVisible(administrationPage.ccTestCo360);
            await administrationPage.click(administrationPage.ccTestCo360);
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

        it("Should click the Task Assignment Status  drop down arrow ", async () => {
            await administrationPage.click(administrationPage.taskAssignmentStatusDropDown);
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