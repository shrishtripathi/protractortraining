import { browser, by, element, ExpectedConditions, ElementFinder, ElementArrayFinder, protractor } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from './base.po';
import { CommonFunctions } from '../../utilities/common-functions';
import { String } from 'typescript-string-operations';
import { basename } from 'path';

let commonFunctions = new CommonFunctions();
let EC = protractor.ExpectedConditions;

export class PickupviewPage extends BasePage {

    findEmptyInputBox: ElementFinder;

    divisionParameter: ElementFinder = element(by.xpath("//input[@value='HJBT JBVAN']"));
    areaTypeParameter: ElementFinder = element(by.xpath("//input[@value='MKT']"));;
    areaParameter: ElementFinder = element(by.xpath("//input[@value='DA']"));;
    mdParameter: ElementFinder = element(by.xpath("//input[@value='I']"));;
    orderNumbers: string[] = [null, null];

    readonly areaTypeDropDownParameter: ElementFinder = element(by.xpath("//select[@id='form:type']/option[@value='A']"));
    readonly applicationHotkeys = element(by.xpath("//span[text()='Application Hotkeys:']"));
    readonly orderDetails = element(by.xpath("//div[@name='hotKeyDialogForm:modalPnlPop']//tr//tr//span"));
    readonly closeButton = element(by.xpath("//*[text()='Close']"));
    readonly mileageCalculator = element(by.xpath("//td[text()='Mileage Calculator']"));
    readonly closeMileageCalculator = element(by.xpath("//div[@class='icePnlPop']//tr//tr//td[text()='Mileage Calculator']//parent::tr//a//div"));
    readonly errorMessage = element(by.xpath("//div[@id='innerContent']//li//span"));
    readonly pickUpViewPageTableSearchresults = element(by.xpath("(//table[@id='form:r']/child::tbody/tr[contains(@id,'form:r')])[1]"));
    readonly transitMode = "//table[@id='form:transitMode']//tr/td[{0}]/input";
    readonly division = element(by.xpath("//table[@id='form:division']//tr/td[1]/input"));
    readonly tableRows = element(by.xpath("//table[contains(@class,'iceDatTbl')]//tbody//tr[contains(@class,'iceDatTblRow')]"));
    readonly typeOptionFFeet = element(by.xpath("//select[@id='form:type']/self::select/option[3]")); // F-feet
    readonly typeOptionRC = element(by.xpath("//select[@id='form:type']/self::select/option[4]")); // RC- RampCode
    readonly typeOptionArea = element(by.xpath("//select[@id='form:type']/self::select/option[text()='A - Area']"));
    readonly areaType = element(by.id("form:j_id893"));
    readonly trandMd1 = element(by.id("form:j_id900"));
    readonly trandMd2 = element(by.id("form:j_id901"));
    readonly fleetType = element(by.id("form:j_id947"));
    readonly fleetGroup = element(by.xpath('//*[@id="form:fleetGroup"]'));
    readonly searchButton = element(by.xpath("//button[@id='form:searchButton']"));
    readonly savePrefsButton = element(by.buttonText("Save Prefs"));
    readonly rampCodeFinder = element(by.xpath('//*[@id="form:j_id868"]//img'));
    readonly rampCodeOKButton = element(by.xpath('//*[@id="rampCodeSelector:j_id740"]'));
    readonly rampLocationFinder = element(by.xpath('//*[@id="form:j_id861"]//img'));
    readonly rampLocationBuffalo = element(by.xpath('//*[@id="locationSelector:locationSelectManyCheckbox"]/table/tbody/tr[7]/td/label'));
    readonly rampLocationOKButton = element(by.id("locationSelector:j_id729"));
    readonly utilStatusBox1 = element(by.id("form:j_id904"));
    readonly utilStatusBox2 = element(by.id("form:j_id905"));
    readonly warningText = element(by.xpath('//*[@id="form:j_id845"]/li/span'));
    readonly textBoxCount = element.all(By.xpath("//input[contains(@class,'notesInputText')]"));
    readonly area = element(by.xpath("//table[@id='form:area']//tr/td[1]/input"));
    readonly dropDownType = element.all(by.xpath("//select[@id='form:selectType']//option"));
    readonly text_Division = element(by.xpath("(//table[@id='form:division']//input)[1]"));
    readonly text_AreaType = element(by.xpath("//table[@id='form:areaType']//input"));
    readonly text_TranMD1 = element(by.xpath("//table[@id='form:transitMode']//td[1]/input"));
    readonly text_TranMD2 = element(by.xpath("//table[@id='form:transitMode']//td[2]/input"));
    readonly button_Search = element(by.xpath("//button[contains(text(),'Search')]"));
    readonly recordsCount = element.all(by.xpath("//input[@class='iceInpTxt notesInputText']//ancestor :: tr//ancestor :: table[@id='form:r']/tbody//tr[contains(@class,'iceDatTblRow')]//td[3]//input"));
    readonly type = element(by.xpath("//select[@id='form:type']/option[contains(., 'A - Area')]"));
    readonly loadingIcon = element(by.id("form:j_id748:connection-working"));

