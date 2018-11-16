import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
import { DwellPage } from "../../pages/openbox_management/dwell.po";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();
let dwellPage = new DwellPage();

//Tc# 162025 - Box Management System App- DWELL TAB- Verifying 'LOAD BILLED' Filter Functionality (via OUTGATED Trailer Summary Screen)
using(DataProvider.Tc_162025, async function (data) {

    describe("Box Management System App- DWELL TAB- Verifying 'LOAD BILLED' Filter Functionality (via OUTGATED Trailer Summary Screen)", function () {

        it("Should open Open Box Management url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on Dwell tab and selct Outgated option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName,data.optionName);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.outGatedSummaryScreenTitle);
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

        it("Should click on 'LOAD BILLED' dropdown and verify the list will appear displaying the option to select a 'Y' or an 'N' ", async () => {
            await dwellPage.click(dwellPage.loadBilledDropdown);
            expect(await dwellPage.loadBilledDropdownOptions.count()).toBeGreaterThan(data.one); 
        });

        it("Verifying that Load Billed functionality", async () => {
            expect(await dwellPage.verifyLoadBilledFunctionality()).toBeTruthy();
        });

        it("Should click on empty in 'Load Billed' dropdown", async () => {
            await dwellPage.click(dwellPage.loadBilledDropdownOptions.get(0));
        });

        it("Verifying that Load Billed value is empty", async () => {
            expect(await dwellPage.loadBilledDropdown.getAttribute("value")).toBe(data.empty);
        });

    });

});