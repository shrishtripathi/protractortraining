import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { BasePage } from "../../pages/freight_manager/base.po";
import { CommonFunctions } from "../../utilities/common-functions";
import { MultiplePrePlanPage } from "../../pages/freight_manager/multiple-preplan.po";
import { DriverViewPage } from "../../pages/freight_manager/driver-view.po";
import { DriverPreplanPage } from "../../pages/freight_manager/driver-preplan.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let freightManager2Page = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let basePage = new BasePage();
let commonFunctions = new CommonFunctions();
let unitViewPage = new UnitViewPage();
let deliveryPage = new DeliveryPage();
let multiplePrePlanPage = new MultiplePrePlanPage();
let driverViewPage = new DriverViewPage();
let driverPrePlanPage = new DriverPreplanPage();
let using = require('jasmine-data-provider');
//TC 79006 : FM2_Regression_3 Preplan via Driver Preplan using alpha code
using(DataProvider.Tc_79006, async function (data) {

    describe(" Preplan via Driver Preplan using alpha code", () => {
        let textDriverAlpha: string;
        let text_OrderNo: string;

        it("Open FM2 url", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
        });

        it("Should select 'PICK UP' under planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
        });

        it("Should click on search button after parametres are saved", async () => {
            await freightManager2Page.clickSearchButton();
        });

        it("Should find an available driver with MTY and No PP", async () => {
            textDriverAlpha = await commonFunctions.getDriverAlpha(data.getDriverAlphaText1, data.getDriverAlphaColumnName1, data.getDriverAlphaRequiredColumn);
            console.log("order No :" + textDriverAlpha);
            await expect(textDriverAlpha).not.toBeUndefined();
        });

        it("Hover Planning Option from header", async () => {
            await freightManager2Page.refreshPage();
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOptionDriver);
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.pickUpOption)
        });

        it("Set search parameters on Pick up view screen", async () => {
            await pickupviewPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.arr, data.strTranMd);
        });

        it("Click on Search button on Pick Up screen", async () => {
            await deliveryPage.clickOnSearch();
        });

        it("Find order number with blanck notes", async () => {
            text_OrderNo = await pickupviewPage.getOrderNumberFromPickUpScreen(data.columnHeader1, data.columnHeader2);
            console.log("order No :" + text_OrderNo);
            await expect(text_OrderNo).not.toBeUndefined();
        });

        it("Hover over the Planning tab, and click Driver Preplan.", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.optionDriverPreplan);
        });

        it("Enter driver aplha value on driver preplan screen", async () => {
            await driverPrePlanPage.enterDriverAlpha(textDriverAlpha);
        });

        it("Click on Search button on driver preplan screen", async () => {
            await driverPrePlanPage.clickSearchButton();
        });

        it("Enter order number on driver preplan screen", async () => {
            await driverViewPage.enterOrderNumber(text_OrderNo, 'Order number');
        });

        it("Click on add segment button on driver preplan screen", async () => {
            await multiplePrePlanPage.ClickAddSegmentButton();
        });

        it("Verify segment added successfully", async () => {
            let elementPresent: boolean = await multiplePrePlanPage.VerifySegmentPresence(text_OrderNo);
            await expect(elementPresent).toBeTruthy();
        });

        it("Click on update button on driver preplan screen", async () => {
            await multiplePrePlanPage.clickUpdateButton();
        });

        it("Verify update on driver preplan screen", async () => {
            let verify_message: string = await multiplePrePlanPage.verifyEventMessages(data.multiplePreplanMessage);
            await expect(verify_message).toBe(data.multiplePreplanMessage);

        });

    });
});