import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder, protractor } from 'protractor';
import { CommonFunctions } from '../../utilities/common-functions';
import { FreightManager2Page } from './freight-manager-2.po';
import { NextRecommendPage } from './next-recommend-po';
import { BasePage } from '../base.po';

let commonFunctions = new CommonFunctions();
let freightManager2Page = new FreightManager2Page();
let nextRecommendPage = new NextRecommendPage();

export class UnitViewPage extends BasePage {

    textBoxBoardCode: ElementFinder;
    textBoxMonitorCode: ElementFinder;
    statusTab: ElementFinder;
    orderNumber: string = null;
    orderNumbers: string[] = [null, null];
    trailerCode: string = null;
    trailerNumber: string = null;
    destination: string = null;
    destinationCode: string = null;
    spotDriverNumber: string = null;
    driverNumber: string = null;
    readonly chasisPrefix: ElementFinder = element(by.xpath("//tr[@style='display:']//*[text()='Chassis ']/parent::td/input[1]"));
    readonly chasisNumber: ElementFinder = element(by.xpath("//tr[@style='display:']//*[text()='Chassis ']/parent::td/input[2]"));
    readonly buttonSavePrefs = element(by.xpath("//button[@type='submit' and contains(., 'Save Preferences')]"));
    readonly buttonSearchOnFM2 = element(by.buttonText('Search'));
    readonly firstRowSearchResult = element(by.xpath("//tr[@id='form:boardExceptionPageResult:0']"));
    readonly textmessageInfo = element(by.xpath("//span[@id='form:j_id3023']"));
    readonly buttonParameter = element(by.buttonText('Parameter'));
    readonly searchButton = element(by.xpath("//button[contains(text(),'Search')]"));
    readonly truckPreplan = element(by.xpath("//label[text()='Truck Preplans  ']/..//a/span"));
    readonly boardCodesTableTextBoxes = "(//td[text()='Board codes ']/following::table[@class='icePnlGrd']//td/input)";
    readonly trailerCodeXpath = element(by.xpath("//label[text()='Trl/Ctr']/../following-sibling::td[2]/input"));
    readonly trailerNumberXpath = element(by.xpath("//label[text()='Trl/Ctr']/../following-sibling::td[3]/input"));
    readonly destinationXpath = element(by.xpath("(//label[text()='Dest']/..)[2]/../following-sibling::td[3]//a/span"));
    readonly destinationCodeXpath = element(by.xpath("(//label[text()='Dest']/..)[2]/../following-sibling::td[4]//input"));
    readonly enterDriverNumberXpath = element(by.xpath("//label[text()='Tractor']/../following-sibling::td[2]/input"));
    readonly spot = element(by.xpath("//span[text()='Spot']"));
    readonly divisionParameter = element(by.xpath("//input[@value='HJBT JBVAN']"));
    readonly areaTypeParameter = element(by.xpath("//input[@value='MKT']"));
    readonly areaParameter = element(by.xpath("//input[@value='DA']"));
    readonly mdParameter = element(by.xpath("//input[@value='I']"));
    readonly areaTypeDropDownParameter = "(//select[@id='form:type']/option)[2]";
    readonly searchResults = element(by.xpath("//tr[contains(@class,'iceRowSel')]"));
    readonly etaDate = element(by.xpath("(//a[text()='DATE'])[2]"));
    readonly pickUp = element(by.xpath("//span[text()='Pick Up']"));
    readonly chasXpath = element(by.xpath("//label[text()='Chas']/../following-sibling::td[2]/input"));
    readonly unitViewSearchTable = element(by.xpath("(//table[@id='form:results']/tbody/tr[contains(@class,'iceDatTblRow')])[1]"))

    public async SelectType(radioButtonSelectType) {
        let radioButton = element(by.xpath("//input[@type='radio' and @value='" + radioButtonSelectType + "']"));
        await this.actions.click(radioButton, "Click on " + radioButtonSelectType + " Select Type");
    }

