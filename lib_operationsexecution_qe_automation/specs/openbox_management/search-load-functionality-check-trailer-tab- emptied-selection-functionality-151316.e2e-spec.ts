import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();

//Tc# 151316 - Box Management System- SEARCH LOAD FUNCTIONALITY CHECK (Trailer Summary Screen)- Trailer Tab- 'EMPTIED' Selection Functionality
using(DataProvider.Tc_151316, async function (data) {

    describe("Box Management- Precondition Test Case for Trailer Tab 'EMPTIED' Selection Test Cases", function () {
        let loadNumber;

        it("Should open Fleet Status url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            await expect<any>(boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on trailer tab and selct emptied option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName, data.optionName);
        });

        it("Should click on assigned to radio button", async () => {
            await trailerPage.click(trailerPage.assignedToRadioButton);
        });

        it("Should select 'JOPS512' to assigned to dropdown", async () => {
            await trailerPage.setAssignedToDropdown(data.assignedToDropdownValue);
            await trailerPage.waitForActionToComplete();
        });

        it("Should click on publication", async () => {
            await trailerPage.click(trailerPage.publication);
        });

        it("Should take note of load number", async () => {
            loadNumber = await trailerPage.getElementText(trailerPage.loadNumber);
        });

        it("Should click on search load radio button", async () => {
            await trailerPage.click(trailerPage.searchLoadRadioButton);
        });

        it("Should enter load number", async () => {
            await trailerPage.setText(trailerPage.searchLoadInputBox, loadNumber);
        });

        it("Should click on Magnifying Glass Icon", async () => {
            await trailerPage.click(trailerPage.magnifyingGlass);
        });

        it("Should verify first action button options", async () => {
            await expect<any>(trailerPage.verifyActionOptions()).toBe(data.actionOptions);
        });

        it("Should verify load number action button options", async () => {
            await expect<any>(trailerPage.verifyLoadNumberActionOptions()).toBe(data.loadNumberOptions);
        });

    });
});