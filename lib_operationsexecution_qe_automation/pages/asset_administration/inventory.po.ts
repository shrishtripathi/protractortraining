import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper, protractor } from "protractor";
import { BasePage } from "../base.po";

export class InventoryPage extends BasePage {

    readonly reorderPoint: ElementFinder = element(by.xpath("//label[contains(text(),'Reorder Point')]//parent :: td/following-sibling :: td//input"));
    readonly itemTextBox: ElementFinder = element(by.xpath("(//table[@summary='Inventory']//td//input)[1]"));
    readonly primaryVendor: ElementFinder = element(by.xpath("(//label[contains(text(),'Primary Vendor')]//parent :: td/following-sibling :: td//input)[1]"));
    readonly saveButton: ElementFinder = element(by.id("toolactions_SAVE-tbb_image"));

    public async enetrItemNumberInInventory(item_Value: string) {
        await this.actions.waitUntilElementVisible(this.itemTextBox,"");
        await this.actions.click(this.itemTextBox,"")
        await this.actions.setText(this.itemTextBox, item_Value, "waiting");
        await this.itemTextBox.sendKeys(protractor.Key.ENTER);

    }
    public async clickOnSaveButton(){
        await this.actions.longWait("...");
        await this.actions.click(this.saveButton,"")
    }
    public async enterPrimaryVendorandHitTab(element: ElementFinder, value: string) {
        await this.actions.clearText(element, "clear");
        await this.actions.setText(element, value, "primary vendor");
        await element.sendKeys(protractor.Key.TAB);

    }

    public async enterValueForRecorderPoint(element: ElementFinder) {
        await this.actions.waitUntilElementVisible(element,"");
        let recorderPoint:string = await element.getAttribute("value");
        let newValue:string = await (Number(recorderPoint.split(":")[0]) +1).toString()
        await this.actions.clearText(element, "clear");
        await this.actions.setText(element, newValue, "primary vendor");

    }
    
    public async clickOnItemNumberHyperlink(item: string) {
        let item_Table: ElementFinder = element(by.xpath("(//tr[@class='tablerow   tcr trodd'])[1]"));
        await this.actions.waitUntilElementVisible(item_Table, "waiting");
        let item_Hyperlink: ElementFinder = element(by.xpath("//tr[@class='tablerow   tcr trodd']//span[text()='" + item + "']"))
        await this.actions.waitUntilElementVisible(item_Hyperlink, "waiting");
        await this.actions.click(item_Hyperlink, "item");
    }

    public async selectInventoryTabs(tab_Name: string) {

        let tab_Element: ElementFinder = element(by.xpath("//li[@role='presentation']//a[@title='" + tab_Name + "']"));
        await this.actions.waitUntilElementVisible(tab_Element,"")
        await this.actions.click(tab_Element, "tab")
    }

    public async verifySavedMessage() {
        let flag:boolean=false;
        try {
            let success_Message: ElementFinder = await element(by.xpath("//td[contains(text(),'Record has been saved')]"));
            await this.actions.waitUntilElementVisible(success_Message, "");
            flag = await success_Message.isDisplayed();
            await this.actions.waitUntilElementInVisible(success_Message,"")
        } catch (error) {
            
        }
       
        return flag;
    }

    public async clickOnInputButton(buttonName: ElementFinder) {
        let dialogWaitXPath: ElementFinder = element(by.xpath("//div[@id='lookup_storeroom-dialog_inner_dialogwait']"));
        await this.actions.waitUntilElementInVisible(dialogWaitXPath, "Inner Dialog not present");
        await this.actions.waitUntilElementPresenceOf(buttonName, "");
        await this.actions.click(buttonName, "Click on Button");
    }


}