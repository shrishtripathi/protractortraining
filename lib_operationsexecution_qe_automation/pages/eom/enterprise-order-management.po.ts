

import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder, protractor } from 'protractor';
import { BasePage } from "../base.po";
import { CommonFunctions } from '../../utilities/common-functions';

let commonFunctions = new CommonFunctions();
export class EnterpriseOrderManagementPage extends BasePage {

    readonly confirmButton: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:cancelOrder']"));
    readonly billToCode: ElementFinder = element(by.xpath("//input[@id='eomSearchMain:billto']"));
    readonly check_JBDCS: ElementFinder = element(by.xpath("//label[contains(text(),'HJBT JBDCS')]//input[@checked]"));
    readonly check_JBHA: ElementFinder = element(by.xpath("//label[contains(text(),'HJBT JBHA')]//input[@checked]"));
    readonly check_JBVAN: ElementFinder = element(by.xpath("//label[contains(text(),'HJBT JBVAN')]//input[@checked]"));

    readonly billToCodeTextBox: ElementFinder = element(by.xpath("//input[@id='eomSearchMain:billto']"));
    readonly searchSkeletonButton: ElementFinder = element(by.id("eomSearchMain:advNext"));
    readonly search_option: ElementArrayFinder = element.all(by.xpath("//select[@id='eomSearchMain:baseSearchList']/option"));
    readonly search_value: ElementFinder = element(by.xpath("//input[@id='eomSearchMain:baseSearchVal']"));
    readonly originInputBox: ElementFinder = element(by.id("eomSearchMain:advorigin"));
    readonly destination: ElementFinder = element(by.xpath("//input[@id='eomSearchMain:advDest']"));
    readonly searchLoadsButton: ElementFinder = element(by.id("eomSearchMain:advOrderSearch"));
    readonly searchSkeletons: ElementFinder = element(by.xpath("//input[@id='eomSearchMain:advNext']"));
    readonly jbdcsCheckBox: ElementFinder = element(by.xpath("//input[@value='HJBT JBDCS']"));
    readonly jbhaCheckBox: ElementFinder = element(by.xpath("//input[@value='HJBT JBHA']"));
    readonly jbvanCheckBox: ElementFinder = element(by.xpath("//input[@value='HJBT JBVAN']"));
    readonly stopCodehyperlink: ElementFinder = element(by.xpath("//table[@id='frmOrderApptMaint:lOrderStopsDetailsTable']//tbody[@id='frmOrderApptMaint:lOrderStopsDetailsTableBody']/tr[1]//td[@class='listTdClass'][1]//a"));
    readonly scheduleAppointDate: ElementFinder = element(by.xpath("//input[@id='frmOrderApptMaint:lnfcBeginCalendarDate']"))
    readonly okButton: ElementFinder = element(by.xpath("//input[contains(@value,'OK')]"));
    readonly sucessMessage: ElementFinder = element(by.xpath("//table[@class='successMsg']"));


    textBox: ElementFinder;
    buttonId: ElementFinder;

    readonly searchSkelton: ElementFinder = element(by.id("eomSearchMain:advNext"));


    public async setDataInInputField(inputFieldName: ElementFinder, textToEnter: string) {
        await this.actions.clearText(inputFieldName, "clear Text");
        await this.actions.setText(inputFieldName, textToEnter, "Enter Text");
    }


    public async clickOnEOMButton(type_search: string) {
        let search_skeleton: ElementFinder = element(by.xpath("//input[@id='" + type_search + "']"));
        await this.actions.waitUntilElementVisible(search_skeleton, "waiting");
        await search_skeleton.click();
        await this.waitForPageLoad();
    }

    public async waitTillProcessing(text_load: string) {
        let Object_Processing: ElementFinder = element(by.xpath("//label[text()='" + text_load + "']"));
        await this.actions.waitUntilElementInVisible(Object_Processing, "stop table");
    }

    public async clickOnSaveChangesButton(buttonValue: string) {
        let saveChangesButton: ElementFinder = element(by.xpath("//input[@value='" + buttonValue + "']"));
        await this.actions.click(saveChangesButton, "Click on Save Changes Button");
        let confirmButton: ElementFinder = element(by.xpath("//input[@id='eomOrderDetail:cancelOrder']"));
        await this.actions.waitUntilElementVisible(confirmButton, "")
        if (await confirmButton.isPresent()) {
            await this.actions.click(confirmButton, "");
            await this.actions.waitUntilElementInVisible(confirmButton, "")
        }
    }

    public async verifyLoadIsCanceled() {
        await this.actions.waitUntilElementVisible(element(by.xpath("//label[@id='eomOrderDetail:orderLabel' and contains(text(),'CANCELED')]")), "")
        let counter: number = 1;
        do {
            await this.actions.waitUntilElementPresenceOf(element(by.xpath("//td[contains(text(),'has been canceled')]")), "");
            counter++;
        } while (! await element(by.xpath("//td[contains(text(),'has been canceled')]")).isPresent() && await counter <= 10)
        if (await element(by.xpath("//td[contains(text(),'has been canceled')]")).isPresent()) {
            return true;
        }
        return false;
    }