    public async waitForResult() {
        let idel: ElementFinder = element(by.xpath("//*[@id='form:j_id748:connection-idle' and @style='visibility: visible;']"));
        browser.wait(EC.presenceOf(idel), 50000)
    };

    public async enterDivision(text) {
        await this.actions.clearText(this.division, 'Clear Division field');
        await this.actions.setText(this.division, text, 'Entering value for Division field');
    }

    public async enterAreaType(text) {
        await this.actions.clearText(this.text_AreaType, 'Clear Area Type field');
        await this.actions.setText(this.text_AreaType, text, 'Entering value for Area Type');
    }

    public async clearAreaType() {
        await this.actions.clearText(this.areaType, 'Clear Area Type field');
    }

    public async enterArea(text) {
        await this.actions.clearText(this.area, 'Clear Area field');
        await this.actions.setText(this.area, text, 'Entering value DA');
    }

    public async clearArea() {
        await this.actions.clearText(this.area, 'Clear Area field');
    }

    public async enterTranMd(text: string) {
        await this.actions.clearText(await this.multiInputText("transitMode", 1), "clear");
        await this.actions.clearText(await this.multiInputText("transitMode", 2), "clear");
        await this.actions.setText(await this.multiInputText("transitMode", 2), text, 'Entering value for Enter Md textbpx');
    }

    public async enterTranMdByIndex(index: string, text: string) {
        let transMdXpath = String.Format(this.transitMode, index);
        let transMdElement: ElementFinder = element(by.xpath(transMdXpath));
        await this.actions.setText(transMdElement, text, 'Entering value for Enter Md textbpx');
    }

    public async cleanTrandMDField() {
        await this.actions.clearText(this.trandMd1, "clear Trand Md field 1");
        await this.actions.clearText(this.trandMd2, "clear Trand Md field 2");
    }

    public numOfRows() {
        this.actions.longWait("Table to load");
        element.all(by.xpath("//table[contains(@class,'iceDatTbl')]//tbody//tr[contains(@class,'iceDatTblRow')]"))
            .then(function (items) {
                expect(items.length).toBeGreaterThan(1);
            });
    }

    public async selectTypeFeet() {
        await this.actions.click(this.typeOptionFFeet, "Type - F Fleet");
    }

    public async selectTypeRC() {
        await this.actions.click(this.typeOptionRC, "Type - RC RampCode");
    }

    public async selectTypeArea() {
        await this.actions.click(this.type, "Type - Area");
    }


    public async enterFleetGroup(text) {
        await this.actions.clearText(this.fleetGroup, "Clear Fleet Group");
        await this.actions.setText(this.fleetGroup, text, "Entering value for Fleet Group textbox ")
    }

    public async clickRampLocation() {
        await this.actions.click(this.rampLocationFinder, "Ramp Location Finder");
    }

    public async selectBuffaloRampLocation() {
        await this.actions.click(this.rampLocationBuffalo, "Select Buffalo Ramp Location");
        await this.actions.click(this.rampLocationBuffalo, "Select Buffalo Ramp Location");
        await this.actions.click(this.rampLocationOKButton, "Click OK");
    }

    public async clickRampCode() {
        await this.actions.click(this.rampCodeFinder, "click on Ramp Code Finder");
    }

    public async clickRampCodeOK() {
        await this.actions.click(this.rampCodeOKButton, "click OK");
    }

