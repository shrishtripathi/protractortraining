import { BasePage } from '../base.po';
import { SelectVendorPopupPage } from "./select-vendor-popup.po";
import { browser, element, by, ElementFinder, protractor, ExpectedConditions } from 'protractor';
import { read } from 'fs';

let EC = protractor.ExpectedConditions;

export class VendorInformationPage extends BasePage {
    readonly vendorInfoXpath: string = "//legend[contains(@class,'fieldset-header')]/div[text()='Vendor Information']"
    readonly contactInformationXpath: ElementFinder = element(by.xpath("//div[contains(@id,'contactinfo') and contains(@id,'innerCt') and @class='x-autocontainer-innerCt' and (.//text())]"));
    public async validateVendorInformation(textBoxLabel: string) {

        await this.actions.waitUntilElementPresenceOf(await element(by.xpath(this.vendorInfoXpath)));
        let fieldId: string = await element(by.xpath("//label[.//text()='" + textBoxLabel + "']/following-sibling::div//input[contains(@id,'textfield')]")).getAttribute("id")
        console.log("fieldId: " + fieldId)
        let fieldValue = await browser.executeScript("return (document.getElementById('" + fieldId + "').value)")
        await console.log("fieldValue: " + fieldValue)
        return fieldValue;
    };

    public async getContactInformationFromPopUpPage() {
        let selectVendorPopupPage = new SelectVendorPopupPage()
        await this.actions.waitUntilElementPresenceOf(selectVendorPopupPage.dialogBoxXpath);
        await browser.wait(EC.textToBePresentInElement(this.contactInformationXpath, ' '), 10000);
        let popupMessage = await this.actions.getText(this.contactInformationXpath, "Contact Information")
        console.log("contact Info: " + popupMessage)
        return popupMessage;
    };


}