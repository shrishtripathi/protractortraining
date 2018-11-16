import { DataProvider } from "../../data/dataProvider";
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { UnitViewParameterPage } from "../../pages/freight_manager/unit-view-parameter.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";

let using = require('jasmine-data-provider');
let freightManager2Page = new FreightManager2Page();
let deliveryPage = new DeliveryPage();
let pickupviewPage = new PickupviewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let unitViewPage = new UnitViewPage();

//TC 181335: FM2 Parameters

describe('FM2 Parameters', () => {

    using(DataProvider.Tc_186622, async function (data) {

        it('Should Navigate to Freight Manager2 url', async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
        });

        it('Should Navigate to Delivery from Planning Tab', async () => {
            await freightManager2Page.selectOptionFromTab(data.tabName, data.option)
        });

        it('Should Select A- Area from Type', async () => {
            await deliveryPage.setSearchParameters(data.value, data.division, data.areaType, data.area);
        });

        it('Should enter Fleet Type Codes ', async () => {
            await deliveryPage.setTextToFleetTypeInputFields(data.value1, data.value2, data.value3, data.value4);
        });

        it('Should Click on Save Preferences Button', async () => {
            await deliveryPage.clickOnSavePreferencesButton();
            await deliveryPage.waitForActionToComplete()
        });

        it('Should Validate Success message after Saving Preferences', async () => {
            expect(await deliveryPage.preferenceUpdatedMessage.getText()).toBe(data.message)
        });

    });

    using(DataProvider.Tc_186644, async function (data) {

        it("Should select 'PICK UP' under planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.pickUpOption);
        });

        it("Click the dropdown tab underneath Type, click to select A - Area", async () => {
            await pickupviewPage.selectType();
        });

        it("Should type 'HJBT JBVAN' in division field ", async () => {
            await pickupviewPage.enterDivision(data.strDivison);
        });

        it("Should type 'MKT' in Area type field ", async () => {
            await pickupviewPage.clearAreaType();
            await pickupviewPage.enterAreaType(data.strAreaType);
        });

        it("Should type 'DA' in Area field ", async () => {
            await pickupviewPage.enterArea(data.strArea);
        });

        it("Should type 'I' in Tran Md  field ", async () => {
            await pickupviewPage.enterTranMd(data.strTranMd);
        });

        it("Click save pref on Pick up view page", async () => {
            await pickupviewPage.clickSavePrefsButton();
        });

        it("Verify save preference success message", async () => {
            await pickupviewPage.waitForResult()
            await pickupviewPage.actions.waitUntilElementPresenceOf(pickupviewPage.successOrErrorMessage)
            let verify_message: string = await pickupviewPage.getElementText(pickupviewPage.successOrErrorMessage)
            expect(verify_message).toContain(data.message);
        });

    });

    using(DataProvider.Tc_186638, async function (data) {

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