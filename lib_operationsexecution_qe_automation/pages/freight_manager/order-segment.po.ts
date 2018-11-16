import { browser, by, element, ExpectedConditions, ElementFinder, protractor } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';


export class OrderSegmentPage extends BasePage {

    readonly exitButton: ElementFinder = element(by.buttonText("Exit"));
    readonly refreshButton: ElementFinder = element(by.xpath("//button[text()='Refresh']"));
    readonly orderTextBox: ElementFinder = element(by.xpath("//input[@id='form:orderNumber']"));
    readonly driverPreplanListButton: ElementFinder = element(by.xpath("//button[text()='Driver Preplan List']"));
    readonly updateButton: ElementFinder = element(by.xpath("//button[text()='Update']"));
    readonly inputDriverAlpha: ElementFinder = element(by.id("form:driverUi"));
    readonly button_CancelPreplan: ElementFinder = element(by.xpath("//button[text()='Cancel Preplan']"));
    readonly button_Continue: ElementFinder = element(by.xpath("//button[text()='Continue']"));
    readonly button_CreatePreplan: ElementFinder = element(by.xpath("//button[text()='Create Preplan']"));
    readonly object_orderNo: ElementFinder = element(by.xpath("//input[@id='form:orderNumber']"));
    readonly text_TractorNo: ElementFinder = element(by.xpath("//input[@id='form:tractorUi']"));
    readonly text_Project: ElementFinder = element(by.xpath("//input[@id='form:projects']"));
    readonly text_Carrier: ElementFinder = element(by.xpath("//input[@id='form:carriers']"));
    readonly searchButton: ElementFinder = element(by.xpath("//button[contains(text(),'Search')]"))
    readonly tenderControlButton: ElementFinder = element(by.xpath("//button[contains(text(),'Tender Control')]"));
    readonly createTenderButton: ElementFinder = element(by.xpath("//button[contains(text(),'Create Tender')]"));
    readonly radialButton = element(by.xpath("(//img[@class='iceGphImg'])[1]"));
    readonly cancelPreplanButton: ElementFinder = element(by.xpath("//button[contains(text(),'Cancel Preplan')]"));
    readonly cancelPreplanStatus: ElementFinder = element(by.xpath("//span[text()='Segment is cancelled successfully']"));
    readonly checkBox: ElementFinder = element(by.xpath("//img[contains(@src,'checkboxUnselected.png')]"))
    radio_Button: ElementFinder;
    projectAndCarrierCodes: ElementFinder;
    verifyMessage: ElementFinder;


    public async enterOrderNumber(text_orederNO: any, str_logName: string) {
        await this.actions.waitUntilElementVisible(this.object_orderNo, "");
        await this.actions.clearText(this.object_orderNo, "clear order#");
        await this.actions.setText(this.object_orderNo, text_orederNO, str_logName);

    }

    public async enterTractorNumber(val_TractorNo: any) {
        await this.selectRadioPreplanType("Tractor");
        await this.actions.setText(this.text_TractorNo, val_TractorNo, "Tractor");
        await this.text_TractorNo.sendKeys(protractor.Key.TAB);
    }

    public async enterProjectCarrierNumber(val_Project: any, val_Carrier: any) {
        await this.selectRadioPreplanType("Project/Carrier");
        await this.actions.setText(this.text_Project, val_Project, "Project");
        console.log(val_Carrier);
        await this.actions.setText(this.text_Carrier, val_Carrier, "Carrier");
        await this.text_Carrier.sendKeys(protractor.Key.TAB);
    }


    public async clickCreatePreplanButton() {
        await this.actions.click(this.button_CreatePreplan, "Create Preplan");
        await this.waitForActionToComplete();
        await this.handleStopTendermessage();
        await this.checkContinueButtonPopUpClick();
    }

    public async clickContinueButton() {
        await this.actions.click(this.button_Continue, "Continue");
        await this.actions.longWait("waiting till object loads");
        await this.checkContinueButtonPopUpClick();
    }

    public async handleStopTendermessage() {
        try {
            let stopTender: boolean = await element(by.xpath("//span[contains(text(),'STOP TENDER') or contains(text(),'MGAS HAS CARGO')]")).isDisplayed();
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
        let message: ElementFinder = element(by.xpath("//span[@class='iceMsgsInfo']"));
        await this.waitForElementIsVisible(message)
        return await this.actions.getText(message, "getting the success message");
    };

    public async validateSuccessMessage() {
        let message: string;
        this.verifyMessage = await element(by.xpath("//span[@class='iceMsgsInfo' or @class='iceMsgsError']"));
        return (message = await this.actions.getText(this.verifyMessage, "getting the success message"));
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
    }

    public async clickOnRadialButton() {
        await this.actions.waitUntilElementVisible(this.radialButton, "Radial Button")
        await this.actions.click(this.radialButton, "Radial Button");
        try {
            await this.waitForPageLoad();
            await this.waitForActionToComplete();
        } catch (error) {

        }

    }

    public async clickOnCancelPreplanButton() {
        await this.actions.click(this.cancelPreplanButton, "Cancel Preplan Button");
        try {
            await this.waitForPageLoad();
            await this.waitForActionToComplete();
        } catch (error) {

        }
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
        await this.actions.click(checkElement_Tractor, '')


    }

}