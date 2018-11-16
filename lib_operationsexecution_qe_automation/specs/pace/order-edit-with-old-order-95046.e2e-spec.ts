import { DataProvider } from '../../data/dataProvider';
import { PaceHomePage } from '../../pages/pace/pace-home.po';
import { PreferencePage } from '../../pages/pace/preference.po';
import { browser, Browser } from 'protractor';
import { OrderLookupPage } from '../../pages/pace/order-lookup.po';
import { EditTripPage } from '../../pages/pace/edit-trip.po';
import { OrderUpdatePage } from '../../pages/pace/order-update.po';
import { DispatchUpdatePage } from '../../pages/pace/dispatch-update-po';
import { MainMenuPage } from '../../pages/pace/main-menu.po';



let pacePage = new PaceHomePage();
let preferences = new PreferencePage();
let mainMenuPage=new MainMenuPage();
let orderLookupPage = new OrderLookupPage()
let editTripPage = new EditTripPage();
let orderUpdate = new OrderUpdatePage();
let dispatchUpdatePage = new DispatchUpdatePage();
let using=require('jasmine-data-provider');

//TC 95046 8.2B-PACE APP-Edit Trip - Order Edit With Old Order

using(DataProvider.Tc_95046, async function (data) {

    describe("PACE APP-Edit Trip - Order Edit With Old Order", () => {

        let loadClassificationValue : string = null;
        let dropDownValue:string=null;

        it("Should open pace url", async () => {
            await pacePage.openPaceUrl1();
        });

        it("Login into pace application", async () => {
            try {
                await pacePage.loginIntoPaceApplication(data.username, data.password);
            } catch (error) {
                console.log("user is LogedIn")
            }
        });
        
        it("Click on PACE link from menu items", async () => {
            await pacePage.click(pacePage.paceTab);
        });
        it("Should click 'account dropdown'", async () => {
            await preferences.clickOnDropDown(data.dropDownOption);
        });
        it("Should select 'Whirlpool LDCN - AUSTXX' to account dropdown", async () => {
            await preferences.selectDropDownOption(data.dropDownAccountOption);
        });
        it("Should Click on save button", async () => {
            await pacePage.click(pacePage.saveButton);
        });
        it("Should Click on pace link on pace home page", async () => {
            await mainMenuPage.click(mainMenuPage.orderLookUpLink);
        });
        it("Verifying 'Billing Period Ending' Radio button is selected by default", async () => {
            await orderLookupPage.clickRadioButton(data.billingPeriodRadioButton);
        });
        it("Should Click on Edit Trip button", async () => {
            await orderLookupPage.click(orderLookupPage.editTripButton);
        });
        it("Verifying Edit Trip page opens", async () => {
            await expect<any>(editTripPage.verifyEditTripPage()).toBeTruthy();
        });
        it("Should note load classificatiom", async () => {
            loadClassificationValue = await editTripPage.getTextFromClassification();
            console.log("load value "+loadClassificationValue)
        });
        it("Should click 'edit button'on order details screen", async () => {
            await editTripPage.click(editTripPage.editButton);
        });
        it("Should select value from dropdown", async () => {
            await editTripPage.click(editTripPage.loadClassificationDropDown);
            dropDownValue=await editTripPage.getTextfromLoadClassificationDropDown();
            console.log("drop down value "+dropDownValue);
        });
        it("Should click 'update button'on order update screen", async () => {
            await orderUpdate.click(editTripPage.updateButton);
        });
        it("Verify that 'Load Classification' is updated on all dispatches and stops.", async () => {
            loadClassificationValue = await editTripPage.getTextFromClassification();
            expect(loadClassificationValue).toBe(dropDownValue);
         });
        it("Should click 'edit button'on dispatch update screen", async () => {
            await editTripPage.click(editTripPage.editButtonDispatchDetails);
        });
        it("Should select value from dropdown", async () => {
            await editTripPage.click(editTripPage.loadClassificationDropDown);
            dropDownValue=await editTripPage.getTextfromLoadClassificationDropDown();
            console.log("drop down value "+dropDownValue);
        });
        it("Should click 'update button'on order update screen", async () => {
            await orderUpdate.click(editTripPage.updateButton);
        });
        it("Verify that 'Load Classification' is updated on all dispatches and stops.", async () => {
            loadClassificationValue = await editTripPage.getTextFromClassification();
            expect(loadClassificationValue).toBe(dropDownValue);
         });
        
    });
});