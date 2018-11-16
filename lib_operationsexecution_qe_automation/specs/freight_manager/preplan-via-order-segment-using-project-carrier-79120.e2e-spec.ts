import { UnitViewPage } from "../../pages/freight_manager/unit-view.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { PickupviewPage } from "../../pages/freight_manager/pick-up-view.po";
import { MyJbHuntHomePage } from "../../pages/my-jbhunt-home.po";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { DataProvider } from "../../data/dataProvider";

let myJbHuntHomePage = new MyJbHuntHomePage();
let unitViewPage = new UnitViewPage();
let freightManagerPage = new FreightManager2Page();
let pickupviewPage = new PickupviewPage();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');

//TC_79120:FM2_Regression_6 Preplan Via order Segment using Project Carrier
using(DataProvider.Tc_79120, async function (data) {

    describe("Preplan Via order Segment using Project Carrier", function () {
        let text_tractorNo: string;
        let text_OrderNo: string;

        it("should open homepage", async () => {
            await myJbHuntHomePage.navigateToAppHome(myJbHuntHomePage.fm2Url);
        });

        it("Navigating to Unit View screen", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.option);
        });

        it("Enter board code on unit view page", async () => {
            await unitViewPage.sendDataToBoardCodeTextBoxes(data.BoardCode1, data.BoardCode2, data.BoardCode3, data.BoardCode4);
        });

        it("Click on search button", async () => {
            await unitViewPage.clickSearchButton();
        });

        it("Find available tractor with No PP", async () => {
            text_tractorNo = await unitViewPage.getAvailableTractor(data.availableTractocolumnText1, data.availableTractocolumnText2);
            await expect(text_tractorNo).not.toBeUndefined();
        });

        it("Navigating to Pick up screen", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.pickUpOption);
        });

        it("Set search parameters on Pick up view screen", async () => {
            await pickupviewPage.setSearchParameters(data.strType, data.strDivison, data.strAreaType, data.strArea, data.strTranMd);
        });

        it("Click on Search button on Pick Up screen", async () => {
            await pickupviewPage.clickSearchButton();
        });

        it("Find order number with blank notes", async () => {
            text_OrderNo = await pickupviewPage.getOrderNumberFromPickUpScreen(data.columnHeader1, data.columnHeader2);
            await expect(text_OrderNo).not.toBeUndefined();
        });

        it("Navigating to Order Segment screen", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionOrderSegment);
        });

        it("Enter the order Number on Order Segment screen", async () => {
            await orderSegmentPage.enterOrderNumber(text_OrderNo, "Order Number");
        });

        it("Click on Search button on Order Segment screen", async () => {
            await orderSegmentPage.clickSearchButton();
        });

        it("Enter project/carrier details on Order Segment screen", async () => {
            await orderSegmentPage.enterProjectCarrierNumber(data.projectCode, data.carrierCode);
        });

        it("Click on create preplan button on Order Segment screen", async () => {
            await orderSegmentPage.clickCreatePreplanButton();
        });

        it("Verify preplan is successfull", async () => {
            let verify_msg: string = await orderSegmentPage.verifyEventMessages(data.carrierPreplanMessage);
            await expect(verify_msg).toContain(data.sucessMesage);
        });

    });
})