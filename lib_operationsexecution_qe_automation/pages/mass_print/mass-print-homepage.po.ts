import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { BasePage } from "../base.po";
import { By } from 'selenium-webdriver';

export class MassPrintHomepage extends BasePage {
    readonly enter: ElementFinder = element(by.linkText("Enter"));
    readonly textArea: ElementFinder = element(by.xpath("//textarea[@name='txtArealoadNumsEnt']"));
    readonly searchButton: ElementFinder = element(by.xpath("//input[contains(@value,'Search')]"));
    readonly selectAllButton: ElementFinder = element(by.xpath("//form[@name='formName']//div[@id='docAreaNav']//a[contains(text(),'Select All')]"));
    readonly createButton: ElementFinder = element(by.xpath("//input[contains(@value,'Create')]"));
    readonly massPrintTab: ElementFinder = element(by.xpath("//a/img[@name='imageMassPrint']"));
    readonly notes: ElementFinder = element(by.xpath("//div[@id='docArea']//tbody//tr[2]//td[2]//textarea"));
    readonly okButton: ElementFinder = element(by.xpath("//input[@name='OK']"));
    public async click(elementToClick: ElementFinder) {
        await this.actions.click(elementToClick, "Clicking on " + elementToClick + " ");
    }

    public async loginIntoMassPrintApplication(user: string, pass: string) {
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath("//frame[@name='contentFrame']")));
        await this.actions.setText(element(by.xpath("//input[@name='username']")), user, "username");
        await this.actions.setText(element(by.xpath("//input[@name='password']")), pass, "password");
        await this.clickOnButton("Login");
    }

    public async setTextArea(textAreaElement: ElementFinder, textToEnter: string) {

        await this.actions.setText(textAreaElement, textToEnter, "Enter " + textToEnter + " to text area field");
    }

    public async acceptingAlert() {
        await browser.driver.switchTo().alert().accept();
    }

    public async switchToFrame(frameName: string) {
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath("//frame[@name='" + frameName + "']")));
    }

    public async switchToDeafultContent() {
        await browser.switchTo().defaultContent();
    }

    public async verifyNumberOfDocuments() {
        let xpath = element(by.xpath("//div[@id='confirmArea']//span[@class='ConfirmText']"))
        let text = await this.actions.getText(xpath, "Text of number of documents");
        console.log("text", text)
        return text;
    }

    public async setDisputeReasonDropdown(valueToSelect: string) {
        let xpath = "//select[@name='txtcollStatusCode']//option";
        await this.actions.selectByValue(xpath, valueToSelect, "Selecting value to dispute reason dropdown")
    }
}