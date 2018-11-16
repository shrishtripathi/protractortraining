import { protractor, ElementFinder, element, by, ElementArrayFinder, browser } from 'protractor';
import { BasePage } from '../base.po';

export class DwellPage extends BasePage {
    readonly notasgnRadioButton: ElementFinder = element(by.xpath("//input[@value='NOTASGN']"));
    readonly searchButton: ElementFinder = element(by.xpath("//button[text()='Search']"));
    readonly divisionDropdown: ElementFinder = element(by.id("form:division"));
    readonly divisionDropdownOptions: ElementArrayFinder = element.all(by.xpath("//select[@id='form:division']/option"));
    readonly transitModeDropdown: ElementFinder = element(by.id("form:division"));
    readonly result = element(by.id("form:summaryTable:0:priorityNumber"));
    readonly searchResult = element(by.xpath("//input[contains(@id,'form:loadDetailsPrenotesTable:0')]"));
    readonly viewReferenceButton = element(by.id("form:viewRefNumButton"));
    readonly simonRulesButton = element(by.id("form:viewSimonRulesButton"))
    readonly closeButton = element(by.buttonText("CLOSE"))
    readonly loadNumber = element(by.xpath("(//span[contains(@id,'form:loadDetailsPrenotesTable:0')])[1]"))
    readonly transitModeDropdownOptions: ElementArrayFinder = element.all(by.xpath("//select[@id='form:division']/option"));

    readonly prevWorkActionDropdown: ElementFinder = element(by.id("form:prevWorkAction"));
    readonly prevWorkActionDropdownOptions: ElementArrayFinder = element.all(by.xpath("//select[@id='form:prevWorkAction']/option"));
    readonly loadBilledDropdown: ElementFinder = element(by.id("form:loadBilled"));
    readonly loadBilledDropdownOptions: ElementArrayFinder = element.all(by.xpath("//select[@id='form:loadBilled']/option"));
    readonly receiverNameDropdown: ElementFinder = element(by.id("form:rcvrNm"));
    readonly receiverNameDropdownOptions: ElementArrayFinder = element.all(by.xpath("//select[@id='form:rcvrNm']/option"));
    readonly receiverCityStateDropdown: ElementFinder = element(by.id("form:rcvrCtySt"));
    readonly receiverCityStateDropdownOptions: ElementArrayFinder = element.all(by.xpath("//select[@id='form:rcvrCtySt']/option"));
    readonly loadNumberCheckBox: ElementFinder = element(by.xpath("//table[@id='form:loadDetailsPrenotesTable']//tbody//tr[1]//td[1]//input"));
    readonly viewSimonRulesButton: ElementFinder = element(by.xpath("//button[@id='form:viewSimonRulesButton']"));
    readonly viewApptChangesButton: ElementFinder = element(by.xpath("//button[@id='form:viewApptChangesButton']"));
    readonly viewOrderCommentsButton: ElementFinder = element(by.xpath("//button[@id='form:viewOrderCommentsButton']"));
    readonly viewCCIContactsButton: ElementFinder = element(by.xpath("//button[@id='form:viewCCIContactsButton']"));
    readonly billToCodeDropdown: ElementFinder = element(by.id("form:billTo"));
    readonly receivercodeDropdown: ElementFinder = element(by.id("form:rcvrCd"));
    readonly billToCodeDropdownOptions: ElementArrayFinder = element.all(by.xpath("//select[@id='form:billTo']/option"));
    readonly receivercodeDropdownOptions: ElementArrayFinder = element.all(by.xpath("//select[@id='form:rcvrCd']/option"));
    readonly sectionCodeDropdown: ElementFinder = element(by.id("form:sectionCode"));
    readonly sectionCodeDropdownOptions: ElementArrayFinder = element.all(by.xpath("//select[@id='form:sectionCode']/option"));
    readonly changeDataValue: ElementFinder = element(by.xpath("//table[@id='viewApptChangeDialog:appointmentChangesTable']//tbody//tr[1]//td[1]//span"));
    readonly changeCreatorValue: ElementFinder = element(by.xpath("//table[@id='viewApptChangeDialog:appointmentChangesTable']//tbody//tr[1]//td[2]//span"));
    readonly workActionDropdown: ElementFinder = element(by.id("updateWorkActionDialog:workAction"));
    readonly workActionDropdownOptions: string = "//select[@id='updateWorkActionDialog:workAction']/option";
    readonly subWorkActionDropdown: ElementFinder = element(by.id("updateWorkActionDialog:subWorkAction"));
    readonly subWorkActionDropdownOptions: string = "//select[@id='updateWorkActionDialog:subWorkAction']/option";
    readonly cancelButton: ElementFinder = element(by.xpath("//button[contains(text(),'CANCEL')]"));
    readonly updateWorkActionButton = element(by.id("form:updateWorkActionButton"));
    readonly addOrderCommentButton: ElementFinder = element(by.xpath("//button[@id='form:addCommentButton']"));
    readonly addOrderCommentsInputField: ElementFinder = element(by.xpath("//div[@id='addOrderCommentDialog:addOrderCommentsPanel']//input"));
    readonly updateButton: ElementFinder = element(by.xpath("//button[@id='addOrderCommentDialog:updateAddCommentButton']"));
    readonly cancleButton: ElementFinder = element(by.xpath("//button[@id='addOrderCommentDialog:cancelAddCommentButton']"));
    readonly successMessage: ElementFinder = element(by.xpath("//span[@class='iceOutTxt iceMsgSuccess']"));
    readonly lastButton: ElementFinder = element(by.xpath("//table[@name='viewOrderCommentDialog:orderCommentsTable']//tbody//td[5]//a"));

