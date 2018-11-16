
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { PickupviewPage } from '../../pages/freight_manager/pick-up-view.po';
import { browser } from 'protractor';
import { DriverViewPage } from '../../pages/freight_manager/driver-view.po';
import { DriverPreplanPage } from '../../pages/freight_manager/driver-preplan.po';
import { protractor } from 'protractor/built/ptor';
import { DataProvider } from "../../data/dataProvider";


let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let driverViewPage = new DriverViewPage();
let driverPreplanPage = new DriverPreplanPage();
let using = require('jasmine-data-provider');
//TC_80449: FM2_Regression_25 Preplan loads using driver alpha in driver preplan
using(DataProvider.Tc_80449, async function (data) {

    describe("Preplan loads using driver alpha in driver preplan", function () {

        let orderNumbers = [];
        let driverAlpha;
        it("Open FM2 url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
        });

        it("Should select 'PICK UP' under planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2("Planning", "Pick Up");
        });

        it("Should click 'Search' button", async () => {
            await freightManager2Page.clickSearchButton();
        });

        it("Should find an empty PWR/DRVR NOTES and make note of three orders ", async () => {
            orderNumbers = await pickupviewPage.getOrderNumberByColumnValues(data.recordsCount, data.columnHeader1, data.columnHeader1Value, data.columnHeader2, data.columnHeader2Value);
        });

        it("Should select 'DRIVER VIEW' under driver tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabNameDriver, data.optionDriverView);
        });

        it("Should set Board Code values", async () => {
            await driverViewPage.enterBoardCodes(data.fieldName, 1, data.BoardCode1);
            await driverViewPage.enterBoardCodes(data.fieldName, 2, data.BoardCode2);
            await driverViewPage.enterBoardCodes(data.fieldName, 3, data.BoardCode3);
            await driverViewPage.enterBoardCodes(data.fieldName, 4, data.BoardCode4);
        });

        it("Should click 'Search' button", async () => {
            await driverViewPage.clickSearchButton();
        });

        it("Should take a  note of available DRIVER ALPHA CODES", async () => {
            let driveAlphaRecords = [];
            driveAlphaRecords = await driverViewPage.getDriverAlphByColumnValues(data.getDriverAlphaParm1, data.getDriverAlphaParm2, data.getDriverAlphaParm3, data.getDriverAlphaParm4, data.getDriverAlphaParm5);
            console.log("driveAlphaRecords" + driveAlphaRecords);
            expect(driveAlphaRecords).not.toBeUndefined();
            driverAlpha = driveAlphaRecords[0];
            console.log("driverAlpha : " + driverAlpha);
        });

        it("Should select 'DRIVER PREPLAN' under planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.optionDriverPreplan);
        });

        it("Should enter Driver Alpha Code", async () => {
            await driverPreplanPage.enterDriverAlpha(driverAlpha);
        });

        it("Should click 'Search' button", async () => {
            await driverPreplanPage.clickSearchButton();
        });

        it("Should click 'Add Multiple Segments' button", async () => {
            await driverPreplanPage.clickAddMultipleSegmentbutton();
        });

        it("Should enter load numbers", async () => {
            await driverPreplanPage.enteringOrderNumbers(orderNumbers[0]);
            await browser.actions().sendKeys(protractor.Key.ENTER).perform();
            await driverPreplanPage.enteringOrderNumbers(orderNumbers[1]);
            await browser.actions().sendKeys(protractor.Key.ENTER).perform();
            await driverPreplanPage.enteringOrderNumbers(orderNumbers[2]);
            await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });

        it("Should click 'ok' button", async () => {
            await driverPreplanPage.clickOkButton();
        });

        it("Should click 'Update' button", async () => {
            await driverPreplanPage.clickUpdateButton();
        });


    });
})