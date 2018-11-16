import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder, protractor } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';
import { SkeletonListingPage } from './skeleton-listing.po';
import { CommonFunctions } from '../../utilities/common-functions';

let commonFunctions = new CommonFunctions();
let skeltonListingPage = new SkeletonListingPage();

export class DetailsPage extends BasePage {

    readonly createLoad: ElementFinder = element(by.xpath("//input[contains(@value,'Create Load')]"));
    readonly loadText: ElementFinder = element(by.xpath("//*[@id='eomOrderDetail:orderLabel' or @id='eomOrderDetail:precisionLabel']"));
    readonly addStopButton: ElementFinder = element(by.xpath("//input[@alt='ADD STOP']"));
    readonly enterCode: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:Code']"))
    readonly enterCurrentDate: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:schedBegCalendarDate']"));
    readonly startTime: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:schedBegCalendarTime']"));
    readonly endTime: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:schedEndCalendarTime']"));
    readonly expandArrow: ElementFinder = element(by.xpath("//img[@id='eomOrderDetail:stopsList:1:gimgExpandStop']"));
    readonly deleteButton: ElementFinder = element(by.xpath("//a[@id='eomOrderDetail:stopsList:1:stopDelete']"));
    readonly confirmButton: ElementFinder = element(by.id("eomOrderDetail:cancelOrder"));
    readonly stopOneScheduledAppointmentDateInput: ElementFinder = element(By.xpath("//table[@id='eomOrderDetail:stopsList']/tbody/tr[1]//input[contains(@id,'schedBegCalendarDate')]"));
    readonly stopOneScheduledAppointmentBeginTimeInput: ElementFinder = element(By.xpath("//table[@id='eomOrderDetail:stopsList']/tbody/tr[1]//input[contains(@id,'schedBegCalendarTime')]"));
    readonly stopOneScheduledAppointmentEndTimeInput: ElementFinder = element(By.xpath("//table[@id='eomOrderDetail:stopsList']/tbody/tr[1]//input[contains(@id,'schedEndCalendarTime')]"));
    readonly stopCode: ElementFinder = element(by.xpath("(//input[contains(@placeholder,'CODE')])[4]"));
    readonly searchTab: ElementFinder = element(by.xpath("//a[contains(.,'Search')]"));
    readonly stop2ReasonCodeTextBox: ElementFinder = element(by.xpath("(//label[contains(text(),'Reason Code:')]/parent::td/following-sibling::td/input)[2]"));
    readonly stop99ScheduledAppointmentDateInput = element(by.xpath("(//td/label[contains(.,'Scheduled Appointment')])[2]/parent::td/parent::tr/following-sibling::tr//input[contains(@id,'schedBegCalendarDate')]"));
    readonly stop99ScheduledAppointmentBeginTimeInput = element(by.xpath("(//td/label[contains(.,'Scheduled Appointment')])[2]/parent::td/parent::tr/following-sibling::tr//input[contains(@id,'schedBegCalendarTime')]"))
    readonly stop99ScheduledAppointmentEndTimeInput = element(by.xpath("(//td/label[contains(.,'Scheduled Appointment')])[2]/parent::td/parent::tr/following-sibling::tr//input[contains(@id,'schedEndCalendarTime')]"))
    readonly createLoadButton: ElementFinder = element(By.id("eomOrderDetail:createOrder"));
    readonly billToExtention: ElementFinder = element(by.xpath("//span[contains(.,'Bill To')]/following-sibling::div"));
    readonly bookMultipleButton: ElementFinder = element(by.id("eomOrderDetail:bookAnother"))
    readonly loadDetailsExtention: ElementFinder = element(by.xpath("//span[contains(.,'Load DETAIL')]/following-sibling::div"));
    readonly newLoadDetailsTitle: ElementFinder = element(By.id("eomOrderDetail:orderLabel"));
    readonly ltlTab: ElementFinder = element(By.id("eomOrderDetail:ltl"));
    readonly loadingXPath: ElementFinder = element(by.xpath("//div[@id='frmSkeletonListing:lSkeletonListingloadingCover2']"));

    public async setCurrentDate() {
        let date: string = await this.getTodayDate();
        await this.actions.setText(this.enterCurrentDate, date, "")
    }

    public async clickOnCreateLoad() {
        await this.actions.waitUntilElementVisible(this.createLoad, "wait until create load");
        await this.actions.click(this.createLoad, "click on create load");
        await this.waitForPageLoad();
    }

