import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
import { DwellPage } from "../../pages/openbox_management/dwell.po";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();
let dwellPage = new DwellPage();

//Tc# 161958 - Box Management System App- DWELL TAB- Verifying 'RECEIVER NAME'  Filter Functionality (via OUTGATED Trailer Summary Screen)
using(DataProvider.Tc_161958, async function (data) {

    describe("Box Management System App- DWELL TAB- Verifying 'RECEIVER NAME'  Filter Functionality (via OUTGATED Trailer Summary Screen)", function () {

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

        it("Should click on 'RECEIVER NAME' dropdown and verify the list will appear displaying one or more 'RECEIVER NAME' options", async () => {
            await dwellPage.click(dwellPage.receiverNameDropdown);
            expect(await dwellPage.receiverNameDropdownOptions.count()).toBeGreaterThan(data.one); 
        });

        it("Verifying that 'RECEIVER NAME' functionality", async () => {
            expect(await dwellPage.verifyReceiverNameFunctionality(data.receiverName)).toBeTruthy();
        });

        it("Should click on empty in 'RECEIVER NAME' dropdown", async () => {
            await dwellPage.click(dwellPage.receiverNameDropdownOptions.get(0));
        });

        it("Verifying that 'RECEIVER NAME' value is empty", async () => {
            expect(await dwellPage.receiverNameDropdown.getAttribute("value")).toBe(data.empty);
        });

    });

});