    public async setOptionFromDropDown(optionsList: string, option: string, dropDownName: ElementFinder) {
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.selectByValue(optionsList, option, "select value");
    }

    public async verifySearchResults(xpath) {
        let flag: boolean = false;

        try {
            await this.waitForActionToComplete();

        } catch (error) {

        }
        try {
            await this.actions.waitUntilElementVisible(xpath, "wait");
            flag = await xpath.isDisplayed();
        } catch (error) {

        }
        return await flag;
    }
    public async verifyLoadNumberPopUpDetails(loadNumber) {
        let flag: boolean = false;
        let xpath = element(by.xpath("//span[contains(text(),'Reference Numbers for " + loadNumber + "')]"))

        try {
            await browser.switchTo().activeElement();
            await this.actions.waitUntilElementVisible(xpath, "wait");
            flag = await xpath.isDisplayed();
        } catch (error) {

        }
        return await flag;
    }
    public async verifysimonNowPopUpDetails(loadNumber) {
        let flag: boolean = false;
        let xpath = element(by.xpath("//span[contains(text(),'Simon Rules for " + loadNumber + "')]"))

        try {
            await browser.switchTo().activeElement();
            await console.log("//span[contains(text(),'Simon Rules for " + loadNumber + "')]")
            await this.actions.waitUntilElementVisible(xpath, "wait");
            flag = await xpath.isDisplayed();
        } catch (error) {

        }
        return await flag;
    }


    public async verifyPrevWorkActionFunctionality(prevWorkActionOption: string) {
        if (await this.prevWorkActionDropdownOptions.count() > 2) {
            await this.click(this.prevWorkActionDropdownOptions.get(2));
            let prevWorkActionColumn = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']/tbody/tr/td[18]/span"));
            for (let i = 0; i < await prevWorkActionColumn.count(); i++) {
                expect(await this.getElementText(await prevWorkActionColumn.get(i))).toBe(prevWorkActionOption);
            }
            await this.click(this.prevWorkActionDropdown);
            await this.click(this.prevWorkActionDropdownOptions.get(0));
            return true;
        }
        return true;
    }

    public async verifyLoadBilledFunctionality() {
        if (await this.loadBilledDropdownOptions.count() > 2) {
            await this.click(this.loadBilledDropdownOptions.get(2));
            await this.waitForActionToComplete();
            let loadBilledColumn = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']/tbody/tr/td[17]/span"));
            for (let i = 0; i < await loadBilledColumn.count(); i++) {
                expect(await this.getElementText(await loadBilledColumn.get(i))).toBe("Y");
            }
            await this.click(this.loadBilledDropdownOptions.get(1));
            await this.waitForActionToComplete();
            for (let i = 0; i < await loadBilledColumn.count(); i++) {
                expect(await this.getElementText(await loadBilledColumn.get(i))).toBe("N");
            }
            return true;
        }
        return true;
    }

    public async verifyReceiverNameFunctionality(receiverName: string) {
        if (await this.receiverNameDropdownOptions.count() > 2) {
            await this.click(this.receiverNameDropdownOptions.get(1));
            await this.waitForActionToComplete();
            let receiverNameColumn = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']/tbody/tr/td[7]/span"));
            for (let i = 0; i < await receiverNameColumn.count(); i++) {
                expect(await this.getElementText(await receiverNameColumn.get(i))).toBe(receiverName);
            }
            return true;
        }
        return true;
    }


