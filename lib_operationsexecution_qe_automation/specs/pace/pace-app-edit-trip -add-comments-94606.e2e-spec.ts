import { PaceHomePage } from "../../pages/pace/pace-home.po";
import { OrderLookupPage } from "../../pages/pace/order-lookup.po";
import { StopUpdatePage } from "../../pages/pace/stop-update.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";
import { MainMenuPage } from "../../pages/pace/main-menu.po";
import { EditTripPage } from "../../pages/pace/edit-trip.po";


let paceHomePage = new PaceHomePage();
let mainMenuPage=new MainMenuPage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();
let stopUpdatePage = new StopUpdatePage();

let using=require('jasmine-data-provider');

using(DataProvider.Tc_94606, async function(data){
describe("2.2.1-PACE APP-Edit Trip - Add Comments_94606", () => {
    let orderNumber: string;
    it("Should Open My pace url", async () => {
        await paceHomePage.openPaceUrl();
    });

    it("Login into pace application", async () => {
        await paceHomePage.loginIntoPaceApplication(data.username, data.password);
    });

    it("Should Click on pace link on pace home page", async () => {
        await paceHomePage.click(paceHomePage.paceTab);
    });

    it("Should set Whirlpool LDCN - AUSTXX to account dropdown", async () => {
        await preferencePage.selectAccountValue(data.accountLabel,data.accountValue);
    });

    it("Should Click on save button", async () => {
        await preferencePage.click(preferencePage.saveButton);
    });

    it("Should Click on Order Look up link on pace home page", async () => {
        await mainMenuPage.click(mainMenuPage.orderLookUpLink);
    });
    it("Verifying 'Billing Period Ending' Radio button is selected by default", async () => {
        await orderLookupPage.clickRadioButton(data.billingPeriodRadioButton);
    });

    it("Should select 'EMPTY' to order status dropdown", async () => {
        await orderLookupPage.setStatusOfOrderDropdown(data.orderStatus);
    });
    it("Should Click on Edit Trip button", async () => {
        await orderLookupPage.click(orderLookupPage.editTripButton);
    });

    it("Verifying Edit Trip page opens", async () => {
        await expect<any>(editTripPage.verifyEditTripPage()).toBe(data.true);
    });
    it("Verify order is Commingle Order", async () => {
        let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
        expect(result).toBeTruthy();
    });
    it("Should get order number", async () => {
        orderNumber = await editTripPage.getOrderNumber();
    });
    it("Should mouse over and click on customer code", async () => {
        await editTripPage.mouseOverAndClickCustomerCode();
    });
    it("Should Add a comment on 'Stop Comment' field.", async () => {
        await stopUpdatePage.addComment(data.comment);
    });
    it("Should click on 'Update button'", async () => {
        await stopUpdatePage.clickOnUpdateButton();
    });
    it("Should click on 'Cancel button'", async () => {
        await stopUpdatePage.clickOnCancelButton();
    });
    it("Should mouse over and click on customer code", async () => {
        await editTripPage.mouseOverAndClickCustomerCode();
    });
    it("Should verfiy that the comment is saved.", async () => {
        let comment:string=await stopUpdatePage.verifyComment();
        expect(comment).toBe(data.comment);
    });
 });
});