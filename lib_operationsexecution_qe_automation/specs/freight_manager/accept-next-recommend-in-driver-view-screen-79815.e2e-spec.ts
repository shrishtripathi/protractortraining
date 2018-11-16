import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DriverViewPage } from "../../pages/freight_manager/driver-view.po";
import { DriverSchedulePage } from "../../pages/freight_manager/driver-schedule.po";
import { DataProvider } from "../../data/dataProvider";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let driverViewPage = new DriverViewPage();
let driverSchedulePage = new DriverSchedulePage();
let using = require('jasmine-data-provider');

//TC 79815:FM2_Regression_12 Accept next recommend in Driver View screen
using(DataProvider.Tc_79815, async function (data) {

    describe("Accept next recommend in Driver View screen", function () {

        it("Should open Freight Manager2 url", async () => {
            await myJbHuntHomePage.openFm2Url();
        });

        it("Verifying that Freight Manger page is displayed", async function () {
            await expect(await freightManager2Page.verifyFreightManagerPage()).toBe(data.app);
        });

        it("Should click on Driver View option under Driver tab", async function () {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
        });

        it("Verifying that Driver View screen is displayed", async function () {
            await expect(await driverViewPage.verifyPage(data.verifyText)).toBe(data.verifyText);
        });

        it("Should enter the text L1R in Board/Group code 1 field", async function () {
            await driverViewPage.setTextInInputField(data.fieldName, data.boardGroupCode1, 1);
        });

        it("Should enter the text L1C in Board/Group code 2 field", async function () {
            await driverViewPage.setTextInInputField(data.fieldName, data.boardGroupCode2, 2);
        });

        it("Should enter the text L1B in Board/Group code 3 field", async function () {
            await driverViewPage.setTextInInputField(data.fieldName, data.boardGroupCode3, 3);
            await driverViewPage.setTextInInputField(data.fieldName, data.emptyBoardCode, 4);
            await driverViewPage.setTextInInputField(data.fieldName, data.emptyBoardCode, 5);
            await driverViewPage.setTextInInputField(data.fieldName, data.emptyBoardCode, 6);
        });

        it("Should click on search button in driver view page", async function () {
            await driverViewPage.clickSearchButton();
        });

        it("Should click on driver's R underneath the N/R column untill find a driver that has Tractor and Alpha buttons that are selectable", async function () {
            await driverViewPage.selectDriverRUnderneathNRColumn(data.driverViewTableId, data.columnName);
        });

        it("Verifying that Driver View screen is displayed", async () => {
            await expect<any>(await driverViewPage.verifyPage(data.verifyText)).toBe(data.verifyDriverView);
        });

        it("Should pull that drvr back up (R) and all accept buttons will now be greyed out.", async () => {
            await expect(await driverViewPage.verifyDriverAlphaTractorButtonsAvailability()).toBeTruthy();
        });
    });
});