import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';


export class IPayHomePage extends BasePage {
    readonly locationDropDown: ElementFinder = element(by.xpath("//select[@name='location']"));
    readonly locations: ElementArrayFinder = element.all(by.xpath("//select[@name='location']/option"));
    readonly locationDropDownOptions: string = "//select[@name='location']/option";
    readonly payPeriodDropDown: ElementFinder = element(by.xpath("//select[@name='payPeriod']"));
    readonly payPeriodDropDownOptions: string = "//select[@name='payPeriod']/option";

    public async setOptionFromDropDown(optionsList: string, option: string, dropDownName: ElementFinder) {
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.selectByValue(optionsList, option, "select value");
    }

    public async clickOnSaveButton() {
        let save = element(by.xpath("//input[@name='saveBtn']"));
        await this.actions.click(save, "Click on Button");
    }

    public async clickOnLinkMenu(linkName: string) {
        let link = element(by.linkText(linkName));
        await this.actions.click(link, "Click on link menu");
    }
}