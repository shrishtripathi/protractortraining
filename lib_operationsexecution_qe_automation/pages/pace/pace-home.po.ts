import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class PaceHomePage extends BasePage {

    readonly paceTab = element(by.linkText("PACE"));
    readonly saveButton = element(by.id("submitButton"));


    public async clicklink(linkText: string) {
        let link = element(by.linkText("" + linkText + ""));
        await this.actions.click(link, "click " + linkText + " link");
    }

    public async loginIntoPaceApplication(user: string, pass: string) {
        await this.actions.setText(element(by.xpath("//input[@name='j_username']")), user, "username");
        await this.actions.setText(element(by.xpath("//input[@name='j_password']")), pass, "password");
        await this.clickOnButton("Login");
        await this.actions.waitUntilElementVisible(element(by.xpath("//center[contains(text(),'Welcome')]")), "welcome");
    }

    public async clickOnLink(linkText: string) {
        let linkXpath: ElementFinder = element(by.xpath("//a[.='" + linkText + "']"));
        console.log("//a[.='" + linkText + "']")
        await this.actions.click(linkXpath, "click on " + linkText + " link");
    }

    public async closePaceBrowser() {
        await browser.close();
    }

    public async clickOnPaceTab() {
        await this.actions.click(this.paceTab, "clicked on Pace Tab");
    }
    public async clickOnSaveButton() {
        await this.actions.click(this.saveButton, "cliked on Save Button");
    }

}

















