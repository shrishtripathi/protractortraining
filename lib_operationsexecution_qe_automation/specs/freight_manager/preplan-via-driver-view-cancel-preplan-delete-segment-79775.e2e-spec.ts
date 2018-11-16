import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { MultiplePrePlanPage } from "../../pages/freight_manager/multiple-preplan.po";
import { DriverViewPage } from "../../pages/freight_manager/driver-view.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let freightManagerPage = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let orderSegmentPage = new OrderSegmentPage();
let deliveryPage = new DeliveryPage();
let multiplePrePlanPage = new MultiplePrePlanPage();
let driverViewPage = new DriverViewPage();
let using = require('jasmine-data-provider');
//TC_79775: FM2_Regression_7 Preplan using Driver View Screen, then cancel preplan, then delete segment
using(DataProvider.Tc_79775, async function (data) {

  describe("Preplan using Driver View Screen, then cancel preplan, then delete segment", function () {
    let text_DriverAlpha: string;
    let text_OrderNo: string;
    let driverAlpha: string;

    it("should open FM2 url", async () => {
      await myJbHuntHomePage.openFm2Url();
    });

    it("Should click on Driver View option under Driver tab", async () => {
      await freightManagerPage.selectOptionFromFreightManager2(data.tabDriver, data.optionDriverView);
    });

    it("Enter values in Board Group fields", async () => {
      await driverViewPage.setValuesInBoardGroup(data.boardGroupArray);
    });

    it("Click on search button", async () => {
      await deliveryPage.clickSearchButton();
    });

    it("Waiting for driver view table gets loaded", async () => {
      await driverViewPage.waitTillTableGetsLoaded(data.tableId);
    });

    it("Find available driver alpha code", async () => {
      text_DriverAlpha = await driverViewPage.getAvailableDriverAlphaCode();
      console.log("text_DriverAlpha No :" + text_DriverAlpha);
      await expect(text_DriverAlpha).not.toBe("");
    });

    it("Should click on Delivery  option under planning tab", async () => {
      await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionDelivery);
    });

    it("Set search parameters on delivery screen", async () => {
      await deliveryPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strTranMd);
    });

    it("Click on Search button on delivery screen", async () => {
      await deliveryPage.clickSearchButton();
    });

    it("Find order number with blank notes", async () => {
      text_OrderNo = await pickupviewPage.getOrderNumberFromPickUpScreen(data.columnHeader1, data.columnHeader2);
      console.log("order No :" + text_OrderNo);
      await expect(text_OrderNo).not.toBe("");
    });

    it("Should click on Driver preplan option under planning tab", async () => {
      await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionDriverPreplan);
    });

    it("Enter driver aplha value on driver preplan screen", async () => {
      await driverViewPage.enterDriverAlphaValue(text_DriverAlpha, "Driver Alpha");
    });

    it("Click on Search button on driver preplan screen", async () => {
      await deliveryPage.clickSearchButton();
    });

    it("Enter order number on driver preplan screen", async () => {
      await driverViewPage.enterOrderNumber(text_OrderNo, "order number");
    });

    it("Click on add segment button on driver preplan screen", async () => {
      await multiplePrePlanPage.ClickAddSegmentButton();
    });

    it("Verify segment added successfully", async () => {
      await multiplePrePlanPage.VerifySegmentPresence(text_OrderNo);
    });

    it("Click on update button on driver preplan screen", async () => {
      await multiplePrePlanPage.clickUpdateButton();
    });

    it("Verify update on driver preplan screen", async () => {
      let verify_message: string = await multiplePrePlanPage.verifyEventMessages(data.multiplePreplanMessage);
      await expect(verify_message).toBe(data.multiplePreplanMessage);
    });

    it("Verify userID under Last updated ID column", async () => {
      await multiplePrePlanPage.verifyUserIDUnderAddedSegment();
    });

    it("Should click on Driver preplan option under planning tab", async () => {
      await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionOrderSegment);
    });

    it("Enter the order Number on Order Segment screen", async () => {
      await orderSegmentPage.enterOrderNumber(text_OrderNo, "Order Number");
    });

    it("Click on Search button on Order Segment screen", async () => {
      await deliveryPage.clickSearchButton();
    });

    it("Select radio button for specific order", async () => {
      await orderSegmentPage.selectOrderRadioButton(text_DriverAlpha);
    });

    it("Cancel preplan on order segment screen", async () => {
      await orderSegmentPage.clickCancelPreplanButton();
    });

    it("Select the segment which needs to be deleted on driver preplan screen", async () => {
      let result: boolean = await driverViewPage.selectSegmentRowOnDriverPreplanPage(text_OrderNo);
      await expect(result).toBeTruthy();
    });

    it("Delete segment from DriverPreplan screen", async () => {
      await multiplePrePlanPage.ClickDeleteSegmentButton();
    });

    it("Verify delete segment message on DriverPreplan screen", async () => {
      let verify_message = await multiplePrePlanPage.verifyEventMessages(data.multiplePreplandDeleteMessage);
      await expect(verify_message).toBe(data.multiplePreplandDeleteMessage);
    });

    it("Click exit button on driver preplan screen", async () => {
      await driverViewPage.clickExitButton();
    });

  });
})