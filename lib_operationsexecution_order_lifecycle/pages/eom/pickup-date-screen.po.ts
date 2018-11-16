import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";

export class PickUpDateScreenPage extends BasePage {

    readonly nextButton: ElementFinder = element(by.xpath("//input[@id='frmPickupDate:btnNext']"));

    public async clickNextButton() {
        await this.actions.click(this.nextButton, "Next");
    }

}