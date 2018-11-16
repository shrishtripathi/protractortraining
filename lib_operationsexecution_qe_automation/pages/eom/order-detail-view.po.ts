import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder, protractor } from 'protractor';
import { BasePage } from "../base.po";
import { CommonFunctions } from '../../utilities/common-functions';

export class OrderDetailsViewPage extends CommonFunctions {

    readonly loadDetailsExtention: ElementFinder = element(by.xpath("//span[contains(.,'Load DETAIL')]/following-sibling::div"));
    readonly referenceNumberTab: ElementFinder = element(by.xpath("//a[contains(.,'Reference Numbers')]"));
    readonly stopCodeDropDown: ElementFinder = element(by.xpath("(//label[contains(text(),'Stop# Code')]/ancestor::table[contains(@id,'frmRefNbrListing:dtRefNbrList')]//td/select)[1]"));
    readonly typeDropDown: ElementFinder = element(by.xpath("(//label[contains(text(),'Stop# Code')]/ancestor::table[contains(@id,'frmRefNbrListing:dtRefNbrList')]//td/select)[2]"));
    readonly referenceTextBox: ElementFinder = element(by.xpath("(//table[@id='frmRefNbrListing:dtRefNbrList']//td/input)[1]"));
    readonly quantityTextBox: ElementFinder = element(by.xpath("(//table[@id='frmRefNbrListing:dtRefNbrList']//td/input)[2]"));
    readonly weightTextBox: ElementFinder = element(by.xpath("(//table[@id='frmRefNbrListing:dtRefNbrList']//td/input)[3]"));
    readonly volumeTextBox: ElementFinder = element(by.xpath("(//table[@id='frmRefNbrListing:dtRefNbrList']//td/input)[4]"));
    readonly commentsTab: ElementFinder = element(by.xpath("//a[contains(.,'Comments')]"));
    readonly startTime: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:0:schedBegCalendarTime']"));
    readonly endTime: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:stopsList:0:schedEndCalendarTime']"));
    readonly carrierExtension: ElementFinder = element(by.xpath("//span[@id='eomOrderDetail:subCarrierDetailTitle']//parent::div//div"));
    readonly MCSpyGlassIcon: ElementFinder = element(by.xpath("//img[@id='eomOrderDetail:imgCarrierLookup']"));
    readonly searchBydropdown: ElementFinder = element(by.xpath("//select[@id='selectSearchByCriteria']"));
    readonly searchByDropdownOptions: string = "//select[@id='selectSearchByCriteria']//option";
    readonly searchByInputField: ElementFinder = element(by.id("inTxtSarchValue"));
    readonly searchButton: ElementFinder = element(by.xpath("//input[@class='actionLink' and @value='Search']"))
    readonly MCHyperlink: ElementFinder = element(by.xpath("//tbody[@id='carrierTableBody']//a"));
    readonly MCInputField: ElementFinder = element(by.id("eomOrderDetail:inTxtMcNumber"));
    readonly GoToCMSLink: ElementFinder = element(by.id("eomOrderDetail:lnkCMS"));
    readonly fleetDropDown = element(by.xpath("//select[@id='eomOrderDetail:fleetList']"));
    readonly loadedOn = element(by.xpath("//select[@id='eomOrderDetail:stopsList:1:loadedOn']"));
    readonly searchLink = element(by.id("eomOrderDetail:Search"));
    readonly saveChangesButton = element(by.id("eomOrderDetail:saveOrder"));
    readonly continueButton = element(by.xpath("//input[@value='Continue']"));
    readonly stopListDown = "(//select[@id='eomOrderDetail:stopsList:1:department']/option)";

