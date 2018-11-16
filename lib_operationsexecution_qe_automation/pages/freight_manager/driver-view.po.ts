import { browser, by, element, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';
import { By } from "selenium-webdriver";
import { CommonFunctions } from '../../utilities/common-functions';
import { BasePage } from './base.po';
import { NextRecommendPage } from './next-recommend-po';

let commonFunctions = new CommonFunctions();
let basePage = new BasePage();
let nextRecommendPage = new NextRecommendPage();

export class DriverViewPage extends BasePage {
    findSelectableTractorDriver: ElementFinder;
    readonly object_DriverAlpha: ElementFinder = element(by.xpath("//input[@id='form:driverAlpha']"));
    readonly button_Exit: ElementFinder = element(by.buttonText('Exit'));
    readonly alphaButton = element.all(by.xpath("//button[not(@disabled='disabled') and (text()='Tractor')]"));
    readonly tractorButton = element.all(by.xpath("//button[not(@disabled='disabled') and (text()='Alpha')]"));
    readonly searchResults = element(by.xpath("//table[@id='form:driverViewTable']/tbody/tr"));
    readonly Object_OrderNO = element(by.xpath("//input[@class='iceInpTxt' and @maxlength='7']"));
    readonly tractorNumberButton: ElementFinder = element(by.xpath("//th[@class='iceDatTblColHdr1']/abbr/a[contains(., 'Nbr')]"));

    public tableCell(rowIndex: number, columnIndex: number): ElementFinder {
        var timeListedValue = element(by.xpath("//tr[contains(@class,'iceDatTblRow')][" + rowIndex + "]/td[" + columnIndex + "]/a"));
        return timeListedValue;
    }

    public multiInputTextBox(fieldName: string, index: number): ElementFinder {
        var inputField = element(by.xpath("//*[text()='" + fieldName + "']/parent::td//following::input[" + index + "]"));
        return inputField;
    }

    public headerText(text: string): ElementFinder {
        var headerText = element(by.xpath("//*[@id='breadcrumbs_container']//following::div[text()='" + text + "']"));
        return headerText;
    }

    public async setTextInInputField(fieldName: string, text: string, paramCode: number) {
        await this.actions.clearText(this.multiInputTextBox(fieldName, paramCode), text);
        await this.actions.setText(this.multiInputTextBox(fieldName, paramCode), text, text);
    }

    public async verifyPage(text: string) {
        return await this.actions.getText(this.headerText(text), text);
    }

    public async enterSelectTypeCode(codeName: string, codeIndex: number, codeValue: string) {
        var textBoxCode = await element(by.xpath("(//td[text()='" + codeName + "']/following-sibling::td//input[@type='text'])[" + codeIndex + "]"));
        textBoxCode.clear();
        await this.actions.setText(textBoxCode, codeValue, "Enter Board text in [" + codeIndex + "] text Box");
    }

    public async enterBoardCodes(textBoxId: string, index: number, textToEnter: string) {
        await this.actions.clearText(this.multiInputTextBox(textBoxId, index), 'Clear BoardCode field');
        await this.actions.setText(this.multiInputTextBox(textBoxId, index), textToEnter, 'Entering values into Borad Codes');
    }



    public async selectTimeListedValue(columnName: string, requiredText: string, tableId: string) {
        var columnIndex = await commonFunctions.getTableIndex(tableId, columnName);
        this.actions.waitUntilElementVisible(this.searchResults, "Wait untill element is visible");
        var columnDatalist: string[] = new Array();
        var resultFlag = true;
        while (resultFlag) {
            var columnData = await commonFunctions.getColmnDataByColmnIndex(tableId, columnIndex);
            for (var i = 0; i < columnData.length; i++) {
                if (columnData[i] !== "OFF") {
                    this.actions.click(this.tableCell(i + 1, columnIndex), "Time listed value");
                    resultFlag = false;
                    break;
                }
            }
            if (columnData.length == i) {
                var flag = await commonFunctions.pagination();
                if (!flag) {
                    console.log('No data Found');
                    break;
                }
            }
        }
    }

    public async selectDriverRUnderneathNRColumn(tableId: string, columnName: string) {
        let columnIndex = await commonFunctions.getTableIndex(tableId, columnName);
        await this.actions.waitUntilElementVisible(this.searchResults, "Wait untill element is visible");
        let resultFlag = true;
        let numberIndex = 1;
        let rowIndex;
        while (resultFlag) {
            let columnData = await commonFunctions.getColmnDataByColmnIndex(tableId, columnIndex);
            for (let i = 0; i < columnData.length; i++) {
                console.log("For loop data:" + columnData[i]);
                if (columnData[i] === "R") {
                    console.log("insoide if:" + i + " " + "columnIdex" + columnIndex + ":" + columnData[i]);
                    rowIndex = i + 1;
                    console.log("rowIndex:" + rowIndex);
                    let text: string = await this.tableCell(rowIndex, columnIndex).getText();
                    console.log("text is:" + text);
                    await this.actions.click(this.tableCell(rowIndex, columnIndex), "Click on element");
                    await this.actions.waitUntilElementVisible(this.spanText("Next Load"), "Untill Next Load Text is Visible");
                    console.log("after clicking ");
                    let tractorButton = await nextRecommendPage.selectableTractorButton.count();
                    console.log("tractorButton: " + tractorButton);
                    let alphaButton = await nextRecommendPage.selectableAlphaButton.count();
                    console.log("element:" + alphaButton);
                    if (tractorButton > 0 && alphaButton > 0) {
                        this.findSelectableTractorDriver = await this.tableCell(rowIndex, columnIndex);
                        await this.actions.click(await nextRecommendPage.selectableTractorButton.get(0), "Clicking on Tractor Button");
                        browser.sleep(7000);
                        resultFlag = false;
                        break;
                    } else {
                        console.log("inside else");
                        browser.sleep(2000);
                        await this.actions.click(this.buttonExit, "clicking on exit button ");
                        browser.sleep(5000);
                        await this.actions.waitUntilElementVisible(this.searchResults, "Wait untill element is visible");
                        console.log("inside else end");
                    }
                }
            }
            console.log("resultFlag:" + resultFlag);
            if (resultFlag) {
                console.log("inside paginaton:" + resultFlag);
                numberIndex = numberIndex + 1;
                console.log("inside if flag val" + resultFlag);
                await commonFunctions.pagination();
                await this.actions.waitUntilElementVisible(this.numberInPagination(numberIndex), "Wait untill element is present");;
            }
        }
    }

    public async verifyDriverAlphaTractorButtonsAvailability() {
        let resultFlag: boolean = false;
        this.actions.click(this.findSelectableTractorDriver, "Clicking on element");
        let tractorButton = await nextRecommendPage.unSelectableTractorButton.count();
        console.log("element:" + tractorButton);
        let alphaButton = await nextRecommendPage.unSelectableAlphaButton.count();
        console.log("element:" + alphaButton);
        if (tractorButton > 0 && alphaButton > 0) {
            resultFlag = true;
        } else {
            resultFlag = false;
        }
        return await resultFlag;
    }

    public async getDriverAlphByColumnValues(recordsCount: number, ...args) {

        let records = [];
        let completeXpath = await commonFunctions.getCompleteXpathForHeaders("driverViewTable", ...args);
        let driverAlphaIndex = await commonFunctions.getTableIndex('driverViewTable', "Driver\nAlpha");
        console.log("driverAlphaIndex: " + driverAlphaIndex);

        do {
            let requiredElement = element(by.xpath(completeXpath));
            let isPresent: boolean = await requiredElement.isPresent();
            console.log("isPresent: " + isPresent)
            if (isPresent) {
                let driverAlphaXpath = completeXpath + "/td[" + driverAlphaIndex + "]//span";
                console.log("driverAlphaXpath" + driverAlphaXpath);
                let driverAlphaElements: ElementFinder[] = await element.all(by.xpath(driverAlphaXpath));
                for (let i = 0; i < await driverAlphaElements.length && records.length < recordsCount; i++) {
                    let driverAlpha: string = await driverAlphaElements[i].getText();
                    console.log("driverAlpha : " + driverAlpha);
                    if (driverAlpha.trim() !== "") {
                        records.push(driverAlpha.trim());
                    }
                }
            }
        } while (records.length < recordsCount && (await commonFunctions.pagination()));

        return records;
    }

    public async enterOrderNumber(text_orederNO: any, str_logName: string) {
        await this.actions.clearText(this.Object_OrderNO, "clear order#");
        await this.actions.setText(this.Object_OrderNO, text_orederNO, str_logName);
    }

    public async setValuesInBoardGroup(arr_fields: string[]) {
        console.log("array length : " + arr_fields.length);
        for (let i = 1; i <= arr_fields.length; i++) {
            await this.setTextInInputField("Board/Group", arr_fields[i - 1], i);
        }

    }

    public async waitTillTableGetsLoaded(table_id: string) {
        let table_object: ElementFinder = element(by.xpath("(//table[@id='form:" + table_id + "']//tr[contains(@id,'form:" + table_id + "')])[1]"));
        do {
            await this.actions.shortWait("waiting");
        } while (! await table_object.isPresent())


    }

    public async getAvailableDriverAlphaCode() {
        let column1Index = await commonFunctions.getTableIndex('driverViewTable', "WOF\nO/S");
        let column2Index = await commonFunctions.getTableIndex('driverViewTable', "Order\nNbr");
        let column7Index = await commonFunctions.getTableIndex('driverViewTable', "D\nS");
        let driverAlphaIndex = await commonFunctions.getTableIndex('driverViewTable', "Driver\nAlpha");
        let xpath = "//*[@id='form:driverViewTable']/tbody/tr[contains(@class,'iceDatTblRow')]";
        await this.actions.waitUntilElementVisible(element(by.xpath(xpath)), "")
        do {
            let rowCount = await element.all(by.xpath(xpath)).count();
            for (let i = 1; i <= rowCount; i++) {
                let value_WOF = element(by.xpath(`//*[@id='form:driverViewTable']/tbody/tr[${i}]/td[${column1Index}]//table[1]//div/a`));
                let value_OrderNO = element(by.xpath(`(//*[@id='form:driverViewTable']/tbody/tr[${i}]/td[${column2Index}]//table[1]//span)[1]`));
                let value_DS = element(by.xpath(`//*[@id='form:driverViewTable']/tbody/tr[${i}]/td[${column7Index}]//span`));

                if (await value_WOF.isPresent() === false &&
                    await value_OrderNO.isPresent() === true) {
                    console.log("inside If condition")
                    let driverAlpha = `//*[@id='form:driverViewTable']/tbody/tr[${i}]/td[${driverAlphaIndex}]//span[@class='iceOutTxt']`;
                    let driver_Alpha: string = await element(by.xpath(driverAlpha)).getText();
                    console.log("driver_Alpha text: " + driver_Alpha);
                    return await driver_Alpha;
                }
            }
        } while (await commonFunctions.pagination());

        return "";

    }

    public async enterDriverAlphaValue(text_DriverAlpha: string, str_logName: string) {
        await this.actions.clearText(this.object_DriverAlpha, "clear Driver Alpha");
        await this.actions.setText(this.object_DriverAlpha, text_DriverAlpha, str_logName);

    }

    public async selectSegmentRowOnDriverPreplanPage(val_orderNO: string) {

        await this.actions.longWait("waiting till object loads");
        let ele_order_Segment = element(by.xpath("//a[@class='iceCmdLnk  iceCmdLnk ordLink' and contains(text(),'" + val_orderNO + "')]/ancestor :: tr[contains(@class,'iceDatTblRow')]"));
        if (ele_order_Segment.isDisplayed()) {
            let order_Segment = element(by.xpath("//a[@class='iceCmdLnk  iceCmdLnk ordLink' and contains(text(),'" + val_orderNO + "')]/ancestor :: tr[contains(@class,'iceDatTblRow')]/td[7]"));
            await order_Segment.click();
            return true;
        }
        return false;
    }

    public async clickExitButton() {
        await this.actions.click(this.button_Exit, "Exit");
    }

    public async clickOnTractorNumberButton() {
        await this.actions.click(this.tractorNumberButton, "Click On Tractor Number Button");
        await this.waitForActionToComplete();
    };
    public async getDriverAlphaCode() {//TC_80026 get 2 driver alpha code without Tractor and Trailor Number and 1 with PP and another with Noo PP
        let driverAlphaCode1: string = null;
        let driverAlphaCode2: string = null;
        let tractorNbrCoulmnIndex = await commonFunctions.getMultiHeaderTableIndex("results", "Tractor", "NBR");
        let trailerNbrCoulmnIndex = await commonFunctions.getMultiHeaderTableIndex("results", "Trailer", "NBR");
        let OrderNbrCoulmnIndex = await commonFunctions.getMultiHeaderTableIndex("results", "Order", "NBR");
        let drvrAlphaCoulmnIndex = await commonFunctions.getMultiHeaderTableIndex("results", "DRVR", "ALPHA");

        let drvrAlphaCode1 = "//*[contains(@id,'form:driverViewTable:')]/ancestor::tr/td[" + tractorNbrCoulmnIndex + "][not(.//*/a)]/ancestor::tr/td[" + trailerNbrCoulmnIndex + "][.//span[.//text()=' ']]/ancestor::tr/td[" + OrderNbrCoulmnIndex + "][not(.//*/a)]/ancestor::tr/td[" + drvrAlphaCoulmnIndex + "]"
        let drvrAlphaCode2 = "//*[contains(@id,'form:driverViewTable:')]/ancestor::tr/td[" + tractorNbrCoulmnIndex + "][not(.//*/a)]/ancestor::tr/td[" + trailerNbrCoulmnIndex + "][.//span[.//text()=' ']]/ancestor::tr/td[" + OrderNbrCoulmnIndex + "][.//*/a]/ancestor::tr/td[" + drvrAlphaCoulmnIndex + "]"

        await this.waitForLoading();
        do {
            let unitNBR1Xpath: ElementFinder = element(by.xpath(drvrAlphaCode1));
            let unitNBR2Xpath: ElementFinder = element(by.xpath(drvrAlphaCode2));

            if (await unitNBR1Xpath.isPresent()) {
                driverAlphaCode1 = await unitNBR1Xpath.getText();
            }
            else if (await unitNBR2Xpath.isPresent() && driverAlphaCode1 !== null) {
                driverAlphaCode2 = await unitNBR2Xpath.getText();
                console.log(driverAlphaCode1, driverAlphaCode2)
                return [driverAlphaCode1, driverAlphaCode2]
            }


        } while (await commonFunctions.pagination());
    };

}