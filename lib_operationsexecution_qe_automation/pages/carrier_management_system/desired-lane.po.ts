import { browser, ElementFinder, element, by } from "protractor";
import { BasePage } from "../base.po";

export class DesiredLanePage extends BasePage {

    saveButtonElementFinder: ElementFinder;
    readonly CarrierSearch: ElementFinder = element(by.xpath('//*[@id="lnfContents"]/table/tbody/tr[2]/td/table[2]/tbody/tr[2]/td/li/a'));
    readonly desiredLanes: ElementFinder = element(by.xpath("//a[text()='Desired Lanes ']"));
    readonly addLane: ElementFinder = element(by.xpath("//a[text()='Add Lane']"));
    readonly cancelButton: ElementFinder = element(by.xpath("(//a[text()='Cancel'])[2]"));
    readonly documentsTab: ElementFinder = element(by.xpath("//a[text()='Documents ']"));
    readonly originTypeDropDown: string = "(//select[@name='originEntity']/option)";
    readonly originLocationDropDown: string = "(//select[@id='originStateID']/option)";
    readonly destinationTypeDropDown: string = "(//select[@name='destinationEntity']/option)";
    readonly destinationLocationDropDown: string = "(//select[@name='destinationID']/option)";
    readonly equipmentTypeDropDown: string = "(//select[@name='equipmentTypeCode']/option)";
    readonly rpmTextBox: ElementFinder = element(by.xpath("//input[@name='rateAmount']"));
    readonly minimumChargeAmount: ElementFinder = element(by.xpath("//input[@name='minimumChargeAmount']"));
    readonly saveButton: ElementFinder = element(by.xpath("//a[text()='Save']"));

    public async clickAddLanes() {
        await this.actions.waitUntilElementVisible(this.addLane, "Add Lane Link");
        await this.actions.click(this.addLane, "Add Lanes Link ");
    }

    public async enterLaneinfo(value1: string, value2: string, value3: string, value4: string, value5: string) {
        await this.actions.selectByValue(this.originTypeDropDown, value1, "orgin type");
        await this.actions.selectByValue(this.originLocationDropDown, value2, "orgin destination");
        await this.actions.selectByValue(this.destinationTypeDropDown, value3, "destination type");
        await this.actions.selectByValue(this.destinationLocationDropDown, value4, "destination location");
        await this.actions.selectByValue(this.equipmentTypeDropDown, value5, "equipment type dropdown");
    }

    public async clickOnCancel() {
        await this.actions.click(this.cancelButton, "cancel Button");
    }

    public async clickOnDocuments() {
        await this.actions.click(this.documentsTab, "Documents tab");
    }

    public async enterRPMandAmount(text1: string, text2: string) {
        await this.actions.setText(this.rpmTextBox, text1, "RPM");
        await this.actions.setText(this.minimumChargeAmount, text2, "RPM");
    }

    public async clickOnSave() {
        await this.actions.click(this.saveButton, "Save button");
        await this.actions.switchToAlertAndAccept("save alert");
    }

}