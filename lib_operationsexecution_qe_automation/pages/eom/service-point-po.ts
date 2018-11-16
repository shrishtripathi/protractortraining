import { browser, ElementFinder, element, by } from "protractor";

import { BasePage } from "../base.po";
import { By } from "selenium-webdriver";

export class ServicePointPage extends BasePage {
    readonly createLoad: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:createOrder']"));


    public async clickOnLoadValue(loadValue: string) {
        await this.actions.selectWindow(1, 'check details window');
        try {
            console.log("load value is " + loadValue)
            let selectLoad: ElementFinder = await element(By.xpath("(//td[contains(text(),'" + loadValue + "')])[1]"));
            await this.actions.click(selectLoad, 'load click under service point');
        } catch (error) {
            
        }
    }

    public async verifyDocumentOpened() {
        console.log("in verify document open page");
        await this.actions.selectWindow(2, 'check details window');
        await this.actions.longWait("medium wait to go to pop up");
        console.log("After switching");
        let openedDocument: ElementFinder = await element(By.xpath("//embed[@type='application/pdf']"));
        await this.actions.waitUntilElementPresenceOf(openedDocument, "")
        console.log("openedDocument.isElementPresent " + await openedDocument.isPresent());
        if (await openedDocument.isPresent()) {
            await browser.close();
            await this.actions.selectWindow(1, 'check details window');
            return true;
        } else {
            await browser.close();
            await this.actions.selectWindow(1, 'check details window');
            return false;
        }
    }

    public async closeServicePointTab() {
        await browser.close();
        await this.actions.selectWindow(0, 'goes to load listing page');
    }


}