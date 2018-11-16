import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';

export class FreightManager2Page extends BasePage {


    readonly equipmentTab = element(by.xpath("//a/span[text()='Equipment']"));
    readonly customerPool = element(by.xpath("//span[text()='Customer Pool']"));

    public async mouseOverOnEquipmentTab() {
        await this.actions.selectWindow(1, "move to freight manager window");
        await this.actions.moveMouseToElement(this.equipmentTab, "equipment");
    }
    public clickOnCustomerPool() {
        this.actions.click(this.customerPool, "Click on OBC Exception Option")
    }


}