import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { By } from 'selenium-webdriver';
import { request } from 'http';
import { ElementArrayFinder } from 'protractor/built/element';
import { isPending } from 'q';
import { BasePage } from '../base.po';

export class CustomerPool extends BasePage {


    readonly divisionDropDown = element.all(by.xpath("(//select[@id='form:division']/option)"));
    readonly customerCode = element(by.id("form:customerCode"));
    readonly searchButton = element(by.buttonText("Search"));

    public async selectvalueInDivisionDropdown(value: string) {
        await this.actions.selectByVisibleText(this.divisionDropDown, value, "selected " + value + " in division dropdown");
    }

    public async enterValueInCustomerCodeTextBox(value: string) {
        await this.actions.setText(this.customerCode, value, "sent keys " + value + " to customerCodeTextBox");
    }

    public async clickOnSearchButton() {
        await this.actions.click(this.searchButton, "clicked on search button");
    }

    public async getEquipmentNumber() {
        let requiredtext: string = null;
        do {
            let emptyText: ElementArrayFinder = element.all(by.xpath(""));
            let isPresent: boolean = await emptyText.isDisplayed();
            if (isPresent) {

            }
        } while (await this.pagination());


        return await requiredtext;
    }




}