
import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class BackhaulRevenueLookupPage extends BasePage {

    readonly searchButton: ElementFinder = element(by.name("serach"));
    readonly exitButton: ElementFinder = element(by.name("exit"));
    readonly editTripButton: ElementFinder = element(by.name("editTrip"));


    public async clickSearchButton() {
        await this.actions.click(this.searchButton, "Clicking on Search buttton");
    }

    public async clickExitButton() {
        await this.actions.click(this.exitButton, "Clicking on Exit buttton");
    }

    public async clickEditTripButton() {
        await this.actions.click(this.editTripButton, "Clicking on Edit Trip buttton");
    }

    public async verifyOrderDetailsPage() {
        let title = null;
        await this.actions.selectWindow(2, "moving to another Window");
        title = await element(by.className("panelTitleFirstWord")).getText();
        return await title;


    }
}

















