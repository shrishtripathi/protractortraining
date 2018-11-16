import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';
import { CommonFunctions } from '../../utilities/common-functions';
import { SkeletonListingPage } from './skeleton-listing.po';
import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder, protractor, $ } from 'protractor';

let commonFunctions = new CommonFunctions();
let skeltonListingPage = new SkeletonListingPage();

export class DetailsPage extends BasePage {

    readonly modeTruckVerifyDropdown: ElementFinder = element(by.xpath("//select[@id='eomOrderDetail:transitMode']/option[@selected='selected' and text()='TRUCK']"));
    readonly fleetValueVerifyDropdown: ElementFinder = element(by.xpath("//select[@id = 'eomOrderDetail:fleetList']/option[@selected = 'selected' and text()= 'DCS SIGR94']"));
    readonly createLoad: ElementFinder = element(by.xpath("//input[contains(@value,'Create Load')]"));
    readonly loadText: ElementFinder = element(by.id("eomOrderDetail:precisionLabel"));
    readonly loadNumberElement: ElementFinder = element(By.id("eomOrderDetail:orderLabel"));
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
    readonly close: ElementFinder = element(by.xpath("//a[text()='Close']"));
    readonly loadDetailMinimizer: ElementFinder = element(by.id("eomOrderDetail:orderDetailminimizer"));
    readonly billToCodeMinimizer: ElementFinder = element(by.id("eomOrderDetail:nonStopsminimizer"));
    readonly magnifyingGlass: ElementFinder = element(by.xpath("//a[@id='eomOrderDetail:ajaxcmdLnkOrdClassifications']/img"));
    readonly standardNewLoadDetailsTitle: ElementFinder = element(by.id("eomOrderDetail:precisionLabel"));
    readonly hazmatDropDown: ElementFinder = element(by.xpath("//select[@id='eomOrderDetail:stopsList:0:hazmatVal']"));
    readonly hazmatDropDownOptions: string = "//select[@id='eomOrderDetail:stopsList:0:hazmatVal']/option";
    readonly originRampDetails: ElementArrayFinder = element.all(by.xpath("//div[@id='eomOrderDetail:rail']/table/tbody/tr/td[2]/table//table/tbody/tr/td[@class='railtopAlign']//span"));
    readonly destinationRamp: ElementArrayFinder = element.all(by.xpath("//div[@id='eomOrderDetail:rail']/table/tbody/tr/td[4]/table//table/tbody/tr/td[@class='railtopAlign']//span"));
    readonly stopTwoScheduledAppointmentDateInput: ElementFinder = element(by.xpath("(//span[text()='STOP  2']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td)[2]//table[@class='specialAttn']//input[contains(@id,'schedBegCalendarDate')]"));
    readonly stopTwoScheduledAppointmentBeginTimeInput: ElementFinder = element(by.xpath("(//span[text()='STOP  2']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td)[2]//table[@class='specialAttn']//input[contains(@id,'schedBegCalendarTime')]"));
    readonly stopTwoScheduledAppointmentEndTimeInput: ElementFinder = element(by.xpath("(//span[text()='STOP  2']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td)[2]//table[@class='specialAttn']//input[contains(@id,'schedEndCalendarTime')]"));
    readonly stop3Code: ElementFinder = element(by.xpath("//span[text()='STOP  3']//ancestor::table[@bgcolor='#ffffff']//table[@class='customerDetailPanel']/tbody/tr[2]//input"));
    readonly stop2LoadUnloadByDropdown: string = "//span[text()='STOP  2']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td[3]//select[@id='eomOrderDetail:stopsList:1:loadedBy']//option";
    readonly stop2LoadedOnDropDown: string = "//span[text()='STOP  2']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td[3]//select[@id='eomOrderDetail:stopsList:1:loadedOn']//option";
    readonly stop2DriverCount: string = "//span[text()='STOP  2']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td[3]//select[@id='eomOrderDetail:stopsList:1:driverCountVal']//option";
    readonly stop2HazmatOption: string = "//span[text()='STOP  2']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td[3]//select[@id='eomOrderDetail:stopsList:1:hazmatVal']//option";
    readonly stopThreeScheduledAppointmentDateInput: ElementFinder = element(by.xpath("(//span[text()='STOP  3']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td)[2]//table[@class='specialAttn']//input[contains(@id,'schedBegCalendarDate')]"));
    readonly stopThreeScheduledAppointmentBeginTimeInput: ElementFinder = element(by.xpath("(//span[text()='STOP  3']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td)[2]//table[@class='specialAttn']//input[contains(@id,'schedBegCalendarTime')]"));
    readonly stopThreeScheduledAppointmentEndTimeInput: ElementFinder = element(by.xpath("(//span[text()='STOP  3']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td)[2]//table[@class='specialAttn']//input[contains(@id,'schedEndCalendarTime')]"));
    readonly stop3DriverCount: string = "//span[text()='STOP  3']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td[3]//select[@id='eomOrderDetail:stopsList:2:driverCountVal']//option";
    readonly lastStopDriverCount:string="//span[text()='STOP  99']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td[3]//select[@id='eomOrderDetail:stopsList:3:driverCountVal']//option";
    readonly lastStopScheduledAppointmentDateInput: ElementFinder = element(by.xpath("(//span[text()='STOP  99']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td)[2]//table[@class='specialAttn']//input[contains(@id,'schedBegCalendarDate')]"));
    readonly lastStopScheduledAppointmentBeginTimeInput: ElementFinder = element(by.xpath("(//span[text()='STOP  99']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td)[2]//table[@class='specialAttn']//input[contains(@id,'schedBegCalendarTime')]"));
    readonly lastStopScheduledAppointmentEndTimeInput: ElementFinder = element(by.xpath("(//span[text()='STOP  99']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td)[2]//table[@class='specialAttn']//input[contains(@id,'schedEndCalendarTime')]"));
    readonly stop3LoadUnloadByDropdown: string = "//span[text()='STOP  3']//ancestor::table[@bgcolor='#ffffff']/tbody/tr/td[3]//select[@id='eomOrderDetail:stopsList:2:loadedBy']//option";
    readonly continueBookingButton = $('tr.top>td>table>tbody>tr>td:nth-child(2)>input');
    readonly commentsTab: ElementFinder = element(by.xpath("//a[contains(.,'Comments')]"));
    readonly detailsTab: ElementFinder = element(by.id("frmOrderCommentsListing:details"));
    readonly solicitor: ElementFinder = element(by.id("eomOrderDetail:solicitor"));
    readonly broker: ElementFinder = element(by.id("eomOrderDetail:dtBrokers:0:broker"));
    readonly addStopBtn: ElementFinder = element(by.xpath("//input[@alt='ADD STOP']"));
    readonly stop2DeptCode:ElementFinder = element(by.id("eomOrderDetail:stopsList:1:Code"));
    readonly stop3DeptCode:ElementFinder = element(by.id("eomOrderDetail:stopsList:2:Code"));
    readonly stop1ScheduledAppiontDate: ElementFinder=element(by.id("eomOrderDetail:stopsList:0:schedBegCalendarDate"));
    readonly stop2ScheduledAppiontDate: ElementFinder=element(by.id("eomOrderDetail:stopsList:1:schedBegCalendarDate"));
    readonly stop3ScheduledAppiontDate: ElementFinder=element(by.id("eomOrderDetail:stopsList:2:schedBegCalendarDate"));
    readonly stop2ScheduledAppiontDateFrom: ElementFinder=element(by.id("eomOrderDetail:stopsList:1:schedBegCalendarTime"));
    readonly stop2ScheduledAppiontDateTo: ElementFinder=element(by.id("eomOrderDetail:stopsList:1:schedEndCalendarTime"));
    readonly stop3ScheduledAppiontDateFrom: ElementFinder=element(by.id("eomOrderDetail:stopsList:2:schedBegCalendarTime"));
    readonly stop3ScheduledAppiontDateTo: ElementFinder=element(by.id("eomOrderDetail:stopsList:2:schedEndCalendarTime"));
    readonly equipmentDetailDropdown:string="//select[@id='eomOrderDetail:equipSubClass']//option";
    readonly origin:ElementFinder=element(by.xpath("//span[contains(@id,'eomOrderDetail:stopsList:0:Location')]"));
    readonly destination:ElementFinder=element(by.xpath("//span[contains(@id,'eomOrderDetail:stopsList:1:Location')]"));

