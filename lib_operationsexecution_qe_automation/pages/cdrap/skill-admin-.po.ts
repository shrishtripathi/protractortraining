import { BasePage } from "../base.po";
import { ElementFinder, element, by, protractor, browser, ExpectedConditions } from "protractor";

export class SkillAdmin extends BasePage {

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

    public async getTextBoxValue(textBoxLabel) {
        let xpath: ElementFinder = element(by.xpath(`//*[@id="specialSkillsAdminForm"]//td[text()='` + textBoxLabel + `']/following-sibling::td/input`));
        await browser.wait(function () {
            return xpath.getAttribute('value').then(function (value) {
                return value !== '';
            });
        }, 5000);
        let value: string = await xpath.getAttribute('value');
        return value;
    }

    public async clickButtonOnSkillAdminPage(buttonText) {
        let xpath: ElementFinder = element(by.xpath(`//input[@value="` + buttonText + `"]`));
        await this.click(xpath)
    }
}