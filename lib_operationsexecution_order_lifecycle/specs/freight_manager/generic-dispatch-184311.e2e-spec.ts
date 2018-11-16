import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";

let freightManager2Page = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let using = require('jasmine-data-provider');

//TC-184310 :Generic Dispatch
using(DataProvider.Tc_184311, async function (data) {
    describe("Generic Dispatch", async function () {

        it("Should Launch Freight Manager Application And Login If Required", async function () {
            await freightManager2Page.navigateToAppHome(freightManager2Page.freightManager2);
        });

        it("Verifying That Freight Manager Page Is Displayed", async function () {
            await expect<any>(browser.getTitle()).toBe(data.freightManagerPagetitle);
        });
        
        it("Should Hover Over The Planning Tab, Click Order Segment To Select", async function () {
            await freightManager2Page.selectOptionFromFreightManager2(data.tabName, data.tabOption);
        });

        it("Should Enter Load Number In The White Text Box Underneath Order#", async function () {
            await orderSegmentPage.enterOrderNumber(data.loadNumber, 'Order #');
        });

        it("Should Click On Search Button", async function () {
            await orderSegmentPage.clickOnSearchButton();
        });

        it("Should Click On Driver Number Hyperlink Underneath Power Drive", async function () {
            await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(data.tractorNo);
        });

        it("Verifying Check Calls Details Is Displayed", async function () {
            await checkCallDetailsPage.verifyCheckCallDetailsPage();
        });

        it("Should Hover Over Status Option From Header", async function () {
            await freightManager2Page.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Should Click On Dispatch Option", async function () {
            await freightManager2Page.clickHeaderDropDownOption(data.headerDropDownOptionDispatch);
        });

        it("Should Wait Till Dispatch Window Opens", async function () {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Should Click On Update Button In Dispatch Window", async function () {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Verifying Dispatch Is Completed", async function () {
            let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.transactionValue);
            await expect(result).toBeTruthy();
        });
    });
});