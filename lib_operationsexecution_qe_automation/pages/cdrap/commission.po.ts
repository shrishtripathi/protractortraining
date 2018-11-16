import { BasePage } from "../base.po";
import { ElementFinder, element, by, ElementArrayFinder, } from "protractor";
import { read } from "fs";

export class CommissionPage extends BasePage {

    readonly personalInfo: ElementFinder = element(by.xpath("//span[text()='Personal Information']"))
    readonly cancelButton: ElementFinder = element(by.xpath("//input[@value='Cancel']"));
    readonly workList: ElementFinder = element(by.xpath("(//table[@class='striped hoverHighlight']/tbody/tr)[1]"));
    readonly closeButton: ElementFinder = element(by.xpath("//input[@value='Close']"))
    readonly commissionStatusDropdown: ElementFinder = element(by.xpath("//span[contains(text(),'Commission Status')]/following-sibling :: select"))


    public async getColumnIndexFromCommissionTable(columnName: any) {
        let columnIndex: number = -1;
        this.actions.mediumWait("waiting...");
        let numberOfColumns: ElementArrayFinder = element.all(by.xpath("(//table[@class='striped hoverHighlight']/thead/tr/td)"));
        let size: number = await numberOfColumns.count();
        let index: number = 1;
        try {
            for (index = 1; index <= size; index++) {
                if ((await element(by.xpath("(//table[@class='striped hoverHighlight']/thead/tr/td)[" + index + "]")).getText()).trim() === columnName) {
                    columnIndex = index;
                    break;
                }
            }
        }
        catch (err) {
            console.log('---error---for index ' + index);
        }
        return await columnIndex;
    }

    public async clickOnDriverSSNHyperlink() {
        await this.actions.waitUntilElementVisible(this.workList, "");
        let driverSSNColumnIndex: number = await this.getColumnIndexFromCommissionTable("Driver SSN")
        let driverSSN: ElementFinder = element(by.xpath("(//table[@class='striped hoverHighlight']/tbody/tr/td[" + driverSSNColumnIndex + "])[1]"));
        await this.actions.click(driverSSN, "");
    }

    public async clickOnAUDHyperlink() {
        await this.actions.waitUntilElementVisible(this.workList, "");
        let actionColumnIndex: number = await this.getColumnIndexFromCommissionTable("Action")
        let audLink: ElementFinder = element(by.xpath("(//table[@class='striped hoverHighlight']/tbody/tr/td[" + actionColumnIndex + "]/a[1])[1]"));
        await this.actions.click(audLink, "");
    }

    public async clickOnDETHyperlink() {
        await this.actions.waitUntilElementVisible(this.workList, "");
        let actionColumnIndex: number = await this.getColumnIndexFromCommissionTable("Action")
        let detLink: ElementFinder = element(by.xpath("(//table[@class='striped hoverHighlight']/tbody/tr/td[" + actionColumnIndex + "]/a[2])[1]"));
        await this.actions.click(detLink, "");
    }

    public async selectCommissionStatus(status: string) {
        await this.actions.waitUntilElementVisible(this.commissionStatusDropdown, "");
        let commStatus: ElementFinder = element(by.xpath("//span[contains(text(),'Commission Status')]/following-sibling :: select/option[text()='" + status + "']"))
        await this.actions.click(commStatus,"");
        await this.waitForPageLoad();
    }

}