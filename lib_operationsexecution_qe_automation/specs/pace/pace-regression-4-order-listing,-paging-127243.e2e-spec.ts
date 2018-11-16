
import { DataProvider } from '../../data/dataProvider';
import { PaceHomePage } from '../../pages/pace/pace-home.po';
import { PreferencePage } from '../../pages/pace/preference.po';
import { EditTripPage } from '../../pages/pace/edit-trip.po';
import { browser, Browser } from 'protractor';
import { OrderLookupPage } from '../../pages/pace/order-lookup.po';


let pacePage = new PaceHomePage();
let preferences = new PreferencePage();
let orderLookupPage = new OrderLookupPage()
let editTripPage = new EditTripPage();
let using=require('jasmine-data-provider');

//TC 122143 PACE_Regression_4 Order listing, paging

using(DataProvider.Tc_127243, async function (data) {

    describe("PACE_Regression_4 Order listing, paging", () => {

        it("Should open pace url", async () => {
            await pacePage.openPaceUrl1();
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

        it("Should Click on 'order Lookup'", async () => {
            await pacePage.clickOnLink(data.orderLookUpLink);
        });

        it("Should click 'Status of order dropdown'", async () => {
            await orderLookupPage.selectDropDownOption(data.statusOfOrderDropDownSelect);
        });

        it("Should click 'Load Clasification and select 'Whirlpool LDCN'", async () => {
            await orderLookupPage.selectDropDownOption(data.loadClassificationDropDownSelect)
        });

        it("Should click 'Edit Trip'", async () => {
            await orderLookupPage.clickOnButton(data.editTrip);
        });
        
        it("Click the dropdown tab next to Order Nbr", async () => {
            await editTripPage.clickOnDropDown(data.orderNumberDropDown);
        }); 

        it("verify there are more than 3 orders in the list.", async () => {
            let count=  await editTripPage.verifyMoreThan3OrdersArePresent();
            expect(count).toBeGreaterThan(3);
        });

        it("should click 'next' buutton", async () => {
            await editTripPage.clickOnButton(data.nextButton);
        });

        it("should click 'next' buutton", async () => {
            await editTripPage.clickOnButton(data.previousButton);
        });

        it("Click the dropdown tab next to Order Nbr, click to select the last order (at the bottom)", async () => {
            await editTripPage.selectLastOrderNumber(data.lastOrder)
        });

        it("Click the dropdown tab next to Order Nbr, click to select the 10th order from the top", async () => {
            await editTripPage.selectLastOrderNumber(data.tenthOrder)
        });

        it("Click the dropdown tab next to Order Nbr, click to select the top order", async () => {
            await editTripPage.selectLastOrderNumber(data.topOrder);
         });
    });
});