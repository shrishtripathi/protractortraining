import { browser, by, element, ElementFinder, ExpectedConditions, protractor } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';

export class PlatformHomePage extends BasePage {
    readonly administration: ElementFinder = element(by.xpath("//span[text()='Administration']"));
    readonly accounts: ElementFinder = element(by.xpath("//span[text()='Accounts']"));
    readonly sideBar = element(by.xpath("//div[@class='sidebar']"));
    readonly spinner = element(by.xpath(`//*[contains(@class,'spinner') and  not(@style='display: none;')]`));
    readonly businessValidationError = element(by.xpath(`//*[text()='Business Validation Error']`));

    public async clickOnAdministration() {
        await this.actions.waitUntilElementClickable(this.administration, "Waiting");
        await this.actions.click(this.administration, "Clicking on administration");
        await this.actions.waitUntilElementVisible(this.sideBar, "");
    }

    public async clickOnAccounts() {
        await this.actions.click(this.accounts, "Click on " + element + " ");
        await this.actions.waitUntilElementVisible(this.sideBar, "");
    }

    public async checkforloading() {
        let EC = protractor.ExpectedConditions;
        if (await this.spinner.isPresent()) {
            try {
                await browser.wait(EC.not(EC.presenceOf(this.spinner)), 30000);
            } catch (error) {
                await browser.wait(EC.not(EC.visibilityOf(this.spinner)), 30000);
            }
        }

        if (await this.businessValidationError.isPresent()) {
            try {
                console.log('test1')
                await browser.wait(EC.not(EC.presenceOf(this.businessValidationError)), 30000);
            } catch (error) {
                console.log('test2 ')
                await browser.wait(EC.not(EC.visibilityOf(this.businessValidationError)), 30000);
            }
        }

    }
}