import { BasePage } from "../base.po";
import { ElementFinder, element, by, ElementArrayFinder, browser, ExpectedConditions } from "protractor";

export class PositionAssignment extends BasePage {

    readonly firstJobDescriptionHyperLink: ElementFinder = element(by.xpath(`//a[@id='positionAssign0']`));
    readonly errorMessageXpath: ElementFinder = element(by.xpath(`//li[@class='error']`));
    public async fieldXpath(nameAttribute: string) {
        return ("//*[@name='" + nameAttribute + "']")
    }

    public async selectOptionFromDropdown(nameAttribute: string, optionString: string) {
        let xpath = await this.fieldXpath(nameAttribute);
        let dropdownOptionXpath = xpath + "//option[text()='" + optionString + "']";
        await this.actions.waitUntilElementPresenceOf(element(by.xpath(xpath)))
        await this.actions.click(element(by.xpath(xpath)), "click on drpodown");
        await this.actions.waitUntilElementPresenceOf(element(by.xpath(dropdownOptionXpath)));
        await this.actions.click(element(by.xpath(dropdownOptionXpath)), 'click on option')
    }
}