    readonly billToExtention: ElementFinder = element(by.xpath("//span[contains(.,'Bill To')]/following-sibling::div"));
    readonly bookmultipleElement: ElementFinder = element(by.xpath("//input[@value='Book Multiple']"));
    readonly documentsTab: ElementFinder = element(by.xpath("//a[contains(.,'Documents')]"));
    readonly newContactSolicitor: ElementFinder = element(by.xpath("//td/img[contains(@onclick,'SOLICITOR') and contains(@onmouseover,'newcontact')]"));
    readonly newContactBillTo: ElementFinder = element(by.xpath("//td/img[contains(@onclick,'BILLTO') and contains(@onmouseover,'newcontact')]"))
    readonly solicitorFirstNameTextBox: ElementFinder = element(by.xpath("//input[contains(@id,'newSolicitorContactFnm')]"));
    readonly solicitorLastNameTextBox: ElementFinder = element(by.xpath("//input[contains(@id,'newSolicitorContactLnm')]"));
    readonly createButtonOfSolicitor: ElementFinder = element(by.xpath("//input[contains(@value,'Create') and contains(@onclick,'SOLICITOR')]"));
    readonly classificationDropdown = element(by.id("eomOrderDetail:selOrdClassifications"));
    readonly orderDetailExtension = element(by.id("eomOrderDetail:Stopsminimizer"));
    readonly shipperCode = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:Code']"))