    public async loadNumber() {
        let successMessage: string = null;
        let loadNumber: string = null;
        try {
            await this.actions.waitUntilElementVisible(this.loadText, "Load Number");
            successMessage = await this.actions.getText(this.loadText, "Load Number");
            let start = successMessage.search('LS')
            let end = successMessage.search('status');
            loadNumber = successMessage.substring(start, end);
        } catch (error) {
            console.log("sucessmesage is not displayed" + error);
        }
        return loadNumber;
    }

    public async getLoadNumber() {
        await this.actions.waitUntilElementVisible(this.loadText, "Load Number");
        let loadNumberWithMessage = await this.actions.getText(this.loadText, "Get text");
        console.log("load mesg : " + loadNumberWithMessage)
        if (loadNumberWithMessage.search("AVAILABLE") !== -1) {
            let loadNumber = loadNumberWithMessage.trim().split(" ")[(loadNumberWithMessage.trim().split(" ")).length - 4];
            return await loadNumber;
        } else {
            return await "";
        }
    }
    public async clickOnSearchLink() {
        let searchLink: ElementFinder = element(by.xpath("//a[@id='eomOrderDetail:Search']"))
        await this.actions.click(searchLink, "");
    }
    public async setScheduledAppointmentTodayDateAndTime(begTime: any, endTime: any) {
        var today = new Date();
        var myDateString;
        today.setDate(today.getDate());
        myDateString = ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/' + today.getFullYear();
        console.log("date :::" + myDateString);
        await this.actions.setText(this.stopOneScheduledAppointmentDateInput, myDateString, "Enter text");
        await this.actions.setText(this.stopOneScheduledAppointmentBeginTimeInput, begTime, "Enter text");
        await this.actions.setText(this.stopOneScheduledAppointmentEndTimeInput, endTime, "Enter text");
    }

    public async setStop99ScheduledAppointmentTommorowDateAndTime(begTime: any, endTime: any) {
        var today = new Date();
        var myDateString;
        today.setDate(today.getDate() + 1);
        myDateString = ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/' + today.getFullYear();
        console.log("date :::" + myDateString);
        await this.actions.setText(this.stop99ScheduledAppointmentDateInput, myDateString, "Enter text");
        await this.actions.setText(this.stop99ScheduledAppointmentBeginTimeInput, begTime, "Enter text");
        await this.actions.setText(this.stop99ScheduledAppointmentEndTimeInput, endTime, "Enter text");
    }
    public async clickOnEOMTabs(type_Tab: string) {
        await this.actions.waitUntilElementInVisible(this.loadingXPath, "IFram invisible");
        let tab_Value: ElementFinder = element(by.xpath("//a[@id='" + type_Tab + "']"));
        await tab_Value.click();
        await this.actions.shortWait('waiting..');
    }
    public async waitUntillStopDetailsDisplayed() {
        let table_Stop: ElementFinder = element(by.xpath("//table[@id='eomOrderDetail:stopsList']"));
        await this.actions.waitUntilElementVisible(table_Stop, "stop table");
        await this.actions.shortWait("waiting..");
    }

    public async setAppointmentScheduledDetails(type_stop: string, value_Date: string) {
        let date_Field: ElementFinder;
        let time_field_beg: ElementFinder;
        let time_field_end: ElementFinder;
        let index_row: any = null;
        switch (type_stop.toLowerCase()) {
            case "shipper":
                index_row = 0;
                break;
            case "receiver":
                index_row = 1;
                break;
        }
        date_Field = element(by.xpath("//input[@id='eomOrderDetail:stopsList:" + index_row + ":schedBegCalendarDate']"));
        time_field_beg = element(by.xpath("//input[@id='eomOrderDetail:stopsList:" + index_row + ":schedBegCalendarTime']"));
        time_field_end = element(by.xpath("//input[@id='eomOrderDetail:stopsList:" + index_row + ":schedEndCalendarTime']"));

        await this.actions.setText(date_Field, value_Date, "date");
        await this.actions.setText(time_field_beg, "19:00", "start time");
        await this.actions.setText(time_field_end, "23:00", "end time");
    }

    public async clickOnAddStopButton() {
        await this.actions.click(this.addStopButton, "Click on Add Stop Button");
    }

    public async selectDepartmentDropDown(dropDownValue: string) {
        let selectDropDown: ElementFinder = element(by.xpath("//option[@value='" + dropDownValue + "']"));
        await this.actions.click(selectDropDown, "select drop down")
    }