    public async enterBillToCode(code: string) {
        await this.actions.setText(this.billToCodeTextBox, code, "set text of bill to code text box");

    }
    public async clickSearchSkeletons() {
        await this.actions.click(this.searchSkeletons, "Search Skeletons");
    }

    public async setValuesInDataSpecificSearch(search_Option: string, search_value: string) {
        await this.actions.waitUntilElementVisible(element(by.xpath("(//select[@id='eomSearchMain:baseSearchList']/option)")), "")
        await this.actions.selectByValue("(//select[@id='eomSearchMain:baseSearchList']/option)", search_Option, "select value");
        await this.actions.clearText(this.search_value, "clear search value");
        await this.actions.setText(this.search_value, search_value, "search value");
    }

    public async setValuesCustomerGeographicalSearch(text_Origin: string, text_destination: string) {
        await this.actions.clearText(this.originInputBox, "origin");
        await this.actions.setText(this.originInputBox, text_Origin, "Origin");
        await this.actions.clearText(this.destination, "destination");
        await this.actions.setText(this.destination, text_destination, "Destination");
    }

    public async setSearchRestrictions(val_JBDCS: boolean, val_JBHA: boolean, val_JBVAN: boolean) {

        if (await this.check_JBDCS.isPresent()) {
            if (!val_JBDCS) {
                let check_Box: ElementFinder = element(by.xpath("//label[contains(text(),'HJBT JBDCS')]//input"));
                await this.actions.click(check_Box, "JBDCS");
            }
        } else if (val_JBDCS) {
            let check_Box: ElementFinder = element(by.xpath("//label[contains(text(),'HJBT JBDCS')]//input"));
            await this.actions.click(check_Box, "JBDCS");

        }

        if (await this.check_JBHA.isPresent()) {
            if (!val_JBHA) {
                let check_Box: ElementFinder = element(by.xpath("//label[contains(text(),'HJBT JBHA')]//input"));
                await this.actions.click(check_Box, "JBHA");
            }
        } else if (val_JBHA) {
            let check_Box: ElementFinder = element(by.xpath("//label[contains(text(),'HJBT JBHA')]//input"));
            await this.actions.click(check_Box, "JBHA");

        }

        if (await this.check_JBVAN.isPresent()) {
            if (!val_JBVAN) {
                let check_Box: ElementFinder = element(by.xpath("//label[contains(text(),'HJBT JBVAN')]//input"));
                await this.actions.click(check_Box, "JBVAN");
            }
        } else if (val_JBVAN) {
            let check_Box: ElementFinder = element(by.xpath("//label[contains(text(),'HJBT JBVAN')]//input"));
            await this.actions.click(check_Box, "JBVAN");

        }
    }

    public async enterTextInTextBox(idOftextBox: string, code: string, textBoxLable: string) {
        this.textBox = element(by.id(idOftextBox));
        return await this.actions.setText(this.textBox, code, "Enter Text " + textBoxLable);
    }
    public async loadTenderSearch(labelOfTextBox: string, value: string) {
        this.textBox = await element(by.xpath("//label[contains(text(),'" + labelOfTextBox + "')]/parent::td/parent::tr/following-sibling::tr//input"))
        await this.actions.setText(this.textBox, value, "Enter Code Text " + labelOfTextBox);
    }

    public async clickOnbutton(buttonId: string, buttonText: string) {
        this.buttonId = element(by.id(buttonId))
        return await this.actions.click(this.buttonId, "Click On Button " + buttonText)
    };
    public async clickOnbuttontwice(buttonId: string, buttonText: string) {
        this.buttonId = element(by.id(buttonId));
        await this.actions.click(this.buttonId, "Click On Button " + buttonText);
    };
    public async pageTitle() {
        console.log(await browser.getTitle());
        return await browser.getTitle();
    };

    public async setOrigin(textToEnter: string) {
        await this.actions.clearText(this.originInputBox, "origin");
        await this.actions.setText(this.originInputBox, textToEnter, "Origin");
    }

    public async clickSearchLoadsButton() {
        await this.actions.click(this.searchLoadsButton, "Click search load button");
    }

    public async clickOnLoadNumber() {
        commonFunctions.getCellValueOfEOM("", "Service Type", "Available", "Status", "Load #")
    }

    public async unCheckCheckBox(checkBoxName: string) {
        let xpath = await element(by.xpath("//input[@value='" + checkBoxName + "']"));
        let status = await xpath.getAttribute("checked");
        console.log("status", status);
        if (status == "true") {
            await this.actions.click(xpath, "Click " + xpath + "");
        }
        else {
            console.log("CheckBox is uncheked");
        }
    }

