import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper } from "protractor";
import { BasePage } from "../base.po";

export class AssetUpdatePage extends BasePage {
    
    readonly assetNumber: ElementFinder = element(by.id("form:assetNumberSearch"));
    readonly assetNumberList: ElementArrayFinder = element.all(by.xpath("//form[@id='nonUniqueAssetDialogForm']//table[contains(@class,'resultsTable')]/tbody/tr/td/span"));
    readonly changeStatusButton: ElementFinder = element(by.buttonText("Change Status"));
    readonly AssetChangeStatusPopUpSaveButton: ElementFinder = element(by.xpath("//div[contains(@id,'simpleFormDialogs2')]//button[text()='Save ']"));
    readonly assetStatus: ElementFinder = element(by.id("simpleFormDialogs2:newStatus"));
    readonly assetStatusOptions: string = "//select[@id='simpleFormDialogs2:newStatus']/option";
    readonly titleReleasedate: ElementFinder = element(by.xpath("//input[@id='simpleFormDialogs2:newtitleReleaseDate']"));
    readonly titleReleaseTo: ElementFinder = element(by.id("simpleFormDialogs2:titleReleasedTo"));
    readonly retireReasonCode: ElementFinder = element(by.xpath("//*[text()='Retire Reason Code']//ancestor::tr[contains(@class,'icePnlGrdRow')]//td//select"));
    readonly retireReasonCodeOptions: string = "//*[text()='Retire Reason Code']//ancestor::tr[contains(@class,'icePnlGrdRow')]//td//select/option";
    readonly referenceNumber: ElementFinder = element(by.id("simpleFormDialogs2:referenceNumber"));

    public async setTextInInputField(element: ElementFinder, text: string) {
        await this.actions.clearText(element, "Clear text");
        await this.actions.setText(element, text, "Enter text in input field");
    }

    public async setOptionFromDropDown(optionsList: string, optionValue: string, dropDownName: ElementFinder) {      
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.selectByValue(optionsList, optionValue, "select value");
    }

    public async clickOnAssetNumber(text: string) {
        let assetNumberList: ElementFinder = element(by.xpath("//form[@id='nonUniqueAssetDialogForm']//table[contains(@class,'resultsTable')]/tbody/tr/td/span[text()='"+text+"']"));
        await this.actions.click(assetNumberList, "Click on assetNumber");
    }

    public async clickOnButtonInAssetUpdate(button: ElementFinder) {
        await this.actions.click(button, "Click on Button");
    }

    public async verifyAssetsList() {
        let assetsListCount = await this.assetNumberList.count();
        if(assetsListCount > 0) {
            return true;
        } else {
            return false;
        }
    }

}