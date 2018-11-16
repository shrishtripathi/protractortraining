
import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class CustomerServicePage extends BasePage {

    readonly stopNonEditable = element(by.id("displayNonEdit"))

    constructor() {
        super();

    }
    public async isStopNonEditable() {
        let flag: boolean = false;
        try {
            await browser.sleep(5000);
            await this.actions.waitUntilElementVisible(this.stopNonEditable, "wait until stop is displayed");
            flag = await this.actions.isElementDisplayed(this.stopNonEditable, "is stop displayed")
        } catch (error) {
            console.log("error element not present " + error)
        }
        return await flag;
    }

}