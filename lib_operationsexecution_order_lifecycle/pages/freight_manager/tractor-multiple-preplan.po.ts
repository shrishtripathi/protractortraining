import { by, element, ExpectedConditions, ElementFinder, protractor } from 'protractor';
import { BasePage } from '../base.po';

export class TractorMultiplePreplan extends BasePage {

    verifyMessage: ElementFinder;
    readonly tractorNumber = element(by.id("form:tractorNumber"));

    public async enterTractorNumber(tractorCode: string) {
        await this.actions.clearText(this.tractorNumber, " Clear the Tractor Number Field");
        await this.actions.setText(this.tractorNumber, tractorCode, "Enter the Tractor Number");
    };

    public async validateSuccessMessage() {
        let message: string;
        this.verifyMessage = await element(by.xpath("//span[@class='iceMsgsInfo']"));
        await this.actions.waitUntilElementVisible(this.verifyMessage, "Wait for element");
        return message = await this.actions.getText(this.verifyMessage, "getting the success message");
    };

}