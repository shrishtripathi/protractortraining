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

//TC 94594 : PACE APP-Cust Services Screen - Move Ref Number
using(DataProvider.Tc_94594, async function (data) {

    describe("Cust Services Screen - Move Reference Number", () => {
        let parentRefNumberToBeMoved: string;
        let childRefNumberToBeMoved: string;
        let accountName: string;

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

        it("Should Click on order lookup link on pace home page", async () => {
            await paceHomePage.clicklink(data.orderLookUpLink);
        });

        it("Should Click on Edit Trip button", async () => {
            await orderLookupPage.clickOnButton(data.editTripButton);
        });

        it("Verifying Edit Trip page opens", async () => {
            await expect<any>(await editTripPage.verifyEditTripPage()).toBe(data.true);
        });

        it("Verify order is Commingle Order", async () => {
            let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
            await expect(result).toBeTruthy();
        });

        it("Click on Customer Reference Nbr/Type", async () => {
            await editTripPage.clickCustomerReferenceNumberLink();
        });

        it("Select parent reference number from hierarchy with move dropdown", async () => {
            let parentRefDetails = await referenceDetailPage.selectParentReferenceWithMoveDropDown();
            parentRefNumberToBeMoved = parentRefDetails.referenceText;
            accountName = parentRefDetails.accountName;
        });

        it("Verify parent reference number moved successfully", async () => {
            let result: boolean = await referenceDetailPage.verifyPaceSuccessMessage(referenceDetailPage.moveMessage);
            await expect(result).toBeTruthy();
        });

        it("Verify Parent reference number moved to desire stop", async () => {
            let result: boolean = await referenceDetailPage.verifyParentReferenceAfterMoveToOtherStop(accountName, parentRefNumberToBeMoved);
            await expect(result).toBeTruthy();
        });

        it("Select child reference number from hierarchy with move dropdown", async () => {
            let childRefDetails = await referenceDetailPage.selectChildReferenceWithMoveDropDown();
            childRefNumberToBeMoved = childRefDetails.referenceText;
            accountName = childRefDetails.accountName;
        });

        it("Verify child reference number moved successfully", async () => {
            let result: boolean = await referenceDetailPage.verifyPaceSuccessMessage(referenceDetailPage.moveMessage);
            await expect(result).toBeTruthy();
        });

        it("Verify child reference number moved to desire stop", async () => {
            let result: boolean = await referenceDetailPage.verifyChildReferenceAfterMoveToOtherStop(accountName, childRefNumberToBeMoved);
            await expect(result).toBeTruthy();
        });

    });
});
