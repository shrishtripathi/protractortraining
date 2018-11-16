import { DataProvider } from '../../data/dataProvider';
import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';

let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');


// TC #185435: FM2 Preplan Verification
using(DataProvider.Tc_185435, async function (data) {

    describe("Preplan Verification ", () => {
        it("Should Launch Freight Manager Application And Login If Required", async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
        });

        it("Should Hover Over The Planning Tab, Click Order Segment To Select", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabNames, data.tabOption);
        });

        it("Should Enter Order Number In The White Text Box Underneath Order#", async () => {
            await orderSegmentPage.enterOrderNumber(data.orderNumber, 'Order #');
        });

        it("Should Click On Search Button", async () => {
            await orderSegmentPage.clickOnSearchButton();
        });

        it("The table should be displayed and under the Carrier Code column the Carrier name must be displayed", async () => {
            expect<any>(await orderSegmentPage.verifyPreplannedOrder(data.tableId, data.carrier, data.code)).toBe(data.mgas);
        });

    });
    
});
