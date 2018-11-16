import { browser, ElementFinder, element, by } from "protractor";
import { BasePage } from "./base.po";
import { By } from "selenium-webdriver";
import { ElementArrayFinder } from "protractor/built/element";
import { protractor } from "protractor";
import { CommonFunctions } from "../../utilities/common-functions";
import { FreightManager2Page } from "./freight-manager-2.po";
import { CustomerPoolPage } from "../eom/customer-pool.po";


let commonFunctions = new CommonFunctions();
let freightManagerPage = new FreightManager2Page();
let customerPoolPage = new CustomerPoolPage();

export class CheckCallDetailsPage extends BasePage {
    readonly checkCallDetailsPageTitle = element(by.xpath("//label[text()='Check Call History']"));
    readonly enterDriverNumberXpath = element(by.xpath("//label[text()='Tractor']/../following-sibling::td[2]/input"));
    readonly spot = element(by.xpath("//span[text()='Spot']"));
    readonly destinationXpath = element(by.xpath("(//label[text()='Dest']/..)[2]/../following-sibling::td[3]//a/span"));
    readonly statusTab = element(by.xpath("//a/span[text()='Status']"));
    readonly updateButton = element(by.xpath("(//button[text()='Update'])[1]"));
    readonly location = element(by.xpath("//input[@id='ccCrD:customerCode']"));
    readonly comment = element(by.xpath("//span[text()='Comment']"));
    readonly trlCode = element(by.xpath("(//td[text()='Trlr/Cntr']/../td[2]//input[1])[1]"));
    readonly trlNumber = element(by.xpath("(//td[text()='Trlr/Cntr']/../td[2]//input[1])[2]"));
    readonly customerNumber = element(by.xpath("//td[text()='Customer']/..//input[1]"));
    readonly locationNumber = element(by.xpath("(//td[text()='Location']/..//input[1])[1]"));
    readonly customerLocation = element(by.xpath("(//td[text()='Location']/..//input[1])[2]"));
    readonly equipmentCode = element(by.xpath("(//label[text()='Trl/Ctr']/parent::td/following-sibling::td/input)[2]"));
    readonly equipmentNumber = element(by.xpath("(//label[text()='Trl/Ctr']/parent::td/following-sibling::td/input)[3]"));
    readonly warningMessage = element(by.xpath("//span[@class='iceMsgWarn']"));

    async verifyCheckCallDetailsPage() {
        let flag: boolean = false;
        await this.waitForActionToComplete();
        try {
            await this.actions.selectWindow(1, "switching to checkCallDetailsPage");
            await this.actions.waitUntilElementVisible(this.checkCallDetailsPageTitle, "wait for check call details page")
            flag = await this.actions.isElementDisplayed(this.checkCallDetailsPageTitle, "Check Call Details Title");
        } catch (error) {
            console.log("error is " + error)
        }
        return await flag;
    }
    public async commentIfMoreThen50Miles(tcode: string, tnumber: string, customerNumber: string) {
        let notificationMoreThen50MilesElement = element(by.xpath("//span[contains(text(),'more than 50 miles from')]"));
        let displayedStatus: boolean = await this.actions.isElementDisplayed(notificationMoreThen50MilesElement, '')

        if (displayedStatus) {
            await this.mouseOverToStatus();
            await this.clickComment();
            await this.enterTrailerNumber(tcode, tnumber, customerNumber);
            await this.clickUpdateTwice();
        }

    }

    public async clickUpdateTwice() {

        let flag: boolean = false;
        await this.clickOnUpdateButton();
        await browser.sleep(5000);
        try {
            flag = await this.warningMessage.isDisplayed();
            console.log("flag :" + flag);

            if (flag) {
                console.log("update inside if")
                await this.updateButton.click();
                console.log("after click of update 2nd time")
                await browser.sleep(5000);
            }
        } catch{
            console.log("warning not displayed.")
        }

    }

    public async clickOnUpdateButton() {
        await this.actions.shortWait("short_wait");
        await this.actions.click(this.updateButton, "clicked on update Button");
    }
    public async enterTrailerContainerDetailsHandledComment(val_TrlCode: string, val_ContainerNo: string) {
        let check_Error: ElementFinder = element(by.xpath("//span[contains(text(),'is more than 50 miles')]"));
        if (await check_Error.isPresent()) {
            let val_Customer: string = await element(by.xpath("(//label[text()='Orig'])[2]/../parent :: td/following-sibling :: td[3]//a/span")).getText();
            await this.handleCommentPopUp(val_TrlCode, val_ContainerNo);
        }
    }

