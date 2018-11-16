import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let freightManagerPage = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');
//TC_79099:FM2_Regression_4 Preplan via order segment using truck number
using(DataProvider.Tc_79099, async function (data) {

  describe("Preplan via order segment using truck number", function () {
    let text_tractorNo: string;
    let text_OrderNo: string;
    let text_OrderNos: string[];

    it("should open homepage", async () => {
      await myJbHuntHomePage.openFm2Url();
    });

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on Unit View Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.option);
    });

    it("Enter board code on unit view page", async () => {
      await unitViewPage.sendDataToBoardCodeTextBoxes(data.BoardCode1, data.BoardCode2, data.BoardCode3, data.BoardCode4);
    });

    it("Click on search button", async () => {
      await unitViewPage.ClickSearchButton_FM2Page();
    });

    it("wait untill table loads", async () => {
      await unitViewPage.waitUntillsearchTableLoads(unitViewPage.unitViewSearchTable);
    })

    it("Find available tractor with no PP", async () => {
      text_tractorNo = await unitViewPage.getAvailableTractor(data.availableTractocolumnText1, data.availableTractocolumnText2);
      await expect(text_tractorNo).not.toBeUndefined();
    });

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on PIck up Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.pickUpOption);
    });

    it("Set search parameters on Pick up view screen", async () => {
      await pickupviewPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strTranMd);
    });

    it("click on save prefs on Pick Up Screen", async () => {
      await pickupviewPage.clickSavePrefsButton();
    })

    it("Click on Search button on Pick Up screen", async () => {
      await pickupviewPage.clickSearchButton();
    });

    it("Find order number with blanck notes", async () => {
      await pickupviewPage.orderNumberForEmptyBox();
      text_OrderNos = await pickupviewPage.orderNumbers;
      text_OrderNo = text_OrderNos[0];
      await expect(text_OrderNo).not.toBeUndefined();
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
      await orderSegmentPage.clickSearchButton();
    });

    it("Select Tractor radio button on Order Segment screen", async () => {
      await orderSegmentPage.enterTractorNumber(text_tractorNo);
    });

    it("Click on create preplan button on Order Segment screen", async () => {
      await orderSegmentPage.clickCreatePreplanButton();
    });

    it("Verify preplan is successfull", async () => {
      let verify_message: string = await orderSegmentPage.verifyEventMessages(data.successMessage);
      await expect(verify_message).toContain(data.message);
    });

    it("Verify tractor number under Power Driver column", async () => {
      let result: boolean = await orderSegmentPage.verifyTractorNumberUnderPowerDriverColumn(text_tractorNo);
      await expect(result).toBeTruthy();
    });

  });
})