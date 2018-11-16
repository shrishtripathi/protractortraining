
import { DataProvider } from '../../data/dataProvider';
import { PaceHomePage } from '../../pages/pace/pace-home.po';
import { PreferencePage } from '../../pages/pace/preference.po';
import { CashExpenseAndChargeDetail } from '../../pages/pace/cash-expense-and-charge-detail.po';
import { CashExpenseAndChargeListingPage } from '../../pages/pace/cash-expense-and-charge-listing.po';
import { CashExpenseLookUpPage } from '../../pages/pace/cash-expense-lookup-po';
import { MainMenuPage } from '../../pages/pace/main-menu.po';
import { browser } from 'protractor';


let pacePage = new PaceHomePage();
let preferences = new PreferencePage();
let mainMenuPage=new MainMenuPage();
let cashExpenseAndChargeDetail = new CashExpenseAndChargeDetail();
let cashExpenseAndChargeListing = new CashExpenseAndChargeListingPage();
let cashExpenseLookUp = new CashExpenseLookUpPage();
let using=require('jasmine-data-provider');

//TC 127146 PPACE_Regression_2 Cash expense search and edit
using(DataProvider.Tc_127146, async function (data) {

    describe("PACE_Regression_2 Cash expense search and edit", () => {
        it("Should open pace url", async () => {
            await pacePage.openPaceUrl();
        });
        it("Login into pace application", async () => {
            try {
                await pacePage.loginIntoPaceApplication(data.username, data.password);
            } catch (error) {
                console.log("user is LogedIn")
            }
        });
        
        it("Should click 'pace tab'", async () => {
            await pacePage.click(pacePage.paceTab);
        });
        it("Select Account from account dropdown list", async () => {
            await preferences.selectAccountValue(data.accountLabel,data.accountValue);
        });
        it("Should click 'save button'", async () => {
            await preferences.click(preferences.saveButton);
        });
        it("Should Click on 'Cash Expense Lookup'", async () => {
            await mainMenuPage.click(mainMenuPage.cashExpenseLookUpLink);
        });
        it("Should click billing period ending dropdowwn and select to choose 6/23/18", async () => {
            await cashExpenseLookUp.selectBillingPeriodDate();
        });
        it("Should click csh expense type dropdowwn and select to select Fuel", async () => {
            await cashExpenseLookUp.selectValueFromCashExpenseTypeDropdown(data.cashExpenseFuelType);
        });
        it("Should click 'Search button'", async () => {
            await cashExpenseLookUp.click(cashExpenseLookUp.searchButton);
        }); 
        it("Should Click the hyperlink underneath Cash Expense Type", async () => {
            await cashExpenseAndChargeListing.clickOnFuelLink();
        });
        it("Should enter some information in 'JB Hunt Cost field'", async () => {
            await cashExpenseAndChargeDetail.jbhuntCostField(data.cost)
        });
        it("Should enter some information in 'Internal Comment field'", async () => {
            await cashExpenseAndChargeDetail.internalCommentsField(data.comments)
        });
        it("Should enter some information in 'Invoice Amount field'", async () => {
            await cashExpenseAndChargeDetail.invoiceAmountField(data.amount)
        });
        it("Should click 'cancel'", async () => {
            await cashExpenseAndChargeDetail.click(cashExpenseAndChargeDetail.cancelButton);
        });
        it("Should again click 'cancel'", async () => {
            await cashExpenseAndChargeListing.click(cashExpenseAndChargeListing.cancelButton);
        });
        it("Should click 'exit'", async () => {
            await cashExpenseLookUp.click(cashExpenseLookUp.exitButton);
        });
        it("Should navigate to Main menu page", async () => {
            let flag:boolean= await mainMenuPage.verifyMainMenupage();
            expect(flag).toBeTruthy();
        });

    });

});
  
