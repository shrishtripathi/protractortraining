
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { MultiplePrePlanPage } from "../../pages/freight_manager/multiple-preplan.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let freightManagerPage = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let multiplePrePlanPage = new MultiplePrePlanPage();
let using = require('jasmine-data-provider');
//TC_78611: FM2_Regression_2 Find order via Pickup, multiple preplan using tractor number
using(DataProvider.Tc_78611, async function (data) {

  describe("Find order via Pickup, multiple preplan using tractor number", function () {
    let text_tractorNo: string;
    let text_OrderNo: string;

    it("should open homepage", async () => {
      await myJbHuntHomePage.openFm2Url();
    });

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on PIck up Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.option);
    });

    it("Set search parameters on Pick up view screen", async () => {
      await pickupviewPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strTranMd);
    });

    it("Click save pref on Pick up view page", async () => {
      await pickupviewPage.clickOnSavePrefButton();
    });

    it("Verify save preference success message", async () => {
      let verify_message: string = await pickupviewPage.verifyEventMessages(data.eventMessage);
      expect(verify_message).toContain(data.message);
    });

    it("Click on Search button on Pick Up screen", async () => {
      await pickupviewPage.clickSearchButton();
    });

    it("Find order number with blank notes", async () => {
      text_OrderNo = await pickupviewPage.getOrderNumberFromPickUpScreen(data.columnHeader1, data.columnHeader2);
      console.log("order No :" + text_OrderNo);
      expect(text_OrderNo).not.toBeUndefined();
    });

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on Unit View Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.optionUnitView);
    });

    it("Click on search button", async () => {
      await unitViewPage.clickSearchButton();
    });

    it("Find available tractor with no PP", async () => {
      text_tractorNo = await unitViewPage.getAvailableTractor(data.availableTractocolumnText1, data.availableTractocolumnText2);
      await expect(text_tractorNo).not.toBe("");
    });

    it("Hover Planning Option from header", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on Multiple Preplan Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.multiPrePlanOption);
    });

    it("Enter Tractor Number on Multiple Preplan screen", async () => {
      await multiplePrePlanPage.enterTractorNumber(text_tractorNo, "Tractor Number");
    });

    it("Click on Search button on Multiple Preplan screen", async () => {
      await multiplePrePlanPage.clickSearchButton();
    });

    it("Enter the order Number on Multiple preplan screen", async () => {
      await multiplePrePlanPage.enterOrderNumber(text_OrderNo, "Order Number");
    });

    it("Click on Add Segment button on Multiple Preplan screen", async () => {
      await multiplePrePlanPage.ClickAddSegmentButton();
    });

    it("Check segment table deleted one segment", async () => {
      let deleted_segment: boolean = await multiplePrePlanPage.VerifySegmentPresence(text_OrderNo);
      await expect(deleted_segment).toBeTruthy();
    });

    it("Click on Update button on Multiple Preplan screen", async () => {
      await multiplePrePlanPage.clickUpdateButton();
    });

    it("Verify update on Multiple preplan", async () => {
      let verify_message: string = await multiplePrePlanPage.verifyEventMessages(data.multiplePreplanMessage);
      await expect(verify_message).toContain(data.multiplePreplanMessage);
    });

    it("Verify userID under Last updated ID column", async () => {
      await multiplePrePlanPage.verifyUserIDUnderAddedSegment();
    });

  });
});