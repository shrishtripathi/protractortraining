import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class FuelSurchargeSystemHomePage extends BasePage {

    readonly loadingIcon: ElementFinder = element(By.xpath('//img[@id="welcomeForm:process"]'));
    readonly fuelProgramInputOne: ElementFinder = element(By.id("fuelProgramController:icePnlTbSet:0:entityOne"));
    readonly fuelProgramInputTwo: ElementFinder = element(By.id("fuelProgramController:icePnlTbSet:0:entityTwo"));
    readonly selectTypeDropDown: ElementFinder = element(By.id("fuelProgramController:icePnlTbSet:0:selectType"));
    readonly selectTypeDropDownOptions: string = "//select[@id='fuelProgramController:icePnlTbSet:0:selectType']/option";
    readonly billToInput: ElementFinder = element(By.xpath("//input[contains(@id,'billToInput')]"));
    readonly divisionInput: ElementFinder = element(By.xpath("//input[contains(@id,'divisionInput')]"));
    readonly effectiveDateInput: ElementFinder = element(By.id("fuelProgramController:icePnlTbSet:0:bToAffiliationData:0:effDateId"));
    readonly enabledCheckbox: ElementFinder = element(By.xpath("//input[@type='checkbox' and not(@disabled='disabled')]"));
    readonly calender: ElementFinder = element(By.xpath("//td[text()='Calendar']"));
    readonly doePricesTab = element(by.id("fuelProgramController:icePnlTbSet:0.2"));
    readonly displayPricesButton = element(by.xpath("//input[@value='Display Prices']"));


    async waitForFuelSurchargePageLoad() {
        await browser.wait(ExpectedConditions.visibilityOf(this.loadingIcon), 5000);
        await browser.wait(ExpectedConditions.invisibilityOf(this.loadingIcon), 5000);
    }

    public async clickDoePricesTab() {
        try {
            this.actions.waitUntilElementVisible(this.doePricesTab, "click on Doe prices Tab");
            this.actions.click(this.doePricesTab, "click on Doe prices Tab");
        } catch (error) {
            console.log("error in deo prices tab " + error);
        }

    }
    public async setSelectTypeDropDown(optionValue: string) {
        await this.actions.click(this.selectTypeDropDown, "Click on Select Type Drop Down");
        await this.actions.selectByValue(this.selectTypeDropDownOptions, optionValue, "Select Option");
    }

    public async setFuelProgramInputOne(fuelProgramInput1: string) {
        await this.actions.clearText(this.fuelProgramInputOne, "Clear Text");
        await this.actions.setText(this.fuelProgramInputOne, fuelProgramInput1, "Enter text");
    }

    public async setFuelProgramInputTwo(fuelProgramInput2: string) {
        await this.actions.clearText(this.fuelProgramInputTwo, "Clear Text");
        await this.actions.setText(this.fuelProgramInputTwo, fuelProgramInput2, "Enter text");
    }

    public async setInputField(textFieldInput: ElementFinder, text: string) {
        await this.actions.clearText(textFieldInput, "Clear Text");
        await this.actions.setText(textFieldInput, text, "Enter text");
    }

    public async getMessage(text: string) {
        let spanElement: ElementFinder = await this.spanText(text);
        let spanText = await this.actions.getText(spanElement, "Get text");
        return spanText;
    }

    public async getTodayDate() {
        var today = new Date();
        var myDateString;
        today.setDate(today.getDate());
        myDateString = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        console.log("date :::" + myDateString);
        return await myDateString;
    }

    public async clickOnIcon(iconName: string) {
        var xpath = await element(by.xpath("//input[@title='" + iconName + "']"));
        await this.actions.click(xpath, "Clicking on " + iconName + "");
    }

    public async clickOnCheckbox() {
        await this.actions.click(this.enabledCheckbox, "Click on checkbox");
    }

    public async clickOnCalender() {
        await this.actions.click(this.calender, "Click calender");
    }
}