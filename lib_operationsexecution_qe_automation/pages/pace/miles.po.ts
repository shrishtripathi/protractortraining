
import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class MilesPage extends BasePage {

    readonly beginDate: ElementFinder = element(by.xpath("//div[contains(.,'Begin Date')]/parent::td/following-sibling::td//input[1]"));



    constructor() {
        super();

    }

    public async setMilesTextBox(textBoxName: string, value: string) {
        let textBox: ElementFinder = element(by.xpath("//input[@name='" + textBoxName + "']"));
        await this.actions.setText(textBox, value, "setMilesTextBox");

    }
    public async selectMilageType(value: string) {

        let options: string = "//select[@id='selectedMileageType']/option"
        await this.actions.selectByValue(options, value, "selectMilageType")

    }

    public async selectMilageClassification(value: string) {

        let options: string = "//select[@id='selectedMileageClassification']/option"
        await this.actions.selectByValue(options, value, "selectMilageClassification")

    }

    public async clickButton(buttonText: string) {

        let buttonElement: ElementFinder = element(by.xpath("//input[@value='" + buttonText + "' and @type='button']"));
        await this.actions.click(buttonElement, "")

    }
    public async verifySuccessMessage() {
        let successMessage: ElementFinder = element(by.xpath("//li[text()='Selected miles saved successfully!']"));
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