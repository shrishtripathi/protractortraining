import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';

export class DoePrices extends BasePage {


    readonly displayPricesButton = element(by.xpath("//input[@value='Display Prices']"));
    readonly fuelPriceUnderActiveState = element(by.xpath("(//span[text()='A']/../preceding-sibling::td[@class='iceDatTblCol2']/span)[1]"));
    readonly effectiveDateCalender = element(by.id("doePricesController:icePnlTbSet:0:doeEffDate_cb"));
    readonly endDateCalender = element(by.id("doePricesController:icePnlTbSet:0:doeExpDate_cb"));
    readonly fuelPriceTextBox = element(by.id("doePricesController:icePnlTbSet:0:flPriceId"));
    readonly effectiveDateTextBox = element(by.id("doePricesController:icePnlTbSet:0:doeEffDate"));
    readonly endDateTextBox = element(by.id("doePricesController:icePnlTbSet:0:doeExpDate"));
    readonly addNewPriceButton = element(by.xpath("//input[@value='Add New Price']"));
    readonly deletePriceButton = element(by.xpath("//input[@value='Delete Price']"));
    readonly clearButton = element(by.xpath("//input[@value='Clear']"));
    readonly verifyAddPriceMessage = element(by.xpath("//span[text()='Fuel price created successfully.']"));
    readonly verifyDeletePriceMessage = element(by.xpath("//span[text()='Fuel price deleted successfully.']"));
    readonly emptyInputBoxes = element(by.xpath(""));
    readonly endCalenderDropDown = element.all(by.xpath("(//select[@id='doePricesController:icePnlTbSet:0:doeExpDate_sy']/option)"));
    fuelPrice: string = null;



    public async clickDisplayPricesButton() {
        await this.actions.click(this.displayPricesButton, "click on Display Prices Button");
    }

    public async getFuelPriceActiveStatus() {
        let text: string = null;
        try {
            text = await this.fuelPriceUnderActiveState.getText();
            this.fuelPrice = text;
        } catch (error) {
            console.log("unable to get text for fuel price " + error);
        }
        return await text;
    }

    public async clickEffectiveDateCalender() {
        await this.actions.clearText(this.effectiveDateTextBox, "clear text  effective date");
        await this.actions.click(this.effectiveDateCalender, "click on Effective Date Calender");
    }

    public async clickExpirationDateCalender() {
        await this.actions.clearText(this.endDateTextBox, "clear text for end date");
        await this.actions.click(this.endDateCalender, "click on End Date Calender");
    }
    public async changeEndDate() {
        this.actions.shortWait("short wait");
        await this.actions.selectByVisibleText(this.endCalenderDropDown, "2019", "drop");
    }
    public async selectCurrentDateInCalender() {
        let date: string = await new Date().getDate().toString();
        await this.actions.click(element(by.xpath("//span[text()='" + date + "']")), "Select current Date ");
    }
    public async clickAddNewPricesButton() {
        let flag: boolean = false;
        try {
            await this.actions.click(this.addNewPriceButton, "click on Add new Prices Button");
            await this.actions.shortWait("short wait..");
            flag = await this.actions.isElementDisplayed(this.verifyAddPriceMessage, "verify sucess message");
        } catch (error) {
            console.log("error in add price");
        }
        return await flag;
    }
    public async verifyAddPriceSucessMessage() {
        let flag: boolean = false;
        try {
            await this.actions.mediumWait("medium wait..");
            flag = await this.actions.isElementDisplayed(this.verifyAddPriceMessage, "verify sucess message");
        } catch (error) {
            console.log("error in add price");
        }
        return await flag;
    }
    public async verifyDeletePriceSucessMessage() {
        let flag: boolean = false;
        try {
            await this.actions.mediumWait("medium wait..");
            flag = await this.actions.isElementDisplayed(this.verifyDeletePriceMessage, "verify sucess message");
        } catch (error) {
            console.log("error in delete price");
        }
        return await flag;
    }
    public async setFuelPriceText(text: string) {
        await this.actions.setText(this.fuelPriceTextBox, text, "enter fuel price in textbox");
    }
    public async clickDeletePricesButton() {
        await this.actions.click(this.deletePriceButton, "click on delete Price Button");

    }
    public async clickClearButton() {
        await this.actions.click(this.clearButton, "click on clear Button");
    }
    public async verifyClear() {
        let flag: boolean = false;
        try {
            if (await this.fuelPriceTextBox.getAttribute("value") === null || await this.fuelPriceTextBox.getAttribute("value") === '') {
                flag = true;
            }
        } catch (error) {

        }
        return await flag;
    }
    public async validateSuccessMessage() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.verifyAddPriceMessage, "Verify Add Price Message.");
            flag = await this.actions.isElementDisplayed(this.verifyAddPriceMessage, "Verify Add Price Message.");
        } catch (error) {
            console.log("element is not visible..." + error);
        }
        return await flag;
    };
    public async validateDeleteMessage() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.verifyDeletePriceMessage, "Verify Add Price Message.");
            flag = await this.actions.isElementDisplayed(this.verifyDeletePriceMessage, "Verify Add Price Message.");
        } catch (error) {
            console.log("element is not visible..." + error);
        }
        return await flag;
    };
    public async validateClear() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.verifyDeletePriceMessage, "Verify Add Price Message.");
            flag = await this.actions.isElementDisplayed(this.verifyDeletePriceMessage, "Verify Add Price Message.");
        } catch (error) {
            console.log("element is not visible..." + error);
        }
        return await flag;
    };

}