    public async verifyReceiverCityStateFunctionality(receivercityState: string) {
        if (await this.receiverCityStateDropdownOptions.count() > 2) {
            await this.click(this.receiverCityStateDropdownOptions.get(1));
            await this.waitForActionToComplete();
            let receivercityStateColumn = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']/tbody/tr/td[8]/span"));
            for (let i = 0; i < await receivercityStateColumn.count(); i++) {
                expect(await this.getElementText(await receivercityStateColumn.get(i))).toBe(receivercityState);
            }
            return true;
        }
        return true;
    }

    public async verifyBillToCodeFunctionality(billToCode: string) {
        if (await this.billToCodeDropdownOptions.count() > 1) {
            await this.click(this.billToCodeDropdownOptions.get(1));
            await this.waitForActionToComplete();
            let billToCodeColumn = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']/tbody/tr/td[5]/span"));
            for (let i = 0; i < await billToCodeColumn.count(); i++) {
                expect(await this.getElementText(await billToCodeColumn.get(i))).toBe(billToCode);
            }
            return true;
        }
        return true;
    }

    public async verifySectionCodeFunctionality(sectionCode: string) {
        if (await this.sectionCodeDropdownOptions.count() > 1) {
            await this.click(this.sectionCodeDropdownOptions.get(1));
            await this.waitForActionToComplete();
            let sectionCodeColumn = element.all(by.xpath("//table[@id='form:loadDetailsPrenotesTable']/tbody/tr/td[4]/span"));
            for (let i = 0; i < await sectionCodeColumn.count(); i++) {
                expect(await this.getElementText(await sectionCodeColumn.get(i))).toBe(sectionCode);
            }
            return true;
        }
        return true;
    }

    public async verifyReferenceType() {
        let referenceRows = element.all(by.xpath("//table[@id='viewReferenceNumberDialog:refernceNumbersTable']/tbody/tr"));
        let rows = await referenceRows.count();
        return rows;
    }

    public async verifyReferenceNumber() {
        let referenceNumber = element.all(by.xpath("//table[@id='viewReferenceNumberDialog:refernceNumbersTable']/tbody/tr//td[2]//span"));
        let text = await referenceNumber.count();
        return text;
    }

    public async getColumnIndexOfLoadDetailTable(columnLable) {
        let columnHeaderXpath: ElementArrayFinder = element.all(by.xpath(`//*[@id='form:loadDetailsPrenotesTable:thead']//th`));
        let requiredColumnIndex: number
        for (let index = 1; index < await columnHeaderXpath.count(); index++) {
            if (await columnHeaderXpath.get(index - 1).getText() == columnLable) {
                requiredColumnIndex = index;
                return requiredColumnIndex;
            }
        }
    }

    public async verifyColumnDetails(columnLable, verifyingText) {
        let columnIndex = this.getColumnIndexOfLoadDetailTable(columnLable)
        let rowArray: ElementArrayFinder = element.all(by.xpath(`//tr[ contains(@id,'form:loadDetailsPrenotesTable:')]/td[6]`));
        for (let index = 0; index < await rowArray.count(); index++) {
            console.log("code: " + await this.getElementText(await rowArray.get(index)))
            expect(await this.getElementText(await rowArray.get(index))).toBe(verifyingText);
        }
    }

    public async verifyOrderComments(columnNumber: string) {
        let referenceNumber = element.all(by.xpath("//table[@id='viewOrderCommentDialog:orderCommentsTable']//tbody//tr//td[" + columnNumber + "]"));
        let text = await referenceNumber.count();
        return text;
    }

    public async verifyAppointementChangesColumnsData() {
        let tableHedaerXpath = element.all(by.xpath("//table[@id='viewApptChangeDialog:appointmentChangesTable']//thead//tr//th"));
        console.log("count", await tableHedaerXpath.count())
        let data_Array: string[] = [];
        for (let index = 1; index <= await tableHedaerXpath.count(); index++) {
            let columnText = await this.actions.getText(element(by.xpath("//table[@id='viewApptChangeDialog:appointmentChangesTable']//thead//tr//th[" + index + "]//span")), "Text of columns")
            console.log("columnText", columnText)
            await data_Array.push(columnText);
        }
        return data_Array;
    }

    public async verifyMessage(randomString) {
        let xpath = element(by.xpath("//span[contains(text(),'" + randomString + "')]"));
        return await this.actions.getText(xpath, 'Getting text');

    }
}