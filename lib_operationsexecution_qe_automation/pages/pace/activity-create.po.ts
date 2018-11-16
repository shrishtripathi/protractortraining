import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class ActivityCreatePage extends BasePage {

    readonly beginDate: ElementFinder = element(by.xpath("//div[contains(.,'Begin Date')]/parent::td/following-sibling::td//input[1]"));
    readonly endDate: ElementFinder = element(by.xpath("//div[contains(.,'End Date')]/parent::td/following-sibling::td//input[1]"));
    readonly beginTime: ElementFinder = element(by.xpath("//div[contains(.,'Begin Date')]/parent::td/following-sibling::td//input[2]"));
    readonly endTime: ElementFinder = element(by.xpath("//div[contains(.,'End Date')]/parent::td/following-sibling::td//input[2]"));
    readonly addActivityButton: ElementFinder = element(by.xpath("//input[@value='Add Activity']"))


    constructor() {
        super();

    }
    public async clickOnDropDown(lableText: string) {
        let orderLookUp: ElementFinder = element(by.xpath("//div[contains(.,'" + lableText + "')]/parent::td/following-sibling::td//select"));
        await this.actions.click(orderLookUp, "click on " + lableText);
    }

    public async selectDropDownOption(optionText: string) {
        let optionXpath: ElementFinder = element(by.xpath("//select/option[contains(., '" + optionText + "')]"))
        await this.actions.click(optionXpath, "Click on " + optionText + " option")
    }

    public async selectActivityType(text_label: string, text_value: string) {
        await this.clickOnDropDown(text_label);
        await this.selectDropDownOption(text_value);
    }

    public async beginEndDateAndTime() {
        await this.actions.setText(this.beginDate, await this.getRequiredCalenderDate(0), "");
        console.log("beginDate: " + await this.getRequiredCalenderDate(0))
        await this.actions.setText(this.beginTime, "01:00", "")
        await this.actions.setText(this.endDate, await this.getRequiredCalenderDate(1), "")
        await this.actions.setText(this.endTime, "01:00", "")
    }
    public async clickAddActivity() {

        await this.actions.click(this.addActivityButton, "Click on Add activity button")
    }
    public async getRequiredCalenderDate(date_value) {
        let newdate = new Date();
        newdate.setDate(newdate.getDate() + date_value);

        let newmonth = Number(newdate.getUTCMonth()) + 1;
        let final_month;
        let final_Date: any;
        if (newmonth < 10) { final_month = "0" + newmonth }
        if (newdate.getUTCDate() < 10) {
            final_Date = "0" + newdate.getUTCDate()
        } else {
            final_Date = newdate.getUTCDate();
        }

        let requiredDate = (final_month + + final_Date + + newdate.getUTCFullYear())
        return requiredDate;
    }

}