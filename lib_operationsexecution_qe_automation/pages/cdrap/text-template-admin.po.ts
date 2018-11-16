import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";
import { ActionSequence, Alert, TargetLocator, AlertPromise } from "selenium-webdriver";

export class TextTemplatePage extends BasePage {

    readonly templateDescription = element(by.id("templateDescription"));
    readonly templateText = element(by.id("templateText"));
    readonly saveButton = element(by.name("SaveButton"));
    readonly editButton = element(by.xpath("//tr/td[contains(text(),'Test123')]/following-sibling::td/button[@id='selectTemplateButton']"));
    readonly deleteButton = element(by.xpath("//tr/td[contains(text(),'Test123')]/following-sibling::td/button[@id='deleteTemplateButton']"))

    public async enterTemplateName(templateName: string) {
        try {
            await this.actions.shortWait("...");
            let timeoutInMilliseconds = 3000;
            await browser.wait(await browser.ExpectedConditions.alertIsPresent(), timeoutInMilliseconds);
            await console.log("tewsted...")
        } catch (error) {

        }

    }
    public async verifyTemplate() {
        let flag: boolean = false;
        let xpath = element(by.xpath("//tr/td[contains(text(),'Test123')]"))
        try {
            await this.actions.waitUntilElementVisible(xpath, "wait...");
            flag = await this.actions.isElementDisplayed(xpath, "wait")
        } catch (error) {

        }
        return await flag;
    }
    public async verifyEditTemplate() {
        let flag: boolean = false;
        let xpath = element(by.id("editTemplateTable"))
        try {
            await this.actions.waitUntilElementVisible(xpath, "wait...");
            flag = await this.actions.isElementDisplayed(xpath, "wait")
        } catch (error) {

        }
        return await flag;
    }
    public async verifyCreatedTemplateNotDisplayed() {
        let flag: boolean = false;
        let xpath = element(by.xpath("//tr/td[contains(text(),'Test123')]"))
        try {
            flag = await this.actions.isElementNotDisplayed(xpath, "wait...");
        } catch (error) {

        }
        return await flag;
    }

}