import { BasePage } from "../base.po";
import { ElementFinder, element, by} from "protractor";

export class LocationAvailability extends BasePage {

    readonly availablityCheckBox: ElementFinder= element(by.xpath(`//input[@name="selectedAvailability"]`));
    readonly redIconNextToCheckbox: ElementFinder= element(by.xpath(`//*[@title='Closed for Scheduling']`));
    readonly availablityCheckBoxWithReadIcon: ElementFinder= element(by.xpath(`//*[@title='Closed for Scheduling']/ancestor::tr/td/input[@name="selectedAvailability"]`));
    readonly searchResultTable: ElementFinder= element(by.xpath(`//table[@class='striped hoverHighlight results']`));

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