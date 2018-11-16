import { DataProvider } from "../../data/dataProvider";
import { BoxManagementSystemHomePage } from "../../pages/openbox_management/box-management-system-homepage.po";
import { TrailerPage } from "../../pages/openbox_management/trailer.po";
import { DwellPage } from "../../pages/openbox_management/dwell.po";

let using = require('jasmine-data-provider');
let boxManagementSystemHomePage = new BoxManagementSystemHomePage();
let trailerPage = new TrailerPage();
let dwellPage = new DwellPage();

//Tc# 159177 - Box Management System App- DWELL TAB- 'VIEW APPT. CHANGES' Selection (via OUTGATED Trailer Summary Screen)
using(DataProvider.Tc_159177, async function (data) {

    describe("DWELL TAB- View appt changes via OUTGATED Trailer Summary Screen", function () {
        let loadNumber;

        it("Should open Open Box Management url", async () => {
            await boxManagementSystemHomePage.navigateToAppHome(boxManagementSystemHomePage.openBoxManagementUrl);
        });

        it("Verifying that redirected to box management system", async () => {
            expect<any>(await boxManagementSystemHomePage.getPageTitle()).toBe(data.boxManagementSystemPageTitle);
        });

        it("Should click on Dwell tab and selct deramped option", async () => {
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

       
        it("Should click on checkbox", async () => {
            await dwellPage.click(dwellPage.loadNumberCheckBox);
            await dwellPage.waitForActionToComplete();
        });

        it("Should take note of load number", async () => {
            loadNumber = await trailerPage.getElementText(dwellPage.loadNumber);
        });

        it("Should click on view appt changes button", async () => {
            await dwellPage.click(dwellPage.viewApptChangesButton);
            await dwellPage.waitForActionToComplete();
        });
                
        it("Verifying appt changespop up columns", async () => {
            await expect<any>(dwellPage.verifyAppointementChangesColumnsData()).toEqual(data.columnName);
        });

        it("Verifyingchange 'change data' contains data", async () => {
            await expect<any>(dwellPage.getText(dwellPage.changeDataValue)).not.toBeNull();
        });

        it("Verifyingchange 'change creator' contains data", async () => {
            await expect<any>(dwellPage.getText(dwellPage.changeCreatorValue)).not.toBeNull();
        });

        it("Should click on close button", async () => {
            await trailerPage.click(trailerPage.closeButton);
        });

    });

});