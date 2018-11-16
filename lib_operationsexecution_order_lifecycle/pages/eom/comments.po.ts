import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import {BasePage} from "../base.po";
import{By} from 'selenium-webdriver';

export class CommentsPage extends BasePage {

    readonly commentsType: ElementFinder = element(by.xpath("//select[contains(@id,'somCommType')]"));
    readonly locationTextBox: ElementFinder = element(by.xpath("//input[contains(@id,'itxtCommentLocation')]"));
    readonly commentsTextBox: ElementFinder = element(by.xpath("//textarea[contains(@id,'itaCommentText')]"));
    readonly saveComments:ElementFinder=element(by.xpath("//input[@value='Save Comments']"));
    readonly editPenPaperIcon:ElementFinder=element(by.xpath("(//img[contains(@id,'EditActionFocusLink') and contains(@alt,'Info')])[1]" ));
    readonly deleteIcon:ElementFinder=element(by.xpath("(//img[contains(@id,'DeleteActionFocusLink') and contains(@alt,'Delete')])[1]" ));
    readonly commentUnderEdit:ElementFinder=element(by.xpath("(//input[contains(@id,'inptxtCommentText') and not(contains(@style,'display:none;'))])"));
    readonly sucessMessage:ElementFinder= element(by.xpath("//td[text()='	Comments updated successfully ']"));
    readonly commentsText:ElementFinder=element(by.xpath("//span[@id='frmOrderCommentsListing:scOrderCommentDetailsTitle']"));

    public async clickOnPlusSign(number: string) {
        let plusSign: ElementFinder = element(by.id("frmOrderCommentsListing:dtNewCommentTable:"+number+":cmdbtnAdd"));
        await this.actions.click(plusSign, "");
        await this.waitForPageLoad();
    }

    public async commentsTypeValueSelection(value: string) {
        let typeOptions: string = "(//select[contains(@id,'somCommType')]/option)"
        await this.actions.selectByValue(typeOptions, value, "Type value selection under comments");
    }

    public async selectOptionFromType(number: string, value: string) {
        let typeDropDown: ElementFinder = element(by.id("frmOrderCommentsListing:dtNewCommentTable:"+number+":somCommType"));
        await this.actions.click(typeDropDown, "click on Type dropdown");
        let typeOptions: string = "(//select[@id='frmOrderCommentsListing:dtNewCommentTable:"+number+":somCommType']/option)"
        await this.actions.selectByValue(typeOptions, value, "Type value selection under comments");
    }

    public async getTypeDropdownValue(number: string) {
        let typeDropDown: ElementFinder = element(by.id("frmOrderCommentsListing:dtNewCommentTable:"+number+":somCommType"));
        return await typeDropDown.getAttribute("value");
    }

    public async setLocation(locationValue: string) {
       await this.actions.shortWait("wait after enter text ");
        await this.actions.setText(this.locationTextBox, locationValue, "Set location");
        await this.actions.shortWait("wait after enter text ");
    }

    public async hitTab() {
        await this.actions.SendKeysTab("Tab After entering location");
        await this.actions.shortWait("wait after enter text ");
    }

    public async setComments(commentValue: string) {
        await this.actions.setText(this.commentsTextBox, commentValue, "Set location");
        await this.actions.setText(this.commentsTextBox, commentValue, "Set location");
    }

    public async setTextInCommentField(number: string, commentValue: string) {
        let commentsTextField: ElementFinder = element(by.xpath("//textarea[@id='frmOrderCommentsListing:dtNewCommentTable:"+number+":itaCommentText']"));
        await this.actions.setText(commentsTextField, commentValue, "Set location");
    }

    public async clickSaveComments() {
        await this.actions.click(this.saveComments,"click Save Comments");       
    }

    
    public async clickEditPenPaperIcon() {
        await this.actions.click(this.editPenPaperIcon,"click  edit Pen Paper Icon");
       
    }
    public async selectDropdownOption(){
      let  selectedOption:ElementFinder= await element(by.xpath("(//select[contains(@id,'somCommentType')])[1]/option[contains(@selected,'selected')]"));
      let selectedValue:string=await  selectedOption.getAttribute("value");
      console.log("value :"+selectedValue);
      let dropdownOptions:string ="(//select[contains(@id,'somCommentType')])[1]/option"
    let dropdownOptionsEle:ElementArrayFinder= element.all(by.xpath(dropdownOptions));
    
    let dropdownOptionsCount:number= await dropdownOptionsEle.count();
    for(let index=0;index<=dropdownOptionsCount;index++){
      let currentvalue:string=await  dropdownOptionsEle.get(index).getAttribute("value");
      console.log("currentvalue :"+currentvalue);
      if(currentvalue!=selectedValue){
        await this.actions.selectByValue(dropdownOptions,currentvalue,"drop down selection under");
        return true;
      }

    }

    }
    public async enterCommentsInEditLine(value:string){
     let commentsEle:ElementFinder=await element(by.xpath("(//input[contains(@id,'inptxtCommentText') and not(contains(@style,'display:none;'))])"));
     await this.actions.setText(commentsEle,value,'enterCommentsInEditLine');
    }
    public async deleteComments(){
        let flag:boolean=false;
        let nextPage:ElementFinder= element(by.xpath("//span[@title='Next Page']"));
        let lastPage:ElementFinder=element(by.id("frmOrderCommentsListing:lOrderCommentsListingLastPageSpan"));
        let lastpageCount:number=parseInt(await lastPage.getText());
        console.log("last page "+lastpageCount);
        let count=0;
        do {
            try {
                flag=await  this.deleteIcon.isDisplayed();
            } catch (error) {
                console.log("delete icon is not displayed");
            }
            if(flag){
                await this.actions.click(this.deleteIcon,"select delete");
                break;
            }
            else{
                await this.actions.click(nextPage,"go to next page");
                count++;
            }
        } while (count<lastpageCount);
        
    }
    public async verifyCommentsSucessMessage(){
        let text:string=null;
        try {
            text=await this.sucessMessage.getText();
        } catch (error) {
            console.log("sucess Mesage "+error);
        }
        return await text;
    }

    public async verifyCommentsTab(){
    let message= await this.actions.getText(this.commentsText,"Comments");
    return message;
    }
    public async clickonSaveCommentsIfSaveButtonExists() {
            if(await this.saveComments.isPresent()){
                await this.actions.click(this.saveComments,"click Save Comments"); 
            }
    }
    
}