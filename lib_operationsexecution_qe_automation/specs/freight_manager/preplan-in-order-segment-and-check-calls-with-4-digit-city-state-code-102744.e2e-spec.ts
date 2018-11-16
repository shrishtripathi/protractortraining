import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { DeliveryPage } from "../../pages/freight_manager/delivery.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";


let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let deliveryPage = new DeliveryPage();
let freightManagerPage = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let orderSegmentPage = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');
//TC 102744 : FM2_Regression_27 Preplan in order segment and do check calls with a 4 digit city state code
using(DataProvider.Tc_102744, async function (data) {

  describe("Preplan in order segment and do check calls with a 4 digit city state code", function () {
    let text_tractorNo: string;
    let text_OrderNo: string;

    it("should open homepage", async () => {
      await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
    });

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on PIck up Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.option);
    });

    it("Set search parameters on Pick up view screen", async () => {
      await pickupviewPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strTranMd)
    });

    it("Click on Search button on Pick Up screen", async () => {
      await pickupviewPage.clickSearchButton();
    });

    it("Find order number with blanck notes", async () => {
      text_OrderNo = await pickupviewPage.getOrderNumberFromEmptyBoxes();
      console.log('order Number is '+text_OrderNo);
      await expect(text_OrderNo).not.toBeNull();
    });

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on Unit View Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.optionUnitView);
    });

    it("Enter board code on unit view page", async () => {
      await unitViewPage.sendDataToBoardCodeTextBoxes(data.BoardCode1, data.BoardCode2, data.BoardCode3, data.BoardCode4);
    });

    it("Click on search button", async () => {
      await unitViewPage.clickSearchButton();
    });

    it("Find available tractor with Trailer Number and no PP", async () => {
      text_tractorNo = await unitViewPage.getAvailableTractorWithAutoDispatch(data.availableTractocolumnText1, data.availableTractocolumnText2);
      console.log("tractor Number is "+text_tractorNo);
      await expect(text_tractorNo).not.toBe("");
    });

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on Order Segment Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.optionOrderSegment);
    });

    it("Enter the order Number on Order Segment screen", async () => {
      await orderSegmentPage.enterOrderNumber(text_OrderNo, "Order Number");
    });

    it("Click on Search button on Order Segment screen", async () => {
      await deliveryPage.clickOnSearch();
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

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionDriver);
    });

    it("Click on Order Segment Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.dropDownOptionTruckCheckCall);
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
      let result: boolean = await checkCallDetailsPage.verifyUpdatedCityCodeUnderHistory(data.updatedCityCodeHistory);
      await expect(result).toBeTruthy();
    });

  });
});