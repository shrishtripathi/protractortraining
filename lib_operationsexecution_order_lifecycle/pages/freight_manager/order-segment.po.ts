import { by, element, browser, ElementFinder, protractor, ElementArrayFinder } from 'protractor';
import { BasePage } from '../base.po';
import { CommonFunctions } from '../../utilities/common-functions';

const commonFunctions = new CommonFunctions();

export class OrderSegmentPage extends BasePage {

    readonly orderNoInput: ElementFinder = element(by.id("form:orderNumber"));
    readonly exitButton: ElementFinder = element(by.buttonText("Exit"));
    readonly refreshButton: ElementFinder = element(by.xpath("//button[text()='Refresh']"));
    readonly orderTextBox: ElementFinder = element(by.xpath("//input[@id='form:orderNumber']"));
    readonly driverPreplanListButton: ElementFinder = element(by.xpath("//button[text()='Driver Preplan List']"));
    readonly updateButton: ElementFinder = element(by.xpath("//button[text()='Update']"));
    readonly inputDriverAlpha: ElementFinder = element(by.id("form:driverUi"));
    readonly button_CancelPreplan: ElementFinder = element(by.xpath("//button[text()='Cancel Preplan']"));
    readonly button_Continue: ElementFinder = element(by.xpath("//button[text()='Continue']"));
    readonly button_CreatePreplan: ElementFinder = element(by.xpath("//button[text()='Create Preplan']"));
    readonly text_TractorNo: ElementFinder = element(by.xpath("//input[@id='form:tractorUi']"));
    readonly text_Project: ElementFinder = element(by.xpath("//input[@id='form:projects']"));
    readonly text_Carrier: ElementFinder = element(by.xpath("//input[@id='form:carriers']"));
    readonly searchButton: ElementFinder = element(by.xpath("//button[contains(text(),'Search')]"))
    readonly tenderControlButton: ElementFinder = element(by.xpath("//button[contains(text(),'Tender Control')]"));
    readonly createTenderButton: ElementFinder = element(by.xpath("//button[contains(text(),'Create Tender')]"));
    readonly orginDestCheckBox: ElementArrayFinder = element.all(by.xpath("(//img[@class='iceGphImg'])"));
    readonly checkBox1 = element(by.xpath("(//img[@class='iceGphImg'])[1]"));
    readonly checkBox2 = element(by.xpath("(//img[@class='iceGphImg'])[2]"));
    readonly checkBox3 = element(by.xpath("(//img[@class='iceGphImg'])[3]"));
    readonly orderNumber = element(by.id("form:orderNumber"));
    readonly tractorNumber = element(by.id("form:tractorUi"));
    readonly checkBox: ElementArrayFinder = element.all(by.xpath("//img[contains(@src,'checkboxUnselected')]"));
    readonly checkOneBox = element(by.xpath("//img[contains(@src,'checkboxUnselected')]"));
    readonly loadDetailsTable: ElementArrayFinder = element.all(by.xpath("//table[@id='form:segments']//tr[contains(@class,'iceDatTblRow')]"));
    readonly tCallTextBox = element(by.xpath("//td[@class='icePnlGrdCol2']/input"));
    readonly continueButton = element(by.buttonText('Continue'));
    readonly continuePopup: ElementFinder = element(by.id("form:Continue"));
    readonly Tcall_location = element(by.xpath("//table[@class='icePnlGrd']//tr[@class='icePnlGrdRow2']/td[2]/input"));
    readonly tractorNumberLink: ElementFinder = element(by.xpath("//*[contains(@href,'tractorNbr=')]"));
    readonly cancelPreplanButton: ElementFinder = element(by.xpath("//button[contains(text(),'Cancel Preplan')]"));
    readonly cancelPreplanStatus: ElementFinder = element(by.xpath("//span[text()='Segment is cancelled successfully']"));
    readonly radioBtn: ElementFinder = element(by.xpath(" //img[@class='iceGphImg']"));


   

    radio_Button: ElementFinder;
    projectAndCarrierCodes: ElementFinder;
    verifyMessage: ElementFinder;

    public async enterOrderNumber(text_orederNO: any, str_logName: string) {
        await this.actions.waitUntilElementVisible(this.orderNoInput, "");
        await this.actions.clearText(this.orderNoInput, "clear order#");
        await this.actions.setText(this.orderNoInput, text_orederNO, str_logName);
    }

