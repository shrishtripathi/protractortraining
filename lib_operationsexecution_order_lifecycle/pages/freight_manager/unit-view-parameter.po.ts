import { element, by, browser } from "protractor";
import { BasePage } from "../base.po";

export class UnitViewParameterPage extends BasePage {

    readonly buttonSaveParameter = element(by.buttonText('Save Parameter'));
    readonly buttonExit = element(by.buttonText('Exit'));
    readonly prefernceUpdateMessage = element(by.xpath("//*[@id='innerContent']//span"));
    readonly modifyDivisionButton = element(by.xpath("//button[text()='Modify Division']"));
    readonly availableFieldsDropDown = element.all(by.xpath("(//select[contains(@style,'height')])[1]/option"))
    readonly plusButton = element(by.className("lnfPlusButton iceCmdLnk"));
    readonly selectedFieldsDropDown = element.all(by.xpath("(//select[contains(@style,'height')])[2]/option"));
    size:number=0;

    public async radioandCheckBox(fieldName: string, option: string) {
        var xpath = element(by.xpath("//tr[./td[contains(text(),'" + fieldName + "')]]/following-sibling::tr//*[text()='" + option + "']/preceding-sibling::input"))
        return xpath;
    }

    public async getEventMessage() {
        return await this.prefernceUpdateMessage.getText();
    }

    public async enterSelectTypeCode(codeName: string, codeIndex: number, codeValue: string) {
        var textBoxCode = await element(by.xpath("(//td[text()='" + codeName + "']/following-sibling::td//input[@type='text'])[" + codeIndex + "]"));
        await this.actions.waitUntilElementPresenceOf(textBoxCode, "wait for element")
        await textBoxCode.clear();
        await this.actions.setText(textBoxCode, codeValue, "Enter Board text in [" + codeIndex + "] text Box");
    }

    public async setParameterRadioAndChechBox(fieldName: string, option: string) {
        await this.actions.click(await this.radioandCheckBox(fieldName, option), "Setting parameters");
    }

    public async clickOnSaveParameterButton() {
        await this.buttonSaveParameter.click();
        await this.actions.click(this.buttonSaveParameter, "Click on Save Parameter Button");
        let verifyMessage = await element(by.xpath("//span[@class='iceMsgsError' or @class='iceMsgsInfo']"));
        await this.actions.waitUntilElementPresenceOf(verifyMessage, "wait for element")
    }

    public async clickOnExitButton() {
        await this.actions.waitUntilElementPresenceOf(this.buttonExit)
        await this.actions.click(this.buttonExit, "Click on Parameter Button");
        this.actions.waitBrowserTitleEqualsTo("Unit View");
    }

    public async selectType(radioButtontnSelectType) {
        let radioButton = element(by.xpath("//input[@type='radio' and @value='" + radioButtontnSelectType + "']"));
        await this.actions.click(radioButton, "Click on " + radioButtontnSelectType + " Select Type");
    }

    public async selectDivision(divisionType) {
        try {
            await this.actions.click(this.modifyDivisionButton, "modifyDiviison");
            await browser.switchTo().activeElement();
            await this.actions.click(element(by.xpath("//option[text()='" + divisionType + "']")), "")
            await this.actions.click(element(by.xpath("//*[text()='Ok']")), "")
        } catch (error) {
            console.log("error " + error)
        }
    }

    public async selectCheckBoxOption(fieldName: string, option: string){
        let xpath = element(by.xpath("//tr[./td[contains(text(),'" + fieldName + "')]]/following-sibling::tr//*[text()='" + option + "']/preceding-sibling::input"))
        if (!await xpath.isSelected()) {
            await xpath.click();
        }

    }

    public async selectValueFromAvailableFieldsDropDown(value:string){
       
        this.size = await this.availableFieldsDropDown.count();
       for (let index = 0; index < this.size; index++) {
           let dropDownValue = await this.availableFieldsDropDown.get(index).getText();
           console.log(this.size)
           if(dropDownValue.trim() === value){
               await this.availableFieldsDropDown.get(index).click();
               await this.plusButton.click();
               this.size--;
               await this.waitForActionToComplete();
               console.log("clicked")
           }
           
       }
   }

   public async selectValueFromSelectedFieldsDropDown(value:string){
      
        this.size = await this.selectedFieldsDropDown.count();
       let flag = false;
       for (let index = 0; index < this.size; index++) {
           let dropDownValue = await this.selectedFieldsDropDown.get(index).getText();
           if(dropDownValue.trim() === value){
               console.log("Passed");
               flag = true;
           }      
       }
       return await flag;
   }

}