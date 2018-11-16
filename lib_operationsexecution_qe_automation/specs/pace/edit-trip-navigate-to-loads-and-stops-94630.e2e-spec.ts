import { PaceHomePage } from "../../pages/PACE/pace-home.po";
import { OrderLookupPage } from "../../pages/PACE/order-lookup.po";
import { EditTripPage } from "../../pages/PACE/edit-trip.po";
import { PreferencePage } from "../../pages/pace/preference.po";
import { DataProvider } from "../../data/dataProvider";
import { StopUpdatePage } from "../../pages/pace/stop-update.po";
import { browser } from "protractor";

let paceHomePage = new PaceHomePage();
let preferencePage = new PreferencePage();
let orderLookupPage = new OrderLookupPage();
let editTripPage = new EditTripPage();
let stopUpdatePage = new StopUpdatePage();
let using = require('jasmine-data-provider');

//TC 94630: Edit Trip - Navigate to Loads and Stops
using(DataProvider.Tc_94630, async function (data) {

    describe("Edit Trip - Navigate to Loads and Stops", () => {

        it("Should Open Pace url", async () => {
            await paceHomePage.openPaceUrl();
        });

        it("Login into pace application", async () => {
            await paceHomePage.loginIntoPaceApplication(data.username, data.password);
        });

        it("Should click on pace link on pace home page", async () => {
            await paceHomePage.clicklink(data.paceLink);
        });

        it("Should set Whirlpool LDCN - AUSTXX to account dropdown", async () => {
            await preferencePage.selectAccountValue(data.accountLabel, data.accountValue);
        });

        it("Should Click on save button", async () => {
            await preferencePage.clickOnButton(data.saveButton);
        });

        it("Should click on 'order lookup'", async () => {
            await preferencePage.clickOnLink(data.orderLookUpLink);
        });

        it("Should Click on Edit Trip button", async () => {
            await orderLookupPage.clickOnButton(data.editTripButton);
        });
    
        it("Verifying Edit Trip page opens", async () => {
            await expect<any>(editTripPage.verifyEditTripPage()).toBeTruthy();
        });

        it("Verifying that the order is 'Commingle Order'", async () => {
            let orderText = await editTripPage.getCommingleOrder(data.commingleOrder);
            await expect<any>(orderText).toBe(data.commingleOrder);
        });

        it("Should hover over to a Customer Code and click on a second or third stop", async () => {
            await editTripPage.clickOnStopDetailsRow(data.rownumber);
        });

        it("Verifying that Stop Update page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.stopUpdateTitle);
        });

        it("Should click on Customer Services link", async () => {
            await stopUpdatePage.clickCustomerServiceLink();
        });

        it("Verifying that Customer Services page opens", async () => {
            await expect<any>(stopUpdatePage.getPageTitle()).toBe(data.customerServicesTitle);
        });

        it("Should Click on '>' button to go to the next order", async () => {
            await stopUpdatePage.click(stopUpdatePage.nextOrderNumberButton);
            await stopUpdatePage.waitForOrderNumberDropDownVisible();
        });

        it("Should Click on '<' button to go to the previous order", async () => {
            await stopUpdatePage.click(stopUpdatePage.previousOrderNumberButton);
            await stopUpdatePage.waitForOrderNumberDropDownVisible();
        });

        it("Should select the last Order from 'Order Number' drop-down list", async () => {
            await stopUpdatePage.selectNumberFromDropDown(stopUpdatePage.orderNumberDropDown, stopUpdatePage.orderNumbersInDropDown, stopUpdatePage.orderNumberOptionsList, data.last);
            await stopUpdatePage.waitForElementIsEnabled(stopUpdatePage.resultsContent);
        });

        it("Verifying that 'Next' button disabled ",async() => {
            await expect(await stopUpdatePage.verifyDisabledOrEnabledButton(data.NextOrderNumberButtonId)).toBeFalsy();
        });

        it("Should select the first Order from 'Order Number' drop-down list", async () => {
            await stopUpdatePage.selectNumberFromDropDown(stopUpdatePage.orderNumberDropDown, stopUpdatePage.orderNumbersInDropDown, stopUpdatePage.orderNumberOptionsList, data.first);
            await stopUpdatePage.waitForElementIsEnabled(stopUpdatePage.resultsContent);
        });

        it("Verifying that 'Previous' button disabled ",async() => {
            await expect(await stopUpdatePage.verifyDisabledOrEnabledButton(data.previousOrderNumberButtonId)).toBeFalsy();
        });

        it("Should Click on '>' button to go to the next Stop", async () => {
            await stopUpdatePage.clickOnInputButton(stopUpdatePage.nextStopNumberButton);
            await stopUpdatePage.waitForOrderNumberDropDownVisible();
        });

        it("Should Click on '<' button to go to the previous Stop", async () => {
            await stopUpdatePage.clickOnInputButton(stopUpdatePage.previousStopNumberButton);
            await stopUpdatePage.waitForOrderNumberDropDownVisible();
        });

        it("Should select the first Stop from 'Stop Nbr/Classification' drop-down list", async () => {
            await stopUpdatePage.selectNumberFromDropDown(stopUpdatePage.stopNumberDropDown, stopUpdatePage.stopNumbersInDropDown, stopUpdatePage.stopNumberOptionsList, data.first);
            await stopUpdatePage.waitForElementIsEnabled(stopUpdatePage.resultsContent);
        });

        it("Verifying that 'Previous' button disabled ",async() => {
            await expect(await stopUpdatePage.verifyDisabledOrEnabledButton(data.previousStopNumberButtonId)).toBeFalsy();
        });

        it("Should select the last Stop from 'Stop Nbr/Classification' drop-down list", async () => {
            await stopUpdatePage.selectNumberFromDropDown(stopUpdatePage.stopNumberDropDown, stopUpdatePage.stopNumbersInDropDown, stopUpdatePage.stopNumberOptionsList, data.last);
            await stopUpdatePage.waitForElementIsEnabled(stopUpdatePage.resultsContent);
        });

        it("Verifying that 'Next' button disabled ",async() => {
            await expect(await stopUpdatePage.verifyDisabledOrEnabledButton(data.nextStopNumberButtonId)).toBeFalsy();
        });

    });

});
