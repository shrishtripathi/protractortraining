
import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class LocationInfoPage extends BasePage {


    readonly customerCodeElement: ElementFinder = element(by.xpath("//input[contains(@name,'customerCode')]"));


    constructor() {
        super();

    }

    public async setCustomerCode(value: string) {

        await this.actions.setText(this.customerCodeElement, value, "")

    }


    public async clickButton(buttonText: string) {

        let buttonElement: ElementFinder = element(by.xpath("//input[@value='" + buttonText + "' and @type='button']"));
        await this.actions.click(buttonElement, "")

    }
    public async selectLocationRole(value: string) {

        let options: string = "//select[contains(@name,'selectedLocationRole')]/option"
        await this.actions.selectByValue(options, value, "selectedLocationRole")

    }
    public async verifySuccessMessage() {
        let successMessage: ElementFinder = element(by.xpath("//li[text()='Location Information Saved Succesfully']"));
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