    public async enterTractorNumber(val_TractorNo: any) {
        await this.actions.waitUntilElementVisible(this.text_TractorNo, "");
        await this.actions.setText(this.text_TractorNo, val_TractorNo, "Tractor");
        await this.text_TractorNo.sendKeys(protractor.Key.TAB);
    }

    public async clickOnCheckBox() {
        await this.actions.click(this.checkOneBox, "click on check box");
    }

    public async enterTcallLocationValue(originRamp: any) {
        await this.actions.waitUntilElementClickable(this.tCallTextBox, "");
        await this.actions.setText(this.tCallTextBox, originRamp, "enter origin ramp number");
        await this.actions.setText(this.tCallTextBox, originRamp, "enter origin ramp number");
    }

    public async EnterTcall(text_TcallNO: any, str_logName: string) {
        await this.actions.waitUntilElementVisible(this.Tcall_location, "");
        await this.actions.clearText(this.Tcall_location, "clear order#");
        await this.actions.setText(this.Tcall_location, text_TcallNO, str_logName);
    }

    public async clickOnContinueButton() {
        await this.actions.shortWait("wait")
        await browser.switchTo().activeElement();
        try {
            await this.actions.click(this.continueButton, "Continue");
            await this.waitForActionToComplete();
        } catch (error) {
            console.log("error cb" + error)
        }
    }

    public async enterProjectCarrierNumber(val_Project: any, val_Carrier: any) {
        await this.selectRadioPreplanType("Project/Carrier");
        await this.actions.setText(this.text_Project, val_Project, "Project");
        console.log(val_Carrier);
        await this.actions.setText(this.text_Carrier, val_Carrier, "Carrier");
        await this.text_Carrier.sendKeys(protractor.Key.TAB);
    }

    public async clickOnCreatePreplanButton() {
        await this.actions.waitUntilElementClickable(this.button_CreatePreplan, "create preplan")
        await this.actions.click(this.button_CreatePreplan, "Create Preplan");        
        await this.checkContinueButtonPopUpClick();
        //await this.waitForActionToComplete();
    }
    
    public async getFM2TractorPreplanSuccessMessage(text) {
        let successMessage = element(by.xpath("//*[contains(text(),'" + text + "')]"));
        await this.actions.waitUntilElementVisible(successMessage, "Wait untill element is displayed");
        return await this.getElementText(successMessage);
    }

    public async clickContinueButton() {
        await this.actions.click(this.button_Continue, "Continue");
        await this.actions.longWait("waiting till object loads");
        await this.checkContinueButtonPopUpClick();
    }

    public async handleStopTendermessage() {
        try {
            let stopTender: boolean = await element(by.xpath("//span[contains(text(),'STOP TENDER')]")).isDisplayed();
            if (stopTender) {
                await this.actions.click(element(by.xpath("//a[text()='No']")), "");
                await this.waitForPageLoad();
            }
        } catch (e) { }
    }

    public async checkContinueButtonPopUpClick() {
        let counter: number = 1;
        try {
            do {
                await this.actions.shortWait("waiting till object loads");
                counter++;
            } while (! await this.button_Continue.isPresent() && await counter <= 10)

            if (await this.button_Continue.isPresent()) {
                await this.actions.click(this.button_Continue, "Continue");
            }
        } catch {
            console.log("Continue button not available");
        }
    }

    public async selectRadioPreplanType(value_Type: string) {
        let radio_Button: ElementFinder = element(by.xpath("//fieldset[@class='iceSelOneRb']//label[contains(text(),'" + value_Type + "')]/preceding-sibling :: input"));
        console.log(value_Type);
        await this.actions.click(radio_Button, "select radio button " + value_Type);
    }

    public async verifyTractorNumberUnderPowerDriverColumn(val_TractorNo: any) {
        await this.actions.longWait("waiting");
        let checkElement_Tractor: boolean = await element(by.xpath("//tr//a[contains(@class,'iceOutLnk fmLabel') and contains(text(),'" + val_TractorNo + "')]")).isPresent();
        if (checkElement_Tractor) {
            return true;
        }
        return false;
    }

    public async enterDriverAlphatext(driverAlphatext: string) {
        await this.actions.setText(this.inputDriverAlpha, driverAlphatext, 'Enter Text into Driver Alpha Input Field');
        this.actions.longWait("wait for element");
    }

