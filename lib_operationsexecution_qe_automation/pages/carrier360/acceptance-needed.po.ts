import { by, element, ElementFinder } from 'protractor';
import { By } from "selenium-webdriver";
import { BasePage } from '../base.po';

export class AcceptanceNeededPage extends BasePage {

    readonly loadingElement: ElementFinder = element(By.xpath("(//div[@role='presentation' and contains(text(),'Loading')])[1]"));
    readonly requestChangesButton: ElementFinder = element(by.xpath("//span[text()='Request Changes']/ancestor :: a"));
    readonly requestChangesButtonOnPopup: ElementFinder = element(by.xpath("(//span[text()='Request Changes']/ancestor :: a)[2]"));
    readonly acceptTenderButton: ElementFinder = element(by.xpath("//span[text()='Accept Tender']/ancestor :: a"));
    readonly acceptTenderButtonOnPopup: ElementFinder = element(by.xpath("(//span[text()='Accept Tender']/ancestor :: a)[2]"));
    readonly cancelButtonOnPopup: ElementFinder = element(by.xpath("//span[text()='Cancel']/ancestor :: a"));
    readonly cancelButtonSpanTextPopup: ElementFinder = element(by.xpath("//span[text()='Cancel']/ancestor :: a//span//span//span[2]"));
    readonly requestPopup: ElementFinder = element(by.xpath("//div[text()='Is something in this tender not right?']"));
    readonly NeedHelpButton: ElementFinder = element(by.xpath("//div[text()='Need help']/ancestor :: a"))
    readonly rejectTenderButton: ElementFinder = element(by.xpath("//span[text()='Reject Tender']/ancestor :: a"));
    readonly rejectTenderButtonOnPopup: ElementFinder = element(by.xpath("(//span[text()='Reject Tender']/ancestor :: a)[2]"));
    readonly acceptTenderSpanText: ElementFinder = element(by.xpath("//span[text()='Accept Tender']/ancestor :: span//span//span[2]"));
    readonly acceptTenderSpanTextPopup: ElementFinder = element(by.xpath("(//span[text()='Accept Tender']/ancestor :: span//span//span[2])[2]"));
    readonly rejectTenderSpanText: ElementFinder = element(by.xpath("//span[text()='Reject Tender']/ancestor :: span//span//span[2]"));
    readonly rejectTenderSpanTextPopup: ElementFinder = element(by.xpath("(//span[text()='Reject Tender']/ancestor :: span//span//span[2])[2]"));
    readonly requestChangesSpanTextPopup: ElementFinder = element(by.xpath("(//span[text()='Request Changes']/ancestor :: span//span//span[2])[2]"));

    public async clickOnElement(element: ElementFinder) {
        try {
            if (await element.isDisplayed()) {
                await this.actions.click(element, "Click Tab");
            }
        } catch (e) {
            console.log("element not displayed")
        }

    }
    public async verifyErrorMessage(errorMSG: string) {
        let errorElement: ElementFinder = element(by.xpath("//div[contains(text(),'" + errorMSG + "')]"));
        await this.actions.waitUntilElementVisible(errorElement, "")
        if (await errorElement.isPresent()) {
            return true;
        }
        return false;
    }


    public async verifyWarningMessage(lessThanTenWarning: string) {
        let errorElement: ElementFinder = element(by.xpath("//li[contains(text(),'" + lessThanTenWarning + "')]"));
        await this.actions.waitUntilElementVisible(errorElement, "")
        if (await errorElement.isPresent()) {
            return true;
        }
        return false;
    }
    public async enterTextInTenderBox(text: string) {

        let textArea: ElementFinder = element(by.xpath("//textarea[@placeholder='Provide your detailed description here...']"))
        await this.actions.click(textArea, "");
        await this.actions.setText(textArea, text, "")
    }


    public async clickOnRequestChangesButtonOnPopup() {
        await this.actions.waitUntilElementPresenceOf(element(by.xpath("//div[contains(text(),'Is something in this tender not right')]")), "");
        await this.actions.click(element(by.xpath("//a[contains(@class,'activeAction')]//span[contains(text(),'Request Changes')]")), "");
        await this.actions.waitUntilElementInVisible(this.loadingElement, "")
    }

    public async verifyRejectTenderPopup() {
        let rejectTenderPopup: ElementFinder = element(by.xpath("//*[contains(text(),'We are sorry that you are not happy')]"));
        await this.actions.waitUntilElementVisible(rejectTenderPopup, "");
        try {
            if (await rejectTenderPopup.isDisplayed()) {
                return true;

            }
        } catch (e) { }
        return false;
    }

    public async verifyAcceptTenderPopup() {
        let acceptTenderPopup: ElementFinder = element(by.xpath("//*[contains(text(),'Great! You are choosing to accept this tender!')]"));
        await this.actions.waitUntilElementVisible(acceptTenderPopup, "");
        try {
            if (await acceptTenderPopup.isDisplayed()) {
                return true;

            }
        } catch (e) { }
        return false;
    }

    public async verifyRequestChangesPopup() {
        let requestChangesPopup: ElementFinder = element(by.xpath("//*[contains(text(),'Is something in this tender not right?')]"));
        await this.actions.waitUntilElementVisible(requestChangesPopup, "");
        try {
            if (await requestChangesPopup.isDisplayed()) {
                return true;

            }
        } catch (e) { }
        return false;
    }
}

