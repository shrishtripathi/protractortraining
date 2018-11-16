import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder } from "protractor";
import { By } from 'selenium-webdriver';
import { BasePage } from "../base.po";

export class CalenderPage extends BasePage {
    readonly calenderTypeInput: ElementFinder = element(by.id("calendarController:icePnlTbSet:0:type"));
    readonly calenderType: ElementFinder = element(by.xpath("//table[@id='calendarController:fuelCalendarList']//following-sibling::tbody//tr[1]//td[1]//span"));
    readonly add1RecordradioButton: ElementFinder = element(by.id("calendarController:createOption:_1"));
    readonly deoDate: ElementFinder = element(by.xpath("//input[contains(@id,'doeDateId') and (@type='text')]"));
    readonly efectiveDate: ElementFinder = element(by.xpath("//input[contains(@id,'effDateId') and (@type='text')]"));
    readonly expirationDate: ElementFinder = element(by.xpath("//input[contains(@id,'expDateId') and (@type='text')]"));
    readonly calenderListCheckBox: ElementFinder = element(by.xpath("//table[contains(@id,'calendarController:icePnlTbSet')]//following-sibling::tbody//tr[1]//input"));
    readonly saveImage: ElementFinder = element(by.xpath("//input[@title='Save']"));
    readonly deleteMessage: ElementFinder = element(by.xpath("//table[@id='calendarController:message']//span"));
    public async setCalenderType(textToEnter: string) {
        await this.actions.clearText(this.calenderTypeInput, "Calnder Type input")
        await this.actions.setText(this.calenderTypeInput, textToEnter, "Calnder Type input");
    }

    public async clickCalnderType() {
        await this.actions.click(this.calenderType, "Click calender Type");
    }

    public async clickadd1RecordRadioButton() {
        await this.actions.click(this.add1RecordradioButton, "Click add one record radio button");
    }

    public async setInputField(textFieldInput: ElementFinder, text: string) {
        await this.actions.clearText(textFieldInput, "Clear Text");
        await this.actions.setText(textFieldInput, text, "Enter text");
    }

    public async clickCalenderListCheckBox(deoDate: string) {
        try {

            let xpathString = "//span[text()='" + deoDate + "']//parent::td/following-sibling::td[./span[contains(text(),'A')]]/preceding-sibling::td//input";
            console.log("Calendar checkbox: " + xpathString);
            let calendarCheckbox = element(by.xpath(xpathString));

            do {
                try {
                    let elementPresent = await this.actions.isElementPresent(calendarCheckbox, "Checking for presence");
                    console.log("status", elementPresent);
                    if (elementPresent == true) {
                        await this.actions.click(calendarCheckbox, "Click");
                        break;
                    }
                } catch (e) {
                    console.log("Error : " + e);
                }
            } while (await this.pagination())
        } catch (e) {
            console.log("Error : " + e);
        }
    }

    public async pagination() {
        let previousPage: ElementFinder = element(by.xpath("//a[@id='calendarController:icePnlTbSet:0:calendarData:dataScroll_1previous']"));
        if (previousPage) {
            await this.actions.click(previousPage, "click");
            await this.actions.mediumWait("");
            return true;
        } else {
            console.log("completed pagination, next button is disabled no data is found with given criteria");
            return false;
        }

    }

    public async clickSaveImage() {
        await this.actions.click(this.saveImage, "Click save image");
    }

    public async verifyDeleteMessage() {
        return await this.actions.getText(this.deleteMessage, "Deleted sucessfully");
    }

    public async getFutureYear(futureYear: number, ) {
        var today = new Date();
        var myDateString;
        today.setDate(today.getDate());
        myDateString = (today.getFullYear() + futureYear) + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        console.log("date :::" + myDateString);
        return await myDateString;
    }

}
