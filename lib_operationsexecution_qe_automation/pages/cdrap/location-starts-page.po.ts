import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser, protractor, ElementArrayFinder } from "protractor";

export class LocationStarts extends BasePage {

    readonly locationStartTable: ElementFinder = element(by.xpath(`//div[@class='locationStartDiv']/table`));

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

    public async enterValueInTextBox(textBoxNameAttribute, value) {
        let textBoxXpath: ElementFinder = element(by.xpath(`//input[@name='` + textBoxNameAttribute + `']`));

        await textBoxXpath.clear();
        await this.setText(textBoxXpath, value)
    }

    public async clickOnRemoveStart() {
        let removeXpathArray = element.all(by.xpath("//td/input[@value='Remove Start']"));
        let removeXpath = element(by.xpath("//td/input[@value='Remove Start']"));
        for (let index = 0; index < await removeXpathArray.count(); index++) {
            await this.waitForElementIsVisible(removeXpath)
            await removeXpath.click()
        }
    }

    public async handleBrowserAlert() {
        await browser.executeScript("window.onbeforeunload = function(e){};");
    }

    public async clickOnAllCheckBoxes() {
        let checkBoxXpath: ElementFinder
        let checkBoxArrayXpath: ElementArrayFinder= element.all(by.xpath(`//td/input[@type="checkbox" and contains(@name,'specialStart.orientationGroupView.')]`));      
        for (let index = 1; index <= await checkBoxArrayXpath.count(); index++) {
            checkBoxXpath= element(by.xpath(`(//td/input[@type="checkbox" and contains(@name,'specialStart.orientationGroupView.')])[`+index+`]`));
           await checkBoxXpath.click()
        }

    }
}