import { ElementFinder, ElementArrayFinder } from "../../node_modules/protractor/built/element";
import { element, by } from "protractor";
import { BasePage } from "../../pages/base.po";

export class NewViewPage extends BasePage {

    readonly viewNameTextBox: ElementFinder = element(by.xpath("//input[@name='title']"));
    readonly userInputTextBox: ElementFinder = element(by.xpath("//input[@name='userInput']"));
    readonly saveButton: ElementFinder = element(by.xpath("//span[contains(text(),'Save')]"));

    public async fillViewNameTextBox(value:string) {
        await this.actions.setText(this.viewNameTextBox, value, "Setting Value To ViewNameTextBox");
    }

    public async fillUserInputTextBox(value:string) {
        await this.actions.setText(this.userInputTextBox, value, "Setting Value To UserInputTextBox");
    }

    public async clickOnSaveButton() {
        await this.actions.click(this.saveButton, "Clicking On Save Button");
    }

}