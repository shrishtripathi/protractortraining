import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';

import { By } from 'selenium-webdriver';
import { ElementArrayFinder } from 'protractor/built/element';
import { CommonFunctions } from '../../utilities/common-functions';
import { BasePage } from '../base.po';

export class ShipmentConsolidation extends BasePage {

    readonly pickUpBegCalender: ElementFinder = element(by.id("form:searchOrigDate_cb"));
    readonly verifySearch: ElementFinder = element(by.xpath("//option[text()='BILL TO']"));
    readonly valueTextBox: ElementFinder = element(by.xpath("//input[@id='form:searchValue']"));
    readonly searchButton: ElementFinder = element(by.xpath("(//button[text()='Search'])[2]"));
    readonly consolidateButton: ElementFinder = element(by.xpath("//button[text()='Consolidate']"));
    readonly createOrders: ElementFinder = element(by.xpath("//button[text()='Create Loads']"));
    readonly pickUpEndCalender: ElementFinder = element(by.id("form:searchDestDate_cb"));
    readonly verifySearchResults: ElementArrayFinder = element.all(by.xpath("//tr[contains(@class,'iceDatTblRow')]"));
    readonly verifyConfirmOrdersPage: ElementFinder = element(by.xpath("//label[contains(text(),'Please verify and confirm.')]"));
    readonly pickUpBegPrevMonthSelector: ElementFinder = element(by.xpath("//img[contains(@title,'Show previous month')]"));
    readonly closeCalender: ElementFinder = element(by.xpath("//input[@title='Close popup calendar']"));
    readonly verifyOrderNumber: ElementFinder = element(by.xpath("//tr[contains(@id,'showOrderErrorsForm:goodOrdersTbl')]/td[@class='iceDatTblCol2']"));


    readonly fleetCodeDropDown: string = "(//select/option)";
    readonly month_3_radio: ElementFinder = element(by.xpath("//input[@value='3 Month']"));
    readonly projectCode: ElementFinder = element(by.xpath("//input[contains(@id,'txtProjCode')]"));
    readonly billToCode: ElementFinder = element(by.xpath("//span[contains(@id,'txtBillToCode')]"));
    readonly fleetCode: ElementFinder = element(by.xpath("//span[contains(@id,'txtFleetCode')]"));
    readonly threeDotIcon: ElementFinder = element(by.xpath("//div[@class='iceOutConStatActv' and @style='visibility: visible;']"));
    readonly loads: ElementArrayFinder = element.all(by.xpath("(//table[@class='iceDatTbl']//tr[contains(@id,'ordDetailsTbl:0')])"));
    projectCodeTextBox: string = null;
    billToCodeTextBox: string = null;
    fleetCodeTextBox: string = null;
    customerCodes: string[] = [];
    customerLocations: string[] = [];



