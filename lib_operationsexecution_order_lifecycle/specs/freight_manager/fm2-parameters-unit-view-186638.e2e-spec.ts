import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { UnitViewPage } from '../../pages/freight_manager/unit-view.po';
import { UnitViewParameterPage } from "../../pages/freight_manager/unit-view-parameter.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let unitViewPage = new UnitViewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let using = require('jasmine-data-provider');

//TC#186638:FM2 Parameters Unit View

using(DataProvider.Tc_186638, async function (data) {

    describe("FM2 Parameters Unit View", function () {

        it("Open My JBHunt url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.freightManager2);
        });

        it("Should select 'Unit View' under planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
        });

        it("Should click on 'Parameter' Button", async () => {
            await unitViewPage.clickOnParameterButton();
        });

        it("Should set Division to 'HJBT JBVAN'", async () => {
            await unitViewParameterPage.selectDivision(data.division);
        });

        it("Should click the radial button next to Board,Underneath Select Type ", async () => {
            await unitViewParameterPage.setParameterRadioAndChechBox(data.fieldSelectType, data.selectTypeOption)
        });

        it("Should click the radial button next to All,Underneath Begin Date ", async () => {
            await unitViewParameterPage.setParameterRadioAndChechBox(data.fieldBeginDate, data.beginDateAllOption)
        });

        it("Should click the radial button next to All,Underneath End Date", async () => {
            await unitViewParameterPage.setParameterRadioAndChechBox(data.fieldEndDate, data.endDateAllOption)
        });

        it("Should click the radial button next to Show All,Underneath Show Preplanned Units,  ", async () => {
            await unitViewParameterPage.setParameterRadioAndChechBox(data.fieldPreplannedUnits, data.preplannedUnitsShowAllOption)
        });

        it("Should click the checkbox next to All,Underneath Unit Status", async () => {
            await unitViewParameterPage.selectCheckBoxOption(data.fieldUnitStatus, data.unitStatusAllOption)
        });

        it("Should click the checkbox next to All,Underneath Next Utilization", async () => {
            await unitViewParameterPage.selectCheckBoxOption(data.fieldNextUtilization, data.NextUtilizationAllOption)
        });

        it("should enter Board Codes", async () => {
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 1, data.boardCode1);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 2, data.boardCode2);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 3, data.boardCode3);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 4, data.boardCode4);
        });

        it("Should click Order Number, Underneath Available Fields, then click the green + icon.", async () => {
            await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.orderNumber);
            let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.orderNumber);
            expect(flag).toBeTruthy();
        });

        it("Should click Driver Alpha Code, Underneath Available Fields, then click the green + icon.", async () => {
            await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.driverAlphaCode);
            let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.driverAlphaCode);
            expect(flag).toBeTruthy();
        });

        it("Should click Assigned Trailer Type, Underneath Available Fields, then click the green + icon.", async () => {
            await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.assignedTrailerType);
            let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.assignedTrailerType);
            expect(flag).toBeTruthy();
        });

        it("Should click Delv Appt Date, Underneath Available Fields, then click the green + icon. ", async () => {
            await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.delvApptDate);
            let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.delvApptDate);
            expect(flag).toBeTruthy();
        });

        it("Should click Driver Hazmat Qualified, Underneath Available Fields, then click the green + icon", async () => {
            await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.driverHazmat);
            let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.driverHazmat);
            expect(flag).toBeTruthy();
        });

        it("Should click Driver Fleet Manager, Underneath Available Fields, then click the green + icon.", async () => {
            await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.driverFleetManager);
            let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.driverFleetManager);
            expect(flag).toBeTruthy();
        });

        it("Should  click Fleet Code, Underneath Available Fields, then click the green + icon.", async () => {
            await unitViewParameterPage.selectValueFromAvailableFieldsDropDown(data.fleetCode);
            let flag: boolean = await unitViewParameterPage.selectValueFromSelectedFieldsDropDown(data.fleetCode);
            expect(flag).toBeTruthy();
        });

        it("Click on Save Parameter Button", async () => {
            await unitViewParameterPage.clickOnSaveParameterButton();
        });
    });
});