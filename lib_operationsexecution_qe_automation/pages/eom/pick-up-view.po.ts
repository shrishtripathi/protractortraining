import { browser, by, element, ExpectedConditions, ElementFinder, ElementArrayFinder } from 'protractor';
import { By } from 'selenium-webdriver';
import { CommonFunctions } from '../../utilities/common-functions';
import { BasePage } from '../base.po';
import { protractor } from '../../node_modules/protractor/built/ptor';

let commonFunctions = new CommonFunctions();
let basePage = new BasePage();
export class PickupviewPage extends BasePage {

    readonly text_Division = element(by.xpath("(//table[@id='form:division']//input)[1]"));
    readonly text_AreaType = element(by.xpath("//table[@id='form:areaType']//input"));
    readonly text_TranMD1 = element(by.xpath("//table[@id='form:transitMode']//td[1]/input"));
    readonly text_TranMD2 = element(by.xpath("//table[@id='form:transitMode']//td[2]/input"));
    readonly dropDownType = element.all(by.xpath("//select[@id='form:selectType']//option"));
    readonly button_Search = element(by.xpath("//button[contains(text(),'Search')]"));
    readonly typeDropDown = element(by.xpath("//select[@id='form:type']"));
    readonly typeDropDownOptions = "//select[@id='form:type']/option";
    readonly pickUpViewPageTableSearchresults = element(by.xpath("(//table[@id='form:r']/child::tbody/tr[contains(@id,'form:r')])[1]"));
    orderNumbers: string[] = [null, null];

    public multiInputText(inputTextBox: String, indexOfInput: number): ElementFinder {
        let xpath = element(by.xpath("//table[@id='form:" + inputTextBox + "']//tr/td[" + indexOfInput + "]/input"));
        return xpath;
    }

    public inputText(inputTextBox: string): ElementFinder {
        let xpath = element(by.xpath("//table[@id='form:" + inputTextBox + "']//input"));
        return xpath;
    }

    public async selectOptionFromDropDown(dropDownOptions: string, dropDownName: ElementFinder, option: string) {
        await this.actions.click(dropDownName, "Click on dropdown");
        await this.actions.selectByValue(dropDownOptions, option, "Select option");
    }

    public async enterDataInInputField(txtBoxId: String, index: number, txtToEnter: string) {
        await this.actions.clearText(this.multiInputText(txtBoxId, index), 'Clear input field');
        await this.actions.setText(this.multiInputText(txtBoxId, index), txtToEnter, 'Entering value in input field');
    }

    public async setAreaType(areaText: string, textToEnter: string) {
        await this.actions.clearText(this.inputText('areaType'), 'ClearArea Type field');
        await this.actions.setText(this.inputText('areaType'), textToEnter, 'Enteringvalue MKT');
    }

    public async findAvailableLoadWithEmptyPowerDriverNotes(columnHeader1: string, columnHeader2: string) {
        let flag = true;
        let numberIndex = 1;
        let column1Index = await commonFunctions.getTableIndex('r', columnHeader1);
        console.log("column1Index: " + column1Index);
        let column2Index = await commonFunctions.getTableIndex('r', columnHeader2);
        console.log("column2Index: " + column2Index);
        let orderIndex = await commonFunctions.getTableIndex('r', "ORDER\nNUMBER");
        console.log("orderIndex: " + orderIndex);
        let xpath = "//*[@id='form:r']/tbody/tr";
        while (flag) {
            let rowCount = await element.all(by.xpath(xpath)).count();
            console.log("tr count " + rowCount);
            for (let i = 1; i <= rowCount; i++) {
                let driverNotes = element(by.xpath(`//*[@id='form:r']/tbody/tr[${i}]/td[${column1Index}]/input`));
                let tCallNotes = element(by.xpath(`//*[@id='form:r']/tbody/tr[${i}]/td[${column2Index}]/input`));
                if (await driverNotes.isPresent() && await driverNotes.getAttribute("value") === "" && await tCallNotes.isPresent() && await tCallNotes.getAttribute("value") === "") {
                    let orderXpath = `//*[@id='form:r']/tbody/tr[${i}]/td[${orderIndex}]//a[@class='iceCmdLnk  iceCmdLnk ordLink']`;
                    console.log("orderXpath : " + orderXpath);
                    let order: string = await element(by.xpath(orderXpath)).getText();
                    console.log("order : " + order);
                    return order;
                }
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
            await this.actions.shortWait("waiting ..");
            await this.actions.setText(this.text_TranMD2, text_TranMD, "TranMD2");
        }

        await this.text_TranMD2.sendKeys(protractor.Key.TAB);
        await this.actions.waitUntilElementVisible(this.button_Search, "Search button");
    }

    public async getColumnIndexForEmptyBoxTable(columnName: any) {
        let columnIndex: number = -1;
        this.actions.mediumWait("waiting...");
        let numberOfColumns: ElementArrayFinder = element.all(by.xpath("(//thead[@id='form:r:thead']/tr/th/abbr)"));
        let size: number = await numberOfColumns.count();
        let index: number = 1;
        try {
            for (index = 1; index <= size; index++) {
                if (await element(by.xpath("(//thead[@id='form:r:thead']/tr/th/abbr)[" + index + "]")).getAttribute("title") === columnName) {
                    columnIndex = index;
                    break;
                }
            }
        }
        catch (err) {
            console.log('---error---for index ' + index);
        }
        return await columnIndex;
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
                    await browser.sleep(5000);
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

   

}