    public async enterUtilStatus1(text) {
        await this.actions.clearText(this.utilStatusBox1, 'Clear Util Status field');
        await this.actions.setText(this.utilStatusBox1, text, 'Entering value for Util status textbox');
    }

    public async enterUtilStatus2(text) {
        await this.actions.clearText(this.utilStatusBox2, 'Clear Util Status field');
        await this.actions.setText(this.utilStatusBox2, text, 'Entering value for Util status textbox');
    }

    public async clickSavePrefsButton() {
        await this.actions.click(this.savePrefsButton, "Click Save Prefs button");
    }

    public async checkWarningBox(expectedText) {
        await this.actions.longWait("Warning message to load");
        var actualText = await this.actions.getText(this.warningText, "Warning Textbox");
        expect(actualText).toEqual(expectedText);

    }

    public async enterDataInInputField(textBoxId: String, index: number, textToEnter: string) {
        await this.actions.clearText(this.multiInputText(textBoxId, index), 'Clear input field');
        await this.actions.setText(this.multiInputText(textBoxId, index), textToEnter, 'Entering value in input field');
    }

    public async setAreaType(areaText: string, textToEnter: string) {
        await this.actions.clearText(this.inputText('areaType'), 'ClearArea Type field');
        await this.actions.setText(this.inputText('areaType'), textToEnter, 'Enteringvalue MKT');
    }

    public numberInPagination(index: number): ElementFinder {
        var enabledNumberLinkInPagination = element(by.xpath("//table[@class='iceDatPgrTbl']//a[text()=" + index + "]/parent::td[@class='iceDatPgrScrCol']"));
        return enabledNumberLinkInPagination;
    }

    public inputText(inputTextBox: string): ElementFinder {
        var xpath = element(by.xpath("//table[@id='form:" + inputTextBox + "']//input"));
        return xpath;
    }

    public multiInputText(inputTextBox: String, indexOfInput: number): ElementFinder {
        var xpath = element(by.xpath("//table[@id='form:" + inputTextBox + "']//tr/td[" + indexOfInput + "]/input"));
        return xpath;
    }


    public async findEmptyNoteBox(requiredText: string, tableId: string) {
        console.log("findEmptyInputBox :" + this.findEmptyInputBox);
        var flag = true;
        var numberIndex = 1;
        var undefinedElement: ElementFinder;
        let nextButtonEnabled: ElementFinder = await element(By.xpath("//td/a[text()='Next']"));
        await this.actions.waitUntilElementVisible(nextButtonEnabled, "Untill pagination is displayed");
        console.log('entered in method');
        while (flag) {
            var inputTextBoxSize = await this.textBoxCount.count();
            for (var i = 1; i < inputTextBoxSize; i++) {
                console.log("for loop start");
                var inputNotes = await element(By.xpath("(//input[contains(@class,'notesInputText')])[" + i + "]")).getAttribute("value");
                if (typeof this.findEmptyInputBox === "undefined") {
                    if (inputNotes === "") {
                        console.log("entered in if");
                        await this.actions.setText(element(By.xpath("(//input[contains(@class,'notesInputText')])[" + i + "]")), requiredText, "Entering text in Notes input field");
                        this.findEmptyInputBox = await element(by.xpath("(//input[contains(@class,'notesInputText')])[" + i + "]"));
                        console.log("assigned element:" + this.findEmptyInputBox);
                        flag = false;
                        console.log("entered in if flag val" + flag);
                        break;
                    }
                } else {
                    await this.actions.clearText(this.findEmptyInputBox, "Clearing the text");
                    await this.actions.setText(this.findEmptyInputBox, requiredText, "Entering text in Notes input field");
                    flag = false;
                    break;
                }
                console.log("for loop end");
            }
            console.log("flag val" + flag);
            if (flag) {
                numberIndex = numberIndex + 1;
                console.log("inside if flag val" + flag);
                await commonFunctions.pagination();
                await this.actions.waitUntilElementVisible(this.numberInPagination(numberIndex), "Wait untill element is present");;
            }
        }
    }


    public async getErrorMessage(text: string) {
        await this.actions.moveMouseToElement(this.spanText(text), text);
        await this.actions.waitUntilElementVisible(this.spanText(text), text);
        return await this.actions.getText(this.spanText(text), text);
    }


