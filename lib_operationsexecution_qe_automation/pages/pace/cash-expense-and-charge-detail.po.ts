import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";
import { read } from "fs";

export class CashExpenseAndChargeDetail extends BasePage {

    constructor() {
        super();
    }

    readonly jbhuntCost = element(by.xpath("//input[@name= 'JBHuntCost']"))
    readonly internalComments = element(by.xpath("//textarea[@name= 'internalComments']"));
    readonly invoiceAmount = element(by.xpath("//input[@name= 'invAmt']"));
    readonly cancelButton = element(by.name("cancel"));

    public async jbhuntCostField(value: string) {
        await this.actions.waitUntilElementVisible(this.jbhuntCost, "value");
        await this.actions.clearText(this.jbhuntCost, "value");
        await this.actions.setText(this.jbhuntCost, value, "value");
    }
    public async internalCommentsField(value: string) {
        await this.actions.waitUntilElementVisible(this.internalComments, "value");
        await this.actions.clearText(this.internalComments, "value");
        await this.actions.setText(this.internalComments, value, "value");
    }
    public async invoiceAmountField(value: string) {
        await this.actions.waitUntilElementVisible(this.invoiceAmount, "value");
        await this.actions.clearText(this.invoiceAmount, "value");
        await this.actions.setText(this.invoiceAmount, value, "value");
    }
}