import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { DriverViewPage } from "../../pages/freight_manager/driver-view.po";
import { DriverSchedulePage } from "../../pages/freight_manager/driver-schedule.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let driverViewPage = new DriverViewPage();
let driverSchedulePage = new DriverSchedulePage();
let using = require('jasmine-data-provider');

//TC_79817: FM2_Regression_13 Delete and edit driver schedule in Driver View
using(DataProvider.Tc_79817, async function (data) {

    describe("User delete and edit driver'schedule in driver view", function () {

        it("Should open Freight Manager2 url", async () => {
            await myJbHuntHomePage.openFm2Url();
        });

        it("Verifying that Freight Manger page is displayed", async function () {
            await expect(await freightManager2Page.verifyFreightManagerPage()).toBe(data.freightManager);
        });

        it("Should click on Driver View option under Driver tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabDriver, data.optionDriverView)
        });

        it("Should enter L1C into Board/Group textbox", async () => {
            await driverViewPage.setTextInInputField(data.fieldName, data.BoardCode, 1);
            await driverViewPage.setTextInInputField(data.fieldName, data.emptyBoardCode, 2);
            await driverViewPage.setTextInInputField(data.fieldName, data.emptyBoardCode, 3);
            await driverViewPage.setTextInInputField(data.fieldName, data.emptyBoardCode, 4);
        });

        it("Should click on search button in driver view page", async () => {
            await driverViewPage.clickSearchButton();
        });

        it("Should click on any time listed text underneath the start column", async () => {
            await driverViewPage.selectTimeListedValue(data.columnName, data.requiredText, data.tableId);
        });

        it("Verifying that Drivers work schedule is displayed", async () => {
            await driverSchedulePage.verifyDriverScedulePage(data.iconName, 1);
            await expect<any>(freightManager2Page.getLabelText(data.getLabelText)).toBe(data.getLabelText);
        });

        it("Should click on the edit icon beside the schedule to edit", async () => {
            await driverSchedulePage.clickOnIcons(data.editThisRowIcon, 1);
        });

        it("Verifying that schedule is edited", () => {
            expect(driverSchedulePage.greenCheckMarkAvailability(data.changesToThisRow)).toBeTruthy();
        });

        it("Should click on the green check mark beside the schedule to update", async () => {
            await driverSchedulePage.clickOnIcons(data.changesToThisRow, 1);
        });

        it("Verifying that schedule has been successfully updated.", () => {
            expect<any>(driverSchedulePage.verifyMessages(data.changesToThisRow)).toBe(data.successfullyUpdatedMsg);
        });

        it("Should click on the first trash can icon beside the schedule to delete", async () => {
            await driverSchedulePage.clickOnIcons(data.deleteThisRowIcon, 1);
        });

        it("Verifying that schedule is deleted", async () => {
            await expect<any>(driverSchedulePage.verifyMessages(data.deleteSuccessMessage)).toBe(data.deletedMessage);
        });

    });

});