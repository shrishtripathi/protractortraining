import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { By } from "selenium-webdriver";
import { protractor } from "protractor";
import { BasePage } from "../base.po";

export class CarrierManagementPage extends BasePage {

    readonly CarrierSearch: ElementFinder = element(by.xpath('//*[@id="lnfContents"]/table/tbody/tr[2]/td/table[2]/tbody/tr[2]/td/li/a'));
    readonly specificCarrierSearch: ElementFinder = element(by.xpath("//a[text()='Specific Carrier Search']"));

    public async clickonCarrierSearch() {
        await this.actions.click(this.CarrierSearch, "Carrier Search");
    }

    public async clickonSpecificCarrierSearch() {
        await this.actions.click(this.specificCarrierSearch, "Specific Carrier Search");
    }

}