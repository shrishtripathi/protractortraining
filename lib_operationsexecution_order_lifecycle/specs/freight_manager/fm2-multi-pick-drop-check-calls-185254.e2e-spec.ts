import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { DataProvider } from "../../data/dataProvider";
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";

let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');

//TC 185254 : FM2 Multi Pick/Drop Check Calls
using(DataProvider.Tc_185254, async function (data) {

    describe("FM2 Multi Pick/Drop Check Calls", () => {
        let preplannedOrderNo : any;
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

        it("Verifying that Power Driver 328285 is displayed", async function () {
            preplannedOrderNo = await orderSegmentPage.verifyPreplannedOrder(data.tableId, data.power, data.driver);
            await expect<any>(orderSegmentPage.verifyPreplannedOrder(data.tableId, data.power, data.driver)).toBe(data.preplannedOrder);
        });

        it("Click on Power Driver 328285", async function () {
            await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(preplannedOrderNo);
        });

        it("verify Check Calls Details screen opens", async () => {
            await checkCallDetailsPage.verifyCheckCallDetailsPage();
        });

        it("Hover status Option from header", async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.checkcalltabName);
        });

        it("Should click on Arrival/Loaded option under Status tab", async () => {           
            await freightManager2Page.clickHeaderDropDownOption(data.checkCalloption);
        });

        it("Wait till Comment window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

    });

});