    public async setSearchParameters(strType: string, strDivison: string, strAreaType: string, strArea: string[], text_TranMD: string) {
        if (strType.length >= 1) {
            await this.actions.SelectByVisibleText(this.dropDownType, strType, "Type");
        }

        if (strDivison.length >= 1) {
            await this.actions.clearText(this.text_Division, "Divison");
            await this.actions.setText(this.text_Division, strDivison, "Divison");
        }

        if (strAreaType.length >= 1) {
            await this.actions.clearText(this.text_AreaType, "AreaType");
            await this.actions.setText(this.text_AreaType, strAreaType, "AreaType");
        }

        if (strArea.length >= 1) {
            for (let i = 0; i < strArea.length; i++) {
                let text_Area: ElementFinder = element(by.xpath("(//table[@id='form:area']//input)[" + (i + 1) + "]"));
                await this.actions.clearText(text_Area, "Areas");
                await this.actions.setText(text_Area, strArea[i], "Areas");
            }
        }

        if (text_TranMD.length >= 1) {
            await this.actions.clearText(this.text_TranMD1, "TranMD1");
            this.actions.shortWait("waiting ..");
            await this.actions.setText(this.text_TranMD2, text_TranMD, "TranMD2");
        }

        this.text_TranMD2.sendKeys(protractor.Key.TAB);
        await this.actions.waitUntilElementVisible(this.button_Search, "Search button");
    }


    public async getOrderNumberFromPickUpScreen(columnHeader1: string, columnHeader2: string) {
        let column1Index = await commonFunctions.getTableIndex('r', columnHeader1);
        console.log("column1Index: " + column1Index);
        let column2Index = await commonFunctions.getTableIndex('r', columnHeader2);
        console.log("column2Index: " + column2Index);
        let orderIndex = await commonFunctions.getTableIndex('r', "ORDER\nNUMBER");
        console.log("orderIndex: " + orderIndex);
        let xpath = "//*[@id='form:r']/tbody/tr[contains(@class,'iceDatTblRow')]";
        let counter: number = 1;
        do {
            await this.actions.waitUntilElementVisible(element(by.xpath("(//*[@id='form:r']/tbody/tr[contains(@class,'iceDatTblRow')])[1]")), "");
            counter++;
        } while (! await element(by.xpath("(//*[@id='form:r']/tbody/tr[contains(@class,'iceDatTblRow')])[1]")).isPresent() && await counter <= 10)
        do {
            let rowCount = await element.all(by.xpath(xpath)).count();
            console.log("tr count " + rowCount);
            for (let i = 1; i <= rowCount; i++) {
                let driverNotes = element(by.xpath(`//*[@id='form:r']/tbody/tr[${i}]/td[${column1Index}]/input`));
                let hazmatValue = element(by.xpath(`//*[@id='form:r']/tbody/tr[${i}]/td[${column2Index}]/div`));
                if (await driverNotes.isPresent() && await driverNotes.getAttribute("value") === "" && await hazmatValue.getText() !== "Y") {
                    let orderXpath = `//*[@id='form:r']/tbody/tr[${i}]/td[${orderIndex}]//a`;
                    console.log("orderXpath : " + orderXpath);
                    let order: string = (await element(by.xpath(orderXpath)).getText()).trim();
                    console.log("order : " + order);
                    return order;
                }
            }
        } while (await commonFunctions.pagination());

        return null;
    }
    public async getOrderNumberFromEmptyBoxes() {
        let orderNumberXpath: ElementArrayFinder = element.all(by.xpath("//tr[contains(@class,'iceDatTblRow')]/td[4]/input[@value='DR']/ancestor::tr/td[3]/input[@value='']/ancestor::tr/td[16]//a[@style='float:left;']"));
        let orderNumber: string = null;
        try {
            do {
                if (await orderNumberXpath.get(0).isPresent()) {
                    await this.actions.waitUntilElementVisible(orderNumberXpath.get(0), "")
                    orderNumber = await orderNumberXpath.get(0).getText();
                    break;
                }
                if (orderNumber !== null) {
                    break;
                }
            } while (await commonFunctions.pagination());
        } catch (error) {
            console.log("error in box " + error);
        }
        return await orderNumber;

    }

