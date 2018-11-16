import { FuelSurchargeSystemHomePage } from "../../pages/fuel_surcharge/fuel-surcharge-system-home.po";
import { DataProvider } from "../../data/dataProvider";
import { CommonFunctions } from "../../utilities/common-functions";

let fuelSurchargeSystemHomePage = new FuelSurchargeSystemHomePage();
let commonFunctions = new CommonFunctions();
let using = require('jasmine-data-provider');

//TC 102083: Fuel Surcharge_Regression_2 Adding and removing a fuel group
using(DataProvider.Tc_102083, async function (data) {
    xdescribe("Adding and removing a fuel group", () => {

        it("Should open Fuel Surcharge url", async () => {
            await fuelSurchargeSystemHomePage.navigateToAppHome(fuelSurchargeSystemHomePage.fuelSurchargeUrl);
            await fuelSurchargeSystemHomePage.waitForFuelSurchargePageLoad();
        });

        it("Should select Fuel Group option from Select Type drop down", async () => {
            await fuelSurchargeSystemHomePage.setSelectTypeDropDown(data.selectTypeDropdown);
        });

        it("Should enter Test QA group name", async () => {
            await fuelSurchargeSystemHomePage.setFuelProgramInputOne(commonFunctions.generateRandomString());
        });

        it("Should click on New Group button", async () => {
            await fuelSurchargeSystemHomePage.clickOnButton(data.newGroupButton);
        });

        it("Verifying that Fuel Surcharge Grouping is populated", async () => {
            await expect(await fuelSurchargeSystemHomePage.verifyText(data.fuelSurchargeText)).toBeTruthy();
        });

        it("Should click on Add button", async () => {
            await fuelSurchargeSystemHomePage.clickOnButton(data.addButton);
        });

        it("Verifying that Affiliation List is populated", async () => {
            await expect(await fuelSurchargeSystemHomePage.verifyText(data.affialationText)).toBeTruthy();
        });

        it("Should enter DSAKE in Bill To Input field", async () => {
            await fuelSurchargeSystemHomePage.setInputField(fuelSurchargeSystemHomePage.billToInput, data.dsakeField);
        });

        it("Should enter HJBT JBVAN in Division Input field", async () => {
            await fuelSurchargeSystemHomePage.setInputField(fuelSurchargeSystemHomePage.divisionInput, data.hjbtField);
        });

        it("Should select current date in Effective Date field", async () => {
            await fuelSurchargeSystemHomePage.setInputField(fuelSurchargeSystemHomePage.effectiveDateInput, await fuelSurchargeSystemHomePage.getTodayDate());
        });

        it("Should click on Save icon", async () => {
            await fuelSurchargeSystemHomePage.clickOnIcon(data.saveIcon);
        });

        it("Verifying that Affiliation List is updated with new group", async () => {
            await expect(await fuelSurchargeSystemHomePage.verifyText(data.jbvanText)).toBeTruthy();
        });

        it("Should click on check box next to new group", async () => {
            await fuelSurchargeSystemHomePage.clickOnCheckbox();
        });

        it("Should click on Remove button", async () => {
            await fuelSurchargeSystemHomePage.clickOnButton(data.removeButton);
        });

        it("Verifying that '1 affiliation(s) successfully removed.' message is displayed", async () => {
            await expect<any>(fuelSurchargeSystemHomePage.getMessage(data.successMessage)).toBe(data.successMessage);
        });

    });
});