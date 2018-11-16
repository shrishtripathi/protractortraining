import { FuelSurchargeSystemHomePage } from "../../pages/fuel_surcharge/fuel-surcharge-system-home.po";
import { DataProvider } from "../../data/dataProvider";

let fuelSurchargeSystemHomePage = new FuelSurchargeSystemHomePage();
let using = require('jasmine-data-provider');

//TC#102075_Fuel Surcharge_Regression_1 Search by group and program
using(DataProvider.Tc_102075, async function (data) {
    xdescribe("Fuel Surcharge_Regression_1 Search by group and program", () => {

        it("Should open Fuel Surcharge url", async () => {
            await fuelSurchargeSystemHomePage.navigateToAppHome(fuelSurchargeSystemHomePage.fuelSurchargeUrl);
            await fuelSurchargeSystemHomePage.waitForFuelSurchargePageLoad();
        });

        it("Should select BillTO Code/Division option from Selection Type dropdown", async () => {
            await fuelSurchargeSystemHomePage.setSelectTypeDropDown(data.typeDropDown);
        });

        it("Should enter dsake to fuel program input", async () => {
            await fuelSurchargeSystemHomePage.setFuelProgramInputOne(data.dsakeInputField);
        });

        it("Should enter dsake to fuel program input", async () => {
            await fuelSurchargeSystemHomePage.setFuelProgramInputTwo(data.hjbtInputField);
        });

        it("Should click Find group button", async () => {
            await fuelSurchargeSystemHomePage.clickOnButton(data.findGroupButton);
        });

        it("Should verify multiple group selection window", async () => {
            await expect<any>(fuelSurchargeSystemHomePage.verifyText(data.multiPleSelection)).toBe(data.true);
        });

        it("Should click cancel button", async () => {
            await fuelSurchargeSystemHomePage.clickOnButton(data.cancelButton);
        });

        it("Should enter dsake to fuel program input", async () => {
            await fuelSurchargeSystemHomePage.setFuelProgramInputOne(data.dsakeInputField);
        });

        it("Should enter dsake to fuel program input", async () => {
            await fuelSurchargeSystemHomePage.setFuelProgramInputTwo(data.hjbtInputField);
        });

        it("Should click Find group button", async () => {
            await fuelSurchargeSystemHomePage.clickOnButton(data.findProgramButton);
        });

        it("Should verify multiple group selection window", async () => {
            await expect<any>(fuelSurchargeSystemHomePage.verifyText(data.fuelSurchargeText)).toBe(data.true);
        });

    });
});