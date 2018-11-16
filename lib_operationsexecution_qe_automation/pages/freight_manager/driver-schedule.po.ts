import { browser, by, element, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';
import { protractor } from 'protractor';
import { By } from "selenium-webdriver";
import { BasePage } from './base.po';

let basePage = new BasePage();
export class DriverSchedulePage extends BasePage {

    public getIcon(iconName: string, index: number): ElementFinder {
        var iconButton = element(by.xpath("//table[@id='form:driverScheduleTable']/tbody/tr['" + index + "']//a[@title='" + iconName + "']"));
        return iconButton;
    }

    public async clickOnIcons(iconName: string, index: number) {
        await this.actions.click(this.getIcon(iconName, index), iconName);
    }

    public async verifyMessages(message: string) {
        await this.actions.waitUntilElementVisible(this.spanText(message), "Wait untill element is visible");
        return await this.actions.getText(this.spanText(message), message);
    }

    public async verifyDriverScedulePage(iconName: string, index: number) {
        await this.actions.selectWindow(1, "Switching to Driver Schedule window");
        await this.actions.waitUntilElementVisible(this.getIcon(iconName, index), "Wait untill element is visible");
        await this.actions.waitUntilElementVisible(this.getIcon(iconName, index), iconName);
    }

    public async greenCheckMarkAvailability(text: string) {
        await this.actions.waitUntilElementVisible(basePage.spanText(text), text);
        return await this.actions.isElementPresent(basePage.spanText(text), text);
    }
}