    readonly loadText: ElementFinder = element(by.id("eomOrderDetail:precisionLabel"));
    readonly createLoadButton = element(by.id("eomOrderDetail:createOrder"));
    readonly beginingCalenderTime = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:schedBegCalendarTime']"));
    readonly endCalenderTime = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:schedEndCalendarTime']"));
    readonly scheduledAppointmentDate = element(by.id("eomOrderDetail:stopsList:0:schedBegCalendarDate"));
    readonly scheduleAppointmentDateEnd = element(by.xpath("//input[@id='eomOrderDetail:stopsList:1:schedBegCalendarDate']"))
    readonly billToFirstNameTextBox: ElementFinder = element(by.xpath("//input[contains(@id,'newBilltoContactFnm')]"));
    readonly billToLastNameTextBox: ElementFinder = element(by.xpath("//input[contains(@id,'newBilltoContactLnm')]"));
    readonly createButtonOfBillTo: ElementFinder = element(by.xpath("//input[contains(@value,'Create') and contains(@onclick,'BILLTO')]"));
    readonly solicitorSpinner: ElementFinder = element(by.xpath("//img[contains(@id,'solicitorSpinner')]"))
    readonly billToSpinner: ElementFinder = element(by.xpath("//img[contains(@id,'billtoSpinner')]"));
    readonly stopCodeWaitElement: ElementFinder = element(by.xpath("//span[contains(text(),'Reference Number Listing')]"));
    readonly addStopButton = element(by.xpath("//input[@alt='ADD STOP']"))
    readonly dispatchStatus = element(by.xpath("//label[@id='eomOrderDetail:precisionLabel']"));
    readonly closeButton: ElementFinder = element(by.xpath("//a[@title='Close']"));
    public async scheduledAppointmentTimeSet(startTimeValue: string, endTimeValue: string) {
        await this.actions.clearText(this.startTime, "start time clear");
        await this.actions.setText(this.startTime, startTimeValue, "Set appointment start time");
        await this.actions.clearText(this.endTime, "end time clear");
        await this.actions.setText(this.endTime, endTimeValue, "Set appointment End time");
        await this.actions.shortWait("wait after enter text ");
    }
    public async setAppointmentTime(startTimeValue: string, endTimeValue: string) {
        await this.actions.clearText(element(by.id("eomOrderDetail:stopsList:1:schedBegCalendarTime")), "start time clear");
        await this.actions.setText(element(by.id("eomOrderDetail:stopsList:1:schedBegCalendarTime")), startTimeValue, "Set appointment start time");
        await this.actions.clearText(element(by.id("eomOrderDetail:stopsList:1:schedEndCalendarTime")), "end time clear");
        await this.actions.setText(element(by.id("eomOrderDetail:stopsList:1:schedEndCalendarTime")), endTimeValue, "Set appointment End time");
        await this.actions.shortWait("wait after enter text ");
    }
    public async scheduledAppointmentEndTimeSet(startTimeValue: string, endTimeValue: string) {
        await this.actions.clearText(this.beginingCalenderTime, "start time clear");
        await this.actions.setText(this.beginingCalenderTime, startTimeValue, "Set appointment start time");
        await this.actions.clearText(this.endCalenderTime, "end time clear");
        await this.actions.setText(this.endCalenderTime, endTimeValue, "Set appointment End time");
        await this.actions.shortWait("wait after enter text ");
    }
    public async selectValueFormFleetDropdown(value: string) {
        await this.actions.click(this.fleetDropDown, " clicked on Fleet Drop down");
        await this.actions.click(element(by.xpath("//select[@id='eomOrderDetail:fleetList']/option[contains(text(),'" + value + "')]")), "selected " + value + " from fleet dropdown")
    }
    public async selectValueLoadedOnDropdown(value: string) {
        await this.actions.click(this.loadedOn, " clicked on Fleet Drop down");
        await this.actions.click(element(by.xpath("//select[@id='eomOrderDetail:stopsList:1:loadedOn']/option[contains(text(),'" + value + "')]")), "selected " + value + " from fleet dropdown")
    }
    public async selectValueFormStopListDropdown(value: string) {
        await this.actions.click(this.fleetDropDown, " clicked on Fleet Drop down");
        await this.actions.click(element(by.xpath("//select[@id='eomOrderDetail:stopsList:1:department']/option[contains(text(),'" + value + "')]")), "selected " + value + " from fleet dropdown")
    }
    public async selectDropDownsFromDetailsPage(dropDownValue: string) {
        let loadUnloadDropDown: ElementFinder = element(by.xpath("//option[@value='" + dropDownValue + "']"));
        await this.actions.click(loadUnloadDropDown, "unload option");
    }
    public async verifyDispatchedMessage() {
        let text = null;
        try {
            text = await this.actions.getText(this.dispatchStatus, "getting dispatch status")
        } catch (error) {
            console.log("text is not present...");
        }
        return await text;
    }
    public async selectDriverCount(dropDownValue: string) {
        await this.actions.click(element(by.xpath("//select[@id='eomOrderDetail:stopsList:1:driverCountVal']")), "")
        let loadUnloadDropDown: ElementFinder = element(by.xpath("//select[@id='eomOrderDetail:stopsList:1:driverCountVal']/option[@value='" + dropDownValue + "']"));
        await this.actions.click(loadUnloadDropDown, "unload option");
    }
    public async selectHazmatCount(dropDownValue: string) {
        await this.actions.click(element(by.xpath("//select[@id='eomOrderDetail:stopsList:1:hazmatVal']")), "")
        let loadUnloadDropDown: ElementFinder = element(by.xpath("//select[@id='eomOrderDetail:stopsList:1:hazmatVal']/option[@value='" + dropDownValue + "']"));
        await this.actions.click(loadUnloadDropDown, "unload option");
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
    public async verifyClassificationText() {
        let text: string = null
        try {
            text = await this.classificationDropdown.getText();
            console.log("text is ddd " + text)
        } catch (error) {

        }
        return await text;
    }

    public async receiverSuggestedAppointmentEmptyCheck() {
        let stop99SugestedAppointment: ElementArrayFinder = element.all(by.xpath("(//td/label[contains(.,'Suggested Appointment')])[2]/parent::td/parent::tr/following-sibling::tr//input"));
        let stop99SugestedAppointmentFieldsCount = await stop99SugestedAppointment.count();
        for (let i: number = 0; i < stop99SugestedAppointmentFieldsCount; i++) {
            let text: string = await stop99SugestedAppointment.get(i).getAttribute("value");
            console.log("text in side stop99SugestedAppointment" + text);
            if (text !== "") {
                await stop99SugestedAppointment.get(i).clear();

            }
        }
    }

    public async receiverCustomerRequestedEmptyCheck() {
        let stop99CustomerRequested: ElementArrayFinder = element.all(by.xpath("//td/label[contains(.,'Customer Requested')]/parent::td/parent::tr/following-sibling::tr//input"));
        let stop99CustomerRequestedFieldsCount = await stop99CustomerRequested.count();
        for (let i: number = 0; i < stop99CustomerRequestedFieldsCount; i++) {
            let text: string = await stop99CustomerRequested.get(i).getAttribute("value");
            console.log("text in side stop99CustomerRequested" + text)
            if (text !== "") {
                await stop99CustomerRequested.get(i).clear();
            }
        }
    }

    public async loadDetailsClick() {
        await this.actions.shortWait("wait after enter text ");
        await this.actions.click(this.loadDetailsExtention, "Click on load details extention");
    }

    public async monitorsValueSelection(name: string) {
        await this.actions.shortWait("wait after enter text ");
        let monitorDropDown: string = "(//label[contains(.,'Monitors')]/parent::td/parent::tr/parent::tbody/parent::table/parent::td/parent::tr/following-sibling::tr//select/option)"
        await this.actions.selectByValue(monitorDropDown, name, "Monitors value selection");
    }

    public async referenceNumbersTabClick() {
        await this.actions.shortWait("wait after enter text ");
        await this.actions.click(this.referenceNumberTab, "Click on reference number tab");
    }

    public async selectAnyValueFromStopCodeDropDown(value: string) {
        await this.actions.shortWait("wait after enter text ");
        await this.actions.waitUntilElementVisible(this.stopCodeWaitElement, '')
        await this.actions.click(this.stopCodeDropDown, "Click on stop Code DropDown");
        let stopCodeDropDownOptions: string = "(//label[contains(text(),'Stop# Code')]/ancestor::table[contains(@id,'frmRefNbrListing:dtRefNbrList')]//td/select)[1]/option";
        await this.actions.selectByValue(stopCodeDropDownOptions, value, "stop code any value selection")
    }

    public async typeValueSelection(value: string) {
        await this.actions.shortWait("wait after enter text ");
        let typeOptions: string = "(//label[contains(text(),'Stop# Code')]/ancestor::table[contains(@id,'frmRefNbrListing:dtRefNbrList')]//td/select)[2]/option"
        await this.actions.selectByValue(typeOptions, value, "Monitors value selection");
    }

    public async setNewreferencFields(referenceNumber: string, quantity: string, weight: string, volume: string) {
        await this.actions.shortWait("wait after enter text ");
        await this.actions.setText(this.referenceTextBox, referenceNumber, "Set referenceNumber");
        await this.actions.setText(this.quantityTextBox, quantity, "Set quantity");
        await this.actions.setText(this.weightTextBox, weight, "Set weight");
        await this.actions.setText(this.volumeTextBox, volume, "Set volume");
    }

    public async commentsTabClick() {
        await this.actions.click(this.commentsTab, "Click on comments tab");

    }

    public async clickCarrierDetails() {
        await this.actions.mediumWait("wait after enter text ");
        await this.actions.click(this.carrierExtension, "Click on carrier extention");
    }

    public async clickMCSpyGlassIcon() {
        await this.actions.click(this.MCSpyGlassIcon, "Click MC Spy glass icon");
    }

    public async setSearchByDropdown(valuetoSelect: string) {
        await this.actions.click(this.searchBydropdown, "Click serach By dropdown");
        await this.actions.selectByValue(this.searchByDropdownOptions, valuetoSelect, "Selecting value to select by dropdown");
    }

    public async setSearchByInputField(textToEnter: string) {
        await this.actions.clearText(this.searchByInputField, "Clearing input field");
        await this.actions.setText(this.searchByInputField, textToEnter, "Entering input value");
    }
    public async clickContinueButton() {
        try {
            if (await this.continueButton.isDisplayed()) {
                await this.continueButton.click();
            }
        } catch (error) {

        }
    }
    public async verifyLoadSuccessMessage() {
        let message: string = null;
        let xpath = element(by.xpath("//td[text()='	Load updated successfully  ']"));
        try {
            if (await xpath.isDisplayed()) {
                message = await xpath.getText();
            }
        } catch (error) {
            console.log("sucess load message error " + error);
        }
        return await message;
    }
    public async clickCarrierSearchButton() {
        await this.actions.click(this.searchButton, "Clicking Search Button");
    }

    public async clickMCHyperlink() {
        await this.actions.click(this.MCHyperlink, "Clicking on the MC Hyperlink");
    }

    public async getMCInputField() {
        return await this.MCInputField.getAttribute("value");
    }

    public async clickGoToCMSLink() {
        await this.actions.click(this.GoToCMSLink, "Clicking on the CMS Link")
    }
    public async billToClick() {
        await this.actions.click(this.billToExtention, "Click on bill to extention");
    }

    public async billToClickAndAddNewSolicitor() {
        if (this.newContactSolicitor.isDisplayed()) {
            this.clickOnNewContactSolicitor()
            this.newContactSolicitorDetails("Mr", "Tom", "CRUISE")
        }
        else {
            await this.actions.click(this.billToExtention, "Click on bill to extention");
            this.clickOnNewContactSolicitor()
            this.newContactSolicitorDetails("Mr", "Tom", "CRUISE")
        }
    }

    public async bookMultipleClick() {

        await this.actions.click(this.bookmultipleElement, "book multiple click");

    }
    public async documentsTabClick() {
        await this.actions.click(this.documentsTab, "Click on comments tab");
    }

    public async clickOnOverRideOrContinueButton(buttonValue: string) {

        let overRideButton: ElementFinder = element(by.xpath("//input[@value='" + buttonValue + "']"));
        let flag: boolean = false;
        try {
            flag = await this.actions.isElementDisplayed(overRideButton, "override button");
        } catch (error) {

        }
        if (flag) {
            await this.actions.click(overRideButton, "Click on OverRide Button");
        }

    }


    public async checkCursherIsOnShipper() {
        let shipperId: ElementFinder = await element(by.xpath("//input[contains(@id,'eomOrderDetail:shipid') and contains(@class,'inputFocusClass')]"));
        await this.waitForElementIsVisible(shipperId)
        if (await this.actions.isElementPresent(shipperId, 'shipperId focused or not')) {
            return true;
        }
        else {
            return false;
        }
    }

    public async clickOnNewContactSolicitor() {
        await this.actions.click(this.newContactSolicitor, "clickOnNewContactSolicitor")
    }
    public async clickOnNewContactBillto() {
        await this.actions.click(this.newContactBillTo, "clickOnNewContactBillto");
    }
    public async newContactSolicitorDetails(mrOrMrsValue: string, firstName: string, lastName: string) {
        let prefixOptions: string = "//select[contains(@id,'newSolicitorContactPfx')]/option";
        await this.actions.selectByValue(prefixOptions, mrOrMrsValue, 'selecting Mr orMrs of newcontact solicitor')

        await this.actions.clearText(this.solicitorFirstNameTextBox, 'solicitorFirstNameTextBox clear text')
        await this.actions.clearText(this.solicitorLastNameTextBox, 'solicitorFirstNameTextBox clear text')

        await this.actions.setText(this.solicitorFirstNameTextBox, firstName, "Set weight");
        await this.actions.setText(this.solicitorLastNameTextBox, lastName, "Set volume");

    }
    public async newContactBillToDetails(mrOrMrsValue: string, firstName: string, lastName: string) {
        let prefixOptions: string = "//select[contains(@id,'newBilltoContactPfx')]/option";
        await this.actions.selectByValue(prefixOptions, mrOrMrsValue, 'selecting Mr orMrs of newcontact solicitor')
        await this.actions.clearText(this.billToFirstNameTextBox, 'solicitorFirstNameTextBox clear text')
        await this.actions.clearText(this.billToLastNameTextBox, 'solicitorFirstNameTextBox clear text')
        await this.actions.setText(this.billToFirstNameTextBox, firstName, "first name set ");
        await this.actions.setText(this.billToLastNameTextBox, lastName, "lastname set");

    }
    public async clickOncreateSolicitorContact() {

        await this.actions.click(this.createButtonOfSolicitor, "Click on OverRide Button");
        await this.actions.waitUntilElementInVisible(this.solicitorSpinner, "solicitor spinner invisible")
    }
    public async clickOncreateBilltoContact() {

        await this.actions.click(this.createButtonOfBillTo, "Click on OverRide Button");
        await this.actions.waitUntilElementInVisible(this.billToSpinner, "billto spinner invisible");

    }
    public async setScheduleAppointmentDate(day) {
        try {
            await this.actions.waitUntilElementClickable(this.scheduledAppointmentDate, "clear text")
            await this.actions.clearText(this.scheduledAppointmentDate, "clear text");
            let date = await this.futureDate(day);
            await this.actions.setText(this.scheduledAppointmentDate, date, "set date");
        } catch (error) {
            console.log("error is " + error);
        }

    }
    public async setAppointmentDate(day) {
        try {
            await this.actions.waitUntilElementClickable(element(by.id("eomOrderDetail:stopsList:1:schedBegCalendarDate")), "clear text")
            await this.actions.clearText(element(by.id("eomOrderDetail:stopsList:1:schedBegCalendarDate")), "clear text");
            let date = await this.futureDate(0);
            await this.actions.setText(element(by.id("eomOrderDetail:stopsList:1:schedBegCalendarDate")), date, "set date");
        } catch (error) {
            console.log("error is " + error);
        }

    }

    public async setScheduleAppointmentDateEnd() {
        await this.actions.clearText(this.scheduleAppointmentDateEnd, "clear text");
        let date = await this.futureDate(2);
        console.log("date is... " + date);
        await this.actions.setText(this.scheduleAppointmentDateEnd, date.trim(), "set date");
    }
    public async loadNumber() {
        let successMessage: string = null;
        let loadNumber: string = null;
        let load: string = null;
        try {
            await this.actions.waitUntilElementVisible(this.loadText, "Load Number");
            successMessage = await this.actions.getText(this.loadText, "Load Number");
            let start = successMessage.search('L')
            let end = successMessage.search('status');
            loadNumber = successMessage.substring(start, end).trim();
            load = loadNumber.substring(5, loadNumber.length)
        } catch (error) {
            console.log("sucessmesage is not displayed" + error);
        }

        return load;
    }

    public async verifyReferenceTab() {
        let reference = element(by.xpath("//span[@id='frmRefNbrListing:refNbrDetailsTitle']"));
        return await this.actions.getText(reference, "Reference");
    }



    public async setDropDownBesideNumberOfCopies(optionToSelect: string) {
        let dropdown = "//select[@id='frmPickupDate:somBookMultipleTypes']//option";
        await this.actions.selectByValue(dropdown, optionToSelect, "Selecting option");
    }



    public async acceptingAlert() {
        try {
            let EC = protractor.ExpectedConditions;
            if (await browser.wait(EC.alertIsPresent(), 5000))
                console.log("inside if");
            await this.actions.switchToAlertAndAccept("");
            await this.actions.mediumWait("");

        }
        catch (error) {
            console.log("Alert", error)
        }
    }

    public async switchToFrameLoadNumber() {
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@id='TB_iframeContent']")));
    }

    public async copyingLoadNumbers(loadNumber: string) {
        let xpath = element(by.xpath("//table[@id='eomOfferMail:dtBMProgressData']//tbody/tr[" + loadNumber + "]/td/label"));
        let text = await this.actions.getText(xpath, "text of load number");
        let number = await text.slice(8, 15);
        return number;
    }

    public async clickOnClose() {
        await this.actions.click(this.closeButton, "Clicking on close button");
    }

    public async clickOnSearchTab() {
        await this.actions.waitUntilElementVisible(this.searchLink, "Waiting");
        await this.actions.click(this.searchLink, "Clicking on searchlinkbutton");
    }

    public async switchToDefalutContent() {
        await browser.switchTo().defaultContent();
    }

    public async selectDivisionFromLoadDetails(division: string) {
        await this.actions.waitUntilElementVisible(element(by.xpath("//select[@id='eomOrderDetail:divisionlist']")), "");
        await this.actions.selectByValue("(//select[@id='eomOrderDetail:divisionlist']/option)", division, "");
        await this.waitForPageLoad();
    }
}