    public async handleCommentPopUp(val_TrlCode: string, val_ContainerNo: string) {
        await freightManagerPage.hoverOverFM2PageHeaderOption('Status');
        await freightManagerPage.clickHeaderDropDownOption('Comment');
        await this.waitTillDispatchWindowLoad();
        await customerPoolPage.enterDetailsInCommentPopup(val_TrlCode, val_ContainerNo);
        await this.clickOnUpdateOnPopup();

    }
    public async enterDriverNumberAndPressEnter(text: string) {
        await this.actions.selectWindow(1, "truck check call");
        console.log("driver number " + text);
        await this.actions.setText(this.enterDriverNumberXpath, text, "Driver Number");
        console.log("enter...");
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await this.waitForPageLoad();
        await this.waitForActionToComplete();
        this.actions.waitUntilElementVisible(this.destinationXpath, "Destination");
    }
    public async mouseOverToStatus() {
        console.log("mouse over status");
        await this.actions.selectWindow(1, "move to freight manager window");
        await this.actions.moveMouseToElement(this.statusTab, "Status Tab");
    }

    public async clickSpot() {
        await this.actions.click(this.spot, "spot");
    }

    public async clickComment() {
        await this.actions.click(this.comment, "Comment");
    }

    public async enterLocationInspotPopUp(text: string) {
        await browser.switchTo().activeElement();
        await this.actions.setText(this.location, text, "location");
        await browser.actions().sendKeys(protractor.Key.TAB).perform();
    }

    public async clickOnUpdate() {
        await this.actions.click(this.updateButton, "Update Button");
        await this.waitForPageLoad();
        await this.waitForActionToComplete();

    }
    public async clickOnUpdateOnPopup() {
        let check_warning: ElementFinder = element(by.xpath("//span[contains(text(),'UPDATE TO OVERRIDE') or contains(text(),'IF CORRECT CLICK UPDATE') or contains(text(),'CREATE TO OVERRIDE')]"));
        do {
            await this.actions.click(this.updateButton, "Update Button");
            await browser.sleep(10000);
        } while (await check_warning.isPresent())

        let close_popup: ElementFinder = element(by.xpath("//a[@title='Close Popup']"));
        await this.actions.waitUntilElementInVisible(close_popup, "pop up close");
        try {
            if (await close_popup.isPresent()) {
                await browser.sleep(15000);
            }
        } catch{ return true; }

    }

    public async enterTrailerNumber(tcode: string, tnumber: string, customerNumber: string) {
        await this.actions.setText(this.trlCode, tcode, "trl Code");
        await this.actions.setText(this.trlNumber, tnumber, "tNumber");
        await this.actions.setText(this.customerNumber, customerNumber, "customer Number");
        await browser.actions().sendKeys(protractor.Key.TAB).perform();
        let loctext: string = await this.locationNumber.getAttribute("value");
        await console.log("loc text is " + loctext);
        await this.actions.clearText(this.customerLocation, "clear text");
        await this.actions.setText(this.customerLocation, "FW TX", "location text");
    }

    public async enterTractorNumber(text: string) {
        let ele_tractor: ElementFinder = element(by.xpath("//input[@id='form:truckNum']"));
        await this.actions.setText(ele_tractor, text, "tractor");
        await browser.actions().sendKeys(protractor.Key.TAB).perform();
    }

    public async updateAutoDispatch(text: string) {
        let ele_dispatch: ElementFinder = element(by.xpath("//input[@id='form:autoDisp']"));
        let text_dispatch: string = await ele_dispatch.getText();
        if (text_dispatch === "" || text_dispatch === "Y") {
            await this.actions.clearText(ele_dispatch, "Auto disp");
            await this.actions.setText(ele_dispatch, text, "auto disp");
        }
    }

    public async waitTillDispatchWindowLoad() {
        let ele_dispatchWindow: ElementFinder = element(by.xpath("//div[@id='ccCrD:modalPnlPop' and contains(@style,'visibility: visible')]"));
        await browser.sleep(5000);
        await this.actions.waitUntilElementVisible(ele_dispatchWindow, "dispatch");
    }

