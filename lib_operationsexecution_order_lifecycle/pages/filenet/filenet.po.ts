import { BasePage } from "../base.po";
import { ElementFinder, element, by } from "protractor";

export class FileNetPage extends BasePage {

    readonly eyeglassIcon: ElementFinder = element(by.xpath("//a[@id='FORM:search']/img"));
    readonly advancedSearch: ElementFinder = element(by.id("FORM:advancedSearchLink"));
    readonly advancedSearchSearchButton: ElementFinder = element(by.id("FORM:FnAdvancedSearch_searchButton_link"));

    public async setSearchCriteria(index: string, propertyName: string, propertyOperator: string, propertyValue: string) {
        let  propertyNameDropDown: ElementFinder = element(by.xpath("//select[contains(@id,'propertyName"+index+"')]")); 
        let  propertyOperatorDropDown: ElementFinder = element(by.xpath("//select[contains(@id,'propertyOperator"+index+"')]")); 
        let  propertyNameDropDownOptions: string = "//select[contains(@id,'propertyName"+index+"')]/option"; 
        let  propertyOperatorDropDownOptions: string = "//select[contains(@id,'propertyOperator"+index+"')]/option"; 
        let  propertyValueInput: ElementFinder = element(by.xpath("//input[contains(@id,'propertyValue"+index+"')]")); 
        await this.actions.waitUntilElementVisible(propertyNameDropDown, "");
        await this.actions.click(propertyNameDropDown, "click on Type dropdown");
        await this.actions.selectByValue(propertyNameDropDownOptions, propertyName, "Type value selection under comments");
        await this.actions.click(propertyOperatorDropDown, "click on Type dropdown");
        await this.actions.selectByValue(propertyOperatorDropDownOptions, propertyOperator, "Type value selection under comments");
        await this.actions.setText(propertyValueInput, propertyValue, "");
    }

    public async clickOnEyeGlassSearchLink() {
        await this.actions.click(this.eyeglassIcon, "Click On Eye Glass Icon");
        await this.waitForPageLoad();
    }

    public async clickOnAdvancedSearchLink() {
        await this.actions.click(this.advancedSearch, "Click On Advanced Search");
        await this.waitForPageLoad();
    }

    public async clickOnSearchButton() {
        await this.actions.click(this.advancedSearchSearchButton, "Click on search button");
        await this.waitForPageLoad();
    }

}