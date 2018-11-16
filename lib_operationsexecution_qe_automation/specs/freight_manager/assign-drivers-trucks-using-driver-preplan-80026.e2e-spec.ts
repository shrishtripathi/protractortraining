import { MyJbHuntHomePage } from "../../Pages/my-jbhunt-home.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { UnitViewParameterPage } from "../../pages/freight_manager/unit-view-parameter.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { DriverViewPage } from "../../pages/freight_manager/driver-view.po";
import { AssingnDriver } from "../../pages/freight_manager/assign-driver.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let unitViewParameterPage = new UnitViewParameterPage();
let freightManager2Page = new FreightManager2Page();
let driverViewPage = new DriverViewPage();
let assingnDriver = new AssingnDriver();
let using = require('jasmine-data-provider');
// TC_80026: FM2_Regression_17 Assign Drivers to empty trucks using driver preplan screen
using(DataProvider.Tc_80026, async function (data) {

    describe("Assign Drivers to empty trucks using driver preplan screen", function () {
        let unitNumber: string[];
        let driverAlphaRecords: string[] = [];

        it("Navigate to FM2 page", async () => {
            await myJbHuntHomePage.openFm2Url();
        });

        it('Hover Over Planning Option from header And Click on Unit View DropDown Option', async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.tabName);
            await freightManager2Page.clickHeaderDropDownOption(data.unitViewOption);
            await unitViewPage.actions.waitBrowserTitleEqualsTo(data.unitViewPageTitle)
        });

        it('Click on parameter button', async () => {
            await unitViewPage.clickOnParameterButton();
        });
        it('Enter Board codes', async () => {
            await unitViewPage.actions.waitUntilElementPresenceOf(unitViewPage.buttonExit, "wait for element")
            await unitViewParameterPage.selectType(data.board);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 1, data.BoardCode1);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 2, data.BoardCode2);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 3, data.BoardCode3);
            await unitViewParameterPage.enterSelectTypeCode(data.codeName, 4, data.BoardCode4);
            await unitViewParameterPage.clickOnSaveParameterButton();
            await unitViewParameterPage.clickOnExitButton();
        });

        it('Click on Search Button', async () => {
            await unitViewPage.actions.waitBrowserTitleEqualsTo(data.unitViewPageTitle)
            await unitViewPage.clickSearchButton();
            await unitViewPage.waitForLoading()
        });

        it('Getting Unit Number With No Driver ', async () => {
            unitNumber = await unitViewPage.getUnitNumber();
            expect(unitNumber).not.toBe(undefined)
            console.log("orderArr: " + unitNumber);
        });

        it('Hover Over Driver tab', async () => {
            await unitViewPage.waitForLoading()
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.tabDriver);
            await freightManager2Page.clickHeaderDropDownOption(data.optionDriverView);
        });

        it("Should set Board Code values", async () => {
            await driverViewPage.enterBoardCodes(data.fieldName, 1, data.BoardCode5);
            await driverViewPage.enterBoardCodes(data.fieldName, 2, data.BoardCode6);
            await driverViewPage.enterBoardCodes(data.fieldName, 3, data.BoardCode7);
        });

        it('Click on Search Button', async () => {
            await driverViewPage.clickSearchButton();
            await unitViewPage.waitForLoading()
        });

        it('Click On Tractor Number from Table Header', async () => {
            await driverViewPage.clickOnTractorNumberButton();
            await unitViewPage.waitForLoading()
        });

        it('Geting Driver Alpha codes', async () => {
            driverAlphaRecords = await driverViewPage.getDriverAlphaCode()
            expect(driverAlphaRecords).not.toBe(undefined)
        });

        it('Hover Driver Option from Header', async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.tabDriver);
        });

        it('Click on Assign Driver Drop Down Option', async () => {
            await freightManager2Page.clickHeaderDropDownOption(data.optionAssignDriver);
        });

        it('Enter your first tractor number, click the Search button', async () => {
            await assingnDriver.enterTractorNumber(data.driverTextBoxIdTractor, unitNumber[0]);
            await assingnDriver.clickSearchButton()

        });

        it('Enter your first driver Alpha code', async () => {
            await assingnDriver.enterTractorNumber(data.driverTextBoxIdDriver, driverAlphaRecords[0]);
            await assingnDriver.clickOnButton(data.buttonText);
            expect(await assingnDriver.validateSuccessMessage).toEqual("Driver " + driverAlphaRecords[0] + " has successfully been saaigned to tractor number " + unitNumber[0]);
        });

        it('Enter your first tractor number, click the Search button', async () => {
            await assingnDriver.enterTractorNumber(data.driverTextBoxIdTractor, unitNumber[1]);
            await assingnDriver.clickSearchButton()
            expect(await assingnDriver.validateSuccessMessage).toEqual(data.message);
        });

        it('Enter your first driver Alpha code', async () => {
            await assingnDriver.enterTractorNumber(data.driverTextBoxIdDriver, driverAlphaRecords[1]);
            await assingnDriver.clickOnButton(data.buttonText);
            expect(await assingnDriver.validateSuccessMessage).toEqual("Driver " + driverAlphaRecords[1] + " has successfully been saaigned to tractor number " + unitNumber[1]);
        });
    });
})