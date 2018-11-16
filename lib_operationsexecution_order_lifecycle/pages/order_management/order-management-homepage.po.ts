import { by, element, ElementFinder, browser } from 'protractor';
import { BasePage } from "../base.po";

export class OrderManagementHomePage extends BasePage {

    readonly plusicon: ElementFinder = element(by.xpath("//span[text()='Create Order']//parent::a//i"));
    readonly createOrder: ElementFinder = element(by.xpath("//span[text()='Create Order']//parent::a"));
    readonly createOrderButton: ElementFinder = element(by.xpath("//button[text()='Create Order']"));
    readonly loadNumber: ElementFinder = element(by.xpath("//label[text()='Order Number']//parent::div//p"));

    public async hoverOnPlusIconAndSelectAccount() {
        await this.actions.moveMouseToElement(this.plusicon, "Hover on plus icon");
        await this.actions.click(this.createOrder, "Clicking on create order");
    }

    public async clickOnCreateOrderButton() {
        await this.actions.click(this.createOrderButton, "Clicking on create order");
    }

    public async getLoadNumber() {
        await this.actions.waitUntilElementInVisible(element(by.xpath("//label[text()='Order Number']//parent::div//p[text()='']")), "Waiting");
        return await this.actions.getText(this.loadNumber, "Load number");
    }
    
}