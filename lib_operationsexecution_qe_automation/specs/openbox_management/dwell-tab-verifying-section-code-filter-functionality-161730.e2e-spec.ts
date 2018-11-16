import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
import { DwellPage } from "../../pages/openbox_management/dwell.po";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();
let dwellPage = new DwellPage();

//Tc# 161730 - Box Management System App- DWELL TAB- Verifying 'SECTION CODE' Filter Functionality (via OUTGATED Trailer Summary Screen)
using(DataProvider.Tc_161730, async function (data) {

    describe("Box Management System App- DWELL TAB- Verifying 'SECTION CODE' Filter Functionality (via OUTGATED Trailer Summary Screen)", function () {

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

        it("Should click on 'Section Code' dropdown and verify the list will appear displaying one or more 'Section Code' options", async () => {
            await dwellPage.click(dwellPage.sectionCodeDropdown);
            expect(await dwellPage.sectionCodeDropdownOptions.count()).toBeGreaterThan(data.one); 
        });

        it("Verifying that 'Section Code' functionality", async () => {
            expect(await dwellPage.verifySectionCodeFunctionality(data.sectionCode)).toBeTruthy();
        });

        it("Should click on empty in 'Section Code' dropdown", async () => {
            await dwellPage.click(dwellPage.sectionCodeDropdownOptions.get(0));
        });

        it("Verifying that 'Section Code' value is empty", async () => {
            expect(await dwellPage.sectionCodeDropdown.getAttribute("value")).toBe(data.empty);
        });

    });

});