import { browser, ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { BasePage } from "../base.po";

export class StandardNewLoadPage extends BasePage {

    readonly createLoad: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:createOrder']"));
    readonly verifyCreateLoad: ElementFinder = element(by.xpath("//label[@id='eomOrderDetail:precisionLabel']"));
    readonly startTime: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:0:schedBegCalendarTime']"));
    readonly endTime: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:0:schedEndCalendarTime']"));
    readonly receiverScheduleAppointmentDate: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:schedBegCalendarDate']"));
    readonly scheduleAppointmentDate: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:0:schedBegCalendarDate']"));

    public async enterDateAndTime(date: string, time: string, destinationTime: string) {
        this.actions.clearText(this.startTime, "start time");
        this.actions.setText(this.startTime, time, "start time");
        this.actions.clearText(this.endTime, "End time");
        this.actions.setText(this.endTime, destinationTime, "Destination time");
    }

    public async clickCreateLoad() {
        await this.actions.click(this.createLoad, "Book load wothout a rate");
        let overRideButton: ElementFinder = element(by.xpath("//input[@value='Override']"));
        let overRideButtonDisplayed: boolean = await this.actions.isElementPresent(overRideButton, '')
        if (overRideButtonDisplayed) {
            await this.actions.click(overRideButton, "Click on OverRide Button");
        }
    }

    public async verifyLoad() {
        let flag: boolean = false;
        flag = await this.actions.isElementPresent(this.verifyCreateLoad, "create Load");
        console.log(flag);
        return await flag;
    }

}