    public async closePopUpWindow() {
        let close_popup: ElementFinder = element(by.xpath("//a[@title='Close Popup']"));

        try {
            if (await close_popup.isPresent()) {
                await close_popup.click();
                await browser.sleep(5000);
            }
        } catch{ return true; }
    }

    public async clickLastDispatchRowUnderCallHistory() {
        await this.actions.longWait("waiting till object loads");
        let table_History: ElementArrayFinder = element.all(by.xpath("//table[@id='form:checkCallHistoryTable']//tr[contains(@id,'form:checkCallHistoryTable')]"));
        let table_RowCount = await table_History.count();
        let Link_Dispatch: ElementFinder = element(by.xpath("(//table[@id='form:checkCallHistoryTable']//tr[contains(@id,'form:checkCallHistoryTable')])[" + table_RowCount + "]//td[text()='D']"));
        await this.actions.click(Link_Dispatch, "dispatch");
        await this.actions.longWait("waiting till object loads");
        await this.actions.waitUntilElementVisible(element(by.xpath("//span[text()='Dispatch Call Information']")), "call info");
    }

    public async verifyCheckCallHistorySuccessful(transaction_Value: string) {
        let curr_Date: string = await commonFunctions.futureDate(0);
        let record_Dispatch: ElementFinder = element(by.xpath("(//tr[contains(@id,'form:checkCallHistoryTable')])//td[text()='" + transaction_Value + "']/parent :: tr//td[contains(text(),'" + curr_Date + "')]"));
        if (await record_Dispatch.isPresent()) {
            return true;
        }
        return false;
    }
    public async waitTillDispatchCallInfoWindowLoad() {
        let ele_dispatchCallInfo: ElementFinder = element(by.xpath("//span[text()='Dispatch Call Information']"));
        await browser.sleep(5000);
        await this.actions.waitUntilElementVisible(ele_dispatchCallInfo, "dispatch cal info");
    }

    public async updateCityStateCode(val_cityCode: string) {
        let check_textCity: ElementFinder = element(by.xpath("(//strong[text()='Route Update:']/../following-sibling :: div//input[@class='iceInpTxt'])[5]"));
        await this.actions.clearText(check_textCity, "city");
        await this.actions.setText(check_textCity, val_cityCode, "city");

    }

    public async verifyUpdatedCityCodeUnderHistory(val_cityCode: string) {
        await this.actions.longWait("waiting till object loads");
        let table_History: ElementArrayFinder = element.all(by.xpath("//table[@id='form:checkCallHistoryTable']//tr[contains(@id,'form:checkCallHistoryTable')]"));
        let table_RowCount = await table_History.count();
        let Link_Dispatch: ElementFinder = element(by.xpath("(//tr[contains(@id,'form:checkCallHistoryTable')])[" + table_RowCount + "]//td[contains(text(),'" + val_cityCode + "')]"));
        try {
            if (Link_Dispatch.isDisplayed()) {
                return true;
            }
        } catch{
            return false;
        }
    }

    public async enterEquipmentInformation(code: string, eqiupmentNumber: string) {
        await this.actions.setText(this.equipmentCode, code, "equipmentCode");
        await this.actions.setText(this.equipmentNumber, eqiupmentNumber, "equipment Number");
        await browser.actions().sendKeys(protractor.Key.TAB).perform();
    }

