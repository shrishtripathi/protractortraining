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

using(DataProvider.Tc_94591, async function (data) {
    //TC 94591: Pace -Cust Services Screen - Delete parent child ref
    describe("Cust Services Screen - Delete parent child ref", () => {
        let childRefNumberTobeDeleted: string;
        let parentRefNumberTobeDeleted: string;

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
            await expect(result).toBeTruthy();
        });

        it("Should get order number", async () => {
            await editTripPage.getOrderNumber();
        });

        it("Click on Customer Reference Nbr/Type", async () => {
            await editTripPage.clickCustomerReferenceNumberLink();
        });

        it("Select child reference number from hierarchy", async () => {
            childRefNumberTobeDeleted = await referenceDetailPage.selectChildReferenceNumber();
            console.log(childRefNumberTobeDeleted);
        });

        it("Click on Delete button", async () => {
            await referenceDetailPage.clickDeleteButton();
        });

        it("Verify child reference number deleted successfully", async () => {
            let result: boolean = await referenceDetailPage.verifyPaceSuccessMessage(referenceDetailPage.deleteMessage);
            await expect(result).toBeTruthy();
        });

        it("Verify child reference number got deleted", async () => {
            let result: boolean = await referenceDetailPage.verifyReferenceNumberInStopTable(childRefNumberTobeDeleted);
            await expect(result).toBeFalsy();
        });

        it("Select parent reference number from hierarchy", async () => {
            parentRefNumberTobeDeleted = await referenceDetailPage.selectParentReferenceNumber();
            console.log(parentRefNumberTobeDeleted);
        });

        it("Click on Delete button", async () => {
            await referenceDetailPage.clickDeleteButton();
        });

        it("Check if alert present and accept alert", async () => {
            await referenceDetailPage.checkAlertAndAccept();
        });

        it("Verify parent reference number deleted successfully", async () => {
            let result: boolean = await referenceDetailPage.verifyPaceSuccessMessage(referenceDetailPage.deleteMessage);
            await expect(result).toBeTruthy();
        });

        it("Verify parent reference number got deleted", async () => {
            let result: boolean = await referenceDetailPage.verifyReferenceNumberInStopTable(parentRefNumberTobeDeleted);
            await expect(result).toBeFalsy();
        });

    });
});