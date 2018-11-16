import { FuelSurchargeSystemHomePage } from "../../pages/fuel_surcharge/fuel-surcharge-system-home.po";
import { CalenderPage } from "../../pages/fuel_surcharge/calender.po";
import { DataProvider } from "../../data/dataProvider";

let fuelSurchargeSystemHomePage = new FuelSurchargeSystemHomePage();
let calenderPage = new CalenderPage();
let using = require('jasmine-data-provider');

//TC 102083: Fuel Surcharge_Regression_2 Adding and removing a fuel group
using(DataProvider.Tc_102089, async function (data) {
    xdescribe("Fuel Surcharge_Regression_1 Adding and removing a holiday record", () => {

        it("Should open fuel surcharge url", async () => {
            await fuelSurchargeSystemHomePage.navigateToAppHome(fuelSurchargeSystemHomePage.fuelSurchargeUrl);
            await fuelSurchargeSystemHomePage.waitForFuelSurchargePageLoad();
        });

        it("Should click on calender tab", async () => {
            await fuelSurchargeSystemHomePage.clickOnCalender();
        });

        it("Should enter holiday next to calnder type", async () => {
            await calenderPage.setCalenderType(data.calenderType);
        });

        it("Should click Search button", async () => {
            await calenderPage.clickOnButton(data.searchButton);
        });

        it("Should verify calender type selection block populates", async () => {
            await expect<any>(calenderPage.verifyText(data.calenderText)).toBe(data.true);
        });

        it("Should click calender type", async () => {
            await calenderPage.clickCalnderType();
        });

        it("Should click Choose button", async () => {
            await calenderPage.clickOnButton(data.chooseButton);
        });

        it("Should verify calender setup block populates", async () => {
            await expect<any>(calenderPage.verifyText(data.calenderSetUp)).toBe(data.true);
        });

        it("Should click Add button", async () => {
            await calenderPage.clickOnButton(data.addButton);
        });

        it("Should verify create calender block populates", async () => {
            await expect<any>(calenderPage.verifyText(data.createCalender)).toBe(data.true);
        });

        it("Should click Add one record radio button", async () => {
            await calenderPage.clickadd1RecordRadioButton();
        });

        it("Should click Continue button", async () => {
            await calenderPage.clickOnButton(data.continueButton);
        });

        it("Should verify calender setup block populates", async () => {
            await expect<any>(calenderPage.verifyText(data.calenderSetUp)).toBe(data.true);
        });
        
        it("Should enter doe date", async () => {
            await calenderPage.setInputField(calenderPage.deoDate, await calenderPage.getFutureYear(6));
        });

        it("Should enter effective date", async () => {
            await calenderPage.setInputField(calenderPage.efectiveDate, await calenderPage.getFutureYear(6));
        });

        it("Should enter expiration date", async () => {
            await calenderPage.setInputField(calenderPage.expirationDate, await calenderPage.getFutureYear(7));
        });

        it("Should click save image", async () => {
            await calenderPage.clickSaveImage();
        });

        it("Should click calender check box ", async () => {
            await calenderPage.clickCalenderListCheckBox(await calenderPage.getFutureYear(6));
        });

        it("Should click Delete button", async () => {
            await calenderPage.clickOnButton(data.deleteButton);
        });

        it("Verifying Deleted message", async () => {
            await expect<any>(calenderPage.verifyDeleteMessage()).toBe(data.deleteMessage);
        });

    });
});