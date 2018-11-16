import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class IclpHomepage extends BasePage {


    public async clickOnLoadCount() {
        await this.waitForLoading();
        let xpath: ElementArrayFinder = element.all(by.xpath("//div[@class='divTableCell divTCCount']"));
        let loadValue;
        let length: number = await xpath.count();
        let index: number = 1;
        for (index = 1; index <= length; index++) {
            if (parseInt(await element(by.xpath("(//div[@class='divTableCell divTCCount'])[" + index + "]")).getText()) > 5) {
                loadValue = index;
                break;
            }
        }
        await this.actions.click(element(by.xpath("(//div[@class='divTableCell divTCCount'])[" + loadValue + "]")), "Click on state");
        await this.waitForLoading();
    }

    public async waitForLoading() {
        let loading = element(by.xpath("//div[text()='Loading...' and @role='presentation']"));
        await this.actions.waitUntilElementInVisible(loading, "Waiting");
    }
}