    public async enterShipperCode(code: string) {
        await this.actions.waitUntilElementVisible(this.enterCode, "shipper code");
        await this.actions.setText(this.enterCode, code, "Enter Shipper Code")
    }

    public async setScheduledAppointmentTime(startTimeValue: string, endTimeValue: string) {
        await this.actions.setText(this.startTime, startTimeValue, "Set appointment start time");
        await this.actions.setText(this.endTime, endTimeValue, "Set appointment End time");
    }

    public async selectDropDownsFromDetailsPage(dropDownValue: string) {
        let loadUnloadDropDown: ElementFinder = element(by.xpath("//option[@value='" + dropDownValue + "']"));
        await this.actions.click(loadUnloadDropDown, "unload option");
    }

    public async selectDriverCount(dropDownValue: string) {
        let loadUnloadDropDown: ElementFinder = element(by.xpath("//select[@id='eomOrderDetail:stopsList:1:driverCountVal']/option[@value='" + dropDownValue + "']"));
        await this.actions.click(loadUnloadDropDown, "unload option");
    }

    public async clickOnSaveChangesButton(buttonValue: string) {
        let saveChangesButton: ElementFinder = element(by.xpath("//input[@value='" + buttonValue + "']"));
        await this.actions.click(saveChangesButton, "Click on Save Changes Button");
    }

    public async clickOnExpandArrow() {
        await this.actions.click(this.expandArrow, "Click on Expand Arrow Button");
    }

    public async clickOnDeleteButton() {
        await this.actions.click(this.deleteButton, "Click on Delete Button");
    }

    public async clickConfirmButton() {
        await this.actions.click(this.confirmButton, "click on confirm button");
    }

    public async setStopCode2(stopCodeValue: string) {
        await this.actions.clearText(this.stopCode, "stop code value set")
        await this.actions.setText(this.stopCode, stopCodeValue, "stop code value set")
    }

    public async stop2ReasonCode(value: string) {
        await this.actions.clearText(this.stop2ReasonCodeTextBox, "stop2 reasoncode value set")
        await this.actions.setText(this.stop2ReasonCodeTextBox, value, "stop2 reasoncode value set")
    }
    public async clickOnSearchTab() {
        await this.actions.click(this.searchTab, "click On search");
    }

    public async loadNumberMessage() {
        let successMessage: string = null;
        let loadNumber: string = null;
        try {
            let loadText = element(by.id("eomOrderDetail:orderLabel"))
            await this.actions.waitUntilElementVisible(loadText, "Load Number");
            successMessage = await this.actions.getText(loadText, "Load Number");
            let start = successMessage.search('LS')
            let end = successMessage.search('status');
            loadNumber = successMessage.substring(start, end);
        } catch (error) {
            console.log("sucessmesage is not displayed" + error);
        }

        return loadNumber;
    }
    public async billToClick() {
        await this.actions.shortWait("wait after enter text ");
        await this.actions.waitUntilElementPresenceOf(this.billToExtention, "");
        await this.actions.click(this.billToExtention, "Click on bill to extention");
    }

    public async verifyClassificationValue(value: string) {
        let classificationValue: ElementFinder = element(by.xpath("(//select[@id='eomOrderDetail:selOrdClassifications']/option)[1]"))
        try {
            if (! await classificationValue.isPresent() && value === "EMPTY") {
                return true;
            } else if (await classificationValue.isPresent() && value === "NOT EMPTY") {
                return true;
            }
        } catch (e) { return false; }
        return false;
    }

    public async waitTillDBRefresh(waitTime: number) {

        await browser.sleep(waitTime);
    }
    public async receiverScheduledAppointmentEmptyCheck() {
        let stop99ScheduleAppointment: ElementArrayFinder = element.all(by.xpath("(//td/label[contains(.,'Scheduled Appointment')])[2]/parent::td/parent::tr/following-sibling::tr//input"));
        let ScheduleAppointmentFieldsCount = await stop99ScheduleAppointment.count();
        for (let i: number = 0; i < ScheduleAppointmentFieldsCount; i++) {
            let text: string = await stop99ScheduleAppointment.get(i).getAttribute("value");
            console.log("text in side stop99ScheduleAppointment" + text)
            if (text !== "") {
                console.log("Under if condition of ScheduleAppointmentFieldsCount");
                await stop99ScheduleAppointment.get(i).clear();
            }
        }
        await this.actions.shortWait("wait after enter text ");
    }

