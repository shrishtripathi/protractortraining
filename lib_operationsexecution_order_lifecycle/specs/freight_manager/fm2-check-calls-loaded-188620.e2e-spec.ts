import { FreightManager2Page } from '../../pages/freight_manager/freight-manager-2.po';
import { DataProvider } from "../../data/dataProvider";
import { OrderSegmentPage } from '../../pages/freight_manager/order-segment.po';
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";

let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');

//TC 188620 : FM2 Check Calls Loaded
using(DataProvider.Tc_188620, async function (data) {

    describe("FM2 Check Calls Loaded", () => {
        let preplannedOrderNo : any;
        it("Should open Freight Manager2 url", async () => {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
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

        it("Should click on driver link", async function () {
            preplannedOrderNo = await orderSegmentPage.verifyPreplannedOrder(data.tableId, data.power, data.driver);
            await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(preplannedOrderNo);
        });

        it("verify Check Calls Details screen opens", async () => {
            await checkCallDetailsPage.verifyCheckCallDetailsPage();
        });

        it("Hover status Option from header", async () => {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.checkcalltabName);
        });

        it("Should click on loaded option under Status tab", async () => {           
            await freightManager2Page.clickHeaderDropDownOption(data.checkCalloption);
        });

        it("should enter loaded details", async () => {
            await checkCallDetailsPage.enterDetailsInLoaded();
        });

        it("should click on update button", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

    });

});