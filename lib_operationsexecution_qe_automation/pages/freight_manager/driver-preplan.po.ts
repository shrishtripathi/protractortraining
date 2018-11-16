import { browser, by, element, ExpectedConditions, ElementFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from './base.po';

export class DriverPreplanPage extends BasePage {

    readonly driverAlpha = element(by.id("form:driverAlpha"));
    readonly addMultipleSegmentbutton = element(by.buttonText('Add Multiple Segment'));
    readonly addOrderNumbers = element(by.className('iceInpTxtArea'));

    public async enterDriverAlpha(textToEnter: string) {
        await this.actions.clearText(this.driverAlpha, 'Clear Driver Alpha field');
        await this.actions.setText(this.driverAlpha, textToEnter, 'Entering Driver Alpha Value');
    }

    public async clickAddMultipleSegmentbutton() {
        await this.actions.click(this.addMultipleSegmentbutton, "Click on Create Preplan Button");
    }

    public async enteringOrderNumbers(textToEnter: string) {
        await this.actions.setText(this.addOrderNumbers, textToEnter, "Entering order numbers");
    }

}