    public async errorMessage() {
        let errorMsgXpath: ElementFinder = element(by.xpath("//table[@class='errorMsg']//td"));
        await this.actions.waitUntilElementPresenceOf(errorMsgXpath, "wait for error message")
        return await this.actions.getText(errorMsgXpath, "get message")
    };

    public async clickOnElementWithId(elementId: string, elementLabel: string) {
        let elementXpath: ElementFinder = element(by.id(elementId));
        await this.actions.click(elementXpath, elementLabel)
    }

    public async selectOptionFromDropDown(dropDownId: string, dropDownOptionName: string) {
        let optionNameXpath: ElementFinder = element(by.xpath("//select[@id='" + dropDownId + "']//option[contains(.,'" + dropDownOptionName + "')]"));
        await this.actions.click(optionNameXpath, "Select Create User Id from Drop Down");
    };

    public async unCheckHjbtCheckBoxes() {
        let checkBoxes = [this.jbdcsCheckBox, this.jbhaCheckBox, this.jbvanCheckBox]
        for (let index = 0; index < 3; index++) {
            let status = await checkBoxes[index].getAttribute("checked");
            console.log("status", status);
            if (status == "true") {
                await this.actions.click(checkBoxes[index], "Clicked on Checkboxes");
            }
            else {
                console.log("CheckBox is uncheked");
            }
        }
    }

    public async skeletonListingTable() {
        try {
            do {
                let rows = await element.all(by.xpath("//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody//tr//td[4]//span"));
                let count = await rows.length;
                console.log("count", count);
                for (let i = 1; i <= count; i++) {
                    let divisionText = await this.actions.getText(element(by.xpath("(//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody//tr//td[4]//span)[" + i + "]")), "Text of division");
                    let modeText = await this.actions.getText(element(by.xpath("(//table[@id='frmSkeletonListing:lSkeletonListingTable']//tbody//tr//td[17]//span)[" + i + "]")), "Text of mode");
                    console.log("divisionText", divisionText)
                    console.log("modeText", modeText)
                    if (divisionText == 'HJBT JBVAN' && modeText == 'TRUCK') {
                        console.log("Inside if")
                        await browser.actions().keyDown(protractor.Key.ALT).sendKeys("2").keyUp(protractor.Key.ALT).perform();
                        break;

                    }
                    else {
                        await browser.actions().sendKeys(protractor.Key.DOWN).perform();
                    }
                }
            } while (await this.paginationForSkeltonListingTable());
        } catch (e) {
            console.log("row not found" + e);

        }

    }


    public async paginationForSkeltonListingTable() {
        let nextIcon: ElementFinder = element(by.xpath("//span[@title='Next Page']"));
        await this.actions.click(nextIcon, "click on next");
        return true;
    }

    public async clickLoadNumber(loadNumber: string) {
        let loadNumberXpath = element(by.xpath("//a[text()='" + loadNumber + "']"));
        await this.actions.click(loadNumberXpath, "Clicking on Load number");
    }

    public async clickOnStopCode() {
        await this.actions.mediumWait("");
        await browser.driver.switchTo().frame(browser.driver.findElement(by.xpath("//iframe[@id='TB_iframeContent']")));
        await this.actions.click(this.stopCodehyperlink, "Clicking on Stop Code");
    }

    public async enterScheduleDate() {
        await this.actions.setText(this.scheduleAppointDate, await this.futureDate(1), "Setting Schedule Appoint Date");
    }

    public async futureDate(daysToAdd: number) {
        let newdate = new Date();
        newdate.setDate(newdate.getDate() + daysToAdd);
        let newmonth = Number(newdate.getUTCMonth()) + 1;
        let requiredDate = (newmonth + '/' + newdate.getUTCDate() + '/' + newdate.getUTCFullYear())
        return requiredDate;
    }

    public async setAppointmentTime(startOrEndTime: string, timeToEnter: string) {
        let xpath = element(by.xpath("//input[@id='frmOrderApptMaint:itxt" + startOrEndTime + "CalendarTime']"));
        await this.actions.clearText(xpath, "Clearing Text");
        await this.actions.setText(xpath, timeToEnter, "Setting Appointment Date");
    }

    public async selectGroup(dropdownName: string, valueToselect: string) {
        let xpath = "//select[@id='frmOrderApptMaint:som" + dropdownName + "']//option";
        await this.actions.selectByValue(xpath, valueToselect, "Selecting option from group drop down")
    }

    public async setContactName(textField: string, textToEnter: string, ) {
        let xpath = element(by.xpath("//input[@id='frmOrderApptMaint:" + textField + "']"))
        await this.actions.setText(xpath, textToEnter, "Entering Contact and Reason code")
    }

    public async clickOnOkButton() {
        await this.actions.click(this.okButton, "Clicking on ok button");
    }

    public async verifySucessMessage() {
        await this.actions.waitUntilElementVisible(this.sucessMessage, "Waiting");
        return await this.actions.getText(this.sucessMessage, "");
    }

}