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
let mainMenuPage=new MainMenuPage();
let preferencePage = new PreferencePage();
let paceHomePage=new PaceHomePage();
let orderLookupPage=new OrderLookupPage();
let editTripPage=new EditTripPage();

let using=require('jasmine-data-provider');

//TC 94940 Number Screen - Commingle Flag
using(DataProvider.Tc_94940, async function(data){
describe("Number Screen - Commingle Flag", function () {

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
        await preferencePage.clickOnButton(data.saveButton);
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
    
    
    
});
});
