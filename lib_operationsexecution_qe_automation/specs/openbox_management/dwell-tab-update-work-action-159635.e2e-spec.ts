import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
import { DwellPage } from "../../pages/openbox_management/dwell.po";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();
let dwellPage = new DwellPage();

//Tc# 159635 - Box Management System App- DWELL TAB- UPDATE WORK ACTION- FAILED (via OUTGATED Trailer Summary Screen)
using(DataProvider.Tc_159635, async function (data) {
describe("Box Management System App- DWELL TAB- UPDATE WORK ACTION- FAILED (via OUTGATED Trailer Summary Screen)", function () {

    let loadNumber;
        //TC_161680
        it("Should open Open Box Management url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.Tc_161680.boxManagementSystemPageTitle);
        });

        it("Should click on Dwell tab and selct Outgated option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.Tc_161680.tabName, data.Tc_161680.optionName);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.Tc_161680.outGatedSummaryScreenTitle);
        });

        it("Should click on 'NOTASGN' to radio button", async () => {
            await dwellPage.click(dwellPage.notasgnRadioButton);
        });

        it("Should click on Search button", async () => {
            await dwellPage.click(dwellPage.searchButton);
            await dwellPage.waitForActionToComplete();
        });

        it("Should click on publication", async () => {
            await dwellPage.click(trailerPage.publication);
            await dwellPage.waitForActionToComplete();
        });

        //TC_159635

        it("Should click on load number checkbox", async () => {
            await dwellPage.click(dwellPage.loadNumberCheckBox);
            await dwellPage.waitForActionToComplete();
        });

        it("Should take note of load number", async () => {
            loadNumber = await dwellPage.getElementText(dwellPage.loadNumber);
        });

        it("Should click on Update Work Action button", async () => {
            await dwellPage.click(dwellPage.updateWorkActionButton);
            await dwellPage.waitForActionToComplete();
        });

        it("Should select 'Failed' option from Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.workActionDropdownOptions, data.fialed, dwellPage.workActionDropdown);
        });

        it("Should select 'Appointment' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.appointment, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Chargeable' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.chargeable, dwellPage.subWorkActionDropdown);
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

        it("Should select 'Jbhunt Capacity' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.jbhuntCapacity, dwellPage.subWorkActionDropdown);
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

        it("Should select 'Suggested Appt' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.suggestedAppt, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'System' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.system, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'Weather' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.weather, dwellPage.subWorkActionDropdown);
        });

        it("Should select 'YardPull' option from Sub Work Action dropdown", async () => {
            await dwellPage.setOptionFromDropDown(dwellPage.subWorkActionDropdownOptions, data.yardPull, dwellPage.subWorkActionDropdown);
        });

        it("Should click on 'CANCEL' button", async () => {
            await trailerPage.click(dwellPage.cancelButton);
        });
    });

});