    public async getOrigin(){
       let origin= await this.actions.getText(this.origin,"Get origin");  
       let originText=origin.substr(0,origin.indexOf(","));
       return originText;
    }

    public async getDestination(){
        let destination= await this.actions.getText(this.destination,"Get origin");  
        let destinationText=destination.substr(0,destination.indexOf(","));
        console.log("destinationText",destinationText)
        return destinationText;
     }

    public async setEquipmentDropdown(valueToSelect:string){
        await this.actions.selectByValue(this.equipmentDetailDropdown,valueToSelect,"Selecting value to equipment dropdown");;
    }

    public async setSolictor(textToEnter: string) {
        await this.actions.clearText(this.solicitor, "Clearing text");
        await this.actions.setText(this.solicitor, textToEnter, "Enter text");
    }

    public async verifySolictor(){
        return await this.solicitor.getAttribute("value");
    }

    public async verifyBroker(){
        return await this.broker.getAttribute("value");
    }

    public async verifyFleetinLoadDetail() {
        await this.actions.waitUntilElementPresenceOf(this.fleetValueVerifyDropdown, "wait for fleet dropdown");
        expect(this.fleetValueVerifyDropdown).toBeTruthy();
    }

    public async setBroker(textToEnter: string) {
        //await this.actions.clearText(this.broker, "Clearing text");
        //await this.actions.setText(this.broker, "", "Enter text");
        //await this.actions.setText(this.broker, textToEnter, "Enter text");
        await browser.executeScript("document.getElementById('eomOrderDetail:dtBrokers:0:broker').setAttribute('value', 'TRLAA8')");
            
    }
    
