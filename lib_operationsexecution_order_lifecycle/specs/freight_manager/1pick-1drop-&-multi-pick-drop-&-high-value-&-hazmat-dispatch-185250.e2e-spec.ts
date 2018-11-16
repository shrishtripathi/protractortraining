import { browser } from "protractor";
import { FreightManager2Page } from "../../pages/freight_manager/freight-manager-2.po";
import { OrderSegmentPage } from "../../pages/freight_manager/order-segment.po";
import { CheckCallDetailsPage } from "../../pages/freight_manager/check-call-details.po";
import { CustomerPoolPage } from "../../pages/freight_manager/customer-pool.po";
import { DataProvider } from "../../data/dataProvider";
import { protractor } from "protractor/built/ptor";

let freightManagerPage = new FreightManager2Page();
let orderSegmentPage = new OrderSegmentPage();
let checkCallDetailsPage = new CheckCallDetailsPage();
let customerPoolPage = new CustomerPoolPage();
let using = require('jasmine-data-provider');

//TC-185250 :FM2 1Pick/1Drop & Multi Pick/Drop & High Value & Hazmat Dispatch
using(DataProvider.Tc_185250, async function (data) {

    describe("1Pick/1Drop & Multi Pick/Drop & High Value & Hazmat Dispatch", function () {
        //let tractorNo: string;
        let chassisNo: string;
        let equipmentNo: string;
        //let orderNO: string;


        it("Should open homepage", async () => {
            await freightManagerPage.navigateToAppHome(freightManagerPage.freightManager2);
        });

        it("Should click on Customer Pool option under Equipment tab", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.equipmentTab, data.optionCustomerPool);
        });

        it("Should set values in customer pool page", async () => {
            await customerPoolPage.setValuesInEquipmentPoolLookup(data.customerPool_Division, data.customerPool_CustCode, "", "");
        })

        it("Should click on search button on customer Pool screen", async () => {
            await customerPoolPage.clickSearchButton();
        });

        it("Should find equipment number with prefix JBHU and LT St Empty", async () => {
            equipmentNo = await customerPoolPage.getEquipmentNumberFromCustomerPoolTable(data.customerPool_Column1, data.customerPool_Column1Value, data.customerPool_Column2, data.customerPool_Column2Value, data.customerPool_RequiredColumn);
        });

        it("Should click on Order Segment Option", async () => {
            await freightManagerPage.selectOptionFromFreightManager2(data.tabName, data.optionOrderSegment);
        });

        it("Should enter the order Number on Order Segment screen", async () => {
            await orderSegmentPage.enterOrderNumber(data.orderNO, "Order Number");
        });

        it("Should click on Search button on Order Segment screen", async () => {
            await orderSegmentPage.clickSearchButton();
        });

        it("Should click the driver number hyperlink underneath Power Driver", async () => {
            await orderSegmentPage.clickTractorNumberUnderPowerDriverColumn(data.tractorNo);
        });

        it("verify Check Calls Details screen opens", async () => {
            await checkCallDetailsPage.verifyCheckCallDetailsPage();
        });

        it("Should hover status Option from header", async () => {
            await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Should click on Comment option", async () => {
            await freightManagerPage.clickHeaderDropDownOption(data.headerDropDownOptionComment);
        });

        it("Wait till Comment window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Should enter details in Comment Tab", async () => {
            await customerPoolPage.enterDetailsInCommentPopup(data.commentPopup_TrlrCode, equipmentNo);
        });

        it("Should click on update button on Comment window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Should hover status Option from header", async () => {
            await freightManagerPage.hoverOverFM2PageHeaderOption(data.headerOptionStatus);
        });

        it("Should click on dispatch option", async () => {
            await freightManagerPage.clickHeaderDropDownOption(data.headerDropDownOptionDispatch);
        });

        it("Wait till dispatch window opens", async () => {
            await checkCallDetailsPage.waitTillDispatchWindowLoad();
        });

        it("Should click on update button on dispatch window", async () => {
            await checkCallDetailsPage.clickOnUpdateOnPopup();
        });

        it("Verify Dispatch is completed", async () => {
            let result: boolean = await checkCallDetailsPage.verifyCheckCallHistorySuccessful(data.transactionValue);
            await expect(result).toBeTruthy();
        });

        it("Should take note of the Chassis number", async () => {
            chassisNo = await checkCallDetailsPage.getElementText(checkCallDetailsPage.chassisNumber);
            expect(chassisNo).not.toBeUndefined();
        });

    });
});
