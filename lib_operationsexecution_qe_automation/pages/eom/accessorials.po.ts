import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { BasePage } from "../base.po";

export class AccessorialsPage extends BasePage {

    readonly quantityTextBox: ElementFinder = element(by.xpath("//table[@id='frmAccessorialMaint:dtNewAccessorialsTable']//td/input[contains(@id,'Table:0:inpQuantity')]"));
    readonly unitRateTextBox: ElementFinder = element(by.xpath("//table[@id='frmAccessorialMaint:dtNewAccessorialsTable']//td/input[contains(@id,'Table:0:inpUnitRate')]"));
    readonly authRefTextBox: ElementFinder = element(by.xpath("//table[@id='frmAccessorialMaint:dtNewAccessorialsTable']//td/input[contains(@id,'Table:0:inptxtNewAuthRefNbr')]"));
    readonly authFNameTextBox: ElementFinder = element(by.xpath("//table[@id='frmAccessorialMaint:dtNewAccessorialsTable']//td/input[contains(@id,'Table:0:inptxtNewAuthFName')]"));
    readonly authLNameTextBox: ElementFinder = element(by.xpath("//table[@id='frmAccessorialMaint:dtNewAccessorialsTable']//td/input[contains(@id,'Table:0:inptxtNewAuthLName')]"));
    readonly accessorialsTab: ElementFinder = element(by.xpath("//a[contains(.,'Accessorials')]"));
    readonly detialsTab: ElementFinder = element(by.xpath("//a[contains(.,'Details')]"));

    public async accessorialsTabClick() {
        await this.actions.click(this.accessorialsTab, "accessorials tab click")
    }

    public async stopDropDownValueSelection(value: string) {
        let StopDropDown: ElementFinder = element(by.xpath("//table[@id='frmAccessorialMaint:dtNewAccessorialsTable']//td/select[contains(@id,'Table:0:somNewStop')]"));
        let StopDropDownOptions: string = "(//table[@id='frmAccessorialMaint:dtNewAccessorialsTable']//td/select[contains(@id,'Table:0:somNewStop')]/option)";
        await this.actions.click(StopDropDown, "StopDropDown selection")
        await this.actions.selectByValue(StopDropDownOptions, value, "Monitors value selection");
    }

    public async chargeCodeDropDownValueSelection(value: string) {
        let chargeCodeDropDown: ElementFinder = element(by.xpath("//table[@id='frmAccessorialMaint:dtNewAccessorialsTable']//td/select[contains(@id,'Table:0:somNewChargeCode')]"));
        let chargeCodeDropDownOptions: string = "(//table[@id='frmAccessorialMaint:dtNewAccessorialsTable']//td/select[contains(@id,'Table:0:somNewChargeCode')]/option)";
        await this.actions.click(chargeCodeDropDown, "StopDropDown selection")
        await this.actions.selectByValue(chargeCodeDropDownOptions, value, "Monitors value selection");
    }

    public async setNewAccessorialFields(quantity: string, unitRate: string, authRef: string, authFName: string, authLName: string) {
        await this.actions.clearText(this.quantityTextBox, "quantity text clear");
        await this.actions.setText(this.quantityTextBox, quantity, "Set quantity");
        await this.actions.clearText(this.quantityTextBox, "quantity text clear");
        await this.actions.setText(this.quantityTextBox, quantity, "Set quantity");
        await this.actions.clearText(this.unitRateTextBox, "unit rate text clear");
        await this.actions.setText(this.unitRateTextBox, unitRate, "Set unitRate");
        await this.actions.setText(this.authRefTextBox, authRef, "Set authRef");
        await this.actions.setText(this.authFNameTextBox, authFName, "Set authFName");
        await this.actions.setText(this.authLNameTextBox, authLName, "Set authLName");
    }
    
    public async detialsTabClick() {
        await this.actions.click(this.detialsTab, "details tab click");
    }

}