    public async clickOnMinimizerOrMaximizerOfBillToCode() {
        let classNames: string = await this.billToCodeMinimizer.getAttribute('class');
        if (classNames.includes("contMin min")) {
            await this.actions.click(this.billToCodeMinimizer, "Click on Minimizer");
        }
    }

    public async clickOnMinimizerOrMaximizerOfLoadDetails() {
        await this.actions.click(this.loadDetailMinimizer, "Click on Minimizer");
    }

    public async clickOnMagnifyingGlass() {
        await this.actions.waitUntilElementVisible(this.magnifyingGlass, "");
        await this.actions.click(this.magnifyingGlass, "Click on Magnifying Glass");
    }

    public async clickOnOrderClassificationCheckBox(text: string) {
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        await this.actions.mediumWait("");
        await browser.executeScript('window.scrollTo(0,400);');
        let checkBox: ElementFinder = element(by.xpath("//label[text()='" + text + "']/input"));
        await this.actions.click(checkBox, "Click on checkbox");
    }

    public async setScheduledAppointmentTodayDateAndTimeInStop99(date: any, begTime: any, endTime: any) {
        await this.actions.setText(this.stop99ScheduledAppointmentDateInput, date, "Enter text");
        await this.actions.setText(this.stop99ScheduledAppointmentBeginTimeInput, begTime, "Enter text");
        await this.actions.setText(this.stop99ScheduledAppointmentEndTimeInput, endTime, "Enter text");
    }

    public async getStandardNewLoadScreenTitle() {
        await this.actions.waitUntilElementVisible(this.standardNewLoadDetailsTitle, "Wait untill element is visible");
        return await this.actions.getText(this.standardNewLoadDetailsTitle, "New Load Details Title");
    }

    public async setCurrentDate() {
        let date: string = await commonFunctions.getTodayDate();
        await this.actions.setText(this.enterCurrentDate, date, "")
    }

