import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";
import { read } from "fs";

export class CashExpenseAndChargeListingPage extends BasePage {

    readonly fuelHyperLink = element(by.xpath("(//td[contains(@id,'exp_date')]/following-sibling::td/div/a)[1]"));
    readonly cancelButton = element(by.xpath("//input[@value='Cancel']"))
    public async clickOnFuelLink() {
        await this.actions.click(this.fuelHyperLink, "clicking on fuel hyper link")
    }

}