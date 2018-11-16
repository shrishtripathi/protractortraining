import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { CommonFunctions } from "../../utilities/common-functions";
import { BasePage } from "../base.po";

let commonFunctions = new CommonFunctions();

export class MultiplePrePlanPage extends BasePage {

    LInk_OrderNumber: ElementFinder;
    table_Segment: ElementArrayFinder;
    deleted_Segment: ElementFinder;
    readonly button_DeleteSegment = element(by.buttonText('Delete Segment'));
    readonly button_AddSegment = element(by.buttonText('Add Segment'));
    readonly button_Update = element(by.buttonText('Update'));
    readonly button_Continue = element(by.buttonText('Continue'));
    readonly tractorTextBox = element(by.xpath("//input[@id='form:tractorNumber']"));
    readonly searchButton = element(by.xpath("//button[contains(text(),'Search')]"));
    readonly addSegment = element(by.xpath("//button[contains(text(),'Add Segment')]"));
    readonly updateButton = element(by.xpath("//button[text()='Update']"));
    readonly verifyUpdateMessage = element(by.xpath("//span[text()='Successfully updated.']"));
    readonly orderNumberTextBox = element(by.xpath("//td[@class='iceDatTblCol1']/input[@class='iceInpTxt']"));

    public async enterTractorNumber(val_TractorNo: any, str_logName: string) {
        var text_TractorNo = await element(by.xpath("//input[@id='form:tractorNumber']"));
        await this.actions.setText(text_TractorNo, val_TractorNo, str_logName);
    }

    public async enterOrderNumber(val_OrderNo: any, str_logName: string) {
        var text_OrderNo = await element(by.xpath("(//abbr[contains(text(),'Order No')]/ancestor :: table/tbody//input[@class='iceInpTxt'])[1]"));
        await this.actions.setText(text_OrderNo, val_OrderNo, str_logName);
    }

    public async ClickAddSegmentButton() {
        await this.actions.click(this.button_AddSegment, "Add Segment");
        await this.actions.longWait("waiting till object loads");
    }

    public async clickUpdateButton() {
        await this.actions.click(this.button_Update, "Update");
        await this.actions.longWait("waiting till object loads");
        await this.checkContinueButtonPopUpClick();
    }

    public async ClickLastSegmentUnderMultiplePreplan() {
        await this.actions.longWait("waiting till object loads");
        this.table_Segment = element.all(by.xpath("//a[@class='iceCmdLnk  iceCmdLnk ordLink']/ancestor::tr[contains(@class,'iceDatTblRow')]"));
        let table_RowCount = await this.table_Segment.count();
        this.LInk_OrderNumber = element(by.xpath("(//a[@class='iceCmdLnk  iceCmdLnk ordLink']/ancestor::tr[contains(@class,'iceDatTblRow')])[" + table_RowCount + "]/td[7]"));
        await this.actions.click(this.LInk_OrderNumber, "Order Number");
        await this.actions.longWait("waiting till object loads");
    }

    public async ClickDeleteSegmentButton() {
        await this.actions.click(this.button_DeleteSegment, "Delete Segment");
        await this.actions.longWait("waiting till object loads");
    }

    public async checkContinueButtonPopUpClick() {
        await this.actions.longWait("waiting...");
        try {
            let checkElement: boolean = await this.button_Continue.isPresent();
            if (checkElement) {
                await this.actions.click(this.button_Continue, "Continue");
                await this.actions.longWait("waiting till object loads");
            } else if (await this.actions.isElementDisplayed(element(by.xpath("//button[text()='YES']")), "")) {
                await this.actions.click(element(by.xpath("//button[text()='YES']")), "click");
            }

        } catch (e) {

        }

    }

    public async VerifySegmentPresence(text_OrderNumber) {
        await this.actions.longWait("waiting till object loads");
        this.deleted_Segment = element(by.xpath("//a[contains(text(),'" + text_OrderNumber + "')]"));
        return await this.actions.isElementPresent(this.deleted_Segment, "segment");
    }

    public async verifyTractorNumberLink(value_TractorNo: string) {
        this.actions.shortWait("waiting..");
        let checkElement: boolean = await element(by.xpath("//a[@class='iceCmdLnk checkCallLinkText iceCmdLnk ordLink' and contains(text(),'" + value_TractorNo + "')]")).isPresent();
        if (checkElement) {
            return true;
        }
        return false;
    }

