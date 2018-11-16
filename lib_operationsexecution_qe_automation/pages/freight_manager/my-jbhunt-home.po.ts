import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "./base.po";
import { By } from 'selenium-webdriver';

export class MyJbHuntHomePage extends BasePage {

    window: string = null;
    readonly linkShowMoreApp = element(by.xpath("//a[@class='showMoreApps']"));
    readonly linkFreightManager2 = element(by.xpath("//a[@title='Freight Manager 2']"));
    currentWindow: string;
    public async clickOnShowMoreAppLink() {
        return await this.actions.click(this.linkShowMoreApp, "Click on Show my app link");
    }
    public async clickonFreightManager2() {
        await this.actions.click(this.linkFreightManager2, "Click on FreightManager2 link");
        return await this.actions.selectWindow(1, "Freight Manager Tab");
    }

    public async getFreightmangerWindow() {
        let text: string = null;
        text = await browser.getWindowHandle();
        this.window = text;
        return await text;
    }

    public async switchToMyJbHuntHomePage() {
        browser.driver.switchTo().window(this.currentWindow);
    }
}