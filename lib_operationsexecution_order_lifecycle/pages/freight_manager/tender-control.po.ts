import { browser, by, element, ExpectedConditions, ElementFinder, protractor } from 'protractor';
import { BasePage } from '../base.po';

export class TenderControlPage extends BasePage {

    readonly createTenderButton = element(by.xpath("//button[contains(text(),'Create Tender')]"));

    public async waitUntilPageLoads() {
        await this.waitForActionComplete("");
        await this.actions.waitUntilElementVisible(element(by.xpath("//label[text()='Special Instructions']")), "");
    }

    public async enterCarrierDetails(type: string, firstName: string, lastName: string, phone: string) {
        await this.actions.waitUntilElementVisible(element(by.xpath("(//input[contains(@id,'form:NCONFN')])[1]")), "");
        await this.actions.shortWait("");
        await browser.executeScript("arguments[0].setAttribute('value', '" + firstName + "')", element(by.xpath("(//div/div[@class='icePnlGrp']//table[@class='icePnlGrd']//tr[2]//input)[1]")));
        await browser.executeScript("arguments[0].setAttribute('value', '" + lastName + "')", element(by.xpath("(//div/div[@class='icePnlGrp']//table[@class='icePnlGrd']//tr[2]//input)[2]")));
        await browser.executeScript("arguments[0].setAttribute('value', '" + phone + "')", element(by.xpath("(//div/div[@class='icePnlGrp']//table[@class='icePnlGrd']//tr[2]//input)[3]")));
        await this.actions.shortWait("");
        await this.actions.selectByValue("((//span[contains(text(),'DEFAULT TENDER')]/ancestor :: tr/following-sibling :: tr//select[@class='iceSelOneMnu'])[1]/option)", "E", "");
        await this.actions.waitUntilElementVisible(element(by.xpath("(//span[contains(text(),'DEFAULT TENDER')]/ancestor :: tr/following-sibling :: tr//select[@class='iceSelOneMnu'])[2]")), "");
        await this.actions.selectByIndex(element.all(by.xpath("(//span[contains(text(),'DEFAULT TENDER')]/ancestor :: tr/following-sibling :: tr//select[@class='iceSelOneMnu'])[2]/option")), 3, "");
    }
    
    public async clickCreateTenderButton() {
        await this.actions.click(this.createTenderButton, "Tender Control Button");
    }
}

