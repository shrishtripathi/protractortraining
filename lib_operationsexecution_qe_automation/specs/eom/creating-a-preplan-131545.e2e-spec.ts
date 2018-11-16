import { FreightManager2Page } from "../../pages/eom/freight-manager-2.po";
import { DataProvider } from "../../data/dataprovider";
import { OrderSegmentPage } from "../../pages/freight_Manager/order-segment.po";


let freightManagerPage = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();

let using = require('jasmine-data-provider');
//TC 131544 :EOM_Regression_20 Finding a trailer 
using(DataProvider.Tc_131545, async function (data) {

  describe("Finding a trailer", function () {
    let text_tractorNo: string;
    let text_OrderNo: string;
    
    it("Go to Planning tab ", async () => {
      await freightManagerPage.hoverOverFM2PageHeaderOption(data.tabName);
    });

    it("Click on Order Segment Option", async () => {
      await freightManagerPage.clickHeaderDropDownOption(data.optionOrderSegment);
    });

    it("Put your Order number in the blank space under the Planning tab ", async () => {
      await orderSegmentPage.enterOrderNumber(text_OrderNo, "Order Number");
    });

    it("Click on Search ", async () => {
      await orderSegmentPage.clickSearchButton();
    });

    it("Click Tractor and put in your tractor number (driver number) ", async () => {
      await orderSegmentPage.enterTractorNumber(text_tractorNo);
    });

    it("Click on create preplan button on Order Segment screen", async () => {
      await orderSegmentPage.clickCreatePreplanButton();
    });

    it("Enure a preplan was made by the blue box at the top", async () => {
      let verify_message: string = await orderSegmentPage.verifyEventMessages(data.message);
      expect(verify_message).toBe(data.message);
    });
  })
})