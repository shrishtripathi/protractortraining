import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";

export class StandardNewLoadPage extends BasePage {

    readonly createLoad: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:createOrder']"));
    readonly verifyCreateLoad: ElementFinder = element(by.xpath("//label[@id='eomOrderDetail:precisionLabel']"));
    readonly startTime: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:0:schedBegCalendarTime']"));
    readonly endTime: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:0:schedEndCalendarTime']"));
    readonly receiverScheduleAppointmentDate: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:schedBegCalendarDate']"));
    readonly scheduleAppointmentDate: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:0:schedBegCalendarDate']"));
    readonly overRideButton: ElementFinder = element(by.xpath("//input[@value='Override']"));

    public async clickCreateLoad() {
        await this.actions.click(this.createLoad, "Book load wothout a rate");
        let overRideButtonDisplayed: boolean = await this.actions.isElementPresent(this.overRideButton, '')
        if (overRideButtonDisplayed) {
            await this.actions.click(this.overRideButton, "Click on OverRide Button");
        }
    }

    public async verifyLoad() {
        let flag: boolean = false;
        await this.actions.waitUntilElementVisible(this.verifyCreateLoad, "create load");
        flag = await this.actions.isElementDisplayed(this.verifyCreateLoad, "create Load");
        return await flag;
    }

}