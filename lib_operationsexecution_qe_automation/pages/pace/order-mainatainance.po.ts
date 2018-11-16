import { browser, by, element, ElementFinder } from 'protractor';
import { BasePage } from "../base.po";;

export class OrderMaintainance extends BasePage {

    readonly verifySuccessMessage: ElementFinder = element(by.tagName("ul"));
    readonly homeTab: ElementFinder = element(by.xpath(""));

    public async clickOnRadioButton(id: string) {
        let orderInputRadioButton: ElementFinder = element(by.id(id));
        await this.actions.click(orderInputRadioButton, "click on input radio button");
    }

    public async enterOrderNumber(id: string, orderNUmber: string) {
        let textBoxXpath: ElementFinder = await element(by.id(id));
        await this.actions.setText(textBoxXpath, orderNUmber, "click on input radio button");
    }

    public async clickOnButton(valueTagText: string) {
        let submitButton: ElementFinder = element(by.xpath("//input[@value='" + valueTagText + "']"));
        await this.actions.click(submitButton, "click " + valueTagText + " button");
    }

    public async verifyProcessedOrdersMessage(orderNumber: string) {
        let actualOrderNumber: string
        let expectedmessage: string = "Processing complete. Results:\nUnprocessed Orders (Agreed charges found. Order " + orderNumber + " cannot be deleted from PACE system.): " + orderNumber + "\nIt will still be a few minutes before the orders make it to PACE."
        let actualmessage: string = await this.verifySuccessMessage.getText();
        console.log('actualmessage: ' + actualmessage + '\n' + expectedmessage)
        return { actualmessage, expectedmessage }
    }

    public async clickHomeTab() {
        await this.actions.click(this.homeTab, "click home tab");
    }
}