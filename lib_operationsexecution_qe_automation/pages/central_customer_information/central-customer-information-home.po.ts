import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper } from "protractor";
import { BasePage } from "../base.po";
import { Command } from "selenium-webdriver";

export class CentralCustomerInformationHomePage extends BasePage {
    readonly buisinessSearch: ElementFinder = element(by.xpath("//a[text()='BUSINESS SEARCH']"));
    readonly customerCode: ElementFinder = element(by.xpath("//input[@id='customerCode']"));
    readonly searchButton: ElementFinder = element(by.xpath("//input[@value='Search']"));
    readonly inpr3: ElementFinder = element(by.xpath("//div[@id='customerList']//tbody//table//tbody//td[text()='HJBT JBVAN']//parent::tr//td[2]//a"));
    readonly powerDetentionAuthorization: ElementFinder = element(by.xpath("//td[text()='POWER DETENTION AUTHORIZATION']//parent::tr"));
    readonly qualifingRuleTab: ElementFinder = element(by.xpath("//a[text()='QUALIFYING RULE']"));
    readonly viewDetails: ElementFinder = element(by.xpath("//a[text()='View Detail']"));
    readonly billToDropdown: string = "//select[@name='ruleSubType']//option";
    readonly shipper: ElementFinder = element(by.xpath("//select[@name='ruleSubType']//option[text()='SHIPPER']"));
    readonly inputFieldNextToEqualDropdown: ElementFinder = element(by.xpath("//input[@name='matchField']"));
    readonly createNewRuleButton: ElementFinder = element(by.xpath("//input[@value='Create New Rule']"));
    readonly addEitherButton: ElementFinder = element(by.xpath("//input[@value='Add EITHER']"));
    readonly saveButton: ElementFinder = element(by.xpath("//input[@value='SAVE']"));
    readonly addRuleToContact: ElementFinder = element(by.xpath("//input[@value='Add Rule to Contact']"));

    public async verifyViewDetailsInformation() {
        await this.actions.mediumWait("");
        let flag: boolean = false;
        let xpath = element.all(by.xpath("(//strong[contains(text(),'Rule Number')])[1]//parent::td//parent::tr//parent::tbody//tr[2]//table//tbody//tr"));
        let viewDetailsRows = await xpath.count();
        console.log("viewDetailsRows", viewDetailsRows)

        for (let j = 1; j <= viewDetailsRows; j++) {
            await this.actions.click(element(by.xpath("(//a[text()='View Detail'])[" + j + "]")), "Clicking on view detail")
            await this.actions.shortWait("")
            let detailsxpath = element.all(by.xpath("//table[@class='rulesDetailTableFormat']/tbody/tr"))
            let rows = await detailsxpath.count();
            console.log("rows", rows);
            for (let i = 1; i <= rows; i++) {
                let shipper = element(by.xpath("//table[@class='rulesDetailTableFormat']/tbody/tr[" + i + "]//td[3]"));
                let equal = element(by.xpath("//table[@class='rulesDetailTableFormat']/tbody/tr[" + i + "]//td[4]"));
                let cem10 = element(by.xpath("//table[@class='rulesDetailTableFormat']/tbody/tr[" + i + "]//td[5]"));
                let shippertext = await this.actions.getText(shipper, "");
                console.log("shippertext", shippertext);
                let equaltext = await this.actions.getText(equal, "");
                console.log("equaltext", equaltext);
                let cem10text = await this.actions.getText(cem10, "");
                console.log("cem10text", cem10text.trim());
                if (shippertext == 'SHIPPER' && equaltext == 'EQUAL' && cem10text.trim() == 'CEMT10') {
                    console.log("We are done");
                    flag = true;
                }
            }
            await this.click(this.qualifingRuleTab);
        }
        return await flag;

    }

    public async setBillToDropDown(valueToSelect: string) {
        await this.actions.selectByValue(this.billToDropdown, valueToSelect, "Selecting value to bill to dropdown");
    }

    public async acceptingAlert() {
        await browser.driver.switchTo().alert().accept();
    }
}