    public async getOrderNumberByColumnValues(recordsCount: number, ...args) {

        let records = [];
        let completeXpath = await commonFunctions.getCompleteXpathForHeaders("r", ...args);

        let orderIndex = await commonFunctions.getTableIndex('r', "ORDER\nNUMBER");
        console.log("orderIndex: " + orderIndex);

        do {

            let requiredElement = element(by.xpath(completeXpath));

            if (await requiredElement.isPresent()) {
                let orderXpath = completeXpath + "/td[" + orderIndex + "]//a[@class='iceCmdLnk  iceCmdLnk ordLink']";
                console.log("orderXpath" + orderXpath);
                let orderElements: ElementFinder[] = await element.all(by.xpath(orderXpath));
                for (let i = 0; i < await orderElements.length && records.length < recordsCount; i++) {
                    let order: string = await orderElements[i].getText();
                    console.log("order : " + order);
                    records.push(order);
                }
            }
        } while (records.length < recordsCount && (await commonFunctions.pagination()));

        return records;
    }

    public async selectType() {
        await this.actions.click(this.type, "select the type");
    };

    public async waitForSearchResult() {
        return await browser.wait(EC.not(EC.visibilityOf(this.loadingIcon)), 1000000);
    };

    public async getOrderNumberForOrderSegment(columnHeader1: string, columnHeader1Value: string, columnHeader2, columHeader2Value: string) {

        let column1Index = await commonFunctions.getTableIndex('r', columnHeader1);
        console.log("column1Index: " + column1Index);
        let column2Index = await commonFunctions.getTableIndex('r', columnHeader2);
        console.log("column2Index: " + column2Index);
        let orderIndex = await commonFunctions.getTableIndex('r', "ORDER\nNUMBER");
        console.log("orderIndex: " + orderIndex);
        let colorBoxIndex = await commonFunctions.getTableIndex('r', "WOF\nO/S");
        console.log('colorBoxIndex: ' + colorBoxIndex);

        let xpath = "//*[@id='form:r']/tbody/tr";

        do {

            let rowCount = await element.all(by.xpath(xpath)).count();
            console.log("tr count " + rowCount);
            for (let i = 1; i <= rowCount; i++) {
                let driverNotes = element(by.xpath(`//*[@id='form:r']/tbody/tr[${i}]/td[${column1Index}]/input`));

                if (await driverNotes.isPresent() && await driverNotes.getAttribute("value") == "") {
                    let tCallXpath = `//*[@id='form:r']/tbody/tr[${i}]/td[${column2Index}]/input`;
                    let tCall = await element(by.xpath(tCallXpath)).getAttribute("value");
                    console.log("tCall : " + tCall);
                    if (tCall === "DR") {
                        let orderXpath = `//*[@id='form:r']/tbody/tr[${i}]/td[${orderIndex}]//a`;
                        let order: string = await element(by.xpath(orderXpath)).getText();
                        console.log("order : " + order);
                        let colourBoxXpath: ElementFinder = await element(by.xpath(`//*[@id='form:r']/tbody/tr[${i}]/td[${colorBoxIndex}]//a`));
                        this.actions.click(colourBoxXpath, "Click on Color Box");
                        return order;
                    }
                }
            }

        } while (await commonFunctions.pagination());
        return "";

    }

    public async verifySearchParameters(inputTextBox: String, indexOfInput: String) {
        let xpath = await element(by.xpath("//table[@id='form:" + inputTextBox + "']//tr/td[" + indexOfInput + "]/input"));
        let text = await xpath.getAttribute("value");
        return await text;
    }

    public async hotKeys(keyBoardAction: string) {
        await browser.actions().keyDown(protractor.Key.ALT).sendKeys("" + keyBoardAction + "").keyUp(protractor.Key.ALT).perform();
        await this.actions.shortWait("waiting");
    }

    public async verifyHotKeysPane() {
        await this.actions.scrollToBottomOfThePage("Scrolling to the bottom of the page");
        await this.actions.waitUntilElementVisible(this.applicationHotkeys, '');
        let text = await this.actions.isElementPresent(this.applicationHotkeys, "Application Hotkeys");
        return text;
    }

