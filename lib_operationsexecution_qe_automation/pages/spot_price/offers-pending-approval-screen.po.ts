import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";
import { By } from "selenium-webdriver";
import { protractor } from "protractor";

export class ApprovalScreenPage extends BasePage {

    readonly bypassCustomerApproval: ElementFinder = element(by.xpath("//input[@value='Bypass Customer Approval']"));
    readonly verifySpotPriceMessage: ElementFinder = element(by.xpath("//span[contains(@style,'color: blue')]"));
    readonly daysActiveInputField: ElementFinder = element(by.id("submitOffer:txtDaysActive"));
    readonly disabledDayaActiveInputField: ElementFinder = element(by.xpath("//input[@id='submitOffer:txtDaysActive' and @disabled='disabled']"));

    public async clickBypassCustomerApproval() {
        await this.actions.click(this.bypassCustomerApproval, "Bypass Cuustomer Approval");
    }

    public async clickOnCancelInAlertBox() {
        await this.actions.switchToAlertAndDismiss("Click on Cancel");
    }

    public async clickOnOkInAlertBox() {
        await this.actions.switchToAlertAndAccept("Click on OK");
    }

    public async verifySpotPrice() {
        let flag: boolean = false;
        await this.actions.waitUntilElementVisible(this.verifySpotPriceMessage, "verify spot price");
        flag = await this.actions.isElementDisplayed(this.verifySpotPriceMessage, "verify message");
        return await flag;
    }

    public async verifyUserInformation(businessName: string, name: string, email: string) {
        let flag: boolean = false;
        if (await this.actions.isElementPresent(element(by.xpath("//input[@value='" + businessName + "']")), businessName)) {
            if (await this.actions.isElementPresent(element(by.xpath("//input[@value='" + businessName + "']")), businessName)) {
                if (await this.actions.isElementPresent(element(by.xpath("//input[@value='" + businessName + "']")), businessName)) {
                    flag = true;
                }
            }
        }
        return await flag;
    }

    public async setTextInDaysActiveField() {
        let text = await this.actions.getText(this.daysActiveInputField, "Get Text");
        let noOfDays = parseInt(text);
        if (noOfDays >= 1 && noOfDays <= 7) {
            noOfDays = noOfDays + 1;
            text = noOfDays.toString();
        } else {
            text = '2';
        }
        await this.actions.clearText(this.daysActiveInputField, "Clear text");

        await this.actions.setText(this.daysActiveInputField, text, "Enter text");
    }

    public async verifyIsGreyedOutDaysActiveField() {
        return await this.actions.isElementPresent(this.disabledDayaActiveInputField, "Is Element present");
    }
}