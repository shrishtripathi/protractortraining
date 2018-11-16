import { browser, by, element, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';
import { protractor } from 'protractor';
import { By } from "selenium-webdriver";
import { BasePage } from './base.po';

export class ChasisBeamPage extends BasePage {

    readonly tractorNumberInputField = element(by.id("form:tractorNbr"));
    readonly chasisToBeAttachedPrefixInputField = element(by.id("form:eqpUnitPrefixId"));
    readonly chasisToBeAttachedNumberInputField = element(by.id("form:eqpUnitId"));
    readonly reattachedDriverPrefix = element(by.xpath("//*[text()='Currently attached chassis']/parent::td/parent::tr/td[2]/span"));
    readonly reattachedDriverNumber = element(by.xpath("//*[text()='Currently attached chassis']/parent::td/parent::tr/td[3]/span"));

    constructor() {
        super();

    }

    public async setTractorText(text: string) {
        await this.actions.clearText(this.tractorNumberInputField, "Clear text in tractor field");
        await this.actions.setText(this.tractorNumberInputField, text, "Enter text");
    }

    public async setChasisPrefixText(text: string) {
        await this.actions.clearText(this.chasisToBeAttachedPrefixInputField, "Clear text in prefix field");
        await this.actions.setText(this.chasisToBeAttachedPrefixInputField, text, "Enter text");
    }

    public async setChasisNumberText(text: string) {
        await this.actions.clearText(this.chasisToBeAttachedNumberInputField, "Clear text in prefix field");
        await this.actions.setText(this.chasisToBeAttachedNumberInputField, text, "Enter text");
    }

    public async getPageTitle() {
        return await this.actions.getPageTitle("Page Title");
    }
}
