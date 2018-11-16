import { browser, element, promise } from 'protractor';
import { PreferencePage } from '../../pages/pace/preference.po';
import { DataProvider } from '../../data/dataProvider';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { PaceHomePage } from '../../pages/pace/pace-home.po';
import { CashExpenseCreatePage } from '../../pages/pace/cash-expense-create.po';
import { ChargeDetailPage } from '../../pages/pace/charge-detial.po';
import { MainMenuPage } from '../../pages/pace/main-menu.po';
import { OrderLookupPage } from '../../pages/pace/order-lookup.po';
import { EditTripPage } from '../../pages/pace/edit-trip.po';


let myJbHuntHomePage = new MyJbHuntHomePage();
let preferencePage = new PreferencePage();
let paceHomePage=new PaceHomePage();
let orderLookupPage=new OrderLookupPage();
let editTripPage=new EditTripPage();
let using=require('jasmine-data-provider');

//TC 94944 Driver Belong to Whirlpool
using(DataProvider.Tc_94944, async function(data){
describe("Driver Belong to Whirlpool", function () {

    it("Open JBHunt pace url", async () => {
        await myJbHuntHomePage.openUrl(myJbHuntHomePage.paceUrl);
    });

    it("Login into pace application", async () => {
        await myJbHuntHomePage.loginIntoPaceApplication(data.username, data.password);
    });

    it("Click on PACE link from menu items", async () => {
        await paceHomePage.clickOnPaceTab();
    });

    it("Select Account from account dropdown list", async () => {
        await preferencePage.selectAccountValue(data.accountLabel,data.accountValue);
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
        await expect<any>(editTripPage.verifyEditTripPage()).toBeTruthy();
    });
    it("Verify order is Commingle Order", async () => {
        let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
        expect(result).toBeTruthy();
       
    });
    it("Should display Account driver code", async () => {
           let text:string=await editTripPage.verifyAccountDriver();
           expect(text).not.toBeNull();
    });
    it("Verify that the Billable Dispatch flags are set to 'Y' for Account driver.", async () => {
        let text:string=await editTripPage.verifyBillableDispatch();
        expect(text).toBe(data.yes)
    });
    it("Verify that the Payable Dispatch flags are set to 'Y' for Account driver.", async () => {
        let text:string=await editTripPage.verifyPayableDispatch();
        expect(text).toBe(data.yes);
    });
    it("Commingle Account drop-down list, select other account to view the same load for different account.", async () => {
        await editTripPage.selectCommingleDropDownOption(data.otherAccount)
    });
    it("Verify that the Billable Dispatch flags are set to 'Y' for Account driver.", async () => {
        let text:string=await editTripPage.verifyBillableDispatch();
        expect(text).toBe(data.yes)
    });
    it("Verify that the Payable Dispatch flags are set to 'Y' for Account driver.", async () => {
        let text:string=await editTripPage.verifyPayableDispatch();
        expect(text).toBe(data.no);
    });
    
    
});
});
