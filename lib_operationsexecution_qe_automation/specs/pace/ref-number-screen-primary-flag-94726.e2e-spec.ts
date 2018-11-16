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

//TC 94726: PACE APP-Ref Number Screen - Primary Flag
using(DataProvider.Tc_94726, async function (data) {

    describe("Ref Number Screen - Primary Flag", () => {

        let referenceNumber: string;

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

        it("Verifying 'Billing Period Ending' Radio button is selected by default", async () => {
            await orderLookupPage.clickRadioButton(data.billingPeriodRadioButton);
        });

        it("Should select 'EMPTY' to order status dropdown", async () => {
            await orderLookupPage.setStatusOfOrderDropdown(data.orderDropDownStatus);
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

        it("Should note down the Reference Number and click on customer reference number link", async () => {
            await editTripPage.clickCustomerReferenceNumberLink();
            referenceNumber = editTripPage.customerReferenceNumer;
        });
    
        it("Should find the 'Primary' Reference Number where Primary radio button is flagged", async () => {
            await expect<any>(editTripPage.verifySelectedPrimaryFlag()).toBeTruthy();
        });

        it("Verify that there is only one 'Primary' Flag (Radio button) is set on this Load", async () => {
            await expect(editTripPage.verifySelectedPrimaryFlag()).toBeTruthy();
        });

        it("Verifying that Primary Referece number and noted reference number of Edit Trip screen matched",  async () => {
            await expect(await editTripPage.getCustomerReferenceNumber()).toBe(referenceNumber);
        });

    });

});
