import { browser, by, element, ElementFinder } from 'protractor';
import { BasePage } from '../base.po';

export class AdminsScreens extends BasePage {

    public async clickOnLink(linkText: string) {
        let linkXpath: ElementFinder = element(by.xpath("//a[.='" + linkText + "']"));
        await this.actions.click(linkXpath, "click on " + linkText + " link");
    }
}
