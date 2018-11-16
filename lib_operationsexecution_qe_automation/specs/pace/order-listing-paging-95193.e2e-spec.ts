import { PaceHomePage } from "../../pages/PACE/pace-home.po";
import { OrderLookupPage } from "../../pages/PACE/order-lookup.po";
import { EditTripPage } from "../../pages/PACE/edit-trip.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";

let paceHomePage = new PaceHomePage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();

let using = require('jasmine-data-provider');

//TC 95193# PACE APP-Order Listing - Paging
using(DataProvider.Tc_95193, async function (data) {

    describe("Order Listing - Paging", () => {

        let orderNumber: string;

        it("Should Open Pace url", async () => {
            await paceHomePage.openPaceUrl();
        });

        it("Login into pace application", async () => {
            await paceHomePage.loginIntoPaceApplication(data.username, data.password);
        });

        it("Should click on pace link on pace home page", async () => {
            await paceHomePage.clicklink(data.paceLink);
        });

        it("Should set Whirlpool LDCN - AUSTXX to account dropdown", async () => {
            await preferencePage.selectAccountValue(data.accountLabel, data.accountValue);
        });

        it("Should Click on save button", async () => {
            await preferencePage.clickOnButton(data.saveButton);
        });

        it("Should Click on pace link on pace home page", async () => {
            await paceHomePage.clicklink(data.orderLookUpLink);
        });

        it("Verifying 'Billing Period Ending' Radio button is selected by default", async () => {
            await orderLookupPage.clickRadioButton(data.billingPeriodRadioButton);
        });

        it("Should select 'EMPTY' to order status dropdown", async () => {
            await orderLookupPage.setStatusOfOrderDropdown(data.orderStatus);
        });

        it("Should select 'Whirlpool LDCN' to load classification dropdown", async () => {
            await orderLookupPage.setLoadClassificationDropdown(data.loadClassificationDropdownValue);
        });

        it("Should Click on Edit Trip button", async () => {
            await orderLookupPage.clickOnButton(data.editTripButton);
        });

        it("Verifying that Edit Trip page opens", async () => {
            await expect<any>(await editTripPage.verifyEditTripPage()).toBeTruthy();
        })

        it("Verifying that order details is dispalyed in Edit Trip page", async () => {
            let orderDetails = await editTripPage.verifyOrderDetailsInEditTripPage();
            expect(orderDetails.orderStatus).toContain(data.orderStatus);
            expect(orderDetails.loadClassification).toContain(data.loadClassification);
        });

        it("Verifying that there are at least three orders listed in Order Number drop-down list ", async () => {
            await expect(await editTripPage.orderNumbersInDropDown.count()).toBeGreaterThanOrEqual(data.orders_3);
        });

        it("Verifying that 'Previous' button disabled and 'Next' button enabled.", async () => {
            await expect(await editTripPage.verifyDisabledOrEnabledButton(data.nextOrderButton)).toBeTruthy();
            await expect(await editTripPage.verifyDisabledOrEnabledButton(data.previousOrderButton)).toBeFalsy();
        });

        it("Should Click on Next button", async () => {
            await orderLookupPage.clickOnButton(data.nextButton);
        });

        it("Verifying that 'Previous' button enabled ", async () => {
            await expect(await editTripPage.verifyDisabledOrEnabledButton(data.previousOrderButton)).toBeTruthy();
        });

        it("Verifying that order status is 'Empty' and Load classification is 'Whirpool LDCN' and Billing period enddate is '2/3/18'", async () => {
            let orderDetails = await editTripPage.verifyOrderDetailsInEditTripPage();
            expect(orderDetails.orderStatus).toContain(data.orderStatus);
            expect(orderDetails.loadClassification).toContain(data.loadClassification);
        });

        it("Should Click on Previous button", async () => {
            await orderLookupPage.clickOnButton(data.previousButton);
        });

        it("Verifying that 'Previous' button disabled ", async () => {
            await expect(await editTripPage.verifyDisabledOrEnabledButton(data.previousOrderButton)).toBeFalsy();
        });

        it("Verifying that order status is 'Empty' and Load classification is 'Whirpool LDCN' and Billing period enddate is '2/3/18'", async () => {
            let orderDetails = await editTripPage.verifyOrderDetailsInEditTripPage();
            expect(orderDetails.orderStatus).toContain(data.orderStatus);
            expect(orderDetails.loadClassification).toContain(data.loadClassification);
        });

        it("Should select Last order number from Order Number dropdown", async () => {
            await editTripPage.selectLastOrderNumber(data.lastOrderNumber);
        });

        it("Verifying that 'Next' button disabled ", async () => {
            await expect(await editTripPage.verifyDisabledOrEnabledButton(data.nextOrderButton)).toBeFalsy();
        });

        it("Verifying that order status is 'Empty' and Load classification is 'Whirpool LDCN' and Billing period enddate is '2/3/18'", async () => {
            let orderDetails = await editTripPage.verifyOrderDetailsInEditTripPage();
            expect(orderDetails.orderStatus).toContain(data.orderStatus);
            expect(orderDetails.loadClassification).toContain(data.loadClassification);
        });

        it("Should select middle order number from Order Number dropdown", async () => {
            await editTripPage.selectLastOrderNumber(data.middleOrderNumber);
        });

        it("Verifying that order status is 'Empty' and Load classification is 'Whirpool LDCN' and Billing period enddate is '2/3/18'", async () => {
            let orderDetails = await editTripPage.verifyOrderDetailsInEditTripPage();
            expect(orderDetails.orderStatus).toContain(data.orderStatus);
            expect(orderDetails.loadClassification).toContain(data.loadClassification);
        });

        it("Should select first order number from Order Number dropdown", async () => {
            await editTripPage.selectLastOrderNumber(data.firstOrderNumber);
        });

        it("Verifying that 'Previous' button disabled ", async () => {
            await expect(await editTripPage.verifyDisabledOrEnabledButton(data.previousOrderButton)).toBeFalsy();
        });

        it("Verifying that order status is 'Empty' and Load classification is 'Whirpool LDCN' and Billing period enddate is '2/3/18'", async () => {
            let orderDetails = await editTripPage.verifyOrderDetailsInEditTripPage();
            expect(orderDetails.orderStatus).toContain(data.orderStatus);
            expect(orderDetails.loadClassification).toContain(data.loadClassification);
        });

    });

});