import { PaceHomePage } from "../../pages/pace/pace-home.po";
import { OrderLookupPage } from "../../pages/pace/order-lookup.po";
import { EditTripPage } from "../../pages/pace/edit-trip.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";
import { ReferenceNumberDetail } from "../../pages/pace/reference-number-detail.po";
import { browser } from "protractor";


let paceHomePage = new PaceHomePage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();
let referenceDetailPage = new ReferenceNumberDetail();

let using = require('jasmine-data-provider');

using(DataProvider.Tc_94696, async function (data) {
    //TC 94696 : APP-Ref Number Screen - Stop View
    describe("APP-Ref Number Screen - Stop View", () => {

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

        it("Should Click on OrderLoolup link on pace home page", async () => {
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

        it("Verifying Edit Trip page opens", async () => {
            await expect<any>(await editTripPage.verifyEditTripPage()).toBeTruthy();
        });

        it("Verify order is Commingle Order", async () => {
            let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
            await expect(result).toBeTruthy();
        });

        it("Click on Customer Reference Nbr/Type", async () => {
            await editTripPage.clickCustomerReferenceNumberLink();
        });

        it("Verify that Stop 1 Reference Number is locked", async () => {
            let stopPosition = await referenceDetailPage.getPositionOfElement(data.stop1)
            await referenceDetailPage.selectStopFromDropDown(data.stop1);
           
            await expect(stopPosition).toEqual(await referenceDetailPage.getPositionOfElement(data.stop1));
            
           
        });
        
    });
});
