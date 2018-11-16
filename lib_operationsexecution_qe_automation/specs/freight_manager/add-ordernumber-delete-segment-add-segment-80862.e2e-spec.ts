import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { MultiplePrePlanPage } from "../../pages/freight_manager/multiple-preplan.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let freightManagerPage = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let multiplePrePlanPage = new MultiplePrePlanPage();
let using=require('jasmine-data-provider');
//TC 80862 :FM2_Regression_32 Add order number to truck, delete new segment, then add that segment on another truck
using(DataProvider.Tc_80862, async function(data){

describe("Add order number to truck, delete new segment, then add that segment on another truck", function () {
  let text_tractorNo: string;
  let text_OrderNo: string;

  it("should open homepage", async () => {
    await myJbHuntHomePage.openFm2Url();
  });

  it("Hover Planning Option from header", async () => {
    await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
  });

  it("Click on Unit View Option", async () => {
    await freightManagerPage.clickHeaderDropDownOption(data.unitViewOption);
  });

  it("Enter board code on unit view page", async () => {
    await unitViewPage.sendDataToBoardCodeTextBoxes(data.BoardCode1, data.BoardCode2, data.BoardCode3, data.BoardCode4);
  });

  it("Click on search button", async () => {
    await unitViewPage.clickSearchButton();
  });

  it("Find available tractor with  PP", async () => {
    text_tractorNo = await unitViewPage.getAvailableTractor(data.availableTractocolumnText1MTYPp, data.availableTractocolumnText2);
    await expect(text_tractorNo).not.toBe("");
  });

  it("Hover Planning Option from header", async () => {
    await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
  });

  it("Click on PIck up Option", async () => {
    await freightManagerPage.clickHeaderDropDownOption(data.pickUpOption);
  });

  it("Set search parameters on Pick up view screen", async () => {
    await pickupviewPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType,data.strArea, data.tranMdText);
  });

  it("Click on Search button on Pick Up screen", async () => {
    await pickupviewPage.clickSearchButton();
  });

  it("Find order number with blank notes", async () => {
    text_OrderNo = await pickupviewPage.getOrderNumberFromPickUpScreen(data.columnHeader1, data.columnHeader2);
    await expect(text_OrderNo).not.toBe("");
  });

  it("Hover Planning Option from header", async () => {
    await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
  });

  it("Click on Multiple Preplan Option", async () => {
    await freightManagerPage.clickHeaderDropDownOption(data.multiPrePlanOption);
  });

  it("Enter Tractor Number on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.enterTractorNumber(text_tractorNo, data.tractorLogName);
  });

  it("Click on Search button on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.clickSearchButton();
  });

  it("Enter the order Number on Multiple preplan screen", async () => {
    await multiplePrePlanPage.enterOrderNumber(text_OrderNo, data.OrderNoLogName);
  });

  it("Click on Add Segment button on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.ClickAddSegmentButton();
  });

  it("Check segment table for newly added segment", async () => {
    let added_segment: boolean = await multiplePrePlanPage.VerifySegmentPresence(text_OrderNo);
    await expect(added_segment).toBeTruthy();
  });

  it("Click on Update button on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.clickUpdateButton();
  });

  it("Verify update on Multiple preplan", async () => {
    let verify_message: string = await multiplePrePlanPage.verifyEventMessages(data.successMessage);
    await expect(verify_message).toBe(data.successMessage);
  });

  it("Click on Segment newly added on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.ClickLastSegmentUnderMultiplePreplan();
  });

  it("Click on Delete Segment button on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.ClickDeleteSegmentButton();
  });

  it("Check success message for deletion", async () => {
    let verify_message: string = await multiplePrePlanPage.verifyEventMessages(data.deleteMessage);
    await expect(verify_message).toBe(data.deleteMessage);
  });

  it("Check segment table deleted one segment", async () => {
    let deleted_segment: boolean = await multiplePrePlanPage.VerifySegmentPresence(text_OrderNo);
    await expect(deleted_segment).toBeFalsy();
  });

  it("Hover Planning Option from header", async () => {
    await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
  });

  it("Click on Unit View Option", async () => {
    await freightManagerPage.clickHeaderDropDownOption(data.unitViewOption);
  });

  it("Click on search button", async () => {
    await unitViewPage.ClickSearchButton_FM2Page();
  });

  it("Find available tractor with  No  PP", async () => {
    text_tractorNo = await unitViewPage.getAvailableTractor(data.availableTractocolumnText2, data.availableTractocolumnText1MTYNoPp);
    await expect(text_tractorNo).not.toBe("");
  });

  it("Hover Planning Option from header", async () => {
    await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
  });

  it("Click on Multiple Preplan Option", async () => {
    await freightManagerPage.clickHeaderDropDownOption(data.multiPrePlanOption);
  });

  it("Enter Tractor Number on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.enterTractorNumber(text_tractorNo, data.tractorLogName);
  });

  it("Click on Search button on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.clickSearchButton();
  });

  it("Enter the order Number on Multiple preplan screen", async () => {
    await multiplePrePlanPage.enterOrderNumber(text_OrderNo, data.OrderNoLogName);
  });

  it("Click on Add Segment button on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.ClickAddSegmentButton();
  });

  it("Click on Update button on Multiple Preplan screen", async () => {
    await multiplePrePlanPage.clickUpdateButton();
  });

  it("Check success message for updation", async () => {
    let verify_message: string = await multiplePrePlanPage.verifyEventMessages(data.successMessage);
    await expect(verify_message).toBe(data.successMessage);
  });

});
});