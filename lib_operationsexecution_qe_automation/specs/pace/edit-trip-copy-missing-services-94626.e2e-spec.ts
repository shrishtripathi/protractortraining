import { PaceHomePage } from "../../pages/PACE/pace-home.po";
import { OrderLookupPage } from "../../pages/PACE/order-lookup.po";
import { EditTripPage } from "../../pages/PACE/edit-trip.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";
import { StopUpdatePage } from "../../pages/pace/stop-update.po";
import { browser } from "protractor";

let paceHomePage = new PaceHomePage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();
let stopUpdatePage = new StopUpdatePage();
let using = require('jasmine-data-provider');

//TC 94626: Edit Trip - Edit Trip - Copy Missing Services
using(DataProvider.Tc_94626, async function (data) {

    describe("Edit Trip - Edit Trip - Copy Missing Services", () => {

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

        it("Should click on 'order lookup'", async () => {
            await preferencePage.clickOnLink(data.orderLookUpLink);
        });

        it("Verifying 'Billing Period Ending' Radio button is selected by default",async() => {
            await orderLookupPage.clickRadioButton(data.billingPeriodRadioButton);
        });
    
        it("Should select 'EMPTY' to order status dropdown",async() => {
            await orderLookupPage.setStatusOfOrderDropdown(data.orderStatus);
        });

        it("Should Click on Edit Trip button", async () => {
            await orderLookupPage.clickOnButton(data.editTripButton);
        });
    
        it("Verifying Edit Trip page opens", async () => {
            await expect<any>(editTripPage.verifyEditTripPage()).toBeTruthy();
        });

        it("Verifying that the order is 'Commingle Order'", async () => {
            let orderText = await editTripPage.getCommingleOrder(data.commingleOrder);
            await expect<any>(orderText).toBe(data.commingleOrder);
        });

        it("Should hover over to a Customer Code and click on a second or third stop", async () => {
            await editTripPage.clickOnStopDetailsRow(data.rownumber);
        });

        it("Verifying that Stop Update page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.stopUpdateTitle);
        });

        it("Should click on Customer Services link", async () => {
            await stopUpdatePage.clickCustomerServiceLink();
        });

        it("Verifying that Customer Services page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.customerServicesTitle);
        });

        it("Should delete services in 'Actual' to make it less than the 'Planned' so that you can copy and fill up the missing services to 'Actual' section", async () => {
            await stopUpdatePage.deleteAllActualServices();
        });

        it("Should click on 'Copy Missing Services' button ", async () => {
            await stopUpdatePage.clickOnButton(data.copyMissingServicesButton);
        });

        it("Should click on 'Save' button ", async () => {
            await stopUpdatePage.clickOnButton(data.saveButton);
            await stopUpdatePage.waitForElementIsEnabled(stopUpdatePage.resultsContent);
        });

        it("Should click on 'Exit' button ", async () => {
            await stopUpdatePage.clickOnButton(data.exitButton);
            await stopUpdatePage.acceptingAlert();
        });

        it("Should click on Customer Services link", async () => {
            await stopUpdatePage.clickCustomerServiceLink();
        });

        it("Verifying that Customer Services page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.customerServicesTitle);
        });

        it("Verifying that saved the services you copied to Actual", async () => {
            await expect(stopUpdatePage.verifyServicesCopiedToActualFromPlanned()).toBeTruthy();
        });

    });

});
