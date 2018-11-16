import { PaceHomePage } from "../../pages/pace/pace-home.po";
import { OrderLookupPage } from "../../pages/pace/order-lookup.po";
import { EditTripPage } from "../../pages/pace/edit-trip.po";
import { StopUpdatePage } from "../../pages/pace/stop-update.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";
import { browser } from "protractor";


let paceHomePage = new PaceHomePage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();
let stopUpdatePage = new StopUpdatePage();

let using = require('jasmine-data-provider');

//TC 94614 Edit Trip - Edit Service
using(DataProvider.Tc_94614, async function (data) {
    describe("Edit Trip - Edit Service", () => {
       
        it("Should Open My pace url", async () => {
            await paceHomePage.openPaceUrl();
        });

        it("Login into pace application", async () => {
            await paceHomePage.loginIntoPaceApplication(data.username, data.password);
        });

        it("Should Click on pace link on pace home page", async () => {
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

        it("Should Click on Edit Trip button", async () => {
            await orderLookupPage.clickOnButton(data.editTripButton);
        });

        it("Verifying that edit trip page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.editTripPageTitle);
        });

        it("Verify order is Commingle Order", async () => {
            let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
            expect(result).toBe(true);
        });

        it("Should click on second stop", async () => {
            await editTripPage.clickOnStopDetailsRow(data.stopDetailsRow);
        });

        it("Verifying that Stop Update page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.stopUpdateTitle);
        });

        it("Should click on customer services link", async () => {
            await stopUpdatePage.clickCustomerServiceLink();
        });

        it("Verifying that customer services page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.customerServicesTitle);
        });

        it("Should insert a check mark on a row", async () => {
            await stopUpdatePage.clickOnStopCheckBox();
        });

        it("Should click on Edit Button", async () => {
            await stopUpdatePage.clickOnButton(data.editButton);
        });

        it("Should select 'RETURN' to customer specific dropdown", async () => {
            await stopUpdatePage.setDropdown(stopUpdatePage.customerSpecificServiceDropdown,data.customerSpecificServiceDropdownOption);
        });

        it("Should select option to exception Reason dropdown", async () => {
            await stopUpdatePage.setDropdown(stopUpdatePage.exceptionReasonDropdown,data.expectionReasonDropDownOptionValue);
        });

        it("Should Click on save button", async () => {
            await stopUpdatePage.clickOnButton(data.saveButton);
        });

        it("Should Click on exit button", async () => {
            await stopUpdatePage.clickOnButton(data.exitButton);
            await stopUpdatePage.acceptingAlert();
        });

        it("Verifying that Stop Update page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.stopUpdateTitle);
        });

        it("Should click on customer services link", async () => {
            await stopUpdatePage.clickCustomerServiceLink();
        });

        it("Verifying that customer services page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.customerServicesTitle);
        });

        it("Verifying value 'RETURN' to customer specific dropdown", async () => {
            await expect<any>(stopUpdatePage.getText(stopUpdatePage.customerSpecificServiceDropdownOptionText)).toContain(data.customerSpecificServiceDropdownOptionText);
        });


    });

});
