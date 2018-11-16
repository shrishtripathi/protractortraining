import { PaceHomePage } from "../../pages/pace/pace-home.po";
import { OrderLookupPage } from "../../pages/pace/order-lookup.po";
import { EditTripPage } from "../../pages/pace/edit-trip.po";
import { StopUpdatePage } from "../../pages/pace/stop-update.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";
import { ReferenceNumberDetail } from "../../pages/pace/reference-number-detail.po";


let paceHomePage = new PaceHomePage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();
let referenceDetailPage = new ReferenceNumberDetail();

let using = require('jasmine-data-provider');

using(DataProvider.Tc_94601, async function (data) {
    //TC 94601 : Pace -Cust Services Screen - Add Reference Number
    describe("Cust Services Screen - Add Reference Number", () => {
        let orderNumber: string;
        it("Should Open My pace url", async () => {
            await paceHomePage.openPaceUrl();
        });

        it("Login into pace application", async () => {
            await paceHomePage.loginIntoPaceApplication(data.username, data.password);
        });

        it("Should Click on pace link on pace home page", async () => {
            await paceHomePage.clicklink(data.paceLink);
        });

        it("Should set Cornerstone LDCN - BALMDX to account dropdown", async () => {
            await preferencePage.selectAccountValue(data.accountLabel, data.accountValue);
        });

        it("Should Click on save button", async () => {
            await preferencePage.clickOnButton(data.saveButton);
        });

        it("Should Click on pace link on pace home page", async () => {
            await paceHomePage.clicklink(data.orderLookUpLink);
        });

        it("Should Click on Edit Trip button", async () => {
            await orderLookupPage.clickOnButton(data.editTripButton);
        });

        it("Verifying Edit Trip page opens", async () => {
            await expect<any>(editTripPage.verifyEditTripPage()).toBe(data.true);
        });

        it("Verify order is Commingle Order", async () => {
            let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
            expect(result).toBe(true);
        });

        it("Should get order number", async () => {
            orderNumber = await editTripPage.getOrderNumber();
        });

        it("Click on Customer Reference Nbr/Type", async () => {
            await editTripPage.clickCustomerReferenceNumberLink();
        });

        it("Select stop from stop dropdown", async () => {
            await referenceDetailPage.selectStop();
        });

        it("Click on Add button", async () => {
            await referenceDetailPage.clickAddButton();
        });

        it("Select an item from Customer Reference Type", async () => {
            await referenceDetailPage.selectCustomerReferenceType();
        });

        it("Enter Reference number on 'Customer Reference Number'", async () => {
            await referenceDetailPage.enterCustomerReferenceNumber(data.referenceNumber);
        });

        it("Click on Add Reference  button", async () => {
            await referenceDetailPage.clickAddReferenceNumberButton();
        });

        it("Click on Save button", async () => {
            await referenceDetailPage.clickSaveButton();
        });

        it("Verify reference number saved successfully", async () => {
           let result:boolean =  await referenceDetailPage.verifyPaceSuccessMessage(referenceDetailPage.saveMessage);
           expect(result).toBe(true);
        });
        
        it("Verify reference number under stop table", async () => {
            let result:boolean =  await referenceDetailPage.verifyReferenceNumberInStopTable(data.referenceNumber);
            expect(result).toBe(true);
         });
         
    });
});