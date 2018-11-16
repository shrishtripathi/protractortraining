import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

import { By } from 'selenium-webdriver';
import { ElementArrayFinder } from 'protractor/built/element';
import { BasePage } from '../base.po';

export class EOMBasePage extends BasePage {



    readonly searchValueInputBox = element(by.id("eomSearchMain:baseSearchVal"));
    readonly searchLoadsButton = element(by.id("eomSearchMain:advOrderSearch"));
    readonly billToMinimizer = element(by.id("eomOrderDetail:nonStopsminimizer"));
    readonly classificationsDropdown = element(by.xpath("//select[@id='eomOrderDetail:selOrdClassifications']/option"));
    readonly searchLoadsResults = element.all(by.xpath("(//table[@id='eomOrderDetail:stopsList']//tr[contains(@class,'row')])"));
    customersCodeEOM: string[] = [];
    customersLocationEOM: string[] = [];

    constructor() {
        super();
    }
    public async setValueInSearchInputBox(value: string) {
        await browser.sleep(5000);
        await this.actions.setText(this.searchValueInputBox, value, "value");
    }
    public async clickSearchLoadsButton() {
        await this.actions.click(this.searchLoadsButton, "click");
    }

    public async clickOnOrderNumberLink(orderNumber: string) {
        await browser.sleep(5000);
        await element(by.xpath("//a[text()='" + orderNumber + "']")).click();
    }
    public async verifiyClassificationsDropdownValue() {
        let text: string = null;
        try {
            await this.actions.click(this.billToMinimizer, "click");
            await this.actions.shortWait("short wait");
            text = await this.classificationsDropdown.getAttribute("value");

        } catch (error) {
            console.log("error in classification " + error);
        }
        return await text;
    }
    public async verifyStopSForLoads() {
        await browser.sleep(5000);
        let size: number = await this.searchLoadsResults.count();
        let locations: ElementFinder = element(by.xpath("eomOrderDetail:stopsList:0:Location"));
        for (let index = 0; index < size; index++) {
            this.customersLocationEOM[index] = await element(by.id("eomOrderDetail:stopsList:" + index + ":Location")).getText();
            console.log(this.customersCodeEOM[index]);
            this.customersCodeEOM[index] = await element(by.xpath("(//table[@id='eomOrderDetail:stopsList']//tr[contains(@class,'row')])[" + (index + 1) + "]//td[3]")).getText();
            console.log(this.customersLocationEOM[index]);
            await this.actions.shortWait("short wait");
        }
        console.log("eom customers " + this.customersCodeEOM);
        console.log("eom customersloc " + this.customersLocationEOM);
    }


}