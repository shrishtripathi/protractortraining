import {browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder} from 'protractor';
import {BasePage} from "../base.po";
import { ActionLibrary } from "../../utilities/action-library";

export class SafetyHomePage extends BasePage{
    readonly orderNumberTextbox : ElementFinder = element(by.xpath("//input[contains(@id,'textfield')]"));
    readonly safetyBriefingTab:ElementFinder = element(by.xpath("//span[contains(text(),'Safety Briefing')]"));
    readonly okButton: ElementFinder = element(by.xpath("//span[contains(text(),'OK')]"));

    public async mouseOverTab(value:string){
        let  tabElement: ElementFinder =await element(by.xpath("//span[contains(text(),'"+value+"')]"));
        await this.actions.moveMouseToElement(tabElement,"hover on tab value") 
       }
    
    public async clickDropDownValue(value:string){
        let dropdownOption:ElementFinder = await element(by.xpath("//span[contains(text(),'"+value+"')]"));
        await this.actions.click(dropdownOption, "select options");
    }

    public async enterOrderNumber(value:any){
        await this.actions.click(this.orderNumberTextbox, "click on textbox to enter order number");
        await this.actions.setText(this.orderNumberTextbox, value, "enter order number")
    }

    public async selectBriefingType(value:string){
        let dropdown:ElementFinder = await element(by.xpath("//span[contains(text(),'Select Briefing Type:')]/parent::label/following-sibling::div//input[contains(@id,'combobox')]/parent::div/following-sibling::div"));
        await this.actions.click(dropdown, "click drop down for selecting briefing type");

        let dropdownvalue:ElementFinder =await element(by.xpath("//li[contains(text(), '"+value+"')]"));
        await this.actions.click(dropdownvalue, "selectiing drop down value from briefing type")
    }

    public async clickOKButton(){
        await this.actions.click(this.okButton, "click OK Button");
    }

}
