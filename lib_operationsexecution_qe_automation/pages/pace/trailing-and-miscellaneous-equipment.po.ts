import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";


export class TrailingandMiscellaneousEquipmentPage extends BasePage {

    readonly trailerNumberTextBox: ElementFinder = element(by.xpath("(//input[contains(@name,'trailerNumber')])[1]"));


    public async clickButton(buttonValue: string) {
        let buttonElement: ElementFinder = element(by.xpath("//input[contains(@type,'submit') and contains(@value,'" + buttonValue + "')]"));
        await this.actions.click(buttonElement, "click " + buttonValue);
    }

    public async verifySuccessMessage() {
        let successMessage: ElementFinder = element(by.xpath("//li[text()='Selected Reference Numbers saved successfully!']"));
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
    public async selectDropDownValue(lableTextFirstLine: string, lableTextSecondLine: string, textValue: string) {
        let dropDown: ElementFinder = element(by.xpath("(//td[contains(.,'" + lableTextFirstLine + "') and contains(.,'" + lableTextSecondLine + "')]/following-sibling::td//select)[1]"));
        await this.actions.click(dropDown, "click on " + lableTextFirstLine + lableTextSecondLine);
        let optionXpath: ElementFinder = element(by.xpath("(//td[contains(.,'" + lableTextFirstLine + "') and contains(.,'" + lableTextSecondLine + "')]/following-sibling::td//select)[1]/option[@value='" + textValue + "']"))
        await this.actions.click(optionXpath, "Click on " + + " option")
    }
    public async selectDropDownText(lableTextFirstLine: string, lableTextSecondLine: string, textValue: string) {
        let dropDown: ElementFinder = element(by.xpath("(//td[contains(.,'" + lableTextFirstLine + "') and contains(.,'" + lableTextSecondLine + "')]/following-sibling::td//select)[1]"));
        await this.actions.click(dropDown, "click on " + lableTextFirstLine + lableTextSecondLine);
        let optionXpath: ElementFinder = element(by.xpath("(//td[contains(.,'" + lableTextFirstLine + "') and contains(.,'" + lableTextSecondLine + "')]/following-sibling::td//select)[1]/option[text()='" + textValue + "']"))
        await this.actions.click(optionXpath, "Click on " + + " option")
    }
    public async setTrailerNumber(trailerNumber: string) {

        await this.actions.setText(this.trailerNumberTextBox, trailerNumber, "set trailerNumber");

    }
}