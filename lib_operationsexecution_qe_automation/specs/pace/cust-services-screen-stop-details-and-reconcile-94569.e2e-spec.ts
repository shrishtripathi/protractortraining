import { DataProvider } from '../../data/dataProvider';
import { PaceHomePage } from '../../pages/pace/pace-home.po';
import { PreferencePage } from '../../pages/pace/preference.po';
import { browser, Browser } from 'protractor';
import { OrderLookupPage } from '../../pages/pace/order-lookup.po';
import { EditTripPage } from '../../pages/pace/edit-trip.po';
import { StopUpdatePage } from '../../pages/pace/stop-update.po';
import { MainMenuPage } from '../../pages/pace/main-menu.po';


let pacePage = new PaceHomePage();
let mainMenuPage = new MainMenuPage();
let preferences = new PreferencePage();
let orderLookupPage = new OrderLookupPage()
let editTripPage = new EditTripPage();
let stopUpdatePage = new StopUpdatePage();
let using = require('jasmine-data-provider');

//TC 94569 2.1.1-PACE APP- Cust Services Screen - Stop Details and Reconcile

using(DataProvider.Tc_94569, async function (data) {

    describe("PACE_Cust Services Screen - Stop Details and Reconcile", () => {

        let arr: string[] = [];

        it("Open JBHunt pace url", async () => {
            await pacePage.openUrl(pacePage.paceUrl);
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
        it("Should click 'account dropdown'", async () => {
            await preferences.clickOnDropDown(data.dropDownOption);
        });
        it("Should select 'Whirlpool LDCN - AUSTXX' to account dropdown", async () => {
            await preferences.selectDropDownOption(data.dropDownAccountOption);
        });
        it("Should click 'save button'", async () => {
            await preferences.click(preferences.saveButton);
        });
        it("Should Click on 'order Lookup'", async () => {
            await mainMenuPage.click(mainMenuPage.orderLookUpLink);
        });
        it("Should click 'Edit Trip'", async () => {
            await orderLookupPage.click(orderLookupPage.editTripButton);
        });
        it("Verify order is Commingle Order", async () => {
            let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
            expect(result).toBe(true);
        });
        it("Should get index", async () => {
            arr = await editTripPage.getDataFromStopDetails(data.columnText, data.columnText1, data.columnText2)
            console.log("arr is " + arr)
        });
        it("Should Click 'Customer Services' link", async () => {
            await stopUpdatePage.click(stopUpdatePage.customerServicesLink)
        });
        it("Should Verify that Customer Code and Address are displayed and correct in 'Customer Info' section.  And Stop Class is displayed and correct on 'Filter Option' section of the screen", async () => {
            let result: boolean = await stopUpdatePage.verifyStopDetails(arr);
            expect(result).toBeTruthy();
        });
        it("Should  Insert a check mark on 'Reconcile View'", async () => {
            await stopUpdatePage.checkReconcileView(data.checkBox);
        });
        it("Blue color should be applied on the service(s) row on Actual section. ", async () => {
            let flag: boolean = await stopUpdatePage.verifyReconcileView();
            expect(flag).toBeTruthy();
        });
    });
});
