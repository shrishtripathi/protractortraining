import { browser, by, element, ElementFinder, ExpectedConditions, protractor } from 'protractor';
import { BasePage } from "./base.po";
import { By } from 'selenium-webdriver';

export class AssingnDriver extends BasePage {

    public async enterTractorNumber(driverTextBoxId: string, tractorNumber: string) {
        let textBox: ElementFinder = element(by.id(driverTextBoxId));
        await this.actions.setText(textBox, tractorNumber, "Enter tractor Number")
    };

    public async clickOnButton(buttonText) {
        let buttonXpath: ElementFinder = element(by.buttonText(buttonText));
        await this.actions.click(buttonXpath, "click on" + buttonText + " button")
    };

    public async validateSuccessMessage() {

        let message: string;
        let verifyMessage: ElementFinder = await element(by.xpath("//span[@class='iceMsgsInfo']"));
        return message = await this.actions.getText(verifyMessage, "getting the success message");
    };


}