
import { DataProvider } from '../../data/dataProvider';
import { PaceHomePage } from '../../pages/pace/pace-home.po';
import { PreferencePage } from '../../pages/pace/preference.po';
import { CashExpenseAndChargeDetail } from '../../pages/pace/cash-expense-and-charge-detail.po';
import { CashExpenseAndChargeListingPage } from '../../pages/pace/cash-expense-and-charge-listing.po';
import { CashExpenseLookUpPage } from '../../pages/pace/cash-expense-lookup-po';
import { BackhaulRevenueLookupPage } from '../../pages/pace/backhaul-revenue-lookup.po';
import { EditTripPage } from '../../pages/pace/edit-trip.po';
import { browser } from 'protractor';


let pacePage = new PaceHomePage();
let preferences = new PreferencePage();
let cashExpenseAndChargeDetail = new CashExpenseAndChargeDetail();
let cashExpenseAndChargeListing = new CashExpenseAndChargeListingPage();
let cashExpenseLookUP = new CashExpenseLookUpPage();
let backhaulRevenueLookupPage=new BackhaulRevenueLookupPage();
let editTripPage = new EditTripPage();
let using=require('jasmine-data-provider');

//TC 127143 PACE_Regression_1 Backhaul revenue lookup

using(DataProvider.Tc_127143, async function (data) {

    describe("PACE_Regression_1 Backhaul revenue lookup", () => {

        it("Should open pace url", async () => {
            await pacePage.openPaceUrl();
        });

        it("Login into pace application", async () => {
            await pacePage.loginIntoPaceApplication(data.username, data.password);
            
        });
        
        it("Should click 'pace tab'", async () => {
            await pacePage.clickOnLink(data.paceLink);
        });

        it("Should click 'account dropdown'", async () => {
            await preferences.clickOnDropDown(data.dropDownOption);
        });

        it("Should select 'YKK AP America -CHANC' to account dropdown", async () => {
            await preferences.selectDropDownOption(data.dropDownAccountOption);
        });

        it("Should click 'save button'", async () => {
            await preferences.clickOnButton(data.saveButton);
        });

        it("Should Click on 'Backhaul Revenue Lookup'", async () => {
            await pacePage.clickOnLink(data.backhaulRevenueLookupLink);
        });

        it("Should click 'Search button'", async () => {
            await backhaulRevenueLookupPage.clickSearchButton();
        });

        it("Should click 'Exit Button'", async () => {
            await backhaulRevenueLookupPage.clickExitButton();
        });

        it("Should click 'Edit Trip'", async () => {
            await backhaulRevenueLookupPage.clickEditTripButton();
        });

        it("verifying it returns to edit trip screen", async () => {
            await editTripPage.verifyEditTripPage();
        });

        it("Should click on order Number", async () => {
            await editTripPage.clickOnOrderNumberLink();
        });

        it("Verifying it returns to Order Details Screen", async () => {
            await expect<any>(backhaulRevenueLookupPage.verifyOrderDetailsPage).toBe("Order");
        });

      
    });

});
  