    public async clickOnSavePrefsButton() {
        await this.actions.click(this.buttonSavePrefs, "Click on Save Prefs Button")
    }

    public async VerifySavePrefrenceSucessMsg() {
        await this.actions.verifyText(this.textmessageInfo, "Set prefrence message is displayed", "Search Values saved as defaults")
    }

    public async ClickSearchButton_FM2Page() {
        await this.actions.click(this.buttonSearchOnFM2, "Click on Search Button on FM2 Page");
    }

    public async clickOnParameterButton() {
        await this.actions.click(this.buttonParameter, "Click on Parameter Button");
        await this.actions.waitBrowserTitleEqualsTo("Unit View Parameter");
    }

    public async getAvailableTractor(text1: string, text2: string) {
        try {
            do {
                let myXpath: string = "((//span[text()='" + text1 + "']/ancestor :: tr[contains(@id,'form:results')]//span[text()='" + text2 + "'])[1]/ancestor :: tr//span[@class='iceOutTxt'])[2]";
                let elementIsPresent: boolean = await element(by.xpath(myXpath)).isPresent();
                console.log("elementIsPresent :" + elementIsPresent)
                if (elementIsPresent) {
                    let requiredElementText: string = await element(by.xpath(myXpath)).getText();
                    console.log("requiredElementText: " + requiredElementText);
                    return requiredElementText;
                }
            } while (await commonFunctions.pagination());
        } catch (e) {
            console.log("error in get cell value function" + e);
        }
    }

    public tableCell(rowIndex: number, columnIndex: number): ElementFinder {
        var timeListedValue = element(by.xpath("//tr[contains(@class,'iceRowSel') and not (@style='display:none') ][" + rowIndex + "]/td[" + columnIndex + "]"));
        return timeListedValue;
    }

    public async findChasisNumberAvailableTractorNumber(tableId: string, trlrTypeColumnName: string, unitNbrColumnName: string) {
        let chasisNumberDetails = {
            tractorNo: "",
            chasisDriverNo: "",
            chasisDriverPref: ""
        };
        let resultFlag = true;
        let numberIndex = 1;
        let rowIndex;
        let tractorNumber;
        let chasisDriverNumber;
        let chasisDriverPrefix;
        await this.actions.waitUntilElementVisible(this.tableCell(1, 1), "WAit untill element is visble");
        let trlrTypeColumnIndex = await commonFunctions.getTableIndex(tableId, trlrTypeColumnName);
        let unitNbrColumnIndex = await commonFunctions.getTableIndex(tableId, unitNbrColumnName);
        console.log("trlrTypeColumnIndex:" + trlrTypeColumnIndex);
        console.log("unitNbrColumnIndex:" + unitNbrColumnIndex);
        while (resultFlag) {
            let columnData = await commonFunctions.getColmnDataByColmnIndex(tableId, trlrTypeColumnIndex);
            for (let i = 0; i < columnData.length; i++) {
                if (columnData[i] !== "") {
                    rowIndex = await i + 1;
                    tractorNumber = await this.tableCell(rowIndex, unitNbrColumnIndex).getText();
                    chasisNumberDetails.tractorNo = tractorNumber;
                    await this.actions.click(this.tableCell(rowIndex, unitNbrColumnIndex), "Click on tractor number");
                    await this.waitForActionToComplete();
                    if (await this.chasisNumber.getAttribute("value") !== "") {
                        chasisDriverNumber = await this.chasisNumber.getAttribute("value");
                        chasisNumberDetails.chasisDriverNo = chasisDriverNumber;
                        chasisDriverPrefix = await this.chasisPrefix.getAttribute("value");
                        chasisNumberDetails.chasisDriverPref = chasisDriverPrefix;
                        resultFlag = false;
                        break;
                    }
                    await this.actions.click(this.tableCell(rowIndex, unitNbrColumnIndex), "Click on tractor number");
                    await this.waitForActionToComplete();
                }
            }
            console.log("resultFlag:" + resultFlag);
            if (resultFlag) {
                numberIndex = numberIndex + 1;
                await commonFunctions.pagination();
                await this.actions.waitUntilElementVisible(this.numberInPagination(numberIndex), "Wait untill element is present");;
            }
        }
        return await chasisNumberDetails;
    }