    public async verifyUserIDUnderAddedSegment() {
        let userID: string = await this.getLoggedInUserID();
        await this.actions.longWait("waiting till object loads");
        this.table_Segment = element.all(by.xpath("//a[@class='iceCmdLnk  iceCmdLnk ordLink']/ancestor::tr[contains(@class,'iceDatTblRow')]"));
        let table_RowCount = await this.table_Segment.count();
        let columnIndex1: number = await commonFunctions.getColumnIndex(" Lst Upd Id");
        let ele_UserID: ElementFinder = element(by.xpath("(//a[@class='iceCmdLnk  iceCmdLnk ordLink']/ancestor::tr[contains(@class,'iceDatTblRow')])[" + table_RowCount + "]/td[" + columnIndex1 + "]"));
        let UpdateduserID: string = await ele_UserID.getText();
        console.log("User ID : " + UpdateduserID);
        expect(userID).toBe(UpdateduserID.toLowerCase());
    }

    public async getLoggedInUserID() {
        let ele_loggedInUser: ElementFinder = element(by.xpath("(//li[@class='mainLink']//div)[5]"));
        let text_LoggedInUserID: string = await ele_loggedInUser.getText();
        console.log("Loged in user : " + text_LoggedInUserID);
        return text_LoggedInUserID;
    }

    async sendDataToTractorTextBox(name) {
        await this.actions.setText(this.tractorTextBox, name, "set text for +" + name);
    }

    async clickOnSearchButton() {
        await this.actions.click(this.searchButton, "Search Button");
    }

    public async verifyTractorNumber(tractorNumber: string) {
        let verifyTractorN: ElementFinder = element(by.xpath("//a[text()='" + tractorNumber + "']"));
        let flag: boolean = false;
        await this.waitForActionToComplete();
        await this.actions.waitUntilElementVisible(verifyTractorN, "verify tractor Number");
        flag = await this.actions.isElementDisplayed(verifyTractorN, "tractor Number");
        return await flag;
    }

    public async verifySuccessMessage() {
        let flag: boolean = false;
        try {
            await this.actions.mediumWait("medium wait");
            if (await this.actions.isElementDisplayed(element(by.xpath("//button[text()='YES']")), "")) {
                await this.actions.click(element(by.xpath("//button[text()='YES']")), "click");
            }
        } catch (error) {
            console.log("error is " + error)
        }
        await this.actions.waitUntilElementVisible(this.verifyUpdateMessage, "Sucess Message.");
        flag = await this.actions.isElementDisplayed(this.verifyUpdateMessage, "Update Message.");
        return await flag;
    }

    async clickOnAAddSegmentButton() {
        await this.actions.click(this.addSegment, "Add Segment Button");
    }

    public async sendOrderNumbers(orderNumbers: string) {
        let flag: boolean = false;
        await this.actions.setText(this.orderNumberTextBox, orderNumbers, "sending order numbers");
        await this.actions.click(this.addSegment, "click on add segment");
        await this.waitForActionToComplete();
        await this.actions.waitUntilElementVisible(element(by.xpath("//tr[contains(@class,' iceRowSel')]/td[3]//a[text()='" + orderNumbers + "']")), "Order table search results");
        flag = await this.actions.isElementDisplayed(element(by.xpath("//tr[contains(@class,' iceRowSel')]/td[3]//a[text()='" + orderNumbers + "']")), "order number");
        return await flag;
    }

    public async clickOnUpdateButton() {
        await this.actions.click(this.updateButton, "Update Button");
    }

    public async verifyOrderSequenceInDropdown(orderNumber: string) {
        let flag: boolean = false;
        await this.actions.click(element(by.xpath("(//tr[contains(@class,'iceRowSel')]//select)[2]")), "select drop down");
        await this.actions.click(element(by.xpath("(//tr[contains(@class,'iceRowSel')]//select)[2]/option[@value=1]")), "selecting value from drop down");
        await this.waitForActionToComplete();
        if (await element(by.xpath("(//tr[contains(@class,'iceRowSel')])[1]/td[3]//a[@class='iceCmdLnk  iceCmdLnk ordLink'][1]")).getText() === orderNumber) {
            flag = true;
        }
        console.log("ver sel");
        return await flag;
    }

}