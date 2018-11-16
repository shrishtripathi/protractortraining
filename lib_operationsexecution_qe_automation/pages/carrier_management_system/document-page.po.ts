import { browser, ElementFinder, element, by } from "protractor";
import { BasePage } from "../base.po";

export class Documentpage extends BasePage {

    readonly addDocumentXpath: ElementFinder = element(by.xpath("//a[text()='Add Document']"));
    readonly cancelButton: ElementFinder = element(by.xpath("(//a[text()='Cancel'])[2]"));
    readonly documentType: string = "(//select[@name='docClass']/option)";
    readonly efferctiveDate: ElementFinder = element(by.xpath("//input[@name='effDate']"));
    readonly expiryDate: ElementFinder = element(by.xpath("//input[@name='expDate']"));

    public async addDocument() {
        await this.actions.click(this.addDocumentXpath, "Add DocumentXpath");
    }
    
    public async enterDocumentData(value1: string, value2: string, value3: string) {
        await this.actions.selectByValue(this.documentType, value1, "document type");
        await this.actions.setText(this.efferctiveDate, value2, "date");
        await this.actions.setText(this.expiryDate, value3, "expiry_date");
    }
    
    public async clickOnCancel() {
        await this.actions.click(this.cancelButton, "Cancel Button");
    }
}