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
import { ReferenceNumberDetail } from '../../pages/pace/reference-number-detail.po';


let myJbHuntHomePage = new MyJbHuntHomePage();
let preferencePage = new PreferencePage();
let mainMenuPage=new MainMenuPage();
let referenceNumberPage=new ReferenceNumberDetail();
let paceHomePage=new PaceHomePage();
let orderLookupPage=new OrderLookupPage();
let editTripPage=new EditTripPage();

let using=require('jasmine-data-provider');

//TC 94741 Number Screen - Commingle Flag
using(DataProvider.Tc_94741, async function(data){
describe("Number Screen - BOL Search", function () {

    it("Open JBHunt pace url", async () => {
        await myJbHuntHomePage.openUrl(myJbHuntHomePage.paceUrl);
    });

    it("Login into pace application", async () => {
        await myJbHuntHomePage.loginIntoPaceApplication(data.username, data.password);
    });

    it("Click on PACE link from menu items", async () => {
        await paceHomePage.click(paceHomePage.paceTab);
    });

    it("Select Account from account dropdown list", async () => {
        await preferencePage.selectAccountValue(data.accountLabel,data.accountValue);
    });
    it("Should Click on save button", async () => {
        await paceHomePage.click(paceHomePage.saveButton);
    });
    it("Should Click on pace link on pace home page", async () => {
        await mainMenuPage.click(mainMenuPage.orderLookUpLink);
    });

    it("Should Click on Edit Trip button", async () => {
        await orderLookupPage.click(orderLookupPage.editTripButton);
    });

    it("Verifying Edit Trip page opens", async () => {
        await expect<any>(editTripPage.verifyEditTripPage()).toBeTruthy();
    });
    it("Verify order is Commingle Order", async () => {
        let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
        expect(result).toBe(true);
       
    });
    it("Verify Account is Commingle Account", async () => {
        let result: boolean = await editTripPage.verifyCommingleAccount();
        expect(result).toBe(true);
       
    });
    it("Should Click 'Customer Reference Nbr/Type' link on upper left.", async () => {
        await editTripPage.click(editTripPage.customerReferenceLink);
    });
    it("Verifying Reference Number Detail page opens", async () => {
        await expect<any>(referenceNumberPage.verifyReferenceNumberDetailPage()).toBeTruthy();
    });
    it("Should Click Search button", async () => {
        await referenceNumberPage.click(referenceNumberPage.searchButton);
    });
    it("Verifying Selected item's Reference type is displayed on top of the view.", async () => {
        await expect<any>(referenceNumberPage.verifyCustomerReferenceTypeDropdown(3)).toBeTruthy();
    });
    it("Verifying Each items selected is displayed on top of the page.", async () => {
        await expect<any>(referenceNumberPage.verifyCustomerReferenceTypeDropdown(2)).toBeTruthy();
    });
    it("Verifying Selected stop's Reference Number is displayed on top of the view. ", async () => {
        await expect<any>(referenceNumberPage.verifyCustomerStopDropdown(2)).toBeTruthy();
    });
    it("Verifying Each Stop's Reference Number is displayed on top and matched.", async () => {
        await expect<any>(referenceNumberPage.verifyCustomerStopDropdown(1)).toBeTruthy();
    });
    it("Should Click Search button", async () => {
        await referenceNumberPage.click(referenceNumberPage.searchButton);
    });

    
    
    
});
});
