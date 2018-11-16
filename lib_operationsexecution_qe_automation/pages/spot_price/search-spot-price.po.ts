import { browser, ElementFinder, element, by, ElementArrayFinder, protractor } from "protractor";
import { By } from "selenium-webdriver";

import { BasePage } from "../base.po";


export class SearchSpotPricePage extends BasePage {

    readonly spotPriceNumberInput: ElementFinder = element(By.id("searchSpotPriceForm:spotPriceNumberInput"));
    readonly viewDocButton: ElementFinder = element(by.xpath("//table[@id='searchSpotPriceForm:historyListTable']//tbody//tr[3]//td//input[@value='View Doc']"));
    readonly offerIdButton: ElementFinder = element(by.xpath("//table[@id='searchSpotPriceForm:historyListTable']//tbody//tr[3]/td[5]//input"));
    readonly spotPriceButton: ElementFinder = element(by.xpath("//span[text()='Spot Price']//ancestor::li"));
    readonly searchSpotPriceButton: ElementFinder = element(by.xpath("//span[text()='Search Spot Price']//ancestor::a"));
    currentWindow: string;

    public async getGrandTotal() {
        let grandTotal = element(by.xpath("//table[@id='searchSpotPriceForm:historyListTable']//tr[3]//td[19]/span"));
        browser.executeScript("arguments[0].scrollIntoView();", grandTotal.getWebElement());
        let text = await this.actions.getText(grandTotal, "Grand total ");
        let grandtotal = text.slice(1, 7);
        return grandtotal;
    }

    public async clickonSpotPrice() {
        await this.actions.click(this.spotPriceButton, "Clicking on spot price");
    }
    public async clickOnSpotpriceAndClickonSearchSpotPrice() {

        await this.clickonSpotPrice();

        await this.actions.click(this.searchSpotPriceButton, "Clicking on search spot price");
    }

    public async clickOnGroupIdAndExpireGroupId() {
        console.log("in else block")

        let groupId = element(by.xpath("//table[@id='searchSpotPriceForm:historyListTable']//tr[3]//td[5]//input"));
        await this.actions.click(groupId, "Clicking on group id");
        let expire = element(by.xpath("//input[@value='Expire']"));
        let status = await this.actions.isElementPresent(expire, "")
        console.log("status", status)
        if (status) {
            console.log("expire")
            await this.actions.click(expire, "Clicking on expire");
            await this.actions.switchToAlertAndAccept("Accepting alert");
            let message = element(by.xpath("//span[text()='Days active successfully updated']"));
            await this.actions.isElementDisplayed(message, "Days active successfully updated");
            await this.clickonSpotPrice();
        }
        else {
            console.log("active")
            await this.clickonSpotPrice();
        }
    }

    public async clickOnButton(buttonName: string) {
        let button: ElementFinder = element(By.xpath("//div[@class='" + buttonName + "']"));
        await this.actions.click(button, "Click on Clear Button");
    }

    public async clickOnViewDocButton() {
        this.currentWindow = await browser.getWindowHandle();
        await this.actions.click(this.viewDocButton, "Click on Clear Button");
        await this.actions.selectWindow(2, "Switch to window");
    }

    public async clickOnOfferIdButton() {
        await this.actions.click(this.offerIdButton, "Click on Clear Button");
    }

    public async switchToParentWindow() {
        browser.driver.switchTo().window(this.currentWindow);
    }

    public async setTexts(text: string) {
        await this.actions.setText(this.spotPriceNumberInput, text, "Enter text");
    }

    public async verifySpotPriceNumberInPriceHistory(spotPriceNumber: string) {
        let spotPriceNumberInPriceHistory: ElementFinder = element(By.xpath(" //span[contains(text(),'" + spotPriceNumber + "')]"));
        console.log("element presence :" + spotPriceNumberInPriceHistory.isPresent());
        await this.actions.waitUntilElementVisible(spotPriceNumberInPriceHistory, "Wait Untill Element is visible");
        return await spotPriceNumberInPriceHistory.isPresent();
    }

    public async setOfferStatusDropdown(valueToSelect: string) {
        let xpath = "//div[@class='filterRowDivTD']//select/option";
        await this.actions.selectByValue(xpath, valueToSelect, "Selcting value to offer status dropdown");
    }


}