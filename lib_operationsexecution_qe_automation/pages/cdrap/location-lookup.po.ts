import { BasePage } from "../base.po";
import { ElementFinder, element, by } from "protractor";
import { ElementArrayFinder } from "protractor/built/element";

export class LocationLookUpPage extends BasePage {

    readonly locationTypeDropDown:ElementArrayFinder=element.all(by.xpath("(//select[@name='selectedLocationTypeId']/option)"));
    readonly hiringCenterDropDown:ElementArrayFinder=element.all(by.xpath("(//select[@name='selectedLocationId']/optgroup/option)"))

    public async selectLocationType(location:string){
        await this.actions.selectByVisibleText(this.locationTypeDropDown,location,"select "+location);
    }
    public async selectHiringCenterType(hiring:string){
        await this.actions.selectByVisibleText(this.hiringCenterDropDown,hiring,"select "+hiring);
    }
    public async verifyDetails(type:string){
        let flag:boolean=false;
        try {
            let xpath=element(by.xpath("//b[contains(text(),'"+type+"')]"));
            await this.actions.waitUntilElementVisible(xpath,"wait");
            flag=await this.actions.isElementDisplayed(xpath,"wait");
        } catch (error) {
            
        }
        return await flag;
    }

}