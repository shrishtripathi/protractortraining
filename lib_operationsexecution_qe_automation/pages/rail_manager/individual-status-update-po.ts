import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";
import { CommonFunctions } from "../../utilities/common-functions";

let commonFunctions = new CommonFunctions();
export class IndividualStautsUpdatePage extends BasePage {

    readonly individualStatusUpdate: ElementFinder = element(by.xpath("//a[text()='Individual Status Update']"));

    public async verifyIndividualStatusUpdatePage() {
        return await this.actions.getText(this.individualStatusUpdate, "Get text from individual status update");
    }

    public async verifyNewvalues(newValue: string) {
        let newValues = element(by.xpath("//input[@id='form:" + newValue + "']"));
        return await newValues.getAttribute("value");
    }

    public async setNewValues(newValue: string, text: string) {
        let newValues = element(by.xpath("//input[@id='form:" + newValue + "']"));
        await this.actions.clearText(newValues, "clear")
        await this.actions.setText(newValues, text, "Enter " + text + "to " + newValue + "");
    }
    public async eventDate() {
        let currentDate: string = await commonFunctions.getTodayDate();
        console.log("currentDate", currentDate);
        return currentDate;
    }

    public async getMessage(text: string) {
        return await this.actions.getText(await this.spanText(text), "GetText");
    }

    public async addHalfHourToTime(time_value: string) {
        let hour: string = await time_value.split(":")[0];
        let min: string = await time_value.split(":")[1];
        if (min === "00") {
            min = "30"
        }
        else {
            min = "00"
            hour = await (Number(hour) + 1).toString();
            if (hour.length < 2) { hour = "0" + hour }
        }
        console.log(hour + ":" + min)
        return hour + ":" + min
    }

}
