import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class VendorLookUpPage extends BasePage {
    readonly radiusInputField: ElementFinder = element(by.xpath("//span[text()='Radius:']//parent::label//parent::div//div//input"));
    readonly searchButton: ElementFinder = element(by.xpath("//div[@id='panel-1153-targetEl']//span[text()='Search']/ancestor::a"));
    readonly speedDailVendor: ElementFinder = element(by.xpath("//div[@id='speedDialGrid-body']//table[1]//tbody//tr"));
    readonly createWorkOrderButton: ElementFinder = element(by.xpath("//span[text()='Create Work Order']"));
    readonly okButton: ElementFinder = element(by.xpath("//span[text()='OK']//ancestor::span"));
    public async setInputField(FieldName: ElementFinder, text: string) {
        await this.actions.clearText(FieldName, "Clearing " + FieldName + " input field")
        await this.actions.setText(FieldName, text, "Enter " + text + " to " + FieldName + " input field");
    }

    public async click(element: ElementFinder) {
        await this.actions.click(element, "Click on" + element + " ");
    }

    public async clickCheckBox(checkBoxName: string[]) {
        await this.actions.mediumWait("");
        for (let i = 0; i < checkBoxName.length; i++) {
            let checkBox = element(by.xpath("//div[text()='" + checkBoxName[i] + "']//ancestor::tr//div"))
            browser.executeScript("arguments[0].scrollIntoView();", checkBox.getWebElement());
            await this.actions.click(checkBox, "Click on " + checkBoxName[i] + " ");
        }
    }

    public async doubleClickOnVendor() {
        await this.actions.waitUntilElementClickable(this.speedDailVendor, "Waiting");
        await this.actions.doubleClick(this.speedDailVendor, "Click on speed dail vendor");
        await this.actions.doubleClick(this.speedDailVendor, "Click on speed dail vendor");
    }

    public async clickOnOKButton() {
        await this.actions.waitUntilElementVisible(this.okButton, "Waiting");
        await this.actions.click(this.okButton, "Click ok button");
    }

}