
import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class CustomerMeasurePage extends BasePage {

    readonly beginDate: ElementFinder = element(by.xpath("//div[contains(.,'Begin Date')]/parent::td/following-sibling::td//input[1]"));
    readonly setCustomerSpecificValueElement: ElementFinder = element(by.xpath("//input[contains(@name,'quantity')]"));


    constructor() {
        super();

    }


    public async selectCustomerSpecificMeasure(value: string) {

        let options: string = "//select[contains(@id,'selectedMeasure')]/option"
        await this.actions.selectByValue(options, value, "selectCustomerSpecificMeasure")

    }

    public async setCustomerSpecificValue(value: string) {

        await this.actions.clearText(this.setCustomerSpecificValueElement, "")
        await this.actions.setText(this.setCustomerSpecificValueElement, value, "")

    }
    public async clickButton(buttonText: string) {

        let buttonElement: ElementFinder = element(by.xpath("//input[@value='" + buttonText + "' and @type='submit']"));
        await this.actions.click(buttonElement, "")

    }
    public async verifySuccessMessage() {
        let successMessage: ElementFinder = element(by.xpath("//li[text()='Selected measure saved successfully!']"));
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