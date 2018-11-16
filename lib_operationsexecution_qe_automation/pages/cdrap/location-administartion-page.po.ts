import { BasePage } from "../base.po";
import { ElementFinder, element, by, browser, ElementArrayFinder, protractor } from "protractor";

export class LocationAdministrationPage extends BasePage {

    readonly reportTypeDropDown: ElementFinder = element(by.xpath("//select[@name='reportConfigView.reportTid']"));
    readonly reportTypeDropDownOptions: string = "//select[@name='reportConfigView.reportTid']/option";
    readonly categoryTypeDropDown: ElementFinder = element(by.xpath("//select[@name='selectedCategory']"));
    readonly categoryDropDownOptions: string = "//select[@name='selectedCategory']/option";
    readonly chargeTypeDropDown: ElementFinder = element(by.xpath("//select[@name='selectedChargeType']"));
    readonly chargeTypeDropDownOptions: string = "//select[@name='selectedChargeType']/option";
    readonly categoriesCategoryTypeDropDown: ElementFinder = element(by.xpath("//select[@name='category']"));
    readonly categoriesCategoryDropDownOptions: string = "//select[@name='category']/option";
    readonly parentChargeTypeDropDown: ElementFinder = element(by.xpath("//select[@name='chargeType']"));
    readonly parentChargeTypeDropDownOptions: string = "//select[@name='chargeType']/option";
    readonly categoryName: ElementFinder = element(by.xpath("//input[@name='categoryName']"));
    readonly reportAgencyDropDown: ElementFinder = element(by.xpath("//select[@name='reportConfigView.reportAgencyTid']"));
    readonly reportAgencyDropDownOptions: string = "//select[@name='reportConfigView.reportAgencyTid']/option";
    readonly decisionCodeDropDown: ElementFinder = element(by.xpath("//select[@name='jbhDecisionCodeView.decisionTid']"));
    readonly decisionCodeDropDownOptions: string = "//select[@name='jbhDecisionCodeView.decisionTid']/option";
    readonly decisionCodesTab: ElementFinder = element(by.xpath("//span[text()='Decision Codes']/parent::a"));
    readonly otherValuesTab: ElementFinder = element(by.xpath("//span[text()='Other Values']/parent::a"));
    readonly consumerReportsTab: ElementFinder = element(by.xpath("//span[text()='Consumer Reports']/parent::a"));
    readonly criminalAdminTab:  ElementFinder = element(by.xpath("//span[text()='Criminal Admin']/parent::a"));
    readonly categoriesTab: ElementFinder = element(by.xpath("//span[text()='Categories']/parent::a"));
    readonly nameInput: ElementFinder = element(by.xpath("//input[@name='jbhDecisionCodeView.name']"));
    readonly descriptionInput: ElementFinder = element(by.xpath("//input[@name='jbhDecisionCodeView.description']"));
    readonly statustDropDown: ElementFinder = element(by.xpath("//select[@name='jbhDecisionCodeView.statusTid']/option[@selected='selected']"));
    readonly defaultAgency: ElementFinder = element(by.xpath("//input[@name='reportConfigView.defaultAgency']"));
    readonly updateButton:ElementFinder=element(by.xpath("//input[@name='update']"));
    readonly location:ElementArrayFinder= element.all(by.xpath("//select[@name='locationView.id']//option"));
    readonly address2:ElementFinder=element(by.xpath("//input[@name='locationView.address2']"));
    readonly divisionsTab:ElementFinder=element(by.xpath("//span[text()='Divisions']"));
    readonly addButton:ElementFinder=element(by.xpath("//input[@name='add']"));
    readonly businessUnitDropdown:ElementArrayFinder=element.all(by.xpath("//select[@name='businessUnitView.id']//option"));
    readonly deleteButton:ElementFinder=element(by.xpath("//input[@name='delete']"));
    readonly nameField:ElementFinder=element(by.xpath("//input[@name='businessUnitView.name']"));
    readonly descriptionField:ElementFinder=element(by.xpath("//input[@name='businessUnitView.description']"));
    readonly advertisingTypesTab:ElementFinder=element(by.xpath("//span[text()='Advertising Types']"));
    readonly mediaTypeDropdown:ElementArrayFinder=element.all(by.xpath("//select[@name='mediaTypeId']//option"));
    readonly mediaTypeName:ElementFinder=element(by.xpath("//input[@name='mediaType']"));
    readonly statesTab:ElementFinder=element(by.xpath("//span[text()='States']"));
    readonly mediaStateName:ElementFinder=element(by.xpath("//input[@name='mediaState']"));
    readonly sourcesTab:ElementFinder=element(by.xpath("//span[text()='Sources']"));
    readonly mediaSourceName:ElementFinder=element(by.xpath("//input[@name='mediaSource']"));
    readonly minQualificationsTab:ElementFinder=element(by.xpath("//span[text()='Min Qualifications']"));
    readonly minQualificationsDropDown: ElementFinder = element(by.xpath("//select[@name='mgmtConstraintView.mgmtConstraintTid']"));
    readonly minQualificationsDropDownOptions: string = "//select[@name='mgmtConstraintView.mgmtConstraintTid']/option";
    readonly valuefield:ElementFinder=element(by.xpath("//input[@name='mgmtConstraintView.constraint']"));
    readonly otherValuesCategoryDropDown: ElementFinder = element(by.xpath("//select[@name='typeBean.parentId']"));
    readonly otherValuesCategoryDropDownOptions: string = "//select[@name='typeBean.parentId']/option";
    readonly otherValuesValueDropDown: ElementFinder = element(by.xpath("//select[@name='typeBean.typeNbr']"));
    readonly otherValuesValueDropDownOptions: string = "//select[@name='typeBean.typeNbr']/option";
    readonly otherValuesNameInput: ElementFinder = element(by.xpath("//input[@name='typeBean.name']"));
    readonly otherValuesDescriptionInput: ElementFinder = element(by.xpath("//input[@name='typeBean.description']"));

