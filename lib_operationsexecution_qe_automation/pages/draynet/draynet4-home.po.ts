
import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class DraynetHomePage extends BasePage {
    readonly divisionDropdown: string = "//span[text()='Division:']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[1]//select//option";
    readonly projectDropdown: string = "//span[text()='Project:']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[2]//select//option";
    readonly carrierDropdown: string = "//span[text()='Carrier: ']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[3]//select//option";
    readonly searchButton: ElementFinder = element(by.xpath("//button[text()='Search']"));
    readonly chargeListWindow: ElementFinder = element(by.xpath("//label[text()='Charge List']"));
    readonly close: ElementFinder = element(by.xpath("//a[@title='Close']"));
    readonly communicationLog: ElementFinder = element(by.xpath("//label[text()='Communication Log']"));
    public async selectDivision(value: any) {
        await this.actions.selectByValue(this.divisionDropdown, value, "select division")
    }

    public async selectProject(text: any) {
        let ele: ElementFinder = element(by.xpath("//span[text()='Project:']//ancestor::div[@class='icePnlClpsblCnt']//tr[2]//td[2]//select//option"));
        await this.actions.waitUntilElementVisible(ele, "Waiting");
        await this.actions.selectByValue(this.projectDropdown, text, "");
    }

    public async selectCarrier(value: any) {
        await this.actions.selectByValue(this.carrierDropdown, value, "select carrier")
    }

    public async clickSearchButton() {
        await this.actions.click(this.searchButton, "Clickig on search button");
        await this.waitForActionToComplete();
    }

    public async clickOnArrowNextToOrderNumber() {
        let xpath: ElementFinder = element(by.xpath("(//span[text()='Order Number']//ancestor::thead//parent::table//following-sibling::tbody//tbody)[1]//tr//td[2]//div[contains(@class,'iceMnuBarItem')]//a"))
        await this.actions.longWait("");
        await this.actions.click(xpath, "Clickig on arrow next to order number");
    }

    public async clickOnChargeLists() {
        let xpath: ElementFinder = element(by.xpath("(//span[text()='Order Number']//ancestor::thead//parent::table//following-sibling::tbody//tbody)[1]//tr//td[2]//div[@title='Show Charge Lists']//a"))
        await this.actions.click(xpath, "Clickig on charge lists");
    }

    public async verifyChargeListWindowOpens() {
        await this.actions.mediumWait("");
        return await this.actions.isElementPresent(this.chargeListWindow, "Charge list window opens");
    }

    public async clickOnClose() {
        await this.actions.click(this.close, "Clickig on close");
    }

    public async clickOnCommunicationLogs() {
        let xpath: ElementFinder = element(by.xpath("(//span[text()='Order Number']//ancestor::thead//parent::table//following-sibling::tbody//tbody)[1]//tr//td[2]//div[@title='Show Communication Logs']//a"))
        await this.actions.click(xpath, "Clickig on communication logs");
    }

    public async verifyCommunicationLogWindowOpens() {
        await this.actions.mediumWait("");
        return await this.actions.isElementPresent(this.communicationLog, "Communication log window opens");
    }

    public async verifyDrynetPage() {
        let xpath = element(by.xpath("//b[text()='Draynet 4.0']"));
        return await this.actions.isElementPresent(xpath, "Draynet 4.0 page opens");

    }

    public async clickOnTab(tabName: string) {
        let xpath = element(by.xpath("//td[text()='" + tabName + "']"));
        return await this.actions.click(xpath, "Clicking on " + tabName + " ");

    }

    public async verifyPendingAssignments() {
        let rows = element.all(by.xpath("//span[text()='Order Number']//ancestor::thead//parent::table//following-sibling::tbody//tr[contains(@class,'iceDatTblRow')]"));
        let numberOfRows = await rows.count();
        console.log("rows", numberOfRows);
        return await numberOfRows;
    }


}

















