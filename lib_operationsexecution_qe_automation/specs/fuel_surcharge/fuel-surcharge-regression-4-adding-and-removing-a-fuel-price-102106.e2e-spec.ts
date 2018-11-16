import { FuelSurchargeSystemHomePage } from "../../pages/fuel_surcharge/fuel-surcharge-system-home.po";
import { DoePrices } from "../../pages/fuel_surcharge/doe-prices.po";
import { request } from "http";
import { DataProvider } from "../../data/dataProvider";



let fuelSurchargeSystemHomePage = new FuelSurchargeSystemHomePage();
let doePrices = new DoePrices();
let using = require('jasmine-data-provider');

//TC#102106 -Fuel Surcharge_Regression_4 Adding and removing a fuel price
using(DataProvider.Tc_102106, async function (data) {
    xdescribe("Fuel Surcharge_Regression_4 Adding and removing a fuel price", function () {
        it("should open 'homepage'", async function () {
            await fuelSurchargeSystemHomePage.navigateToAppHome(fuelSurchargeSystemHomePage.fuelSurchargeUrl);
            await fuelSurchargeSystemHomePage.waitForFuelSurchargePageLoad();
        });
        it("should click 'Doe Prices Tab'", async function () {
            await fuelSurchargeSystemHomePage.clickDoePricesTab();
        });
        it("should click 'Display Prices Button'", async function () {
            await doePrices.clickDisplayPricesButton();
        });
        it("should take note of the last updated or latest active fuel price from the populated list.", async function () {
            await doePrices.getFuelPriceActiveStatus();
            console.log("fuel price is " + doePrices.fuelPrice);
        });
        it("should Click the calendar icon next to Effective Date", async function () {
            await doePrices.clickEffectiveDateCalender();
        });
        it("should select todays date", async function () {
            await doePrices.selectCurrentDateInCalender();
        });
        it("should Click the calendar icon next to Expiration Date", async function () {
            await doePrices.clickExpirationDateCalender();
        });
        it("should select todays date", async function () {
            await doePrices.selectCurrentDateInCalender();
        });
        it("should  enter In the empty white text box next to Fuel Price, enter 123.", async function () {

            await doePrices.setFuelPriceText(data.fuelPrice);
        });
        it("should Click the Add New Price button.", async function () {
            await doePrices.clickAddNewPricesButton();
        });
        it("should display 'Fuel price created Sucessfully'", async function () {
            let flag: boolean = await doePrices.verifyAddPriceSucessMessage();
            expect(flag).toBeTruthy();
        });
        it("should Click the Delete Price button. ", async function () {
            await doePrices.clickDeletePricesButton();
        });
        it("should display 'Fuel price deleted Sucessfully'", async function () {
            let flag: boolean = await doePrices.verifyDeletePriceSucessMessage();
            expect(flag).toBeTruthy();
        });
        it("should Click the Clear button.", async function () {
            await doePrices.clickClearButton();
        });
        it("should 'clear all input fields above the display button'", async function () {
            let flag: boolean = await doePrices.verifyClear();
            expect(flag).toBeTruthy();
        });
        it("should Click the calendar icon next to Effective Date", async function () {
            await doePrices.clickEffectiveDateCalender();
        });
        it("should select todays date", async function () {
            await doePrices.selectCurrentDateInCalender();
        });
        it("should Click the calendar icon next to Expiration Date", async function () {
            await doePrices.clickExpirationDateCalender();
        });
        it("should select one year in the future", async function () {
            await doePrices.changeEndDate();
            await doePrices.selectCurrentDateInCalender();
        });
        it("should  Enter the Fuel Price earlier noted", async function () {
            await doePrices.setFuelPriceText(data.fuelPrice);
        });
        it("should Click the Add New Price button.", async function () {
            await doePrices.clickAddNewPricesButton();
        });
        it("should display 'Fuel price created Sucessfully'", async function () {
            let flag: boolean = await doePrices.verifyAddPriceSucessMessage();
            expect(flag).toBeTruthy();
        });
    });
});