    public radiobutton(radioButtonName: string) {
        var xpath = element(by.xpath("//label[text()='" + radioButtonName + "']/preceding-sibling::input"));
        return xpath;
    }

    public async clickRadioButton(radioButtonName: string) {
        await this.actions.click(this.radiobutton(radioButtonName), 'Clicking on Radio Button');
    }

    public async enterOrderId(textToEnter: string) {
        await this.actions.clearText(this.orderTextBox, 'Clear Division field');
        await this.actions.setText(this.orderTextBox, textToEnter, 'Entering value HJBT JBVAN');
    }

    public async clickDriverPreplanList() {
        await this.actions.click(this.driverPreplanListButton, 'Click on Driver Preplan list');
        this.actions.longWait("wait for element");
    }

    public async clickUpdateButton() {
        await this.actions.click(this.updateButton, 'Click on Update button');
        await this.actions.longWait("Waiting to load");
    }

    public async enterCodesInOrderSegment(codeName: string, value: string) {
        this.projectAndCarrierCodes = await element(by.xpath("//input[@id='form:" + codeName + "']"));
        await this.actions.waitUntilElementVisible(await this.projectAndCarrierCodes, "wait for project And Carrier text box")
        await this.projectAndCarrierCodes.clear();
        await this.projectAndCarrierCodes.sendKeys(value);
    };

    public async clickOnExitButton() {
        await this.actions.click(this.exitButton, "Click on Exit Button");
    };

    public async getSuccessMessage() {
        let message: ElementFinder = element(by.xpath("//span[@class='iceMsgsError' or @class='iceMsgsInfo']"));
        return await this.actions.getText(message, "getting the success message");
    };

    public async validateSuccessMessage() {
        let message: string;
        this.verifyMessage = await element(by.xpath("//span[@class='iceMsgsError' or @class='iceMsgsInfo']"));
        return message = await this.actions.getText(this.verifyMessage, "getting the success message");
    };

    public async sendDataToOrderTextBox(name) {
        await this.actions.setText(this.orderTextBox, name, "set text for +" + name);
    }

    async clickRefreshButton() {
        await this.actions.waitUntilElementClickable(this.refreshButton, "");
        await this.actions.click(this.refreshButton, "Search Button");
    }

    public async clickOnSearchButton() {
        await this.actions.click(this.searchButton, "Search Button");
        await this.waitForActionToComplete();
        //await this.waitForPageLoad();
    }

    /*public async clickOnRadialButton() {
        await this.actions.waitUntilElementVisible(this.radialButton, "Radial Button")
        await this.actions.click(this.radialButton, "Radial Button");
        await this.waitForPageLoad();
        await this.waitForActionToComplete();
    }*/

    public async clickDriverLink() {
        let tractorNumber: string;
        await this.actions.waitUntilElementPresenceOf(this.tractorNumberLink);
        tractorNumber = await this.tractorNumberLink.getText();
        await this.clickTractorNumberUnderPowerDriverColumn(tractorNumber)

    }

    public async clickAllCheckbox() {
        let count = await this.orginDestCheckBox.count();
        for (let i = 0; i < count; i++) {
            console.log(await this.orginDestCheckBox.get(i));
            await this.actions.click(this.orginDestCheckBox.get(i), "Click on checkboxes");
        }
    }

    public async clickcheckbox() {
        await this.actions.waitUntilElementVisible(this.checkBox1, "checkbox")
        await this.actions.click(this.checkBox1, "checkbox");
        await this.waitForPageLoad();
        await this.waitForActionToComplete();
    }

    public async clickcheckbox2() {
        await this.actions.waitUntilElementVisible(this.checkBox2, "Radial Button")
        await this.actions.click(this.checkBox2, "Radial Button");
        await this.waitForPageLoad();
        await this.waitForActionToComplete();
    }
    public async clickcheckbox3() {
        await this.actions.waitUntilElementVisible(this.checkBox3, "Radial Button")
        await this.actions.click(this.checkBox3, "Radial Button");
        await this.waitForPageLoad();
        await this.waitForActionToComplete();
    }

    public async verifyOrderDetails() {
        let count: number = 0;
        try {
            await this.actions.waitUntilElementVisible(this.loadDetailsTable.get(0), 'wait until order details are visible');
            count = await this.loadDetailsTable.count();
        } catch (error) {

        }
        return await count;
    }

