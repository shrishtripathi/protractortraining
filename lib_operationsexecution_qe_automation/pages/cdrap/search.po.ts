import { BasePage } from "../base.po";
import { ElementFinder, element, by } from "protractor";
import { CommonFunctions } from "../../utilities/common-functions";


let commonFunctions = new CommonFunctions();
export class SearchPage extends BasePage {

    readonly ssnNoElement: ElementFinder = element(by.xpath("//input[@name='ssn']"));
    readonly searchButton: ElementFinder = element(by.xpath("//input[@name='submit' and @value='Search']"));
    readonly createNewApplicationButton: ElementFinder = element(by.xpath("//input[@name='submit' and @value='Create New Application']"));   
    
    public async enterSSNNumber() {
        let ssnNo = await commonFunctions.randomNumberGenarator(9);
        await this.actions.waitUntilElementVisible(this.ssnNoElement, "");
        await this.actions.clearText(this.ssnNoElement, "Clear ssn");
        await this.actions.setText(this.ssnNoElement, ssnNo, "Enter ssn");
    }

    public async verifyErrorMessage(error: string) {
        try {
            if (await this.text(error).isDisplayed()) {
                return true;
            }
        } catch (e) { }
        return false;

    }
}