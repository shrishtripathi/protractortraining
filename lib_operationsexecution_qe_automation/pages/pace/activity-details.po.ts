
import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class ActivityDetailsPage extends BasePage {

    readonly beginDate: ElementFinder = element(by.xpath("//div[contains(.,'Begin Date')]/parent::td/following-sibling::td//input[1]"));


    readonly truckNumberTextBox: ElementFinder = element(by.xpath("//div[contains(.,'Truck') and contains(.,'Number')]/input"));
    constructor() {
        super();

    }






    public async selectDropDownValue(lableTextFirstLine: string, lableTextSecondLine: string, textValue: string) {
        let dropDown: ElementFinder = element(by.xpath("//td[contains(.,'" + lableTextFirstLine + "') and contains(.,'" + lableTextSecondLine + "')]/following-sibling::td//select"));
        await this.actions.click(dropDown, "click on " + lableTextFirstLine + lableTextSecondLine);
        let optionXpath: ElementFinder = element(by.xpath("//td[contains(.,'" + lableTextFirstLine + "') and contains(.,'" + lableTextSecondLine + "')]/following-sibling::td//select/option[@value='" + textValue + "']"))
        await this.actions.click(optionXpath, "Click on " + + " option")
    }
    public async selectDropDownText(lableTextFirstLine: string, lableTextSecondLine: string, textValue: string) {
        let dropDown: ElementFinder = element(by.xpath("//td[contains(.,'" + lableTextFirstLine + "') and contains(.,'" + lableTextSecondLine + "')]/following-sibling::td//select"));
        await this.actions.click(dropDown, "click on " + lableTextFirstLine + lableTextSecondLine);
        let optionXpath: ElementFinder = element(by.xpath("//td[contains(.,'" + lableTextFirstLine + "') and contains(.,'" + lableTextSecondLine + "')]/following-sibling::td//select/option[text()='" + textValue + "']"))
        await this.actions.click(optionXpath, "Click on " + + " option")
    }
    public async setActivityPerformedBytext(value: string) {
        let activityPerformedBytext: ElementFinder = element(by.xpath("//td[contains(.,'Activity') and contains(.,'Performed')]/following-sibling::td/div/input[contains(@name,'activityPerformedBy')]"));
        await this.actions.setText(activityPerformedBytext, value, "");
    }

    public async clickLink(linkText: string) {
        let linkElement: ElementFinder = element(by.xpath("//span/a[contains(text(),'" + linkText + "')]"));
        await this.actions.click(linkElement, "click on " + linkText);

    }

    public async clickMilesLink() {
        let linkElement: ElementFinder = element(by.xpath("//a/span[contains(text(),'Miles')]"));
        await this.actions.click(linkElement, "click on miles ");

    }
    public async clickCustomerMeasureLink() {
        let linkElement: ElementFinder = element(by.xpath("//a/span[contains(text(),'Customer Measure')]"));
        await this.actions.click(linkElement, "clickCustomerMeasureLink");

    }
    public async setTruckNumber(truckNumber: string) {

        await this.actions.setText(this.truckNumberTextBox, truckNumber, "set trucknumber");

    }
    public async clickButton(buttonText: string) {

        let buttonElement: ElementFinder = element(by.xpath("//input[@value='" + buttonText + "' and @type='button']"));
        await this.actions.click(buttonElement, "")

    }
    public async verifySuccessMessage() {
        let successMessage: ElementFinder = element(by.xpath("//li[contains(text(),'Saved Successfully!')]"));
        let waitCount: number = 1;
        do {
            waitCount++;
            await this.actions.waitUntilElementVisible(successMessage, "success");
        } while (! await successMessage.isPresent() && await waitCount <= 10)

        if (await successMessage.isPresent()) {
            return true;
        }

        return false;
    }

}