import { PaceHomePage } from "../../pages/pace/pace-home.po";
import { OrderLookupPage } from "../../pages/pace/order-lookup.po";
import { EditTripPage } from "../../pages/pace/edit-trip.po";
import { StopUpdatePage } from "../../pages/pace/stop-update.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";
import { ReferenceNumberDetail } from "../../pages/pace/reference-number-detail.po";
import { MainMenuPage } from "../../pages/pace/main-menu.po";
import { CustomerServicePage } from "../../pages/pace/customer-services.po";


let paceHomePage = new PaceHomePage();
let mainMenuPage = new MainMenuPage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();
let referenceDetailPage = new ReferenceNumberDetail();
let stopUpdatePage = new StopUpdatePage();
let customerServicePage = new CustomerServicePage();

let using = require('jasmine-data-provider');

    //TC 94655 : 2.2.8-PACE APP-Edit Trip - Autopay Services - Removed
using(DataProvider.Tc_94655, async function (data) {

    describe("PACE APP-Edit Trip - Autopay Services - Removed", () => {
        let arr:string[]=[];
       
        it("Should Open My pace url", async () => {
            await paceHomePage.openPaceUrl();
        });

        it("Login into pace application", async () => {
            await paceHomePage.loginIntoPaceApplication(data.username, data.password);
        });

        it("Click on PACE link from menu items", async () => {
            await paceHomePage.click(paceHomePage.paceTab);
        });

        it("Should set Whirlpool LDCN - SA TXX to account dropdown", async () => {
            await preferencePage.selectAccountValue(data.accountLabel, data.accountValue);
        });

        it("Change Billing Period End Date to Previous Date", async () => {
            await preferencePage.selectBillingPeriodDate(data.date);
        });

        it("Should Click on save button", async () => {
            await paceHomePage.click(paceHomePage.saveButton);
        });

        it("Should Click on pace link on pace home page", async () => {
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
            await expect<any>(await editTripPage.verifyEditTripPage()).toBe(true);
        });

        it("Verify order is Commingle Order", async () => {
            let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
            await expect(result).toBeTruthy();
        });

        it("Should get index", async () => {
            await editTripPage.clickStopDetails()
        });

        it("Should Click 'Customer Services' link", async () => {
            await stopUpdatePage.click(stopUpdatePage.customerServicesLink)
        });
        
        it("Verify stop is editable or not", async () => {
            let result: boolean = await customerServicePage.isStopNonEditable();
            await expect(result).toBeTruthy();
        });

    });
});
