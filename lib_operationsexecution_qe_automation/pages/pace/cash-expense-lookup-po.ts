import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";
import { read } from "fs";

export class CashExpenseLookUpPage extends BasePage {

    readonly searchButton = element(by.name("Search"));
    readonly exitButton = element(by.name("Exit"))
    constructor() {
        super();
    }

    public async selectBillingPeriodDate() {
        let month = new Date().getUTCMonth();
        let mon: number = month + 1;
        let currentMonth = mon.toString();
        let year = new Date().getUTCFullYear().toString();
        let billingPeriodDropdown = element.all(by.xpath("//select[@id='selectedBillingPeriodServiceGroupId']/option"));
        console.log("current month is " + currentMonth);
        if (parseInt(currentMonth) < 10) {
            currentMonth = "0" + currentMonth.toString();
        }
        let date = currentMonth + "/" + "/" + year;
        let size = await billingPeriodDropdown.count();
        for (let index = 1; index < size; index++) {
            let text: string = await billingPeriodDropdown.get(index).getText();
            if (text.substring(0, 2).includes(currentMonth) && text.substring(6, text.length).includes(year)) {
                await this.actions.click(element(by.xpath("//select[@id='selectedBillingPeriodServiceGroupId']")), "");
                await this.actions.click(element(by.xpath("//select[@id='selectedBillingPeriodServiceGroupId']/option[contains(text(),'" + text.trim() + "')]")), "");
                break;
            }
        }
    }

    public async selectValueFromCashExpenseTypeDropdown(value: string) {
        await this.actions.click(element(by.xpath("//select[@name='selectedCashChargeType']")), "")
        let dropdown = element(by.xpath("//select[@name='selectedCashChargeType']/option[text()='" + value + "']"))
    }

}