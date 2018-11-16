import { browser, by, element, ExpectedConditions, ElementFinder, protractor } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';


export class TenderControlPage extends BasePage {

    readonly createTenderButton = element(by.xpath("//button[contains(text(),'Create Tender')]"));
    readonly approveTenderButton = element(by.xpath("//button[contains(text(),'Approve Tender')]"));
    readonly acceptTenderButton = element(by.xpath("//button[contains(text(),'Accept Tender')]"));

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

    public async enterDriverDetails(type: string, firstName: string, lastName: string, phone: string) {
        await this.actions.waitUntilElementVisible(element(by.xpath("(//input[contains(@id,'form:NCONFN')])[1]")), "");
        await this.actions.shortWait("");
        await this.actions.click(element(by.xpath("//div/div[@class='icePnlGrp']//table[@class='icePnlGrd']//tr[3]//select/option[contains(text(),'DRIVER')]")), "");
        await this.actions.shortWait("");
        await browser.executeScript("arguments[0].setAttribute('value', '" + firstName + "')", element(by.xpath("(//div/div[@class='icePnlGrp']//table[@class='icePnlGrd']//tr[3]//input)[1]")));
        await browser.executeScript("arguments[0].setAttribute('value', '" + lastName + "')", element(by.xpath("(//div/div[@class='icePnlGrp']//table[@class='icePnlGrd']//tr[3]//input)[2]")));
        await browser.executeScript("arguments[0].setAttribute('value', '" + phone + "')", element(by.xpath("(//div/div[@class='icePnlGrp']//table[@class='icePnlGrd']//tr[3]//input)[3]")));
        await this.actions.shortWait("");
        await this.actions.selectByValue("((//span[contains(text(),'DEFAULT TENDER')]/ancestor :: tr/following-sibling :: tr//select[@class='iceSelOneMnu'])[1]/option)", "E", "");
        await this.actions.waitUntilElementVisible(element(by.xpath("(//span[contains(text(),'DEFAULT TENDER')]/ancestor :: tr/following-sibling :: tr//select[@class='iceSelOneMnu'])[2]")), "");
        await this.actions.selectByIndex(element.all(by.xpath("(//span[contains(text(),'DEFAULT TENDER')]/ancestor :: tr/following-sibling :: tr//select[@class='iceSelOneMnu'])[2]/option")), 3, "");
    }

    public async approveTender() {
        await this.actions.click(this.approveTenderButton, "");
        await this.actions.waitUntilElementVisible(element(by.xpath("(//label[contains(text(),'IMPORTANT: To reduce')])[1]")), "");
        await this.actions.click(this.acceptTenderButton, "");
        await this.waitForPageLoad();


    }
    public async handleCarrierApprovalFlow(value: string) {
        try {
            if (value.toLowerCase() === "disabled") {
                if (await element(by.xpath("//span[text()='Tender Requires carrier\'s electronic approval']/../preceding-sibling::td/button[text()='Enable']")).isPresent()) {
                    await this.actions.click(element(by.xpath("")), "");
                    await this.actions.waitUntilElementVisible(element(by.xpath("//td[contains(text(),'Tender Acceptance Settings')]")), "");
                    await this.actions.click(element(by.xpath("//button[contains(@name,'disableAutoApprove') and text()='Confirm']")), "");
                    await this.waitForPageLoad();
                    if (await element(by.xpath("//span[text()='Tender Requires carrier\'s electronic approval']/../preceding-sibling::td/button[text()='Disable']")).isPresent()) {
                        return true;
                    } else {
                        return false;
                    }

                } else {
                    if (await element(by.xpath("//span[text()='Tender Requires carrier\'s electronic approval']/../preceding-sibling::td/button[text()='Disable']")).isPresent()) {
                        await this.actions.click(element(by.xpath("//span[text()='Tender Requires carrier\'s electronic approval']/../preceding-sibling::td/button[text()='Disable']")), "");
                        await this.actions.waitUntilElementVisible(element(by.xpath("//span[contains(text(),'Please click \'Confirm\' below to bypass the carrier\'s electronic approval of this tender and automatically')]")), "");
                        await this.actions.click(element(by.xpath("//button[contains(@name,'autoApproveTender') and text()='Confirm']")), "");
                        await this.waitForPageLoad();
                        if (await element(by.xpath("//span[text()='Tender Requires carrier\'s electronic approval']/../preceding-sibling::td/button[text()='Enable']")).isPresent()) {
                            return true;
                        } else {
                            return false;
                        }

                    }
                }

            }

        } catch (error) {

        }

    }
    public async clickCreateTenderButton() {
        await this.actions.click(this.createTenderButton, "Tender Control Button");
    }
}