    public boardCodes(index: number) {
        var xpath = element(by.xpath("//td[text()='Board codes ']/parent::tr//tr/td[" + index + "]/input"))
        return xpath;
    }

    public async verifyBoardCodes(index: number) {
        var text = await this.boardCodes(index).getAttribute("value");
        return text;
    }

    public async getDriverAlpha() {
        let driverAlpha: string = await commonFunctions.getCellValueOfMultiHeader('A', 'DSP', 'STT', 'MTY PP', 'OBC', 'ERROR', 'DRVR', 'ALPHA');
        console.log("driverAlpha : " + driverAlpha);
        return driverAlpha;
    }

    async clickOnSearchButton() {
        await this.actions.click(this.searchButton, "Search Button");
        try {
            await this.waitForPageLoad();
        await this.waitForActionToComplete();
        } catch (error) {
            
        }
       
    }
   
    public async clickOnDriverNumber(driver: string) {
        await this.actions.click(element(by.xpath("//span[text()='" + driver + "    ']")), driver);
        await this.waitForPageLoad();
        await this.waitForActionToComplete();
    }

    public async getOrderNumberForEmptyCheckBox(tCallLocation: number, originRampCode: number, requiredColumnIndex: number, orderIndex: number) {
        let emptyBox: ElementFinder = element(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + tCallLocation + "]/input[not(@value='')]/ancestor::tr/td[" + originRampCode + "][not(null)])[" + orderIndex + "]"));
        let isPresent: boolean = await emptyBox.isPresent();
        if (isPresent) {

            let text: string = await element(by.xpath("(//input[@class='iceInpTxt notesInputText' and @value='']/ancestor::tr/td[" + requiredColumnIndex + "]//a)[1]")).getText();
            console.log("order number" + text);
            if (this.orderNumbers[0] === null) {
                this.orderNumbers[0] = text;
            }
            else {
                this.orderNumbers[1] = text;
            }
        }
        else {
            let nextButtonEnabled: ElementFinder = await element(by.xpath("//td/a[text()='Next']"));
            let nextButtonIsDisable: boolean = await element(by.xpath("//a[text()='Next' and contains(@onclick,'return false')]")).isPresent();
            if (!nextButtonIsDisable) {
                await console.log("inside next button enabled");
                let nextButton: ElementFinder = await element(by.xpath("//td/a[text()='Next']"));
                await nextButtonEnabled.click();
                browser.sleep(8000);
                await this.getOrderNumberForEmptyCheckBox(tCallLocation, originRampCode, requiredColumnIndex, orderIndex);
            }
            else {
                console.log("completed pagination, next button is disabled no data is found with given criteria");
            }
        }
    }

    public async checkTrailerStatus() {
        let flag: boolean = false;
        let code: string = null;
        let chasCode: string = null;
        try {
            await this.actions.selectWindow(1, "check call details page");
            code = await this.trailerCodeXpath.getAttribute("value");
            console.log("Trailer code " + code);
            chasCode = await this.chasXpath.getAttribute("value");
            console.log("chas code is " + chasCode);


            if (code === "JBHZ" || (code === "JBHU" && chasCode === "JBHZ")) {
                this.spotDriverNumber = await element(by.xpath("//label[text()='Tractor']/../following-sibling::td[2]/input")).getAttribute("value");
                this.trailerCode = await this.trailerCodeXpath.getAttribute("value");
                this.trailerNumber = await this.trailerNumberXpath.getAttribute("value");
                this.destination = await this.destinationXpath.getText();
                this.destinationCode = await this.destinationCodeXpath.getAttribute("value");
                console.log("ddd " + this.trailerCode);
                console.log("ddd " + this.trailerNumber);
                console.log("ddd " + this.destination);
                console.log("ddd " + this.destinationCode);
                console.log("dddr " + this.spotDriverNumber);
                flag = true;
            }
            console.log("close current window...");
            this.actions.closeCurrentWindow("close check call details page window");
        } catch (error) {
            console.log("error " + error);
        }
        return await flag;
    }

    public async checkTruckPrePlansStatus() {
        let windowHandles: string[] = [];
        windowHandles = await browser.getAllWindowHandles();
        console.log("window handles is " + windowHandles);
        let currentWindowHandle: string = await browser.getWindowHandle();
        console.log("current window handle is " + currentWindowHandle);
        let flag: boolean = false;
        try {
            await browser.switchTo().window(windowHandles[1]);
            let truckPreplanText: string = await this.actions.getText(this.truckPreplan, "Getting text of truck Preplan");
            console.log("truck status " + truckPreplanText);
            if (await truckPreplanText === '1') {
                console.log("preplan status is true");
                flag = await true;
            }
            await this.actions.closeCurrentWindow("close check call details page window");
        } catch (error) {
            console.log("error preplan status" + error);
        }
        return await flag;
    }

    public async enterDriverNumberAndPressEnter(text: string) {
        this.actions.selectWindow(2, "truck check call");
        console.log("driver number " + text);
        this.actions.setText(this.enterDriverNumberXpath, text, "Driver Number");
        browser.sleep(4000);
        console.log("enter...");
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(15000);
        this.actions.waitUntilElementVisible(this.destinationXpath, "Destination");
    }

    public async findTractorWithOnePreplan(tableId: string, obcColumnName: string, unitNbrColumnName: string) {
        let resultFlag = true;
        let numberIndex = 1;
        let rowIndex;
        let tractorNumber;
        let obcColumnIndex = await commonFunctions.getTableIndex(tableId, obcColumnName);
        let unitNbrColumnIndex = await commonFunctions.getTableIndex(tableId, unitNbrColumnName);
        let driverAlphaColumnIndex = await commonFunctions.getMultiHeaderTableIndex(tableId, "DRVR", "ALPHA");
        console.log("driver alpha index:" + driverAlphaColumnIndex);
        console.log("trlrTypeColumnIndex:" + obcColumnIndex);
        console.log("unitNbrColumnIndex:" + unitNbrColumnIndex);
        do {
            let columnData = await commonFunctions.getColmnDataByColmnIndex(tableId, obcColumnIndex);

            for (let i = 0; i < columnData.length; i++) {
                if (columnData[i] === "MTY PP") {
                    rowIndex = i + 1;

                    let driverAlphaCode = await this.tableCell(rowIndex, driverAlphaColumnIndex).getText();
                    console.log("driverAlphaCode" + driverAlphaCode);
                    if (driverAlphaCode !== "") {
                        await freightManager2Page.selectOptionFromFreightManager2("Planning", "Next Recommend");
                        await this.actions.click(nextRecommendPage.getRadioButton("Driver Alpha"), "Click on Driver Alpha radio button");
                        await this.actions.clearText(nextRecommendPage.searchInputText, "Clear text in Search input field");
                        await this.actions.setText(nextRecommendPage.searchInputText, driverAlphaCode, "Enter text in Search input field");
                        await this.clickSearchButton();
                        let tractorButton = await nextRecommendPage.selectableTractorButton.count();
                        console.log("tractorButton:" + tractorButton);
                        let alphaButton = await nextRecommendPage.selectableAlphaButton.count();
                        console.log("alphaButton:" + alphaButton);
                        if (tractorButton > 0 && alphaButton > 0) {
                            console.log("inside if condition");
                            await this.actions.click(await nextRecommendPage.selectableTractorButton.get(0), "Clicking on Tractor Button");
                            await this.waitForActionToComplete();
                            return;
                        } else {
                            console.log("inside else condition");
                            await freightManager2Page.selectOptionFromFreightManager2("Planning", "Unit View");
                            await browser.sleep(5000);
                        }
                    }
                }
            }
            console.log("resultFlag:" + resultFlag);
            if (resultFlag) {
                numberIndex = numberIndex + 1;
                resultFlag = await commonFunctions.pagination();
                await this.actions.waitUntilElementVisible(this.numberInPagination(numberIndex), "Wait untill element is present");
            }
        } while (resultFlag);

    }

    public async clearTextBoxesForTable(tableXpathLocator: string) {

        let textBoxes: ElementArrayFinder = element.all(by.xpath(tableXpathLocator));
        let textBox: ElementFinder;
        let size: number = 0;

        size = await textBoxes.count();

        for (let index = 1; index <= size; index++) {
            textBox = await element(by.xpath(tableXpathLocator + "[" + index + "]"));
            if (await this.actions.getText(textBox, "board table") != null) {
                await this.actions.clearText(textBox, "clear text");
            }
        }
    }

    public async verifyParamatersForSearchCriteria(type: string) {
        let text: string = null;
        let flag: boolean = false;
        text = await element(by.xpath(this.areaTypeDropDownParameter)).getText();
        console.log("text is " + text);
        console.log("type is " + type);

        if (await this.actions.isElementDisplayed(this.divisionParameter, "division Paramereter")) {
            if (await this.actions.isElementDisplayed(this.areaTypeParameter, "areaType Paramereter")) {
                if (await this.actions.isElementDisplayed(this.areaParameter, "area Paramereter")) {
                    if (await this.actions.isElementDisplayed(this.mdParameter, "md parameter")) {
                        if (text.trim() === type.trim()) {
                            flag = await true;
                        }
                    }
                }
            }
        }

        return await flag;
    }

    public async verifyListOfDrivers() {
        let flag: boolean = false;
        try {
            await this.actions.waitUntilElementVisible(this.searchResults, "Search results for driver");
            flag = await this.actions.isElementDisplayed(this.searchResults, "Search results for driver");
        } catch (error) {
            console.log("error is " + error);
        }
        return await flag;
    }

    public async clickUpAndDownArrowsForETADate() {
        try {
            await this.actions.click(this.etaDate, "ETA DATE");
            await this.waitForPageLoad();
            await this.waitForActionToComplete();
            await this.actions.waitUntilElementVisible(this.searchResults, "Search results for driver");
            await this.actions.click(this.etaDate, "ETA DATE");
            await this.waitForPageLoad();
            await this.waitForActionToComplete();
            await this.actions.waitUntilElementVisible(this.searchResults, "Search results for driver");
        } catch (error) {
            
        }
    }
  
    public async getValueFromColumn(requiredColumnIndex: number, text1: string, text2: string) {
        let myXpath: string = "(//*[text()='" + text1 + "']/ancestor::tr[contains(@class,'iceRowSel')]/td/*[text()='" + text2 + "']/ancestor::tr/td[" + requiredColumnIndex + "]//span)[1]";
        let cellValueXpath: ElementFinder = element(by.xpath(myXpath));
        let requiredText: string = null;

        do {
            let elementIsPresent: boolean = await element(by.xpath(myXpath)).isPresent();
            console.log("elementIsPresent :" + elementIsPresent);
            if (elementIsPresent) {
                requiredText = await this.actions.getText(cellValueXpath, "getting text for xpath" + myXpath);
                console.log(requiredText);
                break;
            }
        } while (await this.pagination());

        return await requiredText;
    }

    public async clickOnPickUp() {
        await this.actions.click(this.pickUp, "PickUP");
    }

    public async verifyBoardCodeTextBoxes(text1: string, text2: string, text3: string, text4: string) {
        let boardCodeTable: ElementArrayFinder = element.all(by.xpath(this.boardCodesTableTextBoxes));
        let size: any = await boardCodeTable.count();
        let textArr: string[] = [text1, text2, text3, text4];
        let flag: boolean = false;
        let count: number = 1;
        try {
            for (let index = 1; index <= size; index++) {
                boardCodeTable = await element(by.xpath(this.boardCodesTableTextBoxes + "[" + index + "]"));
                let text: string = await boardCodeTable.getAttribute("value");
                console.log(text);
                if (text === textArr[index - 1]) {
                    count++;
                }
                if (count === 4) {
                    flag = await true;
                }
            }
        } catch (error) {
            console.log("error in verifyCodeTextBoxes In UnitViewPage " + error);
        }
        return await flag;
    }

    public async truckPrePlansStatus() {
        browser.sleep(5000);
        this.actions.selectWindow(2, "check call details page");
        let flag: boolean = false;
        try {
            let truckPreplanText: number = parseInt(await this.actions.getText(this.truckPreplan, "Getting text of truck Preplan"));
            console.log("truck status " + truckPreplanText);

            if (await truckPreplanText > 1) {
                console.log("preplan status is true");
                flag = await true;
            }
            this.actions.closeCurrentWindow("close check call details page window");
        } catch (error) {
            console.log("error");
        }
        return await flag;
    }

    public async driverAlpha(toolTipText: string) {
        let driverAlphaheaderlink: ElementFinder = element(by.xpath("//*/a[contains(.,'ALPHA')]"))
        await this.actions.waitUntilElementVisible(driverAlphaheaderlink, 'link is visible')
        await this.actions.click(driverAlphaheaderlink, "Click on " + toolTipText + " text");
        await this.waitForActionToComplete();
    };

    public async getUnitNumberWithNoDriver() {
        let myXpath: string = "(//*[text()='MTY PP NO DRVR']/ancestor::tr/td[2])";
        let orderArr: string[] = [null, null];
        let count: number = 0;
        do {
            let unitNumberXpath: ElementArrayFinder = element.all(by.xpath(`(//*[text()='MTY PP NO DRVR']/ancestor::tr/td[2])`));
            let flag: boolean = await unitNumberXpath.isPresent();
            let size: number = await unitNumberXpath.count();
            console.log("element Present " + flag);
            if (flag) {
                for (let index = 1; index <= size; index++) {
                    let text: string = await element(by.xpath(myXpath + "[" + index + "]")).getText();
                    console.log("order number text " + text);
                    if (orderArr[0] === null) {
                        orderArr[0] = text;
                        console.log(orderArr[0])
                        count++;
                    }
                    else {
                        orderArr[1] = text;
                        console.log(orderArr[1]);
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
        } while (await this.pagination() && count < 2);
        return orderArr;
    };

    public async clickOnOrderNumberHeader() {
        let orderNumberHeader: ElementFinder = element(by.xpath("//div[@class='icePnlGrp']//a[contains(., 'NUMBER')]"));
        await this.actions.click(orderNumberHeader, "Click on Order Number Header");
    };


    public async searchForOrderNumber(orderNumber) {
        let rowXPath: string = "(//tr[contains(., '" + orderNumber + "')])[1]";
        console.log("rowXpath : " + rowXPath);
        let rowElement: ElementFinder = element(by.xpath(rowXPath));
        console.log("inside searchfornumber ")
        do {
            if (await rowElement.isPresent()) {
                let orderNum = element(by.xpath("(//tr[contains(., '" + orderNumber + "')])[1]/td[24]//span[normalize-space() = '" + orderNumber + "']"));
                let id = await orderNum.getText()
                console.log("123" + id);
                console.log("outside block " + id)
                return id;
            }
            else {
                console.log("Inside else");
            }

        } while (await commonFunctions.pagination());
    };

    public async hoverArrowIconAndClick(orderNumber: string, dropdownText: string) {
        let arrowXpath = "//td[contains(.,'" + orderNumber + "')]//div[@class='iceMnuBar inlineMenu']//img"
        let dropDownXpath: ElementFinder = element(by.xpath("//a[contains(@onclick, '" + orderNumber + "')]//span[contains(.,'" + dropdownText + "')]"));
        let arrowButtonXpath: ElementFinder = element(by.xpath(arrowXpath))
        console.log(arrowXpath);
        await browser.actions().mouseMove(arrowButtonXpath).perform();
        await this.actions.waitUntilElementPresenceOf(dropDownXpath, "wait for " + dropdownText);
        await this.actions.click(dropDownXpath, "click on " + dropdownText)
    };

    public async verifycomment(comment) {
        let rowXpath: string = "(((//span[contains(., '" + comment + "')])[1])//ancestor::tr)[3]"
        let typeText: string = await element(by.xpath("(" + rowXpath + ")/td[4]")).getText();
        let locationText: string = await element(by.xpath("(" + rowXpath + ")/td[5]")).getText();
        let messageText: string = await element(by.xpath("(" + rowXpath + ")/td[6]")).getText();
        console.log("(" + rowXpath + ")/td[4]");
        return { typeText, locationText, messageText }
    };

    public async getUnitNumber() {//get unit number with MTY PP NO DRVR
        let unitNumber1: string = null;
        let unitNumber2: string = null;
        let unitNbrCoulmnIndex = await commonFunctions.getMultiHeaderTableIndex("results", "UNIT", "NBR");
        let drvrAlphaCoulmnIndex = await commonFunctions.getMultiHeaderTableIndex("results", "DRVR", "ALPHA");
        let unitNBR1 = "//td[contains(.,'MTY PP NO DRVR')]/ancestor::tr/td[" + drvrAlphaCoulmnIndex + "][not(contains(.,' '))]/ancestor::tr/td[" + unitNbrCoulmnIndex + "]"
        let unitNBR2 = "//td[contains(.,'MTY PP NO DRVR')]/ancestor::tr/td[" + drvrAlphaCoulmnIndex + "][not(contains(.,' '))]/ancestor::tr/td[" + unitNbrCoulmnIndex + "][not(contains(.,'" + unitNumber1 + "'))]"

        do {
            let unitNBR1Xpath: ElementFinder = element(by.xpath(unitNBR1));
            let unitNBR2Xpath: ElementFinder = element(by.xpath(unitNBR2));

            if (await unitNBR1Xpath.isPresent()) {
                unitNumber1 = await unitNBR1Xpath.getText();
            }
            else if (await unitNBR2Xpath.isPresent() && unitNumber1 !== null) {
                unitNumber2 = await unitNBR2Xpath.getText();
                console.log(unitNumber1, unitNumber2)
                return [unitNumber1, unitNumber2]
            }
        } while (await commonFunctions.pagination());
    };


    public async enterBarCodes(barCode:string,barcodeIndex:number){       
       let pathXpath= await this.boardCodes(barcodeIndex);
       await this.actions.waitUntilElementVisible(pathXpath, 'BarCode is visible')
       await this.actions.clearText(pathXpath, "clear text");
       await this.actions.setText(pathXpath, barCode, "BarCode Number");
    };

    public async validateBarCodeSearchResults(unitNumber:string){    
        let xpathWOFMP:string="//span[starts-with(text(),'"+unitNumber+"')]/ancestor::td[@class='iceDatTblCol2']/parent::tr/td[1]//span[contains(@style,'black')]";
        let wofMPColumn:ElementFinder = element(by.xpath(xpathWOFMP));
        return await wofMPColumn.isPresent();
    };



}