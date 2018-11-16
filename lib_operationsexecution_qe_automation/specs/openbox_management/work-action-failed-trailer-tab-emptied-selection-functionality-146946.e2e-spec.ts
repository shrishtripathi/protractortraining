import { DataProvider } from "../../data/dataProvider";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
import { DwellPage } from "../../pages/openbox_management/dwell.po";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();
let dwellPage = new DwellPage();

//Tc# 146946 - BOX MANAGMENT SYSTEM- 'WORK ACTION'- FAILED- TRAILER TAB- 'EMPTIED' SELECTION FUNCTIONALITY (via Action Button Selection)
using(DataProvider.Tc_146946, async function (data) {
describe("BOX MANAGMENT SYSTEM- 'WORK ACTION'- FAILED- TRAILER TAB- 'EMPTIED' SELECTION FUNCTIONALITY (via Action Button Selection)", function () {
    let loadNumber: string;
    //TC_142983
        it("Should open Open Box Management url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            await expect<any>(boxManagementSystemHomePage.getPageTitle()).toBe(data.Tc_142983.boxManagementSystemPageTitle);
        });

        it("Should click on trailer tab and selct emptied option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.Tc_142983.tabName, data.Tc_142983.optionName);
        });

        it("Should click on assigned to radio button", async () => {
            await trailerPage.click(trailerPage.assignedToRadioButton);
        });

        it("Should select 'JOPS512' to assigned to dropdown", async () => {
            await trailerPage.setAssignedToDropdown(data.Tc_142983.assignedToDropdownValue);
            await trailerPage.waitForActionToComplete();
        });

        it("Should click on publication", async () => {
            await trailerPage.click(trailerPage.publication);
        });

    

    //TC_146946    

        it("Should click on load number checkbox", async () => {
            await dwellPage.click(trailerPage.loadNumberCheckBox);
        });

        it("Should take note of load number", async () => {
            loadNumber = await dwellPage.getElementText(dwellPage.loadNumber);
        });

        it("Should click on the option labeled 'Work Action' from 'Action' button", async () => {
            await dwellPage.mouseOverToTab(trailerPage.ActionLink);
            await dwellPage.click(trailerPage.workActionSubLink);
        });

        it("Should select 'Failed' option from Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.workActionDropdownOptions, data.fialed, dwellPage.workActionDropdown);
        });

        it("Should select 'Chargeable' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.chargeable, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Claims' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.claims, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'CANNOT VALIDATE' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.canNotValidate, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Contract' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.contract, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Equipment' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.equipment, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Exception' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.exception, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Free Time' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.freeTime, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Mexico' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.mexico, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Notification' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.notification, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Operations' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.operations, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'SCHED LIVE UNLD' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.schedLiveUnld, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'System' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.system, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'TRACKING ERROR' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.trackingError, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'WAITING AUTH' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.waitingAuth, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Weather' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.weather, dwellPage.subWorkActionDropdown);
        });

        it("Should click on 'CANCEL' button", async () => {
            await trailerPage.click(dwellPage.cancelButton);
        });

    });

});