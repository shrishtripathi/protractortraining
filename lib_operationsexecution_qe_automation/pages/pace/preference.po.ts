import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { CommonFunctions } from '../../utilities/common-functions';

let commonFuntions = new CommonFunctions();
export class PreferencePage extends BasePage {

    readonly saveButton = element(by.id("submitButton"));
    readonly billingPeriodEndingDropdown = element(by.name("preferenceBean.selectedBillingPeriodId"))

    public async clickOnDropDown(lableText: string) {
        let orderLookUp: ElementFinder = element(by.xpath("//td[contains(.,'" + lableText + "')]//following-sibling::td/select"));
        await this.actions.click(orderLookUp, "click on " + lableText);
    }

    public async selectBillingPeriodEndDate() {
        await this.actions.click(element(by.xpath("//select[contains(@name,'preferenceBean.selectedBillingPeriodId')]//option[@selected]/preceding-sibling::option[4]")), "");
        let datepath: ElementFinder = element(by.xpath("//select[contains(@name,'preferenceBean.selectedBillingPeriodId') and contains(@class,'input')]//option[@selected]"));
        console.log("date text" + await datepath.getText());
        await this.actions.click(element(by.xpath("//select[contains(@name,'preferenceBean.selectedPayPeriodDate')]//option[@selected]/preceding-sibling::option[4]")), "");
    }
    public async selectBillingPeriodDate(date: string) {
        await this.actions.click(this.billingPeriodEndingDropdown, "clicked On billing Period Dropdown");
        await this.actions.click(element(by.xpath("//select[@name='preferenceBean.selectedBillingPeriodId']/option[contains(text(),'" + date + "')]")), "clicked on element")
    }

    public async selectDropDownOption(optionText: string) {
        let optionXpath: ElementFinder = element(by.xpath("//select/option[contains(., '" + optionText + "')]"))
        await this.actions.click(optionXpath, "Click on " + optionText + " option")
    }

    public async clickOnButton(buttonText: string) {
        let saveButton: ElementFinder = element(by.xpath("//input[@value='" + buttonText + "']"));
        await this.actions.click(saveButton, "click on " + buttonText + " button");
        await browser.sleep(1500)
    }

    public async selectAccountValue(text_label: string, text_value: string) {
        await this.clickOnDropDown(text_label);
        await this.selectDropDownOption(text_value);
    }


}