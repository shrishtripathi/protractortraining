import { browser, ElementFinder, element, by } from "protractor";
import { By } from "selenium-webdriver";
import { ElementArrayFinder } from "protractor/built/element";

import { BasePage } from "../base.po";

export class CarrierPage extends BasePage {
    carrierCode: ElementFinder;
    findCarriers: ElementFinder;
    carrierSearchResults: ElementFinder;
    optionsResults: ElementFinder;

    constructor() {
        super();
        this.carrierCode = element(by.xpath("(//input[@name='carrierCode'])[1]"));
        this.findCarriers = element(by.xpath("//span[text()='Find Carriers']"));
        this.carrierSearchResults = element(by.xpath("//div[text()='HA29']"));
        this.optionsResults =  element(by.xpath("//span[text()='Options']"))
    }
    public async setCarrierCode(text: string) {
        await this.actions.setText(this.carrierCode, text, "location");
        await this.actions.getText(this.carrierCode, "carrier code");
    }

    public async clickFindCarriers() {
        await this.actions.click(this.findCarriers, "Carrier Code");
    }

    public async verifyFindCarrierSearchResults() {
        let flag: boolean = false;
        this.actions.waitUntilElementVisible(this.carrierSearchResults, "Carrier Search results");
        flag = await this.actions.isElementDisplayed(this.carrierSearchResults, "search results");
        return flag;
    }
    public async verifyOptions() {
        let flag: boolean = false;
        this.actions.waitUntilElementVisible(this.optionsResults, "Options results");
        flag = await this.actions.isElementDisplayed(this.optionsResults, "Options results");
        return flag;
    }

}