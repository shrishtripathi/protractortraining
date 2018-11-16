import { browser, by, element, ElementFinder, ExpectedConditions, protractor } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';

export class SimonNowHomePage extends BasePage {

    readonly searchTypeDropDown = element(by.xpath("//input[@name='searchType']"));
    readonly divisionDropDown = element(by.xpath("//input[@name='division']"));
    readonly dateBasisDropDown = element(by.xpath("//input[@name='dateBasis']"));
    readonly sectionDropDown = element(by.xpath("//input[@name='section']"));
    readonly billToCode = element(by.xpath("//input[@name='billToCode']"));
    readonly pubName = element(by.xpath("//input[@name='pubName']"));
    readonly section = element(by.xpath("//input[@name='section']"));
    readonly rateValue = element(by.xpath("//*[text()='Mode']/ancestor::div[contains(@class,'x-panel-default-framed')]/div[2]//*[@class='x-grid-item-container']/table//td[5]/div"));
    readonly codeInputField: ElementFinder = element(by.xpath("//div[contains(@id,'textfield')]//input[@name='pubCode']"));
    readonly nameInputField: ElementFinder = element(by.xpath("//div[contains(@id,'textfield')]//input[@name='pubName']"));
    readonly typeDropdown: ElementFinder = element(by.xpath("//input[@name='pubTypCode']/parent::div/parent::div//div[2]"));
    readonly customFormatDropdown: ElementFinder = element(by.xpath("//input[@name='format']"));
    readonly instructions: ElementFinder = element(by.xpath("//textarea[@name='instruction']"))
    readonly publicationSavedMessage: ElementFinder = element(by.xpath("//*[contains(text(),'Publication saved successfully')]"));

    public async setOptionFromDropDown(option: string, dropDownName: ElementFinder) {
        let selectOption = element(by.xpath("//li[contains(text(),'" + option + "')]"));
        await this.actions.waitUntilElementVisible(dropDownName, "Waiting");
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.waitUntilElementVisible(selectOption, "Waiting");
        await this.actions.click(selectOption, "click on option");
    }

    public async scrollintoView(dropDownName: ElementFinder) {
        browser.executeScript("arguments[0].scrollIntoView();", dropDownName.getWebElement());
    }

    public async clickOnTab(tabName: string) {
        let tab = element(by.xpath("//a//span[contains(text(),'" + tabName + "')]//ancestor::a"));
        await this.actions.click(tab, "Click on Tab");
    }

    public async setText(element: ElementFinder, text: string) {
        await this.actions.clearText(element, "Clear Text");
        await this.actions.setText(element, text, "Set Text");
    }

    public async clickOnAutopopulatedText(text: string) {
        let autopopulatedElement = element(by.xpath("//*[contains(text(),'" + text + "')]"));
        await this.actions.click(autopopulatedElement, "Click on Text");
    }

    public async clickOnButton(buttonName: string) {
        let button = element(by.xpath("//*[contains(text(),'" + buttonName + "')]//ancestor::a"));
        await this.actions.click(button, "Click on Button");
    }
}