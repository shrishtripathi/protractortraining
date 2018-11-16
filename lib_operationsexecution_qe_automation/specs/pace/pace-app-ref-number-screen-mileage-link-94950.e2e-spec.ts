import { PaceHomePage } from "../../pages/pace/pace-home.po";
import { OrderLookupPage } from "../../pages/pace/order-lookup.po";
import { EditTripPage } from "../../pages/pace/edit-trip.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";
import { RouteInformation } from "../../pages/pace/route-information.po"


let paceHomePage = new PaceHomePage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();
let routeInformationPage = new RouteInformation();
let using = require('jasmine-data-provider');

//TC 94950 : PACE APP-Ref Number Screen - Mileage Link
using(DataProvider.TC_94950, async function (data) {

    describe("Ref Number Screen - Mileage Link", () => {
        let totalMilesEditTrip: number;
        let totalStopsEditTrip: number;
        let totalMilesRoute: number;
        let totalStops: number;

        it("Should Open My pace url", async () => {
            await paceHomePage.openPaceUrl();
        });

        it("Login into pace application", async () => {
            await paceHomePage.loginIntoPaceApplication(data.username, data.password);
        });

        it("Should Click on pace link on pace home page", async () => {
            await paceHomePage.clicklink(data.paceLink);
        });

        it("Should set Whirlpool LDCN - AUSTXX to account dropdown", async () => {
            await preferencePage.selectAccountValue(data.accountLabel, data.accountValue);
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
            await expect<any>(await editTripPage.verifyEditTripPage()).toBe(true);
        });

        it("Verify order is Commingle Order", async () => {
            let result: boolean = await editTripPage.verifyOrderIsCommingleOrder();
            await expect(result).toBeTruthy();
        });

        it("Note down the Total Miles on bottom-right of the screen.", async () => {
            totalMilesEditTrip = await editTripPage.noteTotalMiles();
        });

        it("Note down the Number of stops on 'Edit Trip' page", async () => {
            totalStopsEditTrip = await editTripPage.noteNumberOfStops();
        });

        it("Click 'Total Miles' link on bottom-right side", async () => {
            await editTripPage.clickTotalMilesLink();
        });

        it("Verify that the total Miles are same as you noted on 'Edit Trip' screen", async () => {
            totalMilesRoute = await routeInformationPage.verifyTotalMiles();
            await expect(totalMilesRoute).toBe(totalMilesEditTrip);
        });

        it("Verify that the total number of Segments are same as the stops number in 'Edit Trip' screen", async () => {
            totalStops = await routeInformationPage.verifyTotalStops();
            await expect(totalStops).toBe(totalStopsEditTrip);
        });

    });



});


