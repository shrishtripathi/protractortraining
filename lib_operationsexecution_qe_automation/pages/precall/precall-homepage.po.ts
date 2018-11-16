import { browser, by, element, ElementFinder, ExpectedConditions, protractor, ElementArrayFinder } from 'protractor';
import { BasePage } from '../base.po';
import { async } from 'q';

export class PrecallHomePage extends BasePage {
    public async clickOnTab(tabName: string) {
        let tabXpath = element(by.xpath("//span[text()='" + tabName + "']//parent::a"));
        await this.actions.click(tabXpath, "Clicking on tab");
    }
}