import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';
import { CommonFunctions } from '../../utilities/common-functions';

export class ChargeDetailPage extends CommonFunctions {

    readonly jbHuntCost = element(by.name("JBHuntCost"));
    readonly invoiceAmount = element(by.name("invAmt"));
    readonly invoiceComments = element(by.name("invoiceComments"));
    readonly billingPeriodEndDateDropDown = element.all(by.xpath("//select[@name='billingPeriodEndDate']/option"));
    readonly invoiceDescDropDown = element.all(by.xpath("//select[@name='invoiceDescreption']/option"));
    readonly saveButton = element(by.name("save"));


    constructor() {
        super();

    }

    public async enterDataInJbhuntCostBox(data) {
        await this.actions.setText(this.jbHuntCost, data, "sent " + data + " to Jbhunt Cost Box")
    }
    public async enterDataInInvoiceAmountBox(data) {
        await this.actions.setText(this.invoiceAmount, data, "sent " + data + " to invoice amount Box")
    }
    public async enterDataInInvoiceCommentsBox(data) {
        await this.actions.setText(this.invoiceComments, data, "sent " + data + " to Invoice Amount Box")
    }
    public async clickOnSaveButton() {
        await this.actions.click(this.saveButton, "Clicked On Save Button");
    }
    public async selectInvoiceValue(value) {
        await this.actions.selectByVisibleText(this.invoiceDescDropDown, value, "selected " + value + " In invoice desc drop down");
    }
    public async selectFutureDate() {
        let size = await this.billingPeriodEndDateDropDown.count();
        let month: number = new Date().getUTCMonth();
        for (let index = 0; index < size; index++) {
            let date: string = await this.billingPeriodEndDateDropDown.get(index).getText();
            if (date.substring(0, 3).includes((month + 2).toString())) {
                this.actions.click(this.billingPeriodEndDateDropDown.get(index), "clicked on future date");
                break;
            }
        }
    }

}