    constructor() {
        super();
    }
    public async verifySearchType() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.verifySearch, "verify search...");
            flag = await this.actions.isElementDisplayed(this.verifySearch, "verify element");
        } catch (error) {
            console.log("verify search type failed " + error);
        }
        return await flag;

    }
    public async click3MonthRadio() {
        await this.waitUntilLoading()
        await this.actions.click(this.month_3_radio, "click on 3 month radio");
        await this.waitUntilLoading()
    }
    public async setTextToValueTextBox(value: string) {
        await this.actions.clearText(this.valueTextBox, "value");
        await this.actions.setText(this.valueTextBox, value, "set text to value text box");
    }
    public async clickPickUpBegCalender() {
        await this.actions.click(this.pickUpBegCalender, "click Pick Up Calender.");
    }
    public async clickPickUpEndCalender() {
        await this.actions.click(this.pickUpEndCalender, "click Pick Up Calender.");
    }
    public async clickCloseButtonInCalender() {
        await this.actions.click(this.closeCalender, "click close in Calender.");
    }
    public async setMonthsPriorAndSelectDate(num: number) {
        for (let index = 0; index < num; index++) {
            await this.actions.click(this.pickUpBegPrevMonthSelector, "set months before");
            await this.actions.shortWait("wait");
        }
        try {
            let date: number = new Date().getUTCDate();
            if (date > 28) {
                for (let index = 31; index >= date; index--) {
                    console.log("index is " + index);
                    let flag: boolean = await this.actions.isElementNotDisplayed(element(by.xpath("//span[text()='" + index + "']")), "element");
                    if (flag) {
                        console.log("test");
                        await element(by.xpath("//span[text()='" + index + "']")).click();
                        break;
                    }
                }
            }
            else {
                await this.actions.click(element(by.xpath("//span[text()='" + date + "']")), "Select current Date ");
            }
        } catch (error) {
            console.log("error " + error);
        }
    }
    public async clickSearch() {
        await this.actions.click(this.searchButton, "click search button");
    }
    public async selectCurrentDateInCalender() {
        try {
            let date: number = new Date().getUTCDate();
            await this.actions.click(element(by.xpath("//span[text()='" + date + "']")), "Select current Date ");
        } catch (error) {

        }
    }
    public async verifyCrSearchResults() {
        let count: number = 0;
        try {
            await this.actions.waitUntilElementInVisible(this.threeDotIcon, "three dot icon");
            await this.actions.waitUntilElementVisible(this.verifySearchResults.get(1), "VerifySearch results");
            count = await this.verifySearchResults.count();
        } catch (error) {
            console.log("error in number count " + error);
        }
        return await count;
    }
    public async clickConsolidateButton() {
        await this.waitUntilLoading()
        await this.actions.scrollToBottomOfThePage("scrool till bottom");
        await this.actions.click(this.consolidateButton, "click consolidate button");
    }
    public async verifyAndConfirmOrders() {
        let flag: boolean = false;
        await this.waitUntilLoading()
        try {
            await this.actions.waitUntilElementVisible(this.verifyConfirmOrdersPage, "confirm orders page");
            flag = await this.actions.isElementDisplayed(this.verifyConfirmOrdersPage, "confirm page verifification");

        } catch (error) {

        }
        return await flag;
    }
    public async selectFleetCode(text: string) {
        await this.actions.selectByValue(this.fleetCodeDropDown, text, "selecting rail");

    }
    public async clickCreateOrders() {
        await this.waitUntilLoading()
        await this.actions.click(this.createOrders, "click create orders");
        await this.waitUntilLoading()
    }
    public async selectCustomerRequests(noOfRequests: number) {
        let myXpath: string = "(//tr[contains(@class,'iceDatTblRow')])";
        let count: number = 0;
        let flag: boolean = false;
        let errorXpath: ElementFinder = element(by.className('iceMsgError'));
        do {
            let noOfrows: number = await element.all(by.xpath("(//tr[contains(@class,'iceDatTblRow')])/td/input")).count();
            console.log("number of rows " + noOfrows);
            for (let index = 1; index <= (noOfrows); index++) {
                let text: string = await element(by.xpath(myXpath + "[" + index + "]/td/input[not(@disbaled)]")).getAttribute("disabled");
                console.log("attr " + text);
                try {
                    flag = await element(by.xpath(myXpath + "[" + index + "]/td/span[contains(@style,'blue')]")).isDisplayed();
                    console.log("flag " + flag);
                } catch (error) {
                    flag = false;
                }
                console.log("out of flag " + flag);
                if ((text === null && !flag)) {
                    console.log("fir");
                    await this.actions.click(element(by.xpath(myXpath + "[" + index + "]/td/input")), "select customers");
                    await this.waitUntilLoading();
                    if (await errorXpath.isPresent()) {
                        await this.actions.click(element(by.xpath(myXpath + "[" + index + "]/td/input")), "select customers");
                        await this.waitUntilLoading();
                        await this.actions.click(element(by.xpath(myXpath + "[" + index+1 + "]/td/input")), "select customers");
                        await this.waitUntilLoading();
                    }
                    await this.actions.selectByValue("((//tr[contains(@class,'iceDatTblRow')])[" + index + "]/td[9]//select/option)", "RTE1", "select RTE1 in dropdown");
                    await this.actions.selectByValue("((//tr[contains(@class,'iceDatTblRow')])[" + index + "]/td[15]//select/option)", "RTE1", "select RTE1 in dropdown");
                    count++;
                }
                if (count === noOfRequests) {
                    break;
                }
            }
            if (count === noOfRequests) {
                break;
            }
        } while (await this.pagination());

    }


    public async setDateForEachOrder() {
        let customerRequestsTable: ElementArrayFinder = element.all(by.xpath("(//input[@alt='Open popup calendar'])"));
        let size: number = await customerRequestsTable.count();
        let count: number = 0;

        for (let index = size; index >= 1; index--) {
            let date: Date = new Date();
            let month: number = (date.getUTCMonth() + 1);
            let year: string = date.getFullYear().toString();
            let currentMonth: string = await this.getCurrentMonthName(month);
            let day: string = (date.getUTCDate()).toString();
            let requiredTime: number = 23;

            customerRequestsTable.get(index - 1).click();
            console.log("current month is..." + currentMonth);
            await this.waitUntilLoading()
            await this.actions.selectByVisibleText(element.all(by.xpath("((//select)[2]/option)")), currentMonth, "");
            await this.waitUntilLoading()
            await this.actions.selectByVisibleText(element.all(by.xpath("((//select)[3]/option)")), year, "");
            await this.waitUntilLoading()
            await this.actions.click(element(by.xpath("//span[text()='" + day + "']")), "Select current Date ");
            await this.waitUntilLoading()

            let time: number = (requiredTime - (count));
            await this.actions.selectByValue("((//select)[4]/option)", time.toString(), "set time");
            await this.waitUntilLoading()
            count++;
            count++;

            await this.actions.click(this.closeCalender, "close calender");
            await this.waitUntilLoading()
        }

    }
    public async verifyOrderNumberForLoads() {
        let text: string = null;
        try {
            await this.actions.shortWait("short wait...");
            await browser.wait(ExpectedConditions.invisibilityOf(element(by.xpath("//div[@id='lnfLoadingCoverScreen' and contains(@style,'display: inline;')]"))), 120000);
            await this.actions.waitUntilElementPresenceOf(element(by.id('showOrderErrorsForm:goodOrdersTbl')))
            text = await this.verifyOrderNumber.getText();
            console.log("order number is " + text);
        } catch (error) {
            console.log("error in order number " + error);
        }
        return text;
    }
    public async makeNoteOfCodes() {
        this.projectCodeTextBox = await this.projectCode.getAttribute("value");
        this.billToCodeTextBox = await this.billToCode.getText();
        this.fleetCodeTextBox = await this.fleetCode.getText();
    }
    public async makeNoteOfCustomerCodes() {
        let count: number = await this.loads.count();
        for (let index = 0; index < count; index++) {
            this.customerCodes[index] = await element(by.xpath("(//table[@class='iceDatTbl']//tr[contains(@id,'ordDetailsTbl:0')])[" + (index + 1) + "]//td[6]")).getText();
            this.actions.shortWait("short wait");
            this.customerLocations[index] = await element(by.xpath("(//table[@class='iceDatTbl']//tr[contains(@id,'ordDetailsTbl:0')])[" + (index + 1) + "]//td[5]")).getText();
            this.actions.shortWait("short wait");
        }
        console.log("ship customers " + this.customerCodes);
        console.log("ship customersloc " + this.customerLocations);
    }

    public async pagination() {
        let nextButtonEnabled: ElementFinder = await element(By.xpath("//a[contains(@id,'next')]"));
        let nextButtonIsDisable: boolean = await element(By.xpath("//a[contains(@id,'next') and contains(@onclick,'return false')]")).isPresent();
        if (!nextButtonIsDisable) {
            console.log("inside next button enabled");
            await nextButtonEnabled.click();
            await this.waitForActionToComplete();
            return true;
        }
        else {
            console.log("completed pagination, next button is disabled no data is found with given criteria");
            return false;
        }
    }

}