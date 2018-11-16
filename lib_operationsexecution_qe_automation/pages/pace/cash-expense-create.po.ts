import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';
import { CommonFunctions } from '../../utilities/common-functions';

export class CashExpenseCreatePage extends CommonFunctions {

    readonly cashExpenseTypeDropdown = element.all(by.xpath("//select[@name='selectedCashExpenseType']/option"));
    readonly calenderImage = element(by.xpath("//input[@name='endDate']/following-sibling::img"));
    readonly endTime = element(by.name("endTime"));
    readonly cashExpenseButton = element(by.xpath("//input[@value='Create Cash Expense']"));
    readonly currentDate = element(by.xpath("//td[@class='day selected today']"));

    constructor() {
        super();

    }

    public async selectTypeinCashExpenseDropdown(value: string) {
        let xpath = element(by.xpath("//select[@name='selectedCashExpenseType']"));
        await this.actions.click(xpath, "")
        console.log("xpath is (//select[@name='selectedCashExpenseType']/option[contains(text(),'" + value + "')])")
        await this.actions.click(element(by.xpath("(//select[@name='selectedCashExpenseType']/option[contains(text(),'" + value + "')])")), "")
    }
    public async selectCurrentDate() {
        let date = new Date().getUTCDate();
        console.log("date is " + date);
        await this.actions.waitUntilElementVisible(this.currentDate, "selected current date")
        await this.actions.click(this.currentDate, "selected current date");
    }
    public async selectFutureDate() {
        let date = new Date().getUTCDay();
        await this.selectTodaysDate(date + 1);
    }
    public async enterCurrentTimeInHours() {
        let time = new Date().getUTCHours();
        let requiredTime: string = null;
        if (time < 9) {
            requiredTime = "0" + (time + 1) + ":00"
        }
        else {
            requiredTime = (time + 1) + ":00"
        }
        await this.actions.setText(this.endTime, requiredTime, "sent current time");
    }
    public async clickCalenderImage() {
        await this.actions.waitUntilElementVisible(this.calenderImage, "clicked on calender image")
        await this.actions.click(this.calenderImage, "clicked on calender image");
    }
    public async clickOnCashExpenseButton() {
        await this.actions.click(this.cashExpenseButton, "clicked on cash Expense button")
    }
}