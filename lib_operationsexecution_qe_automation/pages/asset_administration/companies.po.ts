import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, ElementHelper, protractor } from "protractor";
import { BasePage } from "../base.po";

export class Companies extends BasePage {

    readonly companyInputBox=element(by.xpath("//input[@id='m8ee1358-tb']"));
    readonly psVendorCheckBox=element(by.xpath("//img[@alt='PS Vendor: unchecked']"));
    readonly companyTypeSearchIcon=element(by.xpath("//img[@id='m7132abfc-img']"));
    readonly vendor=element(by.xpath("//span[text()='V']"));
    readonly saveIcon=element(by.id("toolactions_SAVE-tbb_image"))


    public async verifyIsVendorCheckBoxCheked(){
        let xpath=element(by.xpath("//img[@alt='PS Vendor: checked']"));
        let flag:boolean=false;
        try {
            await this.actions.waitUntilElementVisible(xpath,"wait till checkbox is checked");
            flag=true;
        } catch (error) {
            
        }
        return await flag;
    }
}