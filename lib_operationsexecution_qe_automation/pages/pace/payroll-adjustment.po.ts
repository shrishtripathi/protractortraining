import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';
import { protractor } from 'protractor/built/ptor';

export class PayrollAdjustmentPage extends BasePage {

    public async verifyPayrollAdjustmentRecord(values_array: string[]) {
        let check_element: ElementFinder = element(by.xpath("//div[contains(text(),'No data found')]"));
        if (await check_element.isPresent()) {
            await this.createNewPayrollAdjustment(values_array);
        }

        let data_Array: string[] = [];
        let check_table: ElementFinder = element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']"));
        await this.actions.waitUntilElementVisible(check_table, "loading");
        if (await check_table.isPresent()) {
            let payItemCode: string = await element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']/td[7]")).getText();
            let quantity: string = await element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']/td[8]")).getText();
            let measure: string = await element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']/td[9]")).getText();
            let rate: string = await element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']/td[10]")).getText();
            let amount: string = await element(by.xpath("//table[@class='resultsTable']//tr[@class='resultsRow']/td[11]")).getText();
            await data_Array.push(payItemCode, quantity, measure, rate, amount);
        }
        return data_Array;
    }

    public async createNewPayrollAdjustment(val_Array: string[]) {
        await this.clickOnButton("Add");
        let check_header: ElementFinder = element(by.xpath("//center[contains(text(),'Payroll Add')]"));
        await this.actions.waitUntilElementVisible(check_header, "header");
        await this.actions.setText(element(by.xpath("//input[@name='payrollAdjustmentBean.orderNumber']")), val_Array[0], "");
        await this.waitForPageLoad();
        await this.actions.click(element(by.xpath("//input[@name='payrollAdjustmentBean.itemQuantity']")), "");
        await this.actions.setText(element(by.xpath("//input[@name='payrollAdjustmentBean.itemQuantity']")), val_Array[1], "");
        await this.actions.setText(element(by.xpath("//input[@name='payrollAdjustmentBean.itemRate']")), val_Array[2], "");
        await this.actions.setText(element(by.xpath("//input[@name='payrollAdjustmentBean.itemAmount']")), val_Array[3], "");
        await this.actions.click(element(by.xpath("//select/option[text()='" + val_Array[4] + "']")), "");
        await this.waitForPageLoad();
        await this.actions.click(element(by.xpath("//select/option[contains(text(),'" + val_Array[6] + "')]")), "");
        await this.waitForPageLoad();
        await this.actions.click(element(by.xpath("//select/option[contains(text(),'" + val_Array[7] + "')]")), "");
        await this.waitForPageLoad();
        let date_value: string = await element(by.xpath("//select[@name='selectedPayPeriodEndDate']/option[@selected]")).getText();
        console.log(date_value);
        await browser.executeScript("document.getElementsByName('dateOfActivity')[0].setAttribute('value', '" + date_value + "')");

        let date_field: ElementFinder = element(by.xpath("//select[@name='selectedPayPeriodEndDate']"));

        await date_field.sendKeys(protractor.Key.TAB);
        await this.selectDriverOnPayrollAdjustment(val_Array[5]);
        await this.clickOnButton("Save");
        await this.waitForPageLoad();
    }

    public async selectDriverOnPayrollAdjustment(text_value: string) {
        let optionXpath: ElementFinder = element(by.xpath("//select/option[contains(text(), '" + text_value + "')]"))
        await this.actions.click(optionXpath, "driver");
    }
}