    public async getNewLoadScreenTitle() {
        await this.actions.waitUntilElementVisible(this.newLoadDetailsTitle, "Wait untill element is visible");
        return await this.actions.getText(this.newLoadDetailsTitle, "New Load Details Title");
    }

    public async clickOnIcsUnderCurrentDate() {
        let flag: boolean = await skeltonListingPage.verifyBookLoadWithoutRateIsPresent();
        if (flag) {
            await skeltonListingPage.selectOptionFromChooseReasonCode("262");
            await skeltonListingPage.clickOnBookLoadWithoutRateButton();
        }
        await this.actions.longWait("switch to frame");
        let todayDate = await this.getTodayDate();
        console.log("todayDate:" + todayDate);
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        await this.actions.mediumWait("");
        let icsLinkUnderCurrentDate: ElementFinder = element(by.xpath("//a[contains(@id,'eomOrderFleetDec:DayOneRec')]/label[contains(text(),'ICS')]/parent::a"));
        this.clickOnInputButton(icsLinkUnderCurrentDate);
        this.actions.mediumWait("Waiting");
    }

    public async monitorsValueSelection(name: string) {
        await this.actions.shortWait("wait after enter text ");
        let monitorDropDown: string = "(//label[contains(.,'Monitors')]/parent::td/parent::tr/parent::tbody/parent::table/parent::td/parent::tr/following-sibling::tr//select/option)"
        await this.actions.selectByValue(monitorDropDown, name, "Monitors value selection");
    }
    public async loadDetailsClick() {
        await this.actions.shortWait("wait after enter text ");
        await this.actions.click(this.loadDetailsExtention, "Click on load details extention");
    }
    public async getProjectCodeValue() {
        let projectCode = element(by.xpath("//select[@id='eomOrderDetail:projectList']/option[@selected]"));
        return await projectCode.getAttribute("value")
    }

    public async waitToRefreshDB(waitTime: number) {
        await browser.sleep(waitTime);
    }

    public async clickOnLtlTab() {
        await this.actions.waitUntilElementInVisible(this.loadingXPath, "IFram invisible");
        await this.actions.click(this.ltlTab, "Click on LTL Tab");
    }

    public async verifyFleetDecisionWindow() {
        let fleetDecisionTitle = element(by.xpath("//div[@id='TB_ajaxWindowTitle']"));
        let text = await this.actions.getText(fleetDecisionTitle, "Fleet Decision");
        console.log("FleetDecision", text);
        return text;
    }

    public async setReasonCode(option: string) {
        await this.actions.longWait("")
        let status = await this.actions.isElementPresent(element(by.xpath(skeltonListingPage.reasonCodeDropdown)), "reason code");
        console.log("status", status)
        if (status) {
            await skeltonListingPage.selectOptionFromChooseReasonCode(option);
            await skeltonListingPage.clickBookLoadWithoutRate();
            await browser.actions().keyDown(protractor.Key.ALT).sendKeys("2").keyUp(protractor.Key.ALT).perform();
            return await this.verifyFleetDecisionWindow();
        }
        else {
            return await this.verifyFleetDecisionWindow();

        }

    }



    public async changeProjectCode(prj_Code: string) {
        let projectCode = await this.getProjectCodeValue();
        if (await projectCode !== prj_Code) {
            await this.setProjectCodeValue(prj_Code);
        }
    }

    public async setProjectCodeValue(code: string) {
        await this.actions.selectByValue("(//select[@id='eomOrderDetail:projectList']/option)", code, "Project COde");
        await this.actions.shortWait("waiting");

    }

    public async clickOnModeTypeUnderCurrentDate() {
        await this.actions.mediumWait("switch to frame");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        await this.actions.mediumWait("");
        let icsLinkUnderCurrentDate: ElementFinder = element(by.xpath("//a[contains(@id,'eomOrderFleetDec:DayOneRec')]/label[contains(text(),'TRUCK')]/parent::a"));
        this.clickOnInputButton(icsLinkUnderCurrentDate);
        this.actions.mediumWait("Waiting");
        await this.switchToAlertAndAccept();
    }

    public async switchToAlertAndAccept() {
        try {
            var EC = protractor.ExpectedConditions;
            if (browser.wait(EC.alertIsPresent(), 5000))
                console.log("inside if")
            await this.actions.switchToAlertAndAccept("");

        }
        catch (error) {

        }
    }
}
