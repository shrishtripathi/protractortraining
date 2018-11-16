import { BasePage } from '../base.po';
import { browser, element, by, ElementFinder } from 'protractor';

export class AdminPage extends BasePage {

    readonly userIdXpath: ElementFinder = element(by.xpath("//label[.//text()='User Id:']/following-sibling::div//input"));
    readonly searchButtonXpath: ElementFinder = element(by.xpath("//label[.//text()='User Id:']/following-sibling::div/../../a[.//text()='Search']"));

    public async getTextFronInputBox(textBoxLabel: string) {
        let textBoxXpath: ElementFinder = element(by.xpath("//label[.//text()='" + textBoxLabel + ":']/following-sibling::div"));
        await this.actions.waitUntilElementPresenceOf(textBoxXpath)
        return (await this.actions.getText(textBoxXpath, ""))
    };

}