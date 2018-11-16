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

//TC 94621 Edit Trip - Stop Class Update
using(DataProvider.TC_94621, async function (data) {
    describe("Edit Trip - Stop Class Update", () => {
       
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
            await expect<any>(editTripPage.getPageTitle()).toBe(data.editTripPageTitle);
        });

        it("Verify order is Commingle Order", async () => {
            let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
            expect(result).toBe(true);
        });

        it("Should click on first stop", async () => {
            await editTripPage.clickOnStopDetailsRow(data.stopDetailsRow);
        });

        it("Verifying that Stop Update page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.stopUpdateTitle);
        });

        it("Should select home delivery to stop classification drop down", async () => {
            await stopUpdatePage.setStopClassificationDropDown(data.classificationDropDown);
        });
        
        it("Should Click on update button", async () => {
            await stopUpdatePage.clickOnButton(data.updateButton);
        });

        it("Should Click on cancel button", async () => {
            await stopUpdatePage.clickOnButton(data.cancelButton);
        });

        it("Verifying that edit trip page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.editTripPageTitle);
        });

        it("Should click on first stop", async () => {
            await editTripPage.clickOnStopDetailsRow(data.stopDetailsRow);
        });

        it("Verifying that Stop Update page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.stopUpdateTitle);
        });

        it("Verifying that Stop classification option", async () => {
            await expect<any>(stopUpdatePage.verifyStopClassificationDropDownOtion()).toBe(data.classificationDropDown);
        });


    });

});
