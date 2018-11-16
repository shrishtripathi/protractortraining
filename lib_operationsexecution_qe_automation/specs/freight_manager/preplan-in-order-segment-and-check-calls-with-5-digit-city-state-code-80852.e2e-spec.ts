import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { DataProvider } from "../../data/dataProvider";


let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let deliveryPage = new DeliveryPage();
let freightManagerPage = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let orderSegmentPage = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');

//TC 80852 : FM2_Regression_27 Preplan in order segment and do check calls with a 5 digit city state code
using(DataProvider.Tc_80852, async function (data) {

  describe("Preplan in order segment and do check calls with a 5 digit city state code", function () {
    let text_tractorNo: string;
    let text_OrderNo: string;

    it("should open FM2 url", async () => {
      await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
    });

    it("Navigate to pick up screen", async () => {
      await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.option);
    });

    it("Set search parameters on Pick up view screen", async () => {
      await pickupviewPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strTranMd);
    });

    it("Click on Search button on Pick Up screen", async () => {
      await pickupviewPage.clickSearchButton();
    });

    it("Find order number with blanck notes", async () => {
      text_OrderNo = await pickupviewPage.getOrderNumberFromPickUpScreen(data.columnHeader1, data.columnHeader2);
      await expect(text_OrderNo).not.toBe("");
    });

    it("Navigating to Unit View option", async () => {
      await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionUnitView);
    });

    it("Enter board code on unit view page", async () => {
      await unitViewPage.sendDataToBoardCodeTextBoxes(data.BoardCode1, data.BoardCode2, data.BoardCode3, data.BoardCode4);
    });

    it("Click on search button", async () => {
      await unitViewPage.clickSearchButton();
    });

    it("Find available tractor with Trailer Number and no PP", async () => {
      text_tractorNo = await unitViewPage.getAvailableTractorWithTrailerType();
      await expect(text_tractorNo).not.toBe("");
    });

    it("Navigate to order segment screen", async () => {
      await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionOrderSegment);
    });

    it("Enter the order Number on Order Segment screen", async () => {
      await orderSegmentPage.enterOrderNumber(text_OrderNo, "Order Number");
    });

    it("Click on Search button on Order Segment screen", async () => {
      await deliveryPage.clickSearchButton();
    });

    it("Select Tractor radio button on Order Segment screen", async () => {
      await orderSegmentPage.enterTractorNumber(text_tractorNo);
    });

    it("Click on create preplan button on Order Segment screen", async () => {
      await orderSegmentPage.clickCreatePreplanButton();
    });

    it("Verify preplan is successfull", async () => {
      let verify_message: string = await orderSegmentPage.verifyEventMessages(data.preplanMessage);
      await expect(verify_message).toContain(data.message);
    });

    it("Navigate to Truck check call screen", async () => {
      await freightManagerPage.selectOptionFromFreightManager2(data.headerOptionDriver, data.dropDownOptionTruckCheckCall);
      await checkCallDetailsPage.verifyCheckCallDetailsPage();
    });

    it("Enter tracker number in Check call details screen ", async () => {
      await checkCallDetailsPage.enterTractorNumber(text_tractorNo);
    });

    it("Click on update button", async () => {
      await checkCallDetailsPage.clickOnUpdate();
    });

    it("Update auto dispatch to A or N", async () => {
      await checkCallDetailsPage.updateAutoDispatch(data.autoDispatchText);
    });

    it("Click on update button", async () => {
      await checkCallDetailsPage.clickOnUpdate();
    });

    it("Hover status Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
    });

    it("Click on dispatch option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.dropDownOptionDispatch);
    });

    it("Waittill dispatch window opens", async () => {
      await checkCallDetailsPage.waitTillDispatchWindowLoad();
    });

    it("Click on update button on dispatch window", async () => {
      await checkCallDetailsPage.clickOnUpdateOnPopup();
    });

    it("Verify dispatch is successfull", async () => {
      let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.transactionValue);
      await expect(result).toBeTruthy();
    })

    it("Click on Dispatch row in call history", async () => {
      await checkCallDetailsPage.clickLastDispatchRowUnderCallHistory();
    });

    it("Wait till dispatch call information popup dispayed", async () => {
      await checkCallDetailsPage.waitTillDispatchCallInfoWindowLoad();
    });

    it("Update the city state code", async () => {
      await checkCallDetailsPage.updateCityStateCode(data.cityStateCode);
    });

    it("Click update button on Dispatch Call information screen", async () => {
      await checkCallDetailsPage.clickOnUpdateOnPopup();
    });

    it("Verify sucess message for update dispatch call info", async () => {
      let verify_message: string = await orderSegmentPage.verifyEventMessages(data.dispatchCallInfoMsg);
      await expect(verify_message).toBe(data.dispatchCallInfoMsg);
    });

    it("Verify new city code under check call history", async () => {
      let result: boolean = await checkCallDetailsPage.verifyUpdatedCityCodeUnderHistory(data.cityStateCode);
      await expect(result).toBeTruthy();
    });

  });
})