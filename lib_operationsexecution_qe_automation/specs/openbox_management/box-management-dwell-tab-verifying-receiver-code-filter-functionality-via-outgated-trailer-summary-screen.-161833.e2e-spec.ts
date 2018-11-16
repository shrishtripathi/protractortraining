import { DataProvider } from "../../data/dataProvider";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
import { DwellPage } from "../../pages/openbox_management/dwell.po";
import { async } from "q";
import { ElementFinder } from "protractor";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();
let dwellPage = new DwellPage();

//Tc# 161833 - Box Management System App- DWELL TAB- Verifying 'RECEIVER CODE'  Filter Functionality (via OUTGATED Trailer Summary Screen)
using(DataProvider.Tc_161833, async function (data) {

    describe("DWELL TAB- Verifying 'RECEIVER CODE'  Filter Functionality (via OUTGATED Trailer Summary Screen)", function () {
        let recieverCode;

        it("Should open Open Box Management url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on Dwell tab and selct Outgated option", async () => {
            await boxManagementSystemHomePage.clickOnTabAndSelectOption(data.tabName, data.optionName);
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
            await dwellPage.click(trailerPage.publicationFirstRow);
            await dwellPage.waitForActionToComplete();
        });

        it("Should click on 'Receiver Code' dropdown and verify the list will appear displaying one or more 'Receiver Code' options", async () => {
            await dwellPage.click(dwellPage.receivercodeDropdown);
            expect(await dwellPage.receivercodeDropdownOptions.count()).toBeGreaterThan(data.one);
        });

        it(`Click on one of the 'Receiver Codes' `, async () => {
            await dwellPage.click(await dwellPage.receivercodeDropdownOptions.get(2))
        });

        it("Verifying that 'Receiver Code' functionality", async () => {
            recieverCode = await dwellPage.getElementText(await dwellPage.receivercodeDropdownOptions.get(2))
            await dwellPage.verifyColumnDetails('Receiver Code', recieverCode)
        });

        it("Should click on empty in 'Receiver Code' dropdown", async () => {
            await dwellPage.click(await dwellPage.receivercodeDropdownOptions.get(0));
        });

    });

});