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

//TC #126721 Teams_&_Tasks Filtering Teams
using(DataProvider.Tc_126721, async function (data) {

    describe("Filtering Teams", () => {

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

        it("Should hover on circle icon and select team management option", async () => {
            await administrationPage.hoverOnCircleIconAndSelectOption(data.optionName);
        });

        it("Should click on the filter button in the top right corner ", async () => {
            await administrationPage.click(administrationPage.teamManagementFilterButton);
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

        it("Should click the Team Leader drop down arrow ", async () => {
            await administrationPage.click(administrationPage.teamLeaderDropDown);
        });

        it("Should enter Jared Shepherd ", async () => {
            await administrationPage.setTextInInputField(administrationPage.teamLeaderSearchInput, data.searchText);
        });

        it("Should click on Reset All button", async () => {
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
