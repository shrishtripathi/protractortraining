import { by, element, ElementFinder, ExpectedConditions, protractor } from 'protractor';
import { BasePage } from '../base.po';

export class ContainerChassisAttachmentPage extends BasePage {
    verifyMessage: ElementFinder;
    readonly prefixCode = element(by.id("form:trailerBeamPfx"));
    readonly equipmentNumber = element(by.id("form:trailerBeamNbr"));
    readonly searchButton = element(by.id("form:btnSearchBeam"));
    readonly customerCode = element(by.id("form:beamToCusCode"));
    readonly cityOrStateCode = element(by.xpath("//*[@class='iceOutLbl' and contains(.,'City/State')]/following-sibling::input"));
    readonly beamButton = element(by.buttonText("Beam"));

    public async enterPrefixCodeAndEquipmentNumber(equipmentNumber, prefixCode) {
        await this.actions.clearText(this.prefixCode, "Clear Prefix Code Text Box")
        await this.actions.setText(this.prefixCode, prefixCode, "Enter Prefix Code");
        await this.actions.clearText(this.equipmentNumber, "Clear Equipment Text Box");
        await this.actions.setText(this.equipmentNumber, equipmentNumber, "Enter Prefix Code");
    };

    public async clickOnSearchButtonOnContainerChassisPage() {
        await this.actions.click(this.searchButton, "click On Search Button On Container/Chassis Page");
    };

    public async enterCustomerCodeAndCity() {
        await this.actions.clearText(this.customerCode, "Clear Customer Code Text Box");
        await this.actions.setText(this.customerCode, "CCBDA", "Enter the Customer Code");
        await this.actions.click(this.cityOrStateCode, "Click On City/State Code");
        await this.actions.shortWait("Short Wait to populate city code")
    };

    public async clickOnBeamButton() {
        await this.actions.click(this.beamButton, "Click On Beam Button");
    };

    public async validateSuccessMessage() {
        let message: string;
        this.verifyMessage = await element(by.xpath("//span[@class='iceMsgsInfo']"));
        await this.actions.waitUntilElementVisible(this.verifyMessage,"")
        message = await this.actions.getText(await this.verifyMessage, "getting the success message")
        return message;
    };
}