    public async setOptionFromDropDown(optionsList: string, option: string, dropDownName: ElementFinder) {
        await this.actions.click(dropDownName, "Click on Tab");
        await this.actions.selectByValue(optionsList, option, "select value");
    }

    public async verifyIsReportAdded(reportType: string) {
        let report: ElementFinder = element(by.xpath("//table[@class='striped hoverHighlight']/tbody/tr/td[text()='" + reportType + "']"));
        return await report.isPresent();
    }

    public async verifyReportTextAtBottom(text: string) {
        let xpath:ElementFinder = element(by.xpath("//input[@value='"+text+"']"));
        return await xpath.isPresent();
    }

    public async clickOnDeleteHyperlink(reportType: string) {
        let deleteHyperLink: ElementFinder = element(by.xpath("//table[@class='striped hoverHighlight']/tbody/tr[" + await this.getRowNumber(reportType) + "]/td[4]/a[2]"));
        await this.actions.click(deleteHyperLink, "Click on delete hyperlink");
        await this.actions.switchToAlertAndAccept("Click on OK button");
    }

    public async clickOnEditHyperlink(reportType: string) {
        let editHyperLink: ElementFinder = element(by.xpath("//table[@class='striped hoverHighlight']/tbody/tr[" + await this.getRowNumber(reportType) + "]/td[4]/a[1]"));
        await this.actions.click(editHyperLink, "Click on delete hyperlink");
    }

    public async getRowNumber(rowData: string) {
        let noOfRows: ElementArrayFinder = element.all(by.xpath("//table[@class='striped hoverHighlight']/tbody/tr/td[1]"));
        let count = await noOfRows.count();
        let returnVal: number;
        for (let i = 0; i < count; i++) {
            let rowText: string = await noOfRows.get(i).getText();
            if (rowText === rowData) {
                returnVal = i + 1;
                break;
            }
        }
        console.log("returnVal:" + returnVal);
        return returnVal;
    }

    public async selectLocationDropdown(valueToSelect:string){
        await this.actions.SelectByVisibleText(this.location,valueToSelect,'selecting value from location dropdown')
    }

    public async setAddressAndZip(fieldName:string,textToEnter:string){
        let xpath=element(by.xpath("//input[@name='locationView."+fieldName+"']"));
        await this.actions.clearText(xpath,"clearing text");
        await this.actions.setText(xpath,textToEnter,'Setting address and zip code');  
    }

    public async verifyAddress(){
       return await this.address2.getAttribute("value");
    }

    public async clearAddress(){
        await this.actions.clearText(this.address2,'Clearing the address field');
    }

    public async click(elementToClick:ElementFinder){
        await this.actions.click(elementToClick,'Clicking on the Element')
    }

    public async setNameAndDescription(fieldName:string,textToEnter:string){
        let xpath=element(by.xpath("//input[@name='businessUnitView."+fieldName+"']"));
        await this.actions.setText(xpath,textToEnter,'Setting Name and Description');
    }

    public async selectBusinessUnitDropdown(valueToSelect:string){
        await this.actions.SelectByVisibleText(this.businessUnitDropdown,valueToSelect,'selecting value from Business Units dropdown')
    }

    public async acceptingAlert() {
        try {
            let EC = protractor.ExpectedConditions;
            if(await browser.wait(EC.alertIsPresent(), 5000))
            await this.actions.switchToAlertAndAccept("");
            await this.actions.mediumWait("");
            
          }
            catch (error) {
               console.log("Alert", error)
        }
    }

    public async verifyName(){
        return await this.nameField.getAttribute("value");
    }

     public async verifyDescription(){
        return await this.descriptionField.getAttribute("value");
    }

    public async selectMediaTypeDropdowns(fieldName:string,valueToSelect:string){
        let xpath:ElementArrayFinder=element.all(by.xpath("//select[@name='"+fieldName+"']//option"));
        await this.actions.SelectByVisibleText(xpath,valueToSelect,'selecting value from Media Typr dropdown')
    }

    public async verifyMediaTypeName(){
        return await this.mediaTypeName.getAttribute("value");
    }

    public async verifyMediaStateName(){
        return await this.mediaStateName.getAttribute("value");
    }

    public async verifyMediaSourceName(){
        return await this.mediaSourceName.getAttribute("value");
    }

    public async verifyValueField(){
        return await this.valuefield.getAttribute("value");
    }

}