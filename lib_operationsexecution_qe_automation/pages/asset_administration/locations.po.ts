import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper, protractor } from "protractor";
import { BasePage } from "../base.po";
import { CommonFunctions } from "../../utilities/common-functions";


export class LocationsPage extends CommonFunctions {

    readonly newLocation_Icon: ElementFinder = element(by.xpath("//img[contains(@id, 'toolactions_INSERT-tbb_image')]"));
    readonly locationTextbox: ElementFinder = element(by.xpath("//input[contains(@id,'m8ee1358-tb') and contains(@class, 'fld text text  fld fld_req')]"));
    readonly typeMagnifyingGlass_Icon: ElementFinder = element(by.xpath("//img[contains(@id,'m91e742e2-img') and contains(@class,'dButton ')]"));
    readonly vendorHyperLink: ElementFinder = element(by.xpath("//span[text()='VENDOR']"));
    readonly saveButton: ElementFinder = element(by.xpath("//img[@id='toolactions_SAVE-tbb_image']"));
    readonly successMessage: ElementFinder = element(by.xpath("//td[contains(text(),'Record has been saved')]"));


    public async clickNewLocationIcon() {
        await this.actions.click(this.newLocation_Icon, 'click new location icon');
    }

    public async clickOnSaveButton(buttonName: ElementFinder) {
        await this.actions.waitUntilElementVisible(buttonName, "");
        await this.actions.click(buttonName, "Click on Button");

    }
    public async enterLocation() {
        let location = await this.randomNameGenarator(5);
        await this.actions.setText(this.locationTextbox, location, "location")
    }

    public async selectFromType() {
        await this.actions.waitUntilElementClickable(this.typeMagnifyingGlass_Icon, '');
        await this.actions.click(this.typeMagnifyingGlass_Icon, 'click type magnifying glass');
        await this.actions.waitUntilElementVisible(this.vendorHyperLink, "wait")
        await this.actions.click(this.vendorHyperLink, "select from type")
        await this.actions.waitUntilElementInVisible(this.vendorHyperLink, "select from type")
    }

    public async verifySavedMessage() {
        await this.actions.waitUntilElementVisible(this.successMessage, "");
        let success_MessageDisplayed: boolean = await this.successMessage.isPresent();
        if (success_MessageDisplayed) {
            return true;
        }
        return false;
    }

}
