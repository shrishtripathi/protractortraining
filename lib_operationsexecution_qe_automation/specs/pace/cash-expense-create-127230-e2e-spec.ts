import { browser, element, promise } from 'protractor';
import { PreferencePage } from '../../pages/pace/preference.po';
import { DataProvider } from '../../data/dataProvider';
import { MyJbHuntHomePage } from '../../pages/my-jbhunt-home.po';
import { PaceHomePage } from '../../pages/pace/pace-home.po';
import { CashExpenseCreatePage } from '../../pages/pace/cash-expense-create.po';
import { ChargeDetailPage } from '../../pages/pace/charge-detial.po';
import { MainMenuPage } from '../../pages/pace/main-menu.po';


let myJbHuntHomePage = new MyJbHuntHomePage();
let preferencePage = new PreferencePage();
let paceHomePage=new PaceHomePage();
let cashExpensePage=new CashExpenseCreatePage();
let chargeDetailPage=new ChargeDetailPage();
let mainMenuPage=new MainMenuPage();

let using=require('jasmine-data-provider');

//TC 127230 Cash expense create
using(DataProvider.Tc_127230, async function(data){
describe("Cash expense create", function () {
    let data_Values: string[] = [];
let value_Array:string[] =[];
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

    it("Click on Save button to save preference", async () => {
        await paceHomePage.clickOnSaveButton();
    });

    it("Click on Cash Expense Create.  link on main menu", async () => {
         await mainMenuPage.clickOnCashExpenseLink();
    });

    it("Click the dropdown next to Cash Expense Type, click to select FUEL", async () => {
        await cashExpensePage.selectTypeinCashExpenseDropdown(data.cashExpenseFuelType);
    });

    it("Click the calendar icon, click today's date.", async () => {
         await cashExpensePage.clickCalenderImage();
         await cashExpensePage.selectCurrentDate();
    });

    it("Click the white text box on the right side of the calendar icon, enter 23:00.", async () => {
        await cashExpensePage.enterCurrentTimeInHours();
    });

    it("Click the Create Cash Expense button.", async () => {
        await cashExpensePage.clickOnCashExpenseButton();
    });

    it("Enter information into the following text fields, JB Hunt Cost, 1; Invoice Amount, 1; Invoice Comment, test123. ", async () => {
        await chargeDetailPage.enterDataInJbhuntCostBox(data.cost);
        await chargeDetailPage.enterDataInInvoiceAmountBox(data.amount);
        await chargeDetailPage.enterDataInInvoiceCommentsBox(data.comments)
    });

    it("Click the dropdown tab next to Billing Period End Date, click to select the nearest future date. (Current date is 6/19/18, so I selected 6/23/18.) ", async () => {
         await chargeDetailPage.selectFutureDate();
    });

    it("Click the dropdown tab next to Invoice Desc, click to select FUEL-410 FuelSur Rev", async () => {
        await chargeDetailPage.selectInvoiceValue(data.invoiceValue);
    });

    it("Click the Save button.", async () => {
        await chargeDetailPage.clickOnSaveButton();
    });
    it("It should display Main menu Page.", async () => {
       let flag:boolean= await mainMenuPage.verifyMainMenupage();
       expect(flag).toBeTruthy();
    });
    


    
});
});
