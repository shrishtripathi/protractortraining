import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { DataProvider } from "../../data/dataProvider";
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';

let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let using = require('jasmine-data-provider');

//TC 178994: FM2 Multi Pick/Drop Check Calls
using(DataProvider.Tc_178994, async function (data) {

    describe("FM2 Multi Pick/Drop Check Calls", () => {
        
        it("Should open Freight Manager2 url", async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
        });

        it("Verifying that Freight Manger page is displayed", async function () {            
            await expect<any>(freightManager2Page.verifyFreightManagerPage()).toBe(data.freightManagerTitle);
        });

        it("Should click on Order Segment option under Planning tab", async () => {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.option);
        });

        it("Should enter order number in Order Number field", async () => {
            await orderSegmentPage.enterOrderNumber(data.orderNumber, "Entering Order No");
        });

        it("Should click on Search button", async () => {
            await orderSegmentPage.clickSearchButton();
        });

        it("Verifying that Dispatch Number is displayed", async function () {           
            await expect<any>(orderSegmentPage.verifyPreplannedOrder(data.tableId, data.power, data.driver)).not.toBe('');
        });

    });

});