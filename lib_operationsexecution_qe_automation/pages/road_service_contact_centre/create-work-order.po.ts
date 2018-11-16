import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";
import { protractor } from "protractor/built/ptor";
let EC = protractor.ExpectedConditions

export class CreateWorkOrderPage extends BasePage {
    readonly jobCodeInputField: ElementFinder = element(by.xpath("//input[contains(@id,'workOrderCreateInputJobCode')]"));
    readonly conditionInputField: ElementFinder = element(by.xpath("//input[contains(@id,'workOrderCreateInputCondition')]"));
    readonly estimatedLabourInputField: ElementFinder = element(by.xpath("//input[contains(@id,'workOrderCreateInputEstLabor')]"));
    readonly estimatedIssuedItemInputField: ElementFinder = element(by.xpath("//input[contains(@id,'workOrderCreateInputEstParts')]"));
    readonly estimatedMiscItemInputField: ElementFinder = element(by.xpath("//input[contains(@id,'workOrderCreateInputEstMisc')]"));
    readonly callBackInputField: ElementFinder = element(by.xpath("//input[contains(@id,'workOrderCreateInputCallbackdate')]"));
    readonly createWorkOrderButton: ElementFinder = element(by.xpath("//span[contains(@id,'createWorkOrderButton-btnInnerEl')]"));
    readonly successMessage: ElementFinder = element(by.xpath("//div[text()='Success']"));
    readonly vendorInputField: ElementFinder = element(by.xpath("//input[contains(@id,'workOrderCreateInputVendor-inputEl')]"));
    readonly creatingWorkOrder: ElementFinder = element(by.xpath("//div[text()='Creating work order...']"));
    readonly workOrder: ElementFinder = element(by.xpath("//div[contains(text(),' Parent WorkOrder: ')]"))
    public async clickCheckBox(checkBoxText: string) {
        let checkBox: ElementFinder = element(by.xpath("//label[contains(text(),'" + checkBoxText + "')]/parent::div//span"))
        await this.actions.click(checkBox, "click on checkbox");
    }

    public async setDropDown(dropdownName: string, optionToSelect: string) {
        let dropdown = element(by.xpath("//span[contains(text(),'" + dropdownName + "')]//parent::label//parent::div//div[contains(@id,'picker')]"));
        await this.actions.click(dropdown, "click on dropdown");
        let option = element(by.xpath("//div[contains(text(),'" + optionToSelect + "')]"));
        await this.actions.click(option, "click on option");
    }

    public async setInputField(FieldName: ElementFinder, text: string) {
        await this.actions.clearText(FieldName, "Clear input field");
        await this.actions.setText(FieldName, text, "Enter " + text + " to after date input field");
    }

    public async click(element: ElementFinder) {
        await this.actions.click(element, "Click on" + element + " ");
    }

    public async workOrderNUmber() {
        let text = await this.actions.getText(this.workOrder, "success message");
        let workOrderNumber = text.slice(18, 26);
        console.log("workOrderNumber", workOrderNumber);
        return workOrderNumber;
    }

    public async waitUntilWorkOrderSpinnerDisappears() {
        await this.actions.waitUntilElementInVisible(this.creatingWorkOrder, '');
    }

    public async verifySuccessMessage() {
        let text = await this.actions.getText(this.workOrder, "success message");
        return text;
    }
}