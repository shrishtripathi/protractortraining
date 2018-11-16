import {browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder} from 'protractor';
import {BasePage} from "../base.po";
import { ActionLibrary } from "../../utilities/action-library";
import {SafetyHomePage} from "./safety-briefing-home.po";

export class HighValueBriefingPage extends BasePage{
    readonly nextButton: ElementFinder= element(by.xpath("//span[contains(text(), 'Next')]"));
    readonly thisIsTestCheckBox: ElementFinder = element(by.xpath("//*[@id='checkbox-1169-inputEl']"));   
    readonly saveButton:ElementFinder = element(by.xpath("//span[contains(text(),'Save')]"));
    readonly trailerTextBox: ElementFinder= element(by.xpath("//*[@id='textfield-1146-inputEl']"));
    readonly trailerPrefixTextBox: ElementFinder = element( by.xpath("//*[@id='textfield-1144-inputEl']"));
    readonly OkSaveButton: ElementFinder = element(by.xpath("//*[@id='button-1005-btnInnerEl']")); 

    public async clickNextButton(){
        await this.actions.click(this.nextButton, "click next button");
    }

    public async clickTestCheckBox(){
        await this.actions.click(this.thisIsTestCheckBox, " click this is test checkbox");
    }

    public async clickSaveButton(){
        await this.actions.click(this.saveButton, " click save button");
    }

    public async enterTrailerPrefix(value:string){
        await this.actions.click(this.trailerPrefixTextBox, "click on textbox to enter trailer prefix");
        await this.actions.setText(this.trailerPrefixTextBox, value, "enter trailer prefix")
    }

    public async enterTrailer(value:any){
        await this.actions.click(this.trailerTextBox, "click on textbox to enter trailer number");
        await this.actions.setText(this.trailerTextBox, value, "enter trailer number")
    }

    public async clickOKButton(){
        await this.actions.click(this.OkSaveButton, "Click succes OK button")
    }

    public async getOrderNumber(){
        this.actions.shortWait("short wait for loading the table");
        let ordernumber:ElementFinder = element(by.xpath("//*[@id='gridview-1216-record-47']/tbody/tr[1]/td[2]/div"));
        return await this.actions.getText(ordernumber, "get order number from the table");
    }

}