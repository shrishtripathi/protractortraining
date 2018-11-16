
import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class CraeteInvoicePage extends BasePage {
    readonly divisionDropdown: string = "//span[text()='Divison:']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[1]//select//option";
    readonly projectDropdown: string = "//span[text()='Project: ']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[2]//select//option";
    readonly carrierDropdown: string = "//span[text()='Carrier:']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[3]//select//option";
    readonly searchButton: ElementFinder = element(by.xpath("//button[text()='Search']"));
    readonly startDate: ElementFinder = element(by.xpath("//span[text()='Date Range:']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[5]//tr//td[1]//input[@class='iceSelInpDateInput']"));
    readonly endDate: ElementFinder = element(by.xpath("//span[text()='Date Range:']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[5]//tr//td[2]//input[@class='iceSelInpDateInput']"));
    public async selectDivision(value: any) {
        let ele: ElementFinder = element(by.xpath("//span[text()='Divison:']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[1]//select//option"));
        await this.actions.waitUntilElementVisible(ele, "Waiting");
        await this.actions.selectByValue(this.divisionDropdown, value, "select division")
    }

    public async selectProject(text: any) {
        let ele: ElementFinder = element(by.xpath("//span[text()='Project: ']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[2]//select//option"));
        await this.actions.waitUntilElementVisible(ele, "Waiting");
        await this.actions.selectByValue(this.projectDropdown, text, "");
    }

    public async selectCarrier(value: any) {
        await this.actions.mediumWait("");
        await this.actions.selectByValue(this.carrierDropdown, value, "select carrier")
    }

    public async clickSearchButton() {
        await this.actions.click(this.searchButton, "Clickig on search button");
        await this.actions.longWait("");
    }

    public async setDateRange(startDate: string, endDate: string) {
        await this.actions.setText(this.startDate, startDate, "Set start date");
        await this.actions.setText(this.endDate, endDate, "Set end date");
    }

    public async verifyInvoiceDetails(){
        let rows=element.all(by.xpath("//a[contains(text(),'Order Number')]//ancestor::thead//parent::table//tbody//tr"));
        let numberOfRows=await rows.count();
        console.log("rows",numberOfRows);
        return await numberOfRows;
    }



}

















