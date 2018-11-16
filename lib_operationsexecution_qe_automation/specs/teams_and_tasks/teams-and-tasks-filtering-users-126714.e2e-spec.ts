import { DataProvider } from "../../data/dataProvider";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { PlatformHomePage } from "../../pages/teams_and_tasks/platform-homepage.po";
import { AdministrationPage } from "../../pages/teams_and_tasks/administration-page.po";
import { browser } from "protractor";

let myJbHuntHomePage = new MyJbHuntHomePage();
let platformHomePage = new PlatformHomePage();
let administrationPage = new AdministrationPage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC #126714 Teams_&_Tasks Filtering Users
using(DataProvider.Tc_126714, async function (data) {

    describe("Filtering Users", () => {

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

        it("Should hover on circle icon and select User Management option", async () => {
            await administrationPage.hoverOnCircleIconAndSelectOption(data.optionName);
        });

        it("Should click on the filter button in the top right corner ", async () => {
            await administrationPage.click(administrationPage.userManagementFiltorButton);
        });

        it("Verifying that filter tabs will display", async () => {
            await expect<any>(administrationPage.verifyFilterTabsPresent()).toBeTruthy();
        });

        it("Should click the Task Category drop down arrow ", async () => {
            await administrationPage.click(administrationPage.taskCategoryDropDown);
        });

        it("Should check the SCNEAB box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionSCNEAB);
        });

        it("Verifying that Teams with the SCNEAB task will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionSCNEAB)).toBeTruthy();
        });

        it("Should uncheck the SCNEAB box and check Customer Experience check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionSCNEAB);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionCustomerExperience);
        });

        it("Verifying that Teams with the Customer Experience task will appear", async () => {
            await expect<any>(administrationPage.verifyListPresent(data.optionCustomerExperience)).toBeTruthy();
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

        it("Should click the Task Name drop down arrow ", async () => {
            await administrationPage.click(administrationPage.taskNameDropDown);
        });

        it("Should check the CCI Account Responsibility box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionCCIAccountResponsibility);
        });

        it("Should uncheck the CCI Account Responsibility box and check CCI Location Responsibility check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionCCIAccountResponsibility);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionCCILocationResponsibility);
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

        it("Should click the Team Name drop down arrow ", async () => {
            await administrationPage.click(administrationPage.teamNameDropDown);
        });

        it("Should check the Test With a New Team box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionTestWithANewTeam);
        });

        it("Should uncheck the Test With a New Team box and check Next CCI check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionTestWithANewTeam);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionNextCCI);
        });

        it("Should click on Reset All button", async () => {
            await administrationPage.scrollUp();
            await administrationPage.click(administrationPage.resetAll);
        });

        it("Should click the Team Status drop down arrow ", async () => {
            await administrationPage.click(administrationPage.teamStatusDropDown);
        });

        it("Should check the Active box", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionActive);
        });

        it("Should uncheck the Active box and check Inactive check box ", async () => {
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionActive);
            await administrationPage.checkOrUncheckOptionFromDropDown(data.optionInActive);
        });

    });

});
