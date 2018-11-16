import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";

export class RateCheckDetailsPage extends BasePage {

    readonly bookLoadWithoutRate: ElementFinder = element(by.xpath("//input[@id='frmRateCheck:olnkRsnCodeForNoRate']"));
    readonly reasonCodeDropdown: string = "(//select[@name='frmRateCheck:noRateReason']/option)";
    readonly rateCodeDropDown: ElementFinder = element(by.xpath("//select[@name='frmRateCheck:noRateReason']"));
    public async selectRateCode(text: string) {
        await this.actions.selectByValue(this.reasonCodeDropdown, text, "reason code dropdown");
        await this.actions.click(this.bookLoadWithoutRate, "Book load wothout a rate");

    }

    public async clickBookLoadWithoutRate() {
        await this.actions.click(this.bookLoadWithoutRate, "Book load wothout a rate");
    }
    public async isRateDropdownVisible() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.rateCodeDropDown, "wait for presence of drop down");
            flag = await this.rateCodeDropDown.isDisplayed();
        } catch (error) {

        }
        return await flag;
    }



}
