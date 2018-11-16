
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { DataProvider } from "../../data/dataProvider";

    let orderSegmentPage = new OrderSegmentPage();
    let using = require('jasmine-data-provider');
    //TC #131667 : FM2 | Create Preplan
    using(DataProvider.Tc_131689, async function (data) {

        describe("Create Preplan", () => {
            let loadNumber: string;
            let projectCode: string
            it("Enter the order Number on Order Segment screen", async () => {
                await orderSegmentPage.enterOrderNumber(loadNumber, "Order Number");
            });
            it("Click on Search button on Order Segment screen", async () => {
                await orderSegmentPage.clickSearchButton();
            });
            it("Enter project/carrier details on Order Segment screen", async () => {
                await orderSegmentPage.enterProjectCarrierNumber(projectCode, data.carrierCode);
            });
            it("Click on create preplan button on Order Segment screen", async () => {
                await orderSegmentPage.clickCreatePreplanButton();
            });
            it("Verify preplan is successfull", async () => {
                let verify_msg: string = await orderSegmentPage.verifyEventMessages(data.carrierPreplanMessage);
                expect(verify_msg).toContain(data.sucessMesage);
            });
        });
    });
