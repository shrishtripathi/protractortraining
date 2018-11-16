import { BasePage } from "../base.po";
import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";

export class DomainAdmin extends BasePage {

    readonly uncheckedBoxArrayXpath: ElementArrayFinder = element.all(by.xpath("//input[@type='checkbox' and not(@checked='checked') and @value='on']"));
    readonly checkBoxArrayXpath: ElementArrayFinder = element.all(by.xpath("//input[@type='checkbox' and @value='on']"));
    readonly checkedBoxArrayXpath: ElementArrayFinder = element.all(by.xpath("//input[@type='checkbox' and @checked='checked' and @value='on']"));
    readonly checkBoxXpath: ElementFinder = element(by.xpath("//input[@type='checkbox' and @value='on']"));
    readonly uncheckedBoxXpath: ElementFinder = element(by.xpath("//input[@type='checkbox' and not(@checked='checked') and @value='on']"));
    readonly updateButton: ElementFinder = element(by.xpath(`//input[@value="Update"]`));

    public async fieldXpath(nameAttribute: string) {
        return ("//*[@name='" + nameAttribute + "']")
    }

    public async selectOptionFromDropdown(nameAttribute: string, optionString: string) {
        let xpath = await this.fieldXpath(nameAttribute);
        let dropdownOptionXpath = xpath + "/option[text()='" + optionString + "']";
        await this.actions.waitUntilElementPresenceOf(element(by.xpath(xpath)))
        await this.actions.click(element(by.xpath(xpath)), "click on drpodown");
        await this.actions.waitUntilElementPresenceOf(element(by.xpath(dropdownOptionXpath)));
        await this.actions.click(element(by.xpath(dropdownOptionXpath)), 'click on option')
        await this.actions.waitUntilElementPresenceOf(element(by.xpath("//*[@name='domainView.name' and @value='" + optionString + "' and @type='text']")))
    }

    public async uncheckHalfOfCheckBoxes() {
        await this.actions.waitUntilElementPresenceOf(await this.checkBoxXpath)
        try {
            for (let index = 1; (await this.uncheckedBoxXpath.isPresent()) && index <= (await this.uncheckedBoxArrayXpath.count()); index++) {
                let uncheckedBox: ElementFinder = element(by.xpath("(//input[@type='checkbox' and not(@checked='checked') and @value='on'])[" + index + "]"));
                await uncheckedBox.click();
            }
            await this.actions.click(this.updateButton, "");
            await this.actions.waitUntilElementPresenceOf(this.checkBoxXpath);
        }
        catch (error) {
            console.log(error);
        }

        for (let index = 2; index <= (await this.checkBoxArrayXpath.count()); index++) {
            let checkBoxXpath: ElementFinder = element(by.xpath("(//input[@type='checkbox' and @value='on'])[" + index + "]"));
            await checkBoxXpath.click();
            index++
        }
        await this.actions.click(this.updateButton, "");
    }

    public async checkAllUnchekedBoxes() {
        await this.actions.waitUntilElementPresenceOf(await this.checkBoxXpath);
        for (let index = 1; index <= (await this.uncheckedBoxArrayXpath.count()); index++) {
            let uncheckedBox: ElementFinder = element(by.xpath("(//input[@type='checkbox' and not(@checked='checked') and @value='on'])[" + index + "]"));
            await uncheckedBox.click();
        }
        await this.actions.click(this.updateButton, "");
    }
}