import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { DataProvider } from "../../data/dataProvider";
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';

let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');

//TC 177404: FM2 Preplan Verification
using(DataProvider.Tc_177404, async function (data) {

    describe("FM2 Preplan Verification", () => {

        it("Should open Freight Manager2 url", async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
        });

        it("Verifying that Freight Manger page is displayed", async function () {
            console.log("data.verifyFreightManagerTitle:"+data.verifyFreightManagerTitle);
            await expect<any>(freightManager2Page.verifyFreightManagerPage()).toBe(data.verifyFreightManagerTitle);
        });

        it("Should click on Order Segment option under Planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
        });

        it("Should enter order number M529402 in Order Number field", async () => {
            await orderSegmentPage.enterOrderNumber(orderSegmentPage.orderNoInput, data.orderNumber);
        });

        it("Should click on Search button", async () => {
            await orderSegmentPage.clickSearchButton();
        });

        it("Verifying that Power Driver 332023 is displayed", async function () {
            await expect<any>(orderSegmentPage.verifyPreplannedOrder(data.tableId, data.power, data.driver)).toBe(data.preplannedOrder);
        });

    });

});