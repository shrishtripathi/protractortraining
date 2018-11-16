import { browser, by, element, ExpectedConditions, ElementFinder, protractor } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from '../base.po';


export class OrderSegmentPage extends BasePage {

    readonly exitButton: ElementFinder = element(by.buttonText("Exit"));
    readonly orderTextBox = element(by.xpath("//input[@id='form:orderNumber']"));
    readonly driverPreplanListButton = element(by.buttonText('Driver Preplan List'))
    readonly updateButton = element(by.buttonText('Update'));
    readonly inputDriverAlpha: ElementFinder = element(by.id("form:driverUi"));
    readonly cancelPreplanButton = element(by.xpath("//button[contains(text(),'Cancel Preplan')]"));
    readonly continueButton = element(by.buttonText('Continue'));
    readonly orderNumber = element(by.id("form:orderNumber"));
    readonly tractorNumber = element(by.id("form:tractorUi"));
    readonly projects = element(by.id("form:projects"));
    readonly carrierText = element(by.id("form:carriers"));
    readonly createPreplan = element(by.xpath("//button[text()='Create Preplan']"));
    readonly searchButton = element(by.xpath("//button[contains(text(),'Search')]"))
    readonly radialButton = element(by.xpath("(//img[@class='iceGphImg'])[1]"));
    readonly cancelPreplanStatus = element(by.xpath("//span[text()='Segment is cancelled successfully']"));
    radioButton: ElementFinder;
    projectAndCarrierCodes: ElementFinder;
    verifyMessage: ElementFinder;


    public async enterOrderNumber(text_orederNO: any, str_logName: string) {
        await this.actions.clearText(this.orderNumber, "clear order#");
        await this.actions.setText(this.orderNumber, text_orederNO, str_logName);

    }

    public async enterTractorNumber(val_TractorNo: any) {
        await this.selectRadioPreplanType("Tractor");
        await this.actions.setText(this.tractorNumber, val_TractorNo, "Tractor");
        await this.tractorNumber.sendKeys(protractor.Key.TAB);
    }
    public async enterDriverNumber(driverNumber: string) {
        await this.selectRadioPreplanType("Tractor");
        await this.actions.setText(this.tractorNumber, driverNumber, "Tractor");
        await this.actions.shortWait("short wait");
    }

    public async enterProjectCarrierNumber(val_Project: any, val_Carrier: any) {
        await this.selectRadioPreplanType("Project/Carrier");
        await this.actions.setText(this.projects, val_Project, "Project");
        await this.actions.setText(this.carrierText, val_Carrier, "Carrier");
        this.carrierText.sendKeys(protractor.Key.TAB);
    }


    public async clickCancelPreplanButton() {
        await this.actions.waitUntilElementClickable(this.cancelPreplanButton, "create preplan")
        await this.actions.click(this.cancelPreplanButton, "Create Preplan");
        await this.actions.longWait("waiting");
        await this.checkContinueButtonPopUpClick();
    }

    public async clickCreatePreplanButton() {
        await this.actions.waitUntilElementClickable(this.createPreplan, "create preplan")
        await this.actions.click(this.createPreplan, "Create Preplan");
        await this.actions.longWait("waiting");
        await this.checkContinueButtonPopUpClick();
    }
    public async clickContinueButton() {
        await this.actions.click(this.continueButton, "Continue");
        await this.actions.longWait("waiting till object loads");
        await this.checkContinueButtonPopUpClick();
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
    public async clickDriverNumberLink(driverNumber) {
        let xpath = element(by.xpath("//a[contains(text(),'" + driverNumber + "')]"))
        await this.actions.click(xpath, "clicked on driverNumber")
    }

    public async checkContinueButtonPopUpClick() {
        await this.waitForActionToComplete();
        await browser.switchTo().activeElement();
        let checkElement: boolean = await this.continueButton.isDisplayed();
        if (checkElement) {
            await this.actions.click(this.continueButton, "Continue");
        } else {

            console.log("Continue button not available");
        }
    }

    public async selectRadioPreplanType(value_Type: string) {
        let radio_Button = element(by.xpath("//fieldset[@class='iceSelOneRb']//label[contains(text(),'" + value_Type + "')]/preceding-sibling :: input"));
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
    public async clickTractorNumberUnderPowerDriverColumn(val_TractorNo: any) {
        await this.actions.longWait("waiting");
        let checkElement_Tractor: ElementFinder = await element(by.xpath("//tr//a[contains(@class,'iceOutLnk fmLabel') and contains(text(),'" + val_TractorNo + "')]"));
        await this.actions.click(checkElement_Tractor, '')


    }
    public async enterDriverAlphatext(driverAlphatext: string) {
        await this.actions.setText(this.inputDriverAlpha, driverAlphatext, 'Enter Text into Driver Alpha Input Field');
        this.actions.longWait("wait for element");
    }

    public radiobutton(radioButtonName: string) {
        let xpath = element(by.xpath("//label[text()='" + radioButtonName + "']/preceding-sibling::input"));
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
        return await this.actions.getText(message, "getting the success message");
    };

    public async validateSuccessMessage() {

        let message: string;
        this.verifyMessage = await element(by.xpath("//span[@class='iceMsgsInfo']"));
        return message = await this.actions.getText(this.verifyMessage, "getting the success message");
    };
    async sendDataToOrderTextBox(name) {
        await this.actions.setText(this.orderTextBox, name, "set text for +" + name);
    }

    async clickOnSearchButton() {
        await this.actions.click(this.searchButton, "Search Button");
    }

    async clickOnRadialButton() {
        await this.actions.click(this.radialButton, "Radial Button");
    }

    async clickOnCancelPreplanButton() {
        await this.actions.click(this.cancelPreplanButton, "Cancel Preplan Button");
    }

    public async selectOrderRadioButton(val_DriverAlpha: any) {
        await this.actions.longWait("waiting");
        let checkElement_Alpha: boolean = await element(by.xpath("//tr//a[contains(@class,'iceCmdLnk') and contains(text(),'" + val_DriverAlpha + "')]")).isPresent();
        if (checkElement_Alpha) {
            let radio_Element = element(by.xpath("//tr//a[contains(@class,'iceCmdLnk') and contains(text(),'" + val_DriverAlpha + "')]/ancestor :: tr//img[@class='iceGphImg']"));
            await this.actions.click(radio_Element, "select order");
        }
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

}