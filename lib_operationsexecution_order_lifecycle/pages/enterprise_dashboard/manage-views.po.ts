import { by, element, ElementFinder } from 'protractor';
import { BasePage } from "../base.po";

export class ManageViewsPage extends BasePage {
    readonly manageView: ElementFinder = element(by.xpath("//div[text()='Manage Views']"));
    readonly createNewView: ElementFinder = element(by.xpath("//span[text()='Create New View']"));
    readonly viewNameInputField: ElementFinder = element(by.xpath("//input[@id='jbNewViewName-inputEl']"));
    readonly visibility: ElementFinder = element(by.xpath("//span[text()='Visibility*:']//parent::span//parent::label//parent::div//div[@role='presentation']//div//div[not(contains(@data-ref,'inputWrap'))]"))
    readonly viewOption=element(by.xpath("//span[text()='View Option*:']//parent::span//parent::label//parent::div//div[@role='presentation']//div//div[not(contains(@data-ref,'inputWrap'))]"));
    readonly userId:ElementFinder=element(by.xpath("//span[text()='User Input*:']//parent::span//parent::label//parent::div//div//input"));
    readonly saveButton:ElementFinder=element(by.xpath("//span[text()='Save']//ancestor::a"));
        
    public async clickOnCreateNewView() {
        await this.actions.click(this.createNewView, "Clicking on creaate new view");
    }

    public async setViewName(textToEnter: string) {
        await this.actions.setText(this.viewNameInputField, textToEnter, "Enter view name");
    }

    public async setVisibility(optionToSelect:string) {
        await this.actions.click(this.visibility,"Click on visibility");
        let options=element(by.xpath("//li[text()='"+optionToSelect+"']"))
        await this.actions.click(options,"Selecting option");
    }

    public async setViewOption(optionToSelect:string) {
        await this.actions.click(this.viewOption,"Click on view option");
        let options=element(by.xpath("//li[text()='"+optionToSelect+"']"))
        await this.actions.click(options,"Selecting option");
    }

    public async setUserId(textToEnter:string){
        await this.actions.setText(this.userId,textToEnter,"ENter user id");
    }

    public async clickOnSaveButton() {
        await this.actions.click(this.saveButton, "Clicking on save button");
    }

    public async getViewText(viewName:string){
        let view=element(by.xpath("//label[text()='"+viewName+"']"));
        return await this.actions.getText(view,"View name");
    }
}

