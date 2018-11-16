import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class IncidentHistorySearchPage extends BasePage {
    readonly incidentInput: ElementFinder = element(by.xpath("//span[text()='Incident:']//parent::label//parent::div//div//input"));
    readonly searchButton: ElementFinder = element(by.xpath("//span[text()='Search']//ancestor::a"));
    readonly clearButton: ElementFinder = element(by.xpath("//span[text()='Clear']"));
    readonly noDataDisplayMessage: ElementFinder = element(by.xpath("//div[text()='No data to display']"));
    readonly afterDateInputField: ElementFinder = element(by.xpath("//span[text()='After Date:']//parent::label//parent::div//div//input"));
    readonly assetInputField: ElementFinder = element(by.xpath("//span[text()='Asset:']//parent::label//parent::div//div//input"));
    readonly badRequestError: ElementFinder = element(by.xpath("//div[text()='Bad Request']"));
    readonly closeBadRequestError: ElementFinder = element(by.xpath("//div[text()='Bad Request']//parent::div//parent::div//div[@data-qtip='Close panel']"));
    readonly alphaInputField: ElementFinder = element(by.xpath("//span[text()='Alpha:']//parent::label//parent::div//div//input"));
    readonly incidentTab: ElementFinder = element(by.xpath("//span[text()='I']/parent::span"));
    readonly assetValue: ElementFinder = element(by.xpath("//div[@id='incidentSearchGrid-body']//table[1]//tr//td[6]//div//div"));

    public async verifyNoDataDisplayMessage() {
        return await this.actions.getText(this.noDataDisplayMessage, "No data to display");
    }

    public async clickOnClearButton() {
        await this.actions.click(this.clearButton, "click clear button");
    }

    public async verifyInputFieldIsCleared(inputField: ElementFinder) {
        return await inputField.getAttribute("value");
    }

    public async getBackgroundColorOfAfterDateInputField() {
        return await this.afterDateInputField.getCssValue("background-color");
    }

    public async clearAfterDateInputField() {
        await this.actions.clearText(this.afterDateInputField, "clear after date input field");
    }

    public async verifyBadRequestErrorMessage() {
        return await this.actions.getText(this.badRequestError, "No data to display");
    }

    public async clickOnCloseBadrequestError() {
        await this.actions.click(this.closeBadRequestError, "click close button");
    }

    public async setInputField(FieldName: ElementFinder, text: string) {
        await this.actions.setText(FieldName, text, "Enter " + text + " to after date input field");
    }


    public async getAssetValue() {
        await this.actions.waitUntilElementVisible(this.assetValue, "Waiting")
        let text = await this.actions.getText(this.assetValue, "Asset value");
        let asset = text.slice(0, 6);
        console.log("asset", asset);
        return asset;
    }

    public async click(element: ElementFinder) {
        await this.actions.click(element, "Click on" + element + " ");
    }

}