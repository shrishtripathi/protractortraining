import { ElementFinder, element, by } from 'protractor';
import { BasePage } from '../base.po';


export class BoxManagementSystemHomePage extends BasePage {
    readonly assignedToRadioButton: ElementFinder = element(by.xpath("//label[text()='Assigned To']//parent::span/input"));
    readonly searchByDropdown = element.all(by.xpath("(//select[@id='form:selectedIdOrCodeRadioButton']/option)"));
    readonly valueInputField = element(by.id("form:nationalAcctId"));
    readonly searchButton = element(by.id("form:search"));
    readonly custCodeResultsLink = element(by.xpath("//table[@id='form:inboundLoadViewTable']//td[@class='iceDatTblCol1']/a[@style='text-decoration:underline']"))

    readonly externalLinks: ElementFinder = element(by.xpath("//li[contains(text(),'External Links')]"));
    readonly centralCustomerInformationOption: ElementFinder = element(by.xpath("//li//a[contains(text(),'Central Customer Information')]"));

    public async clickOnTabAndSelectOption(tabName: string, optionName: string) {
        await this.actions.waitUntilElementVisible(this.aspanText(tabName), "Click on tab");
        await this.actions.click(this.aspanText(tabName), "Click on tab");
        await this.actions.click(this.aspanText(optionName), "Click on option");
    }

    public async verifyExternalLinksPages(name: string) {
        let flag: boolean = false
        let xpath = element(by.xpath("//div[text()='" + name + "']"));
        try {
            await this.actions.selectWindow(1, "switch to " + name);
            await this.loginIfRequired();
            await this.actions.waitUntilElementVisible(xpath, "wait...");
            flag = await xpath.isDisplayed();
            await this.actions.closeCurrentWindow("close " + name)
            await this.actions.selectWindow(0, "switch to " + name);
        } catch (error) {

        }
        return await flag;
    }
    public async selectOptionsFromSearchByDropdown(option: string) {
        await this.actions.selectByVisibleText(this.searchByDropdown, option, "select code")
    }
    public async verifyCustomerCodeResults(code: string) {
        let flag: boolean = false;
        let xpath = element(by.xpath("//table[@id='form:inboundLoadViewTable']//span[contains(text(),'" + code + "')]"));
        try {
            await this.actions.waitUntilElementVisible(xpath, "wait");
            flag = await xpath.isDisplayed();
        } catch (error) {

        }
        return await flag;
    }

    public async externalLinksDropDownXpath(dropLable) {
        let optionXpath: ElementFinder = element(by.xpath("//li//a[contains(text(),'" + dropLable + "')]"));
        return optionXpath
    }


}


