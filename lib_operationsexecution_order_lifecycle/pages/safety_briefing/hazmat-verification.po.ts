import { by, element, ExpectedConditions, ElementFinder, ElementArrayFinder, protractor, browser, $, $$ } from 'protractor';
import { BasePage } from '../base.po';

export class HazmatVerificationPage extends BasePage {
    readonly safetyBriefingHead = $('div.jbh-menu>div>div>div>div>div>a:nth-child(1)>span>span>span:nth-child(2)');
    readonly createNewBriefing = element(by.cssContainingText('span', 'Create New Briefing'));
    readonly loadingMask = $('div.x-mask-msg-text');
    readonly createNewBriefingHead = $('div.x-window-header-default>div>div>div>div');
    readonly orderNumberField = $('input.x-form-required-field');
    readonly okButton = $('a.jb-yellow-button');
    readonly managerInstructionTitle = $('div.x-window-header-title>div');
    readonly managerInstructionOk = $('div.jbh-window>div>div>div>div>div>div>a:nth-child(2)');
    readonly unNumberField = $$('div.x-form-text-wrap-invalid>input').get(0);
    readonly materialWeightField = $("input[name='weightQuantity']");
    readonly noOfPackageField = $("input[name='packageQuantity']");
    readonly packageTypeField = $("input[name='packageMeasurementType']");
    readonly nextButton = $$('a.jb-yellow-button').get(1);
    readonly airBagCheckBox = $$("input[type='button']").get(0);
    readonly emergencyTelephoneNumber = $("input[name='emergencyRespNo-inputEl']");
    readonly shipperNameField = $("input[name='bracingEmerShipperName-inputEl']");
    readonly emergencyContract = $("input[name='bracingEmerContractNo-inputEl']");
    readonly emergencyInformationNext = $$('a.jb-yellow-button').get(2);
    readonly confirmNext = $$('a.jb-yellow-button').get(3);
    readonly checkBox = $$("input[type='button']");
    readonly saveButton = $$('a.jb-yellow-button').get(4);
    readonly confirmOk = $('div.x-toolbar-footer>div>div>a:nth-child(1)');
    readonly firstOrder = $('table:nth-child(1)>tbody>tr.x-grid-row>td:nth-child(2)>div');

    verifyMessage: ElementFinder;

    public async waitForLoadingMask() {
        await this.actions.waitUntilElementInVisible(this.loadingMask, 'Wait for mask to be invisible');
    }

    public async selectCreateNewBriefing() {
        await this.actions.moveMouseToElement(this.safetyBriefingHead, "move mouse on to Safety Briefing menu item");
        await this.actions.waitUntilElementClickable(this.createNewBriefing, "Wait until element is clickable");
        await this.actions.click(this.createNewBriefing, "Click on Create New Briefing");
        await this.actions.waitUntilElementVisible(this.createNewBriefingHead, "Wait for the heading to appear");
    };

    public async setOrderNumber() {
        await this.actions.setText(this.orderNumberField, "M532127", 'Enter order number');
        await this.actions.click(this.okButton, "Click OK button");
        await this.actions.waitUntilElementVisible(this.managerInstructionTitle, "Wait for the wimdow")
    };

    public async clickOkButton() {
        await this.actions.click(this.managerInstructionOk, "Click OK");
    };

    public async enterUnNumber(unNum) {
        await this.actions.setText(this.unNumberField, unNum, "Enter UN/NA Number");
        await this.actions.sendKeysTab("Enter Tab");
        await this.actions.waitUntilElementClickable(this.materialWeightField, "wait");
    };

    public async enterMaterialWeight(materialWeight) {
        await this.actions.setText(this.materialWeightField, materialWeight, "Enter Material Weight");
        await this.actions.waitUntilElementClickable(this.noOfPackageField, "Wait");
    };

    public async enterNoOfPackage(number) {
        await this.actions.setText(this.noOfPackageField, number, "Enter Number of Packages");
        await this.actions.waitUntilElementClickable(this.packageTypeField, "Wait")
    };

    public async enterPackageType() {
        await this.actions.click(this.packageTypeField, "Enter Number of Packages");
        await this.packageTypeField.sendKeys(protractor.Key.ARROW_DOWN);
        await this.actions.sendKeysEnter("Enter");
    };

    public async clickNext() {
        await this.actions.click(this.nextButton, "Click Next Button");
    };

    public async clickAirBagCheckBox() {
        await this.actions.click(this.airBagCheckBox, "Check Air Bag");
    };

    public async enterEmergencyTelephoneNumber(telNumber1, telNumber2, telNumber3) {
        await this.actions.clearText(this.emergencyTelephoneNumber, "Clear");
        await this.actions.setText(this.emergencyTelephoneNumber, telNumber1, "enter telephone number");
        await this.actions.setText(this.emergencyTelephoneNumber, telNumber2, "enter telephone number");
        await this.actions.setText(this.emergencyTelephoneNumber, telNumber3, "enter telephone number");
    };

    public async enterShipperName(shipperName) {
        await this.actions.setText(this.shipperNameField, shipperName, "Enter shipper name");
    };

    public async enterEmergencyContract(contractNumber) {
        await this.actions.setText(this.emergencyContract, contractNumber, "Enter Contract Number");
    };

    public async clickEmergencyInformationNext() {
        await this.actions.click(this.emergencyInformationNext, "Click Next");
    };

    public async clickConfirmNext() {
        await this.actions.click(this.confirmNext, "Click Next");
    };

    public async checkAllCheckBoxes() {
        await this.actions.click(this.checkBox.get(8), "Check CheckBox");
        await this.actions.click(this.checkBox.get(9), "Check CheckBox");
        await this.actions.click(this.checkBox.get(10), "Check CheckBox");
        await this.actions.click(this.checkBox.get(11), "Check CheckBox");
        await this.actions.click(this.checkBox.get(12), "Check CheckBox");
        await this.actions.click(this.checkBox.get(13), "Check CheckBox");
        await this.actions.click(this.checkBox.get(14), "Check CheckBox");
        await this.actions.click(this.checkBox.get(15), "Check CheckBox");
        await this.actions.click(this.checkBox.get(16), "Check CheckBox");
        await this.actions.click(this.checkBox.get(17), "Check CheckBox");
        await this.actions.click(this.checkBox.get(18), "Check CheckBox");
        await this.actions.click(this.checkBox.get(19), "Check CheckBox");
        await this.actions.click(this.checkBox.get(20), "Check CheckBox");
        await this.actions.click(this.checkBox.get(21), "Check CheckBox");
        await this.actions.click(this.checkBox.get(22), "Check CheckBox");
        await this.actions.click(this.checkBox.get(23), "Check CheckBox");
        await this.actions.click(this.checkBox.get(24), "Check CheckBox");
        await this.actions.click(this.checkBox.get(25), "Check CheckBox");
        await this.actions.click(this.checkBox.get(26), "Check CheckBox");
        await this.actions.click(this.checkBox.get(28), "Check CheckBox");
        await this.actions.click(this.checkBox.get(29), "Check CheckBox");
        await this.actions.click(this.checkBox.get(30), "Check CheckBox");
        await this.actions.click(this.checkBox.get(31), "Check CheckBox");
        await this.actions.click(this.checkBox.get(32), "Check CheckBox");
        await this.actions.click(this.saveButton, "Click On Save Button");
    };

    public async clickConfirmOk() {
        await this.actions.click(this.confirmOk, "Click OK");
    };

    public async getFirstOrderNumber() {
        return await this.actions.getText(this.firstOrder, "Get Order Number");
    };


};