    public async clickOnCreateLoad() {
        await this.actions.waitUntilElementVisible(this.createLoad, "wait until create load");
        await this.actions.click(this.createLoadButton, "click on create load")
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

    public async focusLoadNumber() {
        let successMessage: string = null;
        let loadNumber: string = null;
        try {
            await this.actions.waitUntilElementVisible(this.loadText, "Load Number");
            successMessage = await this.actions.getText(this.loadText, "Load Number");
            let start = successMessage.search(' M')
            let end = successMessage.search('status');
            loadNumber = successMessage.substring(start, end);
        } catch (error) {
            console.log("sucessmesage is not displayed" + error);
        }
        return loadNumber;
    }

    public async clickOnTruck() {
        await this.actions.waitUntilElementInVisible(element(by.xpath("//img[@id='frmRateCheck:gimgLoading']")), "loading");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        await this.actions.mediumWait("");
        let imLink: ElementFinder = element(by.xpath("//a[contains(@id,'eomOrderFleetDec:DayOneRec')]/label[contains(text(),'TRUCK')]/parent::a"));
        await this.actions.click(imLink, "");
    }

    public async getLoadNumber() {
        let loadNumberWithMessage = await this.actions.getText(this.loadNumberElement, "Get text");
        console.log("Message : "+loadNumberWithMessage);
        if (loadNumberWithMessage.search("AVAILABLE") !== -1) {
            let loadNumber = loadNumberWithMessage.split(" ")[(loadNumberWithMessage.split(" ")).length - 4];
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

    public async setScheduledAppointmentTodayDateAndTimeForStop99(begTime: any, endTime: any) {
        var today = new Date();
        var myDateString;
        today.setDate(today.getDate());
        myDateString = ('0' + (today.getMonth() + 1)).slice(-2) + '/' + ('0' + today.getDate()).slice(-2) + '/' + today.getFullYear();
        console.log("date :::" + myDateString);
        await this.actions.setText(this.stop99ScheduledAppointmentDateInput, myDateString, "Enter text");
        await this.actions.setText(this.stop99ScheduledAppointmentBeginTimeInput, begTime, "Enter text");
        await this.actions.setText(this.stop99ScheduledAppointmentEndTimeInput, endTime, "Enter text");
    }

    public async setStop2ScheduledAppointmentTodayDateAndTime(begTime: any, endTime: any) {
        var today = new Date();
        var myDateString;
        myDateString = await this.futureDate(5);
        console.log("stop2date :::" + myDateString);
        await this.actions.setText(this.stopTwoScheduledAppointmentDateInput, myDateString, "Enter text");
        await this.actions.setText(this.stopTwoScheduledAppointmentBeginTimeInput, begTime, "Enter text");
        await this.actions.setText(this.stopTwoScheduledAppointmentEndTimeInput, endTime, "Enter text");
    }

    public async setStop3ScheduledAppointmentTodayDateAndTime(begTime: any, endTime: any) {
        var today = new Date();
        var myDateString;
        myDateString = await this.futureDate(10);
        console.log("stop3date :::" + myDateString);
        await this.actions.setText(this.stopThreeScheduledAppointmentDateInput, myDateString, "Enter text");
        await this.actions.setText(this.stopThreeScheduledAppointmentBeginTimeInput, begTime, "Enter text");
        await this.actions.setText(this.stopThreeScheduledAppointmentEndTimeInput, endTime, "Enter text");
    }

    public async setLastStopScheduledAppointmentTodayDateAndTime(begTime: any, endTime: any) {
        var today = new Date();
        var myDateString;
        myDateString = await this.futureDate(15);
        console.log("stoplastdate :::" + myDateString);
        await this.actions.setText(this.lastStopScheduledAppointmentDateInput, myDateString, "Enter text");
        await this.actions.setText(this.lastStopScheduledAppointmentBeginTimeInput, begTime, "Enter text");
        await this.actions.setText(this.lastStopScheduledAppointmentEndTimeInput, endTime, "Enter text");
    }

    public async futureDate(daysToAdd: number) {
        let newdate = new Date();
        newdate.setDate(newdate.getDate() + daysToAdd);
        let newmonth = Number(newdate.getUTCMonth()) + 1;
        let newMonth: any = newmonth;
        if(newMonth < 10) {
            newMonth = '0' + newMonth;
        }
        
        let newDate: any = Number(newdate.getUTCDate());
        if(newDate < 10) {
            newDate = '0' + newDate;
        }

        let requiredDate = (newMonth + '/' + newDate + '/' + newdate.getUTCFullYear())
        return requiredDate;
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

    public async setStop99ScheduledAppointmentFiveDaysLaterDateAndTime(begTime: any, endTime: any) {
        var today = new Date();
        var myDateString;
        myDateString = await this.futureDate(5);
        await this.actions.setText(this.stop99ScheduledAppointmentDateInput, myDateString, "Enter text");
        await this.actions.setText(this.stop99ScheduledAppointmentBeginTimeInput, begTime, "Enter text");
        await this.actions.setText(this.stop99ScheduledAppointmentEndTimeInput, endTime, "Enter text");
    }

    public async clickOnEOMTabs(type_Tab: string) {
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

    public async selectOptionFromHazmatDropDown(value: string) {
        await this.actions.click(this.hazmatDropDown, "Click on Tab");
        await this.actions.selectByValue(this.hazmatDropDownOptions, value, "select value");
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
        await this.actions.setText(this.enterCode, code, "Enter Shipper Code");
    }

    public async enterStop3Code(code: string) {
        await this.actions.waitUntilElementVisible(this.stop3Code, "shipper code");
        await this.actions.setText(this.stop3Code, code, "Enter Shipper Code")
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

    public async commentsTabClick() {
        await this.actions.click(this.commentsTab, "Click on comments tab");
    }

    public async detailsTabClick() {
        await this.actions.click(this.detailsTab, "Click on details tab");
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

    public async clickOnCloseButton() {
        await browser.switchTo().defaultContent();
        await this.actions.click(this.close, "close frame");
        await this.actions.longWait("");
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
        let todayDate = await commonFunctions.getTodayDate();
        console.log("todayDate:" + todayDate);
        await this.actions.waitUntilElementVisible(element(by.xpath('//iframe[@id="TB_iframeContent"]')), "");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));        
        let icsLinkUnderCurrentDate: ElementFinder = element(by.xpath("//a[contains(@id,'eomOrderFleetDec:DayOneRec')]/label[contains(text(),'ICS')]/parent::a"));
        await this.actions.click(icsLinkUnderCurrentDate, "");        
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
            // await skeltonListingPage.clickBookLoadWithoutRate();
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
        await this.actions.click(icsLinkUnderCurrentDate, "click on ics current date");
        await this.actions.mediumWait("Waiting");
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

    public async getInitials() {
        let inits: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:userInits']"));
        this.actions.waitUntilElementVisible(inits, "");
        let initsText: string = await inits.getAttribute('value');
        return await initsText.substring(0,2).trim();
    }


    public async getOriginRamp() {
        let originRamp: ElementFinder = element(by.xpath("//table[@id='eomOrderDetail:rampSummary']/tbody/tr/td"));
        this.actions.waitUntilElementVisible(originRamp, "");
        let origin: string = await this.getElementText(await originRamp);
        return await origin.split("-")[0].trim();
    }

    public async getDestinationDetails() {
        let rail_Carrier: string[] = [];
        let origin: string;
        let destination: string;
        let route_Legs: ElementArrayFinder = element.all(by.xpath("//table[@id='eomOrderDetail:rampSummary']//tr"))
        let originRampRouteCodeAbbr: string = await this.actions.getText(this.originRampDetails.get(1), "Origin Ramp Details");
        let destinationRampRouteCodeAbbr: string = await this.actions.getText(this.destinationRamp.get(1), "Destination Ramp Details");
        switch (originRampRouteCodeAbbr) {
            case "KANSAS CITY SOUTHERN RAMP":
                origin = "KCS"
                break;
            case "FEC MIAMI RAMP":
                origin = "FEC"
                break;
            case "NORFOLK SOUTHERN":
                origin = "NS"
                break;
            case "BNSF LOS ANGELES RAMP":
                origin = "BNSF"
                break;
        }

        switch (destinationRampRouteCodeAbbr) {
            case "KANSAS CITY SOUTHERN RAMP":
                destination = "KCS"
                break;
            case "FEC MIAMI RAMP":
                destination = "FEC"
                break;
            case "NORFOLK SOUTHERN":
                destination = "NS"
                break;
            case "BNSF LOS ANGELES RAMP":
                destination = "BNSF"
                break;
        }
        await rail_Carrier.push(origin);
        for (let i = 2; i <= await route_Legs.count(); i++) {
            if (i == 2 && i !== await route_Legs.count()) {
                await rail_Carrier.push("NS");
            } else {
                await rail_Carrier.push(destination);
            }
        }
        console.log(rail_Carrier)
        return rail_Carrier;
    }

    public async setStop2DropDown(optionToSelect: string) {
        let stop2DropDown = "//span[text()='STOP  2']//ancestor::table[@bgcolor='#ffffff']//table[@class='customerDetailPanel']//select[@id='eomOrderDetail:stopsList:1:department']//option";
        await this.actions.selectByValue(stop2DropDown, optionToSelect, 'Selecting value to stop2 dropdown');
    }

    public async setStop3DropDown(optionToSelect: string) {
        let stop2DropDown = "//span[text()='STOP  3']//ancestor::table[@bgcolor='#ffffff']//table[@class='customerDetailPanel']//select[@id='eomOrderDetail:stopsList:2:department']//option";
        await this.actions.selectByValue(stop2DropDown, optionToSelect, 'Selecting value to stop2 dropdown');
    }

    public async setStop2LoadAndUnloadedByDropdown(valueToSelect: string) {
        await this.actions.selectByValue(this.stop2LoadUnloadByDropdown, valueToSelect, "Select option")
    }

    public async setStop3LoadAndUnloadedByDropdown(valueToSelect: string) {
        await this.actions.selectByValue(this.stop3LoadUnloadByDropdown, valueToSelect, "Select option")
    }

    public async setStop2LoadedOnDropdown(valueToSelect: string) {
        await this.actions.selectByValue(this.stop2LoadedOnDropDown, valueToSelect, "Select option")
    }

    public async setStop2DriverCountDropdown(valueToSelect: string) {
        await this.actions.selectByValue(this.stop2DriverCount, valueToSelect, "Select option");
    }

    public async setStop2HazmatDropdown(valueToSelect: string) {
        await this.actions.selectByValue(this.stop2HazmatOption, valueToSelect, "Select option");;
    }

    public async setStop3DriverCountDropdown(valueToSelect: string) {
        await this.actions.selectByValue(this.stop3DriverCount, valueToSelect, "Select option");
    }

    public async setLastStopDriverCountDropdown(valueToSelect: string) {
        await this.actions.selectByValue(this.lastStopDriverCount, valueToSelect, "Select option");
    }

    public async verifyPPNote() {
        let ppNote = element(by.xpath("//label[contains(text(),'PPNote')]/following::input[1]"));
        let text = await this.actions.getText(ppNote, "tractor number");
        console.log("tractor number", text);
        return text;
    }

    public async clickContinueBooking() {
        if (this.continueBookingButton.isPresent()) {
            await this.actions.click(this.continueBookingButton, "Click the button if it exists");
        }
    }

    public async allDestionationDetails(columnName: string) {
        let allDestinationDetail: ElementFinder = element(by.xpath(`//*[@id='eomOrderDetail:railMain']//td[@class="panelRow" and contains(.,'` + columnName + `')]`))
        let destinationDetails = await this.actions.getText(allDestinationDetail, 'Getting the particular column details')
        return destinationDetails;
    }

    public async standardloadNumber() {

        let successMessage: string = null;
        let loadNumber: string = null;

        try {
            await this.actions.waitUntilElementVisible(this.standardNewLoadDetailsTitle, "Load Number");
            successMessage = await this.actions.getText(this.standardNewLoadDetailsTitle, "Load Number");
            let start = successMessage.search('M');
            let end = successMessage.search('status');
            loadNumber = successMessage.substring(start, end);
        } catch (error) {
            console.log("sucessmesage is not displayed" + error);
        }
        return loadNumber;

    }

    public async clickOnICS() {
        await this.actions.waitUntilElementInVisible(element(by.xpath("//img[@id='frmRateCheck:gimgLoading']")), "loading");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath('//iframe[@id="TB_iframeContent"]')));
        await this.actions.mediumWait("");
        let imLink: ElementFinder = element(by.xpath("//a[contains(@id,'eomOrderFleetDec:DayOneRec')]/label[contains(text(),'ICS')]/parent::a"));
        await this.actions.click(imLink, "");
    }
        
    public async verifyModeTruckInLoadDetail() {
        await this.actions.waitUntilElementVisible(this.modeTruckVerifyDropdown,"Wait for Mode Dropdown");
        expect(this.modeTruckVerifyDropdown).toBeTruthy() ;
        
    }

    public async changeEquipmentTypeToFlatBed(optionName:string) {
        let equipmentType: string = "//select[@id='eomOrderDetail:equipSubClass']/option"
        await this.actions.selectByValue(equipmentType, optionName , "Select Option")
    }
    public async selectEquipmentType(equipmentType:string){

        await this.actions.selectByValue("(//select[@id='eomOrderDetail:equipSubClass']/option)", equipmentType, "Equipment Type");
    }

}
