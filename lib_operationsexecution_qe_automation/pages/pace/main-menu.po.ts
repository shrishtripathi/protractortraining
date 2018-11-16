import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class MainMenuPage extends BasePage {

    readonly cashExpenseLink = element(by.linkText("Cash Expense Create"));
    readonly orderLookUpLink = element(by.linkText("Order Lookup"));
    readonly cashExpenseLookUpLink = element(by.linkText("Cash Expense Lookup"));

    constructor() {
        super();

    }

    public async clickOnCashExpenseLink() {
        await this.actions.click(this.cashExpenseLink, "clicked on cashExpense Link");
    }
    public async clickOnMainMenuLink(linkName: string) {
        let mainMenuLink = element(by.linkText(linkName));
        await this.actions.click(mainMenuLink, "clicked on  " + linkName + "Link");
    }
    public async verifyMainMenupage() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.cashExpenseLink, "wait till main menu page loaded");
            flag = await this.actions.isElementDisplayed(this.cashExpenseLink, "cash Expense link");
        } catch (error) {
            console.log("Main menu page error " + error)
        }
        return await flag;
    }
}