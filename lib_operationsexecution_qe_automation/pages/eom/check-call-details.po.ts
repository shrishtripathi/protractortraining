import { browser, ElementFinder, element, by } from "protractor";
import { BasePage } from "../base.po";
import { By } from "selenium-webdriver";
import { ElementArrayFinder } from "protractor/built/element";
import { protractor } from "protractor";
import { CommonFunctions } from "../../utilities/common-functions";
import { FreightManager2Page } from "./freight-manager-2.po";
import { CustomerPoolPage } from "./customer-pool.po";

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
    readonly refreshButton = element(by.xpath("(//button[text()='Refresh'])[1]"));
    readonly location = element(by.xpath("//input[@id='ccCrD:customerCode']"));
    readonly comment = element(by.xpath("//span[text()='Comment']"));
    readonly trlCode = element(by.xpath("(//td[text()='Trlr/Cntr']/..//input)[1]"));
    readonly trlNumber = element(by.xpath("(//td[text()='Trlr/Cntr']/..//input)[2]"));
    readonly customerNumber = element(by.xpath("//td[text()='Customer']/..//input[1]"));
    readonly locationNumber = element(by.xpath("(//td[text()='Location']/..//input[1])[1]"));
    readonly customerLocation = element(by.xpath("(//td[text()='Location']/..//input[1])[2]"));
    readonly equipmentCode = element(by.xpath("(//label[text()='Trl/Ctr']/parent::td/following-sibling::td/input)[2]"));
    readonly equipmentNumber = element(by.xpath("(//label[text()='Trl/Ctr']/parent::td/following-sibling::td/input)[3]"));
    readonly warningMessage = element(by.xpath("//span[@class='iceMsgWarn']"));
    readonly dispatch = element(by.xpath("//span[contains(text(),'Dispatch')]"));
    readonly arrivalLoaded = element(by.xpath("//span[contains(text(),'Arrival/Loaded')]"));
    readonly arrivalDate = element(by.id("ccCrD:arrivalDate"));
    readonly loadedDate = element(by.xpath("(//label[text()='Loaded Date/Time']/../following-sibling::td/input)[1]"));
    readonly loadedTime = element(by.xpath("(//label[text()='Loaded Date/Time']/../following-sibling::td/input)[2]"));
    readonly unLoadedDate = element(by.xpath("(//label[text()='Unloaded Date/Time']/../following-sibling::td/input)[1]"));
    readonly unLoadedTime = element(by.xpath("(//label[text()='Unloaded Date/Time']/../following-sibling::td/input)[2]"));
    readonly arrivalTime = element(by.xpath("(//input[@id='ccCrD:arrivalDate']/../following-sibling::td/input)[1]"));
    readonly poNbr = element(by.xpath("(//label[text()='PO Nbr']/../following-sibling::td/input)[1]"));
    readonly bolNbr = element(by.xpath("(//label[text()='BOL Nbr']/../following-sibling::td/input)[1]"));
    readonly quantity = element(by.xpath("(//label[text()='Quantity']/../following-sibling::td/input)[1]"));
    readonly weight = element(by.xpath("(//label[text()='Weight']/../following-sibling::td/input)[1]"));
    readonly seal = element(by.xpath("(//label[text()='Seal']/../following-sibling::td/input)[1]"));
    readonly arrivalUnloaded = element(by.xpath("//span[contains(text(),'Arrival/Unloaded')]"));
    readonly pickup = element(by.xpath("(//label[text()='Pickup Trlr/Ctr']/../following-sibling::td/input)[1]"));
    readonly trlNbr = element(by.xpath("(//label[text()='Pickup Trlr/Ctr']/../following-sibling::td/input)[2]"));

    public async verifyCheckCallDetailsPage() {
        await this.actions.mediumWait("meduium wait");
        await this.actions.selectWindow(1, "switching to checkCallDetailsPage");
    }
    public async setTrailerCodeAndNumber(code, number) {
        try {
            let trl = await this.pickup.getAttribute("value");
            let number = await this.trlNbr.getAttribute("value");
            if (trl.length === 0) {
                await this.actions.setText(this.pickup, code, "set code")
            }
            if (number.length === 0) {
                await this.actions.setText(this.trlNbr, number, "set code")
            }
        } catch (error) {

        }

    }
    public async getTodayDateForLoadAndUnLoad() {
        let today = new Date();
        let myDateString;
        today.setDate(today.getDate());
        myDateString = ('0' + (today.getMonth() + 1)).slice(-2) + '' + ('0' + today.getDate()).slice(-2) + '' + today.getFullYear();
        return await myDateString;
    }
    public async enterDriverNumberAndPressEnter(text: string) {

        await this.actions.selectWindow(2, "truck check call");
        let waitElement = await element(by.xpath("//div[@id='copyright']"));

        await this.actions.waitUntilElementPresenceOf(waitElement, "waitElement presence of")

        await this.actions.waitUntilElementVisible(waitElement, "waitElement visible of")

        await this.actions.waitUntilElementClickable(this.enterDriverNumberXpath, 'waitUntilElementClickable')

        console.log("driver number " + text);
        await this.actions.setText(this.enterDriverNumberXpath, text, "Driver Number");
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        console.log("before waitUntilElementVisible");
        this.actions.waitUntilElementVisible(this.destinationXpath, "Destination");
        console.log("After waitUntilElementVisible");
    }

    public async mouseOverToStatus() {
        console.log("mouse over status");
        await this.actions.selectWindow(2, "move to freight manager window");
        await this.actions.moveMouseToElement(this.statusTab, "Status Tab");
    }

    public async hoverToStatus() {
        await this.actions.selectWindow(2, "move to freight manager window");
        await this.actions.moveMouseToElement(this.statusTab, "Status Tab");
    }

    public async setTimeForLoad(minutes: string) {
        let hour = new Date().getHours();
        let time = hour;
        let newtime = null;
        if (time < 10) {
            newtime = '0' + time.toString();
        }
        let actualTime = newtime + "" + minutes;
        return actualTime;
    }

    public async clickSpot() {
        await this.actions.click(this.spot, "spot");
    }

    public async verifyIfStopIsAdded() {
        let stop = null;
        let stopXpath = element(by.xpath("//td[contains(text(),'STOP ADD ON ORDER:')]"))
        try {
            if (await stopXpath.isDisplayed()) {
                stop = await stopXpath.getText();
            }
        } catch (error) {
            console.log("stop is not added");
        }
        return await stop;

    }

    public async clickComment() {
        await this.actions.click(this.comment, "Comment");
    }

    public async enterLocationInPopUp(text: string) {
        await this.actions.setText(this.location, text, "location");
        await browser.actions().sendKeys(protractor.Key.TAB).perform();
    }

    public async clickOnUpdate() {
        await this.actions.click(this.updateButton, "Update Button");
        await this.waitForActionToComplete();
    }

    public async clickUpdateIfNecessary() {
        let count = 0;
        let flag: boolean = false;
        try {
            do {

                try {
                    console.log("test started ... upp");
                    await this.actions.shortWait("wait...");
                    await console.log("woke up")
                    await this.clickOnUpdate();
                    console.log("step 1... passed");
                    flag = await this.actions.isElementDisplayed(this.warningMessage, "update button");
                    console.log("message is present " + flag);
                    count++;
                    if (count == 5) {
                        console.log("count is " + count);
                        break;
                    }
                } catch (error) {
                    flag = false;
                }


            } while (flag);
        } catch (error) {

        }
    }

    public async clickUpdateForComment() {
        let flag: boolean = false;
        let count = 0;
        try {
            do {

                try {
                    await this.actions.shortWait("wait...");
                    await this.clickOnUpdate();
                    flag = await this.actions.isElementDisplayed(this.warningMessage, "update button");
                    console.log("message is present " + flag);
                    count++;
                    if (count < 4) {
                        await this.actions.click(element(by.xpath("//span[text()='Comment']/../following-sibling :: td//div[@class='lnfCloseButton iceCmdLnk']")), "close window");
                        break;
                    }

                } catch (error) {
                    flag = false;
                }


            } while (flag);
        } catch (error) {

        }
    }

    public async clickOnDispatch() {
        await this.actions.click(this.dispatch, "");
    }

    public async clickOnUpdateOnPopup() {
        let check_warning: ElementFinder = element(by.xpath("//span[contains(text(),'UPDATE TO OVERRIDE') or contains(text(),'IF CORRECT CLICK UPDATE')]"));
        do {

            await this.actions.click(this.updateButton, "Update Button");
            await this.waitForActionToComplete();
        } while (await check_warning.isPresent())

        let close_popup: ElementFinder = element(by.xpath("//a[@title='Close Popup']"));
        await this.actions.waitUntilElementInVisible(close_popup, "pop up close");
        try {
            if (await close_popup.isPresent()) {

                await this.actions.longWait("close_popup wait")
                console.log("Aftre wait clickOnUpdateOnPopup()")
            }
        } catch{ return true; }

    }

    public async enterCustomerNumber(customerNumber: string) {
        await this.actions.setText(this.customerNumber, customerNumber, "customer Number");
        await browser.actions().sendKeys(protractor.Key.TAB).perform();
        let loctext: string = await this.actions.getText(this.locationNumber, "location");
        await this.actions.clearText(this.customerLocation, 'clear location')
        await this.actions.setText(this.customerLocation, "FW TX", "location text");
    }

    public async clickOnUpdateButton() {
        await this.actions.shortWait("short_wait");
        await this.actions.click(this.updateButton, "clicked on update Button");
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
        console.log("before-------------------waitTillDispatchWindowLoad---------------")
        await this.actions.waitUntilElementVisible(ele_dispatchWindow, "dispatch");
        console.log("after-------------------waitTillDispatchWindowLoad---------------")
    }

    public async closePopUpWindow() {
        let close_popup: ElementFinder = element(by.xpath("//a[@title='Close Popup']"));

        try {
            if (await close_popup.isPresent()) {
                await close_popup.click();
                let linkHeaderOptions: ElementFinder = await element(by.xpath("//span[text()='Status']"));
                await this.actions.waitUntilElementVisible(linkHeaderOptions, "wait Until status appear")
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


    public async waitTillDispatchCallInfoWindowLoad() {
        let ele_dispatchCallInfo: ElementFinder = element(by.xpath("//span[text()='Dispatch Call Information']"));
        await this.actions.waitUntilElementPresenceOf(ele_dispatchCallInfo, "dispatch cal info presence")

        await this.actions.waitUntilElementVisible(ele_dispatchCallInfo, "dispatch cal info visibility");
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

    public async textboxXpathArrivalLoaded(field_Name: string) {
        let xpath: string = "//label[contains(text(),'" + field_Name + "')]/parent :: td/following-sibling :: td[1]//input[@class='iceInpTxt']";
        return xpath;

    }



    public async setLateReasonDropDown(val_option1: string, val_option2: string) {
        let setLateReasonDropDown1: ElementFinder = element(by.xpath("(//label[contains(text(),'Late Reason')]/parent::td/following-sibling::td/div/select)[1]"));
        let lateReasonDropDown1: ElementFinder = element(by.xpath("(//label[contains(text(),'Late Reason')]"));
        await this.actions.waitUntilElementPresenceOf(lateReasonDropDown1, 'lateReasonDropDown1 visibility');
        await this.actions.waitUntilElementVisible(lateReasonDropDown1, 'lateReasonDropDown1 visibility');
        if (await setLateReasonDropDown1.isPresent()) {
            await this.actions.click(setLateReasonDropDown1, "");
            let optionElement1: ElementFinder = element(by.xpath("(//label[contains(text(),'Late Reason')]/parent::td/following-sibling::td/div/select)[1]/option[contains(text(),'" + val_option1 + "')]"));
            await this.actions.click(optionElement1, "setLateReasonDropDown1");
            await this.actions.waitUntilElementVisible(await element(by.xpath("(//label[contains(text(),'Late Reason')]/parent::td/following-sibling::td/div/select)[2]/option")), "loading");
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
            let check_BillTO: ElementFinder = element(by.xpath("(//fieldset[@class='iceSelOneRb']//input)[1]"));
            if (await check_BillTO.isPresent()) {
                await check_BillTO.click();
                this.waitForActionToComplete();
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

    public async verifyCheckCallHistorySuccessful(transaction_Value: string) {
        let curr_Date: string = await commonFunctions.futureDate(0);
        let record_Dispatch: ElementFinder = element(by.xpath("(//tr[contains(@id,'form:checkCallHistoryTable')])//td[text()='" + transaction_Value + "']/parent :: tr//td[contains(text(),'" + curr_Date + "')]"));
        if (await record_Dispatch.isPresent()) {
            return true;
        }
        return false;
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
}