    public async verifyOrderDetails() {
        await this.actions.waitUntilElementVisible(this.orderDetails, '');
        let text: string = await this.actions.getText(this.orderDetails, "text order details");
        await this.actions.click(this.closeButton, "Clicking Close button");
        await this.actions.waitUntilElementInVisible(this.inProgressImage, '')
        return text;
    }

    public async verifyBrowserClose() {

        let handles: any = await browser.getAllWindowHandles();
        let noOfWindows = await handles.length;
        console.log("noOfWindows", noOfWindows);
        return noOfWindows;
    }

    public async verifyMilageCalculator(data: any) {
        let text = await this.actions.isElementPresent(this.mileageCalculator, "Mileage calculator");
        if (!text) {
            await this.hotKeys(data);
            text = await this.actions.isElementPresent(this.mileageCalculator, "Mileage calculator");
        }
        await this.actions.click(this.closeMileageCalculator, "Clicking Close button");
        await this.waitForActionToComplete();
        return text;
    }

    public async verifyErrorMessage() {
        let text = await this.actions.getText(this.errorMessage, "Please select atleast one order");
        await this.actions.waitUntilElementInVisible(this.inProgressImage, '')
        return text;
    }
    public async verifyParamatersForSearchCriteria(type: string) {
        let text: string = null;
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.areaTypeDropDownParameter, "wait until element visible")
            text = await this.areaTypeDropDownParameter.getText();
        } catch (error) {
            console.log("error is " + error);
        }
        console.log("text is " + text);
        console.log("type is " + type);

        if (await this.actions.isElementDisplayed(this.divisionParameter, "division Paramereter")) {
            if (await this.actions.isElementDisplayed(this.areaTypeParameter, "areaType Paramereter")) {
                if (await this.actions.isElementDisplayed(this.areaParameter, "area Paramereter")) {
                    if (await this.actions.isElementDisplayed(this.mdParameter, "md parameter")) {
                        if (text.trim() === type.trim()) {
                            console.log("fi");
                            flag = await true;
                        }
                    }
                }
            }
        }

        return await flag;
    }
    async clickOnSearchButton() {
        await this.actions.click(this.searchButton, "Search Button");
        await this.waitForResult();
    }
    public async orderNumberForEmptyBox() {
        await this.actions.waitUntilElementVisible(this.pickUpViewPageTableSearchresults, "search results");
        let notesColumnIndex: number = await this.getColumnIndexForEmptyBoxTable("NOTES");
        let tCallColumnIndex: number = await this.getColumnIndexForEmptyBoxTable("T-CALL LOCATION");
        let originColumnIndex: number = await this.getColumnIndexForEmptyBoxTable("Origin Ramp Code");
        let orderColumnIndex: number = await this.getColumnIndexForEmptyBoxTable("Order Number");
        await this.getOrderNumberForEmptyCheckBox(tCallColumnIndex, originColumnIndex, orderColumnIndex);
        console.log(this.orderNumbers);
        console.log("order number" + this.orderNumbers[0]);
        console.log("order number" + this.orderNumbers[1]);


    }
    public async getOrderNumberForEmptyCheckBox(tCallLocation: number, originRampCode: number, requiredColumnIndex: number) {

        let count: number = 0;
        do {
            let emptyBox: ElementFinder = element(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + tCallLocation + "]/input[not(@value='')]/ancestor::tr/td[" + originRampCode + "][not(null)])"));
            let isPresent: boolean = await emptyBox.isPresent();
            if (isPresent) {
                let size: number = await element.all(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + tCallLocation + "]/input[not(@value='')]/ancestor::tr/td[" + originRampCode + "][not(null)])")).count();
                for (let index = 1; index <= size; index++) {
                    let text: string = await element(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + tCallLocation + "]/input[not(@value='')]/ancestor::tr/td[" + originRampCode + "][not(null)]/ancestor::tr/td[" + requiredColumnIndex + "]//a[text()=not(null)])[" + index + "]")).getText();
                    console.log("order number check " + text);
                    console.log("index " + index);
                    if (this.orderNumbers[0] === null) {
                        this.orderNumbers[0] = text;
                        count++;
                    }
                    else {
                        this.orderNumbers[1] = text;
                        count++;
                    }
                    if (count === 2) {
                        break;
                    }
                }
                if (count === 2) {
                    break;
                }

            }
        } while (await this.pagination());
    }

    public async getorderNumbersForEmptyBox(noOfOrder: number) {

        await this.actions.waitUntilElementVisible(this.pickUpViewPageTableSearchresults, "search results");
        let one: number = await this.getColumnIndexForEmptyBoxTable("NOTES");
        let two: number = await this.getColumnIndexForEmptyBoxTable("T-CALL LOCATION");
        let three: number = await this.getColumnIndexForEmptyBoxTable("Origin Ramp Code");
        let four: number = await this.getColumnIndexForEmptyBoxTable("Order Number");
        let five: number = await this.getColumnIndexForEmptyBoxTable("Without Failure");
        await this.getOrderNumbersForEmptyCheckBoxFor3Conditions(two, three, four, five, noOfOrder);
        console.log(this.orderNumbers);
        console.log("order number" + this.orderNumbers[0]);
        console.log("order number" + this.orderNumbers[1]);
    }


    public async getOrderNumbersForEmptyCheckBoxFor3Conditions(tCallLocation: number, originRampCode: number, requiredColumnIndex: number, WOFIndex: number, noOfOrders: number) {

        let count: number = 0;
        let orderArr: string[] = [];
        for (let arrindex = 0; arrindex < noOfOrders; arrindex++) {
            this.orderNumbers[arrindex] = null;
            console.log(this.orderNumbers[arrindex]);

        }
        do {
            let emptyBox: ElementArrayFinder = element.all(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + tCallLocation + "]/input[not(@value='')]/ancestor::tr/td[" + originRampCode + "][not(null)]/ancestor::tr/td[" + WOFIndex + "]//a[@title='Focus Account'])"));
            let isPresent: boolean = await emptyBox.isPresent();
            if (isPresent) {

                let size: number = await element.all(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + tCallLocation + "]/input[not(@value='')]/ancestor::tr/td[" + originRampCode + "][not(null)]/ancestor::tr/td[" + WOFIndex + "]//a[@title='Focus Account'])")).count();
                for (let i = 1; i <= size; i++) {
                    let text: string = await element(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + tCallLocation + "]/input[not(@value='')]/ancestor::tr/td[" + originRampCode + "][not(null)]/ancestor::tr/td[" + WOFIndex + "]//a[@title='Focus Account']/ancestor::tr/td[" + requiredColumnIndex + "]//a[@class='iceCmdLnk  iceCmdLnk ordLink'])[" + i + "]")).getText();
                    console.log("order number check " + text);
                    console.log("index " + i);
                    browser.sleep(10000);
                    for (let index = 0; index < this.orderNumbers.length; index++) {
                        if (this.orderNumbers[index] == null) {
                            this.orderNumbers[index] = text;
                            count++;
                            break;
                        }

                    }
                    if (count === noOfOrders) {
                        break;
                    }
                }
                if (count === noOfOrders) {
                    break;
                }
            }
        } while (await this.pagination());
    }

    public async clickOnOrderNumberLink(rowIndex: number) {
        let firstRowOrderNumber: ElementFinder = element(by.id('form:r:' + rowIndex + ':orderNbr1'));
        let orderNumber: string = await firstRowOrderNumber.getText();
        await this.actions.click(firstRowOrderNumber, "Click On Order Number Link");
        return orderNumber;
    };

    public async switchToNewWindow() {
        let handles = await browser.getAllWindowHandles();
        await this.actions.selectWindow(handles.length - 1, "Switch to new window");
    };

    public async closePopUpAndSwitchToDefaultWindow() {
        let title: string = await browser.getTitle();
        await this.actions.closeCurrentWindow("Close the popup window");
        await this.switchToNewWindow();
        return title;
    };


    public async hoverOverOrderNumberDropDown() {
        let dropDownOrderNumber: ElementFinder = await element(by.xpath("(//table[contains(@id, 'form:r:0:')])[1]"));
        try {
            let toolTip: ElementFinder = await element(by.xpath("//*[@class='icePnlTlTip' and .//text()='ORDER STOPS']"));
            if (await toolTip.isPresent()) {
                console.log("test")
                await browser.executeAsyncScript(`$($x("//*[@class='icePnlTlTip' and .//text()='ORDER STOPS']")).remove();`)
                console.log("test1")
            }
        } catch (error) {
            console.log(error)
        }

        await this.actions.moveMouseToElement(dropDownOrderNumber, "Hover over the same load number hyperlink");
    };

    public async clickOnDropDownOptionInOrderNumber(rowIndex: number, orderNumberDropDownOption: string) {
        let dropDownOrderNumber: ElementFinder = await element(by.xpath("(//table[contains(@id, 'form:r:0:')])[1]"));
        let addViewComments: ElementFinder = await element(by.xpath("//tr[@id='form:r:" + rowIndex + "']//tr[@class='icePnlGrdRow1']//a//span[contains(., '" + orderNumberDropDownOption + "')]"))
        await this.actions.moveMouseToElement(dropDownOrderNumber, '')
        await this.actions.waitUntilElementPresenceOf(addViewComments)
        await this.actions.click(addViewComments, "click On " + orderNumberDropDownOption)
    };

    public async setValueIntoDriverNotesOnPickUpViewWith3Condition(val_tractor: string) {
        await this.actions.waitUntilElementVisible(this.pickUpViewPageTableSearchresults, "search results");
        let one: number = await this.getColumnIndexForEmptyBoxTable("NOTES");
        let tCallLocation: number = await this.getColumnIndexForEmptyBoxTable("T-CALL LOCATION");
        let originRampCode: number = await this.getColumnIndexForEmptyBoxTable("Origin Ramp Code");
        let requiredColumnIndex: number = await this.getColumnIndexForEmptyBoxTable("Order Number");
        let WOFIndex: number = await this.getColumnIndexForEmptyBoxTable("Without Failure");
        do {

            let emptyBox: ElementFinder = element(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + tCallLocation + "]/input[not(@value='')]/ancestor::tr/td[" + originRampCode + "][not(null)]/ancestor::tr/td[" + WOFIndex + "]//a[@title='Focus Account']/ancestor ::tr//input[@class='iceInpTxt notesInputText'])[1]"));
            let isPresent: boolean = await emptyBox.isPresent();
            if (isPresent) {
                await this.actions.setText(emptyBox, val_tractor, "tractor number");
                let text_Order: string = await element(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + tCallLocation + "]/input[not(@value='')]/ancestor::tr/td[" + originRampCode + "][not(null)]/ancestor::tr/td[" + WOFIndex + "]//a[@title='Focus Account']/ancestor ::tr//input[@class='iceInpTxt notesInputText'])[1]/ancestor ::tr/td[" + requiredColumnIndex + "]//a[@class='iceCmdLnk  iceCmdLnk ordLink'][1]"));
                browser.sleep(10000);
                return text_Order;
            }
        } while (await this.pagination());
        return "";
    }

    public async waitForLoading() {
        console.log("loading....")
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.visibilityOf(await element(by.xpath("//*[@class='iceOutConStatInactv']"))), 50000);
    };


    public async clickWhiteColorBoxWithEmptyBox() {
        let orderNumber: string;
        let colorBoxColumnIndex = await commonFunctions.getColumnIndexForSingleHeaderText("r", "WOF\nO/S");
        let pwrDrvrNotesColumnIndex = await commonFunctions.getColumnIndexForSingleHeaderText("r", "PWR/DRVR\nNOTES");
        let colorBox = "//td[" + pwrDrvrNotesColumnIndex + "]/input[@value='']/ancestor::tr/td[" + colorBoxColumnIndex + "]/div"

        await this.waitForLoading();
        do {
            let colorBoxXpath: ElementFinder = element(by.xpath(colorBox));
            if (await colorBoxXpath.isPresent()) {
                await colorBoxXpath.click();
                let orderNumberXpath: ElementFinder = element(by.xpath("//input[@id='form:orderNumber']"));
                await browser.wait(EC.presenceOf(orderNumberXpath), 50000);
                orderNumber = await orderNumberXpath.getAttribute("value")
                console.log(orderNumber);
                return orderNumber;
            }

        } while (await commonFunctions.pagination());
        return "";
    };
}