    public async enterDetailsInArrivalORLoadedORUnloaded(transaction_Type: string) {
        let date_Value: string = await this.formatDate(-1);
        let arr_Time: any, load_Time: any;
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Arrival Date"))), date_Value, "Arrival date");
        let arrivalTime: ElementFinder = element(by.xpath("//label[contains(text(),'Arrival Date')]/parent :: td/following-sibling :: td[2]//input[@class='iceInpTxt']"));
        if (transaction_Type === "Loaded") {
            await this.actions.setText(arrivalTime, "0100", "arrival time");
        }
        else {
            await this.actions.setText(arrivalTime, "0400", "arrival time");
        }
        await this.actions.click(element(by.xpath(await this.textboxXpathArrivalLoaded("oaded Date"))), "")
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("oaded Date"))), date_Value, "loaded date");
        let loadedTime: ElementFinder = element(by.xpath("//label[contains(text(),'Loaded Date') or contains(text(),'Unloaded Date')]/parent :: td/following-sibling :: td[2]//input[@class='iceInpTxt']"));
        await this.actions.click(loadedTime, "");
        if (transaction_Type === "Loaded") {
            await this.actions.setText(loadedTime, "0130", "Loaded time");
        }
        else {
            await this.actions.setText(loadedTime, "0430", "Loaded time");
        }
        await browser.sleep(3000);
        await this.setLateReasonDropDown("OTHER", "ROAD");
        let BOLNbr: ElementFinder = element(by.xpath(await this.textboxXpathArrivalLoaded("BOL Nbr")));
        if (await BOLNbr.getAttribute('value') == "") {
            await this.actions.setText(BOLNbr, "1", "BOL Nbr");
        }
        if (await element(by.xpath(await this.textboxXpathArrivalLoaded("Quantity"))).getAttribute('value') == "") {
            await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Quantity"))), "1", "Quantity");
        }
        if (await element(by.xpath(await this.textboxXpathArrivalLoaded("Weight"))).getAttribute('value') == "") {
            await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Weight"))), "500", "Weight");
        }
        if (await element(by.xpath(await this.textboxXpathArrivalLoaded("Seal"))).getAttribute('value') == "") {
            await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Seal"))), "1", "Seal");
        }
        let endHub: ElementFinder = element(by.xpath(await this.textboxXpathArrivalLoaded("End Hub")));
        let startHub: ElementFinder = element(by.xpath(await this.textboxXpathArrivalLoaded("Start Hub")));
        if (await endHub.isPresent()) {
            await this.actions.click(endHub, "");
            await this.actions.setText(endHub, (Number(await startHub.getAttribute('value')) + 1).toString(), "end hub");
        }
    }

    public async enterDetailsInArrivalORLoaded() {
        let date_Value: string = await this.formatDate(0);
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Arrival Date"))), date_Value, "Arrival date");
        let arrivalTime: ElementFinder = element(by.xpath("//label[contains(text(),'Arrival Date')]/parent :: td/following-sibling :: td[2]//input[@class='iceInpTxt']"));
        await this.actions.setText(arrivalTime, "0100", "arrival time");
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Loaded Date"))), date_Value, "loaded date");
        let loadedTime: ElementFinder = element(by.xpath("//label[contains(text(),'Loaded Date')]/parent :: td/following-sibling :: td[2]//input[@class='iceInpTxt']"));
        await this.actions.setText(loadedTime, "0130", "Loaded time");
        await browser.sleep(3000);
        await this.setLateReasonDropDown("OTHER", "ROAD");
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Contact"))), "Automation", "Contact");
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Comments"))), "Automation", "Comments");
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("BOL Nbr"))), "1", "BOL Nbr");
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Quantity"))), "1", "Quantity");
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Weight"))), "500", "Weight");
        await this.actions.setText(element(by.xpath(await this.textboxXpathArrivalLoaded("Seal"))), "1", "Seal");

    }

    public async generateArrivalAndLoadTime(hours: number, minutes: number) {
        let d1 = new Date(),
            d2 = new Date(d1);
        let arr_Hour: string;
        await d2.setMinutes(await d1.getMinutes() - minutes);
        console.log("time " + (await d2.getHours()).toString())
        if (((await d2.getHours()).toString()).length < 2) { arr_Hour = "0" + ((await d2.getHours()).toString()) } else { arr_Hour = ((await d2.getHours()).toString()) }
        let arrival_Time: string = (arr_Hour + "00").toString();
        let load_Time: string = (arr_Hour + "30").toString();
        return { arrival_Time, load_Time }
    }


    public async textboxXpathArrivalLoaded(field_Name: string) {
        let xpath: string = "//label[contains(text(),'" + field_Name + "')]/parent :: td/following-sibling :: td[1]//input[contains(@class,'iceInpTxt')]";
        return xpath;

    }
    public async formatDate(futureDate_Val: number) {
        let date: string = await commonFunctions.futureDate(futureDate_Val);
        let re = /\//gi;
        let dateWithOut: string = await date.replace(re, '');
        console.log("date without /:" + dateWithOut);
        return dateWithOut;
    }


    public async setLateReasonDropDown(val_option1: string, val_option2: string) {
        browser.sleep(5000);
        let setLateReasonDropDown1: ElementFinder = element(by.xpath("(//label[contains(text(),'Late Reason')]/parent::td/following-sibling::td/div/select)[1]"));
        if (await setLateReasonDropDown1.isPresent()) {
            await this.actions.click(setLateReasonDropDown1, "");
            let optionElement1: ElementFinder = element(by.xpath("(//label[contains(text(),'Late Reason')]/parent::td/following-sibling::td/div/select)[1]/option[contains(text(),'" + val_option1 + "')]"));
            await this.actions.click(optionElement1, "setLateReasonDropDown1");
            await this.actions.waitUntilElementVisible(element(by.xpath("(//label[contains(text(),'Late Reason')]/parent::td/following-sibling::td/div/select)[2]/option")), "loading");
            let setLateReasonDropDown2: ElementFinder = element(by.xpath("(//label[contains(text(),'Late Reason')]/parent::td/following-sibling::td/div/select)[2]"));
            await this.actions.click(setLateReasonDropDown2, "");
            let optionElement2: ElementFinder = element(by.xpath("(//label[contains(text(),'Late Reason')]/parent::td/following-sibling::td/div/select)[2]/option[contains(text(),'" + val_option2 + "')]"));
            await this.actions.click(optionElement2, "setLateReasonDropDown2")
        }
    }

    public async enterDetailsInTerminate(val_Customer: string) {
        try {
            let start_Hub: ElementFinder = element(by.xpath("(//td[contains(text(),'Hubs')]/following-sibling :: td//input[@class='iceInpTxt'])[1]"));
            let end_Hub: ElementFinder = element(by.xpath("(//td[contains(text(),'End')]/following-sibling :: td//input[@class='iceInpTxt'])[1]"));
            let start_Hub_Value: string = await start_Hub.getAttribute("value");
            await this.actions.setText(end_Hub, start_Hub_Value, "end hub");
            let customer_Input: ElementFinder = element(by.xpath("//td[contains(text(),'Customer')]/parent :: tr//td[1]//input[@class='iceInpTxt']"));
            await this.actions.setText(customer_Input, val_Customer, "customer code");
            await customer_Input.sendKeys(protractor.Key.TAB);
            await browser.sleep(3000);
            let check_BillTO: ElementFinder = element(by.xpath("(//fieldset[@class='iceSelOneRb']//input)[1]"));
            if (await check_BillTO.isPresent()) {
                await check_BillTO.click();
                await browser.sleep(3000);
            }
            let check_BillToReason: ElementFinder = element(by.xpath("//td[contains(text(),'Shipper')]/parent :: tr//input[@class='iceInpTxt']"));
            await this.actions.waitUntilElementVisible(check_BillToReason, "waiting");
            if (await check_BillToReason.isPresent()) {
                await this.actions.setText(check_BillToReason, "Auotmation", "name of shipper");
                await this.actions.setText(element(by.xpath("//td[contains(text(),'TONU')]/parent :: tr//input[@class='iceInpTxt']")), "Automation", "TONU");
            }
        } catch{
            return false;
        }

    }

    //Going through myjbhunt page it will be used
    async verifyCheckCallDetailsPageTestHotKeys() {
        let flag: boolean = false;
        await this.actions.selectWindow(1, "switching to checkCallDetailsPage");
        try {
            await this.actions.waitUntilElementVisible(this.checkCallDetailsPageTitle, "wait for check call details page")
            flag = await this.actions.isElementDisplayed(this.checkCallDetailsPageTitle, "Check Call Details Title");
        } catch (error) {
            console.log("error is " + error)
        }
        return await flag;
    }

    public async  getTimeReducedtoSpecfiedHours(hours: number, minutes: number) {
        let d1 = new Date(),
            d2 = new Date(d1);
        let arr_Hour: string; let arr_Min: string;
        await d2.setHours(await d1.getHours() - hours);
        await d2.setMinutes(minutes);
        if (((await d2.getHours()).toString()).length < 2) { arr_Hour = "0" + ((await d2.getHours()).toString()) } else { arr_Hour = ((await d2.getHours()).toString()) }
        if (((await d2.getMinutes()).toString()).length < 2) { arr_Min = "0" + ((await d2.getMinutes()).toString()) } else { arr_Min = ((await d2.getMinutes()).toString()) }
        let TimeZone: string = (arr_Hour + '' + arr_Min).toString();
        console.log("two hrs reduced time: " + TimeZone);
        return TimeZone;
    }
}