    public async clickOnCancelPreplanButton() {
        await this.actions.click(this.cancelPreplanButton, "Cancel Preplan Button");
        await this.waitForPageLoad();
        await this.waitForActionToComplete();
    }

    public async selectOrderRadioButton1() {
        let radio_Element = element(by.xpath("//tr//span[contains(@class,'iceOutTxt')]/ancestor :: tr//img[@class='iceGphImg']"));
        await this.actions.click(radio_Element, "select order");
    }

    public async selectOrderRadioButton(val_DriverAlpha: any) {
        await this.actions.longWait("waiting");
        let checkElement_Alpha: boolean = await element(by.xpath("//tr//a[contains(@class,'iceCmdLnk') and contains(text(),'" + val_DriverAlpha + "')]")).isPresent();
        if (checkElement_Alpha) {
            let radio_Element = element(by.xpath("//tr//a[contains(@class,'iceCmdLnk') and contains(text(),'" + val_DriverAlpha + "')]/ancestor :: tr//img[@class='iceGphImg']"));
            await this.actions.click(radio_Element, "select order");
        }
    }

    public async clickTenderControlButton() {
        await this.actions.click(this.tenderControlButton, "Tender Control Button");
    }

    public async clickCancelPreplanButton() {
        await this.actions.waitUntilElementClickable(this.button_CancelPreplan, "cancel preplan")
        await this.actions.click(this.button_CancelPreplan, "Cancel Preplan");
        await this.actions.longWait("waiting");
    }

    public async verifyStopStatusInOrderSegment() {
        await this.actions.longWait("waiting");
        let stopStatus1: string = await element(by.xpath("(//table[@id='form:segments']//tbody//tr[1]/td[7]//span)[1]")).getText();
        let stopStatus2: string = await element(by.xpath("(//table[@id='form:segments']//tbody//tr[1]/td[7]//span)[2]")).getText();
        if (await stopStatus1 === "C" && await stopStatus2 === "C") {
            return true;
        }
        return false;
    }

    public async clickTractorNumberUnderPowerDriverColumn(val_TractorNo: any) {
        let checkElement_Tractor: ElementFinder = element(by.xpath("//tr//a[contains(@class,'iceOutLnk fmLabel') and contains(text(),'" + val_TractorNo + "')]"));
        await this.actions.waitUntilElementVisible(checkElement_Tractor, "");
        await this.actions.click(checkElement_Tractor, '');
    }

    public async verifyPreplannedOrder(tableId: string, columnName1: string, columnName2: string) {
        let powerDriver = await commonFunctions.getColumnIndexForMultiHeaderTable(tableId, columnName1, columnName2);
        let powerDriverColumnData = await commonFunctions.getColmnDataByColmnIndex(tableId, powerDriver);
        console.log("powerDriverColumnData[0]:" + powerDriverColumnData[0]);
        return powerDriverColumnData[0];
    }

    public async selectAllCheckBox() {
        let tableCounter: ElementArrayFinder = element.all(by.xpath("//tbody//tr[contains(@id,'form:segments')]/td[contains(@class,'iceDatTbl')][1]//a"));
        let tableCounterFieldsCount = await tableCounter.count();
        for (let i: number = 0; i < tableCounterFieldsCount; i++) {
            await tableCounter.get(i).click();
        }
    }
    public async windowDetail() {
        var handles: string[] = await browser.getAllWindowHandles();
        console.log('windowDetail: ' + handles.length)
    }

    public async verifyOrderNumber(orderNumber: string) {
        let numberOrder: ElementFinder = element(by.xpath("//tr[td/label[starts-with(text(),'Order')]]/td//a[text()='" + orderNumber + "']"));
        if (this.actions.isElementDisplayed(numberOrder, "verify order number")) {

            return true;

        } else {
            return false;
        }


    }

    public async clickCreateTenderButton() {
        await this.actions.click(this.createTenderButton, "Create Tender  Button");
    }
    public async verifyProjectCode() {
        let codeProject = element(by.xpath("//input[@id='form:projects']"));
        return await codeProject.getAttribute("value");
    }


    public async clickRadiobtn() {
        await this.actions.waitUntilElementClickable(this.radioBtn, "click on radio button")
        await this.actions.click(this.radioBtn, "click on radio button");
        await this.waitForActionToComplete();
        await this.checkContinueButtonPopUpClick();
    }
}
