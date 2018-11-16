import { browser, ElementFinder, element, by } from "protractor";
import { BasePage } from "./base.po";
import { By } from 'selenium-webdriver';

export class UnitViewParameterPage extends BasePage {

    readonly buttonSaveParameter = element(by.buttonText('Save Parameter'));
    readonly buttonExit = element(by.buttonText('Exit'));
    readonly prefernceUpdateMessage = element(by.xpath("//*[@id='innerContent']//span"));

    radioandCheckBox(fieldName: string, option: string) {
        var xpath = element(by.xpath("//tr[./td[contains(text(),'" + fieldName + "')]]/following-sibling::tr//*[text()='" + option + "']/preceding-sibling::input"))
        return xpath;
    }

    async getEventMessage() {
        return await this.prefernceUpdateMessage.getText();
    }

    public async enterSelectTypeCode(codeName: string, codeIndex: number, codeValue: string) {
        var textBoxCode = await element(by.xpath("(//td[text()='" + codeName + "']/following-sibling::td//input[@type='text'])[" + codeIndex + "]"));
        await this.actions.waitUntilElementPresenceOf(textBoxCode, "wait for element")
        await textBoxCode.clear();
        await this.actions.setText(textBoxCode, codeValue, "Enter Board text in [" + codeIndex + "] text Box");
        this.waitForLoading()
    }

    public async setParameterRadioAndChechBox(fieldName: string, option: string) {
        await this.actions.click(this.radioandCheckBox(fieldName, option), "Setting parameters");
    }

    public async clickOnSaveParameterButton() {
        await this.buttonSaveParameter.click();
        await this.waitForLoading();
        await this.actions.click(this.buttonSaveParameter, "Click on Save Parameter Button");
        let verifyMessage = await element(by.xpath("//span[@class='iceMsgsError' or @class='iceMsgsInfo']"));
        await this.actions.waitUntilElementPresenceOf(verifyMessage, "wait for element")
    }

    public async clickOnExitButton() {
        await this.actions.waitUntilElementPresenceOf(this.buttonExit)
        await this.actions.click(this.buttonExit, "Click on Parameter Button");
        await this.actions.waitBrowserTitleEqualsTo("Unit View");
    }

    public async selectType(radioButtontnSelectType) {
        let radioButton = element(by.xpath("//input[@type='radio' and @value='" + radioButtontnSelectType + "']"));
        await this.actions.click(radioButton, "Click on " + radioButtontnSelectType + " Select Type");
    }

}